export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  rating: number;
  reviewCount: number;
  category: string;
  imageUrl: string;
  imageAlt: string;
  blurDataURL?: string;
  features: string[];
  specs: Record<string, string>;
  updatedAt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "aurora-wireless-headphones",
    title: "Tai Nghe Không Dây Chống Ồn Aurora Pro",
    tagline: "Âm thanh Hi-Res Audio không dây đỉnh cao, chống ồn chủ động 45dB",
    description: "Aurora Pro mang đến không gian âm nhạc thuần khiết với màng loa graphene 40mm, chống ồn chủ động thích ứng thế hệ mới và thời lượng pin vượt trội lên tới 60 giờ nghe liên tục.",
    price: "4.890.000 ₫",
    rating: 4.9,
    reviewCount: 428,
    category: "Âm Thanh Cao Cấp",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Tai nghe chống ồn không dây Aurora Pro cao cấp màu đen nhám",
    features: [
      "Chống ồn chủ động ANC Hybrid lên đến 45dB",
      "Codec giải mã LDAC & Hi-Res Wireless",
      "Thời lượng pin 60 giờ, sạc nhanh 10 phút dùng 5 giờ",
      "Kết nối đồng thời 2 thiết bị Bluetooth 5.4",
    ],
    specs: {
      "Trọng lượng": "248g",
      "Thời lượng pin": "60 giờ (Tắt ANC), 42 giờ (Bật ANC)",
      "Kháng nước": "IPX4 chống mồ hôi & mưa nhẹ",
      "Bảo hành": "12 tháng chính hãng",
    },
    updatedAt: "2026-10-25",
  },
  {
    id: "2",
    slug: "lunar-smartwatch-titanium",
    title: "Đồng Hồ Thông Minh Lunar Titanium Ultra",
    tagline: "Vỏ Titanium nguyên khối, màn hình Sapphire AMOLED siêu sáng 3000 nits",
    description: "Thiết kế thể thao sang trọng với độ bền chuẩn quân đội, GPS đa băng tần kép chuẩn xác và cảm biến sinh trắc học theo dõi sức khỏe chuyên sâu 24/7.",
    price: "8.490.000 ₫",
    rating: 4.8,
    reviewCount: 312,
    category: "Thiết Bị Đeo Thông Minh",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Đồng hồ thông minh Lunar Titanium Ultra viền titan kim loại",
    features: [
      "Vỏ hợp kim Titanium hàng không và kính Sapphire chống trầy",
      "Màn hình AMOLED Always-On độ sáng cực đại 3.000 nits",
      "Đo nồng độ oxy trong máu SpO2, điện tâm đồ ECG và giấc ngủ sâu",
      "Kháng nước 10 ATM lặn sâu tới 100m",
    ],
    specs: {
      "Kích thước": "46mm x 12.5mm",
      "Thời lượng pin": "14 ngày sử dụng tiêu chuẩn",
      "Hệ điều hành": "Tương thích cả iOS và Android",
      "Bảo hành": "24 tháng chính hãng",
    },
    updatedAt: "2026-10-24",
  },
  {
    id: "3",
    slug: "prism-mechanical-keyboard",
    title: "Bàn Phím Cơ Không Dây Prism RGB Custom",
    tagline: "Switch cơ học bôi trơn sẵn, cấu trúc Gasket Mount êm ái đầm tay",
    description: "Bàn phím cơ layout 75% gọn gàng, keycap PBT Doubleshot bền bỉ, hỗ trợ Hot-swap 5-pin và kết nối 3 chế độ (Bluetooth 5.3, 2.4Ghz, Type-C).",
    price: "2.350.000 ₫",
    rating: 4.9,
    reviewCount: 560,
    category: "Phụ Kiện Công Thái Học",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Bàn phím cơ không dây Prism RGB đèn nền LED rực rỡ",
    features: [
      "Thiết kế Gasket Mount tiêu âm 5 lớp cho âm gõ 'thock' đầm ấm",
      "Mạch xuôi Hot-swap tương thích 99% loại switch trên thị trường",
      "Keycap PBT Cherry Profile chống mòn bóng vân tay",
      "Pin dung lượng lớn 4000mAh cho thời gian làm việc tới 200 giờ",
    ],
    specs: {
      "Số phím": "82 phím (Layout 75%)",
      "Kết nối": "Type-C / 2.4G Wireless / Bluetooth",
      "Đèn nền": "RGB 16.8 triệu màu với 20 hiệu ứng",
      "Bảo hành": "12 tháng đổi mới",
    },
    updatedAt: "2026-10-23",
  },
  {
    id: "4",
    slug: "zenith-ultralight-wireless-mouse",
    title: "Chuột Gaming Không Dây Zenith Ultralight 49g",
    tagline: "Trọng lượng siêu nhẹ 49g, cảm biến quang học 30.000 DPI siêu nhạy",
    description: "Cảm nhận sự linh hoạt tuyệt đối trong từng thao tác với mắt đọc quang học chuẩn esports, polling rate không dây 4000Hz và thiết kế công thái học đối xứng vừa vặn lòng bàn tay.",
    price: "1.990.000 ₫",
    rating: 4.7,
    reviewCount: 289,
    category: "Phụ Kiện Công Thái Học",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Chuột không dây công thái học Zenith Ultralight màu trắng tối giản",
    features: [
      "Khung vỏ siêu nhẹ chỉ 49 gram không cần đục lỗ",
      "Mắt đọc PAW3395 độ chính xác 30.000 DPI và 750 IPS",
      "Công nghệ truyền tín hiệu không dây không độ trễ Sub-1ms",
      "Con lăn bọc cao su chống trượt và feet chuột 100% PTFE",
    ],
    specs: {
      "Trọng lượng": "49g",
      "Polling rate": "4000Hz (0.25ms response time)",
      "Pin": "80 giờ chơi liên tục",
      "Bảo hành": "24 tháng chính hãng",
    },
    updatedAt: "2026-10-22",
  },
];

export async function getProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}
