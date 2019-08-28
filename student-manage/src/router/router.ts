import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Charts from "../views/Charts.vue";
import Login from "../views/Login.vue";
import KeyCharts from "../views/KeyCharts.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/charts",
      name: "charts",
      component: Charts
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/keyCharts",
      name: "keyCharts",
      component: KeyCharts
    }
  ]
});
