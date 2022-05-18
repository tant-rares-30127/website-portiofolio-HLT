import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import CV from "./components/CV.vue";
import Login from "./components/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cv",
    name: "cv",
    component: CV,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
