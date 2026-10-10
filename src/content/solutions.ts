type Localized<T> = { vi: T; en: T };

type SolutionCopy = {
  title: string;
  body: string;
};

export const solutions = [
  {
    slug: "enterprise-software",
    expertise: "technology-software",
    title: {
      vi: "Phần mềm doanh nghiệp",
      en: "Enterprise software",
    },
    excerpt: {
      vi: "Xây dựng ứng dụng và hệ thống quản trị bám sát quy trình vận hành, giúp đội ngũ làm việc chính xác, thống nhất và dễ bàn giao.",
      en: "Applications and administration systems aligned with operating processes, so teams work accurately, consistently and can hand work over cleanly.",
    },
    problem: {
      vi: "Nhiều doanh nghiệp đang điều hành công việc trên bảng tính, email và các phần mềm rời. Thông tin trùng, trách nhiệm không rõ, và mỗi lần nhân sự thay đổi là quy trình lại phải giảng giải lại từ đầu.",
      en: "Many organizations still run work through spreadsheets, email and disconnected tools. Information is duplicated, ownership is unclear, and every staff change means the process has to be explained again from the start.",
    },
    audience: {
      vi: "Phù hợp với doanh nghiệp cần số hóa một quy trình cụ thể: điều hành nội bộ, quản trị hồ sơ, theo dõi công việc, cổng thông tin hoặc hệ thống quản trị riêng theo nghiệp vụ.",
      en: "A fit for organizations that need to digitize a concrete process: internal operations, records, work tracking, an information portal or a purpose-built administration system.",
    },
    highlights: {
      vi: [
        "Thiết kế theo vai trò người dùng và quy trình thật",
        "Dữ liệu có nguồn, có quyền truy cập và có thể đối soát",
        "Bàn giao để đội ngũ nội bộ vận hành được",
      ],
      en: [
        "Designed around real user roles and live process",
        "Data with a source, access rules and a way to reconcile",
        "Handed over so an internal team can operate it",
      ],
    },
    body: {
      vi: [
        "Phần mềm doanh nghiệp chỉ có giá trị khi người dùng hoàn thành được việc của họ. VIA Global không bắt đầu từ danh sách tính năng, mà từ công việc đang diễn ra: ai làm, dữ liệu đi đâu, điểm nào bị tắc, và tiêu chí nào cho thấy hệ thống đã dùng được.",
        "Trước khi thiết kế kiến trúc, chúng tôi làm rõ phạm vi nghiệp vụ, vai trò, quyền hạn và những hệ thống liên quan. Cách này giúp tránh hai sai lầm phổ biến: xây quá rộng nên lâu không dùng được, hoặc xây quá hẹp nên phải làm lại ngay sau lần triển khai đầu.",
        "Hệ thống được phát triển theo module, với giao diện đủ rõ cho người vận hành và phần kỹ thuật đủ minh bạch để bảo trì. Mục tiêu bàn giao không chỉ là mã nguồn hay tài khoản quản trị, mà là một cách làm việc mà doanh nghiệp nắm được.",
      ],
      en: [
        "Enterprise software has value only when users can finish their work. VIA Global does not begin with a feature list, but with the work already happening: who does it, where data goes, where it stalls, and which criteria show that the system is actually usable.",
        "Before architecture work begins, we clarify business scope, roles, permissions and related systems. This avoids two common mistakes: building so broadly that nothing can be used, or so narrowly that the first delivery has to be rebuilt.",
        "The system is developed in modules, with an interface clear enough for operators and a technical structure transparent enough to maintain. Handover is not only source code or an admin account, but a way of working the organization can own.",
      ],
    },
    scope: {
      vi: [
        "Khảo sát quy trình, vai trò người dùng và nguồn dữ liệu hiện có",
        "Thiết kế thông tin, luồng thao tác và phân quyền",
        "Phát triển ứng dụng web và hệ thống quản trị",
        "Chuẩn hóa dữ liệu đầu vào, kiểm tra và báo cáo vận hành",
        "Kiểm thử theo kịch bản nghiệp vụ, không chỉ theo màn hình",
        "Tài liệu sử dụng, tài liệu kỹ thuật vừa đủ và hướng dẫn bàn giao",
      ],
      en: [
        "Review of process, user roles and existing data sources",
        "Information design, task flow and access control",
        "Development of the web application and administration system",
        "Input standards, checks and operating reports",
        "Testing against business scenarios, not only screens",
        "Enough user and technical documentation, plus a handover guide",
      ],
    },
    process: {
      vi: [
        {
          title: "Làm rõ bài toán",
          body: "Mô tả công việc hiện tại, ràng buộc và kết quả cần đạt sau giai đoạn đầu. Chốt phạm vi bằng việc sẽ làm được, không bằng danh sách mong muốn.",
        },
        {
          title: "Thiết kế để dùng được",
          body: "Dựng cấu trúc thông tin, vai trò và các màn hình then chốt. Khách hàng xem và điều chỉnh trước khi phát triển diện rộng.",
        },
        {
          title: "Phát triển theo mốc",
          body: "Chia hạng mục có thể kiểm tra được. Mỗi mốc có sản phẩm xem được, dữ liệu thử và danh sách việc còn mở.",
        },
        {
          title: "Bàn giao và ổn định",
          body: "Đưa hệ thống vào sử dụng thật, hỗ trợ chỉnh theo phát sinh hợp lý, rồi chuyển quyền vận hành cho đội ngũ nội bộ.",
        },
      ],
      en: [
        {
          title: "Clarify the problem",
          body: "Describe current work, constraints and the result required after the first stage. Scope is settled by what will be possible, not by a wish list.",
        },
        {
          title: "Design for use",
          body: "Shape the information structure, roles and key screens. The client reviews and adjusts before broad development begins.",
        },
        {
          title: "Build in milestones",
          body: "Split work into parts that can be inspected. Each milestone has something to see, test data and an open-item list.",
        },
        {
          title: "Hand over and stabilize",
          body: "Put the system into real use, adjust reasonable issues, then transfer operating ownership to the internal team.",
        },
      ],
    } satisfies Localized<SolutionCopy[]>,
    outcomes: {
      vi: [
        "Một hệ thống gắn với việc thật, không phải một công cụ thêm vào quy trình cũ.",
        "Dữ liệu có người chịu trách nhiệm và có cách đối soát.",
        "Đội ngũ mới có thể tiếp quản nhờ tài liệu và phân quyền rõ.",
        "Phạm vi còn lại được ghi nhận để phát triển tiếp, không bị trộn vào giai đoạn đầu.",
      ],
      en: [
        "A system attached to real work, not another tool laid on top of the old process.",
        "Data with an owner and a way to reconcile it.",
        "New team members can take over because documentation and access are clear.",
        "Remaining scope is recorded for later work, not mixed into the first stage.",
      ],
    },
    fit: {
      vi: [
        "Doanh nghiệp đã mô tả được việc cần số hóa, dù quy trình còn thủ công.",
        "Có người nội bộ chịu trách nhiệm dùng và phản hồi trong quá trình triển khai.",
        "Cần một hệ thống có thể phát triển tiếp sau giai đoạn đầu.",
      ],
      en: [
        "The organization can describe the work to digitize, even if it is still manual.",
        "Someone inside will use the system and give feedback during delivery.",
        "The first stage should leave room to grow later.",
      ],
    },
    notFor: {
      vi: [
        "Nhu cầu còn ở mức “làm một phần mềm” mà chưa chỉ ra việc nào cần thay đổi.",
        "Muốn một sản phẩm đóng gói dùng ngay mà không tham gia làm rõ nghiệp vụ.",
      ],
      en: [
        "The need is still “build some software” with no work identified to change.",
        "A ready-made product is expected, without taking part in clarifying the process.",
      ],
    },
  },
  {
    slug: "digital-platforms",
    expertise: "technology-software",
    title: {
      vi: "Nền tảng số",
      en: "Digital platforms",
    },
    excerpt: {
      vi: "Thiết kế nền tảng kết nối người dùng, dữ liệu và dịch vụ, tạo nền vững cho các sản phẩm số thay vì một ứng dụng đứng riêng.",
      en: "Platforms that connect users, data and services, giving digital products a foundation instead of a single isolated application.",
    },
    problem: {
      vi: "Khi doanh nghiệp có nhiều điểm chạm số — cổng khách hàng, ứng dụng nội bộ, kênh đối tác — mỗi phần thường được làm riêng. Dữ liệu lệch, trải nghiệm không liền, và mỗi tính năng mới lại phải xây từ đầu.",
      en: "When an organization has many digital touchpoints — a client portal, internal apps, partner channels — each piece is often built alone. Data drifts, the experience breaks, and every new feature has to start from scratch.",
    },
    audience: {
      vi: "Phù hợp khi doanh nghiệp cần một nền chung cho nhiều sản phẩm số: cổng dịch vụ, hệ thống thành viên, nền tảng giao dịch hoặc lớp kết nối giữa các ứng dụng.",
      en: "A fit when the organization needs a shared base for several digital products: a service portal, membership system, transaction platform or a connection layer between applications.",
    },
    highlights: {
      vi: [
        "Cấu trúc module, API rõ, có thể mở theo giai đoạn",
        "Một nguồn sự thật cho người dùng, dịch vụ và dữ liệu cốt lõi",
        "Kiểm soát sản phẩm tốt hơn khi nhu cầu tăng",
      ],
      en: [
        "Modular structure, clear APIs, room to grow in stages",
        "One source of truth for users, services and core data",
        "Better product control as demand increases",
      ],
    },
    body: {
      vi: [
        "Nền tảng số khác một website hay ứng dụng đơn lẻ ở chỗ nó được thiết kế để nhiều phần dùng chung. VIA Global tập trung vào những thành phần ít thay đổi nhưng quyết định khả năng phát triển: danh tính người dùng, mô hình dữ liệu, quyền hạn, API và cách tách module.",
        "Chúng tôi không chủ trương xây một nền tảng “bao hết” ngay từ đầu. Giai đoạn một thường chỉ gồm phần lõi đủ để một sản phẩm thật chạy được. Các năng lực khác được thêm khi có nhu cầu rõ, để doanh nghiệp không phải nuôi một hệ thống quá lớn so với quy mô hiện tại.",
        "Khi nền tảng đứng vững, sản phẩm mới bớt phụ thuộc vào người từng viết phần cũ. Đó là điều kiện để hợp tác kỹ thuật kéo dài được, thay vì mỗi lần thay đổi lại phải mở lại toàn bộ hệ thống.",
      ],
      en: [
        "A digital platform differs from a single website or application because it is designed to be shared. VIA Global concentrates on the parts that change least and decide how far the product can grow: identity, data model, permissions, APIs and module boundaries.",
        "We do not try to build a platform that “covers everything” at the start. The first stage usually contains only the core needed for one real product to run. Other capabilities are added when the need is clear, so the organization does not have to maintain a system larger than its current scale.",
        "When the platform is sound, new products depend less on the person who wrote the last piece. That is what makes a technical partnership durable, instead of reopening the whole system at every change.",
      ],
    },
    scope: {
      vi: [
        "Xác định sản phẩm nào dùng chung nền và phần nào được phép riêng",
        "Thiết kế mô hình dữ liệu, danh tính và phân quyền",
        "Xây dựng API, module lõi và môi trường tích hợp",
        "Cổng hoặc ứng dụng đầu tiên chạy trên nền tảng",
        "Quy ước phiên bản, tài liệu kỹ thuật và ranh giới mở rộng",
        "Kế hoạch giai đoạn: phần làm ngay và phần để sau",
      ],
      en: [
        "Decide which products share the platform and which may stay separate",
        "Design the data model, identity and permissions",
        "Build APIs, core modules and the integration environment",
        "Deliver the first portal or application on that foundation",
        "Versioning rules, technical notes and extension boundaries",
        "A staged plan: what is built now and what is left for later",
      ],
    },
    process: {
      vi: [
        {
          title: "Khoanh vùng nền chung",
          body: "Tách phần phải dùng chung khỏi phần chỉ thuộc một sản phẩm. Nếu mọi thứ đều bị coi là nền tảng, sẽ không có nền tảng thật.",
        },
        {
          title: "Thiết kế lõi",
          body: "Chốt mô hình dữ liệu, API và cách xác thực. Những quyết định này được ghi lại vì chúng khó đổi về sau.",
        },
        {
          title: "Chạy một sản phẩm thật",
          body: "Đưa một ứng dụng cụ thể lên nền tảng để kiểm chứng. Nền tảng chưa được coi là xong nếu chưa có sản phẩm dùng nó.",
        },
        {
          title: "Mở có kiểm soát",
          body: "Bổ sung năng lực theo nhu cầu đã thấy, giữ ranh giới module để không phá lõi mỗi lần phát triển.",
        },
      ],
      en: [
        {
          title: "Bound the shared layer",
          body: "Separate what must be shared from what belongs to one product. If everything is treated as platform, there is no platform.",
        },
        {
          title: "Design the core",
          body: "Settle the data model, APIs and authentication. These decisions are written down because they are costly to change later.",
        },
        {
          title: "Run one real product",
          body: "Put a concrete application on the platform to prove it. A platform is not finished until something uses it.",
        },
        {
          title: "Extend with control",
          body: "Add capability when the need is visible, keeping module boundaries so later work does not break the core.",
        },
      ],
    } satisfies Localized<SolutionCopy[]>,
    outcomes: {
      vi: [
        "Doanh nghiệp có một nền kỹ thuật có thể giải thích được cho đội ngũ nội bộ và đối tác.",
        "Sản phẩm tiếp theo không phải xây lại phần danh tính, dữ liệu lõi và quyền hạn.",
        "Phạm vi từng giai đoạn rõ, nên tiến độ và chi phí dễ trao đổi hơn.",
        "Khả năng mở rộng được gắn với nhu cầu thật, không phải với kiến trúc phình sẵn.",
      ],
      en: [
        "The organization has a technical foundation it can explain to internal teams and partners.",
        "The next product does not have to rebuild identity, core data and permissions.",
        "Each stage has a clear scope, so timing and cost are easier to discuss.",
        "Scale follows real demand, not an architecture inflated in advance.",
      ],
    },
    fit: {
      vi: [
        "Doanh nghiệp dự kiến có hơn một sản phẩm số dùng chung dữ liệu hoặc người dùng.",
        "Cần kiểm soát lâu dài, không muốn mỗi tính năng mới là một hệ thống mới.",
        "Sẵn sàng đầu tư cho phần lõi trước khi làm nhiều giao diện.",
      ],
      en: [
        "More than one digital product is expected to share data or users.",
        "Long-term control matters more than adding another isolated system.",
        "The organization is willing to invest in the core before many interfaces.",
      ],
    },
    notFor: {
      vi: [
        "Chỉ cần một website hoặc ứng dụng đơn, không có nhu cầu dùng chung về sau.",
        "Muốn “nền tảng tổng” ngay từ đầu trong khi nghiệp vụ chưa ổn định.",
      ],
      en: [
        "Only a single website or application is needed, with no later sharing.",
        "A complete “total platform” is wanted while the business itself is still unsettled.",
      ],
    },
  },
  {
    slug: "cloud-architecture",
    expertise: "cloud-infrastructure",
    title: {
      vi: "Kiến trúc Cloud và hạ tầng",
      en: "Cloud architecture and infrastructure",
    },
    excerpt: {
      vi: "Thiết lập môi trường vận hành ổn định, có sao lưu, giám sát và lộ trình mở rộng phù hợp quy mô — giải thích bằng rủi ro và chi phí, không bằng thuật ngữ chung.",
      en: "Stable operating environments with backup, monitoring and a scale path matched to size — explained in risk and cost, not generic terminology.",
    },
    problem: {
      vi: "Hạ tầng thường chỉ được chú ý khi hệ thống chậm hoặc gián đoạn. Khi đó doanh nghiệp vừa chịu sự cố, vừa phải quyết định trong thế bị động: vá tạm, nâng gấp, hoặc chuyển nhà cung cấp mà chưa hiểu mình đang phụ thuộc vào điều gì.",
      en: "Infrastructure is often noticed only when a system is slow or unavailable. The organization then faces an incident and a forced decision at once: a temporary patch, an emergency upgrade, or a vendor change without knowing what it depends on.",
    },
    audience: {
      vi: "Phù hợp với doanh nghiệp có hệ thống trực tuyến cần vận hành liên tục: website, phần mềm, cổng dịch vụ, hoặc hạ tầng nội bộ cần sao lưu và kiểm soát truy cập rõ.",
      en: "A fit for organizations with online systems that must stay available: websites, software, service portals, or internal infrastructure that needs backup and clear access control.",
    },
    highlights: {
      vi: [
        "Kiến trúc minh bạch, tách môi trường rõ",
        "Sao lưu, giám sát và quy trình sự cố được ghi lại",
        "Quyết định hạ tầng gắn với rủi ro và chi phí thật",
      ],
      en: [
        "Transparent architecture and clear environment separation",
        "Backup, monitoring and incident steps written down",
        "Infrastructure choices tied to real risk and cost",
      ],
    },
    body: {
      vi: [
        "Hạ tầng tốt phải đủ vững cho việc hàng ngày và đủ rõ để đội ngũ kỹ thuật kiểm soát. VIA Global ưu tiên những quyết định có thể giải thích được: môi trường nào dùng để thử, dữ liệu nào cần sao lưu, ai được truy cập, sự cố được báo như thế nào, và chi phí tăng khi nào là hợp lý.",
        "Doanh nghiệp vừa và nhỏ thường không cần kiến trúc quá phức tạp. Điều quan trọng hơn là không để toàn bộ vận hành dựa vào một máy, một người hoặc một thói quen không được ghi lại. Chúng tôi thiết kế đủ để chịu lỗi phổ biến, rồi để ngỏ đường mở rộng khi tải tăng.",
        "Cloud chỉ là một lựa chọn triển khai, không phải mục tiêu. Có trường hợp cần Cloud công cộng, có trường hợp cần máy chủ riêng hoặc mô hình kết hợp. Lựa chọn được đặt trên yêu cầu về độ sẵn sàng, dữ liệu và năng lực vận hành của đội ngũ, không trên xu hướng.",
      ],
      en: [
        "Good infrastructure must be strong enough for daily work and clear enough for a technical team to control. VIA Global favors decisions that can be explained: which environment is for testing, which data must be backed up, who has access, how an incident is raised, and when extra cost is justified.",
        "Smaller organizations rarely need an overly complex architecture. What matters more is not leaving operations on one machine, one person or an unwritten habit. We design enough resilience for common failures, then leave a path to grow when load increases.",
        "Cloud is a deployment choice, not a goal. Public cloud, dedicated servers or a mixed model can all be right. The choice sits on availability, data and the team’s ability to operate the result, not on a trend.",
      ],
    },
    scope: {
      vi: [
        "Rà soát hệ thống hiện có, điểm phụ thuộc và rủi ro vận hành",
        "Đề xuất kiến trúc: môi trường, mạng, lưu trữ và phân quyền",
        "Triển khai máy chủ hoặc Cloud, kèm sao lưu và khôi phục",
        "Thiết lập giám sát, nhật ký và ngưỡng cảnh báo",
        "Viết quy trình sự cố đủ ngắn để dùng được khi có việc",
        "Tối ưu chi phí theo mức sử dụng thật, không theo gói lớn nhất",
      ],
      en: [
        "Review of current systems, dependencies and operating risk",
        "Architecture proposal: environments, network, storage and access",
        "Server or cloud delivery, with backup and recovery",
        "Monitoring, logs and alert thresholds",
        "A short incident process that can actually be used under pressure",
        "Cost aligned to real use, not to the largest package available",
      ],
    },
    process: {
      vi: [
        {
          title: "Nhìn rủi ro trước",
          body: "Liệt kê sự cố nào doanh nghiệp không chấp nhận được: mất dữ liệu, gián đoạn kéo dài, lộ quyền truy cập. Kiến trúc được vẽ từ đó.",
        },
        {
          title: "Chọn mức vừa đủ",
          body: "Đề xuất phương án theo quy mô hiện tại và một bước mở tiếp theo. Không bán trước một hạ tầng dành cho giai đoạn chưa tới.",
        },
        {
          title: "Triển khai có kiểm tra",
          body: "Dựng môi trường, sao lưu và giám sát, rồi thử khôi phục. Một bản sao lưu chưa từng được phục hồi thì chưa được coi là sao lưu.",
        },
        {
          title: "Chuyển giao vận hành",
          body: "Bàn giao sơ đồ, quyền hạn, kênh cảnh báo và việc cần làm định kỳ. Đội ngũ nội bộ phải biết hệ thống đang sống nhờ điều gì.",
        },
      ],
      en: [
        {
          title: "See the risk first",
          body: "List the incidents the organization cannot accept: data loss, long downtime, exposed access. Architecture is drawn from that list.",
        },
        {
          title: "Choose enough, not excess",
          body: "Propose a design for current scale and one next step. We do not sell infrastructure for a stage that has not arrived.",
        },
        {
          title: "Deliver and test",
          body: "Build environments, backup and monitoring, then test recovery. A backup that has never been restored is not yet a backup.",
        },
        {
          title: "Transfer operations",
          body: "Hand over diagrams, access, alert channels and routine work. The internal team should know what the system depends on.",
        },
      ],
    } satisfies Localized<SolutionCopy[]>,
    outcomes: {
      vi: [
        "Doanh nghiệp biết hệ thống đang chạy ở đâu, ai có quyền và dữ liệu được giữ thế nào.",
        "Sự cố có lối xử lý, không còn phụ thuộc vào trí nhớ của một người.",
        "Chi phí hạ tầng có thể giải thích được theo nhu cầu vận hành.",
        "Có lộ trình mở rộng khi tải tăng, thay vì phải dựng lại từ đầu.",
      ],
      en: [
        "The organization knows where the system runs, who has access and how data is kept.",
        "Incidents have a path, instead of depending on one person’s memory.",
        "Infrastructure cost can be explained in operating terms.",
        "There is a path to grow when load rises, instead of rebuilding from zero.",
      ],
    },
    fit: {
      vi: [
        "Có hệ thống đang chạy hoặc sắp đưa vào sử dụng thật.",
        "Cần sự ổn định và khả năng giải thích hơn là kiến trúc phô trương.",
        "Có người chịu trách nhiệm vận hành, dù đội ngũ kỹ thuật còn nhỏ.",
      ],
      en: [
        "A system is already live or about to go into real use.",
        "Stability and explainability matter more than a showy architecture.",
        "Someone will own operations, even if the technical team is small.",
      ],
    },
    notFor: {
      vi: [
        "Chỉ muốn “lên Cloud” như một tuyên bố, chưa có hệ thống cần vận hành.",
        "Không sẵn sàng bàn về sao lưu, phân quyền và trách nhiệm khi có sự cố.",
      ],
      en: [
        "“Moving to the cloud” is a statement, with no system that needs to be operated.",
        "Backup, access and incident ownership are not open for discussion.",
      ],
    },
  },
  {
    slug: "system-integration",
    expertise: "technology-software",
    title: {
      vi: "Tích hợp hệ thống",
      en: "System integration",
    },
    excerpt: {
      vi: "Kết nối phần mềm, dữ liệu và quy trình đang vận hành để giảm trùng lặp, sai lệch thông tin và thao tác nhập lại giữa các bộ phận.",
      en: "Connecting live software, data and processes to reduce duplication, conflicting information and re-entry between teams.",
    },
    problem: {
      vi: "Doanh nghiệp thường không thiếu phần mềm. Thiếu ở chỗ các phần mềm không nói cùng một ngôn ngữ dữ liệu. Nhân sự phải nhập lại, đối chiếu tay, và ban lãnh đạo nhận các báo cáo không khớp nhau.",
      en: "Organizations rarely lack software. What they lack is a shared data language. People re-enter information, reconcile by hand, and leadership receives reports that do not agree.",
    },
    audience: {
      vi: "Phù hợp khi đã có từ hai hệ thống trở lên đang dùng thật — kế toán, CRM, vận hành, website, kho — và cần chúng trao đổi dữ liệu có kiểm soát.",
      en: "A fit when two or more systems are already in real use — finance, CRM, operations, website, inventory — and they need to exchange data under control.",
    },
    highlights: {
      vi: [
        "Rà soát luồng dữ liệu và điểm nghẽn trước khi viết kết nối",
        "Lớp tích hợp có đối soát, nhật ký và phạm vi rõ",
        "Giữ hệ thống hiện có khi chúng vẫn đang làm đúng việc",
      ],
      en: [
        "Data flows and bottlenecks are reviewed before any connection is written",
        "An integration layer with reconciliation, logs and a clear scope",
        "Existing systems are kept when they still do their job",
      ],
    },
    body: {
      vi: [
        "Tích hợp không có nghĩa là thay hết hệ thống cũ. VIA Global bắt đầu bằng việc vẽ luồng dữ liệu: nguồn nào là gốc, trường nào được phép ghi đè, tần suất đồng bộ, và sai lệch được xử lý ra sao. Chỉ khi bản đồ này đủ rõ, lớp kết nối mới được thiết kế.",
        "Chúng tôi ưu tiên tích hợp có kiểm soát hơn là “nối tất cả với tất cả”. Mỗi đường kết nối là một cam kết phải bảo trì. Vì vậy phạm vi giai đoạn đầu thường là vài luồng quan trọng nhất — đơn hàng, khách hàng, tồn kho, trạng thái xử lý — thay vì một sơ đồ lý tưởng.",
        "Khi làm xong, doanh nghiệp có thể chỉ ra dữ liệu đang đi từ đâu tới đâu. Đó là tiêu chí thành công rõ hơn việc liệt kê số API đã tạo.",
      ],
      en: [
        "Integration does not mean replacing every existing system. VIA Global begins by mapping data: which source is authoritative, which fields may be overwritten, how often synchronization runs, and how conflicts are handled. The connection layer is designed only when that map is clear enough.",
        "We prefer controlled integration to “connect everything to everything”. Each path is a commitment to maintain. The first stage therefore usually covers the few flows that matter most — orders, customers, stock, status — rather than an ideal diagram.",
        "When the work is done, the organization can point to where data travels. That is a clearer measure of success than a count of APIs created.",
      ],
    },
    scope: {
      vi: [
        "Lập bản đồ hệ thống, nguồn dữ liệu gốc và điểm nhập tay",
        "Chọn luồng ưu tiên và quy tắc đối soát",
        "Thiết kế lớp kết nối, định dạng dữ liệu và xử lý lỗi",
        "Phát triển tích hợp, nhật ký và cảnh báo lệch dữ liệu",
        "Chạy song song, đối chiếu kết quả rồi mới cắt thao tác thủ công",
        "Tài liệu luồng dữ liệu để đội ngũ vận hành đọc được",
      ],
      en: [
        "Map systems, authoritative sources and manual entry points",
        "Select priority flows and reconciliation rules",
        "Design the connection layer, data shape and error handling",
        "Build the integration, logs and drift alerts",
        "Run in parallel, compare results, then retire manual steps",
        "Document the data flow in language operators can read",
      ],
    },
    process: {
      vi: [
        {
          title: "Vẽ trước, nối sau",
          body: "Không viết kết nối khi chưa thống nhất nguồn gốc dữ liệu. Mọi tranh cãi về “số nào đúng” phải được xử lý ở bước này.",
        },
        {
          title: "Chọn vài luồng then chốt",
          body: "Ưu tiên những chỗ đang tốn công nhập lại hoặc gây sai lệch cho quyết định. Các luồng còn lại xếp vào giai đoạn sau.",
        },
        {
          title: "Kết nối có đối soát",
          body: "Mỗi lần đồng bộ để lại dấu vết: thành công, thất bại, bản ghi bị bỏ qua. Không có nhật ký thì không có tích hợp đáng tin.",
        },
        {
          title: "Cắt dần thao tác tay",
          body: "Giữ quy trình cũ chạy song song đến khi số liệu khớp. Chỉ khi đó mới dừng nhập tay để tránh đứt đoạn vận hành.",
        },
      ],
      en: [
        {
          title: "Map first, connect second",
          body: "No connection is written until the source of truth is agreed. Arguments about “which number is right” belong here.",
        },
        {
          title: "Choose a few critical flows",
          body: "Start where re-entry is costly or where conflicting data affects decisions. Other flows wait for a later stage.",
        },
        {
          title: "Connect with a trail",
          body: "Each synchronization leaves a record: success, failure, skipped rows. Without logs, the integration is not trustworthy.",
        },
        {
          title: "Retire manual work gradually",
          body: "Keep the old process in parallel until figures match. Only then is manual entry stopped, so operations do not break.",
        },
      ],
    } satisfies Localized<SolutionCopy[]>,
    outcomes: {
      vi: [
        "Các hệ thống then chốt trao đổi được dữ liệu mà không cần nhập lại.",
        "Khi số liệu lệch, có chỗ để tìm nguyên nhân thay vì tranh luận giữa các bộ phận.",
        "Phần mềm hiện có được giữ nếu vẫn làm đúng việc của nó.",
        "Doanh nghiệp có bản đồ dữ liệu để quyết định tích hợp tiếp theo.",
      ],
      en: [
        "Key systems can exchange data without re-entry.",
        "When figures drift, there is a place to look instead of an argument between teams.",
        "Existing software is kept if it still does its job.",
        "The organization has a data map for the next integration decision.",
      ],
    },
    fit: {
      vi: [
        "Đã có hệ thống đang dùng, không phải đang chọn phần mềm từ tờ giấy trắng.",
        "Có thể chỉ ra luồng nào đang gây trùng hoặc sai lệch.",
        "Chấp nhận làm theo giai đoạn, không đòi nối mọi hệ thống trong một lần.",
      ],
      en: [
        "Systems are already in use; the work is not a green-field software choice.",
        "The organization can point to flows that duplicate or conflict.",
        "Staged work is acceptable; not every system must be connected at once.",
      ],
    },
    notFor: {
      vi: [
        "Muốn thay toàn bộ phần mềm hiện có bằng một hệ thống mới trong cùng dự án.",
        "Không có quyền tiếp cận hệ thống nguồn hoặc không có người hiểu dữ liệu nghiệp vụ.",
      ],
      en: [
        "The aim is to replace every current system with a new one in the same project.",
        "There is no access to source systems, or no one who understands the business data.",
      ],
    },
  },
  {
    slug: "media-technology",
    expertise: "digital-media",
    title: {
      vi: "Công nghệ truyền thông",
      en: "Communication technology",
    },
    excerpt: {
      vi: "Ứng dụng công nghệ vào quản trị nội dung, kênh truyền thông và trải nghiệm thương hiệu, để hoạt động truyền thông có cấu trúc và đo được.",
      en: "Technology applied to content operations, channels and brand experience, so communication work has structure and can be measured.",
    },
    problem: {
      vi: "Hoạt động truyền thông thường phụ thuộc vào từng chiến dịch và từng kênh. Nội dung nằm rải trên nhiều công cụ, quy trình duyệt không thống nhất, và khi kênh thay đổi thì cả cách làm việc cũng phải làm lại.",
      en: "Communication work often depends on each campaign and each channel. Content sits across many tools, approval is inconsistent, and when a channel changes the whole way of working has to be rebuilt.",
    },
    audience: {
      vi: "Phù hợp với doanh nghiệp có đội ngũ truyền thông hoặc nội dung cần xuất bản đều đặn: thương hiệu, truyền thông nội bộ, cổng thông tin, hoặc đơn vị đang số hóa quy trình xuất bản.",
      en: "A fit for organizations with a communication or content team that publishes regularly: brand, internal communication, an information portal, or a team digitizing its publishing process.",
    },
    highlights: {
      vi: [
        "Một luồng soạn thảo, duyệt, xuất bản và đối chiếu kết quả",
        "Nền tảng nội dung tách khỏi sự phụ thuộc vào từng kênh",
        "Đo lường đủ để cải thiện, không chỉ để báo cáo cho có",
      ],
      en: [
        "One flow for drafting, approval, publishing and result review",
        "A content foundation that is not tied to a single channel",
        "Measurement used to improve work, not only to fill a report",
      ],
    },
    body: {
      vi: [
        "Công nghệ truyền thông có ích khi giúp đội ngũ làm việc ít phân mảnh hơn. VIA Global xem đây là bài toán vận hành: nội dung được tạo ra thế nào, ai duyệt, phát hành ở đâu, và kết quả được đọc ra sao. Kênh chỉ là lớp cuối.",
        "Chúng tôi hỗ trợ xây hệ thống quản trị nội dung, quy trình xuất bản và cách nhìn dữ liệu chung. Mục tiêu không phải tạo thêm một chiến dịch đẹp, mà là để doanh nghiệp nói nhất quán với khách hàng và đối tác trên nhiều điểm chạm.",
        "Xu hướng nền tảng thay đổi nhanh. Năng lực bền hơn là khả năng quản trị nội dung và trải nghiệm, để khi kênh mới xuất hiện, doanh nghiệp không phải dựng lại toàn bộ cách làm việc.",
      ],
      en: [
        "Communication technology is useful when it makes the team’s work less fragmented. VIA Global treats this as an operating problem: how content is created, who approves it, where it is published and how results are read. The channel is only the last layer.",
        "We help build a content system, a publishing process and a shared way of reading data. The aim is not one more polished campaign, but a consistent voice to customers and partners across touchpoints.",
        "Platforms change quickly. A more durable capability is the ability to manage content and experience, so a new channel does not force the organization to rebuild its whole method.",
      ],
    },
    scope: {
      vi: [
        "Rà soát luồng nội dung hiện tại, vai trò duyệt và các kênh đang dùng",
        "Thiết kế mô hình nội dung, phân loại và quy trình xuất bản",
        "Triển khai nền tảng quản trị, lịch xuất bản và phân quyền",
        "Kết nối kênh phân phối khi cần, giữ nội dung gốc ở một nơi",
        "Thiết lập chỉ số theo dõi vừa đủ: tiếp cận, hoàn thành, phản hồi",
        "Hướng dẫn đội ngũ dùng hệ thống trong công việc hàng ngày",
      ],
      en: [
        "Review the current content flow, approval roles and channels in use",
        "Design the content model, taxonomy and publishing process",
        "Implement the management platform, calendar and permissions",
        "Connect distribution channels when needed, keeping the source in one place",
        "Set a small set of measures: reach, completion, response",
        "Guide the team to use the system in daily work",
      ],
    },
    process: {
      vi: [
        {
          title: "Nhìn việc trước kênh",
          body: "Mô tả cách nội dung đang được tạo và duyệt. Nếu bước này rối, công nghệ chỉ số hóa sự rối đó.",
        },
        {
          title: "Dựng luồng thống nhất",
          body: "Chốt các trạng thái: nháp, chờ duyệt, xuất bản, lưu trữ. Mọi kênh dùng chung luồng này.",
        },
        {
          title: "Đưa nền tảng vào dùng",
          body: "Triển khai hệ thống và chuyển một nhóm nội dung thật sang quy trình mới để kiểm chứng.",
        },
        {
          title: "Đọc kết quả để chỉnh",
          body: "Chọn ít chỉ số có ý nghĩa với mục tiêu truyền thông, rồi dùng chúng để quyết định nội dung tiếp theo.",
        },
      ],
      en: [
        {
          title: "See the work before the channel",
          body: "Describe how content is created and approved. If this step is confused, technology will only digitize the confusion.",
        },
        {
          title: "Build one flow",
          body: "Settle the states: draft, review, published, archived. Every channel uses this flow.",
        },
        {
          title: "Put the platform to use",
          body: "Implement the system and move a real set of content onto the new process to prove it.",
        },
        {
          title: "Read results to adjust",
          body: "Choose a few measures that match the communication aim, then use them to decide what comes next.",
        },
      ],
    } satisfies Localized<SolutionCopy[]>,
    outcomes: {
      vi: [
        "Đội ngũ có một nơi để soạn, duyệt và theo dõi nội dung.",
        "Thông điệp thương hiệu ít lệch giữa các kênh vì cùng một nguồn.",
        "Khi nhân sự thay đổi, quy trình xuất bản vẫn đọc được.",
        "Dữ liệu tiếp cận được dùng để điều chỉnh việc làm, không chỉ để báo cáo.",
      ],
      en: [
        "The team has one place to draft, approve and follow content.",
        "Brand messages drift less between channels because they share a source.",
        "When people change, the publishing process can still be read.",
        "Reach data is used to adjust the work, not only to fill a report.",
      ],
    },
    fit: {
      vi: [
        "Có hoạt động nội dung lặp lại, không chỉ vài chiến dịch rời trong năm.",
        "Cần sự nhất quán hơn là tối ưu từng kênh riêng.",
        "Sẵn sàng thống nhất quy trình duyệt trước khi thêm công cụ mới.",
      ],
      en: [
        "Content work repeats; it is not only a few isolated campaigns a year.",
        "Consistency matters more than optimizing each channel alone.",
        "The approval process can be settled before another tool is added.",
      ],
    },
    notFor: {
      vi: [
        "Chỉ cần sản xuất một chiến dịch hoặc thuê chạy quảng cáo ngắn hạn.",
        "Muốn công cụ tự làm nội dung thay cho đội ngũ biên tập và chịu trách nhiệm.",
      ],
      en: [
        "Only a single campaign or a short paid-media burst is needed.",
        "A tool is expected to replace an editorial team and its responsibility.",
      ],
    },
  },
] as const;

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

export function getRelatedSolutions(slug: string) {
  return solutions.filter((item) => item.slug !== slug);
}
