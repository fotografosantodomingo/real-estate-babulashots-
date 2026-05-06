export const basePath = "/inmobiliaria";
export const siteOrigin = "https://babulashotsrd.com";
export const siteUrl = `${siteOrigin}${basePath}`;
export const phoneDisplay = "809 720 95 47";
export const phoneE164 = "+18097209547";
export const email = "info@babulashotsrd.com";
export const whatsappNumber = "18097209547";

export function withBasePath(path: string) {
  if (path === "/") return `${basePath}/`;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalUrl(path: string) {
  const normalized = path === "/" ? "/" : `${path.replace(/^\/|\/$/g, "")}/`;
  return `${siteUrl}${normalized === "/" ? "/" : `/${normalized}`}`;
}

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Babula Shots",
  url: siteOrigin,
  telephone: phoneE164,
  email,
  logo: `${siteUrl}/images/cropped-babulashotslogo-1.webp`,
  sameAs: ["https://www.instagram.com/babulashotsrd/"]
};
