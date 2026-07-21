import { BedDouble, Bath, Square, MapPin } from "lucide-react";

export default function PropertyCard({ property, onClick }) {
  return (
    <div
      onClick={()=>onClick(property)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(property);
        }
      }}
      className=" group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-semibold text-slate-900">
          {property.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {property.shortDesc}
        </p>

        {/* Features */}
        <div className="mt-6 flex items-center gap-6 text-slate-500">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            <span>{property.bedrooms ?? 4}</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            <span>{property.bathrooms ?? 3}</span>
          </div>

          <div className="flex items-center gap-2">
            <Square size={18} />
            <span>{property.area ?? "450 m²"}</span>
          </div>
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          <span>{property.location ?? "Nairobi, Kenya"}</span>
        </div>

        {/* Price & Button */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            {property.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(property);
            }}
            className="rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-amber-500"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}