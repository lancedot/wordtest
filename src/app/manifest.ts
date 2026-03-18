import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wonders 单词实验室",
    short_name: "Wonders 单词",
    description: "面向小朋友的 Wonders 词汇学习 Web App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8ef",
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
