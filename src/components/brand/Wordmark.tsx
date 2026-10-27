import { useId } from "react";

// Custom-drawn "VIA" wordmark. The A has no crossbar; a gold dot sits in its
// counter instead, picking up the colour of the globe's orbit.
export function Wordmark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const dot = `${id}-dot`;
  const glow = `${id}-glow`;

  return (
    <svg viewBox="0 0 90 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={dot} x1="68" y1="29" x2="77" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe08a" />
          <stop offset="1" stopColor="#ff9f1a" />
        </linearGradient>
        <radialGradient id={glow} cx="72.6" cy="33.4" r="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffb020" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffb020" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="currentColor">
        <path d="M0 0h9.6L17 26.4 24.4 0H34L22.4 40H11.6z" />
        <path d="M39.6 0h9.6v40h-9.6z" />
        <path d="M55 40 66.8 0h11.6L90 40h-9.6L72.6 12.4 64.8 40z" />
      </g>
      <circle cx="72.6" cy="33.4" r="9" fill={`url(#${glow})`} />
      <circle cx="72.6" cy="33.4" r="4.6" fill={`url(#${dot})`} />
    </svg>
  );
}
