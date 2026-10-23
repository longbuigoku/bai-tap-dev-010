import Link from "next/link";

export default function NotFound() {
  return (
    <div className="glass-panel" style={{ textAlign: "center", padding: "64px 24px", maxWidth: 600, margin: "40px auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16 }}>404 - Không Tìm Thấy Bài Viết</h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
        Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.
      </p>
      <Link href="/articles" className="btn btn-primary">
        ← Về danh sách bài viết
      </Link>
    </div>
  );
}
