import VueI18n from "vue-i18n";
import messages from "./messages";
import { dateTimeFormats } from "./dateTimeFormats";
import { numberFormats } from "./numberFormats";

let i18n;

export function getI18n(vue) {
  if (!i18n) {
    vue.use(VueI18n);
    i18n = new VueI18n({
      locale: "de", // set locale
      messages, // set locale messages
      dateTimeFormats,
      numberFormats,
    });
  }
  return i18n;
}
