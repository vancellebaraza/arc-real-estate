import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyDetail from "./components/PropertyDetail";
import PropertyEnquiry from "./components/PropertyEnquiry";
import { useProperties } from "./hooks/useProperties";

export default function App() {
  const { properties } = useProperties();
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [enquiryProperty, setEnquiryProperty] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-in, .slide-up, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
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

  useEffect(() => {
    document.body.style.overflow =
      selectedIdx !== null || enquiryProperty !== null ? "hidden" : "";
  }, [selectedIdx, enquiryProperty]);

  return (
    <>
      <Navbar />
      <Hero properties={properties}/>

      <div className="w-full h-24 section-transition" />

      <Properties
        properties={properties}
        onSelect={setSelectedIdx}
        onEnquire={setEnquiryProperty}
      />

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
          onEnquire={setEnquiryProperty}
          className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
        />
      ))}

      <PropertyEnquiry
        property={enquiryProperty}
        isActive={enquiryProperty !== null}
        onClose={() => setEnquiryProperty(null)}
      />
    </>
  );
}
