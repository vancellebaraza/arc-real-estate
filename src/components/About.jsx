import logo1 from "../assets/arkrealestate.jpg";

const STATS = [
  { num: "8,000+", label: "No. of Units" },
  { num: "KES 31B", label: "Total Property Value" },
  { num: "100+", label: "Combined Years of Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="slide-left">
          <img
            src={logo1}
            alt="Real Ark Estate office"
            className="w-full h-96 object-cover rounded-sm"
            loading="lazy"
          />
        </div>

        <div className="slide-right">
          <div className="gold-line mb-5" />
          <h2
            className="font-display text-3xl md:text-4xl font-light"
            style={{ color: "var(--charcoal)" }}
          >
            Crafting Legacies Since 2008
          </h2>
          <p
            className="mt-5 leading-relaxed font-light"
            style={{ color: "var(--muted)" }}
          >
            ARK Real Estate is a premier luxury property consultancy
            connecting discerning buyers with extraordinary residences. Our
            team provides white-glove service from first viewing to final
            key.
          </p>

          <div className="mt-8 flex gap-10">
            {STATS.map((stat,index) => (
              <div key={stat.label}  className="slide-up" style={{transitionDelay: `${index * 150}ms`,}}>
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
