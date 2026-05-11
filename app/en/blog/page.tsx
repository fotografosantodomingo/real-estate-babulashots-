import type { Metadata } from "next";
import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { articlesWithEn } from "@/lib/articles";
import { canonicalUrl, organizationSchema, siteUrl } from "@/lib/seo";

const title = "Blog | Babula Shots Real Estate";
const description =
  "Guides, tips and articles about real estate photography in the Dominican Republic: Airbnb, sales, drone, agents, brokers, FSBO and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl("/en/blog/"),
    languages: {
      "es-DO": canonicalUrl("/blog/"),
      es: canonicalUrl("/blog/"),
      en: canonicalUrl("/en/blog/"),
      "x-default": canonicalUrl("/blog/")
    }
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl("/en/blog/"),
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots Real Estate",
    images: [
      {
        url: `${siteUrl}/images/social-card-1200x630.webp`,
        width: 1200,
        height: 630,
        alt: "Babula Shots Real Estate"
      }
    ]
  },
  twitter: { card: "summary_large_image", title, description }
};

export default function EnglishBlogIndex() {
  const schema = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Babula Shots Real Estate Blog",
      url: canonicalUrl("/en/blog/"),
      inLanguage: "en",
      blogPost: articlesWithEn.map((a) => ({
        "@type": "BlogPosting",
        headline: a.en!.h1,
        url: canonicalUrl(`/en/blog/${a.en!.enSlug}/`),
        datePublished: a.datePublished,
        dateModified: a.dateModified
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/en/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/en/blog/") }
      ]
    }
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="plain-hero">
        <p className="eyebrow">Blog</p>
        <h1>Articles on real estate photography in DR</h1>
        <p>
          Practical and honest guides for Airbnb hosts, real estate agents, brokers and owners selling or renting
          properties in the Dominican Republic.
        </p>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-heading-h2">Latest articles</h2>
          <div className="card-grid">
            {articlesWithEn.map((a) => (
              <Link key={a.en!.enSlug} className="card" href={`/en/blog/${a.en!.enSlug}/`}>
                <img src={a.hero.src} alt={a.en!.ogImageAlt ?? a.hero.alt} loading="lazy" decoding="async" />
                <span>{a.en!.eyebrow}</span>
                <h3>{a.en!.h1}</h3>
                <p>{a.en!.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
