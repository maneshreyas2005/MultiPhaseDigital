import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSitemap({
      hostname: "https://multiphasedigital.com",
      routes: [
        "/",
        "/#homePage",
        "/#Services",
        "/#Testimonial",
        "/#OurPresence",
        "/#OurTeam",
        "/contactus",
        "/#OurPartners",
      ],
    }),
  ],
});
