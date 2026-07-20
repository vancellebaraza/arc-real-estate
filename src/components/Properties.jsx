import PropertyCard from "./PropertyCard";

export default function Properties({ properties, onSelect }) {
  return (
    <section
      id="properties"
      className="w-full py-20 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <div className="gold-line mx-auto mb-4" />
          <h2
            className="font-display text-3xl md:text-5xl font-light"
            style={{ color: "var(--charcoal)" }}
          >
            Featured Properties
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto font-light"
            style={{ color: "var(--muted)" }}
          >
            A handpicked selection of distinguished residences across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {properties.map((property, idx) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => onSelect(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
