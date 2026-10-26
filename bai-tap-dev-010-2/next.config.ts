import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tối ưu nén response gzip/brotli cho tốc độ tải trang cao
  compress: true,

  // Tối ưu xử lý và chuyển đổi định dạng ảnh (WebP / AVIF hiện đại)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Tối ưu build & render
  reactStrictMode: true,
  poweredByHeader: false, // Ẩn X-Powered-By bảo mật và giảm kích thước HTTP header
};

export default nextConfig;
