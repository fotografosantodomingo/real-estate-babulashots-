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
  targetAudience?: string;
  enTargetAudience?: string;
  marketNotes?: string[];
  enMarketNotes?: string[];
  localSeoSections?: Array<{ heading: string; body: string; items: string[] }>;
  enLocalSeoSections?: Array<{ heading: string; body: string; items: string[] }>;
  faq?: { question: string; answer: string }[];
  enFaq?: { question: string; answer: string }[];
  localContext?: string[];
  enLocalContext?: string[];
  sisterCities?: string[];
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

const cityDetails: Record<string, Pick<RealEstateCity, "targetAudience" | "enTargetAudience" | "marketNotes" | "enMarketNotes" | "faq" | "enFaq">> = {
  "santo-domingo": {
    targetAudience: "Brokers corporativos, agentes de torres residenciales, constructoras urbanas, propietarios Airbnb y equipos comerciales que venden apartamentos en Piantini, Naco, Bella Vista y la Zona Colonial.",
    enTargetAudience: "Corporate brokers, residential tower agents, urban developers, Airbnb owners and sales teams marketing apartments in Piantini, Naco, Bella Vista and Zona Colonial.",
    marketNotes: ["Torres y apartamentos con amenidades pesan tanto como la unidad.", "Piantini, Naco y Evaristo Morales necesitan interiores claros y vistas urbanas limpias.", "Para Point2Homes, TerrenosRD y WhatsApp conviene entregar fotos horizontales, verticales y miniaturas ligeras."],
    enMarketNotes: ["Towers and amenities matter as much as the apartment unit.", "Piantini, Naco and Evaristo Morales need clean interiors and crisp city views.", "For Point2Homes, TerrenosRD and WhatsApp, deliver horizontal photos, vertical crops and light thumbnails."],
    faq: [
      { question: "Cuantas fotos necesito para un apartamento en Piantini o Naco?", answer: "Para torres en Piantini, Naco o Evaristo Morales recomendamos 25 a 35 fotos: sala, cocina, habitaciones, balcon, lobby, piscina, gimnasio, parqueos y vista. En Santo Domingo las amenidades del edificio influyen mucho en la decision." },
      { question: "Pueden trabajar apartamentos pequenos en Zona Colonial o Bella Vista?", answer: "Si. En apartamentos compactos de Zona Colonial, Bella Vista o Naco usamos composicion cuidada e iluminacion controlada para mostrar amplitud real sin deformar paredes ni hacer que el espacio parezca falso." }
    ],
    enFaq: [
      { question: "How many photos do I need for an apartment in Piantini or Naco?", answer: "For towers in Piantini, Naco or Evaristo Morales we recommend 25 to 35 photos: living area, kitchen, bedrooms, balcony, lobby, pool, gym, parking and view. In Santo Domingo, building amenities strongly affect buyer decisions." },
      { question: "Can you photograph small apartments in Zona Colonial or Bella Vista?", answer: "Yes. For compact apartments in Zona Colonial, Bella Vista or Naco, we use careful composition and controlled lighting to show real space without bending walls or making the property look fake." }
    ]
  },
  "punta-cana": {
    targetAudience: "Propietarios de villas, agentes que venden a extranjeros, administradores Airbnb, equipos de resorts y brokers de inversion en Bavaro, Cap Cana, Cocotal y Los Corales.",
    enTargetAudience: "Villa owners, agents selling to foreign buyers, Airbnb managers, resort teams and investment brokers in Bavaro, Cap Cana, Cocotal and Los Corales.",
    marketNotes: ["La venta visual depende del lifestyle: piscina, terraza, playa, golf y comunidad.", "Los compradores extranjeros necesitan entender distancia a playa, seguridad, amenidades y potencial de renta.", "Drone y video corto ayudan a vender ubicacion en Bavaro, Cap Cana y Cocotal."],
    enMarketNotes: ["The visual sale depends on lifestyle: pool, terrace, beach, golf and community.", "Foreign buyers need to understand beach distance, security, amenities and rental potential.", "Drone and short video help sell location in Bavaro, Cap Cana and Cocotal."],
    faq: [
      { question: "Incluyen drone para villas en Punta Cana o Cap Cana?", answer: "Si. Para villas en Punta Cana, Cap Cana, Cocotal o Bavaro recomendamos drone porque muestra lote, piscina, acceso, vista y cercania a playa o golf, algo dificil de explicar solo con fotos interiores." },
      { question: "Preparan fotos para Airbnb y compradores extranjeros?", answer: "Si. Entregamos imagenes pensadas para Airbnb, Point2Homes, redes y envio por WhatsApp, destacando habitaciones, piscina, terraza, amenidades y estilo de vida caribeno." }
    ],
    enFaq: [
      { question: "Do you include drone for villas in Punta Cana or Cap Cana?", answer: "Yes. For villas in Punta Cana, Cap Cana, Cocotal or Bavaro, we recommend drone because it shows lot size, pool, access, views and proximity to beach or golf." },
      { question: "Do you prepare photos for Airbnb and foreign buyers?", answer: "Yes. We deliver images for Airbnb, Point2Homes, social media and WhatsApp, highlighting bedrooms, pool, terrace, amenities and Caribbean lifestyle." }
    ]
  },
  "la-romana": {
    targetAudience: "Agentes de villas premium, propietarios de Casa de Campo, administradores de alquiler vacacional, arquitectos y brokers que venden propiedades cerca de Altos de Chavon y Bayahibe.",
    enTargetAudience: "Premium villa agents, Casa de Campo owners, vacation rental managers, architects and brokers selling properties near Altos de Chavon and Bayahibe.",
    marketNotes: ["La Romana mezcla lujo residencial, arquitectura tropical y alquiler vacacional.", "Casa de Campo requiere fotografiar privacidad, jardines, piscina y relacion con golf o marina.", "Bayahibe y Dominicus necesitan un enfoque mas turistico y de renta."],
    enMarketNotes: ["La Romana blends residential luxury, tropical architecture and vacation rentals.", "Casa de Campo requires showing privacy, gardens, pool and connection to golf or marina.", "Bayahibe and Dominicus need a stronger tourism and rental angle."],
    faq: [
      { question: "Hacen sesiones en Casa de Campo y Altos de Chavon?", answer: "Si. Para Casa de Campo, Minitas y Altos de Chavon cuidamos arquitectura, vegetacion, piscina, terraza y detalles premium porque el comprador espera una presentacion mas editorial." },
      { question: "Que conviene para una villa de renta en La Romana?", answer: "Para villas de renta en La Romana o Dominicus recomendamos fotos interiores, exteriores, piscina, habitaciones, amenidades y un video corto para redes o envio directo a huespedes." }
    ],
    enFaq: [
      { question: "Do you shoot in Casa de Campo and Altos de Chavon?", answer: "Yes. For Casa de Campo, Minitas and Altos de Chavon, we focus on architecture, landscaping, pool, terrace and premium details because buyers expect a more editorial presentation." },
      { question: "What is best for a rental villa in La Romana?", answer: "For rental villas in La Romana or Dominicus, we recommend interiors, exteriors, pool, bedrooms, amenities and a short video for social media or direct guest sharing." }
    ]
  },
  santiago: {
    targetAudience: "Agentes locales, constructoras de torres, propietarios de apartamentos, brokers comerciales y equipos de venta que publican en Los Jardines, La Trinitaria, Villa Olga y Cerros de Gurabo.",
    enTargetAudience: "Local agents, tower developers, apartment owners, commercial brokers and sales teams listing in Los Jardines, La Trinitaria, Villa Olga and Cerros de Gurabo.",
    marketNotes: ["Santiago exige fotos funcionales: distribucion, balcon, lobby, terminaciones y parqueos.", "Los proyectos nuevos necesitan continuidad visual para preventa y redes.", "Los locales comerciales deben mostrar fachada, acceso y contexto urbano."],
    enMarketNotes: ["Santiago needs functional photos: layout, balcony, lobby, finishes and parking.", "New developments need consistent visuals for presale and social media.", "Commercial spaces should show facade, access and urban context."],
    faq: [
      { question: "Que fotos necesita una torre nueva en Santiago?", answer: "En La Trinitaria, Villa Olga o Los Jardines conviene mostrar apartamento modelo, lobby, balcon, parqueos, amenidades y exteriores. Para preventa tambien recomendamos drone del entorno y avance de obra." },
      { question: "Trabajan locales comerciales en Santiago?", answer: "Si. Para locales en Santiago fotografiamos fachada, acceso, interior, visibilidad desde la calle y referencias cercanas para que el anuncio explique ubicacion y flujo." }
    ],
    enFaq: [
      { question: "What photos does a new tower in Santiago need?", answer: "In La Trinitaria, Villa Olga or Los Jardines, it helps to show model unit, lobby, balcony, parking, amenities and exteriors. For presale we also recommend drone of the surroundings and construction progress." },
      { question: "Do you cover commercial spaces in Santiago?", answer: "Yes. For commercial spaces in Santiago we photograph facade, access, interior, street visibility and nearby references so the listing explains location and traffic flow." }
    ]
  },
  "cap-cana": {
    targetAudience: "Brokers de lujo, propietarios de villas, equipos de marina/golf, agentes de inversion y administradores de renta premium en Marina Cap Cana, Juanillo y Punta Espada.",
    enTargetAudience: "Luxury brokers, villa owners, marina/golf teams, investment agents and premium rental managers in Marina Cap Cana, Juanillo and Punta Espada.",
    marketNotes: ["Cap Cana vende privacidad, seguridad, marina, golf y lifestyle premium.", "Las vistas a Juanillo, Punta Espada o la marina deben aparecer temprano en la galeria.", "Drone es clave para explicar escala, comunidad y amenidades."],
    enMarketNotes: ["Cap Cana sells privacy, security, marina, golf and premium lifestyle.", "Views toward Juanillo, Punta Espada or the marina should appear early in the gallery.", "Drone is key to explain scale, community and amenities."],
    faq: [
      { question: "Que debe mostrar una villa en Cap Cana?", answer: "Una villa en Cap Cana debe mostrar piscina, terraza, habitaciones, cocina, materiales, privacidad, acceso y contexto de comunidad como Marina Cap Cana, Juanillo o Punta Espada." },
      { question: "Recomiendan video para propiedades en Cap Cana?", answer: "Si. En Cap Cana el video ayuda a vender flujo, lifestyle y amenidades premium; combinado con drone funciona mejor para compradores extranjeros o inversionistas." }
    ],
    enFaq: [
      { question: "What should a Cap Cana villa show?", answer: "A Cap Cana villa should show pool, terrace, bedrooms, kitchen, materials, privacy, access and community context such as Marina Cap Cana, Juanillo or Punta Espada." },
      { question: "Do you recommend video for Cap Cana properties?", answer: "Yes. In Cap Cana, video helps sell flow, lifestyle and premium amenities; combined with drone it works better for foreign buyers or investors." }
    ]
  },
  "casa-de-campo": {
    targetAudience: "Propietarios de villas premium, administradores de rentas, brokers de lujo, arquitectos e interioristas que necesitan contenido para Casa de Campo, Minitas, La Marina y Teeth of the Dog.",
    enTargetAudience: "Premium villa owners, rental managers, luxury brokers, architects and interior designers needing media for Casa de Campo, Minitas, La Marina and Teeth of the Dog.",
    marketNotes: ["Casa de Campo requiere una lectura editorial de arquitectura y lifestyle.", "El comprador evalua privacidad, jardines, piscina, golf, marina y cercania a Minitas.", "Las galerias deben sentirse premium sin inventar lujo falso."],
    enMarketNotes: ["Casa de Campo needs an editorial reading of architecture and lifestyle.", "Buyers evaluate privacy, gardens, pool, golf, marina and proximity to Minitas.", "Galleries should feel premium without inventing fake luxury."],
    faq: [
      { question: "Que fotos son importantes para villas en Casa de Campo?", answer: "Para Casa de Campo recomendamos fachada, sala, comedor, habitaciones, piscina, jardines, terraza, detalles de arquitectura y tomas que expliquen cercania a Minitas, La Marina o el campo de golf." },
      { question: "Pueden hacer contenido para renta vacacional premium?", answer: "Si. Para villas de renta en Casa de Campo creamos fotos, video corto y detalles de lifestyle que funcionan para portales, presentaciones privadas y envio directo a huespedes." }
    ],
    enFaq: [
      { question: "What photos matter for villas in Casa de Campo?", answer: "For Casa de Campo we recommend facade, living room, dining, bedrooms, pool, gardens, terrace, architectural details and images that explain proximity to Minitas, La Marina or golf." },
      { question: "Can you create media for premium vacation rentals?", answer: "Yes. For Casa de Campo rental villas we create photos, short video and lifestyle details that work for portals, private presentations and direct guest sharing." }
    ]
  },
  "las-terrenas": {
    targetAudience: "Dueños de villas, administradores Airbnb, hoteles boutique, agentes de expats e inversionistas que venden o rentan en Playa Bonita, Coson y El Portillo.",
    enTargetAudience: "Villa owners, Airbnb managers, boutique hotels, expat agents and investors selling or renting in Playa Bonita, Coson and El Portillo.",
    marketNotes: ["Las Terrenas vende playa, vegetacion, tranquilidad y experiencia de escape.", "El mercado expat necesita fotos claras de acceso, privacidad y mantenimiento.", "Airbnb requiere portada fuerte, habitaciones honestas y amenidades visibles."],
    enMarketNotes: ["Las Terrenas sells beach, greenery, calm and escape experience.", "The expat market needs clear photos of access, privacy and maintenance.", "Airbnb requires a strong cover image, honest bedrooms and visible amenities."],
    faq: [
      { question: "Que conviene mostrar en una villa de Playa Bonita o Coson?", answer: "En Playa Bonita o Coson recomendamos abrir con piscina, terraza, vista, acceso a playa, habitaciones y zonas verdes. Si la propiedad tiene terreno o vista, agregamos drone." },
      { question: "Hacen fotos para Airbnb en Las Terrenas?", answer: "Si. Para Airbnb en Las Terrenas preparamos una galeria con portada, habitaciones, banos, cocina, amenidades y detalles de experiencia para mejorar clics y reservas." }
    ],
    enFaq: [
      { question: "What should a villa in Playa Bonita or Coson show?", answer: "In Playa Bonita or Coson, we recommend leading with pool, terrace, view, beach access, bedrooms and green areas. If the property has land or views, we add drone." },
      { question: "Do you photograph Airbnb properties in Las Terrenas?", answer: "Yes. For Airbnb in Las Terrenas, we prepare a gallery with cover image, bedrooms, bathrooms, kitchen, amenities and experience details to improve clicks and bookings." }
    ]
  },
  samana: {
    targetAudience: "Inversionistas, dueños de terrenos, villas frente al mar, hoteles boutique y agentes que venden propiedades naturales en Las Galeras, Playa Rincon y El Valle.",
    enTargetAudience: "Investors, land owners, beachfront villas, boutique hotels and agents selling nature-driven properties in Las Galeras, Playa Rincon and El Valle.",
    marketNotes: ["Samana necesita explicar paisaje, acceso, terreno y potencial turistico.", "Drone es casi obligatorio para terrenos, lomas y propiedades con vista.", "Las fotos deben equilibrar naturaleza con interiores habitables y bien mantenidos."],
    enMarketNotes: ["Samana needs to explain landscape, access, land and tourism potential.", "Drone is almost mandatory for land, hills and view properties.", "Photos must balance nature with livable, well-maintained interiors."],
    faq: [
      { question: "Sirve el drone para terrenos en Samana?", answer: "Si. En Las Galeras, El Valle o Playa Rincon el drone ayuda a mostrar acceso, linderos aproximados, vista, vegetacion y cercania a playa o carretera." },
      { question: "Pueden fotografiar hoteles boutique o villas pequenas?", answer: "Si. Para hoteles boutique y villas en Samana mostramos habitaciones, areas comunes, vista, playa cercana y detalles naturales que atraen a viajeros e inversionistas." }
    ],
    enFaq: [
      { question: "Is drone useful for land in Samana?", answer: "Yes. In Las Galeras, El Valle or Playa Rincon, drone helps show access, approximate boundaries, view, greenery and proximity to beach or road." },
      { question: "Can you photograph boutique hotels or small villas?", answer: "Yes. For boutique hotels and villas in Samana, we show bedrooms, common areas, view, nearby beach and natural details that attract travelers and investors." }
    ]
  },
  "puerto-plata": {
    targetAudience: "Agentes de propiedades turisticas, administradores Airbnb, dueños de villas y brokers que trabajan Playa Dorada, Sosua, Cabarete, Costambar y Cofresi.",
    enTargetAudience: "Tourism property agents, Airbnb managers, villa owners and brokers working Playa Dorada, Sosua, Cabarete, Costambar and Cofresi.",
    marketNotes: ["Puerto Plata combina playa, montana, renta vacacional y propiedades para extranjeros.", "Cabarete y Sosua requieren vender lifestyle activo y acceso a playa.", "Las vistas al mar o montana deben aparecer en fotos y drone."],
    enMarketNotes: ["Puerto Plata combines beach, mountains, vacation rentals and foreign-buyer properties.", "Cabarete and Sosua need to sell active lifestyle and beach access.", "Ocean or mountain views should appear in photos and drone."],
    faq: [
      { question: "Que fotos funcionan para Airbnb en Sosua o Cabarete?", answer: "Para Sosua y Cabarete priorizamos portada fuerte, habitaciones, piscina, cocina, terraza, acceso a playa y detalles de lifestyle porque el huesped compara rapido entre muchas opciones." },
      { question: "Hacen drone para villas con vista en Puerto Plata?", answer: "Si. En Cofresi, Costambar o Playa Dorada el drone ayuda a mostrar vista, pendiente, acceso, cercania al mar y escala de la propiedad." }
    ],
    enFaq: [
      { question: "What photos work for Airbnb in Sosua or Cabarete?", answer: "For Sosua and Cabarete we prioritize a strong cover image, bedrooms, pool, kitchen, terrace, beach access and lifestyle details because guests compare options quickly." },
      { question: "Do you do drone for view villas in Puerto Plata?", answer: "Yes. In Cofresi, Costambar or Playa Dorada, drone helps show view, slope, access, ocean proximity and property scale." }
    ]
  },
  bayahibe: {
    targetAudience: "Propietarios de apartamentos turisticos, villas, administradores Airbnb, agentes de Dominicus y equipos comerciales que venden cerca de Bayahibe, Saona y La Romana.",
    enTargetAudience: "Tourism apartment owners, villa owners, Airbnb managers, Dominicus agents and sales teams selling near Bayahibe, Saona and La Romana.",
    marketNotes: ["Bayahibe vende calma, playa, buceo, turismo y cercania a Isla Saona.", "Dominicus necesita fotos claras de amenidades y distancia a playa.", "Los apartamentos deben mostrar balcon, luz, piscina y areas comunes."],
    enMarketNotes: ["Bayahibe sells calm, beach, diving, tourism and proximity to Saona Island.", "Dominicus needs clear photos of amenities and beach distance.", "Apartments should show balcony, light, pool and common areas."],
    faq: [
      { question: "Que fotos necesita un apartamento en Dominicus?", answer: "En Dominicus recomendamos sala, cocina, habitaciones, balcon, piscina, fachada, acceso y referencias de playa. Para Airbnb tambien hacemos portada y detalles de experiencia." },
      { question: "Conviene drone en Bayahibe?", answer: "Si la propiedad tiene vista, cercania a playa o amenidades grandes, el drone ayuda a explicar ubicacion entre Bayahibe, Dominicus, La Romana e Isla Saona." }
    ],
    enFaq: [
      { question: "What photos does an apartment in Dominicus need?", answer: "In Dominicus we recommend living area, kitchen, bedrooms, balcony, pool, facade, access and beach references. For Airbnb we also create cover images and experience details." },
      { question: "Is drone worth it in Bayahibe?", answer: "If the property has a view, beach proximity or large amenities, drone helps explain location between Bayahibe, Dominicus, La Romana and Saona Island." }
    ]
  },
  jarabacoa: {
    targetAudience: "Dueños de cabanas, villas de montana, fincas, terrenos, anfitriones Airbnb y agentes que venden descanso, clima y naturaleza en Buena Vista, Pinar Quemado y Jamaca de Dios.",
    enTargetAudience: "Cabin owners, mountain villa owners, farms, land sellers, Airbnb hosts and agents selling retreat, climate and nature in Buena Vista, Pinar Quemado and Jamaca de Dios.",
    marketNotes: ["Jarabacoa vende clima, montana, chimenea, rio, vegetacion y privacidad.", "El drone explica terreno, acceso y vistas.", "Las fotos interiores deben sentirse calidas y reales, no frias como una torre urbana."],
    enMarketNotes: ["Jarabacoa sells climate, mountains, fireplace, river, greenery and privacy.", "Drone explains land, access and views.", "Interior photos should feel warm and real, not cold like an urban tower."],
    faq: [
      { question: "Que debe mostrar una cabana en Jarabacoa?", answer: "Una cabana en Buena Vista, Pinar Quemado o Jamaca de Dios debe mostrar vista, sala, habitaciones, terraza, chimenea, jacuzzi o piscina, vegetacion y acceso." },
      { question: "Hacen fotos y drone para terrenos o fincas?", answer: "Si. Para terrenos y fincas en Jarabacoa usamos drone para explicar escala, acceso, linderos aproximados, pendiente y relacion con montana o rio." }
    ],
    enFaq: [
      { question: "What should a cabin in Jarabacoa show?", answer: "A cabin in Buena Vista, Pinar Quemado or Jamaca de Dios should show view, living room, bedrooms, terrace, fireplace, jacuzzi or pool, greenery and access." },
      { question: "Do you photograph and drone land or farms?", answer: "Yes. For land and farms in Jarabacoa, we use drone to explain scale, access, approximate boundaries, slope and connection to mountain or river." }
    ]
  },
  "juan-dolio": {
    targetAudience: "Propietarios de apartamentos frente al mar, agentes de alquiler, administradores Airbnb y brokers que venden Juan Dolio como escape cercano a Santo Domingo.",
    enTargetAudience: "Beachfront apartment owners, rental agents, Airbnb managers and brokers selling Juan Dolio as a close escape from Santo Domingo.",
    marketNotes: ["Juan Dolio depende de vista al mar, balcon, piscina y distancia desde Santo Domingo.", "Metro Country Club y Villas del Mar necesitan explicar comunidad y amenidades.", "Las fotos deben mostrar el apartamento y tambien la experiencia de playa."],
    enMarketNotes: ["Juan Dolio depends on ocean view, balcony, pool and distance from Santo Domingo.", "Metro Country Club and Villas del Mar need to explain community and amenities.", "Photos should show the apartment and the beach experience."],
    faq: [
      { question: "Que fotos son clave para un apartamento en Juan Dolio?", answer: "Para Juan Dolio recomendamos vista desde balcon, sala, habitaciones, cocina, piscina, lobby, parqueo y acceso a playa, especialmente en Villas del Mar o Metro Country Club." },
      { question: "Sirve video para rentas vacacionales en Juan Dolio?", answer: "Si. Un video corto ayuda a mostrar la relacion entre apartamento, balcon, playa y amenidades, algo importante para Airbnb y compradores que vienen desde Santo Domingo." }
    ],
    enFaq: [
      { question: "What photos are key for an apartment in Juan Dolio?", answer: "For Juan Dolio, we recommend balcony view, living area, bedrooms, kitchen, pool, lobby, parking and beach access, especially in Villas del Mar or Metro Country Club." },
      { question: "Is video useful for vacation rentals in Juan Dolio?", answer: "Yes. A short video helps show the relationship between apartment, balcony, beach and amenities, important for Airbnb and buyers coming from Santo Domingo." }
    ]
  },
  bavaro: {
    targetAudience: "Agentes de condos, administradores Airbnb, propietarios de villas, brokers para extranjeros y equipos de venta en Los Corales, El Cortecito, Cocotal, Friusa y Bibijagua.",
    enTargetAudience: "Condo agents, Airbnb managers, villa owners, foreign-buyer brokers and sales teams in Los Corales, El Cortecito, Cocotal, Friusa and Bibijagua.",
    marketNotes: ["Bavaro es competitivo: las fotos deben diferenciar amenidades, playa y comunidad.", "Airbnb necesita portada, habitaciones honestas y piscina limpia.", "Los Corales y El Cortecito requieren vender caminabilidad y acceso a playa."],
    enMarketNotes: ["Bavaro is competitive: photos must differentiate amenities, beach and community.", "Airbnb needs a cover image, honest bedrooms and a clean pool.", "Los Corales and El Cortecito need to sell walkability and beach access."],
    faq: [
      { question: "Que debe tener una galeria Airbnb en Bavaro?", answer: "Para Airbnb en Los Corales, El Cortecito o Cocotal recomendamos portada fuerte, sala, habitaciones, banos, cocina, piscina, balcon y fotos que expliquen distancia a playa o amenidades." },
      { question: "Hacen contenido para agentes que venden a extranjeros?", answer: "Si. En Bavaro entregamos fotos, video y drone listos para Point2Homes, redes y WhatsApp, con enfasis en ubicacion, seguridad, amenidades y potencial de renta." }
    ],
    enFaq: [
      { question: "What should an Airbnb gallery in Bavaro include?", answer: "For Airbnb in Los Corales, El Cortecito or Cocotal, we recommend a strong cover image, living area, bedrooms, bathrooms, kitchen, pool, balcony and photos that explain beach or amenity distance." },
      { question: "Do you create media for agents selling to foreigners?", answer: "Yes. In Bavaro we deliver photos, video and drone ready for Point2Homes, social media and WhatsApp, emphasizing location, security, amenities and rental potential." }
    ]
  },
  miches: {
    targetAudience: "Desarrolladores, inversionistas, propietarios de terrenos, hoteles y brokers que necesitan explicar proyectos emergentes en Playa Esmeralda, Costa Esmeralda y Laguna Limon.",
    enTargetAudience: "Developers, investors, land owners, hotels and brokers who need to explain emerging projects in Playa Esmeralda, Costa Esmeralda and Laguna Limon.",
    marketNotes: ["Miches es emergente: el contenido debe educar sobre ubicacion y potencial.", "Drone es esencial para playa, terrenos y proyectos en desarrollo.", "Las fotos deben conectar paisaje con inversion, no solo mostrar el inmueble."],
    enMarketNotes: ["Miches is emerging: media must educate about location and potential.", "Drone is essential for beach, land and projects in development.", "Photos should connect landscape with investment, not only show the property."],
    faq: [
      { question: "Como se fotografia un terreno o proyecto en Miches?", answer: "En Miches usamos drone, fotos de acceso, entorno, playa cercana, escala del terreno y referencias como Playa Esmeralda o Laguna Limon para explicar el potencial de inversion." },
      { question: "Sirve contenido para preventa en Miches?", answer: "Si. Para proyectos emergentes en Costa Esmeralda o Playa Esmeralda recomendamos foto, video, drone y clips para redes que ayuden a vender la vision antes de que todo este construido." }
    ],
    enFaq: [
      { question: "How do you photograph land or a project in Miches?", answer: "In Miches we use drone, access photos, surroundings, nearby beach, land scale and references such as Playa Esmeralda or Laguna Limon to explain investment potential." },
      { question: "Is media useful for presale in Miches?", answer: "Yes. For emerging projects in Costa Esmeralda or Playa Esmeralda, we recommend photo, video, drone and social clips that help sell the vision before everything is built." }
    ]
  }
};

const cityDistinctiveContent: Record<string, { localContext: string[]; enLocalContext: string[]; sisterCities: string[] }> = {
  "santo-domingo": {
    localContext: [
      "El mercado inmobiliario de Santo Domingo se concentra en cuatro corredores muy diferentes que cambian completamente la forma de fotografiar una propiedad. Piantini y Naco dominan el segmento de apartamentos de gama alta con torres de 15 a 30 pisos donde los compradores -ejecutivos locales y diaspora dominicana en Miami, Nueva York y Madrid- evaluan vistas urbanas, terminaciones italianas y amenidades de lobby antes de pedir una visita. En Bella Vista y Mirador Sur el comprador suele ser familia local consolidada y la fotografia debe mostrar espacio real, balcon hacia la avenida y proximidad a parques. La Zona Colonial, en cambio, exige sensibilidad: casonas restauradas, lofts con vigas vistas y patios coloniales requieren luz suave y angulos que respeten la arquitectura sin convertirla en postal turistica.",
      "El corredor de la Avenida Anacaona y Los Cacicazgos ha empujado precios hacia niveles de Miami, y los desarrolladores piden contenido que diferencie su torre de otras 20 en construccion. Por eso recomendamos abrir galerias con vista al Mirador Sur o al mar Caribe -fotografiada al amanecer cuando el aire esta limpio- antes de las amenidades, porque la vista define el precio. Para apartamentos pequenos en Gazcue, Evaristo Morales o La Esperilla, la luz natural se trabaja con cortinas semicerradas para evitar la quemazon del sol del mediodia tropical, y se favorece el atardecer hacia el oeste para fotos exteriores de fachada. Drone se permite en la mayoria del Distrito Nacional pero esta restringido cerca del Palacio Nacional y zonas militares; siempre confirmamos antes.",
      "El segmento Airbnb en Santo Domingo crece en Zona Colonial, Naco y la zona universitaria, con huespedes que comparan rapidamente entre 200 opciones por noche. Para esos anuncios entregamos portada vertical optimizada para movil, set horizontal para Booking, recortes para Instagram y archivos ligeros para WhatsApp. La iluminacion artificial -lamparas calidas, plafones LED, lampara de pie- se enciende incluso de dia para sumar calidez visual y bajar la sensacion de apartamento frio que tienen muchas torres nuevas."
    ],
    enLocalContext: [
      "Santo Domingo's real estate market lives in four distinct corridors that completely change how a property should be photographed. Piantini and Naco lead the high-end apartment segment with 15 to 30 story towers where buyers -local executives and the Dominican diaspora in Miami, New York and Madrid- evaluate city views, Italian finishes and lobby amenities before scheduling a visit. In Bella Vista and Mirador Sur the buyer is usually established local family and photos must show real space, the balcony over the avenue and access to parks. Zona Colonial, on the other hand, demands sensitivity: restored colonial mansions, lofts with exposed beams and inner courtyards need soft light and angles that respect the architecture without turning it into a tourist postcard.",
      "The Avenida Anacaona and Los Cacicazgos corridor has pushed prices toward Miami levels, and developers ask for media that differentiates their tower from 20 others under construction. That is why we recommend opening galleries with the view toward Mirador Sur or the Caribbean Sea -shot at sunrise when the air is clean- before the amenities, because the view defines the price. For smaller apartments in Gazcue, Evaristo Morales or La Esperilla, natural light is handled with partially closed curtains to avoid the tropical midday burn, and late afternoon is favored for the western facade. Drone work is allowed across most of the Distrito Nacional but restricted near the Palacio Nacional and military zones; we always confirm beforehand.",
      "The Airbnb segment in Santo Domingo is growing in Zona Colonial, Naco and the university area, where guests compare 200 options per night in seconds. For those listings we deliver a vertical cover image optimized for mobile, a horizontal set for Booking, Instagram crops and light files for WhatsApp. Artificial lighting -warm lamps, LED ceiling fixtures, floor lamps- is turned on even in daytime to add visual warmth and reduce the cold-new-tower feeling that many recent buildings carry."
    ],
    sisterCities: ["juan-dolio", "santiago", "punta-cana"]
  },
  "punta-cana": {
    localContext: [
      "Punta Cana es el unico mercado de Republica Dominicana donde mas del 70 por ciento de los compradores son extranjeros -estadounidenses, canadienses, italianos, espanoles, rusos, argentinos- que nunca visitaran la propiedad antes de hacer una oferta. Eso convierte la fotografia inmobiliaria en el unico vendedor real del listado, y obliga a entregar una secuencia que responda tres preguntas en los primeros cinco segundos: que tan cerca esta de la playa, cuanto rinde en Airbnb y como se ve la comunidad. Por eso abrimos siempre con drone exterior de la villa y la piscina con la playa al fondo, no con la sala.",
      "Cada sub-zona requiere su propio enfoque. Punta Cana Village y Cocotal Golf concentran familias estadounidenses con hijos y golf semanal, donde la fotografia debe mostrar el campo de golf como vista desde la terraza y los caminos peatonales seguros. Los Corales, El Cortecito y Bibijagua atraen el segmento Airbnb intensivo -alta rotacion, precios medios- donde la portada decide la reserva en 3 segundos y los detalles de cocina equipada y wifi visible importan tanto como el dormitorio principal. Cap Cana y Punta Espada son lujo internacional y exigen tratamiento editorial: lente fijo, composiciones limpias, golden hour real, y respeto por la escala de los espacios.",
      "La hora dorada en Punta Cana cambia con la estacion: en diciembre el sol se pone hacia las 5:50 PM y en junio hacia las 7:10 PM. Para villas con piscina orientada al sur o al oeste, el atardecer entrega una luz dorada que multiplica el valor percibido. Las restricciones de drone son estrictas en un radio de 5 km del Aeropuerto Internacional de Punta Cana (PUJ), lo que afecta directamente a Bavaro este, Cabeza de Toro y partes de Cap Cana -en esas zonas usamos altura limitada o sustituimos con tomas terrestres altas. Para huespedes Airbnb internacionales, entregamos tambien una galeria con texto en ingles incrustado para Booking y Vrbo."
    ],
    enLocalContext: [
      "Punta Cana is the only Dominican Republic market where over 70 percent of buyers are foreign -Americans, Canadians, Italians, Spaniards, Russians, Argentines- who will never visit the property before making an offer. That makes real estate photography the only real salesperson on the listing, and forces a sequence that answers three questions in the first five seconds: how close is the beach, what does it earn on Airbnb and what does the community look like. That is why we always open with an exterior drone shot of the villa and pool with the beach in the background, not the living room.",
      "Each sub-zone needs its own approach. Punta Cana Village and Cocotal Golf concentrate American families with kids and weekly golf, where photography must show the golf course as a view from the terrace and safe pedestrian paths. Los Corales, El Cortecito and Bibijagua attract the intensive Airbnb segment -high turnover, mid-range prices- where the cover decides the booking in 3 seconds and an equipped kitchen and visible wifi matter as much as the master bedroom. Cap Cana and Punta Espada are international luxury and require editorial treatment: prime lens, clean compositions, real golden hour and respect for the scale of the spaces.",
      "Golden hour in Punta Cana shifts with the season: in December the sun sets around 5:50 PM and in June around 7:10 PM. For villas with a south or west-facing pool, the sunset delivers golden light that multiplies perceived value. Drone restrictions are strict within a 5 km radius of Punta Cana International Airport (PUJ), directly affecting east Bavaro, Cabeza de Toro and parts of Cap Cana -in those areas we use limited altitude or substitute with elevated ground shots. For international Airbnb guests, we also deliver a gallery with embedded English text for Booking and Vrbo."
    ],
    sisterCities: ["bavaro", "cap-cana", "bayahibe"]
  },
  "la-romana": {
    localContext: [
      "La Romana es un mercado de dos velocidades. Por un lado Casa de Campo, la comunidad privada de 7,000 acres con tres campos de golf de PGA, marina deportiva, poli, Altos de Chavon y aeropuerto privado, donde las villas se venden entre 2 y 25 millones de dolares y los compradores son magnates latinoamericanos, family offices estadounidenses y celebridades. Por otro, La Romana ciudad y sus barrios residenciales -Caleta, Las Lomas, Buena Vista- donde el mercado es local, los precios bajan a un decimo y la fotografia se enfoca en distribucion practica para familias dominicanas y empleados de Central Romana.",
      "Para una villa en Casa de Campo, la fotografia debe leer como editorial de Architectural Digest: arquitectura tropical mediterranea, jardines disenados, piscina infinity con vista al campo de golf o al mar Caribe, marina al fondo. Trabajamos con composiciones de gran formato, lente de 16 a 35 mm para interiores y 70 a 200 mm para detalle de paisajismo. La privacidad es absoluta -muchos propietarios no permiten drone porque hay vecinos de alto perfil, asi que pedimos autorizacion escrita antes y trabajamos alturas bajas. El horario de captura ideal son las primeras dos horas despues del amanecer cuando la luz cae sobre el Caribe y las palmas no proyectan sombras duras.",
      "Bayahibe y Dominicus, tambien dentro del area de La Romana, son mercados mas turisticos: apartamentos de 1 y 2 habitaciones que se rentan a europeos como segunda residencia. La fotografia ahi cambia completamente: portadas mas saturadas, piscina del condominio en primer plano, distancia caminable a la playa explicada en una toma de drone bajo. Para Altos de Chavon -el pueblo artesanal piedra a piedra- la fotografia debe captar el caracter mediterraneo del siglo XVI sin parecer artificial, algo que se logra con luz lateral del atardecer y composiciones simetricas."
    ],
    enLocalContext: [
      "La Romana is a two-speed market. On one side Casa de Campo, the 7,000-acre private community with three PGA golf courses, sport marina, polo, Altos de Chavon and private airport, where villas sell between 2 and 25 million dollars and buyers are Latin American magnates, US family offices and celebrities. On the other, La Romana city and its residential neighborhoods -Caleta, Las Lomas, Buena Vista- where the market is local, prices drop to a tenth and photography focuses on practical layout for Dominican families and Central Romana employees.",
      "For a Casa de Campo villa, photography must read like an Architectural Digest editorial: Mediterranean tropical architecture, designed gardens, infinity pool with golf course or Caribbean Sea view, marina in the background. We work with large-format compositions, 16 to 35 mm lens for interiors and 70 to 200 mm for landscaping detail. Privacy is absolute -many owners do not allow drone because of high-profile neighbors, so we request written authorization first and work at low altitudes. The ideal capture window is the first two hours after sunrise when light falls on the Caribbean and palms do not cast hard shadows.",
      "Bayahibe and Dominicus, also within the La Romana area, are more tourism-oriented markets: 1 and 2 bedroom apartments rented to Europeans as second residence. Photography there completely shifts: more saturated covers, condo pool in foreground, walkable beach distance explained with a low drone shot. For Altos de Chavon -the stone-by-stone artisan village- photography must capture the 16th-century Mediterranean character without looking artificial, achieved with lateral sunset light and symmetric compositions."
    ],
    sisterCities: ["casa-de-campo", "bayahibe", "punta-cana"]
  },
  santiago: {
    localContext: [
      "Santiago es la unica ciudad de Republica Dominicana donde el mercado inmobiliario NO depende del turismo. Como segunda ciudad y motor industrial del Cibao -zonas francas, tabaco, manufactura, comercio mayorista-, los compradores son empresarios locales, profesionales medicos del Hospital Metropolitano (HOMS) y familias dominicanas consolidadas que valoran cercania al centro y a colegios privados. Por eso la fotografia inmobiliaria aqui se parece mas a la de Medellin o Monterrey que a la de Punta Cana: torres de oficinas, apartamentos urbanos, casas en proyectos cerrados, locales comerciales en avenidas principales.",
      "Las zonas hot son La Trinitaria -corredor de torres de gama media-alta, recientemente revitalizado-, Cerros de Gurabo con casas de familia y vista hacia el valle del Cibao, Villa Olga y Los Jardines con apartamentos amplios y proyectos en La Esmeralda. Para estos compradores no funciona la portada con piscina caribena: funciona el balcon que muestra la avenida Estrella Sadhala, el lobby con seguridad, el parqueo techado, la cocina con isla y la habitacion principal con walk-in closet. Los desarrolladores que venden preventa necesitan renderizaciones limpias mas fotos de avance de obra cada 30 dias, todo entregado en kit completo para redes y portales.",
      "Santiago tiene una luz particular -el valle se llena de bruma matutina entre noviembre y febrero que suaviza los exteriores- y un cielo despejado en abril-mayo ideal para drone. El Aeropuerto Cibao (STI) limita el vuelo en el sur de la ciudad, especialmente cerca del Monumento y Cerros de Gurabo. Para locales comerciales en la Avenida 27 de Febrero o la Estrella Sadhala documentamos fachada, flujo peatonal, parqueo, visibilidad desde la avenida e interior, porque el comprador comercial evalua trafico real tanto como metros cuadrados."
    ],
    enLocalContext: [
      "Santiago is the only city in the Dominican Republic where the real estate market does NOT depend on tourism. As the second city and industrial engine of the Cibao -free zones, tobacco, manufacturing, wholesale trade-, buyers are local business owners, medical professionals from Metropolitan Hospital (HOMS) and established Dominican families who value proximity to downtown and private schools. That is why real estate photography here resembles Medellin or Monterrey more than Punta Cana: office towers, urban apartments, gated-community houses, commercial spaces on major avenues.",
      "The hot zones are La Trinitaria -mid-to-high tier tower corridor, recently revitalized-, Cerros de Gurabo with family homes and a view over the Cibao valley, Villa Olga and Los Jardines with spacious apartments and developments in La Esmeralda. For these buyers, the Caribbean pool cover image does not work: what works is the balcony showing Estrella Sadhala Avenue, the lobby with security, the covered parking, the kitchen with island and the master bedroom with walk-in closet. Developers selling presale need clean renderings plus construction progress photos every 30 days, all delivered as a complete kit for social media and portals.",
      "Santiago has particular light -the valley fills with morning haze between November and February that softens exteriors- and a clear sky in April-May ideal for drone. Cibao Airport (STI) limits flights in the south of the city, especially near the Monumento and Cerros de Gurabo. For commercial spaces on 27 de Febrero Avenue or Estrella Sadhala, we document facade, foot traffic, parking, visibility from the avenue and interior, because the commercial buyer evaluates real traffic as much as square meters."
    ],
    sisterCities: ["santo-domingo", "jarabacoa", "puerto-plata"]
  },
  "cap-cana": {
    localContext: [
      "Cap Cana es el mercado inmobiliario mas exclusivo del Caribe despues de Mustique y Harbour Island. Comunidad privada de 30,000 acres con campo de golf Punta Espada disenado por Jack Nicklaus (top 100 mundial), marina con 134 atraques para yates de hasta 250 pies, hoyo signature sobre el mar, club de playa Caleton y un sistema de seguridad cerrado que filtra cada vehiculo. Los compradores son CEOs de Fortune 500, family offices, magnates latinoamericanos y celebridades que pagan entre 4 y 40 millones de dolares por villas oceanfront en Punta Espada o Caleton.",
      "Esta exclusividad cambia radicalmente la fotografia. Cada sesion requiere coordinacion previa con administracion de Cap Cana, propietario y a veces vecinos. El drone esta MUY restringido: Cap Cana esta dentro del cono de aproximacion al Aeropuerto Internacional de Punta Cana (PUJ) y existen zonas militares cercanas, asi que toda operacion aerea debe coordinarse con altura limitada y horarios autorizados. Para suplir el drone usamos lentes tilt-shift desde balcones altos, paneo desde el segundo o tercer piso y tomas desde la propia marina hacia las villas.",
      "El comprador de Cap Cana espera lectura editorial estilo Robb Report o Vanity Fair: composiciones simetricas, lente 24 mm para preservar la geometria de la arquitectura caribena moderna firmada por estudios como Sanchez & Curiel, iluminacion mixta natural y de tungsteno calido para los grandes salones, paneles HDR controlados (sin la apariencia tipica de HDR amateur). El golden hour aqui es decisivo porque casi todas las villas oceanfront se orientan al este -amanece sobre el mar a las 6:00 AM aproximadamente, y la luz dorada dura unos 40 minutos. Para la marina y campo de golf, fotografiamos tambien al final del dia para captar la luz lateral sobre los greens."
    ],
    enLocalContext: [
      "Cap Cana is the most exclusive real estate market in the Caribbean after Mustique and Harbour Island. A 30,000-acre private community with the Jack Nicklaus-designed Punta Espada golf course (top 100 worldwide), a marina with 134 slips for yachts up to 250 feet, a signature hole over the sea, Caleton beach club and a closed security system that filters every vehicle. Buyers are Fortune 500 CEOs, family offices, Latin American magnates and celebrities who pay between 4 and 40 million dollars for oceanfront villas in Punta Espada or Caleton.",
      "This exclusivity radically changes the photography. Each session requires prior coordination with Cap Cana administration, the owner and sometimes neighbors. Drone work is HEAVILY restricted: Cap Cana sits within the approach cone of Punta Cana International Airport (PUJ) and there are nearby military zones, so any aerial operation must be coordinated with limited altitude and authorized windows. To replace drone we use tilt-shift lenses from high balconies, panning from the second or third floor and shots from the marina itself toward the villas.",
      "The Cap Cana buyer expects an editorial reading in the style of Robb Report or Vanity Fair: symmetrical compositions, 24 mm lens to preserve the geometry of the modern Caribbean architecture signed by studios like Sanchez & Curiel, mixed natural and warm tungsten lighting for the large halls, controlled HDR panels (without the typical amateur HDR look). Golden hour here is decisive because almost all oceanfront villas face east -sunrise happens over the sea around 6:00 AM, and the golden light lasts about 40 minutes. For the marina and golf course, we also shoot at the end of the day to capture lateral light over the greens."
    ],
    sisterCities: ["punta-cana", "bavaro", "casa-de-campo"]
  },
  "casa-de-campo": {
    localContext: [
      "Casa de Campo es el resort residencial mas antiguo y prestigioso del Caribe -fundado en 1974 por Gulf+Western como retiro privado para ejecutivos y celebridades, hoy hogar de 1,700 villas privadas, tres campos de golf disenados por Pete Dye (Teeth of the Dog, Dye Fore, La Romana Country Club), polo, marina de 360 atraques, aeropuerto privado La Romana (LRM) y el Altos de Chavon disenado piedra a piedra por Roberto Coppa. Aqui no se vende ubicacion, se vende pertenencia.",
      "Las villas se concentran en sub-zonas con perfil propio: Minitas y Las Lomas para villas tradicionales caribenas frente al mar; Vista Chavon y Dye Fore para casas modernas con vista al rio Chavon y al campo Dye Fore; Premium con villas oceanfront por encima de los 8 millones de dolares; Punta Aguila para terrenos privados. Cada estilo arquitectonico exige un tratamiento fotografico: las villas tradicionales con techos de cana caribena necesitan luz natural calida desde las 7 a 9 AM; las villas modernas de hormigon visto y vidrio reclaman composiciones geometricas, simetria perfecta y golden hour controlado.",
      "La gestion de permisos es la parte mas delicada del trabajo en Casa de Campo. La administracion exige autorizacion escrita, identificacion del fotografo, lista de equipo, horarios fijos y prohibe absolutamente fotografiar villas vecinas. El drone funciona con altura maxima y rutas predefinidas, evitando interferir con el aeropuerto privado y respetando el espacio aereo de cada vecino. Para alquiler vacacional premium (5,000 a 25,000 USD por semana), entregamos pack completo: 60 fotos finales, video estilo cinematografico, recorrido virtual 360 y galeria optimizada para Casa de Campo Resorts, Luxury Retreats y plataformas como James Edition."
    ],
    enLocalContext: [
      "Casa de Campo is the oldest and most prestigious residential resort in the Caribbean -founded in 1974 by Gulf+Western as a private retreat for executives and celebrities, today home to 1,700 private villas, three Pete Dye-designed golf courses (Teeth of the Dog, Dye Fore, La Romana Country Club), polo, a 360-slip marina, La Romana private airport (LRM) and the stone-by-stone Altos de Chavon designed by Roberto Coppa. Here you do not sell location, you sell belonging.",
      "Villas concentrate in sub-zones with their own profile: Minitas and Las Lomas for traditional Caribbean villas facing the sea; Vista Chavon and Dye Fore for modern houses overlooking the Chavon River and Dye Fore course; Premium with oceanfront villas above 8 million dollars; Punta Aguila for private land. Each architectural style demands a specific photographic treatment: traditional villas with Caribbean cane roofs need warm natural light from 7 to 9 AM; modern villas of exposed concrete and glass require geometric compositions, perfect symmetry and controlled golden hour.",
      "Permit management is the most delicate part of working in Casa de Campo. The administration requires written authorization, photographer ID, equipment list, fixed schedule and absolutely forbids photographing neighboring villas. Drone works at maximum altitude with predefined routes, avoiding interference with the private airport and respecting each neighbor's airspace. For premium vacation rental (5,000 to 25,000 USD per week), we deliver a full pack: 60 final photos, cinematic-style video, 360 virtual tour and gallery optimized for Casa de Campo Resorts, Luxury Retreats and platforms like James Edition."
    ],
    sisterCities: ["la-romana", "bayahibe", "punta-cana"]
  },
  "las-terrenas": {
    localContext: [
      "Las Terrenas es el unico mercado dominicano donde el comprador europeo manda -mas del 60 por ciento son franceses, italianos y suizos, con presencia creciente de alemanes y belgas, atraidos desde los anos 90 cuando llegaron mochileros que se quedaron y construyeron negocios. Eso creo un mercado inmobiliario particular: pequeno, sin grandes desarrolladores, dominado por boutique condos, villas privadas, hoteles boutique y casas de pueblo restauradas. La fotografia debe leerse como una pagina de Cote Sud o Boat International, no como un anuncio Caribe estandar.",
      "Las zonas tienen personalidad muy marcada. Playa Bonita atrae villas privadas grandes con piscina y acceso directo a una playa de 2 km casi vacia; alli la fotografia se hace con drone bajo desde la palmera mas alta hacia el mar para mostrar la pertenencia visual entre villa, jardin y agua. Playa Coson es mas salvaje, palmar interminable, ideal para sesiones al amanecer cuando la marea esta baja. El Pueblo de los Pescadores -corazon nocturno con restaurantes franceses y reggae bars frente al mar- es donde estan los apartamentos boutique y locales comerciales; la fotografia ahi pide composicion mas cinematica, luces calidas mixtas y respeto por el caracter bohemio.",
      "La logistica en Las Terrenas tiene rasgos unicos. El acceso desde Santo Domingo toma 2.5 horas por la autopista del Coral hasta llegar a la peninsula de Samana; muchos compradores europeos vienen via aeropuerto El Catey (AZS) directamente desde Paris en charter. El drone es practicamente libre fuera de aeropuertos. La luz aqui es excepcional: cielos limpios, mar turquesa, vegetacion abundante; la mejor ventana para exteriores es entre 6:30 y 8:30 AM. Para los compradores europeos, la entrega incluye descripciones en frances o italiano y archivos optimizados para Green-Acres, Le Figaro Immobilier y portales europeos."
    ],
    enLocalContext: [
      "Las Terrenas is the only Dominican market where the European buyer rules -over 60 percent are French, Italian and Swiss, with growing presence from Germans and Belgians, attracted since the 90s when backpackers arrived, stayed and built businesses. That created a particular real estate market: small, with no major developers, dominated by boutique condos, private villas, boutique hotels and restored town houses. Photography must read like a page from Cote Sud or Boat International, not a standard Caribbean ad.",
      "The zones have very distinct personalities. Playa Bonita attracts large private villas with pools and direct access to a nearly empty 2 km beach; there photography is done with a low drone from the tallest palm tree toward the sea to show the visual belonging between villa, garden and water. Playa Coson is wilder, an endless palm grove, ideal for sunrise sessions when the tide is low. Pueblo de los Pescadores -the nighttime heart with French restaurants and reggae bars by the sea- is where boutique apartments and commercial spaces are; photography there asks for more cinematic composition, mixed warm lights and respect for the bohemian character.",
      "Logistics in Las Terrenas have unique traits. Access from Santo Domingo takes 2.5 hours via Coral highway to reach the Samana peninsula; many European buyers come via El Catey airport (AZS) directly from Paris on charter. Drone is practically unrestricted outside airports. Light here is exceptional: clean skies, turquoise sea, abundant vegetation; the best exterior window is between 6:30 and 8:30 AM. For European buyers, delivery includes French or Italian descriptions and files optimized for Green-Acres, Le Figaro Immobilier and European portals."
    ],
    sisterCities: ["samana", "puerto-plata"]
  },
  samana: {
    localContext: [
      "La peninsula de Samana es el mercado dominicano mas joven y menos institucional. A diferencia de Punta Cana o Casa de Campo, aqui no hay grandes desarrolladores ni comunidades cerradas masivas: hay villas individuales, terrenos en lomas con vista al oceano, hoteles boutique y proyectos pequenos en Las Galeras, Santa Barbara y El Valle. El comprador es un inversionista que busca tierra apreciable, una segunda casa de retiro o un proyecto turistico boutique, dispuesto a invertir esperando que la peninsula se desarrolle en los proximos 10 anos.",
      "El paisaje natural es el principal activo a fotografiar y exige tecnica especifica. Playa Rincon -consistentemente listada entre las 10 mejores del mundo por Conde Nast- se fotografia idealmente con drone alto desde el extremo oeste capturando los 4 km de arena blanca y el rio que desemboca al mar. Cayo Levantado se documenta desde lancha al amanecer cuando la bruma se levanta del agua. Para terrenos en El Valle o Las Galeras, el drone es indispensable porque explica acceso, pendiente, vista al mar Caribe o a la bahia de Samana, vegetacion y linderos aproximados -informacion que ninguna foto terrestre puede capturar.",
      "La temporada de ballenas jorobadas (mediados de enero a finales de marzo) anade un activo unico: villas y hoteles con vista a la bahia de Samana se pueden fotografiar con ballenas saltando en el fondo, algo que multiplica el valor narrativo de una propiedad turistica. La logistica es retadora -caminos sin asfaltar a muchas villas, dependencia del aeropuerto AZS o de la carretera desde Santo Domingo (3 horas)- pero la baja densidad de fotografos especializados aqui significa que un buen reportaje fotografico marca una diferencia comercial enorme frente a la competencia local."
    ],
    enLocalContext: [
      "The Samana peninsula is the youngest and least institutional Dominican market. Unlike Punta Cana or Casa de Campo, there are no major developers or massive gated communities here: there are individual villas, hillside land with ocean views, boutique hotels and small projects in Las Galeras, Santa Barbara and El Valle. The buyer is an investor looking for appreciating land, a retirement second home or a boutique tourism project, willing to invest while waiting for the peninsula to develop over the next 10 years.",
      "The natural landscape is the main asset to photograph and requires specific technique. Playa Rincon -consistently ranked among the world's top 10 by Conde Nast- is ideally shot with high drone from the west end capturing the 4 km of white sand and the river that flows to the sea. Cayo Levantado is documented from a boat at dawn when mist lifts from the water. For land in El Valle or Las Galeras, drone is essential because it explains access, slope, view toward the Caribbean Sea or Samana Bay, vegetation and approximate boundaries -information that no ground photo can capture.",
      "Humpback whale season (mid-January to late March) adds a unique asset: villas and hotels overlooking Samana Bay can be photographed with whales breaching in the background, which multiplies the narrative value of a tourism property. Logistics are challenging -unpaved roads to many villas, dependence on AZS airport or the 3-hour drive from Santo Domingo- but the low density of specialized photographers here means that a strong photo report makes an enormous commercial difference against local competition."
    ],
    sisterCities: ["las-terrenas", "puerto-plata"]
  },
  "puerto-plata": {
    localContext: [
      "Puerto Plata fue el primer destino turistico desarrollado de Republica Dominicana en los anos 70 y 80, y eso marca su mercado inmobiliario actual. Hay infraestructura veterana -Playa Dorada, el primer complejo turistico todo-incluido del Caribe-, villas anos 80 y 90 que se renuevan para Airbnb, condos de gama media y un mercado de segunda mano activo. Los compradores son una mezcla equilibrada: canadienses que vienen huyendo del invierno (compran apartamentos pequenos), expatriados estadounidenses retirados (compran villas en Costambar y Cofresi), e inversionistas que reciclan propiedades para alquiler turistico.",
      "Las tres zonas activas funcionan como mercados distintos. Cabarete es la capital mundial del kite-surf y windsurf, con apartamentos pequenos y villas frente al mar que se rentan por semana a deportistas extranjeros; la fotografia ahi debe incluir el viento sobre el agua, las velas en la playa y un estilo de vida activo. Sosua tiene una comunidad expat consolidada -mas bohemia, mezcla de europeos y norteamericanos jubilados-, con villas en lomas y condos cerca de Playa Sosua. Costambar y Cofresi mantienen el legado de Playa Dorada con villas privadas grandes, gated communities y comunidad jubilada estadounidense.",
      "La fotografia inmobiliaria de Puerto Plata se beneficia del clima mas cambiante del pais -lluvias intermitentes que producen cielos dramaticos- y de una luz lateral fuerte por la orientacion norte de la costa. El mejor horario para drone es entre 7 y 10 AM cuando el alisio del este no es tan fuerte. El telerrferico Pico Isabel de Torres aporta una toma aerea unica de cualquier propiedad sobre la ciudad. Las restricciones de vuelo son moderadas cerca del Aeropuerto Internacional Gregorio Luperon (POP), especialmente en el corredor entre Cofresi y Maimon."
    ],
    enLocalContext: [
      "Puerto Plata was the first developed tourism destination in the Dominican Republic in the 70s and 80s, and that shapes its current real estate market. There is veteran infrastructure -Playa Dorada, the first all-inclusive Caribbean tourism complex-, 80s and 90s villas being renovated for Airbnb, mid-range condos and an active second-hand market. Buyers are a balanced mix: Canadians escaping winter (buying small apartments), retired American expats (buying villas in Costambar and Cofresi) and investors recycling properties for tourism rental.",
      "The three active zones work as distinct markets. Cabarete is the world capital of kite-surf and windsurf, with small apartments and beachfront villas rented by the week to foreign athletes; photography there must include wind on water, sails on the beach and an active lifestyle. Sosua has an established expat community -more bohemian, a mix of retired Europeans and North Americans-, with hillside villas and condos near Playa Sosua. Costambar and Cofresi keep the Playa Dorada legacy with large private villas, gated communities and an American retiree community.",
      "Puerto Plata real estate photography benefits from the country's most variable climate -intermittent rain producing dramatic skies- and a strong lateral light due to the northern coast orientation. The best drone window is between 7 and 10 AM when the east trade wind is not as strong. The Pico Isabel de Torres cable car provides a unique aerial shot over any property in the city. Flight restrictions are moderate near Gregorio Luperon International Airport (POP), especially in the Cofresi to Maimon corridor."
    ],
    sisterCities: ["samana", "las-terrenas", "santiago"]
  },
  bayahibe: {
    localContext: [
      "Bayahibe es una version mas pequena, mas tranquila y mas accesible que Punta Cana. Como puerto de salida hacia la Isla Saona y el Parque Nacional Cotubanama, el mercado inmobiliario gira alrededor de apartamentos en condominios con piscina, villas medianas y proyectos turisticos a pie de playa. El comprador suele ser europeo (italiano principalmente, tambien aleman y frances) buscando segunda residencia de bajo mantenimiento, o inversionistas que aprovechan precios un 40 por ciento mas bajos que Punta Cana con renta vacacional creciente.",
      "Dominicus es la sub-zona estrella -un poblado planificado de los anos 90 con calles peatonales, condominios cerrados, restaurantes europeos y la marina del CocoMar-. La fotografia inmobiliaria aqui se enfoca en proximidad a playa (la mayoria de condos quedan a 5-10 minutos caminando), areas comunes con piscina, balcon o terraza, y atmosfera europea-caribena que define el lugar. Las galerias suelen abrir con la piscina del condominio rodeada de palmas y cocoteros, y cerrar con vista de Playa Dominicus -calificada bandera azul-.",
      "La cercania a la Isla Saona y a las cuevas de buceo (Catedral, Atlantic Princess, El Penon) anade un activo turistico: las villas y apartamentos pueden venderse o rentarse a buceadores que pasan semanas explorando el Cotubanama, lo que justifica fotos del muelle de Bayahibe con catamaranes y barcos de buceo. La distancia a La Romana (15 minutos) y a Casa de Campo (20 minutos) tambien se explota: muchos compradores eligen Bayahibe como entrada economica a la zona, con acceso facil al aeropuerto privado de La Romana (LRM). El drone funciona sin restricciones fuera del corredor de aproximacion a LRM."
    ],
    enLocalContext: [
      "Bayahibe is a smaller, quieter and more accessible version of Punta Cana. As the departure port to Saona Island and Cotubanama National Park, the real estate market revolves around apartments in pool-equipped condominiums, mid-sized villas and tourism projects right by the beach. The buyer is usually European (mainly Italian, also German and French) looking for a low-maintenance second residence, or investors taking advantage of prices 40 percent lower than Punta Cana with growing vacation rental income.",
      "Dominicus is the flagship sub-zone -a planned town from the 90s with pedestrian streets, gated condominiums, European restaurants and the CocoMar marina-. Real estate photography here focuses on beach proximity (most condos are 5-10 walking minutes), common areas with pool, balcony or terrace, and the European-Caribbean atmosphere that defines the place. Galleries usually open with the condominium pool surrounded by palms and coconut trees, and close with a view of Playa Dominicus -Blue Flag certified-.",
      "Proximity to Saona Island and the dive caves (Catedral, Atlantic Princess, El Penon) adds a tourism asset: villas and apartments can be sold or rented to divers spending weeks exploring Cotubanama, which justifies photos of the Bayahibe pier with catamarans and dive boats. The distance to La Romana (15 minutes) and Casa de Campo (20 minutes) is also leveraged: many buyers choose Bayahibe as an economic entry to the area, with easy access to La Romana private airport (LRM). Drone works without restriction outside the LRM approach corridor."
    ],
    sisterCities: ["la-romana", "casa-de-campo", "punta-cana"]
  },
  jarabacoa: {
    localContext: [
      "Jarabacoa es el unico mercado inmobiliario de Republica Dominicana que NO vende playa, sino montana, clima y rio. Ubicada a 525 metros sobre el nivel del mar en la Cordillera Central, con temperaturas de 18 a 26 grados todo el ano, atrae a familias dominicanas adineradas que buscan escape de fin de semana desde Santiago o Santo Domingo, retirados que prefieren clima fresco sobre el Caribe humedo, e inversionistas que rentan cabanas a turistas locales y expats. El producto inmobiliario predominante son cabanas de madera, villas estilo chalet, fincas con cultivos de cafe y terrenos en lomas con vista al valle.",
      "Jamaca de Dios es la comunidad cerrada premium -villas grandes con vista al rio Yaque del Norte y a la cordillera, restaurantes propios, seguridad-, donde la fotografia debe leer como editorial de propiedad alpina caribena: chimenea encendida, vista a montana, terraza con cafe humeante en la manana. Buena Vista, Pinar Quemado y la zona de Manabao concentran cabanas y casas medianas con vista, y la fotografia se beneficia de la niebla matutina que sube del rio -un activo visual unico en Republica Dominicana que se debe fotografiar entre 6:00 y 7:30 AM.",
      "Para fincas y terrenos, el drone es absolutamente esencial: explica pendiente del terreno, acceso desde carretera, cercania al rio Yaque del Norte o al Salto de Jimenoa, escala del cultivo de cafe y vista a la cordillera. La luz en Jarabacoa cambia drasticamente por las nubes que se acumulan sobre las montanas a partir de las 11 AM en epoca lluviosa (mayo a noviembre); por eso programamos sesiones exteriores tempranas. Los compradores suelen reservar via referencias personales y WhatsApp, asi que entregamos siempre un set ligero optimizado para movil con descripciones cortas que explican distancia a Jarabacoa centro, La Vega y aeropuerto del Cibao (STI)."
    ],
    enLocalContext: [
      "Jarabacoa is the only Dominican real estate market that does NOT sell beach, but mountain, climate and river. Located 525 meters above sea level in the Central Mountain Range, with temperatures of 18 to 26 degrees year-round, it attracts wealthy Dominican families looking for a weekend escape from Santiago or Santo Domingo, retirees who prefer cool climate over the humid Caribbean, and investors who rent cabins to local tourists and expats. The dominant real estate product is wooden cabins, chalet-style villas, coffee-cultivation farms and hillside land with valley views.",
      "Jamaca de Dios is the premium gated community -large villas with views of the Yaque del Norte river and the mountain range, on-site restaurants, security-, where photography must read like a Caribbean alpine property editorial: lit fireplace, mountain view, terrace with steaming coffee in the morning. Buena Vista, Pinar Quemado and the Manabao area concentrate cabins and mid-sized houses with views, and photography benefits from the morning fog rising from the river -a unique visual asset in the Dominican Republic that should be shot between 6:00 and 7:30 AM.",
      "For farms and land, drone is absolutely essential: it explains terrain slope, road access, proximity to the Yaque del Norte river or the Jimenoa Falls, the scale of the coffee crop and the mountain range view. Light in Jarabacoa changes drastically due to clouds that accumulate over the mountains starting at 11 AM in the rainy season (May to November); that is why we schedule early exterior sessions. Buyers usually book via personal referral and WhatsApp, so we always deliver a light mobile-optimized set with short descriptions explaining the distance to Jarabacoa downtown, La Vega and Cibao airport (STI)."
    ],
    sisterCities: ["santiago", "samana"]
  },
  "juan-dolio": {
    localContext: [
      "Juan Dolio es el escape mas cercano a Santo Domingo -45 minutos por la autopista de las Americas- y eso define su mercado inmobiliario casi por completo. El comprador tipico es un profesional capitaleno o una familia de Santo Domingo que busca segunda residencia frente al mar a precio razonable, o un inversionista que renta el apartamento entre semana corporativamente y los fines de semana a familias dominicanas. A diferencia de Punta Cana, aqui el mercado es 80 por ciento dominicano, no extranjero, lo que cambia las prioridades fotograficas: importa mas el balcon hacia el mar y la cocina equipada que la fachada brandeada al estilo internacional.",
      "Metro Country Club, Costa del Sol y Villas del Mar son los tres desarrollos clave. Metro tiene torres de gama alta con club deportivo, vista al mar y proximidad al Hard Rock Cafe Casino; la fotografia ahi debe abrir con la vista al Caribe desde el balcon. Costa del Sol mezcla apartamentos modernos con villas y exige composiciones que muestren tanto la unidad como las amenidades del complejo. Villas del Mar es mas familiar, con condominios de menor altura cerca de la playa, y se beneficia de fotos a pie de playa que sugieren la caminata corta del condo al mar.",
      "La luz en Juan Dolio tiene un sello: la costa se orienta al sur, asi que el sol cruza el cielo de oeste a este sobre el mar a lo largo del dia. Eso significa que los balcones de fachada sur reciben sol todo el dia, lo cual es excelente para fotografiar interior con cortinas abiertas pero requiere control de contrastes para evitar quemar la vista del mar. El golden hour aqui es muy corto comparado con Punta Cana (apenas 25 minutos) porque el sol se pone tras la silueta de Santo Domingo a lo lejos. Para Airbnb capitalenos entregamos siempre un kit ligero optimizado para WhatsApp con texto breve que indica distancia a Caribbean Cinemas, Hard Rock y Plaza Sambil para el huesped urbano que no quiere alejarse del confort que conoce."
    ],
    enLocalContext: [
      "Juan Dolio is the closest escape from Santo Domingo -45 minutes via the Las Americas highway- and that almost entirely defines its real estate market. The typical buyer is a Santo Domingo professional or family looking for a reasonably priced second residence by the sea, or an investor renting the apartment to corporations during the week and to Dominican families on weekends. Unlike Punta Cana, here the market is 80 percent Dominican, not foreign, which shifts photographic priorities: the balcony toward the sea and the equipped kitchen matter more than an internationally branded facade.",
      "Metro Country Club, Costa del Sol and Villas del Mar are the three key developments. Metro has high-end towers with sports club, sea view and proximity to Hard Rock Cafe Casino; photography there must open with the Caribbean view from the balcony. Costa del Sol mixes modern apartments with villas and demands compositions that show both the unit and the complex amenities. Villas del Mar is more family-oriented, with lower-height condominiums near the beach, and benefits from beachside photos suggesting the short walk from condo to sea.",
      "Light in Juan Dolio has a particular signature: the coast faces south, so the sun crosses the sky from west to east over the sea throughout the day. That means south-facing balconies receive sun all day, which is excellent for shooting interiors with open curtains but requires contrast control to avoid burning the sea view. Golden hour here is very short compared to Punta Cana (just 25 minutes) because the sun sets behind the silhouette of Santo Domingo in the distance. For Airbnb listings aimed at the capital crowd we always deliver a light WhatsApp-optimized kit with short text indicating distance to Caribbean Cinemas, Hard Rock and Plaza Sambil for the urban guest who does not want to leave the comfort they know."
    ],
    sisterCities: ["santo-domingo", "bayahibe", "la-romana"]
  },
  bavaro: {
    localContext: [
      "Bavaro es el corazon comercial del mercado de alquiler vacacional en Republica Dominicana. Mientras Cap Cana vende exclusividad y Punta Cana Village vende familia, Bavaro vende volumen y rotacion: miles de apartamentos y condos pequenos en Los Corales, El Cortecito, Bibijagua y Cocotal pelean cada dia por estar entre los primeros resultados de Airbnb, Booking y Vrbo para huespedes que pagan entre 70 y 250 dolares por noche. La fotografia inmobiliaria aqui es deportiva, agresiva, optimizada para clic.",
      "Cada zona tiene un perfil de huesped distinto. Los Corales y El Cortecito atraen al huesped joven que quiere caminar a la playa, a los bares de Coco Bongo y a los restaurantes; la portada Airbnb debe sugerir la cercania a la playa en una sola imagen. Cocotal es mas tranquilo, golf y familias mayores -ahi funciona la portada con el campo de golf visible desde la terraza-. Friusa es residencial pero cerca de todos los servicios -mercados Jumbo, hospitales, escuelas-. Bibijagua tiene la mezcla mas balanceada entre lo turistico y lo residencial.",
      "La logistica fotografica en Bavaro tiene desafios particulares. Las restricciones de drone del aeropuerto PUJ aplican aqui especialmente en la zona oeste, asi que muchas tomas aereas se reemplazan por composiciones desde balcones altos del propio condominio o desde la playa con telefoto largo. El alto trafico turistico significa que la playa esta llena entre 10 AM y 5 PM -para fotografiar playa libre el unico horario viable es entre 6:30 y 8:30 AM. Para anuncios Airbnb agresivos entregamos un kit completo: 30 fotos finales, video corto vertical para Instagram Reels, portada A/B testing y archivos optimizados para los algoritmos de Airbnb (ratio 4:3 horizontal, 1920px, JPG 85 por ciento de calidad)."
    ],
    enLocalContext: [
      "Bavaro is the commercial heart of the Dominican Republic's vacation rental market. While Cap Cana sells exclusivity and Punta Cana Village sells family, Bavaro sells volume and turnover: thousands of small apartments and condos in Los Corales, El Cortecito, Bibijagua and Cocotal compete daily to be among the first results on Airbnb, Booking and Vrbo for guests paying between 70 and 250 dollars per night. Real estate photography here is athletic, aggressive, optimized for clicks.",
      "Each zone has a different guest profile. Los Corales and El Cortecito attract young guests who want to walk to the beach, Coco Bongo bars and restaurants; the Airbnb cover must suggest beach proximity in a single image. Cocotal is quieter, golf and older families -there the cover with the golf course visible from the terrace works-. Friusa is residential but close to all services -Jumbo supermarkets, hospitals, schools-. Bibijagua has the most balanced mix between tourism and residential.",
      "Photographic logistics in Bavaro have particular challenges. PUJ airport drone restrictions apply here especially in the western zone, so many aerial shots are replaced with compositions from high balconies of the condominium itself or from the beach with long telephoto. The high tourist traffic means the beach is full between 10 AM and 5 PM -to shoot an empty beach the only viable window is between 6:30 and 8:30 AM. For aggressive Airbnb listings we deliver a full kit: 30 final photos, short vertical video for Instagram Reels, A/B testing cover and files optimized for Airbnb algorithms (4:3 horizontal ratio, 1920px, JPG 85 percent quality)."
    ],
    sisterCities: ["punta-cana", "cap-cana", "bayahibe"]
  },
  miches: {
    localContext: [
      "Miches es el mercado mas joven y especulativo de Republica Dominicana, transformado radicalmente desde 2019 con la apertura de Club Med Miches Playa Esmeralda y luego el resort Tropicalia, mas la inauguracion de la autopista del Coral que redujo el trayecto desde Santo Domingo de 4 a 2 horas. Hoy es un mercado dominado por inversionistas que compran terrenos costeros, proyectos en preventa y participaciones en hoteles boutique apostando a que Miches sera el proximo Punta Cana en 10-15 anos. La fotografia inmobiliaria aqui es 80 por ciento drone y aerea, porque casi nada esta construido todavia.",
      "Las zonas que importan son Playa Esmeralda -con la mejor infraestructura, los grandes resorts y los proyectos premium que apalancan su marca-, Costa Esmeralda con desarrollos residenciales de gama media, y Laguna Limon con potencial ecoturistico (la laguna y el bosque protegido atraen turistas que buscan naturaleza intacta). Para terrenos vacios usamos drone con varias alturas: 30 metros para mostrar acceso desde carretera, 100 metros para mostrar pendiente y vegetacion, 250 metros para mostrar contexto costero completo -el mar de un lado, las montanas de la cordillera oriental del otro.",
      "La narrativa de inversion es central. Cada galeria fotografica en Miches debe contar una historia visual que combine paisaje virgen + infraestructura nueva + proyectos vecinos prestigiosos. Por eso siempre incluimos fotos del acceso por la autopista del Coral, el desvio hacia Miches con sus letreros, la entrada al complejo o terreno, y panoramicas que muestren cuanta playa hay y cuanto verde queda. El drone funciona sin restricciones notables fuera del corredor del aeropuerto El Catey (AZS). Para inversionistas extranjeros entregamos siempre una versión inglesa con datos clave incrustados: distancia al aeropuerto, distancia a Bavaro, fecha de entrega del proyecto y precio por metro cuadrado comparado con Punta Cana 10 anos atras."
    ],
    enLocalContext: [
      "Miches is the youngest and most speculative market in the Dominican Republic, radically transformed since 2019 with the opening of Club Med Miches Playa Esmeralda and then the Tropicalia resort, plus the inauguration of the Coral highway that reduced the Santo Domingo trip from 4 to 2 hours. Today it is a market dominated by investors buying coastal land, presale projects and stakes in boutique hotels betting that Miches will be the next Punta Cana in 10-15 years. Real estate photography here is 80 percent drone and aerial, because almost nothing is built yet.",
      "The zones that matter are Playa Esmeralda -with the best infrastructure, the large resorts and the premium projects leveraging its brand-, Costa Esmeralda with mid-range residential developments, and Laguna Limon with ecotourism potential (the lagoon and protected forest attract tourists looking for untouched nature). For empty land we use drone at multiple altitudes: 30 meters to show road access, 100 meters to show slope and vegetation, 250 meters to show the full coastal context -the sea on one side, the eastern mountain range on the other.",
      "The investment narrative is central. Every photo gallery in Miches must tell a visual story combining virgin landscape + new infrastructure + prestigious neighboring projects. That is why we always include photos of the Coral highway access, the Miches turn-off with its signs, the entrance to the project or land, and panoramics showing how much beach is there and how much green remains. Drone works without notable restrictions outside the El Catey airport (AZS) corridor. For foreign investors we always deliver an English version with embedded key data: airport distance, Bavaro distance, project delivery date and price per square meter compared to Punta Cana 10 years ago."
    ],
    sisterCities: ["punta-cana", "bavaro", "samana"]
  }
};

function citySeoSections(city: RealEstateCity, isEnglish = false) {
  const areas = city.areas.join(", ");
  const propertyTypes = city.propertyTypes.join(", ");
  const notes = isEnglish ? city.enMarketNotes ?? [] : city.marketNotes ?? [];
  const audience = isEnglish ? city.enTargetAudience : city.targetAudience;
  const localAngle = isEnglish ? city.enLocalAngle : city.localAngle;

  if (isEnglish) {
    return [
      {
        heading: `Search intent in ${city.city}`,
        body: `${city.city} clients are not only searching for a photographer; they need media that helps a listing earn attention, explain location and create trust before a buyer, renter or investor asks for a showing. The page is built around ${propertyTypes.toLowerCase()} because those are the property types that most affect media decisions in ${city.province}. ${localAngle}`,
        items: [`Primary areas: ${areas}`, `Typical clients: ${audience}`, `Best first asset: a strong cover image plus a complete gallery`, "Recommended add-ons: drone, short video and vertical clips when location or lifestyle affects price"]
      },
      {
        heading: `Shot plan for ${city.city}`,
        body: `A strong real estate session in ${city.city} should be planned before arrival. We prioritize the rooms, amenities and exterior angles that explain value quickly, then export files for portals, WhatsApp and social media. The goal is to avoid a random gallery and create a sales sequence that moves from first impression to proof.`,
        items: ["Hero exterior or lifestyle image", "Interior sequence that explains layout", "Amenity and building/community context", "Detail images for finishes, views and rental confidence"]
      },
      {
        heading: `How the media is used`,
        body: `The final delivery should support more than one post. Agents and owners usually need a portal gallery, a WhatsApp set, vertical crops for stories, website images, thumbnails and sometimes brochure files. For ${city.city}, this matters because buyers compare fast and often decide whether to request more information from the first five images.`,
        items: ["Point2Homes, TerrenosRD and MLS-style listings", "Airbnb, Booking and direct rental pages when relevant", "Instagram reels, stories and paid ads", "Developer presentations and property websites"]
      },
      {
        heading: `Local ranking signals`,
        body: `Google needs clear local context, and clients need it too. This page names specific zones such as ${areas}, connects them with the right property types and keeps the content tied to real services instead of generic city text. That helps the page read like a local service guide, not a duplicated template.`,
        items: notes.length ? notes : [`${city.city} requires local property context`, "Photos should match the buyer's decision process", "Internal links connect this page to service and nearby city pages"]
      }
    ];
  }

  return [
    {
      heading: `Intencion de busqueda en ${city.city}`,
      body: `Quien busca fotografia inmobiliaria en ${city.city} normalmente no quiere solo un fotografo. Necesita contenido que ayude a que una propiedad consiga clics, explique ubicacion y genere confianza antes de una visita o llamada. Esta pagina se enfoca en ${propertyTypes.toLowerCase()} porque esos son los tipos de propiedad donde la estrategia visual cambia en ${city.province}. ${localAngle}`,
      items: [`Zonas principales: ${areas}`, `Clientes frecuentes: ${audience}`, "Primera pieza clave: portada fuerte y galeria completa", "Adicionales recomendados: drone, video corto y clips verticales cuando ubicacion o lifestyle afectan el precio"]
    },
    {
      heading: `Plan de tomas para ${city.city}`,
      body: `Una buena sesion inmobiliaria en ${city.city} se planifica antes de llegar. Priorizamos los espacios, amenidades y angulos exteriores que explican valor rapido, y luego exportamos archivos listos para portales, WhatsApp y redes. La meta es evitar una galeria aleatoria y construir una secuencia comercial: impacto, distribucion, prueba y accion.`,
      items: ["Foto hero exterior o de lifestyle", "Recorrido interior que explique distribucion", "Amenidades y contexto del edificio o comunidad", "Detalles de terminacion, vista y confianza para renta o venta"]
    },
    {
      heading: `Como se usa el contenido`,
      body: `La entrega final debe servir para mas de una publicacion. Agentes y propietarios suelen necesitar galeria para portales, set ligero para WhatsApp, recortes verticales, imagenes web, miniaturas y a veces archivos para brochure. En ${city.city}, esto importa porque el comprador compara rapido y decide si pregunta por la propiedad desde las primeras cinco imagenes.`,
      items: ["Point2Homes, TerrenosRD y listados estilo MLS", "Airbnb, Booking y paginas de renta directa cuando aplica", "Reels, historias de Instagram y anuncios", "Presentaciones de desarrolladores y websites de proyecto"]
    },
    {
      heading: `Senales locales para SEO`,
      body: `Google necesita contexto local claro, y el cliente tambien. Esta pagina menciona zonas especificas como ${areas}, las conecta con los tipos de propiedad correctos y mantiene el contenido atado a servicios reales, no a texto generico de ciudad. Eso ayuda a que la pagina funcione como guia local de servicio y no como plantilla duplicada.`,
      items: notes.length ? notes : [`${city.city} necesita contexto inmobiliario local`, "Las fotos deben seguir el proceso de decision del comprador", "Los enlaces internos conectan esta ciudad con servicios y zonas cercanas"]
    }
  ];
}

for (const city of realEstateCities) {
  const details = cityDetails[city.slug];
  if (!details) {
    throw new Error(`Missing unique city details for ${city.slug}`);
  }
  Object.assign(city, details);
  const distinctive = cityDistinctiveContent[city.slug];
  if (!distinctive) {
    throw new Error(`Missing distinctive content for ${city.slug}`);
  }
  city.localContext = distinctive.localContext;
  city.enLocalContext = distinctive.enLocalContext;
  city.sisterCities = distinctive.sisterCities;
  city.localSeoSections = citySeoSections(city);
  city.enLocalSeoSections = citySeoSections(city, true);
}

export function cityPath(city: RealEstateCity, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/real-estate-photography-${city.enSlug}` : `/fotografia-inmobiliaria-${city.slug}`;
}

export function findCityByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateCities.find((city) => slug === (locale === "en" ? `real-estate-photography-${city.enSlug}` : `fotografia-inmobiliaria-${city.slug}`));
}
