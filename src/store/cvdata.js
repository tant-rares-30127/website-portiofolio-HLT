//import axios from "axios";

import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      currentId: "",
      currentCV: {
        id: "",
        introduction: "",
        imgSrc: "",
        education: "",
        workExperience: "",
        languages: "",
        whatIDo: "",
        whatIUse: "",
        projects: "",
        skills: "",
        contactData: {
          id: "",
          phoneNumber: "",
          linkedIn: "",
          email: "",
          gitHub: "",
        },
      },
    };
  },
  mutations: {
    setCurrentCV(state, payload) {
      state.currentCV = payload;
      state.currentId = payload.Id;
    },
    setCurrentId(state, payload) {
      state.currentId = payload;
    },
  },
  actions: {
    async getCVForSelectedUser(context, selectedId) {
      axios
        .get("https://localhost:5001/api/CVData/" + selectedId)
        .then((response) => {
          if (response.status) {
            return response.data;
          }
        })
        .then((data) => {
          context.commit("setCurrentCV", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getAllCVData(state) {
      return state.currentCV;
    },
    getCurrentId(state) {
      return state.currentId;
    },
  },
};
