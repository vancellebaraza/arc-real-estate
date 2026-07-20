import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  Building2,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const CONTACT_IMAGE =
  "/Ark real estates1.png";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src={CONTACT_IMAGE}
          alt="Fusion Pro Real Estates"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-yellow-400">
              Contact Us
            </p>

            <h1 className="mt-5 text-5xl font-light text-white md:text-6xl">
              We'd Love To Hear From You
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Whether you're looking for your dream home, selling a luxury
              property, or seeking investment opportunities, our team is ready
              to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-yellow-600">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-light">
              Contact Information
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <Phone className="h-10 w-10 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Call Us
              </h3>

              <p className="mt-3 text-gray-600">
                +254 733 660 993
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <Mail className="h-10 w-10 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Email
              </h3>

              <p className="mt-3 text-gray-600">
                marketing@arkrealestates.com
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <MapPin className="h-10 w-10 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Office
              </h3>

              <p className="mt-3 text-gray-600">
                Warwick Centre, Gigiri
                <br />
                P.O. Box 22138-00400 
                <br/>
                Nairobi, Kenya
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <Clock className="h-10 w-10 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Working Hours
              </h3>

              <p className="mt-3 text-gray-600">
                Mon - Fri
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>
<section className="py-20 bg-stone-50">
  <div className="mx-auto max-w-6xl px-6">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
        Stay Connected
      </p>

      <h2 className="mt-3 text-4xl font-semibold text-slate-900">
        Follow Real Arc Estates
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Connect with us on social media to discover new listings, property
        insights, investment opportunities and company updates.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {/* Facebook */}
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600">
          <FaFacebookF className="text-2xl text-blue-600 group-hover:text-white" />
        </div>

        <h3 className="mt-5 font-semibold text-slate-900">
          Facebook
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Follow our latest listings.
        </p>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 transition group-hover:bg-pink-500">
          <FaInstagram className="text-2xl text-pink-500 group-hover:text-white" />
        </div>

        <h3 className="mt-5 font-semibold text-slate-900">
          Instagram
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Luxury homes & lifestyle.
        </p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-700 hover:shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 transition group-hover:bg-sky-700">
          <FaLinkedinIn className="text-2xl text-sky-700 group-hover:text-white" />
        </div>

        <h3 className="mt-5 font-semibold text-slate-900">
          LinkedIn
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Company news & careers.
        </p>
      </a>

      {/* X */}
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-black">
          <FaXTwitter className="text-2xl text-black group-hover:text-white" />
        </div>

        <h3 className="mt-5 font-semibold text-slate-900">
          X
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Property updates & news.
        </p>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 transition group-hover:bg-green-600">
          <FaWhatsapp className="text-2xl text-green-600 group-hover:text-white" />
        </div>

        <h3 className="mt-5 font-semibold text-slate-900">
          WhatsApp
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Chat directly with us.
        </p>
      </a>
    </div>
  </div>
</section>
      {/* Office Hours */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl bg-slate-900 p-12 text-white">

            <div className="flex items-center gap-4">
              <Clock className="h-10 w-10 text-yellow-400" />

              <div>
                <p className="uppercase tracking-[0.25em] text-yellow-400">
                  Opening Hours
                </p>

                <h2 className="text-3xl font-light">
                  Visit Our Office
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="font-semibold">
                  Monday - Friday
                </h3>

                <p className="mt-2 text-white/70">
                  8:00 AM - 5:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Saturday
                </h3>

                <p className="mt-2 text-white/70">
                  9:00 AM - 1:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Sunday
                </h3>

                <p className="mt-2 text-white/70">
                  Closed
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              title="Arc Real Estates"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5017.276935062796!2d36.80844282496545!3d-1.2353476487528785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17b971bec3f1%3A0x9130770823960f80!2sWarwick%20Centre!5e1!3m2!1sen!2ske!4v1784585932624!5m2!1sen!2ske"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-yellow-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-light">
              Real Estate Experts
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-10 text-center shadow">
              <ShieldCheck className="mx-auto h-12 w-12 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Trusted Company
              </h3>

              <p className="mt-4 text-gray-600">
                Years of experience helping clients buy and sell premium
                properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 text-center shadow">
              <Building2 className="mx-auto h-12 w-12 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Premium Listings
              </h3>

              <p className="mt-4 text-gray-600">
                Exclusive luxury homes and investment opportunities across
                Kenya.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 text-center shadow">
              <Headphones className="mx-auto h-12 w-12 text-yellow-600" />

              <h3 className="mt-6 text-xl font-semibold">
                Dedicated Support
              </h3>

              <p className="mt-4 text-gray-600">
                Our consultants are always ready to guide you through every
                step of your property journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}