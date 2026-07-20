const socialIcons = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "Twitter",
    path: (
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.286 10.034 1.517 3.58-.885 6.559-3.457 7.966-6.717.415-.967.63-2.005.63-3.033V6.79c1.011-.803 1.71-1.83 2.363-2.775l.007-.005z" />
    ),
  },
  {
    label: "LinkedIn",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

function SocialIcon({ path }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--gold)" }}
    >
      {path}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full py-8 px-6"
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid rgba(184,148,95,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs font-light"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          © 2026 Real Arc Estate Company. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socialIcons.map((icon) => (
            <a key={icon.label} href="#" aria-label={icon.label}>
              <SocialIcon path={icon.path} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
