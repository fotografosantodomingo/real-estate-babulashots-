import { routeMessage } from "@/lib/routeMap";

export type RealEstateService = {
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
  deliverables: string[];
  enDeliverables: string[];
  proof: string;
  enProof: string;
  whatsappMessage: string;
};

export const realEstateServices: RealEstateService[] = [
  {
    slug: "fotografia-inmobiliaria-republica-dominicana",
    enSlug: "real-estate-photography-dominican-republic",
    title: "Fotografia inmobiliaria en Republica Dominicana | Babula Shots",
    enTitle: "Real estate photography in Dominican Republic | Babula Shots",
    description: "Fotografia inmobiliaria profesional en Republica Dominicana para vender, alquilar y promocionar propiedades.",
    enDescription: "Professional real estate photography in Dominican Republic for selling, renting and promoting properties.",
    h1: "Fotografia inmobiliaria en Republica Dominicana",
    enH1: "Real estate photography in Dominican Republic",
    intro: "Fotos profesionales para propiedades residenciales, comerciales, villas, apartamentos, Airbnb y proyectos inmobiliarios en RD.",
    enIntro: "Professional photos for residential, commercial, villa, apartment, Airbnb and development properties across the Dominican Republic.",
    deliverables: ["Fotos editadas", "Formatos para portales", "Galeria online", "Entrega rapida", "Opciones de video y drone"],
    enDeliverables: ["Edited photos", "Listing-platform formats", "Online gallery", "Fast delivery", "Video and drone options"],
    proof: "Fotos listas para MLS-style listings, Point2Homes, Airbnb, redes sociales, websites y campanas de venta.",
    enProof: "Photos ready for MLS-style listings, Point2Homes, Airbnb, social media, websites and sales campaigns.",
    whatsappMessage: routeMessage("")
  },
  {
    slug: "foto-video-inmobiliario",
    enSlug: "real-estate-photo-video",
    title: "Foto y video inmobiliario en Republica Dominicana",
    enTitle: "Real estate photo and video in Dominican Republic",
    description: "Servicio de foto y video inmobiliario para agentes, inmobiliarias, desarrolladores, villas y Airbnb.",
    enDescription: "Real estate photo and video service for agents, brokerages, developers, villas and Airbnb properties.",
    h1: "Foto y video inmobiliario",
    enH1: "Real estate photo and video",
    intro: "Combinamos fotografia, video horizontal, clips verticales y recorridos cortos para que cada propiedad se vea clara y lista para publicar.",
    enIntro: "We combine photography, horizontal video, vertical clips and short walkthroughs so each property looks clear and ready to publish.",
    deliverables: ["Fotos editadas", "Video recorrido", "Reels verticales", "Miniaturas", "Formatos para portales"],
    enDeliverables: ["Edited photos", "Walkthrough video", "Vertical reels", "Thumbnails", "Listing formats"],
    proof: "Contenido preparado para anuncios, redes, portales y envio directo a compradores o huespedes.",
    enProof: "Content prepared for ads, social media, portals and direct sharing with buyers or guests.",
    whatsappMessage: "Hola, necesito cotizar foto y video inmobiliario para una propiedad. Me pueden enviar opciones?"
  },
  {
    slug: "fotografia-drone-inmobiliaria",
    enSlug: "drone-real-estate-photography",
    title: "Fotografia drone inmobiliaria en Republica Dominicana",
    enTitle: "Drone real estate photography in Dominican Republic",
    description: "Foto y video con drone para villas, terrenos, proyectos, resorts y propiedades premium en Republica Dominicana.",
    enDescription: "Drone photo and video for villas, land, developments, resorts and premium properties in Dominican Republic.",
    h1: "Fotografia drone inmobiliaria",
    enH1: "Drone real estate photography",
    intro: "El drone ayuda a mostrar ubicacion, vista, terreno, amenidades y escala de una propiedad, especialmente en zonas turisticas y proyectos nuevos.",
    enIntro: "Drone media helps show location, view, land, amenities and scale, especially for tourism areas and new developments.",
    deliverables: ["Fotos aereas", "Video drone", "Clips para reels", "Vistas de ubicacion", "Tomas de amenidades"],
    enDeliverables: ["Aerial photos", "Drone video", "Reels clips", "Location views", "Amenity shots"],
    proof: "Ideal para villas, solares, proyectos, edificios, hoteles, resorts y propiedades con vista.",
    enProof: "Ideal for villas, land, developments, buildings, hotels, resorts and view properties.",
    whatsappMessage: routeMessage("fotografia-drone-inmobiliaria")
  },
  {
    slug: "fotografia-para-airbnb-villas",
    enSlug: "airbnb-villa-photography",
    title: "Fotografia para Airbnb y villas en Republica Dominicana",
    enTitle: "Airbnb and villa photography in Dominican Republic",
    description: "Fotos profesionales para Airbnb, villas turisticas y alquileres vacacionales en Republica Dominicana.",
    enDescription: "Professional photos for Airbnb, tourist villas and vacation rentals in Dominican Republic.",
    h1: "Fotografia para Airbnb y villas",
    enH1: "Airbnb and villa photography",
    intro: "Creamos imagenes que muestran habitaciones, piscina, cocina, terraza, vistas y detalles que ayudan a conseguir mas clics y mejores reservas.",
    enIntro: "We create images that show bedrooms, pool, kitchen, terrace, views and details that help earn more clicks and stronger bookings.",
    deliverables: ["Fotos por area", "Portada para Airbnb", "Detalles de experiencia", "Video corto opcional", "Entrega lista para publicar"],
    enDeliverables: ["Photos by area", "Airbnb cover image", "Experience details", "Optional short video", "Publication-ready delivery"],
    proof: "Pensado para Airbnb, Booking, portales de villas, Instagram y envio directo a huespedes.",
    enProof: "Designed for Airbnb, Booking, villa portals, Instagram and direct guest sharing.",
    whatsappMessage: routeMessage("fotografia-para-airbnb-villas")
  },
  {
    slug: "precios-fotografia-inmobiliaria-republica-dominicana",
    enSlug: "real-estate-photography-prices-dominican-republic",
    title: "Precios de fotografia inmobiliaria en Republica Dominicana",
    enTitle: "Real estate photography prices in Dominican Republic",
    description: "Guia de precios para fotografia inmobiliaria, video, drone, reels y contenido para propiedades en Republica Dominicana.",
    enDescription: "Pricing guide for real estate photography, video, drone, reels and property content in Dominican Republic.",
    h1: "Precios de fotografia inmobiliaria en RD",
    enH1: "Real estate photography prices in DR",
    intro: "El precio depende de ciudad, tipo de propiedad, cantidad de espacios, si incluye video, drone, reels y urgencia de entrega.",
    enIntro: "Pricing depends on city, property type, number of spaces, video, drone, reels and delivery urgency.",
    deliverables: ["Paquete foto", "Paquete foto + video", "Drone adicional", "Reels", "Planes mensuales para agentes"],
    enDeliverables: ["Photo package", "Photo + video package", "Drone add-on", "Reels", "Monthly plans for agents"],
    proof: "Una cotizacion clara evita sorpresas: envia ciudad, propiedad, cantidad de habitaciones y servicio deseado.",
    enProof: "A clear quote avoids surprises: send city, property type, room count and the service you need.",
    whatsappMessage: routeMessage("precios-fotografia-inmobiliaria-republica-dominicana")
  }
];

export function servicePath(service: RealEstateService, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/${service.enSlug}` : `/${service.slug}`;
}

export function findServiceByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateServices.find((service) => slug === (locale === "en" ? service.enSlug : service.slug));
}
