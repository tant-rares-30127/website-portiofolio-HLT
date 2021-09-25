import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(fas, fab, far);
dom.watch();
import Main from "./components/Page/Main.vue";
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
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.mount("#app");
