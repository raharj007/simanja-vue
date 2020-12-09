import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store";
import './permission';
import { sync } from "vuex-router-sync";

Vue.config.productionTip = false

sync(store, router);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
