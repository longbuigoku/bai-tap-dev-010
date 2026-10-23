import Link from "next/link";

// Server Component (Không có 'use client' directive)
export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div>
          <p style={{ fontWeight: 600, color: "var(--text-primary)" }}>NextNews 24/7 Portal</p>
          <p style={{ fontSize: "0.85rem", marginTop: 4 }}>
            Cổng thông tin tin tức thời sự, công nghệ, kinh tế với kiến trúc App Router tối ưu hiệu năng.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="component-badge badge-server" title="Cập nhật trực tiếp 24/7">
            🟢 Đang phát sóng trực tiếp
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {currentYear} NextNews 24/7. Mọi quyền được bảo lưu.
          </span>
        </div>
      </div>
    </footer>
  );
}
