import { createApp } from "vue";

import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

//import 'es6-promise/auto'

const app = createApp(App);

app.use(store);
app.use(VueAxios, axios);

app.mount("#app");
