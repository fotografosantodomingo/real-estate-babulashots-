export type RealEstatePackage = {
  name: string;
  enName: string;
  bestFor: string;
  enBestFor: string;
  price: string;
  enPrice: string;
  priceValueDop?: number;
  includes: string[];
  enIncludes: string[];
};

export const realEstatePackages: RealEstatePackage[] = [
  {
    name: "Foto Listing",
    enName: "Listing Photo",
    bestFor: "Apartamentos, casas y propiedades listas para publicar",
    enBestFor: "Apartments, homes and properties ready to publish",
    price: "Desde RD$8,920 / aprox. US$150",
    enPrice: "From RD$8,920 / approx. US$150",
    priceValueDop: 8920,
    includes: ["Interior y exterior", "Hasta 3 propiedades segun alcance", "Formatos para portales", "Galeria online", "Entrega rapida"],
    enIncludes: ["Interior and exterior", "Up to 3 properties depending on scope", "Listing formats", "Online gallery", "Fast delivery"]
  },
  {
    name: "Drone Aereo",
    enName: "Aerial Drone",
    bestFor: "Villas, solares, proyectos, resorts y propiedades con vista",
    enBestFor: "Villas, land, developments, resorts and properties with views",
    price: "Desde RD$9,520 / aprox. US$160",
    enPrice: "From RD$9,520 / approx. US$160",
    priceValueDop: 9520,
    includes: ["Piloto DJI Mavic 3 Pro", "Foto o video aereo", "Tomas de ubicacion", "Entrega en 48h o material crudo el mismo dia"],
    enIncludes: ["DJI Mavic 3 Pro pilot", "Aerial photo or video", "Location views", "48h delivery or same-day raw files"]
  },
  {
    name: "Foto + Video",
    enName: "Photo + Video",
    bestFor: "Agentes que necesitan vender mejor en portales, WhatsApp y redes",
    enBestFor: "Agents who need stronger listings for portals, WhatsApp and social media",
    price: "Desde RD$47,600 / aprox. US$800 para produccion de video",
    enPrice: "From RD$47,600 / approx. US$800 for video production",
    priceValueDop: 47600,
    includes: ["Fotos editadas", "Video recorrido", "Clips verticales", "Miniatura", "Formatos web/social"],
    enIncludes: ["Edited photos", "Walkthrough video", "Vertical clips", "Thumbnail", "Web/social formats"]
  },
  {
    name: "Comercial Premium",
    enName: "Premium Commercial",
    bestFor: "Hoteles, restaurantes, locales, proyectos y marcas inmobiliarias",
    enBestFor: "Hotels, restaurants, commercial spaces, developments and property brands",
    price: "Desde RD$14,900 / aprox. US$250 por hora",
    enPrice: "From RD$14,900 / approx. US$250 per hour",
    priceValueDop: 14900,
    includes: ["Uso comercial", "Edicion profesional", "Interiores y detalles", "Exportacion para web, brochure y redes"],
    enIncludes: ["Commercial usage", "Professional editing", "Interiors and details", "Exports for web, brochure and social media"]
  },
  {
    name: "Plan Mensual",
    enName: "Monthly Plan",
    bestFor: "Inmobiliarias, agentes activos y desarrolladores con inventario recurrente",
    enBestFor: "Brokerages, active agents and developers with recurring inventory",
    price: "Cotizacion mensual segun volumen",
    enPrice: "Monthly quote based on volume",
    includes: ["Sesiones por lote", "Contenido para redes", "Prioridad de agenda", "Estilo consistente"],
    enIncludes: ["Batch sessions", "Social content", "Priority scheduling", "Consistent style"]
  }
];
