import Link from "next/link";
import { getArticles } from "@/data/articles";

// Server Component (mặc định trong Next.js App Router)
// Có thể async và fetch dữ liệu trực tiếp từ nguồn backend mà không cần useEffect/useState
export default async function HomePage() {
  const articles = await getArticles();
  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      {/* Hero Section */}
      <section className="glass-panel" style={{ textAlign: "center", padding: "64px 24px", position: "relative" }}>
        <div style={{ marginBottom: 16 }}>
          <span className="component-badge badge-server">
            🔴 Tin Tức Trực Tuyến 24/7
          </span>
        </div>
        <h1 style={{ fontSize: "2.75rem", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Cập Nhật Tin Tức <br />
          <span style={{
            background: "var(--accent-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Nóng Hổi & Đa Chiều Mỗi Ngày
          </span>
        </h1>
        <p style={{ maxWidth: 640, margin: "0 auto 32px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Kênh thông tin thời sự, kinh tế số, công nghệ và đời sống xã hội cập nhật liên tục với độ chính xác cao.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/articles" className="btn btn-primary">
            Khám Phá Tất Cả Bản Tin →
          </Link>
          <a
            href="#categories-digest"
            className="btn btn-secondary"
          >
            📋 Chuyên Mục & Tiêu Điểm
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured-news">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Tiêu Điểm Báo Chí</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Những sự kiện và phân tích chuyên sâu được bạn đọc quan tâm nhất
            </p>
          </div>
          <Link href="/articles" style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", fontWeight: 600 }}>
            Xem toàn bộ tin tức &rarr;
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease, border-color 0.2s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{
                    fontSize: "0.75rem",
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: "rgba(99, 102, 241, 0.15)",
                    color: "var(--accent-blue)",
                    fontWeight: 600
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{article.readTime}</span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 8, lineHeight: 1.4 }}>
                  <Link href={`/articles/${article.slug}`} style={{ color: "var(--text-primary)" }}>
                    {article.title}
                  </Link>
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {article.summary}
                </p>
              </div>

              <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{article.publishedAt}</span>
                <Link
                  href={`/articles/${article.slug}`}
                  style={{ color: "var(--accent-cyan)", fontWeight: 600, fontSize: "0.85rem" }}
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial Perspectives & News Digest Section */}
      <section id="categories-digest" className="glass-panel" style={{ borderLeft: "4px solid var(--accent-cyan)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 800 }}>
              🌐 Góc Nhìn Thời Sự & Xu Hướng 2026
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: 4 }}>
              Tổng hợp phân tích chuyên sâu từ các phóng viên, chuyên gia đầu ngành trong và ngoài nước.
            </p>
          </div>
          <span style={{
            fontSize: "0.8rem",
            padding: "4px 12px",
            borderRadius: 9999,
            background: "rgba(56, 189, 248, 0.15)",
            color: "var(--accent-cyan)",
            fontWeight: 700
          }}>
            Bình Luận Chuyên Đề
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 28 }}>
          {/* Column 1: Tech & Economy Insights */}
          <div style={{
            background: "rgba(0, 0, 0, 0.25)",
            padding: 20,
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-subtle)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: "1.1rem" }}>💡</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Kinh Tế Số & Đổi Mới Sáng Tạo
              </h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 16 }}>
              Làn sóng thanh toán kỹ thuật số và trí tuệ nhân tạo đang định hình lại cấu trúc thị trường bán lẻ và chuỗi cung ứng toàn cầu.
            </p>
            <ul style={{ paddingLeft: 18, color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8 }}>
              <li>
                <strong>Tự động hóa vận hành</strong>: Doanh nghiệp vừa và nhỏ gia tăng năng lực cạnh tranh.
              </li>
              <li>
                <strong>Hạ tầng dữ liệu đám mây</strong>: Tăng cường bảo mật và chủ quyền số quốc gia.
              </li>
              <li>
                <strong>Dòng vốn FDI công nghệ</strong>: Đổ mạnh vào các trung tâm nghiên cứu và phát triển mới.
              </li>
            </ul>
          </div>

          {/* Column 2: Green Living & Sustainability */}
          <div style={{
            background: "rgba(0, 0, 0, 0.25)",
            padding: 20,
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-subtle)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: "1.1rem" }}>🌱</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Chuyển Dịch Xanh & Bền Vững
              </h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 16 }}>
              Cam kết Net Zero đang được hiện thực hóa qua các dự án năng lượng tái tạo và phương tiện giao thông không phát thải.
            </p>
            <ul style={{ paddingLeft: 18, color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8 }}>
              <li>
                <strong>Pin thể rắn thế hệ mới</strong>: Xóa bỏ rào cản về phạm vi di chuyển của xe điện.
              </li>
              <li>
                <strong>Năng lượng mặt trời áp mái</strong>: Trở thành tiêu chuẩn tại các khu đô thị thông minh.
              </li>
              <li>
                <strong>Kinh tế tuần hoàn</strong>: Tối ưu tái chế vật liệu bán dẫn và rác thải điện tử.
              </li>
            </ul>
          </div>
        </div>

        {/* Quick News Ticker / Key Updates */}
        <div style={{
          background: "rgba(56, 189, 248, 0.06)",
          padding: "16px 20px",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--badge-server-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: 8 }}>
              <span>⚡</span> <span>Bản tin 60 giây hôm nay</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: 4 }}>
              Hơn 50+ nguồn tin uy tín được tổng hợp và phân loại liên tục mỗi ngày tại NextNews.
            </p>
          </div>

          <Link href="/articles" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
            Đọc Ngay Danh Mục Tin →
          </Link>
        </div>
      </section>
    </div>
  );
}
