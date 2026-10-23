"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles (List)" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="site-logo">
          <div className="site-logo-icon">N</div>
          <span>Next<span style={{ color: "var(--accent-cyan)" }}>News</span> 24/7</span>
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label === "Articles (List)" ? "Tin Tức Mới" : "Trang Chủ"}
              </Link>
            );
          })}
          <span className="component-badge badge-client" title="Tin nhanh trực tiếp">
            ⚡ Tin Nóng
          </span>
        </nav>
      </div>
    </header>
  );
}
