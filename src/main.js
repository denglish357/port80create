import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VuesticPlugin } from "vuestic-ui";
import vuesticGlobalConfig from "./services/vuestic-ui/global-config";
import "vuestic-ui/dist/vuestic-ui.css";
import { createI18n } from "vue-i18n";

const i18nConfig = {
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: require("@/i18n/en.json"),
    ch: require("@/i18n/cn.json"),
    es: require("@/i18n/es.json"),
    ir: require("@/i18n/ir.json"),
    br: require("@/i18n/br.json"),
  },
};

createApp(App)
  .use(store)
  .use(VuesticPlugin, vuesticGlobalConfig)
  .use(router)
  .use(createI18n(i18nConfig))
  .mount("#app");
