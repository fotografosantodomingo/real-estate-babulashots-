import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RealEstateBlogPage } from "@/components/RealEstateBlogPage";
import { RealEstateCityPage } from "@/components/RealEstateCityPage";
import { RealEstateIndustryPage } from "@/components/RealEstateIndustryPage";
import { RealEstateServicePage } from "@/components/RealEstateServicePage";
import { blogPosts, findBlogByRoute } from "@/lib/blogPosts";
import { cityPath, findCityByRoute, realEstateCities } from "@/lib/realEstateCities";
import { findIndustryByRoute, industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { findServiceByRoute, realEstateServices, servicePath } from "@/lib/realEstateServices";
import { canonicalUrl } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...realEstateCities.map((city) => ({ slug: `fotografia-inmobiliaria-${city.slug}` })),
    ...realEstateServices.map((service) => ({ slug: service.slug })),
    ...realEstateIndustries.map((industry) => ({ slug: industry.slug })),
    ...blogPosts.map((post) => ({ slug: post.slug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = findCityByRoute(slug);
  if (city) {
    const path = cityPath(city);
    return {
      title: city.title,
      description: city.description,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(path), en: canonicalUrl(cityPath(city, "en")) } },
      openGraph: { title: city.title, description: city.description, url: canonicalUrl(path) }
    };
  }

  const service = findServiceByRoute(slug);
  if (service) {
    const path = servicePath(service);
    return {
      title: service.title,
      description: service.description,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(path), en: canonicalUrl(servicePath(service, "en")) } }
    };
  }

  const industry = findIndustryByRoute(slug);
  if (industry) {
    const path = industryPath(industry);
    return {
      title: industry.title,
      description: industry.description,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(path), en: canonicalUrl(industryPath(industry, "en")) } }
    };
  }

  const post = findBlogByRoute(slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: canonicalUrl(`/${post.slug}`), languages: { "es-DO": canonicalUrl(`/${post.slug}`), en: canonicalUrl(`/en/${post.enSlug}`) } }
    };
  }

  return {};
}

export default async function SpanishDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const city = findCityByRoute(slug);
  if (city) return <RealEstateCityPage city={city} />;

  const service = findServiceByRoute(slug);
  if (service) return <RealEstateServicePage service={service} />;

  const industry = findIndustryByRoute(slug);
  if (industry) return <RealEstateIndustryPage industry={industry} />;

  const post = findBlogByRoute(slug);
  if (post) return <RealEstateBlogPage post={post} />;

  notFound();
}
