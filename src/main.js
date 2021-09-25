import { createApp } from "vue";
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

import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

library.add(faBars);
library.add(fas, fab, far);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(VueAxios, axios);

app.mount("#app");
