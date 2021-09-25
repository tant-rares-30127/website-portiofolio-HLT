import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      user: {
        userId: "",
        username: "",
        password: "",
      },
    };
  },

  getters: {
    loggedUser(state) {
      return state.user;
    },
  },

  mutations: {
    auth_success(state, user) {
      state.status = "success";
      state.user = user;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async signIn(context, payload) {
      axios
        .post("https://localhost:5001/api/Login", {
          username: payload.username,
          password: payload.password,
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((data) => {
          this.inputs = data;
          context.commit("setUser", {
            userId: data.id,
            username: payload.username,
            password: payload.password,
          });
        });
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://localhost:5001/api/Login",
          data: user,
          method: "GET",
        })
          .then((resp) => {
            const user = resp.data.user;
            console.log(user);
          })
          .catch((err) => {
            commit("auth_error");
            reject(err);
          });
      });
    },
  },
};
