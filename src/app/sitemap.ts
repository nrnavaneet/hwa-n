import type { MetadataRoute } from "next";

const routes = ["", "/craft", "/making", "/makers", "/stage", "/learn", "/sources"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hwa-n.vercel.app";
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
