import axios from "axios";

export default {
  state: {
    token: null,
    user: {
      username: "",
    },
  },

  getters: {},

  mutations: {
    auth_success(state, user) {
      state.status = "success";
      state.user = user;
    },
  },

  actions: {
    async signIn() {
      axios

        .post("https://localhost:5001/api/Login",{
          "username":"Tant",
          "password":"1234",
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
        });

      // let response = await axios.get('https://localhost:5001/api/Login', {
      //   username: "Tant",
      //   password: "1234",
      // });
      // console.log(response.data);
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
