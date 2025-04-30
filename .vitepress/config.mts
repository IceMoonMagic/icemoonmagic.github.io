import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IceMoonMagic",
  description: "My Personal Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/about/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/about/markdown-examples" },
          { text: "Runtime API Examples", link: "/about/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/IceMoonMagic" }],
  },
});
