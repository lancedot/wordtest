import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "五年级单词冒险屋",
    short_name: "单词冒险屋",
    description: "面向小朋友的五年级词汇学习 Web App",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf0",
    theme_color: "#3d8b74",
    lang: "zh-CN",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
