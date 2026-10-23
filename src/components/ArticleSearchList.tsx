"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleSearchListProps {
  initialArticles: Article[];
}

export default function ArticleSearchList({ initialArticles }: ArticleSearchListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(initialArticles.map((a) => a.category)))];

  const filteredArticles = initialArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "ALL" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Controls Container: Search Input & Category Pills */}
      <div className="glass-panel" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <label htmlFor="search-input" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
            Tìm kiếm tin tức & Lọc theo chuyên mục
          </label>
          <span className="component-badge badge-client">
            🔍 Bộ Lọc Thông Minh
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tiêu đề hoặc nội dung tóm tắt bản tin..."
            style={{
              flex: 1,
              minWidth: 260,
              padding: "12px 16px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              outline: "none",
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="btn btn-secondary"
              style={{ padding: "8px 16px" }}
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "6px 14px",
                borderRadius: 9999,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                backgroundColor: selectedCategory === cat ? "var(--accent-blue)" : "rgba(255, 255, 255, 0.06)",
                color: selectedCategory === cat ? "#ffffff" : "var(--text-secondary)",
              }}
            >
              {cat === "ALL" ? "Tất cả" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: 16, color: "var(--text-muted)", fontSize: "0.9rem" }}>
        Hiển thị {filteredArticles.length} / {initialArticles.length} bài viết
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: "center", padding: "48px 24px" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            Không tìm thấy bài viết nào phù hợp với &quot;{searchTerm}&quot;.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "var(--accent-cyan)",
                    fontWeight: 600,
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    👁️ {article.views} lượt xem
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 10 }}>
                  <Link href={`/articles/${article.slug}`} style={{ color: "var(--text-primary)" }}>
                    {article.title}
                  </Link>
                </h3>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {article.summary}
                </p>
              </div>

              <div style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {article.publishedAt} • {article.readTime}
                </span>
                <Link
                  href={`/articles/${article.slug}`}
                  className="btn btn-secondary"
                  style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                >
                  Chi tiết →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
