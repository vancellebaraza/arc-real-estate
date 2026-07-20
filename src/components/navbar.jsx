import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="group">
          <h1 className="text-2xl font-bold tracking-[0.25em] text-white transition group-hover:text-amber-400">
            FUSION 
          </h1>

          <p className="text-xs uppercase tracking-[0.45em] text-slate-400 group-hover:text-slate-300">
            REAL ESTATES
          </p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium tracking-wide text-slate-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="rounded-full border border-amber-400 px-6 py-2.5 text-sm font-semibold text-amber-400 transition duration-300 hover:bg-amber-400 hover:text-slate-900"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-slate-950 transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-lg bg-amber-400 px-4 py-3 text-center font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;