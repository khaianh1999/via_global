"use client";

import { useEffect, useRef } from "react";
import { cities, hub, land } from "@/components/home/globe/land";

type Vec = [number, number, number];

const RAD = Math.PI / 180;
const TILT = 14 * RAD;
const AUTO_SPEED = 5; // degrees per second
const START = -hub[0]; // start with Vietnam facing the viewer

function toVec(lon: number, lat: number): Vec {
  const φ = lat * RAD;
  const λ = lon * RAD;
  return [Math.cos(φ) * Math.sin(λ), Math.sin(φ), Math.cos(φ) * Math.cos(λ)];
}

function inside(lon: number, lat: number, ring: [number, number][]) {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

function buildDots() {
  const dots: Vec[] = [];
  const step = 2.4;
  for (let lat = -62; lat <= 82; lat += step) {
    const lonStep = step / Math.max(Math.cos(lat * RAD), 0.2);
    for (let lon = -180; lon < 180; lon += lonStep) {
      if (land.some((ring) => inside(lon, lat, ring))) dots.push(toVec(lon, lat));
    }
  }
  return dots;
}

// Great-circle path between two points, lifted off the surface in the middle.
function buildArc(from: [number, number], to: [number, number]) {
  const a = toVec(...from);
  const b = toVec(...to);
  const ω = Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const lift = 0.06 + 0.24 * (ω / Math.PI);
  const points: Vec[] = [];
  const samples = 72;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const s = Math.sin(ω);
    const k1 = Math.sin((1 - t) * ω) / s;
    const k2 = Math.sin(t * ω) / s;
    const h = 1 + Math.sin(Math.PI * t) * lift;
    points.push([(a[0] * k1 + b[0] * k2) * h, (a[1] * k1 + b[1] * k2) * h, (a[2] * k1 + b[2] * k2) * h]);
  }
  return points;
}

export function GlobeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dots = buildDots();
    const arcs = cities.map((city, index) => ({
      points: buildArc(hub, city),
      offset: index * 0.37,
      duration: 3.2 + (index % 4) * 0.7,
    }));
    const markers = [hub, ...cities].map(([lon, lat]) => toVec(lon, lat));

    let size = 0;
    let dpr = 1;
    let rotation = START;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let visible = true;
    let frame = 0;
    let previous = performance.now();
    let clock = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = rect.width;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.4;
      const unit = R / 180;
      const cr = Math.cos(rotation * RAD);
      const sr = Math.sin(rotation * RAD);
      const ct = Math.cos(TILT);
      const st = Math.sin(TILT);

      const project = (v: Vec): Vec => {
        const x = v[0] * cr + v[2] * sr;
        const z = v[2] * cr - v[0] * sr;
        const y = v[1] * ct - z * st;
        const z2 = v[1] * st + z * ct;
        return [cx + x * R, cy - y * R, z2];
      };
      const occluded = (p: Vec) => {
        if (p[2] >= 0) return false;
        const dx = (p[0] - cx) / R;
        const dy = (p[1] - cy) / R;
        return dx * dx + dy * dy < 1;
      };

      ctx.clearRect(0, 0, w, h);

      // Atmosphere glow
      const halo = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.25);
      halo.addColorStop(0, "rgba(56,189,248,0.42)");
      halo.addColorStop(0.4, "rgba(37,99,235,0.16)");
      halo.addColorStop(1, "rgba(37,99,235,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      // Far-side dots show faintly through the glass
      ctx.fillStyle = "rgba(125,211,252,0.10)";
      for (const dot of dots) {
        const p = project(dot);
        if (p[2] >= 0) continue;
        ctx.fillRect(p[0] - unit * 0.7, p[1] - unit * 0.7, unit * 1.4, unit * 1.4);
      }

      // Sphere body
      const body = ctx.createRadialGradient(cx - R * 0.38, cy - R * 0.42, R * 0.1, cx, cy, R * 1.05);
      body.addColorStop(0, "rgba(37,99,235,0.92)");
      body.addColorStop(0.45, "rgba(14,48,130,0.9)");
      body.addColorStop(1, "rgba(4,14,44,0.94)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      // Graticule
      ctx.lineWidth = Math.max(1, unit * 0.5);
      ctx.strokeStyle = "rgba(147,197,253,0.09)";
      ctx.beginPath();
      for (let lon = -180; lon < 180; lon += 30) {
        let pen = false;
        for (let lat = -90; lat <= 90; lat += 4) {
          const p = project(toVec(lon, lat));
          if (p[2] < 0) {
            pen = false;
            continue;
          }
          if (pen) ctx.lineTo(p[0], p[1]);
          else ctx.moveTo(p[0], p[1]);
          pen = true;
        }
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        let pen = false;
        for (let lon = -180; lon <= 180; lon += 4) {
          const p = project(toVec(lon, lat));
          if (p[2] < 0) {
            pen = false;
            continue;
          }
          if (pen) ctx.lineTo(p[0], p[1]);
          else ctx.moveTo(p[0], p[1]);
          pen = true;
        }
      }
      ctx.stroke();

      // Near-side land dots
      for (const dot of dots) {
        const p = project(dot);
        if (p[2] < 0) continue;
        const r = unit * (0.55 + 0.75 * p[2]);
        ctx.fillStyle = `rgba(207,239,255,${0.22 + 0.78 * p[2]})`;
        ctx.beginPath();
        ctx.arc(p[0], p[1], r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Rim light and specular highlight
      const rim = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, R);
      rim.addColorStop(0, "rgba(125,211,252,0)");
      rim.addColorStop(1, "rgba(125,211,252,0.32)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim;
      ctx.fill();
      const spec = ctx.createRadialGradient(cx - R * 0.42, cy - R * 0.48, 0, cx - R * 0.42, cy - R * 0.48, R * 0.7);
      spec.addColorStop(0, "rgba(255,255,255,0.16)");
      spec.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = spec;
      ctx.fill();
      ctx.lineWidth = Math.max(1, unit * 0.9);
      ctx.strokeStyle = "rgba(165,243,252,0.45)";
      ctx.stroke();

      // Routes with travelling pulses
      ctx.lineCap = "round";
      for (const arc of arcs) {
        const pts = arc.points.map(project);
        ctx.lineWidth = Math.max(1, unit * 0.8);
        ctx.strokeStyle = "rgba(251,191,36,0.38)";
        ctx.beginPath();
        let pen = false;
        for (const p of pts) {
          if (occluded(p)) {
            pen = false;
            continue;
          }
          if (pen) ctx.lineTo(p[0], p[1]);
          else ctx.moveTo(p[0], p[1]);
          pen = true;
        }
        ctx.stroke();

        const progress = (Math.max(0, clock) / arc.duration + arc.offset) % 1.35;
        if (!(progress <= 1)) continue;
        const head = Math.floor(progress * (pts.length - 1));
        const tail = Math.max(0, head - 16);
        for (let i = tail; i < head; i++) {
          const p = pts[i];
          const q = pts[i + 1];
          if (occluded(p) || occluded(q)) continue;
          const t = (i - tail) / Math.max(1, head - tail);
          ctx.strokeStyle = `rgba(255,236,170,${t * 0.95})`;
          ctx.lineWidth = Math.max(1, unit * (0.6 + 1.6 * t));
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.lineTo(q[0], q[1]);
          ctx.stroke();
        }
        const tip = pts[head];
        if (!occluded(tip)) {
          const glow = ctx.createRadialGradient(tip[0], tip[1], 0, tip[0], tip[1], unit * 7);
          glow.addColorStop(0, "rgba(255,255,255,0.95)");
          glow.addColorStop(0.3, "rgba(253,224,138,0.55)");
          glow.addColorStop(1, "rgba(253,224,138,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(tip[0], tip[1], unit * 7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // City markers; the hub is larger and gold
      markers.forEach((marker, index) => {
        const p = project(marker);
        if (p[2] < 0.05) return;
        const isHub = index === 0;
        const pulse = (clock * (isHub ? 0.6 : 0.45) + index * 0.21) % 1;
        const base = unit * (isHub ? 3.4 : 2);
        ctx.lineWidth = Math.max(1, unit * 0.7);
        ctx.strokeStyle = isHub ? `rgba(251,191,36,${(1 - pulse) * 0.9})` : `rgba(125,211,252,${(1 - pulse) * 0.7})`;
        ctx.beginPath();
        ctx.arc(p[0], p[1], base + pulse * unit * (isHub ? 14 : 8), 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = isHub ? "#fbbf24" : "#7dd3fc";
        ctx.beginPath();
        ctx.arc(p[0], p[1], base, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p[0], p[1], base * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const tick = (now: number) => {
      const dt = Math.max(0, Math.min(0.05, (now - previous) / 1000));
      previous = now;
      if (!reduced) clock += dt;
      if (!dragging) {
        const target = reduced ? 0 : AUTO_SPEED;
        velocity += (target - velocity) * Math.min(1, dt * 1.5);
        rotation += velocity * dt;
      }
      draw();
      frame = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (frame) return;
      previous = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const onDown = (event: PointerEvent) => {
      dragging = true;
      lastX = event.clientX;
      velocity = 0;
      canvas.setPointerCapture(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      lastX = event.clientX;
      const degrees = (dx / Math.max(size, 1)) * 220;
      rotation += degrees;
      velocity = degrees * 60;
      if (reduced) draw();
    };
    const onUp = () => {
      dragging = false;
    };

    resize();
    draw();
    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    start();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
