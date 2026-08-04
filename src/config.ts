// Central configuration for PoolComplianceMelbourne.com.au
// Update PHONE_NUMBER and FORM_WEBHOOK_URL with live values before going to production.

export const SITE_URL = "https://poolcompliancemelbourne.com.au";
export const SITE_NAME = "Pool Compliance Melbourne";
export const OPERATOR_NAME = "CertCycle";

// Placeholder — replace with the live booking line before launch.
export const PHONE_NUMBER = "1300 765 432";
export const PHONE_NUMBER_TEL = "1300765432";

// Placeholder — replace with the live form-processing endpoint before launch.
export const FORM_WEBHOOK_URL = "https://forms.certcycle.com.au/api/submit/pool-compliance-melbourne";

export const PRICE = "$240";
export const PRICE_RAW = 240;

// Guarantee terms: exactly one free re-inspection, within this window, if the
// first inspection fails. Additional re-inspections (or ones outside the
// window) are charged at RE_INSPECTION_FEE. Keep in sync with the inspector
// subcontract terms — the site promise and the inspector payout must match.
export const RE_INSPECTION_WINDOW_DAYS = 60;
export const RE_INSPECTION_FEE = "$90";
export const GUARANTEE_SHORT = "$240 flat — includes one free re-inspection";
export const GUARANTEE_FULL = `If your barrier doesn't pass first time, your first re-inspection within ${RE_INSPECTION_WINDOW_DAYS} days is included free. Additional re-inspections are ${RE_INSPECTION_FEE}.`;

export const BUSINESS_HOURS = "Mon–Sat, 7am–6pm";
export const SCHEDULING_WINDOW = "48 hours";

export const EMAIL = "bookings@poolcompliancemelbourne.com.au";

export const ABN = "00 000 000 000"; // Placeholder — replace with registered ABN.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: "pool-barrier-inspection",
    name: "Pool Barrier Inspection",
    shortName: "Pool Barrier Inspection",
    metaTitle: "Pool Barrier Inspection Melbourne | Form 23",
    metaDescription:
      "BPC-registered pool barrier inspections across Melbourne. $240 flat, Form 23 on pass, one free re-inspection included. Book within 48 hours.",
    h1: "Pool Barrier Inspection Melbourne",
    summary:
      "A full compliance inspection of your pool fence, gates and surrounds against the Victorian barrier standard, with a Form 23 issued on the day if it passes.",
  },
  {
    slug: "form-23-certificate",
    name: "Form 23 Certificate of Barrier Compliance",
    shortName: "Form 23 Certificate",
    metaTitle: "Form 23 Certificate Melbourne | Barrier Compliance",
    metaDescription:
      "Get your Form 23 Certificate of Barrier Compliance from a BPC-registered inspector. $240 flat, issued on the spot when your barrier passes.",
    h1: "Form 23 Certificate of Barrier Compliance",
    summary:
      "The Form 23 is the legal document that proves your pool or spa barrier meets the Victorian safety standard. We issue it on the spot when your barrier passes.",
  },
  {
    slug: "spa-barrier-inspection",
    name: "Spa Barrier Inspection",
    shortName: "Spa Barrier Inspection",
    metaTitle: "Spa Barrier Inspection Melbourne | Form 23",
    metaDescription:
      "Above-ground spas and portable spas with water over 300mm deep need a compliant barrier too. Book a BPC-registered spa inspection, $240 flat.",
    h1: "Spa Barrier Inspection Melbourne",
    summary:
      "If your spa holds more than 300mm of water, Victorian law treats it the same as a swimming pool. We inspect spa barriers and issue Form 23 certificates.",
  },
  {
    slug: "pre-sale-pool-inspection",
    name: "Pre-Sale Pool Inspection",
    shortName: "Pre-Sale Inspection",
    metaTitle: "Pre-Sale Pool Inspection Melbourne | Vendors",
    metaDescription:
      "Selling a home with a pool in Victoria? You need a valid Form 23 before settlement. Book a pre-sale barrier inspection, $240 flat, 48-hour scheduling.",
    h1: "Pre-Sale Pool Inspection Melbourne",
    summary:
      "Victorian vendors must provide a valid Certificate of Barrier Compliance before selling a property with a pool or spa. We help you get it sorted before your campaign starts.",
  },
  {
    slug: "rental-pool-compliance",
    name: "Rental Pool Compliance",
    shortName: "Rental Compliance",
    metaTitle: "Rental Pool Compliance Melbourne | Landlords",
    metaDescription:
      "Landlords: keep rental pool barriers compliant with a BPC-registered inspection. $240 flat, Form 23 on pass, reminders before your renewal is due.",
    h1: "Rental Pool Compliance Inspection Melbourne",
    summary:
      "Landlords carry the same barrier compliance obligations as owner-occupiers. We inspect rental properties and help agents keep certificates current across a portfolio.",
  },
  {
    slug: "re-inspection",
    name: "Pool Barrier Re-Inspection",
    shortName: "Re-Inspection",
    metaTitle: "Pool Barrier Re-Inspection Melbourne | Free Follow-Up",
    metaDescription:
      "Failed your first pool barrier inspection? Your first re-inspection within 60 days is included free. Book your follow-up visit here.",
    h1: "Pool Barrier Re-Inspection Melbourne",
    summary:
      "About one in three barriers fail on the first visit. If yours does, your first re-inspection within 60 days is included free.",
  },
];

// Lightweight suburb index used for schema.org areaServed, nav lists and
// internal-linking blocks. Full page content lives in the `locations`
// content collection (src/content/locations/*.md).
export type SuburbRef = { slug: string; name: string };

export const SUBURBS: SuburbRef[] = [
  { slug: "brighton", name: "Brighton" },
  { slug: "bentleigh", name: "Bentleigh" },
  { slug: "beaumaris", name: "Beaumaris" },
  { slug: "black-rock", name: "Black Rock" },
  { slug: "caulfield", name: "Caulfield" },
  { slug: "glen-waverley", name: "Glen Waverley" },
  { slug: "wheelers-hill", name: "Wheelers Hill" },
  { slug: "templestowe", name: "Templestowe" },
  { slug: "doncaster", name: "Doncaster" },
  { slug: "balwyn", name: "Balwyn" },
  { slug: "kew", name: "Kew" },
  { slug: "berwick", name: "Berwick" },
  { slug: "narre-warren", name: "Narre Warren" },
  { slug: "cranbourne", name: "Cranbourne" },
  { slug: "frankston", name: "Frankston" },
  { slug: "mount-eliza", name: "Mount Eliza" },
  { slug: "point-cook", name: "Point Cook" },
  { slug: "tarneit", name: "Tarneit" },
  { slug: "werribee", name: "Werribee" },
  { slug: "essendon", name: "Essendon" },
];
