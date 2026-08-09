import { useState } from "react";
import { X } from "lucide-react";

const fieldClass =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-amber-400 focus:bg-white/15";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-widest text-amber-400";

// Turns a property's `bedrooms` field ("Studio – 3BR", "1BR – 2BR", 4, ...)
// into a clean list of selectable unit types for that specific property.
function getUnitTypeOptions(property) {
  const raw = String(property?.bedrooms ?? "");

  if (/^\d+$/.test(raw)) {
    return [`${raw} Bedroom`];
  }

  const order = ["Studio", "1BR", "2BR", "3BR", "4BR", "5BR"];
  const labels = {
    Studio: "Studio",
    "1BR": "1 Bedroom",
    "2BR": "2 Bedroom",
    "3BR": "3 Bedroom",
    "4BR": "4 Bedroom",
    "5BR": "5 Bedroom",
  };

  const matchedIdx = order
    .map((tag, i) => (raw.includes(tag) ? i : -1))
    .filter((i) => i !== -1);

  if (matchedIdx.length === 0) {
    return ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"];
  }

  const lo = Math.min(...matchedIdx);
  const hi = Math.max(...matchedIdx);
  return order.slice(lo, hi + 1).map((tag) => labels[tag]);
}

function getBudgetOptions(property) {
  const priceStr = String(property?.price ?? "");
  const isUSD = priceStr.includes("USD");

  return isUSD
    ? [
        "Under USD 60,000",
        "USD 60,000 – 100,000",
        "USD 100,000 – 150,000",
        "USD 150,000 – 250,000",
        "Above USD 250,000",
      ]
    : [
        "Under KES 5M",
        "KES 5M – 10M",
        "KES 10M – 20M",
        "KES 20M – 40M",
        "Above KES 40M",
      ];
}

const initialForm = {
  firstName: "",
  surname: "",
  phone: "",
  email: "",
  unitType: "",
  budget: "",
  decisionMaker: "",
  timeline: "",
  consent: false,
};

export default function PropertyEnquiry({ property, isActive, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  if (!isActive || !property) return null;

  const unitTypeOptions = getUnitTypeOptions(property);
  const budgetOptions = getBudgetOptions(property);

  const handleChange = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setForm(initialForm);
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: same as the main Contact form — this only flips local UI state.
    // It does not send the enquiry anywhere yet. Wire this to a real
    // endpoint (API route, Supabase insert, email service, etc.) before
    // this goes live, otherwise every enquiry submitted here is lost.
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto bg-black/70 backdrop-blur-sm">
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <button
        onClick={handleClose}
        className="fixed right-8 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-slate-100"
      >
        <X size={20} className="text-slate-900" />
      </button>

      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Enquire About
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white">
              {property.title}
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Share a little about yourself and our team will reach out with
              tailored information on this property.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <p className="text-slate-700">
                Thank you, {form.firstName || "there"}. We've received your
                enquiry on <span className="font-semibold">{property.title}</span> and
                will be in touch shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 rounded-full bg-slate-900 px-10 py-3 text-white transition hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl bg-slate-900/70 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-md md:p-10"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="pe-first" className={labelClass}>First Name</label>
                  <input
                    id="pe-first"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="pe-surname" className={labelClass}>Surname</label>
                  <input
                    id="pe-surname"
                    type="text"
                    required
                    value={form.surname}
                    onChange={handleChange("surname")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="pe-phone" className={labelClass}>Phone</label>
                  <input
                    id="pe-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="pe-email" className={labelClass}>Email</label>
                  <input
                    id="pe-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pe-unit" className={labelClass}>Preferred Unit Type</label>
                <select
                  id="pe-unit"
                  required
                  value={form.unitType}
                  onChange={handleChange("unitType")}
                  className={fieldClass}
                >
                  <option value="" disabled className="text-slate-900">Select an option</option>
                  {unitTypeOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-slate-900">{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pe-budget" className={labelClass}>Budget Preference</label>
                <select
                  id="pe-budget"
                  required
                  value={form.budget}
                  onChange={handleChange("budget")}
                  className={fieldClass}
                >
                  <option value="" disabled className="text-slate-900">Select an option</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-slate-900">{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="pe-decision" className={labelClass}>Primary Decision Maker?</label>
                  <select
                    id="pe-decision"
                    required
                    value={form.decisionMaker}
                    onChange={handleChange("decisionMaker")}
                    className={fieldClass}
                  >
                    <option value="" disabled className="text-slate-900">Select an option</option>
                    <option value="Yes" className="text-slate-900">Yes</option>
                    <option value="No" className="text-slate-900">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pe-timeline" className={labelClass}>Purchase Timeline</label>
                  <select
                    id="pe-timeline"
                    required
                    value={form.timeline}
                    onChange={handleChange("timeline")}
                    className={fieldClass}
                  >
                    <option value="" disabled className="text-slate-900">Select an option</option>
                    <option value="Immediately" className="text-slate-900">Immediately</option>
                    <option value="1 – 3 months" className="text-slate-900">1 – 3 months</option>
                    <option value="3 – 6 months" className="text-slate-900">3 – 6 months</option>
                    <option value="6 – 12 months" className="text-slate-900">6 – 12 months</option>
                    <option value="Just exploring" className="text-slate-900">Just exploring</option>
                  </select>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-xs text-white/70">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={handleChange("consent")}
                  className="mt-0.5 accent-amber-500"
                />
                <span>
                  By submitting this form, you consent to being contacted about
                  this property and receiving related updates. You can opt out
                  at any time.
                </span>
              </label>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="rounded-full bg-amber-500 px-14 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-amber-400"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
