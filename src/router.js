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

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;