import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Danh Sách Sản Phẩm Công Nghệ | Zenith Tech",
  description: "Khám phá danh mục thiết bị âm thanh Hi-Res, đồng hồ thông minh titanium và phụ kiện công thái học cao cấp với chuẩn SEO và hình ảnh tối ưu.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Danh Sách Sản Phẩm Công Nghệ | Zenith Tech",
    description: "Khám phá danh mục thiết bị âm thanh Hi-Res, đồng hồ thông minh titanium và phụ kiện công nghệ cao cấp.",
    url: "/products",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <span className="badge badge-cyan" style={{ marginBottom: 12 }}>
          Kho Sản Phẩm Chính Hãng
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 8 }}>
          Tất Cả Thiết Bị Công Nghệ
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: 640 }}>
          Trải nghiệm các sản phẩm được tối ưu hoàn hảo từ phần cứng, âm học đến hiệu năng sử dụng lâu dài.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-container">
              {/* next/image tối ưu kích thước và lazy load */}
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.35 }}>
                  <Link href={`/products/${product.slug}`} style={{ color: "var(--text-primary)" }}>
                    {product.title}
                  </Link>
                </h2>

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
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
