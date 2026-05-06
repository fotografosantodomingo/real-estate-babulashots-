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

export const blogPosts: BlogPost[] = [
  {
    slug: "mejores-fotos-para-vender-propiedad-republica-dominicana",
    enSlug: "best-photos-to-sell-property-dominican-republic",
    title: "Mejores fotos para vender una propiedad en RD",
    enTitle: "Best photos to sell a property in Dominican Republic",
    description: "Guia para agentes y propietarios sobre las fotos que ayudan a vender o alquilar propiedades mas rapido.",
    enDescription: "Guide for agents and owners on the photos that help sell or rent properties faster.",
    h1: "Mejores fotos para vender una propiedad",
    enH1: "Best photos to sell a property",
    intro: "Una buena galeria inmobiliaria reduce dudas, mejora la percepcion de valor y ayuda a que un comprador o inquilino pida mas informacion.",
    enIntro: "A strong real estate gallery reduces doubts, improves perceived value and helps a buyer or renter ask for more information.",
    sections: [
      {
        heading: "La portada decide el clic",
        body: "La primera imagen debe mostrar el mejor atributo de la propiedad: sala amplia, vista, piscina, fachada, terraza o habitacion principal.",
        enHeading: "The cover image earns the click",
        enBody: "The first image should show the strongest feature: living room, view, pool, facade, terrace or primary bedroom."
      },
      {
        heading: "Orden visual",
        body: "Una galeria debe sentirse como recorrido: exterior, entrada, sala, cocina, habitaciones, banos, amenidades y contexto.",
        enHeading: "Visual order",
        enBody: "A gallery should feel like a walkthrough: exterior, entrance, living room, kitchen, bedrooms, bathrooms, amenities and context."
      }
    ]
  },
  {
    slug: "cuanto-cuesta-fotografia-inmobiliaria-republica-dominicana",
    enSlug: "real-estate-photography-cost-dominican-republic",
    title: "Cuanto cuesta fotografia inmobiliaria en Republica Dominicana",
    enTitle: "Real estate photography cost in Dominican Republic",
    description: "Factores que influyen en el precio de fotografia inmobiliaria, video, drone y reels en RD.",
    enDescription: "Factors that affect real estate photography, video, drone and reels pricing in DR.",
    h1: "Cuanto cuesta fotografia inmobiliaria en RD",
    enH1: "Real estate photography cost in DR",
    intro: "El costo depende de ciudad, tamano de propiedad, cantidad de imagenes, video, drone, entrega urgente y uso comercial.",
    enIntro: "Cost depends on city, property size, number of images, video, drone, rush delivery and commercial usage.",
    sections: [
      {
        heading: "Que cambia el precio",
        body: "No cuesta lo mismo una sesion rapida para un apartamento que una villa con drone, video, reels y fotos de amenidades.",
        enHeading: "What changes the price",
        enBody: "A quick apartment session is different from a villa with drone, video, reels and amenity photos."
      },
      {
        heading: "Como pedir una cotizacion",
        body: "Envia ciudad, direccion o zona, tipo de propiedad, cantidad de habitaciones, si necesitas video/drone y fecha ideal.",
        enHeading: "How to request a quote",
        enBody: "Send city, area, property type, room count, whether you need video/drone and your ideal date."
      }
    ]
  }
];

export function findBlogByRoute(slug: string, locale: "es" | "en" = "es") {
  return blogPosts.find((post) => slug === (locale === "en" ? post.enSlug : post.slug));
}
