import {
  ArrowLeft,
  BedDouble,
  Bath,
  Square,
  MapPin,
  FileImage,
  X,
} from "lucide-react";


import { useState } from "react";



export default function PropertyDetail({
  property,
  isActive,
  onClose,
  onEnquire,
}) {
  const [activeImage, setActiveImage] = useState(
    property.detail.images[0]
  );
  const [showFloorPlans, setShowFloorPlans] = useState(false);

  if (!isActive) return null;

  const amenities = property.amenities ?? [];
  const floorPlans = property.detail?.floorPlans ?? [];

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

          {/* Back */}
          <button
            onClick={onClose}
            className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium shadow-lg transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          {/* Property heading */}
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

          {/* Property Overview + Amenities */}
          <div className="mt-14 rounded-3xl bg-white p-8 shadow md:p-10">

            <div className="grid gap-12 lg:grid-cols-2">

              {/* LEFT — Property Overview */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Property Overview
                </h2>

                <div className="mt-6 space-y-6">
                  {property.detail.desc
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {/* RIGHT — Amenities */}
              {amenities.length > 0 && (
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">
                    Amenities
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
{amenities.map((amenity) => {
  const Icon = amenity.icon;

  return (
    <div
      key={amenity.key}
      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-stone-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <span className="text-sm font-medium text-slate-700">
        {amenity.key}
      </span>
    </div>
  );
})}
                  </div>
                </div>
              )}

            </div>
          </div>
          {/* Floor Plans */}
          {floorPlans.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
            onClick={() => setShowFloorPlans(true)}
            className="flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-900"
           >
          <FileImage size={20} />
           View Floor Plans
          </button>
          </div>
        )}
          {/* Gallery */}
          <div className="mt-16">

            <h2 className="mb-8 text-3xl font-semibold">
              Gallery
            </h2>

            <div className="grid grid-cols-2 gap-6">

              {property.detail.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={property.title}
                  onClick={() => setActiveImage(image)}
                  className={`h-80 w-full cursor-pointer rounded-2xl object-cover transition duration-300 hover:scale-105 ${
                    activeImage === image
                      ? "ring-4 ring-amber-500"
                      : ""
                  }`}
                />
              ))}

            </div>
          </div>

          {/* Enquire */}
          <div className="mt-16 text-center">
            <button
              onClick={() => onEnquire(property)}
              className="rounded-full bg-amber-500 px-14 py-4 font-semibold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-amber-400"
            >
              Enquire Now
            </button>
          </div>

        </div>
      </div>


{/* Floor Plans Modal */}
{showFloorPlans && (
  <div
    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    onClick={() => setShowFloorPlans(false)}
  >
    <div
      className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Header */}
      <div className="flex items-center justify-between border-b bg-white px-6 py-5">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Floor Plans
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {property.title}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowFloorPlans(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close floor plans"
        >
          <X size={22} />
        </button>
      </div>

      {/* Floor Plans */}
      <div className="overflow-y-auto p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">

          {floorPlans.map((plan, index) => (
            <div
              key={plan.name || index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >

              {/* Plan Name */}
              <div className="border-b px-5 py-4">
                <h3 className="font-semibold text-slate-900">
                  {plan.name}
                </h3>
              </div>

              {/* Plan Image */}
              <div className="flex items-center justify-center bg-white p-6">
                <img
                  src={plan.image}
                  alt={`${plan.name} floor plan`}
                  className="h-auto max-h-[600px] w-full object-contain"
                />
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
)}
    </div>
  );
}