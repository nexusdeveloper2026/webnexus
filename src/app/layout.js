import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-main",
});

export const metadata = {
  title: "Sistema Administrativo en Venezuela | NEXUS ERP Multiempresa",
  description: "NEXUS ERP es el sistema administrativo líder en Venezuela. Software ERP multiempresa con Inteligencia Artificial, multimoneda y homologado ante el SENIAT. Escala tu negocio hoy.",
  keywords: "sistema administrativo, sistema administrativo Venezuela, mejor sistema administrativo, software administrativo, ERP Venezuela, sistema contable y administrativo, sistema administrativo multiempresa, NEXUS ERP, facturación electrónica SENIAT, software empresarial Venezuela",
  authors: [{ name: "NEXUS Technology" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://nexusdeveloper2026.github.io/webnexus/",
    title: "Sistema Administrativo en Venezuela | NEXUS ERP",
    description: "El sistema administrativo líder del mercado. Descubre NEXUS ERP: Software multiempresa, multimoneda y con IA integrada.",
    siteName: "NEXUS Technology",
    images: [{
      url: "https://nexusdeveloper2026.github.io/webnexus/images/nexus-erp-screen.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Administrativo en Venezuela | NEXUS ERP",
    description: "El mejor sistema administrativo multiempresa del país. IA integrada, multimoneda y seguridad de nivel bancario.",
    images: ["https://nexusdeveloper2026.github.io/webnexus/images/nexus-erp-screen.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.variable} suppressHydrationWarning>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
