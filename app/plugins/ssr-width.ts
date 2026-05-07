import { provideSSRWidth } from "@vueuse/core";
import { DESKTOP_BREAKPOINT } from "@@/shared/utils/constants";

export default defineNuxtPlugin((nuxtApp) => {
  provideSSRWidth(DESKTOP_BREAKPOINT, nuxtApp.vueApp);
});
