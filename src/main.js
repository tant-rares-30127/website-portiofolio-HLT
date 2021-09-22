import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App.vue";


const app = createApp(App);
app.use(BootstrapVue)
app.use(VueAxios, axios);
app.use(store);
app.mount('#app')
