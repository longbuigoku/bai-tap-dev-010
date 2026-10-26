import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Cấu hình static prerendering cho Next.js
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Tối ưu dynamic SEO Metadata cho từng sản phẩm riêng biệt
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
    };
  }

  return {
    title: `${product.title} - ${product.price}`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Zenith Tech`,
      description: product.tagline,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.imageUrl,
          width: 800,
          height: 600,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.tagline,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://next-speed-seo.vercel.app";

  // Schema Markup (JSON-LD) cho Product Rich Snippets của Google
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.imageUrl,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Zenith Tech",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      priceCurrency: "VND",
      price: product.price.replace(/[^\d]/g, ""),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Zenith Tech",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: "var(--text-secondary)" }}>Trang chủ</Link>
          <span>/</span>
          <Link href="/products" style={{ color: "var(--text-secondary)" }}>Sản phẩm</Link>
          <span>/</span>
          <span style={{ color: "var(--accent-cyan)" }}>{product.category}</span>
        </nav>

        {/* Product Showcase */}
        <div className="glass-panel" style={{ padding: "36px 32px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "flex-start"
          }}>
            {/* Optimized Product Image */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              background: "#0f172a"
            }}>
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Product Details & Specs */}
            <div>
              <div style={{ marginBottom: 12 }}>
                <span className="badge badge-cyan">{product.category}</span>
              </div>

              <h1 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: 12 }}>
                {product.title}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, color: "#facc15" }}>
                <span>★★★★★</span>
                <strong style={{ color: "var(--text-primary)" }}>{product.rating} / 5.0</strong>
                <span style={{ color: "var(--text-muted)" }}>({product.reviewCount} khách hàng hài lòng)</span>
              </div>

              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-cyan)", marginBottom: 20 }}>
                {product.price}
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 24 }}>
                {product.description}
              </p>

              {/* Key Features */}
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>Tính năng nổi bật</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <button className="btn btn-primary" style={{ flex: 1, minWidth: 200 }}>
                  Thêm Vào Giỏ Hàng
                </button>
                <Link href="/products" className="btn btn-secondary">
                  ← Xem thêm sản phẩm khác
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="glass-panel">
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 20 }}>Thông Số Kỹ Thuật Chi Tiết</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
            <tbody>
              {Object.entries(product.specs).map(([specKey, specVal], idx) => (
                <tr
                  key={specKey}
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    backgroundColor: idx % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "transparent",
                  }}
                >
                  <td style={{ padding: "14px 16px", color: "var(--text-muted)", width: "35%", fontWeight: 600 }}>
                    {specKey}
                  </td>
                  <td style={{ padding: "14px 16px", color: "var(--text-primary)" }}>
                    {specVal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
