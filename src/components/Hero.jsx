import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Where Luxury Meets Legacy",
    description:
      "Discover extraordinary residences curated for those who demand excellence in every detail.",
    button: "View Collection",
  },
  {
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Find Your Dream Home",
    description:
      "Premium apartments, villas and investment properties in the best locations.",
    button: "Browse Properties",
  },
  {
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Built Around Your Lifestyle",
    description:
      "Modern living spaces designed for comfort, elegance and long-term value.",
    button: "Learn More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const parallaxRef = useRef(null);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Parallax
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

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 transition-all duration-700"
      >
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="gold-line mb-6" />

        <h2 className="max-w-4xl text-4xl font-light text-white transition-all duration-500 md:text-6xl lg:text-7xl">
          {slides[current].title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/80 transition-all duration-500">
          {slides[current].description}
        </p>

        <a
          href="#properties"
          className="mt-10 border border-yellow-400 px-8 py-3 text-xs uppercase tracking-[0.3em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
        >
          {slides[current].button}
        </a>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronRight size={28} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "bg-yellow-400 w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}