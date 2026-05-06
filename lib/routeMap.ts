export type RouteKind = "home" | "city" | "service" | "industry" | "blog";

export type RouteMapItem = {
  slug: string;
  enSlug: string;
  type: RouteKind;
  whatsappMessage: string;
};

const defaultMessage = "Hola, vengo de su web. Quiero cotizar fotografia, video o drone para una propiedad en Republica Dominicana.";

export const routeMap: RouteMapItem[] = [
  {
    slug: "",
    enSlug: "",
    type: "home",
    whatsappMessage: "Hola, vengo de la web de Babula Shots Inmobiliaria. Necesito foto, video o drone para una propiedad. Me pueden orientar?"
  },
  {
    slug: "fotografia-inmobiliaria-punta-cana",
    enSlug: "real-estate-photography-punta-cana",
    type: "city",
    whatsappMessage: "Hola, vengo de su web. Necesito cotizacion para fotografiar una villa, apartamento o resort en Punta Cana. Tienen disponibilidad esta semana?"
  },
  {
    slug: "contenido-para-desarrolladores-inmobiliarios",
    enSlug: "content-for-real-estate-developers",
    type: "industry",
    whatsappMessage: "Hola, busco agencia de contenido para lanzamiento de proyecto inmobiliario en Santo Domingo. Podemos agendar una llamada?"
  },
  {
    slug: "fotografia-para-airbnb-villas",
    enSlug: "airbnb-villa-photography",
    type: "service",
    whatsappMessage: "Hola, necesito fotos profesionales para mi Airbnb o villa en Republica Dominicana. Cual es el precio por propiedad?"
  },
  {
    slug: "fotografia-para-apartamentos-en-venta",
    enSlug: "apartment-listing-photography",
    type: "service",
    whatsappMessage: "Hola, vengo de la pagina de apartamentos. Necesito cotizar fotos profesionales para un apartamento en venta o alquiler. Esta en Santo Domingo y quisiera saber precio, disponibilidad y si recomiendan agregar drone o video."
  },
  {
    slug: "fotografia-drone-inmobiliaria",
    enSlug: "drone-real-estate-photography",
    type: "service",
    whatsappMessage: "Hola, necesito foto o video con drone para una propiedad en Republica Dominicana. Me pueden enviar opciones y disponibilidad?"
  },
  {
    slug: "precios-fotografia-inmobiliaria-republica-dominicana",
    enSlug: "real-estate-photography-prices-dominican-republic",
    type: "service",
    whatsappMessage: "Hola, vengo de la pagina de precios. Quiero cotizar foto, video o drone para una propiedad. Me pueden orientar?"
  }
];

export function routeMessage(slug: string) {
  return routeMap.find((route) => route.slug === slug || route.enSlug === slug)?.whatsappMessage ?? defaultMessage;
}

export function englishSlugFor(slug: string) {
  return routeMap.find((route) => route.slug === slug)?.enSlug;
}

export function spanishSlugFor(enSlug: string) {
  return routeMap.find((route) => route.enSlug === enSlug)?.slug;
}
