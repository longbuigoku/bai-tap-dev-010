"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Trang Chủ" },
    { href: "/products", label: "Sản Phẩm" },
    { href: "/about", label: "Về Zenith" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-logo" aria-label="Zenith Tech Trang Chủ">
          <div className="brand-icon">Z</div>
          <span>Zenith<span style={{ color: "var(--accent-cyan)" }}>Tech</span></span>
        </Link>

        <nav className="nav-links" aria-label="Điều hướng chính">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-item ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
