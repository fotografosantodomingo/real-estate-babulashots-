import Image from "next/image";
import Link from "next/link";
import { ClientLogos } from "@/components/ClientLogos";
import { ConversionPanel } from "@/components/ConversionPanel";
import { Integrations } from "@/components/Integrations";
import { ProofStrip } from "@/components/ProofStrip";
import { PropertyGallery } from "@/components/PropertyGallery";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { realEstateIndustries, industryPath } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { routeMessage } from "@/lib/routeMap";
import { assetPath, breadcrumbSchema, canonicalUrl, organizationSchema, phoneE164, siteUrl } from "@/lib/seo";

export function RealEstateHome({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const homePath = isEnglish ? "/en/" : "/";
  const schema = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#real-estate-service`,
      name: "Babula Shots Inmobiliaria",
      url: canonicalUrl(homePath),
      telephone: phoneE164,
      image: `${siteUrl}/images/real-estate-media-dominican-republic.webp`,
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Media Services",
        itemListElement: realEstateServices.slice(0, 4).map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: isEnglish ? service.enH1 : service.h1 }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: isEnglish ? "Real estate photography in Dominican Republic" : "Fotografia inmobiliaria en Republica Dominicana",
      url: canonicalUrl(homePath),
      inLanguage: isEnglish ? "en" : "es-DO"
    },
    breadcrumbSchema([{ name: "Babula Shots Inmobiliaria", path: homePath }])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero">
        <Image src={assetPath("/images/real-estate-media-dominican-republic.webp")} alt={isEnglish ? "Real estate photography and video in Dominican Republic" : "Fotografia y video inmobiliario en Republica Dominicana"} width={1400} height={788} priority fetchPriority="high" className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots · Real Estate Media</p>
          <h1>{isEnglish ? "Real estate photography in Dominican Republic" : "Fotografia inmobiliaria en Republica Dominicana"}</h1>
          <p>{isEnglish ? "Photo, video, drone and listing content for agents, developers, Airbnb hosts, villas and commercial properties." : "Foto, video, drone y contenido para agentes, desarrolladores, Airbnb, villas y propiedades comerciales."}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contacto">{isEnglish ? "Request quote" : "Solicitar cotizacion"}</a>
            <a className="button button-ghost" href="tel:+18097209547">809 720 95 47</a>
          </div>
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
      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Quote photo, video or drone for your property" : "Cotiza foto, video o drone para tu propiedad"}
        text={isEnglish ? "Send the city, property type and service needed. We will guide you with the best package." : "Envia ciudad, tipo de propiedad y servicio deseado. Te orientamos con el paquete adecuado."}
        message={routeMessage("")}
      />
    </main>
  );
}
