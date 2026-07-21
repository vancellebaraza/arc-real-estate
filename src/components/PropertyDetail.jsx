import { ArrowLeft, BedDouble, Bath, Square, MapPin } from "lucide-react";
import { useState } from "react";

export default function PropertyDetail({
  property,
  isActive,
  onClose,
}) {
  const [activeImage, setActiveImage] = useState(
    property.detail.images[0]
  );

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div className="min-h-screen bg-stone-50">

        {/* Top Image */}
        <div className="relative h-[65vh] overflow-hidden">

          <img
            src={activeImage}
            alt={property.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium shadow-lg transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="absolute bottom-10 left-10 text-white">

            <h1 className="text-5xl font-bold">
              {property.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-lg text-white/90">
              <MapPin size={18} />
              {property.location}
            </p>

            <h2 className="mt-6 text-4xl font-bold text-amber-400">
              {property.price}
            </h2>

          </div>

        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-14">

          {/* Features */}
          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow">
              <BedDouble
                className="text-amber-500"
                size={32}
              />

              <h4 className="mt-4 text-sm text-slate-500">
                Bedrooms
              </h4>

              <p className="mt-2 text-3xl font-bold">
                {property.bedrooms}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <Bath
                className="text-amber-500"
                size={32}
              />

              <h4 className="mt-4 text-sm text-slate-500">
                Bathrooms
              </h4>

              <p className="mt-2 text-3xl font-bold">
                {property.bathrooms}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <Square
                className="text-amber-500"
                size={32}
              />

              <h4 className="mt-4 text-sm text-slate-500">
                Area
              </h4>

              <p className="mt-2 text-3xl font-bold">
                {property.area}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <MapPin
                className="text-amber-500"
                size={32}
              />

              <h4 className="mt-4 text-sm text-slate-500">
                Location
              </h4>

              <p className="mt-2 text-xl font-semibold">
                {property.location}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-14 rounded-3xl bg-white p-10 shadow">

            <h2 className="text-3xl font-semibold">
              Property Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {property.detail.desc}
            </p>

          </div>

          {/* Gallery */}
          <div className="mt-16">

            <h2 className="mb-8 text-3xl font-semibold">
              Gallery
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {property.detail.images.map((image) => (

                <img
                  key={image}
                  src={image}
                  alt={property.title}
                  onClick={() => setActiveImage(image)}
                  className={`h-56 w-full cursor-pointer rounded-2xl object-cover transition duration-300 hover:scale-105 ${
                    activeImage === image
                      ? "ring-4 ring-amber-500"
                      : ""
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}