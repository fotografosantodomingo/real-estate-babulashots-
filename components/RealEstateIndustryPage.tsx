import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { canonicalUrl, phoneE164 } from "@/lib/seo";
import { industryPath, type RealEstateIndustry } from "@/lib/realEstateIndustries";

export function RealEstateIndustryPage({ industry, locale = "es" }: { industry: RealEstateIndustry; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEnglish ? industry.enH1 : industry.h1,
    url: canonicalUrl(industryPath(industry, locale)),
    provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164 },
    areaServed: { "@type": "Country", name: "Dominican Republic" }
  };

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="plain-hero">
        <p className="eyebrow">Babula Shots · B2B Real Estate</p>
        <h1>{isEnglish ? industry.enH1 : industry.h1}</h1>
        <p>{isEnglish ? industry.enIntro : industry.intro}</p>
        <a className="button button-dark" href="#contacto">{isEnglish ? "Request quote" : "Cotizar"}</a>
      </section>
      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Needs" : "Necesidades"}</p>
          <ul className="service-list">{(isEnglish ? industry.enNeeds : industry.needs).map((need) => <li key={need}>{need}</li>)}</ul>
        </div>
      </section>
      <PropertyGallery locale={locale} />
      <Integrations locale={locale} />
      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Related services" : "Servicios relacionados"}</p>
            <h2>{isEnglish ? "Build the right content package" : "Arma el paquete correcto"}</h2>
          </div>
          <div className="related-links">{realEstateServices.slice(0, 4).map((service) => <Link href={servicePath(service, locale)} key={service.slug}>{isEnglish ? service.enH1 : service.h1}</Link>)}</div>
        </div>
      </section>
      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Talk with Babula Shots" : "Habla con Babula Shots"}
        text={isEnglish ? "Tell us about the property workflow and the content you need." : "Cuentanos el flujo de propiedades y el contenido que necesitas."}
        message={industry.whatsappMessage}
      />
    </main>
  );
}
