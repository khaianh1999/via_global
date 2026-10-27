import { spawn } from "node:child_process";
import { cpSync, readdirSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");

const englishPaths = {
  "gioi-thieu": "about",
  "giai-phap": "solutions",
  "du-an": "projects",
  "cong-nghe": "insights",
  "lien-he": "contact",
};

function publishPaths() {
  for (const name of readdirSync(path.join(outDir, "vi"))) {
    cpSync(path.join(outDir, "vi", name), path.join(outDir, name), { recursive: true });
  }

  for (const [from, to] of Object.entries(englishPaths)) {
    cpSync(path.join(outDir, "en", from), path.join(outDir, "en", to), { recursive: true });
  }
}

const child = spawn("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: "/via_global",
    NEXT_PUBLIC_SITE_URL: "https://khaianh1999.github.io/via_global",
  },
});

child.on("exit", (code) => {
  if (code !== 0) process.exit(code ?? 1);
  publishPaths();
});
