export const SITE = {
  // 线上博客完整地址，仓库名大写 Blog，结尾保留斜杠
  website: "https://abelzhou2025.github.io/Blog/",

  author: "Abel Zhou",

  // About 页的完整地址，建议基于 website 拼出来，避免将来改域名时漏改
  profile: "https://abelzhou2025.github.io/Blog/about",

  desc: "Abel's blog.",
  title: "Abel's Blog",
  ogImage: "/Blog/astropaper-og.jpg",

  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  showArchives: true,
  showBackButton: true, // show back button in post detail

  editPost: {
    enabled: true,
    text: "Edit page",
    // 这里通常放「在 GitHub 上编辑此页」的链接，你现在先指向博客首页也可以
    url: "https://abelzhou2025.github.io/Blog/",
  },

  dynamicOgImage: true,

  dir: "ltr",          // "rtl" | "auto"
  lang: "en",          // html lang code
  timezone: "Asia/Bangkok", // IANA timezone
} as const;
