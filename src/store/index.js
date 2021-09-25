import auth from "./auth";
import cvdata from "./cvdata";
import { createStore } from "vuex";

export default new createStore({
  state: {},

  mutations: {},

  modules: {
    //registering the auth module that is imported
    auth: auth,
    cvdata: cvdata,
  },
});
