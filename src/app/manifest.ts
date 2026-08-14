import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rollin · AI Route Decision Engine",
    short_name: "Rollin",
    description:
      "Rollin evaluates every available load against your truck's position, route economics, and what comes next, not just the rate on top.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1626",
    theme_color: "#0A1626",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
