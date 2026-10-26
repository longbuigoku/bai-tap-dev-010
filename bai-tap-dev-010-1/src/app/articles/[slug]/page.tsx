import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, ARTICLES } from "@/data/articles";
import ArticleActions from "@/components/ArticleActions";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Cấu hình blocking route cho Next.js 16 App Router
export const instant = false;

// Dynamic SEO Metadata từ Server Component
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  return {
    title: `${article.title} | NextApp Hub`,
    description: article.summary,
  };
}

// Generate static params cho build time optimization
export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Server Component cho trang chi tiết
export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article style={{ maxWidth: 840, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Breadcrumb & Navigation */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Link
          href="/articles"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--accent-cyan)",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          ← Quay lại mục tin tức
        </Link>

        <span className="component-badge badge-server">
          📰 Bản Tin Đã Xác Minh
        </span>
      </div>

      {/* Article Header */}
      <header className="glass-panel">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{
            fontSize: "0.8rem",
            padding: "4px 10px",
            borderRadius: 6,
            background: "rgba(99, 102, 241, 0.2)",
            color: "var(--accent-blue)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            {article.category}
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            {article.publishedAt} • {article.readTime} đọc
          </span>
        </div>

        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>
          {article.title}
        </h1>

        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6 }}>
          {article.summary}
        </p>
      </header>

      {/* Article Body Content */}
      <section className="glass-panel" style={{ lineHeight: 1.8, fontSize: "1.05rem", color: "#e2e8f0" }}>
        <div style={{ whiteSpace: "pre-line" }}>
          {article.content}
        </div>

        {/* Client Component: tương tác Like / Share */}
        <ArticleActions title={article.title} />
      </section>
    </article>
  );
}
