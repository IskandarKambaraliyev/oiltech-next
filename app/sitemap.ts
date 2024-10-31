import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://oiltech.uz",
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: "https://oiltech.uz/",
          uz: "https://oiltech.uz/uz",
        },
      },
    },
    {
      url: "https://oiltech.uz/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: "https://oiltech.uz/about",
          uz: "https://oiltech.uz/uz/about",
        },
      },
    },
    {
      url: "https://oiltech.uz/blogs",
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: "https://oiltech.uz/blogs",
          uz: "https://oiltech.uz/uz/blogs",
        },
      },
    },
  ];
}
