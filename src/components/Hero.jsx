import { useEffect, useRef } from "react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&w=1920";

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${
          window.scrollY * 0.25
        }px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <div ref={parallaxRef} className="absolute inset-0 hero-parallax">
        <img
          src={HERO_IMAGE}
          alt="Luxury estate exterior at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.6) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="gold-line mb-6 fade-in" />
        <h2
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light fade-in"
          style={{ color: "#ffffff" }}
        >
          Where Luxury Meets Legacy
        </h2>
        <p
          className="mt-5 text-base md:text-lg max-w-2xl font-light fade-in"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Discover extraordinary residences curated for those who demand
          excellence in every detail.
        </p>
        <a
          href="#properties"
          className="mt-10 px-10 py-3 text-xs tracking-[0.3em] uppercase border fade-in"
          style={{ color: "var(--gold-light)", borderColor: "var(--gold-light)" }}
        >
          View Collection
        </a>
      </div>
    </section>
  );
}
