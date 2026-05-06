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

const generatedHero = "/images/real-estate-media-dominican-republic.webp";
const interior = "/images/legacy-real-estate/santo-domingo-property-interior.webp";
const villa = "/images/legacy-real-estate/real-estate-photography-rd.webp";
const vertical = "/images/legacy-real-estate/real-estate-service-rd.webp";
const drone = "/images/legacy-real-estate/drone-real-estate-rd.webp";
const airbnb = "/images/legacy-real-estate/pictime-property-gallery-cover.webp";

function message(city: string) {
  return `Hola, necesito cotizar foto, video o drone para una propiedad en ${city}. Me pueden enviar disponibilidad y paquetes?`;
}

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
    image: interior,
    whatsappMessage: message("Santo Domingo")
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
    image: villa,
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
    image: vertical,
    whatsappMessage: message("La Romana o Casa de Campo")
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
    image: generatedHero,
    whatsappMessage: message("Santiago")
  },
  {
    city: "Cap Cana",
    slug: "cap-cana",
    enSlug: "cap-cana",
    province: "La Altagracia",
    priority: 1,
    title: "Fotografia inmobiliaria en Cap Cana | Babula Shots",
    enTitle: "Real estate photography in Cap Cana | Babula Shots",
    description: "Foto, video y drone para villas de lujo, marina, golf, apartamentos y propiedades premium en Cap Cana.",
    enDescription: "Photo, video and drone for luxury villas, marina, golf, apartments and premium properties in Cap Cana.",
    h1: "Fotografia inmobiliaria en Cap Cana",
    enH1: "Real estate photography in Cap Cana",
    intro: "Cap Cana exige contenido premium para propiedades de inversion, villas, marina, golf y alquileres de alto valor.",
    enIntro: "Cap Cana needs premium media for investment properties, villas, marina, golf and high-value rentals.",
    localAngle: "Mostramos amenidades, vistas, piscina, marina, acabados y contexto de comunidad privada para compradores e inversionistas.",
    enLocalAngle: "We show amenities, views, pool, marina, finishes and private-community context for buyers and investors.",
    propertyTypes: ["Villas premium", "Marina", "Golf", "Condos", "Alquiler turistico"],
    areas: ["Marina Cap Cana", "Ciudad Las Canas", "Punta Espada", "Juanillo", "Green Village"],
    nearby: ["Punta Cana", "Bavaro", "La Romana"],
    image: villa,
    whatsappMessage: message("Cap Cana")
  },
  {
    city: "Casa de Campo",
    slug: "casa-de-campo",
    enSlug: "casa-de-campo",
    province: "La Romana",
    priority: 1,
    title: "Fotografia inmobiliaria en Casa de Campo | Babula Shots",
    enTitle: "Real estate photography in Casa de Campo | Babula Shots",
    description: "Fotografia inmobiliaria premium para villas, arquitectura, piscina, golf y alquiler vacacional en Casa de Campo.",
    enDescription: "Premium real estate photography for villas, architecture, pools, golf and vacation rentals in Casa de Campo.",
    h1: "Fotografia inmobiliaria en Casa de Campo",
    enH1: "Real estate photography in Casa de Campo",
    intro: "Creamos contenido visual para villas de lujo, propiedades de renta y residencias premium dentro de Casa de Campo.",
    enIntro: "We create visuals for luxury villas, rental properties and premium residences inside Casa de Campo.",
    localAngle: "La narrativa debe enseñar arquitectura, piscina, jardines, lifestyle, privacidad y cercania a Minitas, golf o Altos de Chavon.",
    enLocalAngle: "The story must show architecture, pool, gardens, lifestyle, privacy and proximity to Minitas, golf or Altos de Chavon.",
    propertyTypes: ["Villas", "Arquitectura", "Renta vacacional", "Golf", "Propiedades premium"],
    areas: ["Minitas", "Altos de Chavon", "Dye Fore", "La Marina", "Teeth of the Dog"],
    nearby: ["La Romana", "Bayahibe", "Punta Cana"],
    image: vertical,
    whatsappMessage: message("Casa de Campo")
  },
  {
    city: "Las Terrenas",
    slug: "las-terrenas",
    enSlug: "las-terrenas",
    province: "Samana",
    priority: 2,
    title: "Fotografia inmobiliaria en Las Terrenas | Babula Shots",
    enTitle: "Real estate photography in Las Terrenas | Babula Shots",
    description: "Fotos y video para villas, Airbnb, propiedades frente al mar y alquiler vacacional en Las Terrenas.",
    enDescription: "Photo and video for villas, Airbnb, beachfront properties and vacation rentals in Las Terrenas.",
    h1: "Fotografia inmobiliaria en Las Terrenas",
    enH1: "Real estate photography in Las Terrenas",
    intro: "Las Terrenas necesita imagenes que comuniquen playa, vegetacion, privacidad y experiencia de alquiler turistico.",
    enIntro: "Las Terrenas needs visuals that communicate beach, greenery, privacy and vacation-rental experience.",
    localAngle: "Playa Bonita, Coson y villas privadas se benefician de fotos naturales, drone suave y detalles de lifestyle.",
    enLocalAngle: "Playa Bonita, Coson and private villas benefit from natural photos, soft drone views and lifestyle details.",
    propertyTypes: ["Villas", "Airbnb", "Apartamentos", "Frente al mar", "Hoteles boutique"],
    areas: ["Playa Bonita", "Playa Coson", "El Portillo", "Pueblo de los Pescadores", "Bonita Village"],
    nearby: ["Samana", "Puerto Plata", "Santo Domingo"],
    image: airbnb,
    whatsappMessage: message("Las Terrenas")
  },
  {
    city: "Samana",
    slug: "samana",
    enSlug: "samana",
    province: "Samana",
    priority: 2,
    title: "Fotografia inmobiliaria en Samana | Babula Shots",
    enTitle: "Real estate photography in Samana | Babula Shots",
    description: "Contenido inmobiliario para villas, hoteles boutique, Airbnb, playa y propiedades de inversion en Samana.",
    enDescription: "Real estate media for villas, boutique hotels, Airbnb, beach and investment properties in Samana.",
    h1: "Fotografia inmobiliaria en Samana",
    enH1: "Real estate photography in Samana",
    intro: "En Samana producimos contenido para propiedades con fuerte componente natural: playa, montana, vistas y privacidad.",
    enIntro: "In Samana we produce media for properties with strong natural context: beach, mountains, views and privacy.",
    localAngle: "Drone, exteriores y recorrido visual ayudan a explicar acceso, paisaje, terreno y valor turistico.",
    enLocalAngle: "Drone, exteriors and visual walkthroughs help explain access, landscape, land and tourism value.",
    propertyTypes: ["Villas", "Terrenos", "Airbnb", "Hoteles boutique", "Frente al mar"],
    areas: ["Las Galeras", "Cayo Levantado", "Playa Rincon", "Santa Barbara", "El Valle"],
    nearby: ["Las Terrenas", "Puerto Plata", "Punta Cana"],
    image: drone,
    whatsappMessage: message("Samana")
  },
  {
    city: "Puerto Plata",
    slug: "puerto-plata",
    enSlug: "puerto-plata",
    province: "Puerto Plata",
    priority: 2,
    title: "Fotografia inmobiliaria en Puerto Plata | Babula Shots",
    enTitle: "Real estate photography in Puerto Plata | Babula Shots",
    description: "Foto y video para villas, Airbnb, apartamentos, playa, montana y propiedades turisticas en Puerto Plata.",
    enDescription: "Photo and video for villas, Airbnb, apartments, beach, mountain and tourism properties in Puerto Plata.",
    h1: "Fotografia inmobiliaria en Puerto Plata",
    enH1: "Real estate photography in Puerto Plata",
    intro: "Puerto Plata combina costa, montana, villas y alquileres turisticos que necesitan galerias claras y atractivas.",
    enIntro: "Puerto Plata combines coast, mountains, villas and vacation rentals that need clear, attractive galleries.",
    localAngle: "Mostramos vistas, cercania a playa, piscina, balcones, arquitectura y potencial de renta para turistas.",
    enLocalAngle: "We show views, beach proximity, pool, balconies, architecture and rental potential for travelers.",
    propertyTypes: ["Villas", "Apartamentos", "Airbnb", "Locales", "Propiedades turisticas"],
    areas: ["Playa Dorada", "Sosua", "Cabarete", "Costambar", "Cofresi"],
    nearby: ["Santiago", "Samana", "Las Terrenas"],
    image: drone,
    whatsappMessage: message("Puerto Plata")
  },
  {
    city: "Bayahibe",
    slug: "bayahibe",
    enSlug: "bayahibe",
    province: "La Altagracia",
    priority: 2,
    title: "Fotografia inmobiliaria en Bayahibe | Babula Shots",
    enTitle: "Real estate photography in Bayahibe | Babula Shots",
    description: "Fotografia inmobiliaria para apartamentos, villas, Airbnb y propiedades turisticas en Bayahibe y Dominicus.",
    enDescription: "Real estate photography for apartments, villas, Airbnb and tourism properties in Bayahibe and Dominicus.",
    h1: "Fotografia inmobiliaria en Bayahibe",
    enH1: "Real estate photography in Bayahibe",
    intro: "Bayahibe funciona muy bien para propiedades de renta, apartamentos cerca del mar y villas para turismo.",
    enIntro: "Bayahibe works well for rental properties, seaside apartments and tourism villas.",
    localAngle: "Las imagenes deben mostrar playa, acceso, amenidades, tranquilidad y cercania con La Romana y Punta Cana.",
    enLocalAngle: "Images should show beach, access, amenities, calm atmosphere and proximity to La Romana and Punta Cana.",
    propertyTypes: ["Apartamentos", "Villas", "Airbnb", "Resorts", "Locales turisticos"],
    areas: ["Dominicus", "Playa Bayahibe", "Isla Saona", "La Romana", "Viva"],
    nearby: ["La Romana", "Punta Cana", "Casa de Campo"],
    image: villa,
    whatsappMessage: message("Bayahibe")
  },
  {
    city: "Jarabacoa",
    slug: "jarabacoa",
    enSlug: "jarabacoa",
    province: "La Vega",
    priority: 2,
    title: "Fotografia inmobiliaria en Jarabacoa | Babula Shots",
    enTitle: "Real estate photography in Jarabacoa | Babula Shots",
    description: "Fotos y video para villas de montana, cabanas, fincas, Airbnb y terrenos en Jarabacoa.",
    enDescription: "Photo and video for mountain villas, cabins, farms, Airbnb and land in Jarabacoa.",
    h1: "Fotografia inmobiliaria en Jarabacoa",
    enH1: "Real estate photography in Jarabacoa",
    intro: "Jarabacoa necesita contenido que muestre clima, paisaje, vegetacion, vistas y experiencia de descanso.",
    enIntro: "Jarabacoa needs media that shows climate, landscape, greenery, views and retreat experience.",
    localAngle: "Para cabanas, fincas y villas de montana, el drone y los exteriores son claves para vender contexto y terreno.",
    enLocalAngle: "For cabins, farms and mountain villas, drone and exteriors are key to sell context and land.",
    propertyTypes: ["Cabanas", "Villas", "Fincas", "Terrenos", "Airbnb"],
    areas: ["Buena Vista", "Pinar Quemado", "Jamaca de Dios", "La Vega", "Constanza"],
    nearby: ["Santiago", "La Vega", "Puerto Plata"],
    image: generatedHero,
    whatsappMessage: message("Jarabacoa")
  },
  {
    city: "Juan Dolio",
    slug: "juan-dolio",
    enSlug: "juan-dolio",
    province: "San Pedro de Macoris",
    priority: 2,
    title: "Fotografia inmobiliaria en Juan Dolio | Babula Shots",
    enTitle: "Real estate photography in Juan Dolio | Babula Shots",
    description: "Fotografia para apartamentos frente al mar, Airbnb, villas y propiedades en Juan Dolio.",
    enDescription: "Photography for beachfront apartments, Airbnb, villas and properties in Juan Dolio.",
    h1: "Fotografia inmobiliaria en Juan Dolio",
    enH1: "Real estate photography in Juan Dolio",
    intro: "Juan Dolio es clave para apartamentos frente al mar, rentas vacacionales y propiedades cerca de Santo Domingo.",
    enIntro: "Juan Dolio is important for beachfront apartments, vacation rentals and properties near Santo Domingo.",
    localAngle: "Las fotos deben explicar vista al mar, balcon, amenidades, acceso y distribucion del apartamento.",
    enLocalAngle: "Photos should explain ocean view, balcony, amenities, access and apartment layout.",
    propertyTypes: ["Apartamentos", "Airbnb", "Villas", "Frente al mar", "Locales"],
    areas: ["Metro Country Club", "Guayacanes", "Villas del Mar", "San Pedro", "Boca Chica"],
    nearby: ["Santo Domingo", "La Romana", "Bayahibe"],
    image: airbnb,
    whatsappMessage: message("Juan Dolio")
  },
  {
    city: "Bavaro",
    slug: "bavaro",
    enSlug: "bavaro",
    province: "La Altagracia",
    priority: 2,
    title: "Fotografia inmobiliaria en Bavaro | Babula Shots",
    enTitle: "Real estate photography in Bavaro | Babula Shots",
    description: "Fotografia inmobiliaria en Bavaro para apartamentos, villas, Airbnb, condos y propiedades turisticas.",
    enDescription: "Real estate photography in Bavaro for apartments, villas, Airbnb, condos and tourism properties.",
    h1: "Fotografia inmobiliaria en Bavaro",
    enH1: "Real estate photography in Bavaro",
    intro: "Bavaro concentra condos, villas y propiedades de renta donde una galeria profesional define la primera impresion.",
    enIntro: "Bavaro concentrates condos, villas and rentals where a professional gallery defines the first impression.",
    localAngle: "Los Corales, El Cortecito y Cocotal necesitan fotos claras, amenidades fuertes y contenido listo para Airbnb y portales.",
    enLocalAngle: "Los Corales, El Cortecito and Cocotal need clear photos, strong amenities and content ready for Airbnb and portals.",
    propertyTypes: ["Condos", "Villas", "Airbnb", "Apartamentos", "Locales"],
    areas: ["Los Corales", "El Cortecito", "Cocotal", "Friusa", "Bibijagua"],
    nearby: ["Punta Cana", "Cap Cana", "Miches"],
    image: villa,
    whatsappMessage: message("Bavaro")
  },
  {
    city: "Miches",
    slug: "miches",
    enSlug: "miches",
    province: "El Seibo",
    priority: 2,
    title: "Fotografia inmobiliaria en Miches | Babula Shots",
    enTitle: "Real estate photography in Miches | Babula Shots",
    description: "Contenido inmobiliario para proyectos, terrenos, playa, hoteles y propiedades de inversion en Miches.",
    enDescription: "Real estate media for developments, land, beach, hotels and investment properties in Miches.",
    h1: "Fotografia inmobiliaria en Miches",
    enH1: "Real estate photography in Miches",
    intro: "Miches es un mercado emergente para inversiones turisticas, terrenos y proyectos que necesitan contenido explicativo y premium.",
    enIntro: "Miches is an emerging market for tourism investments, land and developments that need premium explanatory media.",
    localAngle: "El drone ayuda a mostrar playa, acceso, escala de terreno, entorno y potencial de desarrollo.",
    enLocalAngle: "Drone helps show beach, access, land scale, surroundings and development potential.",
    propertyTypes: ["Terrenos", "Proyectos", "Hoteles", "Villas", "Inversion"],
    areas: ["Playa Esmeralda", "Laguna Limon", "Costa Esmeralda", "Miches centro", "Carretera nueva"],
    nearby: ["Punta Cana", "Bavaro", "Samana"],
    image: drone,
    whatsappMessage: message("Miches")
  }
];

export function cityPath(city: RealEstateCity, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/real-estate-photography-${city.enSlug}` : `/fotografia-inmobiliaria-${city.slug}`;
}

export function findCityByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateCities.find((city) => slug === (locale === "en" ? `real-estate-photography-${city.enSlug}` : `fotografia-inmobiliaria-${city.slug}`));
}
