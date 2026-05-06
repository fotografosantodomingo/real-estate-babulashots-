export type BlogPost = {
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
  sections: Array<{ heading: string; body: string; enHeading: string; enBody: string }>;
};

function post(
  slug: string,
  enSlug: string,
  title: string,
  enTitle: string,
  description: string,
  enDescription: string,
  h1: string,
  enH1: string,
  intro: string,
  enIntro: string,
  sections: BlogPost["sections"]
): BlogPost {
  return { slug, enSlug, title, enTitle, description, enDescription, h1, enH1, intro, enIntro, sections };
}

export const blogPosts: BlogPost[] = [
  post(
    "mejores-fotos-para-vender-propiedad-republica-dominicana",
    "best-photos-to-sell-property-dominican-republic",
    "Mejores fotos para vender una propiedad en RD",
    "Best photos to sell a property in Dominican Republic",
    "Guia para agentes y propietarios sobre las fotos que ayudan a vender o alquilar propiedades mas rapido.",
    "Guide for agents and owners on the photos that help sell or rent properties faster.",
    "Mejores fotos para vender una propiedad",
    "Best photos to sell a property",
    "Una buena galeria inmobiliaria reduce dudas, mejora la percepcion de valor y ayuda a que un comprador o inquilino pida mas informacion.",
    "A strong real estate gallery reduces doubts, improves perceived value and helps a buyer or renter ask for more information.",
    [
      { heading: "La portada decide el clic", body: "La primera imagen debe mostrar el mejor atributo de la propiedad: sala amplia, vista, piscina, fachada, terraza o habitacion principal.", enHeading: "The cover image earns the click", enBody: "The first image should show the strongest feature: living room, view, pool, facade, terrace or primary bedroom." },
      { heading: "Orden visual", body: "Una galeria debe sentirse como recorrido: exterior, entrada, sala, cocina, habitaciones, banos, amenidades y contexto.", enHeading: "Visual order", enBody: "A gallery should feel like a walkthrough: exterior, entrance, living room, kitchen, bedrooms, bathrooms, amenities and context." }
    ]
  ),
  post(
    "cuanto-cuesta-fotografia-inmobiliaria-republica-dominicana",
    "real-estate-photography-cost-dominican-republic",
    "Cuanto cuesta fotografia inmobiliaria en Republica Dominicana",
    "Real estate photography cost in Dominican Republic",
    "Factores que influyen en el precio de fotografia inmobiliaria, video, drone y reels en RD.",
    "Factors that affect real estate photography, video, drone and reels pricing in DR.",
    "Cuanto cuesta fotografia inmobiliaria en RD",
    "Real estate photography cost in DR",
    "El costo depende de ciudad, tamano de propiedad, cantidad de imagenes, video, drone, entrega urgente y uso comercial.",
    "Cost depends on city, property size, number of images, video, drone, rush delivery and commercial usage.",
    [
      { heading: "Que cambia el precio", body: "No cuesta lo mismo una sesion rapida para un apartamento que una villa con drone, video, reels y fotos de amenidades.", enHeading: "What changes the price", enBody: "A quick apartment session is different from a villa with drone, video, reels and amenity photos." },
      { heading: "Como pedir una cotizacion", body: "Envia ciudad, direccion o zona, tipo de propiedad, cantidad de habitaciones, si necesitas video/drone y fecha ideal.", enHeading: "How to request a quote", enBody: "Send city, area, property type, room count, whether you need video/drone and your ideal date." }
    ]
  ),
  post(
    "como-preparar-propiedad-antes-sesion-fotos",
    "how-to-prepare-property-before-photo-session",
    "Como preparar una propiedad antes de una sesion de fotos",
    "How to prepare a property before a photo session",
    "Checklist practico para limpiar, ordenar e iluminar una propiedad antes de fotos inmobiliarias.",
    "Practical checklist to clean, stage and light a property before real estate photos.",
    "Como preparar una propiedad antes de una sesion de fotos",
    "How to prepare a property before a photo session",
    "La preparacion previa puede cambiar totalmente el resultado de una galeria inmobiliaria.",
    "Preparation can completely change the result of a real estate gallery.",
    [
      { heading: "Orden y superficies", body: "Retira objetos personales, cables, fundas, cajas y exceso de decoracion. Las superficies limpias hacen que el espacio se vea mas amplio.", enHeading: "Order and surfaces", enBody: "Remove personal items, cables, bags, boxes and excess decor. Clean surfaces make rooms feel larger." },
      { heading: "Luz y acceso", body: "Abre cortinas, limpia ventanas y confirma que todas las areas esten accesibles antes de llegar.", enHeading: "Light and access", enBody: "Open curtains, clean windows and confirm all areas are accessible before arrival." }
    ]
  ),
  post(
    "video-inmobiliario-que-debe-incluir",
    "what-real-estate-video-should-include",
    "Video inmobiliario: que debe incluir para vender mas rapido",
    "What a real estate video should include",
    "Elementos clave de un video inmobiliario: recorrido, detalles, amenidades, drone y CTA.",
    "Key elements of a real estate video: walkthrough, details, amenities, drone and CTA.",
    "Video inmobiliario: que debe incluir",
    "What a real estate video should include",
    "Un buen video inmobiliario no solo se ve bonito: explica la propiedad y reduce dudas antes de una visita.",
    "A strong real estate video does more than look good: it explains the property and reduces doubts before a visit.",
    [
      { heading: "Recorrido claro", body: "El video debe mostrar entrada, areas sociales, cocina, habitaciones, banos y amenidades con una secuencia facil de seguir.", enHeading: "Clear walkthrough", enBody: "The video should show entrance, social areas, kitchen, bedrooms, bathrooms and amenities in an easy sequence." },
      { heading: "Contexto", body: "Drone, fachada y entorno ayudan a vender ubicacion, escala y valor de inversion.", enHeading: "Context", enBody: "Drone, facade and surroundings help sell location, scale and investment value." }
    ]
  ),
  post(
    "fotografia-drone-propiedades-punta-cana",
    "drone-photography-for-properties-punta-cana",
    "Fotografia con drone para propiedades en Punta Cana",
    "Drone photography for properties in Punta Cana",
    "Como el drone ayuda a vender villas, terrenos, resorts y propiedades turisticas en Punta Cana.",
    "How drone helps sell villas, land, resorts and tourism properties in Punta Cana.",
    "Fotografia con drone para propiedades en Punta Cana",
    "Drone photography for properties in Punta Cana",
    "En Punta Cana, el drone puede explicar playa, resort, acceso, amenidades y escala mejor que una foto interior.",
    "In Punta Cana, drone can explain beach, resort, access, amenities and scale better than an interior photo.",
    [
      { heading: "Cuando usar drone", body: "Usa drone si la propiedad tiene vista, terreno, piscina, proximidad a playa, comunidad cerrada o amenidades.", enHeading: "When to use drone", enBody: "Use drone if the property has views, land, pool, beach proximity, gated community or amenities." },
      { heading: "Que evitar", body: "No conviene usar drone solo por moda. Debe aportar informacion real de ubicacion o valor.", enHeading: "What to avoid", enBody: "Drone should not be used only because it looks trendy. It should add real location or value information." }
    ]
  ),
  post(
    "fotografia-inmobiliaria-airbnb-villas-turisticas",
    "airbnb-villa-real-estate-photography",
    "Fotografia inmobiliaria para Airbnb y villas turisticas",
    "Real estate photography for Airbnb and villas",
    "Guia para mejorar fotos de Airbnb, villas y alquileres vacacionales en Republica Dominicana.",
    "Guide to improve photos for Airbnb, villas and vacation rentals in Dominican Republic.",
    "Fotografia para Airbnb y villas turisticas",
    "Photography for Airbnb and tourist villas",
    "Las fotos de Airbnb deben vender experiencia, confianza y claridad antes de vender metros cuadrados.",
    "Airbnb photos must sell experience, trust and clarity before square footage.",
    [
      { heading: "Portada y experiencia", body: "La portada debe mostrar el motivo principal para reservar: piscina, vista, habitacion premium, terraza o cercania a playa.", enHeading: "Cover and experience", enBody: "The cover should show the main reason to book: pool, view, premium bedroom, terrace or beach proximity." },
      { heading: "Detalles que convierten", body: "Amenidades, cocina, banos limpios, camas preparadas y zonas comunes ayudan a reducir preguntas repetidas.", enHeading: "Details that convert", enBody: "Amenities, kitchen, clean bathrooms, prepared beds and common areas reduce repeated questions." }
    ]
  ),
  post(
    "contenido-proyectos-inmobiliarios-santo-domingo",
    "content-for-real-estate-developments-santo-domingo",
    "Contenido para proyectos inmobiliarios en Santo Domingo",
    "Content for real estate developments in Santo Domingo",
    "Foto, video, drone y contenido mensual para torres, preventas y desarrolladores en Santo Domingo.",
    "Photo, video, drone and monthly content for towers, presales and developers in Santo Domingo.",
    "Contenido para proyectos inmobiliarios en Santo Domingo",
    "Content for real estate developments in Santo Domingo",
    "Los proyectos en Santo Domingo necesitan contenido antes, durante y despues del lanzamiento.",
    "Developments in Santo Domingo need content before, during and after launch.",
    [
      { heading: "Preventa", body: "La preventa necesita imagenes de ubicacion, renders complementados con obra real, equipo, entorno y avances.", enHeading: "Presale", enBody: "Presale needs location images, renders supported by real progress, team, surroundings and updates." },
      { heading: "Avance de obra", body: "Un registro mensual con drone, fotos y video corto ayuda a mantener confianza con compradores e inversionistas.", enHeading: "Construction progress", enBody: "Monthly drone, photos and short video help maintain trust with buyers and investors." }
    ]
  ),
  post(
    "fotos-profesionales-vs-celular-vender-propiedades",
    "professional-photos-vs-phone-property-listings",
    "Fotos profesionales vs fotos de celular para vender propiedades",
    "Professional photos vs phone photos for property listings",
    "Comparacion practica para agentes: cuando basta el celular y cuando conviene fotografia profesional.",
    "Practical comparison for agents: when phone photos are enough and when professional photography matters.",
    "Fotos profesionales vs fotos de celular",
    "Professional photos vs phone photos",
    "El celular puede documentar, pero la fotografia profesional vende orden, luz, amplitud y confianza.",
    "A phone can document, but professional photography sells order, light, space and trust.",
    [
      { heading: "Percepcion de valor", body: "Una propiedad premium con fotos oscuras o torcidas puede parecer mas barata, descuidada o dificil de visitar.", enHeading: "Perceived value", enBody: "A premium property with dark or crooked photos can look cheaper, neglected or difficult to visit." },
      { heading: "Consistencia", body: "Un agente con varias propiedades necesita un estilo consistente para construir marca y confianza.", enHeading: "Consistency", enBody: "An agent with multiple properties needs a consistent style to build brand and trust." }
    ]
  ),
  post(
    "checklist-visual-publicar-propiedad",
    "visual-checklist-to-publish-property",
    "Checklist visual para publicar una propiedad",
    "Visual checklist to publish a property",
    "Lista de imagenes y datos que debe tener un anuncio inmobiliario antes de publicarse.",
    "List of images and details a real estate listing should have before publishing.",
    "Checklist visual para publicar una propiedad",
    "Visual checklist to publish a property",
    "Antes de publicar, asegúrate de que el anuncio responda las preguntas visuales basicas del comprador.",
    "Before publishing, make sure the listing answers the buyer's basic visual questions.",
    [
      { heading: "Fotos minimas", body: "Fachada, sala, cocina, habitaciones, banos, balcon, amenidades y contexto exterior.", enHeading: "Minimum photos", enBody: "Facade, living room, kitchen, bedrooms, bathrooms, balcony, amenities and exterior context." },
      { heading: "Datos visuales", body: "Incluye vista, orientacion, luz, estacionamiento, lobby, acceso y diferencias frente a propiedades similares.", enHeading: "Visual details", enBody: "Include view, orientation, light, parking, lobby, access and differences from similar properties." }
    ]
  ),
  post(
    "paquetes-foto-video-agentes-inmobiliarios",
    "photo-video-packages-for-real-estate-agents",
    "Paquetes de foto y video para agentes inmobiliarios",
    "Photo and video packages for real estate agents",
    "Como elegir paquete de fotos, video, drone o reels segun tipo de propiedad y urgencia.",
    "How to choose photo, video, drone or reels packages based on property type and urgency.",
    "Paquetes de foto y video para agentes inmobiliarios",
    "Photo and video packages for real estate agents",
    "El paquete correcto depende del tipo de propiedad, precio, ciudad, plataforma y velocidad de publicacion.",
    "The right package depends on property type, price, city, platform and publishing speed.",
    [
      { heading: "Propiedad estandar", body: "Un apartamento o casa de precio medio suele funcionar bien con fotos editadas y entrega rapida.", enHeading: "Standard property", enBody: "A mid-range apartment or home often works well with edited photos and fast delivery." },
      { heading: "Propiedad premium", body: "Villas, proyectos, Airbnb y propiedades con vista suelen necesitar video, drone o reels.", enHeading: "Premium property", enBody: "Villas, developments, Airbnb and properties with views often need video, drone or reels." }
    ]
  )
];

export function findBlogByRoute(slug: string, locale: "es" | "en" = "es") {
  return blogPosts.find((post) => slug === (locale === "en" ? post.enSlug : post.slug));
}
