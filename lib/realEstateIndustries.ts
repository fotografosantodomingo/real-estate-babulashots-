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

function message(segment: string) {
  return `Hola, necesito contenido inmobiliario para ${segment}. Podemos agendar una llamada o recibir paquetes?`;
}

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
    whatsappMessage: message("agentes inmobiliarios")
  },
  {
    slug: "fotografia-para-inmobiliarias",
    enSlug: "photography-for-real-estate-companies",
    title: "Fotografia para inmobiliarias | Babula Shots",
    enTitle: "Photography for real estate companies | Babula Shots",
    description: "Foto, video y contenido para inmobiliarias con inventario activo, equipos comerciales y propiedades en RD.",
    enDescription: "Photo, video and content for brokerages with active inventory, sales teams and properties in DR.",
    h1: "Fotografia para inmobiliarias",
    enH1: "Photography for real estate companies",
    intro: "Creamos contenido consistente para equipos que manejan varias propiedades, varios agentes y publicaciones frecuentes.",
    enIntro: "We create consistent media for teams managing multiple properties, agents and frequent listings.",
    needs: ["Inventario mensual", "Estilo consistente", "Portales", "Redes", "Entregas por lote"],
    enNeeds: ["Monthly inventory", "Consistent style", "Portals", "Social media", "Batch deliveries"],
    whatsappMessage: message("una inmobiliaria")
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
  },
  {
    slug: "fotografia-para-airbnb",
    enSlug: "airbnb-photography",
    title: "Fotografia para Airbnb | Babula Shots",
    enTitle: "Airbnb photography | Babula Shots",
    description: "Fotografia para Airbnb, Booking, villas y alquileres vacacionales en Republica Dominicana.",
    enDescription: "Photography for Airbnb, Booking, villas and vacation rentals in Dominican Republic.",
    h1: "Fotografia para Airbnb",
    enH1: "Airbnb photography",
    intro: "Mostramos la experiencia completa: habitaciones, vistas, piscina, cocina, amenidades y detalles que ayudan a reservar.",
    enIntro: "We show the full experience: rooms, views, pool, kitchen, amenities and booking details.",
    needs: ["Portada fuerte", "Habitaciones", "Amenidades", "Detalles", "Formato para plataforma"],
    enNeeds: ["Strong cover", "Rooms", "Amenities", "Details", "Platform format"],
    whatsappMessage: message("Airbnb")
  },
  {
    slug: "fotografia-para-villas-de-lujo",
    enSlug: "luxury-villa-photography",
    title: "Fotografia para villas de lujo | Babula Shots",
    enTitle: "Luxury villa photography | Babula Shots",
    description: "Foto, video y drone para villas de lujo, renta premium, reventa y marketing internacional.",
    enDescription: "Photo, video and drone for luxury villas, premium rental, resale and international marketing.",
    h1: "Fotografia para villas de lujo",
    enH1: "Luxury villa photography",
    intro: "Creamos galerias premium que enseñan arquitectura, piscina, vistas, habitaciones y experiencia de alto valor.",
    enIntro: "We create premium galleries showing architecture, pool, views, rooms and high-value experience.",
    needs: ["Arquitectura", "Piscina", "Drone", "Lifestyle", "Detalles premium"],
    enNeeds: ["Architecture", "Pool", "Drone", "Lifestyle", "Premium details"],
    whatsappMessage: message("villas de lujo")
  },
  {
    slug: "contenido-para-proyectos-en-construccion",
    enSlug: "content-for-construction-projects",
    title: "Contenido para proyectos en construccion | Babula Shots",
    enTitle: "Content for construction projects | Babula Shots",
    description: "Foto, video y drone para avances de obra, preventa, actualizaciones y seguimiento comercial.",
    enDescription: "Photo, video and drone for construction progress, presales, updates and commercial follow-up.",
    h1: "Contenido para proyectos en construccion",
    enH1: "Content for construction projects",
    intro: "Documentamos avances de obra con imagenes claras para inversionistas, compradores, redes y equipo comercial.",
    enIntro: "We document construction progress with clear visuals for investors, buyers, social media and sales teams.",
    needs: ["Avance mensual", "Drone", "Fotos de obra", "Video corto", "Contenido para inversionistas"],
    enNeeds: ["Monthly progress", "Drone", "Construction photos", "Short video", "Investor content"],
    whatsappMessage: message("proyectos en construccion")
  },
  {
    slug: "fotografia-para-hoteles-apartahoteles",
    enSlug: "hotel-aparthotel-photography",
    title: "Fotografia para hoteles y apartahoteles | Babula Shots",
    enTitle: "Hotel and aparthotel photography | Babula Shots",
    description: "Fotografia profesional para hoteles, apartahoteles, habitaciones, amenidades, lobby y restaurantes.",
    enDescription: "Professional photography for hotels, aparthotels, rooms, amenities, lobby and restaurants.",
    h1: "Fotografia para hoteles y apartahoteles",
    enH1: "Hotel and aparthotel photography",
    intro: "Producimos contenido para mostrar habitaciones, recepcion, piscina, restaurante, amenidades y experiencia del huesped.",
    enIntro: "We produce media showing rooms, reception, pool, restaurant, amenities and guest experience.",
    needs: ["Habitaciones", "Amenidades", "Restaurante", "Lobby", "Web y OTA"],
    enNeeds: ["Rooms", "Amenities", "Restaurant", "Lobby", "Website and OTA"],
    whatsappMessage: message("hoteles o apartahoteles")
  },
  {
    slug: "fotografia-para-locales-comerciales",
    enSlug: "commercial-property-photography",
    title: "Fotografia para locales comerciales | Babula Shots",
    enTitle: "Commercial property photography | Babula Shots",
    description: "Fotografia y video para locales comerciales, oficinas, plazas, restaurantes y espacios corporativos.",
    enDescription: "Photo and video for commercial units, offices, plazas, restaurants and corporate spaces.",
    h1: "Fotografia para locales comerciales",
    enH1: "Commercial property photography",
    intro: "Mostramos ubicacion, fachada, distribucion, luz, acceso y potencial comercial de cada espacio.",
    enIntro: "We show location, facade, layout, light, access and commercial potential of each space.",
    needs: ["Fachada", "Interior", "Acceso", "Entorno", "Uso comercial"],
    enNeeds: ["Facade", "Interior", "Access", "Surroundings", "Commercial use"],
    whatsappMessage: message("locales comerciales")
  }
];

export function industryPath(industry: RealEstateIndustry, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/${industry.enSlug}` : `/${industry.slug}`;
}

export function findIndustryByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateIndustries.find((industry) => slug === (locale === "en" ? industry.enSlug : industry.slug));
}
