import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IceMoonMagic",
  description: "My Personal Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "About Me", link: "/about" },
    ],

    sidebar: {
      "/projects/": [
        {
          text: "Projects",
          items: [
            { text: "Overview", link: "/projects/" },
            {
              text: "Splitter Calculator",
              link: "/projects/satisfactory-splitter-calculator",
            },
            { text: "Discord Bot", link: "/projects/discord-bot" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/IceMoonMagic" }],
    footer: {
      message:
        "Licensed Under " +
        '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">' +
        "CC BY-NC-SA 4.0 </a>",
      copyright: "Copyright © 2025-present IceMoonMagic",
    },
  },
});
