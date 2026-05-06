import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { type BlogPost } from "@/lib/blogPosts";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { routeMessage } from "@/lib/routeMap";
import { canonicalUrl } from "@/lib/seo";

export function RealEstateBlogPage({ post, locale = "es" }: { post: BlogPost; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = isEnglish ? `/en/${post.enSlug}` : `/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isEnglish ? post.enTitle : post.title,
    description: isEnglish ? post.enDescription : post.description,
    mainEntityOfPage: canonicalUrl(path),
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    author: { "@type": "Organization", name: "Babula Shots" }
  };

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
        <div className="related-links">{realEstateServices.slice(0, 3).map((service) => <Link href={servicePath(service, locale)} key={service.slug}>{isEnglish ? service.enH1 : service.h1}</Link>)}</div>
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
