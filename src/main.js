import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

import Main from "./components/Main.vue";
import SelectCV from "./components/SelectCV.vue";
import Login from "./components/Login.vue";

//import 'es6-promise/auto'
const routes = [
  {
    path: "/",
    component: SelectCV,
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.mount("#app");
