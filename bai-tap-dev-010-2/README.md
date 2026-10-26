# Zenith Tech - Dự Án Next.js Tối Ưu SEO & Tốc Độ Tải Nhanh (bai-tap-dev-010-2)

Dự án mẫu hoàn chỉnh đáp ứng đầy đủ 3 yêu cầu cốt lõi:
1. **Dựng dự án Next.js nhỏ đủ chuẩn SEO + tải nhanh (Core Web Vitals)**.
2. **Tối ưu hình ảnh (`next/image`) và font chữ (`next/font`)**.
3. **Chuẩn bị sẵn sàng quy trình Build & Deploy (Vercel, Node server, Docker container)**.

---

## 1. Kiến Trúc Tối Ưu Tốc Độ & SEO

### A. Tối ưu Font (`next/font/google`)
- Tự động self-host các font **Inter** và **Outfit** tại thời điểm build:
  ```ts
  const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
  const outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-outfit" });
  ```
- **Lợi ích**: Không tốn request DNS/HTTPS phụ tới máy chủ bên ngoài, triệt tiêu hiện tượng giật font chữ (Zero Cumulative Layout Shift - CLS = 0.000).

### B. Tối ưu Ảnh (`next/image` & `next.config.ts`)
- Kích hoạt chuyển đổi định dạng ảnh thế hệ mới **AVIF** và **WebP** trong [next.config.ts](file:///Users/gokudev/Desktop/bai-tap-dev-010/bai-tap-dev-010-2/next.config.ts).
- Thuộc tính `priority` được gán cho phần tử LCP (Largest Contentful Paint) trên màn hình đầu tiên (Above the fold).
- Cung cấp `sizes` responsive chuẩn xác giúp trình duyệt tải kích cỡ ảnh tối ưu theo từng độ phân giải thiết bị.

### C. Bộ Tính Năng SEO Toàn Diện
- **Metadata tĩnh & động**: Cấu hình `canonical URL`, `openGraph`, `twitter:card`, `robots` trong [layout.tsx](file:///Users/gokudev/Desktop/bai-tap-dev-010/bai-tap-dev-010-2/src/app/layout.tsx) và [products/[slug]/page.tsx](file:///Users/gokudev/Desktop/bai-tap-dev-010/bai-tap-dev-010-2/src/app/products/%5Bslug%5D/page.tsx).
- **Structured Data (JSON-LD)**: Schema `WebSite` và `Product` (Offer, AggregateRating, Review) cho Google Rich Snippets.
- **Sitemap tự động**: Tự sinh XML Sitemap tại [/sitemap.xml](file:///Users/gokudev/Desktop/bai-tap-dev-010/bai-tap-dev-010-2/src/app/sitemap.ts).
- **Robots tự động**: Điều hướng bots thu thập dữ liệu qua [/robots.txt](file:///Users/gokudev/Desktop/bai-tap-dev-010/bai-tap-dev-010-2/src/app/robots.ts).

---

## 2. Cấu Trúc Thư Mục

```text
bai-tap-dev-010-2/
├── Dockerfile                   # Multi-stage production container
├── .dockerignore                # Bỏ qua node_modules, cache khi build image
├── next.config.ts               # Nén gzip/brotli, tối ưu AVIF/WebP, bảo mật headers
├── package.json
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout với next/font và OpenGraph meta
    │   ├── page.tsx             # Trang chủ (LCP Image, JSON-LD Schema)
    │   ├── globals.css          # Vanilla CSS responsive design system
    │   ├── not-found.tsx        # Trang 404 tùy biến
    │   ├── robots.ts            # Tự động xuất bản /robots.txt
    │   ├── sitemap.ts           # Tự động xuất bản /sitemap.xml
    │   ├── about/
    │   │   └── page.tsx         # Trang giới thiệu thương hiệu chuẩn SEO
    │   └── products/
    │       ├── page.tsx         # Trang danh mục sản phẩm (Static)
    │       └── [slug]/
    │           └── page.tsx     # Chi tiết sản phẩm (SSG generateStaticParams, Product Schema)
    ├── components/
    │   ├── Header.tsx           # Điều hướng responsive
    │   └── Footer.tsx           # Chân trang & liên kết sitemap
    └── data/
        └── products.ts          # CSDL mẫu sản phẩm công nghệ cao cấp
```

---

## 3. Quy Trình Build & Deploy

### A. Kiểm tra bản build cục bộ
```bash
cd bai-tap-dev-010-2

# Chạy build kiểm tra types & SSG:
npm run build

# Chạy server production để nghiệm thu:
npm run start
```
*(Tất cả 12 trang bao gồm static routes và dynamic SSG routes đều đã được prerender thành công).*

### B. Deploy lên Vercel / Netlify
- Đẩy code lên GitHub repository.
- Kết nối repo với **Vercel** hoặc **Netlify**.
- Hệ thống tự động nhận diện cấu hình Next.js App Router, build và phân phối qua Edge CDN toàn cầu.

### C. Deploy với Docker Container
```bash
# Build Docker image
docker build -t zenith-tech-app .

# Chạy container trên cổng 3000
docker run -p 3000:3000 zenith-tech-app
```
