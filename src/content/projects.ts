export const projects = [
  {
    slug: "operations-platform",
    field: {
      vi: "Technology & Software",
      en: "Technology & Software",
    },
    role: {
      vi: "Thiết kế và phát triển",
      en: "Design and development",
    },
    title: {
      vi: "Nền tảng điều hành nội bộ",
      en: "Internal operations platform",
    },
    excerpt: {
      vi: "Hệ thống hỗ trợ đội ngũ theo dõi công việc, dữ liệu vận hành và quy trình phối hợp giữa các bộ phận.",
      en: "A system that helps teams track work, operating data and coordination across departments.",
    },
    body: {
      vi: "Dự án tập trung vào việc số hóa quy trình điều hành thay vì tạo thêm một công cụ rời rạc. VIA Global đảm nhận khảo sát nhu cầu, thiết kế thông tin, phát triển nền tảng và bàn giao quy trình sử dụng. Sản phẩm được xây dựng theo module để doanh nghiệp có thể mở rộng từng phần.",
      en: "The work focused on digitizing operating process rather than adding another isolated tool. VIA Global handled discovery, information design, platform development and handover of the usage process. The product was built in modules so the organization can expand in stages.",
    },
    accent: "navy",
    note: {
      vi: "Dự án triển khai thực tế / năng lực nội bộ. Vai trò: thiết kế, phát triển và bàn giao.",
      en: "Implemented case / internal capability project. Role: design, development and handover.",
    },
  },
  {
    slug: "cloud-foundation",
    field: {
      vi: "Cloud & Digital Infrastructure",
      en: "Cloud & Digital Infrastructure",
    },
    role: {
      vi: "Kiến trúc và triển khai hạ tầng",
      en: "Infrastructure architecture and delivery",
    },
    title: {
      vi: "Nền tảng Cloud cho hệ thống trực tuyến",
      en: "Cloud foundation for online systems",
    },
    excerpt: {
      vi: "Thiết lập kiến trúc Cloud, sao lưu và giám sát nhằm bảo đảm hệ thống trực tuyến vận hành ổn định.",
      en: "Cloud architecture, backup and monitoring designed to keep online systems stable.",
    },
    body: {
      vi: "Hạng mục tập trung vào nền tảng vận hành: phân tách môi trường, chính sách sao lưu, quan sát hệ thống và quy trình xử lý sự cố. VIA Global đóng vai trò tư vấn kiến trúc và triển khai, với ưu tiên hàng đầu là tính rõ ràng và khả năng kiểm soát lâu dài.",
      en: "The engagement focused on the operating foundation: environment separation, backup policy, observability and incident handling. VIA Global acted as architecture advisor and implementer, with clarity and long-term control as the first priorities.",
    },
    accent: "blue",
    note: {
      vi: "Mô hình triển khai hạ tầng. Vai trò: tư vấn kiến trúc và triển khai.",
      en: "Infrastructure implementation model. Role: architecture advisory and delivery.",
    },
  },
  {
    slug: "content-os",
    field: {
      vi: "Digital Media & Communication",
      en: "Digital Media & Communication",
    },
    role: {
      vi: "Xây dựng nền tảng nội dung",
      en: "Content platform build",
    },
    title: {
      vi: "Hệ thống quản trị nội dung số",
      en: "Digital content operations system",
    },
    excerpt: {
      vi: "Nền tảng giúp đội ngũ truyền thông lập kế hoạch, xuất bản và theo dõi nội dung trên nhiều kênh.",
      en: "A platform that helps communication teams plan, publish and follow content across channels.",
    },
    body: {
      vi: "Thay vì phụ thuộc vào nhiều công cụ rời, dự án xây dựng một luồng vận hành nội dung thống nhất: soạn thảo, phê duyệt, xuất bản và đối chiếu kết quả. VIA Global phụ trách thiết kế luồng làm việc, phát triển hệ thống và hướng dẫn đội ngũ sử dụng.",
      en: "Instead of relying on scattered tools, the project established one content operating flow: drafting, approval, publishing and result review. VIA Global designed the workflow, developed the system and guided the team through adoption.",
    },
    accent: "ice",
    note: {
      vi: "Sản phẩm triển khai cho hoạt động truyền thông số. Vai trò: thiết kế luồng và phát triển hệ thống.",
      en: "Implementation for digital communication operations. Role: workflow design and system development.",
    },
  },
  {
    slug: "integration-layer",
    field: {
      vi: "Technology & Software",
      en: "Technology & Software",
    },
    role: {
      vi: "Tích hợp dữ liệu và hệ thống",
      en: "Data and system integration",
    },
    title: {
      vi: "Lớp kết nối dữ liệu doanh nghiệp",
      en: "Enterprise data connection layer",
    },
    excerpt: {
      vi: "Kết nối các hệ thống đang vận hành để dữ liệu được thống nhất, giảm thao tác lặp và sai lệch thông tin.",
      en: "Connecting live systems so data stays consistent and repeated, error-prone work is reduced.",
    },
    body: {
      vi: "Dự án xuất phát từ nhu cầu đồng bộ dữ liệu giữa nhiều phần mềm. VIA Global rà soát nguồn dữ liệu, thiết kế lớp tích hợp và thiết lập quy tắc đối soát. Kết quả hướng đến một nguồn thông tin thống nhất cho các bộ phận liên quan.",
      en: "The project began with the need to synchronize data across multiple software systems. VIA Global reviewed sources, designed the integration layer and set reconciliation rules. The outcome is a more consistent information source for the teams involved.",
    },
    accent: "slate",
    note: {
      vi: "Dự án tích hợp thực tế. Vai trò: phân tích dữ liệu và phát triển lớp kết nối.",
      en: "Practical integration project. Role: data analysis and connection-layer development.",
    },
  },
] as const;

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}
