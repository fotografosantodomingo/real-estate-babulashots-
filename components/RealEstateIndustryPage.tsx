import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { realEstatePackages } from "@/lib/realEstatePackages";
import {
  aggregateRating,
  breadcrumbSchema,
  canonicalUrl,
  email,
  geoCoordinates,
  localBusinessAreaServed,
  localBusinessPriceRange,
  organizationSchema,
  phoneE164,
  postalAddress,
  siteUrl
} from "@/lib/seo";
import { industryPath, type RealEstateIndustry } from "@/lib/realEstateIndustries";

export function RealEstateIndustryPage({ industry, locale = "es" }: { industry: RealEstateIndustry; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = industryPath(industry, locale);
  const title = isEnglish ? industry.enH1 : industry.h1;
  const needs = isEnglish ? industry.enNeeds : industry.needs;
  const packageRows = realEstatePackages.filter((item) => item.priceValueDop);
  const workflowSections = [
    {
      heading: isEnglish ? "Publishing workflow" : "Flujo de publicacion",
      body: isEnglish ? `This audience needs a repeatable way to move from property capture to publication. For ${title.toLowerCase()}, the media should be organized for portals, WhatsApp, social media, websites and direct sales follow-up.` : `Este cliente necesita una forma repetible de pasar de la sesion a la publicacion. Para ${title.toLowerCase()}, el contenido debe organizarse para portales, WhatsApp, redes, websites y seguimiento comercial directo.`,
      items: needs
    },
    {
      heading: isEnglish ? "What the content must prove" : "Que debe probar el contenido",
      body: isEnglish ? "The visuals should answer practical questions before the lead asks them: layout, condition, amenities, access, location, lifestyle and whether the property feels worth the price." : "Las imagenes deben responder preguntas practicas antes de que el lead las haga: distribucion, condicion, amenidades, acceso, ubicacion, lifestyle y si la propiedad se siente acorde al precio.",
      items: isEnglish ? ["Layout", "Condition", "Amenities", "Location", "Trust"] : ["Distribucion", "Condicion", "Amenidades", "Ubicacion", "Confianza"]
    },
    {
      heading: isEnglish ? "Best package logic" : "Logica de paquete",
      body: isEnglish ? "Not every property needs a full production. Standard listings can start with edited photography, while premium properties, developments, villas and vacation rentals often need video, drone and reels." : "No toda propiedad necesita una produccion completa. Listados estandar pueden iniciar con fotografia editada, mientras propiedades premium, proyectos, villas y rentas vacacionales suelen necesitar video, drone y reels.",
      items: isEnglish ? ["Photo for inventory", "Drone for location", "Video for flow", "Reels for demand"] : ["Foto para inventario", "Drone para ubicacion", "Video para recorrido", "Reels para demanda"]
    }
  ];
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
      provider: {
        "@type": "Organization",
        name: "Babula Shots Inmobiliaria",
        "@id": `${siteUrl}#organization`
      },
      areaServed: localBusinessAreaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? "Real estate media package guidance" : "Guia de paquetes de contenido inmobiliario",
        itemListElement: packageRows.map((item) => ({
          "@type": "Offer",
          name: isEnglish ? item.enName : item.name,
          priceCurrency: "DOP",
          price: item.priceValueDop,
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
      { name: isEnglish ? "Client types" : "Clientes", path: isEnglish ? "/en/" : "/" },
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
            <ul className="service-list">{needs.map((need) => <li key={need}>{need}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Strategy" : "Estrategia"}</p>
          <div>
            <h2>{isEnglish ? "A content system, not isolated photos" : "Un sistema de contenido, no fotos sueltas"}</h2>
            <p>{isEnglish ? `For ${title.toLowerCase()}, the value is in a system: consistent captures, clear deliverables, repeatable publishing formats and enough media to support sales conversations after the shoot.` : `Para ${title.toLowerCase()}, el valor esta en el sistema: sesiones consistentes, entregables claros, formatos repetibles y suficiente contenido para apoyar conversaciones comerciales despues de la sesion.`}</p>
            <div className="authority-grid">
              {workflowSections.map((section) => (
                <article className="card authority-card" key={section.heading}>
                  <span>{section.heading}</span>
                  <p>{section.body}</p>
                  <ul className="service-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PropertyGallery locale={locale} />
      <ServicePackages locale={locale} />
      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Execution" : "Ejecucion"}</p>
          <div>
            <h2>{isEnglish ? "How the session should be prepared" : "Como debe prepararse la sesion"}</h2>
            <p>
              {isEnglish
                ? `Before production, we define the locations, property list, priority rooms, amenities, access rules, publication deadlines and final platforms. For ${title.toLowerCase()}, that preparation prevents wasted time on site and makes the delivery easier for the team to use immediately.`
                : `Antes de producir, definimos ubicaciones, lista de propiedades, espacios prioritarios, amenidades, reglas de acceso, fechas de publicacion y plataformas finales. Para ${title.toLowerCase()}, esa preparacion evita perder tiempo en la locacion y hace que la entrega sea mas facil de usar de inmediato.`}
            </p>
            <p>
              {isEnglish
                ? "The strongest workflow is simple: create a shot list, capture the proof buyers need, edit consistently, export by platform and keep a folder structure that sales teams can understand. That matters when several agents, owners, investors or managers need to use the same media without asking for new versions every time."
                : "El flujo mas fuerte es simple: crear lista de tomas, capturar la prueba que necesitan los compradores, editar con consistencia, exportar por plataforma y mantener una estructura de carpetas que el equipo comercial entienda. Eso importa cuando varios agentes, propietarios, inversionistas o administradores necesitan usar el mismo contenido sin pedir nuevas versiones cada vez."}
            </p>
            <div className="pricing-table" role="table" aria-label={isEnglish ? "Package price references" : "Referencias de precios por paquete"}>
              <div className="pricing-row pricing-head" role="row">
                <span role="columnheader">{isEnglish ? "Package" : "Paquete"}</span>
                <span role="columnheader">{isEnglish ? "Best for" : "Mejor para"}</span>
                <span role="columnheader">{isEnglish ? "From" : "Desde"}</span>
              </div>
              {packageRows.map((item) => (
                <div className="pricing-row" role="row" key={item.name}>
                  <span role="cell">{isEnglish ? item.enName : item.name}</span>
                  <span role="cell">{isEnglish ? item.enBestFor : item.bestFor}</span>
                  <span role="cell">{`RD$${item.priceValueDop?.toLocaleString("en-US")}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Markets" : "Mercados"}</p>
          <div>
            <h2>{isEnglish ? "How this changes by location" : "Como cambia por ubicacion"}</h2>
            <p>
              {isEnglish
                ? `The same client segment behaves differently by location. Santo Domingo often needs speed, clean interiors, tower amenities, parking and corporate presentation. Punta Cana, Bavaro and Cap Cana need lifestyle, beach context, rental potential, drone and confidence for foreign buyers. La Romana and Casa de Campo require a more premium visual language, while Samana, Puerto Plata, Jarabacoa and Miches need landscape, access and investment context.`
                : `El mismo segmento de cliente se comporta distinto segun la ubicacion. Santo Domingo suele necesitar rapidez, interiores limpios, amenidades de torre, parqueo y presentacion corporativa. Punta Cana, Bavaro y Cap Cana necesitan lifestyle, contexto de playa, potencial de renta, drone y confianza para compradores extranjeros. La Romana y Casa de Campo requieren un lenguaje visual mas premium, mientras Samana, Puerto Plata, Jarabacoa y Miches necesitan paisaje, acceso y contexto de inversion.`}
            </p>
            <p>
              {isEnglish
                ? `That local difference is why we avoid a single generic package. We choose photo, video, drone, reels or batch content based on how the property will be sold, rented or presented. For ${title.toLowerCase()}, the best media plan is the one the team can reuse across listings, campaigns, owner reports and sales conversations.`
                : `Esa diferencia local es la razon por la que evitamos un paquete generico unico. Elegimos foto, video, drone, reels o contenido por lote segun como la propiedad sera vendida, alquilada o presentada. Para ${title.toLowerCase()}, el mejor plan visual es el que el equipo puede reutilizar en listados, campanas, reportes a propietarios y conversaciones comerciales.`}
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "QA" : "QA"}</p>
          <div>
            <h2>{isEnglish ? "What a finished delivery should include" : "Que debe incluir una entrega terminada"}</h2>
            <p>
              {isEnglish
                ? `A finished delivery for ${title.toLowerCase()} should not be a folder of random images. It should include edited files, organized naming, enough horizontal and vertical options, clear cover candidates, lightweight versions for sharing and a structure the team can reuse without asking the photographer where each file belongs. Good delivery also protects brand consistency: the same property can appear on a portal, in WhatsApp, on Instagram and in a sales presentation without looking like four different campaigns. This is especially important for teams that publish often, because speed only helps when the quality and file organization stay consistent. The delivery should also make future updates easier, so new listings, price changes or seasonal campaigns can reuse the same visual system clearly without rebuilding the brand presentation from zero.`
                : `Una entrega terminada para ${title.toLowerCase()} no debe ser una carpeta de imagenes al azar. Debe incluir archivos editados, nombres organizados, suficientes opciones horizontales y verticales, posibles portadas claras, versiones ligeras para compartir y una estructura que el equipo pueda reutilizar sin preguntar al fotografo donde va cada archivo. Una buena entrega tambien protege la consistencia de marca: la misma propiedad puede aparecer en portal, WhatsApp, Instagram y presentacion comercial sin parecer cuatro campanas distintas. Esto es especialmente importante para equipos que publican con frecuencia, porque la velocidad solo ayuda cuando la calidad y el orden de archivos se mantienen consistentes.`}
            </p>
          </div>
        </div>
      </section>
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
