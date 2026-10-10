export function IconTechnology({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 40h12M24 32v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 18h16M16 24h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 34h16.5a7.5 7.5 0 0 0 1.2-14.9 9 9 0 0 0-17.1-2.2A6.5 6.5 0 0 0 16 34Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconMedia({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 10v28M10 24h28" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.2 15.5h19.6M14.2 32.5h19.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
