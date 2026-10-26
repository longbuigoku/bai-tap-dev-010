import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tối ưu hóa Font chữ: Google Fonts tải cục bộ (Self-hosted tại build time) với Next.js Font Optimization
// Không gây layout shift (Zero CLS) nhờ fallback font metrics
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://next-speed-seo.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0a0f1d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zenith Tech | Thiết Bị Công Nghệ Cao Cấp & Tối Ưu Hiệu Năng",
    template: "%s | Zenith Tech",
  },
  description: "Trải nghiệm hệ sinh thái thiết bị công nghệ âm thanh, đồng hồ thông minh và phụ kiện công thái học cao cấp với chuẩn SEO và tốc độ tải trang vượt trội.",
  keywords: [
    "tai nghe chống ồn",
    "đồng hồ thông minh titanium",
    "bàn phím cơ gasket mount",
    "chuột gaming siêu nhẹ",
    "phụ kiện công nghệ cao cấp",
  ],
  authors: [{ name: "Zenith Tech Team" }],
  creator: "Zenith Tech",
  publisher: "Zenith Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Zenith Tech Store",
    title: "Zenith Tech | Thiết Bị Công Nghệ Cao Cấp & Tối Ưu Hiệu Năng",
    description: "Trải nghiệm hệ sinh thái công nghệ đỉnh cao được tối ưu tốc độ tải tức thì với Next.js và Core Web Vitals chuẩn 100.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=630&q=85&fit=crop",
        width: 1200,
        height: 630,
        alt: "Zenith Tech Flagship Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Tech | Thiết Bị Công Nghệ Cao Cấp",
    description: "Trải nghiệm hệ sinh thái công nghệ đỉnh cao được tối ưu tốc độ tải tức thì với Next.js.",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=630&q=85&fit=crop"],
    creator: "@zenithtech",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div className="bg-ambient-orb top-left" />
        <div className="bg-ambient-orb bottom-right" />

        <div className="page-wrapper">
          <Header />
          <main className="main-container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
