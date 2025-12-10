import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lucas Brunel",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-GB",
    baseUrl: "lucas-brunel.github.io/website",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",  // 'created' | 'modified' | 'frontmatter'
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Averia Serif Libre",
        body: "Inter",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#fdfdfdff",
          lightgray: "#f1f0e8ff",
          gray: "#9d9d92ff",
          darkgray: "#4C4C47",
          dark: "#2D2D2A",
          secondary: "#C14953",
          tertiary: "#848FA5",
          highlight: "rgba(251, 250, 245, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2D2D2A",
          lightgray: "#4C4C47",
          gray: "#808075ff",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#fd7681ff",
          tertiary: "#9ebaf6ff",
          highlight: "rgba(45, 45, 42, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
