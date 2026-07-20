const ABOUT_IMAGE =
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1280";

const STATS = [
  { num: "850+", label: "Properties Sold" },
  { num: "KES 310B", label: "Total Value" },
  { num: "21", label: "Years of Excellence" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="fade-in">
          <img
            src={ABOUT_IMAGE}
            alt="Real Arc Estate office"
            className="w-full h-96 object-cover rounded-sm"
            loading="lazy"
          />
        </div>

        <div className="fade-in">
          <div className="gold-line mb-5" />
          <h2
            className="font-display text-3xl md:text-4xl font-light"
            style={{ color: "var(--charcoal)" }}
          >
            Crafting Legacies Since 2003
          </h2>
          <p
            className="mt-5 leading-relaxed font-light"
            style={{ color: "var(--muted)" }}
          >
            Real Arc Estate is a premier luxury property consultancy
            connecting discerning buyers with extraordinary residences. Our
            team provides white-glove service from first viewing to final
            key.
          </p>

          <div className="mt-8 flex gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display text-3xl font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-xs uppercase tracking-widest mt-1 font-light"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
