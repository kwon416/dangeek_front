// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";

const dangeek: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#023D9E",
  },
  variables: {
    "border-opacity": 0.1,
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    // ssr: true,
    defaults: {
      global: {
        // 잔물결 효과 제거
        ripple: false,
        hover: false,
      },
      VHover: {
        disabled: true,
      },
      VBtn: {
        ripple: false,
        active: false,
        elevation: 0,
        class: "text-none",
        color: "primary",
        maxHeight: 53,
        rounded: "16",
      },
      VTextField: {
        baseColor: "rgb(0 0 0 / 20%)",
      },
      VTextarea: {
        baseColor: "rgb(0 0 0 / 20%)",
      },
      VIcon: {},
      VImg: {
        draggable: false,
      },
      VAppBar: {
        elevation: 0,
      },
      VToolbarTitle: {
        class: "title-t18-bold",
      },
      VWindow: {
        disabled: true,
      },
    },
    theme: {
      defaultTheme: "dangeek",
      themes: {
        dangeek,
      },
    },
  });
  app.vueApp.use(vuetify);
});
