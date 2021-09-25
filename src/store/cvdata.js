//import axios from "axios";

import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      currentCV: null,
      //  {
      //   id: null,
      //   introduction: "",
      //   imgSrc: "",
      //   education: "",
      //   workExperience: "",
      //   languages: "",
      //   whatIDo: "",
      //   whatIUse: "",
      //   projects: "",
      //   skills: "",
      //   contactData: {
      //     id: null,
      //     phoneNumber: "",
      //     linkedIn: "",
      //     email: "",
      //     gitHub: "",
      //   },
      // },
    };
  },
  mutations: {
    setCurrentCV(state, payload) {
      this.state.currentCV = payload;
    },
  },
  actions: {
    async getCVForSelectedUser(context, selectedId) {
      axios
        .get("https://localhost:5001/api/CVData" + selectedId)
        .then((response) => {
          if (response.status) {
            return response.data;
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getAllCVData() {
      return this.state.currentCV;
    },
  },
};
