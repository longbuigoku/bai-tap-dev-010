import type { Metadata } from "next";
import { getArticles } from "@/data/articles";
import ArticleSearchList from "@/components/ArticleSearchList";

export const metadata: Metadata = {
  title: "Bản Tin Thời Sự & Chuyên Mục | NextNews 24/7",
  description: "Cập nhật các bản tin mới nhất về công nghệ, kinh tế, môi trường và khoa học.",
};

// Server Component: Giữ vai trò nạp dữ liệu từ data source và chuyển giao dữ liệu xuống cho Client Component
export default async function ArticlesListPage() {
  const articles = await getArticles();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Header section của trang List */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ marginBottom: 8 }}>
            <span className="component-badge badge-server">
              📰 Kho Bản Tin Tổng Hợp
            </span>
          </div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800 }}>Tất Cả Bản Tin</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: 4 }}>
            Theo dõi diễn biến sự kiện trong và ngoài nước với bộ lọc theo chuyên mục và tìm kiếm nhanh.
          </p>
        </div>
      </div>

      {/* Client Component tương tác: Search, Filter theo Category */}
      <ArticleSearchList initialArticles={articles} />
    </div>
  );
}
