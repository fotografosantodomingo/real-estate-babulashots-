import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { breadcrumbSchema, canonicalUrl, phoneE164 } from "@/lib/seo";
import { industryPath, type RealEstateIndustry } from "@/lib/realEstateIndustries";

export function RealEstateIndustryPage({ industry, locale = "es" }: { industry: RealEstateIndustry; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = industryPath(industry, locale);
  const title = isEnglish ? industry.enH1 : industry.h1;
  const faq = [
    {
      question: isEnglish ? "Can this be planned for recurring listings?" : "Se puede planificar para listados recurrentes?",
      answer: isEnglish ? "Yes. We can organize batch sessions, monthly media days and consistent export formats for teams with recurring inventory." : "Si. Podemos organizar sesiones por lote, dias mensuales de contenido y formatos consistentes para equipos con inventario recurrente."
    },
    {
      question: isEnglish ? "Can you deliver files for portals and social media?" : "Entregan archivos para portales y redes?",
      answer: isEnglish ? "Yes. Files can be prepared for MLS-style listings, Point2Homes, Airbnb, websites, WhatsApp, reels and sales campaigns." : "Si. Los archivos pueden prepararse para MLS-style listings, Point2Homes, Airbnb, websites, WhatsApp, reels y campanas comerciales."
    }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: canonicalUrl(path),
      inLanguage: isEnglish ? "en" : "es-DO"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      url: canonicalUrl(path),
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164 },
      areaServed: { "@type": "Country", name: "Dominican Republic" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    },
    breadcrumbSchema([
      { name: "Babula Shots Inmobiliaria", path: isEnglish ? "/en/" : "/" },
      { name: title, path }
    ])
  ];

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
          <div>
            <h2>{isEnglish ? "What this workflow needs" : "Que necesita este flujo de trabajo"}</h2>
            <p>{isEnglish ? "The objective is not only to make a property look good. The media must help the team publish faster, answer buyer questions, support sales conversations and keep the brand consistent across portals, WhatsApp and social channels." : "El objetivo no es solo que la propiedad se vea bien. El contenido debe ayudar al equipo a publicar mas rapido, responder dudas de compradores, apoyar conversaciones comerciales y mantener una imagen consistente en portales, WhatsApp y redes."}</p>
            <ul className="service-list">{(isEnglish ? industry.enNeeds : industry.needs).map((need) => <li key={need}>{need}</li>)}</ul>
          </div>
        </div>
      </section>
      <PropertyGallery locale={locale} />
      <ServicePackages locale={locale} />
      <Integrations locale={locale} />
      <FaqBlock items={faq} />
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
