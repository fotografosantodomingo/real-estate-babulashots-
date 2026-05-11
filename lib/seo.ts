export const basePath = "";
export const siteOrigin = "https://inmobiliaria.babulashotsrd.com";
export const siteUrl = siteOrigin;
export const mainBrandUrl = "https://babulashotsrd.com";
export const bodaUrl = "https://boda.babulashotsrd.com";
export const inmobiliariaUrl = "https://inmobiliaria.babulashotsrd.com";
export const droneUrl = "https://dron.babulashotsrd.com";
export const santoDomingoHubUrl = "https://www.fotografosantodomingo.com";
export const bookingUrl = "https://babulashotsrd.com/";
export const phoneDisplay = "809 720 95 47";
export const phoneE164 = "+18097209547";
export const email = "info@babulashotsrd.com";
export const whatsappNumber = "18097209547";
export const portfolioUrl = "https://babulashots.pic-time.com/client";
export const pricingSourceUrl = "https://www.fotografosantodomingo.com/es/prices";

export const niche = {
  label: "Inmobiliaria",
  enLabel: "Real Estate",
  whatsappContext: "Hola, vengo de la web de Inmobiliaria Babula Shots."
};

export function withBasePath(path: string) {
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function canonicalUrl(path: string) {
  const normalized = path === "/" ? "/" : `${path.replace(/^\/|\/$/g, "")}/`;
  return `${siteUrl}${normalized === "/" ? "/" : `/${normalized}`}`;
}

export function assetPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export const socialCardImage = {
  url: "/images/social-card-1200x630.webp",
  width: 1200,
  height: 630,
  alt: "Babula Shots Inmobiliaria"
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function cityAreaServed(city: string, province: string) {
  return {
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "State",
      name: province,
      containedInPlace: {
        "@type": "Country",
        name: "Dominican Republic"
      }
    }
  };
}

// ──────────────────────────────────────────────────────────────────────────
// Schema standards — see ~/.claude/.../memory/schema_standards.md
// Apply these patterns on every new page to avoid Google Rich Results warnings.
// ──────────────────────────────────────────────────────────────────────────

// Brand logo / image used by Organization + as Publisher inside Article schemas.
export const brandLogoUrl = `${mainBrandUrl}/wp-content/uploads/2024/06/Babula-Shots-Logo.webp`;

// ISO 8601 datetime helper. Dominican Republic = UTC-4 year-round (no DST).
// Use for datePublished/dateModified — bare "YYYY-MM-DD" fails Rich Results
// validator with "Invalid datetime / Missing timezone" warnings.
export function isoAst(dateString: string, time = "12:00:00"): string {
  const d = dateString.length === 10 ? dateString : dateString.slice(0, 10);
  return `${d}T${time}-04:00`;
}

// Canonical address (no streetAddress / postalCode — those would be invented data;
// see ~/.claude/.../memory/babula_studio_address.md).
export const postalAddress = {
  "@type": "PostalAddress" as const,
  addressLocality: "Santo Domingo",
  addressRegion: "Distrito Nacional",
  addressCountry: "DO"
};

// Brand-wide aggregate rating (5/5 from 23 reviews).
export const aggregateRating = {
  "@type": "AggregateRating" as const,
  ratingValue: "5",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "23",
  reviewCount: "23"
};

// Santo Domingo center fallback. TODO: replace with actual studio coordinates.
export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 18.4861,
  longitude: -69.9312
};

// Multi-city areaServed used by every LocalBusiness on the inmobiliaria subdomain.
// Per schema_standards.md rule 6 — list specific cities + country, not just country.
export const localBusinessAreaServed = [
  { "@type": "City", name: "Santo Domingo" },
  { "@type": "City", name: "Punta Cana" },
  { "@type": "City", name: "La Romana" },
  { "@type": "City", name: "Cap Cana" },
  { "@type": "City", name: "Bávaro" },
  { "@type": "Country", name: "Dominican Republic" }
];

// Numeric priceRange for real-estate photography — per shoot.
// Per schema_standards.md rule 5: prefer concrete numeric ranges over "$$".
export const localBusinessPriceRange = "US$200-US$2000";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // Distinct @id so Google doesn't merge this entity with LocalBusiness
  // (which would surface "duplicate url" warnings on Rich Results validator).
  "@id": `${siteUrl}#organization`,
  name: "Babula Shots Inmobiliaria",
  url: siteUrl,
  telephone: phoneE164,
  email,
  image: brandLogoUrl,
  logo: brandLogoUrl,
  address: postalAddress,
  // NOTE: NOT using `parentOrganization` — GSC counts the parent's name as a
  // duplicate of the outer name. Brand hierarchy is conveyed by sameAs below.
  sameAs: [
    mainBrandUrl,
    bodaUrl,
    inmobiliariaUrl,
    droneUrl,
    santoDomingoHubUrl,
    "https://www.instagram.com/babulashotsrd/"
  ]
};

export function breadcrumbSchema(items: Array<{ name: string; path?: string; item?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item ?? canonicalUrl(entry.path ?? "/")
    }))
  };
}
