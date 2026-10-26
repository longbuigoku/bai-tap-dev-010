import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextNews 24/7 - Tin Tức Nhanh & Chính Xác Nhất",
  description: "Trang tin tức tổng hợp công nghệ, kinh tế, môi trường và khoa học xây dựng với kiến trúc Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <div className="bg-glow-orb top-left" />
        <div className="bg-glow-orb bottom-right" />
        
        <div className="app-wrapper">
          {/* Header là Client Component để bắt usePathname() cho active link */}
          <Header />

          {/* Main content render Server hoặc Client Component tương ứng từng route */}
          <main className="main-content">{children}</main>

          {/* Footer là Server Component thuần túy giúp tối ưu bundle size */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
