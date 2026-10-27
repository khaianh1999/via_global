import { publicPath, siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "VIA Global cung cấp thiết kế website, phần mềm theo yêu cầu, AI Agent, tự động hóa nội dung, CMS báo chí, bảo mật hệ thống và hạ tầng Cloud cho doanh nghiệp.",
    start_url: publicPath("/"),
    scope: publicPath("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#061733",
    lang: "vi",
    icons: [
      { src: publicPath("/icon.png"), sizes: "64x64", type: "image/png" },
      { src: publicPath("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}
