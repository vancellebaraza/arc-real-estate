import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { AMENITY_ICON_NAMES } from "../../data/amenityIcons";

const BUCKET = "Images";

async function uploadFile(file, folder) {
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const path = `${folder}/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

const emptyFloorPlan = () => ({ name: "", file: null });
const emptyAmenity = () => ({ key: "", icon: AMENITY_ICON_NAMES[0] });

export default function PropertyForm({ onCreated }) {
  const [fields, setFields] = useState({
    title: "",
    location: "",
    bedrooms: "",
    area: "",
    bathrooms: "",
    shortDesc: "",
    price: "",
    detailDesc: "",
  });

  const [coverFile, setCoverFile] = useState(null);
  const [detailFiles, setDetailFiles] = useState([]);
  const [floorPlans, setFloorPlans] = useState([emptyFloorPlan()]);
  const [amenities, setAmenities] = useState([emptyAmenity()]);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "error" | "success", message }

  function updateField(name, value) {
    setFields((f) => ({ ...f, [name]: value }));
  }

  function updateFloorPlan(idx, patch) {
    setFloorPlans((list) =>
      list.map((fp, i) => (i === idx ? { ...fp, ...patch } : fp))
    );
  }

  function updateAmenity(idx, patch) {
    setAmenities((list) =>
      list.map((a, i) => (i === idx ? { ...a, ...patch } : a))
    );
  }

  function resetForm() {
    setFields({
      title: "",
      location: "",
      bedrooms: "",
      area: "",
      bathrooms: "",
      shortDesc: "",
      price: "",
      detailDesc: "",
    });
    setCoverFile(null);
    setDetailFiles([]);
    setFloorPlans([emptyFloorPlan()]);
    setAmenities([emptyAmenity()]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!fields.title.trim() || !fields.location.trim()) {
      setStatus({ type: "error", message: "Title and location are required." });
      return;
    }
    if (!coverFile) {
      setStatus({ type: "error", message: "A cover image is required." });
      return;
    }

    setSubmitting(true);

    try {
      const coverUrl = await uploadFile(coverFile, "covers");

      const detailImageUrls = [];
      for (const file of detailFiles) {
        detailImageUrls.push(await uploadFile(file, "details"));
      }

      const floorPlanRows = [];
      for (const fp of floorPlans) {
        if (!fp.name.trim() || !fp.file) continue;
        const url = await uploadFile(fp.file, "floorplans");
        floorPlanRows.push({ name: fp.name.trim(), image: url });
      }

      const amenityRows = amenities
        .filter((a) => a.key.trim())
        .map((a) => ({ key: a.key.trim(), icon: a.icon }));

      const { error: insertError } = await supabase.from("properties").insert({
        title: fields.title.trim(),
        location: fields.location.trim(),
        bedrooms: fields.bedrooms.trim(),
        area: fields.area.trim(),
        bathrooms: fields.bathrooms.trim(),
        short_desc: fields.shortDesc.trim(),
        price: fields.price.trim(),
        cover_image_url: coverUrl,
        detail_desc: fields.detailDesc.trim(),
        detail_images: detailImageUrls,
        floor_plans: floorPlanRows,
        amenities: amenityRows,
      });

      if (insertError) throw insertError;

      setStatus({ type: "success", message: "Property added." });
      resetForm();
      onCreated?.();
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message ?? "Something went wrong uploading the property.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-slate-900">Add Property</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Title" required>
          <input
            value={fields.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
            required
          />
        </Field>

        <Field label="Location" required>
          <input
            value={fields.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
            required
          />
        </Field>

        <Field label="Bedrooms">
          <input
            value={fields.bedrooms}
            onChange={(e) => updateField("bedrooms", e.target.value)}
            placeholder="e.g. 1BR – 3BR"
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
          />
        </Field>

        <Field label="Bathrooms">
          <input
            value={fields.bathrooms}
            onChange={(e) => updateField("bathrooms", e.target.value)}
            placeholder="e.g. 1 – 3"
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
          />
        </Field>

        <Field label="Area">
          <input
            value={fields.area}
            onChange={(e) => updateField("area", e.target.value)}
            placeholder="e.g. 35.4 – 189.5 m²"
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
          />
        </Field>

        <Field label="Price">
          <input
            value={fields.price}
            onChange={(e) => updateField("price", e.target.value)}
            placeholder="e.g. FROM USD 49,249"
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
          />
        </Field>
      </div>

      <Field label="Short Description (shown on the property card)">
        <textarea
          value={fields.shortDesc}
          onChange={(e) => updateField("shortDesc", e.target.value)}
          rows={2}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
        />
      </Field>

      <Field label="Full Description (shown on the detail page)">
        <textarea
          value={fields.detailDesc}
          onChange={(e) => updateField("detailDesc", e.target.value)}
          rows={6}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
        />
      </Field>

      <Field label="Cover Image" required>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverFile(e.target.files?.[0] ?? null)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
          required
        />
      </Field>

      <Field label="Additional Detail Images">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setDetailFiles(Array.from(e.target.files ?? []))}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full"
        />
      </Field>

      {/* Floor plans */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">
            Floor Plans
          </label>
          <button
            type="button"
            onClick={() => setFloorPlans((list) => [...list, emptyFloorPlan()])}
            className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700"
          >
            <Plus size={16} /> Add floor plan
          </button>
        </div>

        {floorPlans.map((fp, idx) => (
          <div key={idx} className="mb-2 flex items-center gap-2">
            <input
              placeholder="Name (e.g. 1 Bedroom Apartment)"
              value={fp.name}
              onChange={(e) => updateFloorPlan(idx, { name: e.target.value })}
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full flex-1"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                updateFloorPlan(idx, { file: e.target.files?.[0] ?? null })
              }
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full flex-1"
            />
            <button
              type="button"
              onClick={() =>
                setFloorPlans((list) => list.filter((_, i) => i !== idx))
              }
              className="text-slate-400 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">
            Amenities
          </label>
          <button
            type="button"
            onClick={() => setAmenities((list) => [...list, emptyAmenity()])}
            className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700"
          >
            <Plus size={16} /> Add amenity
          </button>
        </div>

        {amenities.map((a, idx) => (
          <div key={idx} className="mb-2 flex items-center gap-2">
            <input
              placeholder="Label (e.g. Rooftop Pool)"
              value={a.key}
              onChange={(e) => updateAmenity(idx, { key: e.target.value })}
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full flex-1"
            />
            <select
              value={a.icon}
              onChange={(e) => updateAmenity(idx, { icon: e.target.value })}
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-amber-500 w-full flex-1"
            >
              {AMENITY_ICON_NAMES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() =>
                setAmenities((list) => list.filter((_, i) => i !== idx))
              }
              className="text-slate-400 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {status && (
        <p
          className={
            status.type === "error" ? "text-sm text-red-600" : "text-sm text-green-600"
          }
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-amber-500 disabled:opacity-60"
      >
        {submitting ? "Uploading…" : "Add Property"}
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
