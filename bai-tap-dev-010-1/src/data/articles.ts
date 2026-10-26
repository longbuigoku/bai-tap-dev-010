export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  views: number;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "dot-pha-tri-tue-nhan-tao-the-he-moi-2026",
    title: "Đột phá trí tuệ nhân tạo 2026: Trợ lý AI thế hệ mới làm thay đổi ngành công nghệ",
    summary: "Các mô hình đa phương thức tự động hóa quy trình phức tạp với độ chính xác cao và mức tiêu thụ năng lượng giảm 40%.",
    content: `Ngành công nghệ toàn cầu năm 2026 tiếp tục chứng kiến sự bùng nổ mạnh mẽ của các hệ thống AI tự hành (Agentic AI).

Không còn dừng lại ở mức trả lời văn bản đơn giản, các hệ thống AI mới có khả năng:
- Tự động lập kế hoạch, phân tích mã nguồn và kiểm thử hệ thống phần mềm lớn.
- Khả năng xử lý đa phương thức thời gian thực (Real-time Multimodal) gồm âm thanh, hình ảnh và video với độ trễ cực thấp.
- Tiết kiệm hơn 40% điện năng tiêu thụ nhờ các kiến trúc chip bán dẫn chuyên dụng thế hệ mới.

Các chuyên gia nhận định đây là bước ngoặt giúp doanh nghiệp số hóa toàn diện quy trình vận hành và nâng cao năng suất lao động lên gấp nhiều lần.`,
    category: "Công Nghệ",
    readTime: "4 phút",
    publishedAt: "23 Th10, 2026",
    views: 3520,
    featured: true,
  },
  {
    id: "2",
    slug: "kinh-te-so-viet-nam-tang-truong-an-tuong",
    title: "Kinh tế số Việt Nam ghi nhận mức tăng trưởng hai con số trong năm 2026",
    summary: "Thương mại điện tử, thanh toán không tiền mặt và hạ tầng dữ liệu đám mây tiếp tục là động lực chính thúc đẩy nền kinh tế số.",
    content: `Báo cáo mới nhất từ các tổ chức kinh tế khu vực cho thấy kinh tế số Việt Nam tiếp tục duy trì đà tăng trưởng ấn tượng, đóng góp ngày càng lớn vào tổng sản phẩm quốc nội (GDP).

Các điểm nhấn đáng chú ý:
1. Thương mại điện tử xuyên biên giới ghi nhận mức tăng trưởng hơn 22% so với cùng kỳ.
2. Tỷ lệ thanh toán không tiền mặt đạt mốc trên 85% tại các đô thị lớn nhờ sự phổ cập của mã QR và ví điện tử tích hợp.
3. Việc hoàn thiện các trung tâm dữ liệu (Data Center) đạt chuẩn quốc tế giúp thu hút vốn đầu tư FDI mạnh mẽ từ các tập đoàn công nghệ hàng đầu thế giới.`,
    category: "Kinh Tế",
    readTime: "5 phút",
    publishedAt: "22 Th10, 2026",
    views: 2410,
    featured: true,
  },
  {
    id: "3",
    slug: "xu-huong-xe-dien-va-nang-luong-tai-tao",
    title: "Làn sóng xe điện thông minh và bước chuyển mình mạnh mẽ của năng lượng tái tạo",
    summary: "Công nghệ pin thể rắn thương mại hóa giúp tăng gấp đôi quãng đường di chuyển và rút ngắn thời gian sạc xuống còn 10 phút.",
    content: `Sự phổ cập của các dòng xe điện thế hệ mới trang bị pin thể rắn (Solid-State Battery) đang tạo nên cuộc cách mạng trong giao thông xanh.

Những cải tiến đột phá:
- Quãng đường di chuyển sau một lần sạc đạt hơn 800km trong điều kiện vận hành thực tế.
- Tốc độ sạc siêu nhanh từ 10% lên 80% chỉ trong vòng chưa đầy 10 phút.
- Mạng lưới trạm sạc năng lượng mặt trời thông minh phủ khắp các tuyến cao tốc huyết mạch.

Chính sách hỗ trợ từ các quốc gia cùng ý thức bảo vệ môi trường ngày càng cao đang đẩy nhanh quá trình chuyển đổi từ xe động cơ đốt trong sang phương tiện giao thông xanh.`,
    category: "Môi Trường",
    readTime: "4 phút",
    publishedAt: "21 Th10, 2026",
    views: 1890,
    featured: false,
  },
  {
    id: "4",
    slug: "kham-pha-vu-tru-va-kinh-thien-van-the-he-moi",
    title: "Kính thiên văn thế hệ mới ghi lại hình ảnh rõ nét chưa từng có về các hành tinh ngoài Hệ Mặt Trời",
    summary: "Dữ liệu quang phổ mới mở ra hy vọng tìm kiếm dấu hiệu sự sống và nguồn nước tại các hệ sao lân cận.",
    content: `Cơ quan vũ trụ quốc tế vừa công bố loạt ảnh chụp hồng ngoại độ phân giải cực cao từ hệ thống kính thiên văn không gian mới.

Các phát hiện quan trọng:
- Xác định được khí quyển chứa hơi nước và methane trên hai hành tinh thuộc vùng có thể sống được (Habitable Zone).
- Bản đồ nhiệt bề mặt cho thấy chu kỳ thời tiết và sự tồn tại của các đại dương lỏng tiềm năng.
- Các nhà thiên văn học đang tiếp tục phân tích dữ liệu chuyên sâu để kiểm chứng các dấu hiệu sinh học (biosignatures).`,
    category: "Khoa Học",
    readTime: "6 phút",
    publishedAt: "19 Th10, 2026",
    views: 2950,
    featured: true,
  },
  {
    id: "5",
    slug: "cong-nghe-y-te-chinh-xac-chua-benh-ca-nhan-hoa",
    title: "Y học chính xác: Ứng dụng giải mã gen cá nhân hóa trong điều trị bệnh nan y",
    summary: "Liệu pháp điều trị trúng đích theo bản đồ gen giúp nâng cao tỷ lệ hồi phục và giảm tối đa tác dụng phụ.",
    content: `Ngành y tế đang bước vào kỷ nguyên điều trị cá nhân hóa nhờ chi phí giải mã bộ gen giảm mạnh và sự hỗ trợ của trí tuệ nhân tạo.

Lợi ích của y học chính xác:
- Phác đồ điều trị được thiết kế riêng biệt cho từng bệnh nhân dựa trên đặc điểm di truyền.
- Phát hiện sớm các nguy cơ đột biến trước khi bệnh khởi phát nhiều năm.
- Giảm thiểu đáng kể các thử nghiệm thuốc không hiệu quả và tối ưu hóa chi phí điều trị lâu dài.`,
    category: "Sức Khỏe",
    readTime: "5 phút",
    publishedAt: "18 Th10, 2026",
    views: 1670,
    featured: false,
  },
];

export async function getArticles(): Promise<Article[]> {
  return ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return ARTICLES.find((item) => item.slug === slug);
}
