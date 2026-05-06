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
    ...realEstateCities.map((city) => ({ slug: `real-estate-photography-${city.enSlug}` })),
    ...realEstateServices.map((service) => ({ slug: service.enSlug })),
    ...realEstateIndustries.map((industry) => ({ slug: industry.enSlug })),
    ...blogPosts.map((post) => ({ slug: post.enSlug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = findCityByRoute(slug, "en");
  if (city) {
    const path = cityPath(city, "en");
    return {
      title: city.enTitle,
      description: city.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(cityPath(city)), en: canonicalUrl(path) } }
    };
  }

  const service = findServiceByRoute(slug, "en");
  if (service) {
    const path = servicePath(service, "en");
    return {
      title: service.enTitle,
      description: service.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(servicePath(service)), en: canonicalUrl(path) } }
    };
  }

  const industry = findIndustryByRoute(slug, "en");
  if (industry) {
    const path = industryPath(industry, "en");
    return {
      title: industry.enTitle,
      description: industry.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(industryPath(industry)), en: canonicalUrl(path) } }
    };
  }

  const post = findBlogByRoute(slug, "en");
  if (post) {
    return {
      title: post.enTitle,
      description: post.enDescription,
      alternates: { canonical: canonicalUrl(`/en/${post.enSlug}`), languages: { "es-DO": canonicalUrl(`/${post.slug}`), en: canonicalUrl(`/en/${post.enSlug}`) } }
    };
  }

  return {};
}

export default async function EnglishDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const city = findCityByRoute(slug, "en");
  if (city) return <RealEstateCityPage city={city} locale="en" />;

  const service = findServiceByRoute(slug, "en");
  if (service) return <RealEstateServicePage service={service} locale="en" />;

  const industry = findIndustryByRoute(slug, "en");
  if (industry) return <RealEstateIndustryPage industry={industry} locale="en" />;

  const post = findBlogByRoute(slug, "en");
  if (post) return <RealEstateBlogPage post={post} locale="en" />;

  notFound();
}
