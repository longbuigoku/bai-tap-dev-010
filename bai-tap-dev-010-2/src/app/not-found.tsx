import Link from "next/link";

export default function NotFound() {
  return (
    <div className="glass-panel" style={{ textAlign: "center", padding: "64px 24px", maxWidth: 560, margin: "40px auto" }}>
      <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "var(--accent-cyan)", marginBottom: 12 }}>
        404
      </div>
      <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 12 }}>
        Không Tìm Thấy Trang Hoặc Sản Phẩm
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: 28, fontSize: "0.95rem" }}>
        Địa chỉ liên kết bạn đang tìm kiếm có thể đã thay đổi hoặc không tồn tại trên hệ thống Zenith Tech.
      </p>
      <Link href="/products" className="btn btn-primary">
        ← Xem Danh Sách Sản Phẩm
      </Link>
    </div>
  );
}
