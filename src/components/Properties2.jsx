import { useState } from "react";
import { Search, MapPin, BedDouble, Bath, Square } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";
import PropertyDetail from "./PropertyDetail";

export default function PropertiesPage() {
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

   const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <main className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Properties"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <p className="uppercase tracking-[0.35em] text-amber-400 text-sm">
              Our Collection
            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-light text-white">
              Luxury Properties
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Explore our exclusive collection of premium homes,
              apartments and investment properties.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="-mt-10 relative z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-white shadow-xl p-6">
            <div className="flex items-center gap-4">
              <Search className="text-slate-400" />

              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-4xl font-semibold">
              Featured Listings
            </h2>

            <p className="text-slate-500">
              {filteredProperties.length} Properties
            </p>
          </div>

          

<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
  {filteredProperties.map((property) => (
    <PropertyCard
      key={property.id}
      property={property}
      onClick={setSelectedProperty}
    />
  ))}

    {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          isActive={true}
          onClose={() => setSelectedProperty(null)}
        />
      )}
</div>

        

        </div>
      </section>

      <Footer />
    </main>
  );
}