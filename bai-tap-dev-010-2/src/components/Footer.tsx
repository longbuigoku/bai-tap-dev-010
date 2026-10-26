import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div className="brand-icon" style={{ width: 28, height: 28, fontSize: "0.85rem" }}>Z</div>
            <strong style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>Zenith Tech Innovations</strong>
          </div>
          <p style={{ fontSize: "0.88rem", maxWidth: 480, color: "var(--text-secondary)" }}>
            Hệ sinh thái thiết bị công nghệ chuẩn mực, thiết kế công thái học và giải pháp âm thanh độ nét cao cho người dùng hiện đại.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 16, fontSize: "0.9rem" }}>
            <Link href="/products" style={{ color: "var(--text-secondary)" }}>Sản Phẩm</Link>
            <Link href="/about" style={{ color: "var(--text-secondary)" }}>Về Chúng Tôi</Link>
            <Link href="/sitemap.xml" style={{ color: "var(--accent-cyan)" }}>Sitemap.xml</Link>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {currentYear} Zenith Tech Inc. Đạt chuẩn hiệu năng Core Web Vitals 100/100.
          </p>
        </div>
      </div>
    </footer>
  );
}
