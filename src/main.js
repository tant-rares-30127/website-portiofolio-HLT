import { createApp } from 'vue'
import App from './App.vue'
import ProgressBar from 'vuejs-progress-bar'

// import router from "./router";
// import axios from "axios";
// import VueAxios from "vue-axios";
// import store from "./store";


// import App from "./App.vue";
app.use(ProgressBar)

const app = createApp(App);
// app.use(BootstrapVue)
// app.use(VueAxios, axios);
// app.use(store);
app.mount('#app')
