import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Navbar from "@/components/ui/navbarhome";
import Footer from "@/components/ui/footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const image1 = "/Ark real estates1.png";
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <Navbar />
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact RealArc Estates
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            We'd love to hear from you.
          </h1>

          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Whether you need property maintenance, inspections, quotations,
            landscaping, electrical work, plumbing, or general support, our
            team is ready to help.
          </p>
        </div>
      </section>

{/* Contact Banner */}
<section className="py-20">
  <div className="mx-auto max-w-6xl px-6">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Contact Us
      </p>
    <div className="relative overflow-hidden rounded-3xl">
      {/* Background Image */}
      <img
        src={image1}
        alt="Fusion Pro Real Estates"
        className="h-[600px] w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-10 pb-10">
        <div className="max-w-lg px-10 text-white">


          {/* <h2 className="mt-4 text-4xl font-bold leading-tight">
            Let's Talk About Your Property
          </h2> */}



          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary p-3">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>

              <div>
                <p className="text-sm text-white/70">Call Us</p>
                <p className="font-semibold">
                  +254 700 123 456
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary p-3">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>

              <div>
                <p className="text-sm text-white/70">Email</p>
                <p className="font-semibold">
                  info@fusionpro.co.ke
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary p-3">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>

              <div>
                <p className="text-sm text-white/70">Visit Us</p>
                <p className="font-semibold">
                  Nairobi, Kenya
                </p>
              </div>
            </div>


          </div>
        </div>
        </div>
      </div>
    </div>
<section className="workinghours py-20">
  <div className="mx-auto max-w-6xl px-6">
    <div className="rounded-3xl border bg-card p-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary p-4">
          <Clock className="h-7 w-7 text-primary-foreground" />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Working Hours
          </p>

          <h2 className="mt-1 text-3xl font-semibold">
            We're Available
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-background p-6">
          <h3 className="font-semibold">Monday – Friday</h3>

          <p className="mt-2 text-muted-foreground">
            8:00 AM – 5:00 PM
          </p>
        </div>

        <div className="rounded-xl border bg-background p-6">
          <h3 className="font-semibold">Saturday</h3>

          <p className="mt-2 text-muted-foreground">
            9:00 AM – 1:00 PM
          </p>
        </div>

        <div className="rounded-xl border bg-background p-6">
          <h3 className="font-semibold">Sunday & Public Holidays</h3>

          <p className="mt-2 text-muted-foreground">
            Closed
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="maps">
  Map
</section>
<section className="otherdiv">
  Other Div
</section>
  </div>
</section>

      {/* Why Choose Us */}
      {/* <section className="border-t bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold">
            Why work with us?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6">
              <ShieldCheck className="h-6 w-6 text-primary" />

              <h3 className="mt-4 font-semibold">
                Trusted Professionals
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Experienced engineers and property specialists dedicated to
                quality service.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />

              <h3 className="mt-4 font-semibold">
                Fast Response
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                We respond quickly to service requests and maintenance
                inquiries.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <Headphones className="h-6 w-6 text-primary" />

              <h3 className="mt-4 font-semibold">
                Dedicated Support
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Our support team is always available to answer your questions.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}