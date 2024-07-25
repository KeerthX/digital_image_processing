import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  title: "Digital Image Processing",
  description: "A complete guide to Digital Image Processing (DIP)",
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/course/": { base: "/course/", items: sidebarCourse() },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/KeerthX/digital_image_processing",
      },
    ],
  },
});

function sidebarCourse(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Module I",
      collapsed: false,
      base: "course/mod1/",
      items: [{ text: "Introduction to DIP", link: "1-intro" }],
    },
    {
      text: "Module II",
      collapsed: false,
      base: "course/mod2/",
      items: [],
    },
    {
      text: "Module III",
      collapsed: false,
      base: "course/mod3/",
      items: [],
    },
    {
      text: "Module IV",
      collapsed: false,
      base: "course/mod4/",
      items: [],
    },
    {
      text: "Module V",
      collapsed: false,
      base: "course/mod5/",
      items: [],
    },
    {
      text: "Module VI",
      collapsed: false,
      base: "course/mod6/",
      items: [],
    },
    {
      text: "Appendix",
      link: "appendix",
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Course",
      link: "/course/",
      activeMatch: "/course/",
    },
    {
      text: "Contribute",
      items: [
        {
          text: "Documentation",
          link: "https://github.com/KeerthX/digital_image_processing",
        },
        {
          text: "Donate",
          link: "https://rzp.io/l/zU5KVwMzvk",
        },
      ],
    },
  ];
}
