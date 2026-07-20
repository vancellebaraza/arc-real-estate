import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Navbar() {
const newlogo = "/WhatsApp Image 2026-07-04 at 09.55.16 (1).jpeg";
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex flex-col select-none transition hover:opacity-90">
          <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">FUSION PRO</h2>
          <h6 className="border-t border-primary w-fit pt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-primary">REAL ESTATES</h6>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            hash="services"
            className="text-muted-foreground transition hover:text-foreground"
          >
            Services
          </Link>

          <Link
            to="/"
            hash="about"
            className="text-muted-foreground transition hover:text-foreground"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-muted-foreground transition hover:text-foreground"
            activeProps={{
              className: "font-medium text-foreground",
            }}
          >
            Contact
          </Link>

          <Link
            to="/auth"
            className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Sign in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}