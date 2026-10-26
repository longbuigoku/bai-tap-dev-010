import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về Zenith Tech | Đổi Mới & Chuẩn Mực Hiệu Năng",
  description: "Tìm hiểu sứ mệnh kiến tạo các sản phẩm công nghệ cao cấp và văn hóa tối ưu tốc độ người dùng của Zenith Tech.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 840, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <span className="badge badge-purple" style={{ marginBottom: 12 }}>
          Câu Chuyện Thương Hiệu
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12 }}>
          Định Hình Tiêu Chuẩn Công Nghệ Mới
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Zenith Tech khởi đầu với niềm đam mê mang đến những thiết bị điện tử có thiết kế tinh xảo, chất âm chính xác và sự tiện dụng công thái học cao nhất cho người dùng.
        </p>
      </div>

      <div className="glass-panel" style={{ lineHeight: 1.8, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 20 }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Triết Lý Phát Triển: Tốc Độ & Trải Nghiệm
        </h2>
        <p>
          Không chỉ dừng lại ở phần cứng, mọi nền tảng số của Zenith Tech đều được đầu tư tối ưu kỹ thuật sâu rộng: từ việc loại bỏ hoàn toàn render blocking fonts với <code>next/font</code>, tự động phân phối hình ảnh chuẩn nén hiện đại WebP/AVIF qua <code>next/image</code>, cho đến việc cung cấp dữ liệu cấu trúc Schema giúp máy tìm kiếm hiểu sâu về sản phẩm.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 12
        }}>
          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: 20, borderRadius: "var(--radius-sm)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-cyan)" }}>99.9%</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Khách Hàng Hài Lòng</div>
          </div>
          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: 20, borderRadius: "var(--radius-sm)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-cyan)" }}>100/100</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Google PageSpeed</div>
          </div>
          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: 20, borderRadius: "var(--radius-sm)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-cyan)" }}>24/7</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Hỗ Trợ Kỹ Thuật</div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", paddingTop: 16 }}>
        <Link href="/products" className="btn btn-primary">
          Khám Phá Các Dòng Sản Phẩm →
        </Link>
      </div>
    </div>
  );
}
