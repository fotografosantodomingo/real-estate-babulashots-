"use client";

import type { MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { cityPath, realEstateCities } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { withBasePath } from "@/lib/seo";

function targetLanguagePath(pathname: string, targetLocale: "es" | "en") {
  const currentPath = pathname || "/";
  const pairs = [
    { es: "/", en: "/en/" },
    ...realEstateCities.map((city) => ({ es: cityPath(city), en: cityPath(city, "en") })),
    ...realEstateServices.map((service) => ({ es: servicePath(service), en: servicePath(service, "en") })),
    ...realEstateIndustries.map((industry) => ({ es: industryPath(industry), en: industryPath(industry, "en") })),
    ...blogPosts.map((post) => ({ es: `/${post.slug}`, en: `/en/${post.enSlug}` }))
  ];
  const normalized = currentPath.endsWith("/") && currentPath !== "/" ? currentPath.slice(0, -1) : currentPath;
  const match = pairs.find((pair) => pair.es === normalized || pair.en === normalized || `${pair.es}/` === currentPath || `${pair.en}/` === currentPath);

  if (match) return targetLocale === "es" ? match.es : match.en;

  if (targetLocale === "es") {
    return currentPath.replace(/^\/en(?=\/|$)/, "") || "/";
  }

  if (currentPath === "/" || currentPath === "/en" || currentPath === "/en/") return "/en/";
  if (currentPath.startsWith("/en/")) return currentPath;
  return `/en${currentPath}`;
}

export function ThemeLanguageControls() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const currentPath = pathname || "/";
  const isEnglish = currentPath === "/en" || currentPath === "/en/" || currentPath.startsWith("/en/");
  const targetLocale = isEnglish ? "es" : "en";
  const languagePath = useMemo(() => targetLanguagePath(pathname, targetLocale), [pathname, targetLocale]);
  const languageHref = withBasePath(languagePath);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  function handleLanguageSwitch(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.push(languagePath);
  }

  return (
    <div className="site-controls" aria-label="Site options">
      <button className="control-button" type="button" onClick={handleThemeToggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <a className="control-button" href={languageHref} hrefLang={isEnglish ? "es-DO" : "en"} onClick={handleLanguageSwitch}>
        {isEnglish ? "ES" : "EN"}
      </a>
    </div>
  );
}
