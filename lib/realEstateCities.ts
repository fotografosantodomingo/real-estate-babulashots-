import { routeMessage } from "@/lib/routeMap";

export type RealEstateCity = {
  city: string;
  slug: string;
  enSlug: string;
  province: string;
  priority: 1 | 2;
  title: string;
  enTitle: string;
  description: string;
  enDescription: string;
  h1: string;
  enH1: string;
  intro: string;
  enIntro: string;
  localAngle: string;
  enLocalAngle: string;
  propertyTypes: string[];
  areas: string[];
  nearby: string[];
  image: string;
  whatsappMessage: string;
};

const image = "/images/real-estate-media-dominican-republic.webp";

export const realEstateCities: RealEstateCity[] = [
  {
    city: "Santo Domingo",
    slug: "santo-domingo",
    enSlug: "santo-domingo",
    province: "Distrito Nacional",
    priority: 1,
    title: "Fotografia inmobiliaria en Santo Domingo | Babula Shots",
    enTitle: "Real estate photography in Santo Domingo | Babula Shots",
    description: "Fotografia, video y contenido inmobiliario en Santo Domingo para apartamentos, torres, locales comerciales, Airbnb y proyectos.",
    enDescription: "Real estate photography, video and listing content in Santo Domingo for apartments, towers, commercial spaces, Airbnb units and developments.",
    h1: "Fotografia inmobiliaria en Santo Domingo",
    enH1: "Real estate photography in Santo Domingo",
    intro: "Creamos fotos, video, drone y reels para propiedades en Santo Domingo con entregas pensadas para agentes, inmobiliarias, desarrolladores y anfitriones Airbnb.",
    enIntro: "We create photos, video, drone and reels for Santo Domingo properties with delivery designed for agents, brokerages, developers and Airbnb hosts.",
    localAngle: "En zonas como Piantini, Naco, Bella Vista y Zona Colonial, la fotografia debe mostrar amplitud, luz real, terminaciones y contexto urbano sin distorsionar la propiedad.",
    enLocalAngle: "In areas like Piantini, Naco, Bella Vista and Zona Colonial, media must show space, real light, finishes and urban context without distorting the property.",
    propertyTypes: ["Apartamentos", "Torres residenciales", "Locales comerciales", "Airbnb", "Proyectos en preventa"],
    areas: ["Piantini", "Naco", "Bella Vista", "Zona Colonial", "Anacaona"],
    nearby: ["Punta Cana", "La Romana", "Santiago"],
    image,
    whatsappMessage: "Hola, necesito cotizar foto o video inmobiliario para una propiedad en Santo Domingo. Podemos coordinar disponibilidad?"
  },
  {
    city: "Punta Cana",
    slug: "punta-cana",
    enSlug: "punta-cana",
    province: "La Altagracia",
    priority: 1,
    title: "Fotografia inmobiliaria en Punta Cana | Babula Shots",
    enTitle: "Real estate photography in Punta Cana | Babula Shots",
    description: "Fotografia inmobiliaria en Punta Cana para villas, condos, resorts, Airbnb, Cap Cana, Bavaro y propiedades de inversion.",
    enDescription: "Real estate photography in Punta Cana for villas, condos, resorts, Airbnb, Cap Cana, Bavaro and investment properties.",
    h1: "Fotografia inmobiliaria en Punta Cana",
    enH1: "Real estate photography in Punta Cana",
    intro: "Punta Cana necesita contenido visual que venda experiencia, ubicacion y valor de inversion. Cubrimos villas, apartamentos, resorts y propiedades de alquiler turistico.",
    enIntro: "Punta Cana needs visuals that sell experience, location and investment value. We cover villas, apartments, resorts and vacation rental properties.",
    localAngle: "Bavaro, Cap Cana, Cocotal y zonas cercanas requieren fotos limpias, exteriores fuertes, vistas, amenidades y formatos listos para portales y Airbnb.",
    enLocalAngle: "Bavaro, Cap Cana, Cocotal and nearby areas need clean interiors, strong exteriors, views, amenities and formats ready for listing portals and Airbnb.",
    propertyTypes: ["Villas", "Condos", "Resorts", "Airbnb", "Propiedades de inversion"],
    areas: ["Bavaro", "Cap Cana", "Cocotal", "Los Corales", "Macao"],
    nearby: ["Bavaro", "Cap Cana", "Bayahibe"],
    image,
    whatsappMessage: routeMessage("fotografia-inmobiliaria-punta-cana")
  },
  {
    city: "La Romana",
    slug: "la-romana",
    enSlug: "la-romana",
    province: "La Romana",
    priority: 1,
    title: "Fotografia inmobiliaria en La Romana | Babula Shots",
    enTitle: "Real estate photography in La Romana | Babula Shots",
    description: "Foto y video inmobiliario en La Romana, Casa de Campo, villas privadas, apartamentos y propiedades premium.",
    enDescription: "Real estate photo and video in La Romana, Casa de Campo, private villas, apartments and premium properties.",
    h1: "Fotografia inmobiliaria en La Romana",
    enH1: "Real estate photography in La Romana",
    intro: "Producimos imagenes y videos para villas, apartamentos y propiedades premium en La Romana, con atencion a arquitectura, amenidades y estilo de vida.",
    enIntro: "We produce photos and video for villas, apartments and premium properties in La Romana, with attention to architecture, amenities and lifestyle.",
    localAngle: "Casa de Campo y Altos de Chavon exigen una mirada editorial: lineas limpias, luz natural, exteriores, piscinas, terrazas y detalles de lujo.",
    enLocalAngle: "Casa de Campo and Altos de Chavon need an editorial eye: clean lines, natural light, exteriors, pools, terraces and luxury details.",
    propertyTypes: ["Villas de lujo", "Apartamentos", "Casas vacacionales", "Airbnb", "Propiedades premium"],
    areas: ["Casa de Campo", "Altos de Chavon", "Minitas", "Bayahibe", "Dominicus"],
    nearby: ["Punta Cana", "Bayahibe", "Santo Domingo"],
    image,
    whatsappMessage: "Hola, necesito fotos profesionales para mi propiedad en La Romana o Casa de Campo. Cual es el precio y disponibilidad?"
  },
  {
    city: "Santiago",
    slug: "santiago",
    enSlug: "santiago",
    province: "Santiago",
    priority: 1,
    title: "Fotografia inmobiliaria en Santiago RD | Babula Shots",
    enTitle: "Real estate photography in Santiago DR | Babula Shots",
    description: "Fotografia inmobiliaria en Santiago para apartamentos, torres, locales comerciales, proyectos y agentes inmobiliarios.",
    enDescription: "Real estate photography in Santiago for apartments, residential towers, commercial spaces, developments and agents.",
    h1: "Fotografia inmobiliaria en Santiago RD",
    enH1: "Real estate photography in Santiago DR",
    intro: "Ayudamos a agentes, inmobiliarias y desarrolladores de Santiago a presentar propiedades con fotos limpias, video corto y contenido listo para publicacion.",
    enIntro: "We help Santiago agents, brokerages and developers present properties with clean photos, short video and listing-ready content.",
    localAngle: "Las torres residenciales, espacios comerciales y proyectos urbanos necesitan mostrar distribucion, terminaciones, balcones, lobby y cercania a zonas clave.",
    enLocalAngle: "Residential towers, commercial spaces and urban projects need to show layout, finishes, balconies, lobby and access to key areas.",
    propertyTypes: ["Apartamentos", "Torres", "Locales", "Proyectos", "Casas"],
    areas: ["Centro de Santiago", "La Trinitaria", "Los Jardines", "Cerros de Gurabo", "Villa Olga"],
    nearby: ["Puerto Plata", "Jarabacoa", "La Vega"],
    image,
    whatsappMessage: "Hola, necesito cotizar fotos inmobiliarias para una propiedad en Santiago. Me pueden enviar paquetes?"
  }
];

export function cityPath(city: RealEstateCity, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/real-estate-photography-${city.enSlug}` : `/fotografia-inmobiliaria-${city.slug}`;
}

export function findCityByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateCities.find((city) => slug === (locale === "en" ? `real-estate-photography-${city.enSlug}` : `fotografia-inmobiliaria-${city.slug}`));
}
