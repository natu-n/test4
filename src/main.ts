import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/dayjs";
import { createPinia } from 'pinia';

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  createPinia(): any,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
