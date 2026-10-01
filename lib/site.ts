export const siteConfig = {
  name: "Sun",
  description: "Programação, simplificada. Uma linguagem construída sobre Luau.",
  github: "https://github.com/blackzww/Sun",
  raw: "https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua",
  version: "1.0.0",
};

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}
