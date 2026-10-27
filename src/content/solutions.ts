import { publicPath } from "@/lib/site";

type Localized<T> = { vi: T; en: T };

export type ServiceIconName = "web" | "code" | "ai" | "flow" | "news" | "shield" | "cloud";

type Service = {
  slug: string;
  expertise: string;
  icon: ServiceIconName;
  title: Localized<string>;
  tagline: Localized<string>;
  excerpt: Localized<string>;
  audience: Localized<string>;
  highlights: Localized<string[]>;
  body: Localized<string[]>;
  scope: Localized<string[]>;
  outcomes: Localized<string[]>;
  note?: Localized<string>;
  product?: boolean;
};

export const solutions: Service[] = [
  {
    slug: "website-design",
    expertise: "technology-software",
    icon: "web",
    title: {
      vi: "Thiết kế website chuyên nghiệp",
      en: "Professional website design",
    },
    tagline: {
      vi: "Website hiện đại, chuẩn SEO, tải nhanh và dễ quản trị.",
      en: "Modern, SEO-ready websites that load fast and are easy to manage.",
    },
    excerpt: {
      vi: "Website doanh nghiệp, thương mại điện tử, cổng thông tin và nền tảng trực tuyến theo yêu cầu — giao diện hiện đại, trải nghiệm tốt, tối ưu tốc độ và SEO.",
      en: "Company websites, e-commerce, portals and custom online platforms — modern design, good experience, fast loading and SEO built in.",
    },
    audience: {
      vi: "Doanh nghiệp cần website giới thiệu, bán hàng, cổng thông tin hoặc tin tức, và đơn vị muốn nâng cấp, tái cấu trúc website đang dùng.",
      en: "Organizations that need a company, sales, portal or news website, and teams that want to upgrade or restructure an existing site.",
    },
    highlights: {
      vi: [
        "Hiển thị tốt trên máy tính và thiết bị di động",
        "Cấu trúc URL thân thiện, tối ưu tốc độ và SEO",
        "Dễ quản trị, sẵn sàng tích hợp CMS và API",
      ],
      en: [
        "Works well on desktop and mobile devices",
        "Friendly URLs, fast loading and SEO",
        "Easy to manage, ready for CMS and API integration",
      ],
    },
    body: {
      vi: [
        "Website là nền tảng quan trọng giúp doanh nghiệp xây dựng thương hiệu, tiếp cận khách hàng và phát triển hoạt động kinh doanh trên môi trường số. VIA Global cung cấp dịch vụ thiết kế website chuyên nghiệp, tập trung vào giao diện hiện đại, trải nghiệm người dùng, hiệu năng và khả năng tối ưu công cụ tìm kiếm (SEO).",
        "Chúng tôi phát triển website doanh nghiệp, website giới thiệu dịch vụ, website thương mại điện tử, cổng thông tin, website tin tức và các nền tảng trực tuyến theo yêu cầu riêng. Giải pháp được xây dựng phù hợp với đặc thù hoạt động của từng đơn vị, đồng thời hỗ trợ tích hợp hệ thống quản trị nội dung, cơ sở dữ liệu, API và các dịch vụ bên thứ ba.",
        "Dịch vụ chú trọng khả năng hiển thị trên máy tính và thiết bị di động, cấu trúc URL thân thiện, tối ưu tốc độ tải trang, khả năng quản trị và định hướng phát triển lâu dài. Bên cạnh việc xây dựng website mới, chúng tôi còn hỗ trợ nâng cấp, tái cấu trúc và tối ưu các hệ thống hiện có nhằm cải thiện hiệu suất và đáp ứng nhu cầu phát triển của doanh nghiệp.",
      ],
      en: [
        "A website is a key foundation for building a brand, reaching customers and growing business online. VIA Global designs professional websites with a focus on modern interfaces, user experience, performance and search engine optimization (SEO).",
        "We build company websites, service websites, e-commerce stores, portals, news sites and custom online platforms. Each solution fits how the organization works and can integrate a content management system, databases, APIs and third-party services.",
        "We pay attention to desktop and mobile display, friendly URL structure, page speed, ease of administration and long-term growth. Beyond new builds, we upgrade, restructure and optimize existing systems to improve performance and meet new needs.",
      ],
    },
    scope: {
      vi: [
        "Website doanh nghiệp và giới thiệu dịch vụ",
        "Website thương mại điện tử",
        "Cổng thông tin và website tin tức",
        "Nền tảng trực tuyến theo yêu cầu riêng",
        "Tích hợp CMS, cơ sở dữ liệu, API và dịch vụ bên thứ ba",
        "Nâng cấp, tái cấu trúc và tối ưu website hiện có",
      ],
      en: [
        "Company and service websites",
        "E-commerce websites",
        "Portals and news websites",
        "Custom online platforms",
        "CMS, database, API and third-party integration",
        "Upgrading, restructuring and optimizing existing sites",
      ],
    },
    outcomes: {
      vi: [
        "Hình ảnh thương hiệu chuyên nghiệp trên môi trường số.",
        "Khách hàng tìm thấy và tiếp cận doanh nghiệp dễ hơn nhờ SEO.",
        "Trang tải nhanh, hiển thị tốt trên mọi thiết bị.",
        "Đội ngũ nội bộ tự quản trị nội dung, website sẵn sàng phát triển tiếp.",
      ],
      en: [
        "A professional brand presence online.",
        "Customers find and reach the business more easily through SEO.",
        "Fast pages that display well on every device.",
        "The internal team manages content, and the site is ready to grow.",
      ],
    },
  },
  {
    slug: "custom-software",
    expertise: "technology-software",
    icon: "code",
    title: {
      vi: "Phát triển phần mềm theo yêu cầu",
      en: "Custom software development",
    },
    tagline: {
      vi: "Số hóa quy trình, giảm thao tác thủ công, dữ liệu tập trung.",
      en: "Digitize workflows, cut manual work and keep data in one place.",
    },
    excerpt: {
      vi: "Phần mềm được thiết kế theo quy trình, chức năng và yêu cầu quản lý riêng của doanh nghiệp, thay vì chấp nhận giới hạn của giải pháp có sẵn.",
      en: "Software designed around the organization’s own processes, functions and management needs, instead of accepting the limits of off-the-shelf tools.",
    },
    audience: {
      vi: "Doanh nghiệp cần số hóa quy trình nghiệp vụ, tự động hóa công việc và xây dựng hệ thống quản trị phù hợp với mô hình vận hành thực tế.",
      en: "Organizations that need to digitize business processes, automate work and build administration systems that match how they actually operate.",
    },
    highlights: {
      vi: [
        "Phân tích nghiệp vụ và tư vấn kiến trúc trước khi phát triển",
        "Thiết kế cơ sở dữ liệu, tích hợp API với hệ thống đang dùng",
        "Nâng cấp và mở rộng theo từng giai đoạn",
      ],
      en: [
        "Business analysis and architecture advice before development",
        "Database design and API integration with current systems",
        "Upgraded and extended in stages",
      ],
    },
    body: {
      vi: [
        "VIA Global cung cấp dịch vụ phát triển phần mềm theo yêu cầu dành cho doanh nghiệp cần số hóa quy trình nghiệp vụ, tự động hóa công việc và xây dựng hệ thống quản trị phù hợp với mô hình vận hành thực tế.",
        "Thay vì sử dụng các giải pháp có sẵn với nhiều giới hạn, doanh nghiệp có thể lựa chọn phần mềm được thiết kế theo quy trình, chức năng và yêu cầu quản lý riêng. Chúng tôi hỗ trợ phân tích nghiệp vụ, tư vấn kiến trúc hệ thống, thiết kế cơ sở dữ liệu, phát triển ứng dụng, tích hợp API và triển khai các chức năng phục vụ hoạt động kinh doanh.",
        "Các giải pháp có thể bao gồm phần mềm quản lý nội bộ, hệ thống quản lý dữ liệu, phần mềm điều hành, hệ thống báo cáo, ứng dụng web và các nền tảng nghiệp vụ chuyên biệt. VIA Global cũng hỗ trợ nâng cấp phần mềm hiện hữu, tối ưu hiệu năng, cải thiện bảo mật và mở rộng chức năng theo từng giai đoạn.",
        "Dịch vụ giúp doanh nghiệp giảm thao tác thủ công, hạn chế dữ liệu phân tán, tăng khả năng kiểm soát và chủ động hơn trong việc phát triển hệ thống công nghệ.",
      ],
      en: [
        "VIA Global develops custom software for organizations that need to digitize business processes, automate work and build administration systems that match how they actually operate.",
        "Instead of off-the-shelf tools with many limits, organizations can choose software designed around their own processes, functions and management needs. We support business analysis, system architecture, database design, application development, API integration and the features that run daily business.",
        "Solutions can include internal management software, data management systems, operations software, reporting systems, web applications and specialized business platforms. We also upgrade existing software, improve performance and security, and extend functions in stages.",
        "The result is less manual work, less scattered data, better control and more ownership over how the organization’s technology grows.",
      ],
    },
    scope: {
      vi: [
        "Phân tích nghiệp vụ và tư vấn kiến trúc hệ thống",
        "Thiết kế cơ sở dữ liệu",
        "Phần mềm quản lý nội bộ và phần mềm điều hành",
        "Hệ thống quản lý dữ liệu và báo cáo",
        "Ứng dụng web và nền tảng nghiệp vụ chuyên biệt",
        "Nâng cấp phần mềm hiện hữu: hiệu năng, bảo mật, chức năng",
      ],
      en: [
        "Business analysis and system architecture",
        "Database design",
        "Internal management and operations software",
        "Data management and reporting systems",
        "Web applications and specialized business platforms",
        "Upgrading existing software: performance, security, features",
      ],
    },
    outcomes: {
      vi: [
        "Giảm thao tác thủ công và công việc lặp lại.",
        "Hạn chế dữ liệu phân tán giữa các bộ phận.",
        "Tăng khả năng kiểm soát hoạt động.",
        "Chủ động phát triển hệ thống công nghệ theo nhu cầu.",
      ],
      en: [
        "Less manual and repetitive work.",
        "Less data scattered across teams.",
        "Better control over operations.",
        "More ownership over how technology grows.",
      ],
    },
  },
  {
    slug: "ai-agent",
    expertise: "technology-software",
    icon: "ai",
    title: {
      vi: "AI Agent và tự động hóa thông minh",
      en: "AI agents and intelligent automation",
    },
    tagline: {
      vi: "Trợ lý AI xử lý thông tin và tự động hóa tác vụ nhiều bước.",
      en: "AI assistants that handle information and multi-step tasks.",
    },
    excerpt: {
      vi: "Phát triển AI Agent và tích hợp AI vào phần mềm, website, quy trình nghiệp vụ để xử lý thông tin, khai thác dữ liệu và tự động hóa các tác vụ nhiều bước.",
      en: "AI agents and AI integration for software, websites and business processes — handling information, using data and automating multi-step tasks.",
    },
    audience: {
      vi: "Doanh nghiệp muốn ứng dụng AI vào công việc thực tế: hỏi đáp tài liệu nội bộ, tổng hợp thông tin, xử lý dữ liệu hoặc hỗ trợ nghiệp vụ lặp lại.",
      en: "Organizations that want AI in real work: answering questions over internal documents, summarizing information, processing data or supporting repetitive tasks.",
    },
    highlights: {
      vi: [
        "Kết hợp LLM, cơ sở tri thức nội bộ, API và phần mềm đang dùng",
        "Tư vấn mô hình AI theo chi phí, hiệu năng và bảo mật",
        "Cơ chế kiểm soát và cấp quyền công cụ rõ ràng",
      ],
      en: [
        "Combines LLMs, internal knowledge, APIs and current software",
        "Model advice balanced on cost, performance and security",
        "Clear controls and tool permissions",
      ],
    },
    body: {
      vi: [
        "Trí tuệ nhân tạo đang mở ra nhiều cơ hội nâng cao năng suất và thay đổi cách doanh nghiệp vận hành. VIA Global cung cấp dịch vụ phát triển AI Agent và tích hợp AI vào phần mềm, website và quy trình nghiệp vụ nhằm hỗ trợ xử lý thông tin, khai thác dữ liệu và tự động hóa các tác vụ nhiều bước.",
        "AI Agent có thể được thiết kế để tiếp nhận yêu cầu, phân tích ngữ cảnh, truy xuất dữ liệu, sử dụng công cụ được cấp quyền và thực hiện các bước công việc theo mục tiêu xác định. Tùy theo nhu cầu, hệ thống có thể kết hợp mô hình ngôn ngữ lớn (LLM), cơ sở tri thức nội bộ, API và các phần mềm doanh nghiệp đang sử dụng.",
        "Chúng tôi hỗ trợ xây dựng trợ lý AI nội bộ, AI Agent hỗ trợ nghiệp vụ, hệ thống hỏi đáp tài liệu, giải pháp tổng hợp thông tin, tự động hóa xử lý dữ liệu và các quy trình ứng dụng AI theo yêu cầu. VIA Global tư vấn lựa chọn mô hình AI, phương án tích hợp và cơ chế kiểm soát phù hợp với yêu cầu về chi phí, hiệu năng và bảo mật.",
        "Việc ứng dụng AI Agent giúp doanh nghiệp giảm thời gian xử lý công việc lặp lại, nâng cao hiệu quả khai thác tri thức và tạo điều kiện để nhân sự tập trung vào những hoạt động có giá trị cao hơn.",
      ],
      en: [
        "Artificial intelligence is opening new ways to raise productivity and change how organizations operate. VIA Global builds AI agents and integrates AI into software, websites and business processes to handle information, use data and automate multi-step tasks.",
        "An AI agent can be designed to receive requests, read context, retrieve data, use the tools it has been granted and carry out steps toward a defined goal. Depending on the need, it can combine large language models (LLMs), internal knowledge bases, APIs and the software already in use.",
        "We build internal AI assistants, task-support agents, document Q&A systems, information summarization, data-processing automation and other AI workflows on request. We advise on model choice, integration approach and controls that fit cost, performance and security requirements.",
        "AI agents reduce time spent on repetitive work, make internal knowledge easier to use and free people to focus on higher-value activities.",
      ],
    },
    scope: {
      vi: [
        "Trợ lý AI nội bộ",
        "AI Agent hỗ trợ nghiệp vụ",
        "Hệ thống hỏi đáp tài liệu",
        "Giải pháp tổng hợp thông tin",
        "Tự động hóa xử lý dữ liệu",
        "Tích hợp AI vào website, phần mềm và quy trình hiện có",
      ],
      en: [
        "Internal AI assistants",
        "Business-support AI agents",
        "Document Q&A systems",
        "Information summarization",
        "Data-processing automation",
        "AI integration into existing websites, software and workflows",
      ],
    },
    outcomes: {
      vi: [
        "Giảm thời gian xử lý công việc lặp lại.",
        "Khai thác tri thức nội bộ hiệu quả hơn.",
        "Nhân sự tập trung vào việc có giá trị cao hơn.",
        "Chi phí, hiệu năng và bảo mật được cân nhắc ngay từ thiết kế.",
      ],
      en: [
        "Less time spent on repetitive work.",
        "Internal knowledge used more effectively.",
        "People focus on higher-value work.",
        "Cost, performance and security considered from the start.",
      ],
    },
  },
  {
    slug: "via-contentflow",
    expertise: "digital-media",
    icon: "flow",
    product: true,
    title: {
      vi: "VIA ContentFlow",
      en: "VIA ContentFlow",
    },
    tagline: {
      vi: "Thu thập dữ liệu, sáng tạo nội dung và xuất bản đa kênh bằng AI.",
      en: "Data collection, AI-assisted content and multi-channel publishing.",
    },
    excerpt: {
      vi: "Giải pháp tự động hóa nội dung đa kênh: thu thập và phân tích dữ liệu, AI hỗ trợ biên soạn, kiểm duyệt và xuất bản lên CMS, website, mạng xã hội.",
      en: "Multi-channel content automation: collect and analyze data, draft with AI, then review and publish to CMS, websites and social platforms.",
    },
    audience: {
      vi: "Cơ quan báo chí, doanh nghiệp truyền thông, đội ngũ marketing và các đơn vị quản lý nội dung trên nhiều website hoặc nền tảng số.",
      en: "Newsrooms, media companies, marketing teams and organizations managing content across several websites or digital platforms.",
    },
    highlights: {
      vi: [
        "Theo dõi nguồn, phân loại và tổng hợp thông tin theo chủ đề",
        "AI gợi ý chủ đề, bản nháp, tiêu đề, mô tả và SEO",
        "Kiểm duyệt, lập lịch và xuất bản đa kênh có lưu lịch sử",
      ],
      en: [
        "Monitor sources, classify and summarize by topic",
        "AI suggests topics, drafts, titles, descriptions and SEO",
        "Review, schedule and publish across channels with history",
      ],
    },
    body: {
      vi: [
        "VIA ContentFlow là giải pháp tự động hóa nội dung đa kênh do VIA Global định hướng phát triển, kết hợp công nghệ thu thập dữ liệu, phân tích thông tin, trí tuệ nhân tạo và hệ thống quản trị nội dung. Giải pháp hướng đến cơ quan báo chí, doanh nghiệp truyền thông, đội ngũ marketing và các đơn vị cần quản lý hoạt động nội dung trên nhiều website hoặc nền tảng số.",
        "Hệ thống hỗ trợ thu thập thông tin từ các nguồn dữ liệu được phép truy cập, theo dõi nội dung mới, phân loại dữ liệu và tổng hợp thông tin theo chủ đề. Trên cơ sở dữ liệu thu thập được, AI có thể hỗ trợ nhận diện xu hướng, gợi ý chủ đề, đề xuất góc tiếp cận và xây dựng bản nháp nội dung phục vụ hoạt động biên tập.",
        "VIA ContentFlow có thể tích hợp các mô hình AI thông qua API để hỗ trợ tổng hợp thông tin, biên soạn nội dung, đề xuất tiêu đề, tạo mô tả và tối ưu các thành phần SEO. Quy trình được thiết kế theo nhu cầu của khách hàng, từ hỗ trợ biên tập thủ công đến tự động hóa một phần hoặc nhiều bước trong quá trình sản xuất nội dung.",
        "Bên cạnh việc tạo nội dung, giải pháp còn hướng đến tự động hóa quy trình xuất bản và phân phối thông tin. Hệ thống có thể kết nối với CMS, website và các nền tảng mạng xã hội thông qua API hoặc phương thức tích hợp được hỗ trợ, giúp giảm thao tác đăng tải lặp lại và quản lý nội dung tập trung.",
        "Tùy theo cấu hình triển khai, doanh nghiệp có thể thiết lập quy trình kiểm duyệt, phê duyệt, lập lịch xuất bản và tự động đăng nội dung khi đáp ứng các điều kiện đã xác định. Các bước quan trọng có thể được lưu lịch sử xử lý để hỗ trợ theo dõi và kiểm soát chất lượng.",
      ],
      en: [
        "VIA ContentFlow is a multi-channel content automation solution developed by VIA Global. It combines data collection, information analysis, artificial intelligence and content management for newsrooms, media companies, marketing teams and organizations running content across several websites or platforms.",
        "The system collects information from sources it is permitted to access, tracks new content, classifies data and summarizes it by topic. From that data, AI can help spot trends, suggest topics and angles, and prepare drafts for the editorial team.",
        "VIA ContentFlow can connect AI models through APIs to summarize information, write drafts, suggest titles, create descriptions and optimize SEO elements. The workflow is shaped to each client, from assisted manual editing to automating one or several production steps.",
        "Beyond creating content, the solution automates publishing and distribution. It can connect to CMS platforms, websites and social networks through APIs or supported integration methods, reducing repeated posting and keeping content managed in one place.",
        "Depending on the configuration, teams can set review, approval and scheduling rules, and publish automatically when defined conditions are met. Key steps can keep a processing history to support tracking and quality control.",
      ],
    },
    scope: {
      vi: [
        "Thu thập thông tin từ nguồn được phép truy cập",
        "Phân loại, tổng hợp và nhận diện xu hướng",
        "AI gợi ý chủ đề, góc tiếp cận và bản nháp",
        "Đề xuất tiêu đề, mô tả và tối ưu SEO",
        "Kiểm duyệt, phê duyệt và lập lịch xuất bản",
        "Kết nối CMS, website và mạng xã hội qua API",
      ],
      en: [
        "Collecting information from permitted sources",
        "Classification, summaries and trend detection",
        "AI suggestions for topics, angles and drafts",
        "Title, description and SEO suggestions",
        "Review, approval and publishing schedules",
        "CMS, website and social connections through APIs",
      ],
    },
    outcomes: {
      vi: [
        "Tăng tốc độ sản xuất nội dung.",
        "Quy trình khai thác dữ liệu có hệ thống.",
        "Giảm thao tác đăng tải lặp lại, quản lý nội dung tập trung.",
        "Tối ưu nguồn lực cho hoạt động truyền thông số.",
      ],
      en: [
        "Faster content production.",
        "A systematic way to use data.",
        "Less repeated posting and content managed in one place.",
        "Better use of resources for digital communication.",
      ],
    },
    note: {
      vi: "Việc thu thập và sử dụng dữ liệu cần tuân thủ quyền truy cập, điều khoản của nguồn dữ liệu và quy định pháp luật liên quan; nội dung do AI tạo ra cần được kiểm soát phù hợp với mục đích sử dụng.",
      en: "Data collection and use must respect access rights, source terms and applicable law, and AI-generated content must be reviewed in line with its intended use.",
    },
  },
  {
    slug: "newsroom-cms",
    expertise: "digital-media",
    icon: "news",
    title: {
      vi: "CMS báo chí và quản trị nội dung",
      en: "Newsroom CMS and content management",
    },
    tagline: {
      vi: "Biên tập, phân quyền, phê duyệt và xuất bản theo nghiệp vụ.",
      en: "Editing, roles, approval and publishing shaped to your workflow.",
    },
    excerpt: {
      vi: "Phát triển, tùy chỉnh và tích hợp CMS theo quy trình biên tập thực tế của cơ quan báo chí, doanh nghiệp truyền thông và đơn vị sở hữu nền tảng nội dung số.",
      en: "Building, customizing and integrating a CMS around the real editorial workflow of newsrooms, media companies and digital content owners.",
    },
    audience: {
      vi: "Cơ quan báo chí, doanh nghiệp truyền thông và đơn vị vận hành nền tảng nội dung số cần CMS mới hoặc nâng cấp hệ thống hiện có.",
      en: "Newsrooms, media companies and digital content operators that need a new CMS or an upgrade to the current one.",
    },
    highlights: {
      vi: [
        "Quản lý bài viết, chuyên mục, tác giả, thẻ và đa phương tiện",
        "Biên tập, phân quyền và phê duyệt theo cách vận hành",
        "Tích hợp tìm kiếm, phân phối, phân tích và AI",
      ],
      en: [
        "Articles, sections, authors, tags and media",
        "Editing, roles and approval that match operations",
        "Search, distribution, analytics and AI integration",
      ],
    },
    body: {
      vi: [
        "Hệ thống quản trị nội dung (CMS) đóng vai trò trung tâm trong hoạt động xuất bản, biên tập và phân phối thông tin của các cơ quan báo chí, doanh nghiệp truyền thông và đơn vị sở hữu nền tảng nội dung số. VIA Global cung cấp dịch vụ phát triển, tùy chỉnh và tích hợp CMS theo quy trình nghiệp vụ thực tế của từng tổ chức.",
        "Giải pháp CMS báo chí có thể bao gồm quản lý bài viết, chuyên mục, tác giả, thẻ nội dung, hình ảnh, video và các tài nguyên đa phương tiện. Hệ thống hỗ trợ xây dựng quy trình biên tập, phân quyền người dùng, phê duyệt nội dung và quản lý trạng thái xuất bản theo yêu cầu vận hành.",
        "Chúng tôi chú trọng khả năng mở rộng, hiệu năng xử lý, cấu trúc dữ liệu và khả năng tích hợp với các hệ thống bên ngoài. CMS có thể được kết nối với API, hệ thống tìm kiếm, nền tảng phân phối nội dung, công cụ phân tích và các giải pháp AI nhằm nâng cao hiệu quả khai thác thông tin.",
        "Bên cạnh việc phát triển CMS mới, VIA Global hỗ trợ nâng cấp hệ thống hiện có, cải thiện trải nghiệm biên tập, tối ưu quy trình xuất bản và tư vấn các giải pháp SEO kỹ thuật phù hợp. Mục tiêu là giúp đơn vị vận hành nội dung hiệu quả hơn, giảm thao tác thủ công và chủ động phát triển nền tảng xuất bản theo nhu cầu dài hạn.",
      ],
      en: [
        "A content management system (CMS) sits at the center of publishing, editing and distribution for newsrooms, media companies and digital content owners. VIA Global builds, customizes and integrates CMS platforms around each organization’s real editorial workflow.",
        "A newsroom CMS can cover articles, sections, authors, tags, images, video and other media assets. It supports editorial workflows, user roles, content approval and publishing states as operations require.",
        "We focus on scalability, performance, data structure and integration with outside systems. The CMS can connect to APIs, search, content distribution platforms, analytics tools and AI solutions to get more value from information.",
        "Beyond new builds, we upgrade existing systems, improve the editing experience, streamline publishing and advise on technical SEO. The aim is more efficient content operations, less manual work and a publishing platform the organization can grow over time.",
      ],
    },
    scope: {
      vi: [
        "Quản lý bài viết, chuyên mục, tác giả và thẻ nội dung",
        "Quản lý hình ảnh, video và tài nguyên đa phương tiện",
        "Quy trình biên tập, phân quyền và phê duyệt",
        "Quản lý trạng thái xuất bản",
        "Tích hợp API, tìm kiếm, phân phối nội dung, phân tích và AI",
        "Nâng cấp CMS hiện có và tư vấn SEO kỹ thuật",
      ],
      en: [
        "Articles, sections, authors and tags",
        "Images, video and media assets",
        "Editorial workflow, roles and approval",
        "Publishing states",
        "API, search, distribution, analytics and AI integration",
        "Upgrading an existing CMS and technical SEO advice",
      ],
    },
    outcomes: {
      vi: [
        "Vận hành nội dung hiệu quả hơn.",
        "Giảm thao tác thủ công trong biên tập và xuất bản.",
        "Hệ thống có hiệu năng tốt và dễ mở rộng.",
        "Chủ động phát triển nền tảng xuất bản dài hạn.",
      ],
      en: [
        "More efficient content operations.",
        "Less manual work in editing and publishing.",
        "A system that performs well and can scale.",
        "Ownership of the publishing platform over the long term.",
      ],
    },
  },
  {
    slug: "web-security",
    expertise: "cloud-infrastructure",
    icon: "shield",
    title: {
      vi: "Bảo mật website và quản trị hệ thống",
      en: "Website security and system administration",
    },
    tagline: {
      vi: "Rà soát cấu hình, kiểm soát truy cập, sao lưu và giám sát.",
      en: "Configuration review, access control, backup and monitoring.",
    },
    excerpt: {
      vi: "Tư vấn bảo mật, rà soát cấu hình và hỗ trợ quản trị kỹ thuật cho website, ứng dụng web và máy chủ, giúp duy trì hoạt động liên tục và bảo vệ dữ liệu.",
      en: "Security advice, configuration review and technical administration for websites, web apps and servers — keeping services running and data protected.",
    },
    audience: {
      vi: "Doanh nghiệp vận hành website, ứng dụng web hoặc máy chủ cần giảm rủi ro kỹ thuật, đặc biệt các hệ thống có lượng truy cập lớn hoặc yêu cầu tính sẵn sàng cao.",
      en: "Organizations running websites, web apps or servers that need to lower technical risk, especially high-traffic or high-availability systems.",
    },
    highlights: {
      vi: [
        "Đánh giá cấu hình, phân quyền và bảo vệ API",
        "Tư vấn firewall, WAF, reverse proxy và CDN",
        "Sao lưu, phục hồi, giám sát và nhật ký hệ thống",
      ],
      en: [
        "Configuration, access and API protection review",
        "Firewall, WAF, reverse proxy and CDN advice",
        "Backup, recovery, monitoring and system logs",
      ],
    },
    body: {
      vi: [
        "Bảo mật website và phần mềm là yếu tố quan trọng để duy trì hoạt động kinh doanh liên tục, bảo vệ dữ liệu và giảm thiểu rủi ro từ các mối đe dọa trên môi trường mạng. VIA Global cung cấp dịch vụ tư vấn bảo mật, rà soát cấu hình và hỗ trợ quản trị kỹ thuật cho website, ứng dụng web và hệ thống máy chủ.",
        "Phạm vi dịch vụ có thể bao gồm đánh giá cấu hình bảo mật, rà soát phân quyền truy cập, tư vấn bảo vệ API, thiết lập HTTPS, tối ưu security headers và tăng cường các biện pháp kiểm soát truy cập. Tùy theo kiến trúc hệ thống, chúng tôi tư vấn triển khai firewall, Web Application Firewall (WAF), reverse proxy, CDN và các lớp bảo vệ phù hợp.",
        "VIA Global hỗ trợ khách hàng xây dựng phương án sao lưu, phục hồi dữ liệu, giám sát hoạt động và ghi nhận nhật ký hệ thống. Đối với các website có lượng truy cập lớn hoặc yêu cầu tính sẵn sàng cao, việc rà soát kiến trúc, tối ưu cấu hình và chuẩn bị phương án dự phòng có thể giúp giảm nguy cơ gián đoạn dịch vụ.",
        "Dịch vụ được thiết kế dựa trên hiện trạng hệ thống, mức độ ưu tiên và phạm vi hợp tác. Qua đó, doanh nghiệp có thể chủ động hơn trong việc quản lý rủi ro kỹ thuật, duy trì hiệu năng và nâng cao độ tin cậy của nền tảng số.",
      ],
      en: [
        "Website and software security is essential to keep business running, protect data and reduce risk from online threats. VIA Global provides security advice, configuration review and technical administration for websites, web applications and servers.",
        "The scope can include security configuration review, access permission review, API protection advice, HTTPS setup, security headers and stronger access controls. Depending on the architecture, we advise on firewalls, a Web Application Firewall (WAF), reverse proxies, CDNs and other suitable layers.",
        "We help clients set up backup and recovery, activity monitoring and system logs. For high-traffic or high-availability websites, reviewing the architecture, tuning configuration and preparing fallback plans can lower the risk of service disruption.",
        "Each engagement is shaped by the current system, priorities and agreed scope, so the organization can manage technical risk, maintain performance and make its digital platform more reliable.",
      ],
    },
    scope: {
      vi: [
        "Đánh giá cấu hình bảo mật và phân quyền truy cập",
        "Bảo vệ API, thiết lập HTTPS và security headers",
        "Tư vấn firewall, WAF, reverse proxy và CDN",
        "Phương án sao lưu và phục hồi dữ liệu",
        "Giám sát hoạt động và ghi nhận nhật ký hệ thống",
        "Rà soát kiến trúc và phương án dự phòng cho hệ thống tải cao",
      ],
      en: [
        "Security configuration and access review",
        "API protection, HTTPS and security headers",
        "Firewall, WAF, reverse proxy and CDN advice",
        "Backup and data recovery plans",
        "Activity monitoring and system logs",
        "Architecture review and fallback plans for high-load systems",
      ],
    },
    outcomes: {
      vi: [
        "Chủ động quản lý rủi ro kỹ thuật.",
        "Giảm nguy cơ gián đoạn dịch vụ.",
        "Dữ liệu được bảo vệ và có phương án khôi phục.",
        "Nâng cao độ tin cậy của nền tảng số.",
      ],
      en: [
        "Technical risk managed proactively.",
        "Lower risk of service disruption.",
        "Data protected, with a way to recover it.",
        "A more reliable digital platform.",
      ],
    },
  },
  {
    slug: "cloud-server",
    expertise: "cloud-infrastructure",
    icon: "cloud",
    title: {
      vi: "Cloud Server và hạ tầng đám mây",
      en: "Cloud servers and cloud infrastructure",
    },
    tagline: {
      vi: "Chọn cấu hình đúng nhu cầu, cân đối hiệu năng và chi phí.",
      en: "The right configuration, balancing performance and cost.",
    },
    excerpt: {
      vi: "Tư vấn và hỗ trợ triển khai Cloud Server, VPS và hạ tầng máy chủ cùng các đối tác phù hợp, cân đối hiệu năng, độ ổn định, khả năng mở rộng và chi phí.",
      en: "Advice and deployment support for cloud servers, VPS and server infrastructure with suitable partners, balancing performance, stability, scale and cost.",
    },
    audience: {
      vi: "Doanh nghiệp cần môi trường ổn định cho website, phần mềm và dữ liệu, hoặc đang cân nhắc chuyển đổi, mở rộng hạ tầng máy chủ.",
      en: "Organizations that need a stable home for websites, software and data, or that are planning to move or expand their servers.",
    },
    highlights: {
      vi: [
        "Xác định nhu cầu tài nguyên và cấu hình phù hợp",
        "Định hướng kiến trúc: reverse proxy, cân bằng tải, CDN",
        "Phối hợp đối tác triển khai và quản trị kỹ thuật",
      ],
      en: [
        "Resource needs and the right configuration",
        "Architecture: reverse proxy, load balancing, CDN",
        "Deployment and administration with partners",
      ],
    },
    body: {
      vi: [
        "Hạ tầng máy chủ là nền tảng để website, phần mềm và các hệ thống dữ liệu vận hành ổn định. VIA Global cung cấp dịch vụ tư vấn và hỗ trợ triển khai Cloud Server, VPS, hạ tầng máy chủ và các giải pháp liên quan thông qua mô hình hợp tác với các đối tác cung cấp dịch vụ phù hợp.",
        "Chúng tôi hỗ trợ doanh nghiệp xác định nhu cầu tài nguyên, lựa chọn cấu hình máy chủ và định hướng kiến trúc triển khai theo đặc điểm của ứng dụng. Các nội dung tư vấn có thể bao gồm môi trường triển khai website, ứng dụng web, cơ sở dữ liệu, reverse proxy, cân bằng tải, CDN và phương án sao lưu, phục hồi.",
        "Tùy theo nhu cầu và phạm vi hợp tác, VIA Global phối hợp cùng đối tác để triển khai hạ tầng, cấu hình môi trường ứng dụng và hỗ trợ các công việc quản trị kỹ thuật. Giải pháp được định hướng nhằm cân đối hiệu năng, độ ổn định, khả năng mở rộng và chi phí vận hành.",
        "Thông qua việc kết hợp tư vấn công nghệ và nguồn lực hạ tầng từ đối tác, VIA Global giúp doanh nghiệp lựa chọn phương án triển khai phù hợp, hạn chế đầu tư không cần thiết và xây dựng nền tảng đáp ứng nhu cầu phát triển trong tương lai.",
      ],
      en: [
        "Server infrastructure is what keeps websites, software and data systems running steadily. VIA Global advises on and supports the deployment of cloud servers, VPS, server infrastructure and related solutions, working with suitable service partners.",
        "We help organizations size resources, choose server configurations and shape the deployment architecture around the application. Advice can cover hosting for websites, web apps and databases, reverse proxies, load balancing, CDNs and backup and recovery.",
        "Depending on the need and scope, VIA Global works with partners to deploy infrastructure, configure application environments and support technical administration — balancing performance, stability, scalability and running cost.",
        "By combining technology advice with partner infrastructure, we help organizations choose the right deployment, avoid unnecessary spending and build a foundation ready for future growth.",
      ],
    },
    scope: {
      vi: [
        "Xác định nhu cầu tài nguyên và lựa chọn cấu hình máy chủ",
        "Môi trường triển khai website, ứng dụng web và cơ sở dữ liệu",
        "Reverse proxy, cân bằng tải và CDN",
        "Phương án sao lưu và phục hồi",
        "Phối hợp đối tác triển khai hạ tầng và cấu hình môi trường",
        "Hỗ trợ các công việc quản trị kỹ thuật",
      ],
      en: [
        "Resource sizing and server configuration",
        "Hosting for websites, web apps and databases",
        "Reverse proxy, load balancing and CDN",
        "Backup and recovery plans",
        "Partner deployment and environment configuration",
        "Technical administration support",
      ],
    },
    outcomes: {
      vi: [
        "Hạ tầng phù hợp với đặc điểm ứng dụng.",
        "Hạn chế đầu tư không cần thiết.",
        "Hệ thống ổn định, sẵn sàng mở rộng.",
        "Nền tảng đáp ứng nhu cầu phát triển trong tương lai.",
      ],
      en: [
        "Infrastructure that fits the application.",
        "No unnecessary spending.",
        "A stable system, ready to scale.",
        "A foundation for future growth.",
      ],
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

export function solutionImage(slug: string) {
  return publicPath(`/solutions/${slug}.svg`);
}

export function getRelatedSolutions(slug: string) {
  return solutions.filter((item) => item.slug !== slug);
}
