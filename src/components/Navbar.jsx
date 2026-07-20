import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        background: "rgba(252,250,247,0.92)",
        borderBottom: "1px solid rgba(184,148,95,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1
          className="font-display text-2xl font-semibold tracking-wide"
          style={{ color: "var(--charcoal)" }}
        >
          Real Arc Estate
        </h1>

        <div className="hidden md:flex gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-xs uppercase"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X style={{ color: "var(--charcoal)" }} />
          ) : (
            <Menu style={{ color: "var(--charcoal)" }} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-light"
              style={{ color: "var(--charcoal)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
