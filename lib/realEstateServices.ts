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

function quote(service: string) {
  return `Hola, quiero cotizar ${service} para una propiedad en Republica Dominicana. Me pueden enviar paquetes y disponibilidad?`;
}

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
    whatsappMessage: quote("foto y video inmobiliario")
  },
  {
    slug: "video-inmobiliario-republica-dominicana",
    enSlug: "real-estate-video-dominican-republic",
    title: "Video inmobiliario en Republica Dominicana | Babula Shots",
    enTitle: "Real estate video in Dominican Republic | Babula Shots",
    description: "Videos inmobiliarios para vender, alquilar y promocionar villas, apartamentos, Airbnb y proyectos en RD.",
    enDescription: "Real estate videos for selling, renting and promoting villas, apartments, Airbnb and developments in DR.",
    h1: "Video inmobiliario en Republica Dominicana",
    enH1: "Real estate video in Dominican Republic",
    intro: "Producimos recorridos, clips verticales y videos de propiedad que explican distribucion, amenidades y experiencia.",
    enIntro: "We produce walkthroughs, vertical clips and property videos that explain layout, amenities and experience.",
    deliverables: ["Video recorrido", "Clips verticales", "Tomas de detalles", "Miniatura", "Versiones para redes"],
    enDeliverables: ["Walkthrough video", "Vertical clips", "Detail shots", "Thumbnail", "Social versions"],
    proof: "Ideal para compradores remotos, inversionistas, Airbnb y propiedades donde el movimiento ayuda a entender el espacio.",
    enProof: "Ideal for remote buyers, investors, Airbnb and properties where motion helps explain the space.",
    whatsappMessage: quote("video inmobiliario")
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
    slug: "reels-inmobiliarios",
    enSlug: "real-estate-reels",
    title: "Reels inmobiliarios para agentes y propiedades | Babula Shots",
    enTitle: "Real estate reels for agents and properties | Babula Shots",
    description: "Reels verticales para propiedades, agentes inmobiliarios, Airbnb, villas y proyectos en Republica Dominicana.",
    enDescription: "Vertical reels for properties, real estate agents, Airbnb, villas and developments in Dominican Republic.",
    h1: "Reels inmobiliarios",
    enH1: "Real estate reels",
    intro: "Creamos videos verticales cortos para captar atencion en Instagram, TikTok, WhatsApp y anuncios de propiedades.",
    enIntro: "We create short vertical videos to earn attention on Instagram, TikTok, WhatsApp and property ads.",
    deliverables: ["Reels verticales", "Hook inicial", "Version con musica", "Version limpia", "Clips para historias"],
    enDeliverables: ["Vertical reels", "Opening hook", "Music version", "Clean version", "Story clips"],
    proof: "Pensado para agentes que necesitan publicar propiedades con ritmo y constancia sin grabar todo desde cero.",
    enProof: "Designed for agents who need to publish properties consistently without filming everything themselves.",
    whatsappMessage: quote("reels inmobiliarios")
  },
  {
    slug: "contenido-para-agentes-inmobiliarios",
    enSlug: "content-for-real-estate-agents",
    title: "Contenido para agentes inmobiliarios | Babula Shots",
    enTitle: "Content for real estate agents | Babula Shots",
    description: "Foto, video, reels y contenido mensual para agentes inmobiliarios en Republica Dominicana.",
    enDescription: "Photo, video, reels and monthly content for real estate agents in Dominican Republic.",
    h1: "Contenido para agentes inmobiliarios",
    enH1: "Content for real estate agents",
    intro: "Ayudamos a agentes a mantener presencia profesional con contenido de propiedades, reels, fotos y piezas listas para publicar.",
    enIntro: "We help agents keep a professional presence with property content, reels, photos and ready-to-publish pieces.",
    deliverables: ["Fotos de propiedades", "Reels", "Video recorrido", "Contenido mensual", "Formatos para redes"],
    enDeliverables: ["Property photos", "Reels", "Walkthrough video", "Monthly content", "Social formats"],
    proof: "Para agentes que necesitan listar mas rapido y verse consistentes frente a propietarios, compradores e inversionistas.",
    enProof: "For agents who need to list faster and look consistent with owners, buyers and investors.",
    whatsappMessage: quote("contenido para agentes inmobiliarios")
  },
  {
    slug: "contenido-para-inmobiliarias-constructoras",
    enSlug: "content-for-real-estate-companies-developers",
    title: "Contenido para inmobiliarias y constructoras | Babula Shots",
    enTitle: "Content for real estate companies and developers | Babula Shots",
    description: "Contenido visual para inmobiliarias, constructoras, desarrolladores y equipos comerciales en RD.",
    enDescription: "Visual content for brokerages, construction companies, developers and sales teams in DR.",
    h1: "Contenido para inmobiliarias y constructoras",
    enH1: "Content for real estate companies and developers",
    intro: "Producimos contenido para inventario, proyectos, lanzamientos, redes, brochures y presentaciones comerciales.",
    enIntro: "We produce content for inventory, developments, launches, social media, brochures and sales presentations.",
    deliverables: ["Banco de fotos", "Video institucional", "Drone", "Reels de proyecto", "Contenido mensual"],
    enDeliverables: ["Photo bank", "Brand video", "Drone", "Development reels", "Monthly content"],
    proof: "Ideal para equipos que necesitan una imagen visual consistente en varias propiedades o proyectos.",
    enProof: "Ideal for teams that need consistent visuals across multiple properties or developments.",
    whatsappMessage: quote("contenido para inmobiliarias y constructoras")
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
    slug: "fotografia-para-apartamentos-en-venta",
    enSlug: "apartment-listing-photography",
    title: "Fotografia para apartamentos en venta | Babula Shots",
    enTitle: "Apartment listing photography | Babula Shots",
    description: "Fotos para apartamentos en venta o alquiler: interiores, balcones, amenidades, lobby y formatos de portales.",
    enDescription: "Photos for apartments for sale or rent: interiors, balconies, amenities, lobby and listing formats.",
    h1: "Fotografia para apartamentos en venta",
    enH1: "Apartment listing photography",
    intro: "Mostramos distribucion, luz, balcon, cocina, habitaciones y amenidades para que el anuncio se entienda rapido.",
    enIntro: "We show layout, light, balcony, kitchen, bedrooms and amenities so the listing is understood quickly.",
    deliverables: ["Sala y comedor", "Cocina", "Habitaciones", "Amenidades", "Fachada y lobby"],
    enDeliverables: ["Living and dining", "Kitchen", "Bedrooms", "Amenities", "Facade and lobby"],
    proof: "Pensado para torres, apartamentos nuevos, reventas y alquileres de larga o corta estancia.",
    enProof: "Designed for towers, new apartments, resales and long or short-term rentals.",
    whatsappMessage: routeMessage("fotografia-para-apartamentos-en-venta")
  },
  {
    slug: "fotografia-para-casas-en-venta",
    enSlug: "home-listing-photography",
    title: "Fotografia para casas en venta | Babula Shots",
    enTitle: "Home listing photography | Babula Shots",
    description: "Fotografia para casas en venta, villas, patios, fachadas, interiores y propiedades familiares.",
    enDescription: "Photography for homes for sale, villas, patios, facades, interiors and family properties.",
    h1: "Fotografia para casas en venta",
    enH1: "Home listing photography",
    intro: "Creamos galerias que muestran fachada, distribucion, patio, terminaciones y espacios clave de la casa.",
    enIntro: "We create galleries that show facade, layout, patio, finishes and key spaces of the home.",
    deliverables: ["Fachada", "Interiores", "Patio", "Habitaciones", "Detalles de terminacion"],
    enDeliverables: ["Facade", "Interiors", "Patio", "Bedrooms", "Finish details"],
    proof: "Ideal para casas familiares, villas urbanas, residenciales cerrados y propiedades de alto valor.",
    enProof: "Ideal for family homes, urban villas, gated communities and high-value properties.",
    whatsappMessage: quote("fotografia para casas en venta")
  },
  {
    slug: "fotografia-para-proyectos-inmobiliarios",
    enSlug: "real-estate-development-photography",
    title: "Fotografia para proyectos inmobiliarios | Babula Shots",
    enTitle: "Real estate development photography | Babula Shots",
    description: "Foto, video y drone para proyectos inmobiliarios, torres, preventas, avances de obra y lanzamientos.",
    enDescription: "Photo, video and drone for developments, towers, presales, construction progress and launches.",
    h1: "Fotografia para proyectos inmobiliarios",
    enH1: "Real estate development photography",
    intro: "Documentamos proyectos para preventa, brochures, redes, web, avance de obra y materiales comerciales.",
    enIntro: "We document developments for presale, brochures, social media, web, construction progress and sales materials.",
    deliverables: ["Fotos de proyecto", "Drone", "Video de avance", "Reels", "Banco de imagenes"],
    enDeliverables: ["Development photos", "Drone", "Progress video", "Reels", "Image bank"],
    proof: "Para constructoras y desarrolladores que necesitan vender antes, durante y despues de la construccion.",
    enProof: "For builders and developers who need to sell before, during and after construction.",
    whatsappMessage: quote("fotografia para proyectos inmobiliarios")
  },
  {
    slug: "fotografia-arquitectura-interiores",
    enSlug: "architecture-interior-photography",
    title: "Fotografia de arquitectura e interiores | Babula Shots",
    enTitle: "Architecture and interior photography | Babula Shots",
    description: "Fotografia de arquitectura, interiores, diseno, hoteles, restaurantes, oficinas y propiedades premium.",
    enDescription: "Architecture and interior photography for design, hotels, restaurants, offices and premium properties.",
    h1: "Fotografia de arquitectura e interiores",
    enH1: "Architecture and interior photography",
    intro: "Cuidamos verticales, color, composicion y detalles para espacios donde el diseno y la arquitectura son el valor principal.",
    enIntro: "We control verticals, color, composition and details for spaces where design and architecture are the main value.",
    deliverables: ["Interiores", "Exteriores", "Detalles", "Amenidades", "Archivos editoriales"],
    enDeliverables: ["Interiors", "Exteriors", "Details", "Amenities", "Editorial files"],
    proof: "Ideal para arquitectos, interioristas, hoteles, restaurantes, villas y proyectos premium.",
    enProof: "Ideal for architects, interior designers, hotels, restaurants, villas and premium developments.",
    whatsappMessage: quote("fotografia de arquitectura e interiores")
  },
  {
    slug: "tour-virtual-inmobiliario",
    enSlug: "real-estate-virtual-tour",
    title: "Tour virtual inmobiliario | Babula Shots",
    enTitle: "Real estate virtual tour | Babula Shots",
    description: "Recorridos visuales y tours para propiedades, apartamentos, villas, Airbnb y proyectos inmobiliarios.",
    enDescription: "Visual walkthroughs and tours for properties, apartments, villas, Airbnb and developments.",
    h1: "Tour virtual inmobiliario",
    enH1: "Real estate virtual tour",
    intro: "Creamos recorridos visuales simples para que compradores e inquilinos entiendan distribucion y flujo de espacios.",
    enIntro: "We create simple visual walkthroughs so buyers and renters understand layout and flow.",
    deliverables: ["Recorrido por espacios", "Video horizontal", "Version vertical", "Portada", "Clips cortos"],
    enDeliverables: ["Space walkthrough", "Horizontal video", "Vertical version", "Cover image", "Short clips"],
    proof: "Una forma clara de filtrar interesados antes de visitas presenciales.",
    enProof: "A clear way to qualify interested buyers before in-person visits.",
    whatsappMessage: quote("tour virtual inmobiliario")
  },
  {
    slug: "edicion-fotos-inmobiliarias",
    enSlug: "real-estate-photo-editing",
    title: "Edicion de fotos inmobiliarias | Babula Shots",
    enTitle: "Real estate photo editing | Babula Shots",
    description: "Edicion profesional para fotos inmobiliarias: color, verticales, luz, cielo y preparacion para portales.",
    enDescription: "Professional editing for real estate photos: color, verticals, light, sky and listing preparation.",
    h1: "Edicion de fotos inmobiliarias",
    enH1: "Real estate photo editing",
    intro: "Corregimos fotos para que se vean limpias, profesionales y fieles a la propiedad sin exagerar colores o espacios.",
    enIntro: "We correct photos so they look clean, professional and truthful without exaggerating colors or spaces.",
    deliverables: ["Correccion de color", "Verticales", "Luz", "Recorte", "Exportacion para portales"],
    enDeliverables: ["Color correction", "Verticals", "Light", "Crop", "Listing export"],
    proof: "Util para agentes con fotos existentes que necesitan mejorar presentacion sin repetir una sesion.",
    enProof: "Useful for agents with existing photos who need stronger presentation without repeating a shoot.",
    whatsappMessage: quote("edicion de fotos inmobiliarias")
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
