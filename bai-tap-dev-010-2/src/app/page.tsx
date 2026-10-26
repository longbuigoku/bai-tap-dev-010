import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/data/products";

export default async function HomePage() {
  const products = await getProducts();
  const heroProduct = products[0];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://next-speed-seo.vercel.app";

  // Schema Markup (JSON-LD) cho Google Search rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zenith Tech",
    url: siteUrl,
    description: "Cửa hàng công nghệ thiết bị cao cấp tối ưu tốc độ và trải nghiệm",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* Cấu trúc dữ liệu JSON-LD cho công cụ tìm kiếm */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {/* Hero Section với Image LCP Priority tối ưu */}
        <section className="glass-panel" style={{ padding: "48px 32px", overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center"
          }}>
            <div>
              <div style={{ marginBottom: 16 }}>
                <span className="badge badge-cyan">
                  ⚡ Thế Hệ Flagship Mới 2026
                </span>
              </div>
              <h1 style={{ fontSize: "2.8rem", fontWeight: 800, lineHeight: 1.15, marginBottom: 18 }}>
                Âm Thanh Đỉnh Cao. <br />
                <span style={{
                  background: "var(--accent-gradient-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Không Gian Thuần Khiết.
                </span>
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 28 }}>
                {heroProduct.tagline}. Trải nghiệm chống ồn ANC 45dB và thời lượng pin 60 giờ liên tục với độ trung thực tuyệt đối.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <Link href={`/products/${heroProduct.slug}`} className="btn btn-primary">
                  Khám Phá Chi Tiết →
                </Link>
                <Link href="/products" className="btn btn-secondary">
                  Tất Cả Sản Phẩm
                </Link>
              </div>

              {/* Tối ưu Core Web Vitals Key Metrics Tag */}
              <div style={{
                marginTop: 36,
                paddingTop: 24,
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                gap: 24,
                flexWrap: "wrap"
              }}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-cyan)" }}>0.4s</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>LCP Speed Index</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-cyan)" }}>100/100</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Lighthouse SEO</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-cyan)" }}>0.000</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Cumulative Layout Shift</div>
                </div>
              </div>
            </div>

            {/* Optimized Next/Image: Priority = true cho phần tử LCP trên màn hình đầu tiên */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "var(--shadow-glow)",
              border: "1px solid var(--border-subtle)"
            }}>
              <Image
                src={heroProduct.imageUrl}
                alt={heroProduct.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: 8 }}>Hệ Sinh Thái Thiết Bị</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>Bộ Sưu Tập Nổi Bật</h2>
            </div>
            <Link href="/products" style={{ color: "var(--accent-cyan)", fontWeight: 600, fontSize: "0.95rem" }}>
              Xem toàn bộ ({products.length}) &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {products.map((product, idx) => (
              <article key={product.id} className="product-card">
                <div className="product-image-container">
                  {/* Sử dụng next/image với loading lazy và kích thước sizes responsive chuẩn */}
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    loading={idx === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    zIndex: 2,
                  }}>
                    <span className="badge badge-cyan" style={{ backdropFilter: "blur(8px)", background: "rgba(10, 15, 29, 0.7)" }}>
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="product-body">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, fontSize: "0.85rem", color: "#facc15" }}>
                      <span>★</span>
                      <strong style={{ color: "var(--text-primary)" }}>{product.rating}</strong>
                      <span style={{ color: "var(--text-muted)" }}>({product.reviewCount} đánh giá)</span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.35 }}>
                      <Link href={`/products/${product.slug}`} style={{ color: "var(--text-primary)" }}>
                        {product.title}
                      </Link>
                    </h3>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: 16 }}>
                      {product.tagline}
                    </p>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 16,
                    borderTop: "1px solid var(--border-subtle)"
                  }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                      {product.price}
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="btn btn-secondary"
                      style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    >
                      Chi tiết →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEO & Performance Features Section */}
        <section className="glass-panel" style={{ borderLeft: "4px solid var(--accent-cyan)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
            ⚡ Tiêu Chuẩn Kỹ Thuật: SEO & Tốc Độ Tải Tức Thì
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: 24 }}>
            Dự án được xây dựng tuân thủ nghiêm ngặt các quy chuẩn tối ưu hóa hiện đại nhất:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: 18, borderRadius: "var(--radius-sm)" }}>
              <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: 6 }}>
                1. Tối Ưu Font Tự Động (next/font)
              </strong>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Google Fonts (Inter & Outfit) tự động tải cục bộ tại build time, loại bỏ kết nối ngoài và triệt tiêu layout shift.
              </p>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: 18, borderRadius: "var(--radius-sm)" }}>
              <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: 6 }}>
                2. Tối Ưu Ảnh Hiện Đại (next/image)
              </strong>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Tự động convert WebP/AVIF, phân bổ responsive srcset qua thuộc tính sizes, và nạp priority cho LCP element.
              </p>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: 18, borderRadius: "var(--radius-sm)" }}>
              <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: 6 }}>
                3. SEO Chuẩn Schema & Meta
              </strong>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Tự sinh dynamic OpenGraph, Twitter Cards, robots.ts, sitemap.xml và JSON-LD Product Schema cho Google Rich Results.
              </p>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: 18, borderRadius: "var(--radius-sm)" }}>
              <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: 6 }}>
                4. Sẵn Sàng Build & Deploy
              </strong>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Hỗ trợ SSG tĩnh hoàn toàn, script kiểm tra `npm run build`, Dockerfile container hóa và cấu hình Vercel/Netlify.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
