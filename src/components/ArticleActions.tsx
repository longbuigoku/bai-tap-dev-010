"use client";

import { useState } from "react";

interface ArticleActionsProps {
  initialLikes?: number;
  title: string;
}

export default function ArticleActions({ initialLikes = 12, title }: ArticleActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Failed to copy URL:", err);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        padding: "16px 20px",
        background: "rgba(0, 0, 0, 0.2)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        marginTop: 32,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={handleLike}
          className="btn"
          style={{
            background: hasLiked ? "rgba(239, 68, 68, 0.2)" : "rgba(255, 255, 255, 0.08)",
            color: hasLiked ? "#f87171" : "var(--text-primary)",
            border: hasLiked ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid var(--border-subtle)",
          }}
        >
          {hasLiked ? "❤️ Đã Thích" : "🤍 Thích bài viết"} ({likes})
        </button>

        <button
          onClick={handleShare}
          className="btn btn-secondary"
        >
          {copied ? "✓ Đã copy link!" : "🔗 Chia sẻ"}
        </button>
      </div>

      <span className="component-badge badge-client">
        💬 Tương Tác Bạn Đọc
      </span>
    </div>
  );
}
