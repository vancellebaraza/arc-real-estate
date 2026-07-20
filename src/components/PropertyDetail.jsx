import { ArrowLeft } from "lucide-react";

const SLIDE_CLASSES = ["slide-left", "slide-right", "slide-left", "slide-up"];

export default function PropertyDetail({ property, isActive, onClose }) {
  return (
    <div className={`detail-overlay${isActive ? " active" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <button
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-sm uppercase tracking-widest font-light"
          style={{ color: "var(--gold)" }}
        >
          <ArrowLeft size={16} /> Back
        </button>

        <h2
          className="font-display text-4xl md:text-5xl font-light slide-down"
          style={{ color: "var(--charcoal)" }}
        >
          {property.title}
        </h2>
        <p
          className="mt-4 text-lg font-light slide-down"
          style={{ color: "var(--muted)" }}
        >
          {property.detail.desc}
        </p>
        <p
          className="mt-2 text-2xl font-display font-medium slide-down"
          style={{ color: "var(--gold)" }}
        >
          {property.price}
        </p>

        <div
          className="geo-grid mt-10"
          style={{ height: "70vh", minHeight: "400px" }}
        >
          {property.detail.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${property.title} — view ${i + 1}`}
              className={`w-full h-full object-cover rounded-sm ${SLIDE_CLASSES[i]}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
