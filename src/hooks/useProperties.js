import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { properties as staticProperties } from "../data/properties";
import { AMENITY_ICON_MAP } from "../data/amenityIcons";

// Turns a raw Supabase row into the exact shape the static properties.js
// objects already use, so PropertyCard/PropertyDetail need zero changes.
function hydrateRow(row) {
  const amenities = Array.isArray(row.amenities)
    ? row.amenities.map((a) => ({
        key: a.key,
        icon: AMENITY_ICON_MAP[a.icon] ?? AMENITY_ICON_MAP.Home,
      }))
    : [];

  const floorPlans = Array.isArray(row.floor_plans)
    ? row.floor_plans.map((fp) => ({ name: fp.name, image: fp.image }))
    : [];

  return {
    id: `db-${row.id}`,
    title: row.title,
    location: row.location,
    bedrooms: row.bedrooms,
    area: row.area,
    bathrooms: row.bathrooms,
    shortDesc: row.short_desc,
    price: row.price,
    image: row.cover_image_url,
    detail: {
      desc: row.detail_desc,
      images: row.detail_images ?? [],
      floorPlans,
    },
    amenities,
    _source: "db",
    _dbId: row.id,
  };
}

// Merges the hardcoded properties.js listings with whatever the admin has
// added in Supabase. Static listings are untouched; DB listings are
// appended. Both public pages (App.jsx home + Properties2.jsx listing)
// consume this instead of importing `properties` directly.
export function useProperties() {
  const [dbProperties, setDbProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data, error: fetchError } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (fetchError) {
        setError(fetchError);
        setLoading(false);
        return;
      }

      setDbProperties((data ?? []).map(hydrateRow));
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    properties: [...staticProperties, ...dbProperties],
    loading,
    error,
  };
}
