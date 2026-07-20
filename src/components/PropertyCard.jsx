export default function PropertyCard({ property, onClick }) {
  return (
    <div
      className="prop-card fade-in rounded-lg overflow-hidden"
      style={{ background: "var(--warm-white)" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-7">
        <h3
          className="font-display text-2xl font-medium"
          style={{ color: "var(--charcoal)" }}
        >
          {property.title}
        </h3>
        <p
          className="mt-2 text-sm font-light"
          style={{ color: "var(--muted)" }}
        >
          {property.shortDesc}
        </p>
        <p className="mt-4 text-lg font-medium" style={{ color: "var(--gold)" }}>
          {property.price}
        </p>
      </div>
    </div>
  );
}
