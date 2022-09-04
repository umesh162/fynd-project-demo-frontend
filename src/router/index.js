import store from "@/store";
import Router from "vue-router";

import Login from "../components/AuthScreen/LoginPage.vue";
import Register from "../components/AuthScreen/RegisterPage.vue";
import Home from "../components/Community/HomePage.vue";
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        let auth = store.getters["auth/isAuthenticated"];
        if (!auth && to.name !== "login") {
          next("/");
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
