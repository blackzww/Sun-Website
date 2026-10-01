import type { MetadataRoute } from "next";
import { docsEntries } from "@/lib/docs-index";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/playground`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    ...docsEntries.map((entry) => ({ url: `${base}${entry.href}`, lastModified: now, changeFrequency: "monthly" as const, priority: entry.slug === "" ? .9 : .7 })),
  ];
}
