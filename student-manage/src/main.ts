import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import echarts from "echarts";
import store from './store/index'
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
