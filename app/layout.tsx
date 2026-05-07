import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assetPath, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fotografia inmobiliaria en Republica Dominicana | Babula Shots",
    template: "%s"
  },
  description: "Foto, video, drone y contenido inmobiliario para agentes, desarrolladores, Airbnb, villas y propiedades en Republica Dominicana.",
  openGraph: {
    siteName: "Babula Shots Inmobiliaria",
    locale: "es_DO",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: assetPath("/images/cropped-babulashotslogo-1-32.png"), sizes: "32x32", type: "image/png" },
      { url: assetPath("/images/cropped-babulashotslogo-1.webp"), type: "image/webp" }
    ],
    apple: assetPath("/images/cropped-babulashotslogo-1-180.png")
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: "#f7f4ee"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-DO" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}"
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document;function s(t){d.documentElement.dataset.theme=t;localStorage.setItem('theme',t);d.querySelectorAll('[data-theme-choice]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-theme-choice')===t))})}s(d.documentElement.dataset.theme||'light');d.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-theme-choice]');if(b)s(b.getAttribute('data-theme-choice'))})}catch(e){}"
          }}
        />
      </body>
    </html>
  );
}
