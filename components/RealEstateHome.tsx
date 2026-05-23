import Link from "next/link";
import { ClientLogos } from "@/components/ClientLogos";
import { ConversionPanel } from "@/components/ConversionPanel";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { HeroImage, mobileVariantOf } from "@/components/HeroImage";
import { Integrations } from "@/components/Integrations";
import { ProofStrip } from "@/components/ProofStrip";
import { PropertyGallery } from "@/components/PropertyGallery";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { realEstateIndustries, industryPath } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { routeMessage } from "@/lib/routeMap";
import {
  aggregateRating,
  breadcrumbSchema,
  canonicalUrl,
  email,
  geoCoordinates,
  localBusinessAreaServed,
  localBusinessPriceRange,
  mainBrandUrl,
  organizationSchema,
  phoneE164,
  postalAddress,
  siteUrl
} from "@/lib/seo";

export function RealEstateHome({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const homePath = isEnglish ? "/en/" : "/";
  // Brand entity — LocalBusiness (NOT Photographer) so Review Snippet validator
  // accepts the aggregateRating. See memory/schema_standards.md rule 2c.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: "Babula Shots Inmobiliaria",
    url: siteUrl,
    image: `${siteUrl}/images/real-estate-media-dominican-republic.webp`,
    telephone: phoneE164,
    email,
    priceRange: localBusinessPriceRange,
    address: postalAddress,
    geo: geoCoordinates,
    areaServed: localBusinessAreaServed,
    aggregateRating,
    sameAs: ["https://www.instagram.com/babulashotsrd/"]
  };
  const schema = [
    organizationSchema,
    localBusinessSchema,
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#real-estate-service`,
      name: "Babula Shots Inmobiliaria",
      url: canonicalUrl(homePath),
      telephone: phoneE164,
      image: `${siteUrl}/images/real-estate-media-dominican-republic.webp`,
      areaServed: localBusinessAreaServed,
      priceRange: localBusinessPriceRange,
      // Concrete priced Offers from the shared raw-pricing.json catalogue
      // (~/Documents/.shared-content/raw-pricing.json real_estate_drone_packages
      // + the general Bienes Raíces tier). Per schema_standards.md rule 5,
      // concrete numeric DOP prices unlock numeric priceRange + Service Listings.
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? "Real estate media packages" : "Paquetes de fotografía inmobiliaria",
        itemListElement: [
          {
            "@type": "Offer",
            "@id": `${siteUrl}/#offer-bienes-raices`,
            name: isEnglish ? "Real Estate — Standard listing" : "Bienes Raíces — listado estándar",
            description: isEnglish
              ? "Interior and exterior. Up to 3 properties. Optional drone."
              : "Interior y exterior. Hasta 3 propiedades. Opción con drone disponible.",
            price: "8940",
            priceCurrency: "DOP",
            availability: "https://schema.org/InStock",
            url: canonicalUrl(homePath),
            category: "Real estate photography"
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/#offer-listado-esencial`,
            name: isEnglish ? "Listado Esencial — best value" : "Listado Esencial — mejor valor",
            description: isEnglish
              ? "Up to 90 min on site. Up to 200m². 20 high-resolution edited photos. Interior + exterior coverage."
              : "Hasta 90 min en sitio. Hasta 200m². 20 fotos editadas en alta resolución. Cobertura interior + exterior.",
            price: "11900",
            priceCurrency: "DOP",
            availability: "https://schema.org/InStock",
            url: canonicalUrl(homePath),
            category: "Real estate photography"
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/#offer-propiedad-premium`,
            name: isEnglish ? "Propiedad Premium — most booked" : "Propiedad Premium — más reservado",
            description: isEnglish
              ? "Up to 3h on site. Up to 500m². 35 high-resolution edited photos. Aerial drone photos."
              : "Hasta 3h en sitio. Hasta 500m². 35 fotos editadas en alta resolución. Fotos aéreas con drone.",
            price: "23800",
            priceCurrency: "DOP",
            availability: "https://schema.org/InStock",
            url: canonicalUrl(homePath),
            category: "Real estate photography + drone"
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/#offer-finca-de-lujo`,
            name: isEnglish ? "Finca de Lujo — luxury estate" : "Finca de Lujo",
            description: isEnglish
              ? "Up to 4h on site. Unlimited property size. 50+ high-resolution edited photos. 4K aerial drone video. Matterport tour."
              : "Hasta 4h en sitio. Tamaño de propiedad ilimitado. 50+ fotos editadas en alta resolución. Video aéreo 4K con drone. Tour Matterport.",
            price: "35800",
            priceCurrency: "DOP",
            availability: "https://schema.org/InStock",
            url: canonicalUrl(homePath),
            category: "Real estate photography + drone + Matterport"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: isEnglish ? "Real estate photography in Dominican Republic" : "Fotografia inmobiliaria en Republica Dominicana",
      url: canonicalUrl(homePath),
      inLanguage: isEnglish ? "en" : "es-DO"
    },
    breadcrumbSchema([
      { name: "Babula Shots", item: mainBrandUrl },
      { name: isEnglish ? "Real Estate" : "Inmobiliaria", path: homePath }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero">
        <HeroImage
          src="/images/real-estate-media-dominican-republic.webp"
          mobileSrc={mobileVariantOf("/images/real-estate-media-dominican-republic.webp")}
          alt={isEnglish ? "Real estate photography and video in Dominican Republic" : "Fotografia y video inmobiliario en Republica Dominicana"}
          width={1400}
          height={788}
          mobileWidth={640}
          mobileHeight={361}
        />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots · Real Estate Media</p>
          <h1>{isEnglish ? "Real estate photography in Dominican Republic" : "Fotografia inmobiliaria en Republica Dominicana"}</h1>
          <p>{isEnglish ? "Photo, video, drone and listing content for agents, developers, Airbnb hosts, villas and commercial properties." : "Foto, video, drone y contenido para agentes, desarrolladores, Airbnb, villas y propiedades comerciales."}</p>
        </div>
      </section>

      <ProofStrip locale={locale} />
      <ClientLogos locale={locale} />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Services" : "Servicios"}</p>
            <h2>{isEnglish ? "Media built to publish listings faster" : "Contenido para publicar propiedades mejor y mas rapido"}</h2>
          </div>
          <div className="card-grid">
            {realEstateServices.map((service) => (
              <Link className="card" href={servicePath(service, locale)} key={service.slug}>
                <span>{isEnglish ? "Service" : "Servicio"}</span>
                <h3>{isEnglish ? service.enH1 : service.h1}</h3>
                <p>{isEnglish ? service.enIntro : service.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      <ServicePackages locale={locale} />

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Cities" : "Ciudades"}</p>
            <h2>{isEnglish ? "Coverage in the most active property markets" : "Cobertura en los mercados inmobiliarios clave"}</h2>
          </div>
          <div className="card-grid">
            {realEstateCities.map((city) => (
              <Link className="card" href={cityPath(city, locale)} key={city.slug}>
                <span>{city.province}</span>
                <h3>{isEnglish ? city.enH1 : city.h1}</h3>
                <p>{isEnglish ? city.enLocalAngle : city.localAngle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Client types" : "Clientes"}</p>
            <h2>{isEnglish ? "Built for real estate workflows" : "Pensado para flujos inmobiliarios reales"}</h2>
          </div>
          <div className="card-grid small-grid">
            {realEstateIndustries.map((industry) => (
              <Link className="card" href={industryPath(industry, locale)} key={industry.slug}>
                <h3>{isEnglish ? industry.enH1 : industry.h1}</h3>
                <p>{isEnglish ? industry.enIntro : industry.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Integrations locale={locale} />
      <CrossSiteCta locale={locale} />
      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Quote photo, video or drone for your property" : "Cotiza foto, video o drone para tu propiedad"}
        text={isEnglish ? "Send the city, property type and service needed. We will guide you with the best package." : "Envia ciudad, tipo de propiedad y servicio deseado. Te orientamos con el paquete adecuado."}
        message={routeMessage("")}
      />
    </main>
  );
}
