import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    firebase: {
      gen: 2,
    },
  },
  ssr: false,
  app: {
    head: {
      title: "DanGeek",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi, user-scalable=0",
        },
      ],
      // script: [{ type: "text/javascript", src: "/js/appCtr.js" }],
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: "assets/css/settings.scss",
            },
          })
        );
      });
    },
  ],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  components: [{ path: "~/components", pathPrefix: false }],
  css: [
    "vuetify/lib/styles/main.sass",
    "@/assets/fonts/main.css",
    "~/assets/css/style.css",
  ],
  sourcemap: {
    server: false,
    client: false,
  },
});
