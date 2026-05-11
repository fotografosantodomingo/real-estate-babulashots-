import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { type BlogPost } from "@/lib/blogPosts";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { realEstatePackages } from "@/lib/realEstatePackages";
import { routeMessage } from "@/lib/routeMap";
import {
  aggregateRating,
  brandLogoUrl,
  breadcrumbSchema,
  canonicalUrl,
  email,
  geoCoordinates,
  isoAst,
  localBusinessAreaServed,
  localBusinessPriceRange,
  organizationSchema,
  phoneE164,
  postalAddress,
  siteUrl
} from "@/lib/seo";

export function RealEstateBlogPage({ post, locale = "es" }: { post: BlogPost; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = isEnglish ? `/en/${post.enSlug}` : `/${post.slug}`;
  const title = isEnglish ? post.enTitle : post.title;
  const topCities = realEstateCities.slice(0, 5);
  const topServices = realEstateServices.slice(0, 5);
  const packageRows = realEstatePackages.filter((item) => item.priceValueDop);
  const faq = [
    {
      question: isEnglish ? "Can Babula Shots quote this for a specific property?" : "Babula Shots puede cotizar esto para una propiedad especifica?",
      answer: isEnglish ? "Yes. Send the city, property type, number of rooms and whether you need photo, video, drone or reels." : "Si. Envia ciudad, tipo de propiedad, cantidad de habitaciones y si necesitas foto, video, drone o reels."
    },
    {
      question: isEnglish ? "Can the files be prepared for portals and Airbnb?" : "Pueden preparar archivos para portales y Airbnb?",
      answer: isEnglish ? "Yes. Deliverables can be prepared for MLS-style listings, Point2Homes, Airbnb, websites, WhatsApp and social media." : "Si. Los entregables pueden prepararse para MLS-style listings, Point2Homes, Airbnb, websites, WhatsApp y redes sociales."
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
      "@type": "Article",
      headline: title,
      description: isEnglish ? post.enDescription : post.description,
      mainEntityOfPage: canonicalUrl(path),
      datePublished: isoAst("2026-05-06"),
      dateModified: isoAst("2026-05-06"),
      author: {
        "@type": "Organization",
        name: "Babula Shots",
        "@id": `${siteUrl}#organization`
      },
      publisher: {
        "@type": "Organization",
        name: "Babula Shots",
        logo: { "@type": "ImageObject", url: brandLogoUrl }
      },
      inLanguage: isEnglish ? "en" : "es-DO"
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
      { name: isEnglish ? "Blog" : "Blog", path: isEnglish ? "/en/" : "/" },
      { name: title, path }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <article className="article">
        <p className="eyebrow">Real Estate Guide</p>
        <h1>{isEnglish ? post.enH1 : post.h1}</h1>
        <p className="article-intro">{isEnglish ? post.enIntro : post.intro}</p>
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{isEnglish ? section.enHeading : section.heading}</h2>
            <p>{isEnglish ? section.enBody : section.body}</p>
          </section>
        ))}
        <section>
          <h2>{isEnglish ? "Practical checklist before publishing" : "Checklist practico antes de publicar"}</h2>
          <p>{isEnglish ? "Before publishing a property, confirm that the cover image is strong, the gallery follows a logical walkthrough, the main spaces are clean, the files are exported for each platform and the listing has enough visual proof to reduce basic questions." : "Antes de publicar una propiedad, confirma que la portada sea fuerte, la galeria siga un recorrido logico, los espacios principales esten limpios, los archivos esten exportados para cada plataforma y el anuncio tenga suficiente prueba visual para reducir preguntas basicas."}</p>
          <ul className="service-list">
            {(isEnglish ? ["Cover image", "Interior sequence", "Exterior/context", "Platform-ready files", "WhatsApp-ready gallery"] : ["Foto de portada", "Secuencia interior", "Exterior/contexto", "Archivos para portales", "Galeria lista para WhatsApp"]).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section>
          <h2>{isEnglish ? "How to apply this in the Dominican Republic" : "Como aplicar esto en Republica Dominicana"}</h2>
          <p>
            {isEnglish
              ? "Real estate media in the Dominican Republic changes by market. Santo Domingo listings usually need clear interiors, tower amenities, parking, lobby and urban context. Punta Cana, Bavaro and Cap Cana listings often need lifestyle, pool, beach distance, rental potential and drone. La Romana and Casa de Campo need a more premium architectural presentation, while Samana, Las Terrenas, Puerto Plata, Jarabacoa and Miches need stronger landscape and access context."
              : "El contenido inmobiliario en Republica Dominicana cambia por mercado. En Santo Domingo normalmente se necesitan interiores claros, amenidades de torre, parqueos, lobby y contexto urbano. En Punta Cana, Bavaro y Cap Cana suele pesar mas el lifestyle, piscina, distancia a playa, potencial de renta y drone. La Romana y Casa de Campo requieren una presentacion mas premium y arquitectonica, mientras Samana, Las Terrenas, Puerto Plata, Jarabacoa y Miches necesitan explicar paisaje, acceso y entorno."}
          </p>
          <p>
            {isEnglish
              ? "That is why a strong listing should not copy the same visual formula everywhere. The media plan should match the buyer: local family, corporate tenant, foreign investor, Airbnb guest, developer lead or luxury villa renter."
              : "Por eso un anuncio fuerte no debe copiar la misma formula visual en todas partes. El plan de contenido debe ajustarse al comprador: familia local, inquilino corporativo, inversionista extranjero, huesped Airbnb, lead de desarrollador o cliente de villa premium."}
          </p>
        </section>
        <section>
          <h2>{isEnglish ? "Budget and package planning" : "Planificacion de presupuesto y paquetes"}</h2>
          <p>
            {isEnglish
              ? "The right budget depends on property value, urgency and the amount of proof the buyer needs. A simple apartment may only need edited photos. A villa, development, hotel, Airbnb or land listing often needs drone, video or reels because location and experience are part of the product."
              : "El presupuesto correcto depende del valor de la propiedad, urgencia y cantidad de prueba visual que necesita el comprador. Un apartamento sencillo puede necesitar solo fotos editadas. Una villa, proyecto, hotel, Airbnb o terreno muchas veces necesita drone, video o reels porque la ubicacion y la experiencia son parte del producto."}
          </p>
          <div className="pricing-table" role="table" aria-label={isEnglish ? "Real estate media price references" : "Referencias de precios inmobiliarios"}>
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
        </section>
        <section>
          <h2>{isEnglish ? "What Google and buyers both need" : "Lo que Google y compradores necesitan"}</h2>
          <p>
            {isEnglish
              ? "Search engines reward pages that answer the real intent behind the query. Buyers reward listings that reduce uncertainty. The same principle applies to both: use specific places, specific property types, visible deliverables, clear prices or quote factors, and helpful internal links to the next decision."
              : "Google premia paginas que responden la intencion real de busqueda. Los compradores premian anuncios que reducen incertidumbre. El mismo principio aplica a ambos: usar lugares especificos, tipos de propiedad concretos, entregables visibles, precios o factores de cotizacion claros y enlaces internos utiles hacia la proxima decision."}
          </p>
          <ul className="service-list">
            {(isEnglish
              ? ["Specific city context", "Clear deliverables", "Visible pricing guidance", "FAQ matching real questions", "Links to relevant services and cities"]
              : ["Contexto especifico por ciudad", "Entregables claros", "Guia visible de precios", "FAQ alineado con preguntas reales", "Enlaces a servicios y ciudades relevantes"]
            ).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section>
          <h2>{isEnglish ? "Common mistakes to avoid" : "Errores comunes que debes evitar"}</h2>
          <p>
            {isEnglish
              ? "The most common mistake is publishing a property with a random gallery: dark rooms, repeated angles, no exterior context, no amenities, no view, no scale and no clear cover image. The second mistake is using the same visual strategy for every city. A tower in Santo Domingo, a villa in Punta Cana and a cabin in Jarabacoa need different proof."
              : "El error mas comun es publicar una propiedad con una galeria aleatoria: espacios oscuros, angulos repetidos, sin contexto exterior, sin amenidades, sin vista, sin escala y sin una portada clara. El segundo error es usar la misma estrategia visual para todas las ciudades. Una torre en Santo Domingo, una villa en Punta Cana y una cabana en Jarabacoa necesitan pruebas distintas."}
          </p>
          <p>
            {isEnglish
              ? "Another mistake is hiding the next step. The listing should make it easy to request a showing, ask for price, book a stay or schedule a call. Good media works together with clear CTAs, platform-ready files and a fast way to share the property by WhatsApp."
              : "Otro error es esconder la proxima accion. El anuncio debe facilitar pedir una visita, preguntar precio, reservar una estadia o agendar una llamada. El buen contenido trabaja junto con CTAs claros, archivos listos para plataforma y una forma rapida de compartir la propiedad por WhatsApp."}
          </p>
        </section>
        <section>
          <h2>{isEnglish ? "Recommended publishing sequence" : "Secuencia recomendada para publicar"}</h2>
          <p>
            {isEnglish
              ? "Start with the strongest visual promise, then explain the property in a logical order. For most listings that means cover image, exterior or context, living area, kitchen, bedrooms, bathrooms, amenities, view and closing detail. For Airbnb, put experience earlier. For developments, show location and progress. For commercial spaces, show facade and access early."
              : "Empieza con la promesa visual mas fuerte y luego explica la propiedad en orden logico. En la mayoria de listados eso significa portada, exterior o contexto, sala, cocina, habitaciones, banos, amenidades, vista y detalle final. Para Airbnb, la experiencia va mas temprano. Para proyectos, muestra ubicacion y avance. Para locales comerciales, fachada y acceso deben aparecer rapido."}
          </p>
          <ul className="service-list">
            {(isEnglish
              ? ["Cover image", "Location context", "Interior walkthrough", "Amenities and proof", "Final CTA"]
              : ["Portada", "Contexto de ubicacion", "Recorrido interior", "Amenidades y prueba", "CTA final"]
            ).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section>
          <h2>{isEnglish ? "When to hire professional media" : "Cuando contratar contenido profesional"}</h2>
          <p>
            {isEnglish
              ? "Professional media becomes important when the property value, listing competition or client expectation is high enough that weak visuals can cost real money. This includes premium apartments, villas, Airbnb units, commercial properties, developments, hotels, land with views and any listing where the buyer is not nearby enough to visit immediately."
              : "El contenido profesional se vuelve importante cuando el valor de la propiedad, la competencia del anuncio o la expectativa del cliente es suficientemente alta como para que imagenes debiles cuesten dinero real. Esto incluye apartamentos premium, villas, unidades Airbnb, locales comerciales, proyectos, hoteles, terrenos con vista y cualquier listado donde el comprador no esta tan cerca como para visitar de inmediato."}
          </p>
          <p>
            {isEnglish
              ? "It is also worth hiring a professional when the property needs more than documentation. If the listing must sell trust, rental experience, investment potential, construction progress, location, amenities or lifestyle, the visual plan should be intentional. That is where photo, video, drone, reels, clean editing and platform-ready exports become part of the sales strategy."
              : "Tambien vale la pena contratar un profesional cuando la propiedad necesita mas que documentacion. Si el anuncio debe vender confianza, experiencia de renta, potencial de inversion, avance de obra, ubicacion, amenidades o lifestyle, el plan visual debe ser intencional. Ahi es donde foto, video, drone, reels, edicion limpia y exportaciones listas para plataforma se vuelven parte de la estrategia comercial."}
          </p>
        </section>
        <section>
          <h2>{isEnglish ? "Final recommendation" : "Recomendacion final"}</h2>
          <p>
              {isEnglish
              ? "Treat the visual plan as part of the sales process. The best page, listing or campaign is the one that combines useful content, honest images, clear pricing guidance, local context and a fast way to request a quote or showing. If a page answers the buyer's practical questions and gives the seller strong proof to share, it has a much better chance of performing in both Google and real conversations. Keep improving the page after launch with real property examples, stronger internal links, Search Console query data and updated FAQs from actual client questions."
              : "Trata el plan visual como parte del proceso de venta. La mejor pagina, anuncio o campana es la que combina contenido util, imagenes honestas, guia clara de precios, contexto local y una forma rapida de pedir cotizacion o visita. Si una pagina responde las preguntas practicas del comprador y le da al vendedor prueba fuerte para compartir, tiene muchas mas posibilidades de funcionar tanto en Google como en conversaciones reales. Despues del lanzamiento conviene mejorar la pagina con ejemplos reales, enlaces internos mas fuertes, datos de Search Console y FAQs tomadas de preguntas reales de clientes."}
          </p>
        </section>
        <section>
          <h2>{isEnglish ? "Related real estate media services" : "Servicios relacionados de contenido inmobiliario"}</h2>
          <p>{isEnglish ? "Most property campaigns combine listing photography with at least one add-on: drone for location and scale, video for layout, reels for social distribution or editing when existing photos need to be rescued." : "La mayoria de campanas inmobiliarias combinan fotografia de listado con al menos un adicional: drone para ubicacion y escala, video para distribucion, reels para redes o edicion cuando hay fotos existentes que necesitan rescate."}</p>
          <div className="related-links">{topServices.map((service) => <Link href={servicePath(service, locale)} key={service.slug}>{isEnglish ? service.enH1 : service.h1}</Link>)}</div>
        </section>
        <section>
          <h2>{isEnglish ? "Priority local markets" : "Mercados locales prioritarios"}</h2>
          <p>{isEnglish ? "The same visual strategy changes by market. Punta Cana and Bavaro often need tourism and rental context, while Santo Domingo usually needs clear interiors, towers, amenities and commercial presentation." : "La estrategia visual cambia por mercado. Punta Cana y Bavaro suelen necesitar contexto turistico y de renta, mientras Santo Domingo suele requerir interiores claros, torres, amenidades y presentacion comercial."}</p>
          <div className="related-links">{topCities.map((city) => <Link href={cityPath(city, locale)} key={city.slug}>{isEnglish ? city.enH1 : city.h1}</Link>)}</div>
        </section>
        <FaqBlock items={faq} />
      </article>
      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Need property media?" : "Necesitas contenido para una propiedad?"}
        text={isEnglish ? "Send your city and property type for a quote." : "Envia ciudad y tipo de propiedad para cotizar."}
        message={routeMessage("")}
      />
    </main>
  );
}
