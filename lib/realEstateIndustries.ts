import { routeMessage } from "@/lib/routeMap";

export type RealEstateIndustry = {
  slug: string;
  enSlug: string;
  title: string;
  enTitle: string;
  description: string;
  enDescription: string;
  h1: string;
  enH1: string;
  intro: string;
  enIntro: string;
  needs: string[];
  enNeeds: string[];
  whatsappMessage: string;
};

export const realEstateIndustries: RealEstateIndustry[] = [
  {
    slug: "fotografia-para-agentes-inmobiliarios",
    enSlug: "photography-for-real-estate-agents",
    title: "Fotografia para agentes inmobiliarios | Babula Shots",
    enTitle: "Photography for real estate agents | Babula Shots",
    description: "Contenido visual para agentes inmobiliarios: fotos, video, reels, drone y formatos listos para publicar.",
    enDescription: "Visual content for real estate agents: photos, video, reels, drone and publication-ready formats.",
    h1: "Fotografia para agentes inmobiliarios",
    enH1: "Photography for real estate agents",
    intro: "Ayudamos a agentes a publicar propiedades con mejor presentacion, entregas rapidas y contenido listo para portales y redes.",
    enIntro: "We help agents publish properties with stronger presentation, fast delivery and content ready for portals and social media.",
    needs: ["Listados que destaquen", "Fotos limpias", "Video corto", "Reels", "Entrega rapida"],
    enNeeds: ["Listings that stand out", "Clean photos", "Short video", "Reels", "Fast delivery"],
    whatsappMessage: "Hola, soy agente inmobiliario y necesito paquetes de foto/video para propiedades. Me pueden enviar informacion?"
  },
  {
    slug: "contenido-para-desarrolladores-inmobiliarios",
    enSlug: "content-for-real-estate-developers",
    title: "Contenido para desarrolladores inmobiliarios | Babula Shots",
    enTitle: "Content for real estate developers | Babula Shots",
    description: "Foto, video, drone y contenido de lanzamiento para proyectos inmobiliarios, torres, villas y preventas.",
    enDescription: "Photo, video, drone and launch content for real estate developments, towers, villas and presales.",
    h1: "Contenido para desarrolladores inmobiliarios",
    enH1: "Content for real estate developers",
    intro: "Producimos contenido para preventa, avance de obra, lanzamiento, brochures, redes y paginas de proyectos inmobiliarios.",
    enIntro: "We produce content for presales, construction progress, launches, brochures, social media and development websites.",
    needs: ["Lanzamiento", "Avance de obra", "Drone", "Video institucional", "Contenido mensual"],
    enNeeds: ["Launch content", "Construction progress", "Drone", "Brand video", "Monthly content"],
    whatsappMessage: routeMessage("contenido-para-desarrolladores-inmobiliarios")
  }
];

export function industryPath(industry: RealEstateIndustry, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/${industry.enSlug}` : `/${industry.slug}`;
}

export function findIndustryByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateIndustries.find((industry) => slug === (locale === "en" ? industry.enSlug : industry.slug));
}
