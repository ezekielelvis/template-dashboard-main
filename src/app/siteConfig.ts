export const siteConfig = {
  name: "Shieldify",
  url: "",
  description: "",
  baseLinks: {
    home: "/",
    overview: "/overview",
    details: "/details",
    settings: "/settings",
    projectId: "/details/:projectId",
    projectOverview: "/details/:projectId/overview"
  },
}

export type siteConfig = typeof siteConfig
