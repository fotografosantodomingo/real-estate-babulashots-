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
  faq?: { question: string; answer: string }[];
  enFaq?: { question: string; answer: string }[];
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

for (const city of realEstateCities) {
  const details = cityDetails[city.slug];
  if (!details) {
    throw new Error(`Missing unique city details for ${city.slug}`);
  }
  Object.assign(city, details);
}

export function cityPath(city: RealEstateCity, locale: "es" | "en" = "es") {
  return locale === "en" ? `/en/real-estate-photography-${city.enSlug}` : `/fotografia-inmobiliaria-${city.slug}`;
}

export function findCityByRoute(slug: string, locale: "es" | "en" = "es") {
  return realEstateCities.find((city) => slug === (locale === "en" ? `real-estate-photography-${city.enSlug}` : `fotografia-inmobiliaria-${city.slug}`));
}
