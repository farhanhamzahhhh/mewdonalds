export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://mewdonalds.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
