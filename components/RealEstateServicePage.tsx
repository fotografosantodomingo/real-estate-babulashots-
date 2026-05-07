import Image from "next/image";
import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { FaqBlock } from "@/components/FaqBlock";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstatePackages } from "@/lib/realEstatePackages";
import { realEstateServices, servicePath, type RealEstateService } from "@/lib/realEstateServices";
import { assetPath, breadcrumbSchema, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";

export function RealEstateServicePage({ service, locale = "es" }: { service: RealEstateService; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = servicePath(service, locale);
  const useCases = (isEnglish ? service.enUseCases : service.useCases) ?? [];
  const serviceLabel = isEnglish ? service.enH1 : service.h1;
  const buyerIntent = isEnglish ? service.enBuyerIntent : service.buyerIntent;
  const deliverables = isEnglish ? service.enDeliverables : service.deliverables;
  const proof = isEnglish ? service.enProof : service.proof;
  const relatedItems = (service.recommendedLinks ?? [])
    .map((slug) => {
      const serviceMatch = realEstateServices.find((item) => item.slug === slug);
      if (serviceMatch) return { slug, href: servicePath(serviceMatch, locale), label: isEnglish ? serviceMatch.enH1 : serviceMatch.h1 };
      const cityMatch = realEstateCities.find((item) => `fotografia-inmobiliaria-${item.slug}` === slug);
      if (cityMatch) return { slug, href: cityPath(cityMatch, locale), label: isEnglish ? cityMatch.enH1 : cityMatch.h1 };
      const industryMatch = realEstateIndustries.find((item) => item.slug === slug);
      if (industryMatch) return { slug, href: industryPath(industryMatch, locale), label: isEnglish ? industryMatch.enH1 : industryMatch.h1 };
      return null;
    })
    .filter((item): item is { slug: string; href: string; label: string } => Boolean(item));
  const faq = [
    {
      question: isEnglish ? `When is ${serviceLabel} the right service?` : `Cuando conviene ${serviceLabel}?`,
      answer: buyerIntent ?? (isEnglish ? service.enIntro : service.intro)
    },
    {
      question: isEnglish ? `What does ${serviceLabel} include?` : `Que incluye ${serviceLabel}?`,
      answer: `${deliverables.join(", ")}. ${proof}`
    },
    {
      question: isEnglish ? "Can it be combined with other property media?" : "Se puede combinar con otros medios inmobiliarios?",
      answer: relatedItems.length
        ? `${isEnglish ? "Yes. Common add-ons include" : "Si. Los adicionales comunes son"} ${relatedItems.map((item) => item.label).join(", ")}.`
        : (isEnglish ? "Yes. The package can be adapted with photo, video, drone or reels depending on the property." : "Si. El paquete puede adaptarse con foto, video, drone o reels segun la propiedad.")
    }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: isEnglish ? service.enH1 : service.h1,
      url: canonicalUrl(path),
      inLanguage: isEnglish ? "en" : "es-DO",
      about: { "@type": "Service", name: isEnglish ? service.enH1 : service.h1 }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEnglish ? service.enH1 : service.h1,
      serviceType: "Real estate media",
      url: canonicalUrl(path),
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164, url: siteUrl },
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? "Real estate media starting prices" : "Precios base de contenido inmobiliario",
        itemListElement: realEstatePackages.filter((item) => item.priceValueDop).map((item) => ({
          "@type": "Offer",
          name: isEnglish ? item.enName : item.name,
          priceCurrency: "DOP",
          price: item.priceValueDop,
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: isEnglish ? item.enName : item.name }
        }))
      }
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
      { name: isEnglish ? service.enH1 : service.h1, path }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero service-hero">
        <Image src={assetPath("/images/real-estate-media-dominican-republic.webp")} alt={isEnglish ? service.enH1 : service.h1} width={1400} height={788} priority fetchPriority="high" className="hero-image" />
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
            <p>{proof}</p>
            <p>{buyerIntent}</p>
            <ul className="service-list">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      {useCases.length ? (
        <section className="section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Best fit" : "Mejor uso"}</p>
            <div>
              <h2>{isEnglish ? "Where this service works best" : "Donde este servicio funciona mejor"}</h2>
              <ul className="service-list">{useCases.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Process" : "Proceso"}</p>
          <div>
            <h2>{isEnglish ? "Fast workflow for property listings" : "Flujo rapido para publicar propiedades"}</h2>
            <ul className="service-list">
              {(isEnglish
                ? ["Confirm city and property type", "Plan photos, video or drone", "Capture interiors, exteriors and amenities", "Edit for listing platforms", "Deliver files ready for portals and WhatsApp"]
                : ["Confirmar ciudad y tipo de propiedad", "Planificar fotos, video o drone", "Capturar interiores, exteriores y amenidades", "Editar para portales inmobiliarios", "Entregar archivos listos para portales y WhatsApp"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <ServicePackages locale={locale} />
      <Integrations locale={locale} />
      <FaqBlock items={faq} />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Related services" : "Servicios relacionados"}</p>
            <h2>{isEnglish ? "Useful add-ons for this listing" : "Adicionales utiles para este listado"}</h2>
          </div>
          <div className="related-links">
            {relatedItems.map((item) => <Link href={item.href} key={item.slug}>{item.label}</Link>)}
          </div>
        </div>
      </section>

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
