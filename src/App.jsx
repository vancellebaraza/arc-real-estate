import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyDetail from "./components/PropertyDetail";
import { properties } from "./data/properties";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Scroll-triggered fade-in, equivalent to the original vanilla-JS
  // IntersectionObserver that watched every .fade-in element.

useEffect(() => {
  const elements = document.querySelectorAll(
    ".fade-in, .slide-up, .slide-left, .slide-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  // Lock body scroll while a property detail overlay is open.
  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? "hidden" : "";
  }, [selectedIdx]);

  return (
    <>
      <Navbar />
      <Hero properties={properties}/>

      <div className="w-full h-24 section-transition" />

      <Properties properties={properties} onSelect={setSelectedIdx} />

      <div
        className="w-full h-24"
        style={{
          background: "linear-gradient(to bottom, var(--cream), var(--warm-white))",
        }}
      />

      <About />

      <div className="w-full h-32 section-transition-dark" />

      <Contact />
      <Footer />

      {properties.map((property, idx) => (
        <PropertyDetail
          key={property.id}
          property={property}
          isActive={selectedIdx === idx}
          onClose={() => setSelectedIdx(null)}
        />
      ))}
    </>
  );
}
