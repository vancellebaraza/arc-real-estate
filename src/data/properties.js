import s0 from "../assets/symphony-residence/img1.jpeg";
import s1 from "../assets/symphony-residence/img2.jpeg";
import s2 from "../assets/symphony-residence/img3.jpeg";
import s3 from "../assets/symphony-residence/img4.jpeg";
import s4 from "../assets/symphony-residence/img5.jpeg";

import c0 from "../assets/Canto/img1.jpeg";
import c1 from "../assets/Canto/img2.png";
import c2 from "../assets/Canto/img3.jpeg";

import cb0 from "../assets/CITYBLUE/img1.jpeg";
import cb1 from "../assets/CITYBLUE/img2.jpeg";
import cb2 from "../assets/CITYBLUE/img3.jpeg";

import i0 from "../assets/IVYPARK/img1.jpeg";
import i1 from "../assets/IVYPARK/floorplans/img2.jpeg";
import i2 from "../assets/IVYPARK/floorplans/img3.jpeg";
import i3 from "../assets/IVYPARK/floorplans/img4.jpeg";
import i4 from "../assets/IVYPARK/img5.jpeg";
import i5 from "../assets/IVYPARK/img6.jpeg";
import i6 from "../assets/IVYPARK/img7.jpeg";

import r0 from "../assets/RIVERSIDE/img1.jpeg";
import r1 from "../assets/RIVERSIDE/img2.jpeg";
import r2 from "../assets/RIVERSIDE/img3.jpeg";
import r3 from "../assets/RIVERSIDE/img4.jpeg";
import r4 from "../assets/PINEBROOK/img1.jpeg";


import p1 from "../assets/PINEBROOK/img2.jpeg";
import p2 from "../assets/PINEBROOK/img3.jpeg";
import p3 from "../assets/PINEBROOK/img4.jpeg";

import m0 from "../assets/MARAGROOVE/img1.jpeg";
import m1 from "../assets/MARAGROOVE/img2.jpeg";
import m2 from "../assets/MARAGROOVE/img3.jpeg";
import m3 from "../assets/MARAGROOVE/img4.jpeg";

import l0 from "../assets/LUKENYA/img1.jpeg";
import l1 from "../assets/LUKENYA/img2.jpeg";
import l2 from "../assets/LUKENYA/img3.jpeg";
import l3 from "../assets/LUKENYA/img4.jpeg";
import l4 from "../assets/LUKENYA/img5.jpeg";

import mh0 from "../assets/MANGOHAVEN/img1.jpeg";
import mh1 from "../assets/MANGOHAVEN/img2.jpeg";
import mh2 from "../assets/MANGOHAVEN/img3.jpeg";
import mh3 from "../assets/MANGOHAVEN/img4.jpeg";

import {
  Dumbbell,
  Waves,
  Car,
  ShieldCheck,
  Trees,
  Building2,
  Baby,
  Gamepad2,
  Clapperboard,
  BriefcaseBusiness,
  HeartPulse,
  Sparkles,
  CircleParking,
  Zap,
  Droplets,
  CookingPot,
  Video,
  DoorOpen,
  Fence,
  Home,
  Sun,
} from "lucide-react";


export const properties = [
  {
    id: 1,
    title: "Symphony Residencies",
    location: "Lavington, Nairobi",
    bedrooms: "1BR – 3BR",
    area: "35.4 – 189.5 m²",
    bathrooms: "1 – 3",
    shortDesc:
      "Symphony Residences by VAAL in Lavington — 1, 2 and 3-bedroom apartments from USD 49,249, currently 30% complete with handover targeted for Q1 2029.",
    price: "FROM USD 49,249",
    image: s3,
    detail: {
      desc:
        `Symphony Residences by VAAL — Lavington

Status: 30% complete, handover targeted Q1 2029. 289 units in total.

One-Bedroom Apartments

Sized 35.4 to 45.1 sqm, priced from USD 49,249 to USD 58,687.

Two-Bedroom Apartments

Sized 75.9 to 112.9 sqm, priced from USD 91,066 to USD 135,480.

Three-Bedroom Apartments

Sized 178 to 189.5 sqm, priced from USD 210,579 to USD 259,145.

Payment plan, full amenity list, and unit availability are still being confirmed with the developer — pricing above is accurate as of the latest schedule.`,
      images: [s3, s1, s2, s0, s4],
      floorPlans: [
        {
          name: "Studio Apartment",
          image: s0,
        },
        {
          name: "1 Bedroom Apartment",
          image: s1,
        },
        {
          name: "Typical Floor Plan",
          image: s2,
        },
      ],
    },
    amenities: [],
  },
  {
    id: 2,
    title: "Canto residencies",
    location: "Westlands, Nairobi",
    bedrooms: "Studio – 1BR",
    area: "Sizes pending confirmation",
    bathrooms: "1",
    shortDesc:
      "Canto by VAAL in Westlands — studio and 1-bedroom apartments from USD 76,950, in a 25-floor rooftop-pool development 30% complete for End 2028.",
    price: "FROM USD 76,950",
    image: c1,
    detail: {
      desc:
        `Canto by VAAL — Westlands

Status: 30% complete, targeted completion End 2028. 273 units across 25 floors.

Studio & One-Bedroom Apartments

Priced from USD 76,950 to USD 96,079. Exact unit sizes have not yet been confirmed by the developer.

Best suited for investors, BnB operators, and long-term rental. Unit sizes, payment plan, and rental estimates are still pending from the developer.`,
      images: [c1, c0, c2],
    //       floorPlans: [
    //   {
    //     name: "Studio Apartment",
    //     image: cantoFloor1,
    //   },
    //   {
    //     name: "1 Bedroom Apartment",
    //     image: cantoFloor2,
    //   },
    //   {
    //     name: "Typical Floor Plan",
    //     image: cantoFloor3,
    //   },
    // ],
    },
    amenities: [
  { key: "Rooftop Pool", icon: Waves },
  { key: "Cinema Lounge", icon: Clapperboard },
  { key: "Gym", icon: Dumbbell },
  { key: "Sauna", icon: Sparkles },
  { key: "Coworking Space", icon: BriefcaseBusiness },
  { key: "Mini Golf", icon: Gamepad2 },
  { key: "Social Areas", icon: Building2 },
],
  },
  {
    id: 3,
    title: "Divine Residence By City Blue",
    location: "Riverside Drive, Nairobi",
    bedrooms: "1BR – 2BR",
    area: "Sizes pending confirmation",
    bathrooms: "1 – 2",
    shortDesc:
      "Divine Residence by CityBlue on Riverside Drive — hotel-managed 1 and 2-bedroom apartments from USD 206,670, with a projected 12–14% ROI.",
    price: "FROM USD 206,670",
    image: cb2,
    detail: {
      desc:
        `Divine Residence by CityBlue — Riverside Drive

Status: 60% complete, targeted completion Q1 2028. 252 units, hotel-managed under CityBlue.

One & Two-Bedroom Apartments

Priced from USD 206,670 to USD 274,509. Potential ROI of 12–14% for investors.

This is a hotel-managed investment development — units are positioned for hotel-style rental income rather than owner occupation. Exact unit sizes, payment plan, and availability are still pending from the developer.`,
      images: [cb2, cb0, cb1],
    //       floorPlans: [
    //   {
    //     name: "Studio Apartment",
    //     image: cantoFloor1,
    //   },
    //   {
    //     name: "1 Bedroom Apartment",
    //     image: cantoFloor2,
    //   },
    //   {
    //     name: "Typical Floor Plan",
    //     image: cantoFloor3,
    //   },
    // ],
    },
    amenities: [],
  },
  {
    id: 4,
    title: "IVY Park Residencies",
    location: "Kileleshwa, Nairobi",
    bedrooms: "1BR – 3BR",
    area: "62 – 142 m²",
    bathrooms: "1 – 3",
    shortDesc:
      "Ivy Blossom in Kileleshwa — 1, 2 and 3-bedroom apartments from KES 6.82M, 65% complete with handover targeted for End 2027.",
    price: "FROM KES 6.82M",
    image: i0,
    detail: {
      desc:
        `IVY PARK RESIDENCES — Kileleshwa

Status: 65% complete, targeted completion End 2027. 220 units.

Elegant 1 Bedroom Units

Sizes of 62, 67, 73, and 76 sqm, priced from KES 6.82M to KES 8.74M for cash buyers, and KES 7.32M to KES 9.24M on installment plans.

Contemporary 2 Bedroom Units

Sizes of 108, 110, 114, 115, and 128 sqm, priced from KES 10.78M to KES 14.72M for cash and KES 11.28M to KES 15.22M on installments.

Modern 3 Bedroom Units

A generous 142 sqm floor plan, priced from KES 15.62M to KES 16.33M for cash buyers and KES 16.12M to KES 16.83M on installment terms.

`,
      images: [i0,  i4, i5, i6],
      floorPlans: [
        {
          name: "plan 1",
          image: i1,
        },
        {
          name: "plan 2",
          image: i2,
        },
        {
          name: "plan 3",
          image: i3,
        },
      ],
    },
    amenities: [
  { key: "Bar", icon: Building2 },
  { key: "Gym", icon: Dumbbell },
  { key: "Spa", icon: Sparkles },
  { key: "Kids' Area", icon: Baby },
  { key: "Ping Pong", icon: Gamepad2 },
  { key: "Rooftop Garden", icon: Trees },
  { key: "Sky Lounge", icon: Building2 },
  { key: "Rooftop Cinema", icon: Clapperboard },
  { key: "DSQ", icon: Home },
],
  },
  {
    id: 5,
    title: "RiverSide Azure",
    location: "Riverside Drive, Nairobi",
    bedrooms: "1BR – 3BR",
    area: "65.62 – 141 m²",
    bathrooms: "1 – 3",
    shortDesc:
      "Riverside Azure on Riverside Drive — 1, 2 and 3-bedroom apartments from KES 8M, 20% complete with handover targeted for End 2028.",
    price: "FROM KES 8M",
    image: r0,
    detail: {
      desc:
        `RIVERSIDE AZURE — Riverside Drive, Westlands

Status: 20% complete, targeted completion End 2028. 476 units.

Premium 1 Bedroom Apartments

Sized 65.62 to 69.58 sqm, priced from KES 8M to KES 13M. Estimated rental income of KES 65,000 – 90,000 per month.

Modern 2 Bedroom Apartments

Sized 98 to 104.63 sqm, priced from KES 14M to KES 20M. Estimated rental income of KES 110,000 – 160,000 per month.

Luxury 3 Bedroom Apartments

Sized approximately 141 sqm, priced from KES 21.7M to KES 27.1M. Estimated rental income of KES 120,000 – 285,000 per month.

`,
      images: [r0, r1, r2, r3, r4],
      // floorPlans: [
      //   {
      //     name: "Studio Apartment",
      //     image: r0,
      //   },
      //   {
      //     name: "1 Bedroom Apartment",
      //     image: r1,
      //   },
      //   {
      //     name: "Typical Floor Plan",
      //     image: r2,
      //   },
      // ],
    },
    amenities: [
  { key: "Lift", icon: Building2 },
  { key: "In-house Club", icon: Building2 },
  { key: "Gym", icon: Dumbbell },
  { key: "Secure Parking", icon: CircleParking },
  { key: "Electric Fence", icon: Zap },
  { key: "Perimeter Wall", icon: Fence },
  { key: "Security Guards", icon: ShieldCheck },
],
  },
  {
    id: 6,
    title: "Pinebrook Villas",
    location: "Kitengela",
    bedrooms: 4,
    area: "50 × 100 plot",
    bathrooms: 4,
    shortDesc:
      "Pinebrook Premier Villas in Kitengela — 4-bedroom standalone maisonettes on a 50x100 plot, priced at KES 16M with rental potential of KES 60,000 – 85,000/month.",
    price: "KES 16,000,000",
    image: p1,
    detail: {
      desc:
        `Pinebrook Premier Villas — Kitengela

Exclusive 4 Bedroom Standalone Maisonettes

68 units total, each all-ensuite, on a 50 x 100 plot. Priced at KES 16,000,000, with estimated rental income of KES 60,000 – 85,000 per month.

Property Features: 4 Bedroom Standalone Maisonette – All Ensuite. Situated on a 50 x 100 Plot. Commercial area on site. In-house gym facility. Backup water supply and security.

Completion status, payment plan, and exact remaining unit count are still pending from the developer.`,
      images: [ p1, p2, p3],
      // floorPlans: [
      //   {
      //     name: "Studio Apartment",
      //     image: p0,
      //   },
      //   {
      //     name: "1 Bedroom Apartment",
      //     image: p1,
      //   },
      //   {
      //     name: "Typical Floor Plan",
      //     image: p2,
      //   },
      // ],
    },
    amenities: [
  { key: "Commercial Area", icon: Building2 },
  { key: "Gym", icon: Dumbbell },
  { key: "Backup Water Supply", icon: Droplets },
  { key: "Security", icon: ShieldCheck },
],
  },
  {
    id: 7,
    title: "Mara Groove Homes",
    location: "Syokimau",
    bedrooms: "1BR – 3BR",
    area: "56 – 166 m²",
    bathrooms: "1 – 3",
    shortDesc:
      "Mara Grove in Syokimau — 1, 2 and 3-bedroom apartments from KES 4.4M, 15% complete with handover targeted for End 2028.",
    price: "FROM KES 4.4M",
    image: m0,
    detail: {
      desc:
      `Mara Groove Homes — Syokimau

Status: 15% complete, targeted completion End 2028. 450 units.

1 Bedroom Apartments

56 sqm, priced at KES 4,400,000, with estimated rental income of KES 45,000 – 50,000 per month.

2 Bedroom Apartments

95 sqm, priced at KES 7,500,000, with estimated rental income of KES 60,000 – 70,000 per month.

3 Bedroom Apartments (with DSQ)

Available in 140 sqm at KES 10,900,000 and up to 166 sqm at KES 13,000,000, with estimated rental income of KES 70,000 – 100,000 per month.

`,
      images: [m0, m1, m2, m3],
    //       floorPlans: [
    //   {
    //     name: "Studio Apartment",
    //     image: cantoFloor1,
    //   },
    //   {
    //     name: "1 Bedroom Apartment",
    //     image: cantoFloor2,
    //   },
    //   {
    //     name: "Typical Floor Plan",
    //     image: cantoFloor3,
    //   },
    // ],
    },
    amenities: [
  { key: "Quality Finishes", icon: Sparkles },
  { key: "Reliable Water Supply", icon: Droplets },
  { key: "Elevator", icon: Building2 },
  { key: "Backup Generator", icon: Zap },
  { key: "Swimming Pool", icon: Waves },
  { key: "Gym", icon: Dumbbell },
  { key: "Children's Play Area", icon: Baby },
],
  },
  {
    id: 8,
    title: "Lukenya Estates",
    location: "Athi River",
    bedrooms: "3BR – 4BR",
    area: "160 – 380 m²",
    bathrooms: "3 – 4",
    shortDesc:
      "Lukenya Plains in Athi River — 3 and 4-bedroom homes from KES 18.18M, 10% complete with handover targeted for 2032.",
    price: "FROM KES 18.18M",
    image: l0,
    detail: {
      desc:
      `Lukenya Plains — Athi River

Status: 10% complete, targeted completion 2032. 791 units.

3 Bedroom Homes

Available in 160, 182, and 188 sqm layouts, priced from KES 18.18M to KES 22.48M.

Elegant 3 Bedroom Semi-detached Maisonette (188 sqm)

All ensuite bedrooms, laundry area, solar water heating, dining and lounge area, private parking for two cars, private manicured gardens.   |   Instalments: KES 22,500,000   |   Mortgage Option: KES 23,500,000

4 Bedroom Homes

Available in 195, 204, 252, and 380 sqm layouts, priced from KES 25.48M to KES 43.38M.

Spacious 4 Bedroom Maisonette (204 sqm) — Instalment Plan: KES 26,000,000 | Mortgage Option: KES 28,000,000
Modern 4 Bedroom Bungalow (195 sqm) — Instalment Plan: KES 25,500,000 | Mortgage Option: KES 27,000,000
Luxury 4 Bedroom Villa (252 sqm) — Instalment Plan: KES 30,500,000 | Mortgage Option: KES 32,000,000
Exclusive 4 Bedroom Super Villa (380 sqm) — Instalment Plan: KES 43,400,000 | Mortgage Option: KES 45,000,000

Payment plan and rental estimates for the base range are still pending confirmation from the developer.`,
      images: [l0, l1, l2, l3, l4],
      // floorPlans: [
      //   {
      //     name: "Studio Apartment",
      //     image: l0,
      //   },
      //   {
      //     name: "1 Bedroom Apartment",
      //     image: l1,
      //   },
      //   {
      //     name: "Typical Floor Plan",
      //     image: l2,
      //   },
      // ],
    },
    amenities: [
  { key: "Solar Water Heating", icon: Sun },
  { key: "Private 2-Car Parking", icon: Car },
  { key: "Private Manicured Gardens", icon: Trees },
],
  },
    {
    id: 9,
    title: "Mango Haven",
    location: "Syokimau",
    bedrooms: "Studio – 3BR",
    area: "32.89 – 123.54 m²",
    bathrooms: "1 – 3",
    shortDesc:
      "Mango Tree Residence in Syokimau — studio to 3-bedroom apartments from KES 3.5M, currently ongoing across 1,200 units.",
    price: "FROM KES 3,500,000",
    image: mh0,
    detail: {
      desc:`Mango Tree Residence — Syokimau

Status: Ongoing. 1,200 units total.

Studio Apartments

32.89 – 36.52 sqm, priced at KES 3,500,000. Estimated rental income of KES 25,000 – 35,000 per month.

1 Bedroom Apartments

45.05 – 56.76 sqm, priced from KES 5M to KES 5.3M. Estimated rental income of KES 45,000 – 50,000 per month.

2 Bedroom Apartments

76.03 – 113.3 sqm, priced from KES 5.7M to KES 8.2M. Estimated rental income of KES 60,000 – 70,000 per month.

3 Bedroom Apartments

97.74 – 123.54 sqm, priced from KES 7M to KES 8.5M. Estimated rental income of KES 70,000 – 100,000 per month.

Completion date, exact payment plan, and per-unit availability are still pending from the developer.`,
      images: [mh0, mh1, mh2, mh3],
      // floorPlans: [
      //   {
      //     name: "Studio Apartment",
      //     image: mh0,
      //   },
      //   {
      //     name: "1 Bedroom Apartment",
      //     image: mh1,
      //   },
      //   {
      //     name: "Typical Floor Plan",
      //     image: mh2,
      //   },
      // ],
    },
    amenities: [
  { key: "In-built Cooker", icon: CookingPot },
  { key: "Commercial Area", icon: Building2 },
  { key: "Gym", icon: Dumbbell },
  { key: "Lift", icon: Building2 },
  { key: "Swimming Pool", icon: Waves },
  { key: "CCTV", icon: Video },
  { key: "Intercom", icon: DoorOpen },
],
  },
];
