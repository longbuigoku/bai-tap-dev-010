# Next.js App Router Architecture Showcase

Dự án mẫu triển khai cấu trúc Next.js App Router chuẩn mực đáp ứng 3 yêu cầu cốt lõi:
1. **Dựng cấu trúc route cho app nhỏ (Home / List / Detail)**.
2. **Layout chung hợp lý (Root Layout, Header, Footer đồng bộ, persistent state)**.
3. **Đặt Server/Client Component đúng chỗ theo nguyên tắc RSC (React Server Components)**.

---

## 1. Cấu Trúc Thư Mục & Routes

```text
src/
├── app/
│   ├── layout.tsx                # Root Layout (Server Component) - Khung HTML, Header, Footer
│   ├── page.tsx                  # Home Route "/" (Server Component)
│   ├── globals.css               # Thiết kế Vanilla CSS Glassmorphism & Token màu
│   ├── not-found.tsx             # Trang 404 tùy biến
│   └── articles/
│       ├── page.tsx              # List Route "/articles" (Server Component)
│       └── [slug]/
│           └── page.tsx          # Detail Route "/articles/[slug]" (Server Component)
├── components/
│   ├── Header.tsx                # Client Component ('use client') - Dùng usePathname() để active link
│   ├── Footer.tsx                # Server Component (Static UI, 0kb client JS)
│   ├── ArticleSearchList.tsx     # Client Component ('use client') - Tìm kiếm & lọc theo danh mục
│   └── ArticleActions.tsx        # Client Component ('use client') - Nút Like tương tác & Copy Share Link
└── data/
    └── articles.ts               # Mock data & Server Fetching Helper
```

---

## 2. Phân Bổ Server vs Client Component Chuẩn Mực

| Thành phần | Loại Component | Lý do & Vai trò |
| :--- | :---: | :--- |
| [RootLayout](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/app/layout.tsx) | **Server** | Giữ khung HTML tĩnh, font chữ, không re-render khi chuyển trang con. |
| [HomePage](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/app/page.tsx) | **Server** | Fetch trực tiếp danh sách bài viết nổi bật, SEO tốt, tải trang tức thì. |
| [ArticlesListPage](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/app/articles/page.tsx) | **Server** | Tải trước toàn bộ bài viết từ backend/data layer ở server. |
| [ArticleDetailPage](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/app/articles/%5Bslug%5D/page.tsx) | **Server** | Dynamic route `[slug]`, tạo `generateMetadata` và `generateStaticParams`. |
| [Footer](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/components/Footer.tsx) | **Server** | Nội dung tĩnh, không tốn thêm JavaScript bundle tải về trình duyệt. |
| [Header](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/components/Header.tsx) | **Client** | Cần hook `usePathname()` để phát hiện và làm sáng tab navigation đang truy cập. |
| [ArticleSearchList](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/components/ArticleSearchList.tsx) | **Client** | Dùng `useState`, `onChange` để lọc và tìm kiếm bài viết tức thì theo từ khóa. |
| [ArticleActions](file:///Users/gokudev/Desktop/bai-tap-dev-010/src/components/ArticleActions.tsx) | **Client** | Bắt sự kiện `onClick` để tăng lượt thích và tương tác với Web API `navigator.clipboard`. |

---

## 3. Cách Chạy Dự Án

```bash
# Cài đặt thư viện (nếu cần)
npm install

# Khởi chạy môi trường phát triển
npm run dev

# Mở trình duyệt tại: http://localhost:3000
```
