import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  title: "Digital Image Processing",
  description: "A complete guide to Digital Image Processing (DIP)",
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/course/': { base: '/course/', items: sidebarCourse() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KeerthX/digitalimage_processing' }
    ]
  }
})

function sidebarCourse(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Module I',
      collapsed: false,
      base: 'course/m1-',
      items: [
        { text: 'Introduction to DIP', link: '1-intro' }
      ]
    },
    {
      text: 'Module II',
      collapsed: false,
      base: 'course/m2-',
      items: [
      ]
    }
  ]
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Course',
      link: '/course/',
      activeMatch: '/course/'
    },
    {
      text: 'Contribute',
      items: [
        {
          text: 'Documentation',
          link: 'https://github.com/KeerthX/digitalimage_processing'
        },
        {
          text: 'Donate',
          link: 'https://rzp.io/l/zU5KVwMzvk'
        }
      ]
    }
  ]
}
