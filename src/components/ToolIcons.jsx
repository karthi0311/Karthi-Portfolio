import { useId } from 'react';

export function GoogleAdsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m8.1 4 7.6 13.2" stroke="#34A853" strokeWidth="5" strokeLinecap="round" />
      <path d="M8 4 3.2 12.3" stroke="#4285F4" strokeWidth="5" strokeLinecap="round" />
      <path d="M3.3 17.4a2.8 2.8 0 1 0 5.6 0 2.8 2.8 0 0 0-5.6 0Z" fill="#FBBC04" />
    </svg>
  );
}

export function MetaIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.3 15.9c1.7-4.5 4-8.1 6.2-8.1 3.1 0 5 8.4 8.2 8.4 1.8 0 3-2.1 3-4.6 0-3.1-1.6-5.4-3.6-5.4-2.8 0-5.3 7.5-8.3 11.1-1.1 1.3-2.1 2-3.1 2-2 0-3.4-2-3.4-4.9 0-3.4 1.5-6.5 3.7-8.1" stroke="#0866FF" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GoogleAnalyticsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.2 17.6a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Z" fill="#F9AB00" />
      <path d="M8.3 13.2a2.1 2.1 0 0 1 4.2 0v6.5a2.1 2.1 0 0 1-4.2 0v-6.5Z" fill="#E37400" />
      <path d="M16.6 4.2a2.1 2.1 0 0 1 4.2 0v15.5a2.1 2.1 0 0 1-4.2 0V4.2Z" fill="#F9AB00" />
      <path d="M16.6 11.2h4.2v8.5a2.1 2.1 0 0 1-4.2 0v-8.5Z" fill="#E37400" />
    </svg>
  );
}

export function SearchConsoleIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.2h14a2 2 0 0 1 2 2v10.6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.2a2 2 0 0 1 2-2Z" fill="#4285F4" />
      <path d="M3.5 9h17v1.7h-17z" fill="#34A853" />
      <path d="M7.1 16.8v-2.4l2.4-2.2 2.1 1.4 3.1-3.1 2.2 1.8v4.5H7.1Z" fill="#fff" />
      <circle cx="17.1" cy="7.4" r="1" fill="#FBBC04" />
      <path d="M4.2 5.3h15.6a1.8 1.8 0 0 1 1.2.5L12 12.9 3 5.8a1.8 1.8 0 0 1 1.2-.5Z" fill="#1A73E8" opacity=".8" />
    </svg>
  );
}

export function SemrushIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11.7c4.4-5.8 10.1-7.9 17.2-6.3-2.3 1.3-3.4 3.1-3.3 5.3.1 2.5 1.8 4 4.1 4.8-6.8 3.5-13.2 2.1-18-3.8Z" fill="#FF642D" />
      <path d="M7.1 12c2.4-1.6 5-2.1 7.8-1.6-1.7.7-2.7 1.8-3.1 3.5-1.8-.2-3.4-.8-4.7-1.9Z" fill="#fff" />
      <path d="M4.1 18.5c2.1-2 4.2-2.9 6.5-2.8" fill="none" stroke="#FF642D" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function AhrefsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 16.8 9.5 5l4.3 7.1-2.7 4.7H3Z" fill="#F15A24" />
      <path d="m9.5 5 7.9 13.8H12l-2.5-4.3 2.7-4.7L9.5 5Z" fill="#2D9CDB" />
      <path d="M15.2 13.4h5.3l-2.7 4.7-2.6-4.7Z" fill="#1473E6" />
    </svg>
  );
}

export function FrogIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="14.5" rx="7.5" ry="6" fill="#73B22B" />
      <circle cx="7" cy="7.5" r="2.6" fill="#73B22B" />
      <circle cx="17" cy="7.5" r="2.6" fill="#73B22B" />
      <circle cx="7" cy="7.2" r="1.15" fill="#fff" />
      <circle cx="17" cy="7.2" r="1.15" fill="#fff" />
      <circle cx="7" cy="7.2" r="0.5" fill="#173B22" />
      <circle cx="17" cy="7.2" r="0.5" fill="#173B22" />
      <path d="M8.4 16.2c1 .9 2.2 1.4 3.6 1.4s2.6-.5 3.6-1.4" stroke="#173B22" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CanvaIcon({ size = 18 }) {
  const gradientId = `canva-gradient-${useId().replace(/:/g, '')}`;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7d2ae8" />
          <stop offset="50%" stopColor="#00c4cc" />
          <stop offset="100%" stopColor="#7d2ae8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10.5" fill={`url(#${gradientId})`} />
      <path
        d="M16.6 9.4c-.2-.5-.6-.7-1-.5-1.6.8-3.1 2.6-4 4.4-.3-1-.4-2.1-.2-2.9.1-.5-.2-.9-.6-1-.5-.1-.9.2-1 .6-.4 1.7 0 3.9 1.1 5.3.3.4.9.4 1.2 0 1-1.3 2.4-3.2 3.7-4.7.3.9.3 1.9-.1 2.7-.2.5 0 1 .5 1.2.5.2 1 0 1.2-.5.6-1.4.5-3.1-.8-4.6z"
        fill="#fff"
      />
    </svg>
  );
}
