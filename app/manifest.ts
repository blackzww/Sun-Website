import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sun",
    short_name: "Sun",
    description: "Programação, simplificada. Uma linguagem construída sobre Luau.",
    start_url: "/",
    display: "standalone",
    background_color: "#080a0c",
    theme_color: "#080a0c",
    icons: [{ src: "/sun.png", sizes: "1024x1024", type: "image/png" }],
  };
}
