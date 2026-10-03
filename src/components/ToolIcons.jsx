export function FrogIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="14.5" rx="7.5" ry="6" fill="currentColor" />
      <circle cx="7" cy="7.5" r="2.6" fill="currentColor" />
      <circle cx="17" cy="7.5" r="2.6" fill="currentColor" />
      <circle cx="7" cy="7.2" r="1.15" fill="#fff" />
      <circle cx="17" cy="7.2" r="1.15" fill="#fff" />
      <circle cx="7" cy="7.2" r="0.5" fill="#123" />
      <circle cx="17" cy="7.2" r="0.5" fill="#123" />
      <path d="M8.4 16.2c1 .9 2.2 1.4 3.6 1.4s2.6-.5 3.6-1.4" stroke="#0b3d2e" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CanvaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7d2ae8" />
          <stop offset="50%" stopColor="#00c4cc" />
          <stop offset="100%" stopColor="#7d2ae8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10.5" fill="url(#canvaGrad)" />
      <path
        d="M16.6 9.4c-.2-.5-.6-.7-1-.5-1.6.8-3.1 2.6-4 4.4-.3-1-.4-2.1-.2-2.9.1-.5-.2-.9-.6-1-.5-.1-.9.2-1 .6-.4 1.7 0 3.9 1.1 5.3.3.4.9.4 1.2 0 1-1.3 2.4-3.2 3.7-4.7.3.9.3 1.9-.1 2.7-.2.5 0 1 .5 1.2.5.2 1 0 1.2-.5.6-1.4.5-3.1-.8-4.6z"
        fill="#fff"
      />
    </svg>
  );
}
