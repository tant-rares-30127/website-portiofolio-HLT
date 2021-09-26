import { createStore } from "vuex";
import { auth } from "./auth.module";
import { cvs } from "./cvs.module";

const store = createStore({
  modules: {
    auth,
    cvs,
  },
});

export default store;
