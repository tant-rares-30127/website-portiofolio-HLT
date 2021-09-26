import CVsService from "../services/cvs.service";

export const cvs = {
  namespaced: true,
  actions: {
    getAll({ commit }) {
      return CVsService.getAll().then(
        cvs => {
          commit("cvsAllSuccess", cvs);
          return Promise.resolve(cvs);
        },
        error => {
          commit("cvsAllFailure");
          return Promise.reject(error);
        }
      );
    },
    getById({ commit }, id) {
      return CVsService.getById(id).then(
        (cv) => {
          commit("cvsByIdSuccess", cv);
          return Promise.resolve(cv);
        },
        (error) => {
          commit("cvsByIdFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    cvsAllSuccess(state, cvs) {
      state.cvs = cvs;
    },
    cvsAllFailure(state) {
      state.cvs = null;
    },
    cvsByIdSuccess(state, cv) {
      state.currentCV = cv;
    },
    cvsByIdFailure(state) {
      state.currentCV = null;
    },
  },
};
