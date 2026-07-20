import { useState } from "react";

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(184,148,95,0.3)",
  color: "#fff",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this only flips local UI state — it does not send the enquiry
    // anywhere yet. Wire this up to a real endpoint (e.g. an API route,
    // Supabase insert, or email service) before this goes live, otherwise
    // every enquiry submitted on the site is silently lost.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-3xl mx-auto fade-in">
        <div className="text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2
            className="font-display text-3xl md:text-4xl font-light"
            style={{ color: "#ffffff" }}
          >
            Let's Find Your Legacy
          </h2>
          <p
            className="mt-3 font-light"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Reach out and our team will curate a bespoke selection for you.
          </p>
        </div>

        {submitted ? (
          <p
            className="mt-6 text-center text-sm font-light"
            style={{ color: "var(--gold-light)" }}
          >
            Thank you. We shall be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="c-name"
                  className="text-xs uppercase tracking-widest block mb-2 font-medium"
                  style={{ color: "var(--gold-light)" }}
                >
                  Full Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full px-4 py-3 rounded text-sm font-light"
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="c-email"
                  className="text-xs uppercase tracking-widest block mb-2 font-medium"
                  style={{ color: "var(--gold-light)" }}
                >
                  Email Address
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-3 rounded text-sm font-light"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="c-msg"
                className="text-xs uppercase tracking-widest block mb-2 font-medium"
                style={{ color: "var(--gold-light)" }}
              >
                Message
              </label>
              <textarea
                id="c-msg"
                rows={5}
                required
                value={form.message}
                onChange={handleChange("message")}
                className="w-full px-4 py-3 rounded text-sm font-light resize-none"
                style={inputStyle}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-3 text-xs uppercase tracking-[0.3em] rounded border transition-all hover:scale-105"
                style={{
                  color: "var(--gold-light)",
                  borderColor: "var(--gold-light)",
                  background: "transparent",
                }}
              >
                Send Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
