import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { type BlogPost } from "@/lib/blogPosts";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { routeMessage } from "@/lib/routeMap";
import { breadcrumbSchema, canonicalUrl } from "@/lib/seo";

export function RealEstateBlogPage({ post, locale = "es" }: { post: BlogPost; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = isEnglish ? `/en/${post.enSlug}` : `/${post.slug}`;
  const title = isEnglish ? post.enTitle : post.title;
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
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: isEnglish ? post.enDescription : post.description,
      mainEntityOfPage: canonicalUrl(path),
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      author: { "@type": "Organization", name: "Babula Shots" },
      publisher: { "@type": "Organization", name: "Babula Shots" }
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
          <h2>{isEnglish ? "Related real estate media services" : "Servicios relacionados de contenido inmobiliario"}</h2>
          <p>{isEnglish ? "Most property campaigns combine listing photography with at least one add-on: drone for location and scale, video for layout, reels for social distribution or editing when existing photos need to be rescued." : "La mayoria de campanas inmobiliarias combinan fotografia de listado con al menos un adicional: drone para ubicacion y escala, video para distribucion, reels para redes o edicion cuando hay fotos existentes que necesitan rescate."}</p>
          <div className="related-links">{realEstateServices.slice(0, 5).map((service) => <Link href={servicePath(service, locale)} key={service.slug}>{isEnglish ? service.enH1 : service.h1}</Link>)}</div>
        </section>
        <section>
          <h2>{isEnglish ? "Priority local markets" : "Mercados locales prioritarios"}</h2>
          <p>{isEnglish ? "The same visual strategy changes by market. Punta Cana and Bavaro often need tourism and rental context, while Santo Domingo usually needs clear interiors, towers, amenities and commercial presentation." : "La estrategia visual cambia por mercado. Punta Cana y Bavaro suelen necesitar contexto turistico y de renta, mientras Santo Domingo suele requerir interiores claros, torres, amenidades y presentacion comercial."}</p>
          <div className="related-links">{realEstateCities.slice(0, 5).map((city) => <Link href={cityPath(city, locale)} key={city.slug}>{isEnglish ? city.enH1 : city.h1}</Link>)}</div>
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
