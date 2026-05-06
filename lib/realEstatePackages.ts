export type RealEstatePackage = {
  name: string;
  enName: string;
  bestFor: string;
  enBestFor: string;
  includes: string[];
  enIncludes: string[];
};

export const realEstatePackages: RealEstatePackage[] = [
  {
    name: "Foto Listing",
    enName: "Listing Photo",
    bestFor: "Apartamentos, casas y propiedades listas para publicar",
    enBestFor: "Apartments, homes and properties ready to publish",
    includes: ["Fotos editadas", "Formatos para portales", "Galeria online", "Entrega rapida"],
    enIncludes: ["Edited photos", "Listing formats", "Online gallery", "Fast delivery"]
  },
  {
    name: "Foto + Video",
    enName: "Photo + Video",
    bestFor: "Agentes que necesitan vender mejor en portales, WhatsApp y redes",
    enBestFor: "Agents who need stronger listings for portals, WhatsApp and social media",
    includes: ["Fotos editadas", "Video recorrido", "Clips verticales", "Miniatura"],
    enIncludes: ["Edited photos", "Walkthrough video", "Vertical clips", "Thumbnail"]
  },
  {
    name: "Premium Drone",
    enName: "Premium Drone",
    bestFor: "Villas, terrenos, proyectos, hoteles y propiedades con vistas",
    enBestFor: "Villas, land, developments, hotels and properties with views",
    includes: ["Fotos interiores", "Drone foto/video", "Reels", "Galeria lista para campana"],
    enIncludes: ["Interior photos", "Drone photo/video", "Reels", "Campaign-ready gallery"]
  },
  {
    name: "Plan Mensual",
    enName: "Monthly Plan",
    bestFor: "Inmobiliarias, agentes activos y desarrolladores con inventario recurrente",
    enBestFor: "Brokerages, active agents and developers with recurring inventory",
    includes: ["Sesiones por lote", "Contenido para redes", "Prioridad de agenda", "Estilo consistente"],
    enIncludes: ["Batch sessions", "Social content", "Priority scheduling", "Consistent style"]
  }
];
