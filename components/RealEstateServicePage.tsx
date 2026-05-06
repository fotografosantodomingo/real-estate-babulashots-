import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ConversionPanel } from "@/components/ConversionPanel";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { servicePath, type RealEstateService } from "@/lib/realEstateServices";
import { assetPath, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";

export function RealEstateServicePage({ service, locale = "es" }: { service: RealEstateService; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = servicePath(service, locale);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEnglish ? service.enH1 : service.h1,
      serviceType: "Real estate media",
      url: canonicalUrl(path),
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164, url: siteUrl },
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" }
    }
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero service-hero">
        <Image src={assetPath("/images/real-estate-media-dominican-republic.webp")} alt={isEnglish ? service.enH1 : service.h1} width={1672} height={941} priority fetchPriority="high" className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots · Service</p>
          <h1>{isEnglish ? service.enH1 : service.h1}</h1>
          <p>{isEnglish ? service.enIntro : service.intro}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contacto">{isEnglish ? "Request quote" : "Cotizar"}</a>
            <a className="button button-ghost" href={withBasePath(isEnglish ? "/en/real-estate-photography-prices-dominican-republic" : "/precios-fotografia-inmobiliaria-republica-dominicana")}>{isEnglish ? "See pricing" : "Ver precios"}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Deliverables" : "Entregables"}</p>
          <div>
            <h2>{isEnglish ? "What is included" : "Que incluye"}</h2>
            <p>{isEnglish ? service.enProof : service.proof}</p>
            <ul className="service-list">
              {(isEnglish ? service.enDeliverables : service.deliverables).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      <BeforeAfterSlider locale={locale} />
      <Integrations locale={locale} />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Cities" : "Ciudades"}</p>
            <h2>{isEnglish ? "Available across the Dominican Republic" : "Disponible en Republica Dominicana"}</h2>
          </div>
          <div className="related-links">
            {realEstateCities.map((city) => <Link href={cityPath(city, locale)} key={city.slug}>{isEnglish ? city.enH1 : city.h1}</Link>)}
          </div>
        </div>
      </section>

      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Request a custom quote" : "Solicita una cotizacion"}
        text={isEnglish ? "Send city, property type, rooms and whether you need photo, video, drone or reels." : "Envia ciudad, tipo de propiedad, habitaciones y si necesitas foto, video, drone o reels."}
        message={service.whatsappMessage}
      />
    </main>
  );
}
