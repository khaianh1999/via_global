import type { ServiceIconName } from "@/content/solutions";

const paths: Record<ServiceIconName, React.ReactNode> = {
  web: (
    <>
      <rect x="6" y="9" width="36" height="30" rx="4" />
      <path d="M6 17h36M12 13h.01M16 13h.01M20 13h.01" />
      <path d="M13 24h12M13 30h8M30 24h6v8h-6z" />
    </>
  ),
  code: (
    <>
      <path d="M17 15 8 24l9 9M31 15l9 9-9 9M27 11l-6 26" />
    </>
  ),
  ai: (
    <>
      <rect x="13" y="13" width="22" height="22" rx="4" />
      <path d="M19 6v7M29 6v7M19 35v7M29 35v7M6 19h7M6 29h7M35 19h7M35 29h7" />
      <path d="M20 29l4-10 4 10M21.5 25.5h5" />
    </>
  ),
  flow: (
    <>
      <rect x="6" y="8" width="13" height="10" rx="2.5" />
      <rect x="29" y="19" width="13" height="10" rx="2.5" />
      <rect x="6" y="30" width="13" height="10" rx="2.5" />
      <path d="M19 13h5a5 5 0 0 1 5 5v1M19 35h5a5 5 0 0 0 5-5v-1" />
    </>
  ),
  news: (
    <>
      <path d="M10 9h24a3 3 0 0 1 3 3v27H13a3 3 0 0 1-3-3z" />
      <path d="M37 18h4v18a3 3 0 0 1-3 3h-1" />
      <path d="M16 16h14M16 22h14M16 28h8" />
    </>
  ),
  shield: (
    <>
      <path d="M24 6 39 11v11c0 9.5-6.3 16.8-15 20-8.7-3.2-15-10.5-15-20V11z" />
      <path d="m17.5 24 4.5 4.5 8.5-9" />
    </>
  ),
  cloud: (
    <>
      <path d="M15 31h18.5a7.5 7.5 0 0 0 1.2-14.9 9 9 0 0 0-17.1-2.2A6.5 6.5 0 0 0 15 31Z" />
      <path d="M16 37h16M20 41h8M24 31v6" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
