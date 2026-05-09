import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-main",
});

export const metadata = {
  metadataBase: new URL("https://webnexus-umber.vercel.app"),
  title: {
    default: "Sistema Administrativo en Venezuela | NEXUS ERP Multiempresa",
    template: "%s | NEXUS Technology"
  },
  description: "NEXUS ERP es el sistema administrativo líder en Venezuela. Software ERP multiempresa con Inteligencia Artificial, multimoneda y homologado ante el SENIAT. Escala tu negocio hoy.",
  keywords: ["sistema administrativo", "sistema administrativo Venezuela", "mejor sistema administrativo", "software administrativo", "ERP Venezuela", "sistema contable y administrativo", "sistema administrativo multiempresa", "NEXUS ERP", "facturación electrónica SENIAT", "software empresarial Venezuela", "nómina Venezuela", "control de inventario", "IA empresarial"],
  authors: [{ name: "NEXUS Technology", url: "https://webnexus-umber.vercel.app" }],
  creator: "NEXUS Technology",
  publisher: "NEXUS Technology",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://webnexus-umber.vercel.app",
    title: "Sistema Administrativo en Venezuela | NEXUS ERP Multiempresa",
    description: "El sistema administrativo más avanzado de Venezuela. Un ERP multiempresa con IA que escala junto a tu negocio.",
    siteName: "NEXUS Technology",
    images: [{
      url: "/images/nexus-erp-screen.jpg",
      width: 1200,
      height: 630,
      alt: "NEXUS ERP Dashboard - Sistema Administrativo en Venezuela",
    }],
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS ERP | El Futuro de la Gestión Empresarial en Venezuela",
    description: "Software administrativo multiempresa, multimoneda y con IA integrada. Seguridad nivel bancario y cumplimiento SENIAT.",
    images: ["/images/nexus-erp-screen.jpg"],
    creator: "@nexustech",
  },
  category: 'technology',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NEXUS ERP",
    "operatingSystem": "Web, Windows, Android, iOS",
    "applicationCategory": "BusinessApplication, ERP",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Prueba gratuita disponible"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "NEXUS Technology",
      "url": "https://webnexus-umber.vercel.app"
    }
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEXUS Technology",
    "image": "https://webnexus-umber.vercel.app/images/logo.png",
    "@id": "https://webnexus-umber.vercel.app",
    "url": "https://webnexus-umber.vercel.app",
    "telephone": "+584121234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Principal",
      "addressLocality": "Caracas",
      "postalCode": "1010",
      "addressCountry": "VE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.4806,
      "longitude": -66.9036
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es NEXUS ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NEXUS ERP es el sistema administrativo más avanzado de Venezuela, diseñado para unificar la gestión de múltiples empresas en tiempo real con Inteligencia Artificial integrada."
        }
      },
      {
        "@type": "Question",
        "name": "¿NEXUS ERP está homologado ante el SENIAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, NEXUS ERP cumple con todas las normativas fiscales de Venezuela y está plenamente homologado ante el SENIAT para la facturación electrónica y gestión tributaria."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen soporte técnico en Venezuela?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos soporte técnico especializado 24/7 para garantizar que la operación de su empresa nunca se detenga."
        }
      }
    ]
  };

  return (
    <html lang="es" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
