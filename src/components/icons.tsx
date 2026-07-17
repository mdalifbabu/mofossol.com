/**
 * Icons transcribed verbatim from the design source of truth
 * (mofossol-website.html). Paths and stroke widths are copied exactly —
 * do not "clean them up" or swap in an icon library, or the page drifts
 * from the source.
 */

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

const stroke = (size: number, color: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export const MenuIcon = ({ size = 26, color = '#2A251C' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2.2}>
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);

export const DownloadIcon = ({ size = 18, color = '#fff' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2.2}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

/** Small verified tick beside a role badge. */
export const BadgeCheckIcon = ({ size = 13, color = 'var(--brand)' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="m9 12 2 2 4-4" />
    <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2" />
  </svg>
);

/** Filled shield-with-tick used in the verified-roles list. */
export const VerifiedShieldIcon = ({ size = 20, color = 'var(--brand)' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V5z" fill={color} />
    <path d="m9 12 2 2 4-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MapPinIcon = ({ size = 26, color = 'var(--brand)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const SendIcon = ({ size = 26, color = 'var(--gold)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M3 11 21 4l-3.5 16-5-6-3.5 3z" />
    <path d="M9 17v3" />
  </svg>
);

export const ShieldCheckIcon = ({ size = 26, color = 'var(--slate)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M12 3 4 6v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const MegaphoneIcon = ({ size = 28, color = 'var(--brand)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="m3 11 14-7v16L3 13z" />
    <path d="M17 8a4 4 0 0 1 0 8" />
    <path d="M6 13v4a2 2 0 0 0 2 2h1" />
  </svg>
);

export const DropletIcon = ({ size = 28, color = 'var(--brick)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
  </svg>
);

export const StoreIcon = ({ size = 28, color = 'var(--gold)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M3 9 4 4h16l1 5" />
    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
    <path d="M3 9h18" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

export const GovtIcon = ({ size = 28, color = 'var(--slate)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M4 12h2M18 12h2M12 4v2M12 18v2" />
  </svg>
);

export const MicIcon = ({ size = 28, color = 'var(--brick)' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
  </svg>
);

export const HomeIcon = ({ size = 22, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5h6v5" />
  </svg>
);

export const MosqueIcon = ({ size = 22, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M4 10h16M12 3v3M6 21V10M18 21V10M8 21h8" />
  </svg>
);

export const GradCapIcon = ({ size = 22, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2}>
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M7 9v5c0 1.5 2.2 3 5 3s5-1.5 5-3V9" />
  </svg>
);

export const AlertIcon = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2.4}>
    <path d="M12 9v4M12 17h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
  </svg>
);

export const LockIcon = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2.4}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const ShieldIcon = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <svg {...stroke(size, color)} strokeWidth={2.4}>
    <path d="M12 2 4 5v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V5z" />
  </svg>
);
