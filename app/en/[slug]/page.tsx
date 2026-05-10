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
import { canonicalUrl, socialCardImage } from "@/lib/seo";

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
    const esPath = cityPath(city);
    return {
      title: city.enTitle,
      description: city.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(esPath), es: canonicalUrl(esPath), en: canonicalUrl(path) } },
      openGraph: { url: canonicalUrl(path), images: [socialCardImage] }
    };
  }

  const service = findServiceByRoute(slug, "en");
  if (service) {
    const path = servicePath(service, "en");
    const esPath = servicePath(service);
    return {
      title: service.enTitle,
      description: service.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(esPath), es: canonicalUrl(esPath), en: canonicalUrl(path) } },
      openGraph: { url: canonicalUrl(path), images: [socialCardImage] }
    };
  }

  const industry = findIndustryByRoute(slug, "en");
  if (industry) {
    const path = industryPath(industry, "en");
    const esPath = industryPath(industry);
    return {
      title: industry.enTitle,
      description: industry.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(esPath), es: canonicalUrl(esPath), en: canonicalUrl(path) } },
      openGraph: { url: canonicalUrl(path), images: [socialCardImage] }
    };
  }

  const post = findBlogByRoute(slug, "en");
  if (post) {
    const path = `/en/${post.enSlug}`;
    const esPath = `/${post.slug}`;
    return {
      title: post.enTitle,
      description: post.enDescription,
      alternates: { canonical: canonicalUrl(path), languages: { "es-DO": canonicalUrl(esPath), es: canonicalUrl(esPath), en: canonicalUrl(path) } },
      openGraph: { url: canonicalUrl(path), images: [socialCardImage] }
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
