import { Building2, Award, Users, Target,
  ShieldCheck,
  Lightbulb,
  Handshake, } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
    const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
  return (
    <main className="bg-stone-50">
        <Navbar />
      {/* Hero */}
      <section className="relative h-[70vh]">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Real Estate"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="max-w-3xl " variants={fadeUp}>
            <p className="uppercase tracking-[0.35em] text-amber-400 text-sm">
              About Us
            </p>

            <h1 className="mt-5 text-5xl font-light text-white md:text-6xl">
              Who we are
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
               Established in 2008, we are a leading real estate company in Kenya dedicated to providing high-quality, prompt, and reliable services. Our core focus is on exceeding customer expectations with integrity and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
    variants={fadeLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
            <p className="text-4xl uppercase tracking-[0.3em] text-amber-600 text-sm">
              Our Strengths
            </p>

            {/* <h2 className="mt-4 text-4xl font-semibold text-slate-900">
              Your Trusted Property Partner
            </h2> */}

            <p className="mt-6 text-slate-600 leading-8">
               Established: Over a decade of industry experience with a proven track record. Focused: Deep market knowledge delivering precise, effective solutions. Trusted: Known for fair, ethical, and trustworthy practices.
            </p>

            {/* <p className="mt-5 text-slate-600 leading-8">
              We combine market knowledge, professional expertise, and a
              client-first approach to deliver exceptional service from the
              first consultation to the final transaction.
            </p> */}
          </motion.div>
<motion.div
  variants={fadeRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
          <div>
            <img
              src="https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Office"
              className="rounded-3xl shadow-xl"
            />
          </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <Target className="text-amber-400" size={40} />

            <h3 className="mt-6 text-3xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-white/80">
             To provide professional high quality, prompt, reliable service with integrity while exceeding customer expectations in real estate services.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-500 p-10 text-white">
            <Building2 size={40} />

            <h3 className="mt-6 text-3xl font-semibold">
              Our Vision
            </h3>

            <p className="mt-4 leading-8">
               To be the leading real estate company of choice in Kenya, that delivers exceptional customer experiences.


            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-amber-600 text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Our Core Values
          </h2>
        </div>

<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-2xl bg-white p-8 shadow">
    <Users className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Caring for Customer Satisfaction
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We genuinely care about our clients and strive to exceed their
      expectations through exceptional service and lasting relationships.
    </p> */}
  </div>

  <div className="rounded-2xl bg-white p-8 shadow">
    <ShieldCheck className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Honesty Through Transparency
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We communicate openly, provide accurate information, and build trust
      through honesty in every interaction.
    </p> */}
  </div>

  <div className="rounded-2xl bg-white p-8 shadow">
    <Award className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Excellence  in Exceeding Expectations
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We are committed to exceeding expectations by delivering quality,
      professionalism, and attention to every detail.
    </p> */}
  </div>

  <div className="rounded-2xl bg-white p-8 shadow">
    <Lightbulb className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Visionary by Forward-Thinking Solutions
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We embrace innovation and forward-thinking solutions that create lasting
      value for our clients and communities.
    </p> */}
  </div>

  <div className="rounded-2xl bg-white p-8 shadow">
    <Building2 className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Integrity By Honouring Commitments
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We honor our commitments, act ethically, and uphold the highest standards
      in everything we do.
    </p> */}
  </div>

  <div className="rounded-2xl bg-white p-8 shadow">
    <Handshake className="text-amber-600" size={36} />

    <h3 className="mt-5 text-xl font-semibold">
      Support Through Step-By-Step Guidance
    </h3>

    {/* <p className="mt-3 text-slate-600">
      We guide our clients every step of the way, providing dependable support
      from the first consultation to project completion.
    </p> */}
  </div>
</div>
      </section>

      {/* Statistics */}
<section className="bg-slate-900 py-24">
  <div className="mx-auto max-w-7xl px-6">
    {/* Section Heading */}
    <div className="mb-16 text-center">
      <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-amber-400"></div>

      <h2 className="text-4xl font-semibold text-white">
        Our Reach
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
        We serve clients in major towns and cities across Kenya, ensuring our
        premier property valuation, management, and consultancy services are
        always within reach.
      </p>
    </div>

    {/* Stats */}
    <div className="grid gap-10 text-center md:grid-cols-3">
      <div>
        <h3 className="text-5xl font-bold text-amber-400">31B+</h3>
        <p className="mt-3 text-white/70">Property Value</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-amber-400">100+</h3>
        <p className="mt-3 text-white/70">Total Years of Experience</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-amber-400">8,000+</h3>
        <p className="mt-3 text-white/70">No. of Units</p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-amber-500 px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-semibold">
            Let's Find Your Perfect Property
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Whether you're buying, selling or investing, we're here to guide
            you every step of the way.
          </p>

<Link to="/contact" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-lg font-semibold text-amber-500 transition hover:bg-white/90">
Contact Us
</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}