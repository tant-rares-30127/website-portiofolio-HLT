import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: {
      username: "",
      password: "",
    },
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
      console.log("set username");
      state.user.username = payload.username;
      state.user.password = payload.password;
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
          console.log(data);
          context.commit("setUser", {
            username: payload.username,
            password: payload.password,
          });
          console.log(this.state.user);
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
