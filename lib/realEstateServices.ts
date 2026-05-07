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
  buyerIntent?: string;
  enBuyerIntent?: string;
  useCases?: string[];
  enUseCases?: string[];
  authorityIntro?: string[];
  enAuthorityIntro?: string[];
  authoritySections?: Array<{ heading: string; body: string; items: string[] }>;
  enAuthoritySections?: Array<{ heading: string; body: string; items: string[] }>;
  customFaq?: Array<{ question: string; answer: string }>;
  enCustomFaq?: Array<{ question: string; answer: string }>;
  recommendedLinks?: string[];
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
    title: "Fotografia para proyectos inmobiliarios en RD | Babula Shots",
    enTitle: "Real estate development photography | Babula Shots",
    description: "Foto, video, drone y contenido comercial para proyectos inmobiliarios en RD: torres, villas, preventas, unidad modelo, avances de obra y lanzamientos.",
    enDescription: "Photo, video, drone and commercial content for real estate developments in DR: towers, villas, presales, model units, construction progress and launches.",
    h1: "Fotografia para proyectos inmobiliarios",
    enH1: "Real estate development photography",
    intro: "Creamos fotografia, video, drone y contenido comercial para preventas, lanzamientos, avances de obra, unidades modelo, brochures, websites y equipos de venta.",
    enIntro: "We create photography, video, drone and commercial content for presales, launches, construction progress, model units, brochures, websites and sales teams.",
    deliverables: ["Unidad modelo", "Avance de obra", "Drone de ubicacion", "Video comercial", "Reels para lanzamiento", "Banco de imagenes", "Fotos para brochure y web"],
    enDeliverables: ["Model unit", "Construction progress", "Location drone", "Commercial video", "Launch reels", "Image bank", "Brochure and website photos"],
    proof: "Para constructoras y desarrolladores que necesitan vender confianza, ubicacion, escala, amenidades y progreso real antes, durante y despues de la construccion.",
    enProof: "For builders and developers who need to sell confidence, location, scale, amenities and real progress before, during and after construction.",
    whatsappMessage: "Hola, busco foto, video y drone para un proyecto inmobiliario. Necesito contenido para preventa, avance de obra o lanzamiento. Podemos coordinar una llamada?"
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

const serviceDetails: Record<string, Pick<RealEstateService, "buyerIntent" | "enBuyerIntent" | "useCases" | "enUseCases" | "authorityIntro" | "enAuthorityIntro" | "authoritySections" | "enAuthoritySections" | "customFaq" | "enCustomFaq" | "recommendedLinks">> = {
  "fotografia-inmobiliaria-republica-dominicana": {
    buyerIntent: "Para propietarios, agentes y desarrolladores que necesitan una galeria base confiable antes de agregar video, drone o reels.",
    enBuyerIntent: "For owners, agents and developers who need a reliable base gallery before adding video, drone or reels.",
    useCases: ["Publicar en Point2Homes o TerrenosRD", "Enviar propiedades por WhatsApp", "Actualizar inventario de una inmobiliaria", "Preparar una propiedad para venta o renta"],
    enUseCases: ["Publish on Point2Homes or TerrenosRD", "Send properties by WhatsApp", "Update brokerage inventory", "Prepare a property for sale or rent"],
    recommendedLinks: ["foto-video-inmobiliario", "fotografia-drone-inmobiliaria", "precios-fotografia-inmobiliaria-republica-dominicana"]
  },
  "foto-video-inmobiliario": {
    buyerIntent: "Para propiedades donde una foto no explica suficiente: villas, apartamentos grandes, torres con amenidades y proyectos que necesitan recorrido.",
    enBuyerIntent: "For properties where photos are not enough: villas, large apartments, towers with amenities and developments that need a walkthrough.",
    useCases: ["Video recorrido para compradores remotos", "Clips verticales para Instagram", "Foto + video para lanzamiento de listado", "Miniaturas y versiones para redes"],
    enUseCases: ["Walkthrough video for remote buyers", "Vertical clips for Instagram", "Photo + video for listing launches", "Thumbnails and social versions"],
    recommendedLinks: ["fotografia-drone-inmobiliaria", "reels-inmobiliarios", "fotografia-para-proyectos-inmobiliarios"]
  },
  "video-inmobiliario-republica-dominicana": {
    buyerIntent: "Para vender flujo, escala, amenidades y experiencia cuando el cliente no puede visitar la propiedad de inmediato.",
    enBuyerIntent: "For selling flow, scale, amenities and experience when the buyer cannot visit immediately.",
    useCases: ["Recorrido horizontal para web", "Video vertical para redes", "Video para inversionistas extranjeros", "Clips de amenidades y detalles"],
    enUseCases: ["Horizontal walkthrough for web", "Vertical video for social", "Video for foreign investors", "Amenity and detail clips"],
    recommendedLinks: ["foto-video-inmobiliario", "reels-inmobiliarios", "fotografia-drone-inmobiliaria"]
  },
  "fotografia-drone-inmobiliaria": {
    buyerIntent: "Para propiedades donde ubicacion, escala, vista o terreno son parte central del valor.",
    enBuyerIntent: "For properties where location, scale, view or land are central to the value.",
    useCases: ["Villas con piscina y lote", "Terrenos y proyectos en desarrollo", "Resorts y hoteles", "Torres con contexto urbano"],
    enUseCases: ["Villas with pool and land", "Land and developments", "Resorts and hotels", "Towers with urban context"],
    recommendedLinks: ["video-inmobiliario-republica-dominicana", "fotografia-para-proyectos-inmobiliarios", "precios-fotografia-inmobiliaria-republica-dominicana"]
  },
  "reels-inmobiliarios": {
    buyerIntent: "Para agentes que necesitan atencion rapida en redes sin convertir cada propiedad en una produccion larga.",
    enBuyerIntent: "For agents who need fast attention on social media without turning every listing into a long production.",
    useCases: ["Reel de propiedad nueva", "Tour rapido para historias", "Contenido semanal para agentes", "Version vertical de video recorrido"],
    enUseCases: ["New listing reel", "Quick tour for stories", "Weekly agent content", "Vertical version of walkthrough video"],
    recommendedLinks: ["contenido-para-agentes-inmobiliarios", "foto-video-inmobiliario", "video-inmobiliario-republica-dominicana"]
  },
  "contenido-para-agentes-inmobiliarios": {
    buyerIntent: "Para agentes que quieren verse consistentes y profesionales frente a propietarios, compradores e inversionistas.",
    enBuyerIntent: "For agents who want to look consistent and professional to owners, buyers and investors.",
    useCases: ["Listados semanales", "Reels de propiedades", "Foto profesional del inventario", "Contenido para marca personal"],
    enUseCases: ["Weekly listings", "Property reels", "Professional inventory photos", "Personal brand content"],
    recommendedLinks: ["reels-inmobiliarios", "fotografia-para-apartamentos-en-venta", "precios-fotografia-inmobiliaria-republica-dominicana"]
  },
  "contenido-para-inmobiliarias-constructoras": {
    buyerIntent: "Para equipos que necesitan una linea visual coherente en inventario, preventa, obra, brochure y redes.",
    enBuyerIntent: "For teams that need a coherent visual line across inventory, presale, construction, brochures and social media.",
    useCases: ["Banco de imagenes de proyecto", "Avance de obra con drone", "Contenido para brochure", "Material para equipo de ventas"],
    enUseCases: ["Development image bank", "Construction progress with drone", "Brochure media", "Sales team materials"],
    recommendedLinks: ["fotografia-para-proyectos-inmobiliarios", "fotografia-drone-inmobiliaria", "contenido-para-desarrolladores-inmobiliarios"]
  },
  "fotografia-para-airbnb-villas": {
    buyerIntent: "Para vender experiencia vacacional: piscina, terraza, habitaciones, cocina, vistas, detalles y confianza para reservar.",
    enBuyerIntent: "For selling the vacation experience: pool, terrace, bedrooms, kitchen, views, details and booking confidence.",
    useCases: ["Portada para Airbnb", "Galeria para villas turisticas", "Fotos para Booking y website", "Detalles de lifestyle y amenidades"],
    enUseCases: ["Airbnb cover image", "Tourist villa gallery", "Photos for Booking and website", "Lifestyle and amenity details"],
    recommendedLinks: ["reels-inmobiliarios", "fotografia-drone-inmobiliaria", "fotografia-para-villas-de-lujo"]
  },
  "fotografia-para-apartamentos-en-venta": {
    buyerIntent: "Para vender espacio funcional: distribucion, luz, balcon, cocina, habitaciones, lobby, parqueos y amenidades del edificio.",
    enBuyerIntent: "For selling functional living space: layout, light, balcony, kitchen, bedrooms, lobby, parking and building amenities.",
    useCases: ["Apartamentos en torres", "Reventas y alquileres", "Unidades modelo", "Anuncios para Point2Homes y WhatsApp"],
    enUseCases: ["Tower apartments", "Resales and rentals", "Model units", "Point2Homes and WhatsApp listings"],
    recommendedLinks: ["fotografia-inmobiliaria-santo-domingo", "fotografia-drone-inmobiliaria", "foto-video-inmobiliario"]
  },
  "fotografia-para-casas-en-venta": {
    buyerIntent: "Para mostrar fachada, terreno, distribucion familiar, patio, seguridad y detalles que justifican el precio de una casa.",
    enBuyerIntent: "For showing facade, land, family layout, yard, security and details that justify a home's price.",
    useCases: ["Casas familiares", "Residenciales cerrados", "Villas urbanas", "Casas con patio o piscina"],
    enUseCases: ["Family homes", "Gated communities", "Urban villas", "Homes with yard or pool"],
    recommendedLinks: ["fotografia-drone-inmobiliaria", "foto-video-inmobiliario", "precios-fotografia-inmobiliaria-republica-dominicana"]
  },
  "fotografia-para-proyectos-inmobiliarios": {
    buyerIntent: "Para desarrolladores, constructoras y equipos comerciales que necesitan explicar el proyecto antes de que el comprador pueda verlo completo: ubicacion, avance, unidad modelo, amenidades, escala, terminaciones y confianza de entrega.",
    enBuyerIntent: "For developers, builders and sales teams that need to explain the project before buyers can see it finished: location, progress, model unit, amenities, scale, finishes and delivery confidence.",
    useCases: ["Avance de obra mensual", "Unidad modelo y apartamentos muestra", "Drone de ubicacion y entorno", "Contenido para lanzamiento, brochure, web y sala de ventas", "Reels para preventa y captacion de leads", "Fotos de amenidades, lobby, piscina, parqueos y vistas"],
    enUseCases: ["Monthly construction progress", "Model units and show apartments", "Location and surroundings drone", "Launch, brochure, website and sales-room content", "Presale reels and lead generation", "Amenity, lobby, pool, parking and view photos"],
    authorityIntro: [
      "Un proyecto inmobiliario no se vende igual que una propiedad terminada. En una torre en Santo Domingo, un proyecto turistico en Punta Cana o un desarrollo de villas en Cap Cana, el comprador necesita entender una promesa: donde esta, como avanza, que se entrega, que amenidades tendra y por que debe confiar antes de visitar o reservar.",
      "Por eso la fotografia para proyectos inmobiliarios debe funcionar como material comercial, no solo como fotos bonitas. La sesion debe producir piezas que sirvan para portales, brochure, landing page, redes sociales, WhatsApp, presentaciones de inversionistas, sala de ventas y seguimiento mensual de obra.",
      "Babula Shots prepara contenido para cada etapa del desarrollo: terreno y ubicacion, avance de construccion, unidad modelo, areas comunes, entrega final y contenido recurrente para mantener activa la preventa."
    ],
    enAuthorityIntro: [
      "A real estate development is not sold like a finished listing. For a tower in Santo Domingo, a tourism project in Punta Cana or a villa development in Cap Cana, the buyer needs to understand a promise: where it is, how it is progressing, what will be delivered, which amenities matter and why they can trust it before visiting or reserving.",
      "That is why development photography has to work as sales material, not only as attractive images. The shoot should create assets for portals, brochures, landing pages, social media, WhatsApp, investor decks, sales rooms and monthly construction updates.",
      "Babula Shots prepares content for each stage of the development: land and location, construction progress, model unit, common areas, final delivery and recurring presale content."
    ],
    authoritySections: [
      {
        heading: "Contenido por etapa del proyecto",
        body: "Cada etapa necesita un enfoque distinto. En preventa se vende ubicacion, concepto y confianza; durante obra se documenta progreso real; en unidad modelo se muestran terminaciones, distribucion y estilo de vida; en entrega final se crea el banco visual que alimenta anuncios y redes.",
        items: ["Terreno, entorno y accesos con drone", "Avance de obra para reportes y redes", "Unidad modelo, lobby y amenidades", "Fotos finales para brochure, web y portales"]
      },
      {
        heading: "Mercados donde esta pagina debe competir",
        body: "En Santo Domingo suelen dominar torres residenciales, apartamentos en preventa y proyectos corporativos. En Punta Cana, Bavaro, Cap Cana y Casa de Campo pesa mas la inversion extranjera, el alquiler vacacional, las villas, los resorts y la cercania a playa, golf o marina.",
        items: ["Torres en Piantini, Naco, Bella Vista y Evaristo Morales", "Proyectos turisticos en Punta Cana, Bavaro y Cap Cana", "Villas y comunidades premium en Casa de Campo y La Romana", "Desarrollos emergentes en Miches, Samana y Puerto Plata"]
      },
      {
        heading: "Entregables comerciales que ayudan a vender",
        body: "La meta es que el equipo comercial pueda publicar, enviar y presentar el proyecto sin improvisar. Organizamos las tomas por uso: hero image, recorrido, amenidades, contexto aereo, detalles de terminacion, clips verticales y material para anuncios.",
        items: ["Galeria web y brochure horizontal", "Clips verticales para Instagram, TikTok y WhatsApp", "Fotos optimizadas para Point2Homes, TerrenosRD y landing pages", "Banco de imagenes para publicaciones durante varias semanas"]
      }
    ],
    enAuthoritySections: [
      {
        heading: "Content by development stage",
        body: "Each stage needs a different focus. In presale, the media sells location, concept and trust; during construction, it documents real progress; in the model unit, it shows finishes, layout and lifestyle; at delivery, it creates the image bank for ads and social media.",
        items: ["Land, surroundings and access with drone", "Construction progress for reports and social media", "Model unit, lobby and amenities", "Final photos for brochures, websites and portals"]
      },
      {
        heading: "Markets this page has to compete in",
        body: "Santo Domingo is usually driven by residential towers, presale apartments and corporate projects. Punta Cana, Bavaro, Cap Cana and Casa de Campo depend more on foreign investors, vacation rentals, villas, resorts and proximity to beach, golf or marina.",
        items: ["Towers in Piantini, Naco, Bella Vista and Evaristo Morales", "Tourism developments in Punta Cana, Bavaro and Cap Cana", "Premium villas and communities in Casa de Campo and La Romana", "Emerging developments in Miches, Samana and Puerto Plata"]
      },
      {
        heading: "Commercial deliverables that help sell",
        body: "The goal is for the sales team to publish, send and present the development without improvising. We organize the shot list by use: hero image, walkthrough, amenities, aerial context, finish details, vertical clips and ad material.",
        items: ["Horizontal web and brochure gallery", "Vertical clips for Instagram, TikTok and WhatsApp", "Photos optimized for Point2Homes, TerrenosRD and landing pages", "Image bank for several weeks of publishing"]
      }
    ],
    customFaq: [
      {
        question: "Que tipo de contenido necesita una torre en preventa en Santo Domingo?",
        answer: "Normalmente recomendamos una combinacion de drone de ubicacion, fotos del solar o avance, unidad modelo si existe, amenidades, renders integrados en la narrativa comercial y clips verticales para captar leads. En zonas como Piantini, Naco, Bella Vista o Evaristo Morales, tambien conviene mostrar accesos, vistas, lobby, parqueos y contexto urbano."
      },
      {
        question: "Sirven estas fotos para brochure, landing page y Point2Homes?",
        answer: "Si. Organizamos la entrega para que el equipo pueda usar archivos horizontales en brochure y web, versiones ligeras para landing page, imagenes verticales para redes y fotos de portada para portales como Point2Homes, TerrenosRD o publicaciones directas por WhatsApp."
      },
      {
        question: "Pueden hacer seguimiento mensual de avance de obra?",
        answer: "Si. Para constructoras y desarrolladores podemos crear un plan mensual con fotos, drone y video corto del avance. Esto ayuda a mostrar progreso real a compradores, inversionistas y agentes sin depender solamente de renders."
      },
      {
        question: "Que conviene para un proyecto turistico en Punta Cana o Cap Cana?",
        answer: "En proyectos turisticos el drone es clave para mostrar playa, golf, marina, accesos, amenidades y escala. Tambien recomendamos fotos de lifestyle, interiores de unidad modelo, piscina, areas sociales y clips verticales pensados para inversionistas extranjeros y alquiler vacacional."
      }
    ],
    enCustomFaq: [
      {
        question: "What content does a presale tower in Santo Domingo need?",
        answer: "We usually recommend location drone, land or construction progress photos, model unit media when available, amenities, renders integrated into the sales story and vertical clips for lead generation. In areas like Piantini, Naco, Bella Vista or Evaristo Morales, it also helps to show access, views, lobby, parking and urban context."
      },
      {
        question: "Can these images be used for brochures, landing pages and Point2Homes?",
        answer: "Yes. We organize delivery so the team can use horizontal files for brochures and websites, lighter versions for landing pages, vertical images for social media and cover photos for portals like Point2Homes, TerrenosRD or direct WhatsApp sharing."
      },
      {
        question: "Can you create monthly construction progress content?",
        answer: "Yes. For builders and developers we can create a monthly plan with photos, drone and a short progress video. This helps show real progress to buyers, investors and agents instead of depending only on renders."
      },
      {
        question: "What works best for a tourism development in Punta Cana or Cap Cana?",
        answer: "For tourism projects, drone is key to show beach, golf, marina, access, amenities and scale. We also recommend lifestyle photos, model-unit interiors, pool, social areas and vertical clips designed for foreign investors and vacation-rental buyers."
      }
    ],
    recommendedLinks: ["contenido-para-inmobiliarias-constructoras", "fotografia-drone-inmobiliaria", "video-inmobiliario-republica-dominicana"]
  },
  "fotografia-arquitectura-interiores": {
    buyerIntent: "Para espacios donde la arquitectura, el diseno interior, materiales y ejecucion visual son el valor principal.",
    enBuyerIntent: "For spaces where architecture, interior design, materials and visual execution are the main value.",
    useCases: ["Arquitectos e interioristas", "Hoteles y restaurantes", "Villas premium", "Portafolios editoriales"],
    enUseCases: ["Architects and interior designers", "Hotels and restaurants", "Premium villas", "Editorial portfolios"],
    recommendedLinks: ["fotografia-para-villas-de-lujo", "fotografia-para-hoteles-apartahoteles", "edicion-fotos-inmobiliarias"]
  },
  "tour-virtual-inmobiliario": {
    buyerIntent: "Para filtrar interesados y explicar flujo antes de una visita presencial.",
    enBuyerIntent: "For qualifying leads and explaining flow before an in-person visit.",
    useCases: ["Recorrido para compradores remotos", "Tour de apartamento", "Tour de villa", "Version vertical para redes"],
    enUseCases: ["Walkthrough for remote buyers", "Apartment tour", "Villa tour", "Vertical version for social media"],
    recommendedLinks: ["video-inmobiliario-republica-dominicana", "foto-video-inmobiliario", "reels-inmobiliarios"]
  },
  "edicion-fotos-inmobiliarias": {
    buyerIntent: "Para mejorar fotos existentes con color, verticales, luz y exportacion correcta sin repetir la sesion completa.",
    enBuyerIntent: "For improving existing photos with color, verticals, light and proper export without repeating the full shoot.",
    useCases: ["Correccion de verticales", "Balance de color", "Exportacion para portales", "Mejora de fotos de agente"],
    enUseCases: ["Vertical correction", "Color balance", "Listing export", "Improving agent photos"],
    recommendedLinks: ["fotografia-inmobiliaria-republica-dominicana", "fotografia-para-apartamentos-en-venta", "precios-fotografia-inmobiliaria-republica-dominicana"]
  },
  "precios-fotografia-inmobiliaria-republica-dominicana": {
    buyerIntent: "Para clientes que necesitan entender rangos antes de pedir una cotizacion formal.",
    enBuyerIntent: "For clients who need to understand ranges before requesting a formal quote.",
    useCases: ["Comparar foto, video y drone", "Planificar presupuesto de listado", "Cotizar paquetes para varias propiedades", "Evaluar plan mensual"],
    enUseCases: ["Compare photo, video and drone", "Plan listing budget", "Quote packages for multiple properties", "Evaluate monthly plans"],
    recommendedLinks: ["fotografia-inmobiliaria-republica-dominicana", "foto-video-inmobiliario", "fotografia-drone-inmobiliaria"]
  }
};

for (const service of realEstateServices) {
  const details = serviceDetails[service.slug];
  if (!details) {
    throw new Error(`Missing unique service details for ${service.slug}`);
  }
  Object.assign(service, details);
}

export function servicePath(service: RealEstateService, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/${service.enSlug}` : `/${service.slug}`;
}

export function findServiceByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateServices.find((service) => slug === (locale === "en" ? service.enSlug : service.slug));
}
