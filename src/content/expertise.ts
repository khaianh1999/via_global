export const expertiseItems = [
  {
    slug: "technology-software",
    icon: "technology",
    title: {
      vi: "Technology & Software",
      en: "Technology & Software",
    },
    excerpt: {
      vi: "Phát triển phần mềm, nền tảng số và các giải pháp công nghệ phục vụ doanh nghiệp.",
      en: "Software, digital platforms and technology solutions designed for enterprise operations.",
    },
    summary: {
      vi: "Chúng tôi thiết kế và phát triển phần mềm theo bài toán thực tế của doanh nghiệp: từ ứng dụng vận hành, cổng thông tin đến nền tảng kết nối dữ liệu.",
      en: "We design and build software around real operating problems: from internal applications and information portals to data-connected platforms.",
    },
    points: {
      vi: [
        "Phát triển ứng dụng web và hệ thống quản trị",
        "Xây dựng nền tảng số theo quy trình nghiệp vụ",
        "Tích hợp hệ thống và chuẩn hóa luồng dữ liệu",
        "Tối ưu trải nghiệm sử dụng cho đội ngũ vận hành",
      ],
      en: [
        "Web applications and administration systems",
        "Digital platforms mapped to business processes",
        "System integration and data-flow standardization",
        "User experience designed for operating teams",
      ],
    },
  },
  {
    slug: "cloud-infrastructure",
    icon: "cloud",
    title: {
      vi: "Cloud & Digital Infrastructure",
      en: "Cloud & Digital Infrastructure",
    },
    excerpt: {
      vi: "Các dịch vụ hạ tầng số, máy chủ, Cloud và giải pháp tối ưu, bảo vệ hệ thống trực tuyến.",
      en: "Digital infrastructure, hosting, cloud architecture and protection for online systems.",
    },
    summary: {
      vi: "Hạ tầng được thiết kế để hệ thống vận hành ổn định, dễ mở rộng và kiểm soát rủi ro. Chúng tôi ưu tiên kiến trúc rõ ràng, giám sát chủ động và quy trình vận hành bền vững.",
      en: "Infrastructure is designed for stability, scale and risk control. We prioritize clear architecture, active monitoring and sustainable operating practices.",
    },
    points: {
      vi: [
        "Tư vấn kiến trúc Cloud và hạ tầng số",
        "Triển khai máy chủ, môi trường vận hành và sao lưu",
        "Tối ưu hiệu năng, chi phí và khả năng mở rộng",
        "Bảo vệ hệ thống, phân quyền và giám sát",
      ],
      en: [
        "Cloud architecture and infrastructure advisory",
        "Server, environment and backup implementation",
        "Performance, cost and scalability optimization",
        "System protection, access control and monitoring",
      ],
    },
  },
  {
    slug: "digital-media",
    icon: "media",
    title: {
      vi: "Digital Media & Communication",
      en: "Digital Media & Communication",
    },
    excerpt: {
      vi: "Công nghệ truyền thông, nền tảng nội dung số và giải pháp ứng dụng công nghệ trong hoạt động truyền thông.",
      en: "Communication technology, digital content platforms and applied solutions for media operations.",
    },
    summary: {
      vi: "Chúng tôi kết hợp công nghệ và truyền thông để doanh nghiệp quản lý nội dung, kênh tiếp cận và trải nghiệm thương hiệu trên môi trường số một cách mạch lạc.",
      en: "We combine technology and communication so organizations can manage content, channels and brand experience across digital environments with clarity.",
    },
    points: {
      vi: [
        "Nền tảng quản trị nội dung và xuất bản số",
        "Hệ thống hỗ trợ truyền thông đa kênh",
        "Công cụ theo dõi hiệu quả tiếp cận",
        "Ứng dụng công nghệ trong sản xuất và phân phối nội dung",
      ],
      en: [
        "Content management and digital publishing platforms",
        "Systems that support multi-channel communication",
        "Tools for measuring reach and engagement",
        "Technology applied to content production and distribution",
      ],
    },
  },
] as const;

export type ExpertiseSlug = (typeof expertiseItems)[number]["slug"];

export function getExpertise(slug: string) {
  return expertiseItems.find((item) => item.slug === slug);
}
