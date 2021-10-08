import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { getI18n } from "./vue-i18n/i18n.js";
const i18n = getI18n(Vue);
global.i18n = i18n;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
