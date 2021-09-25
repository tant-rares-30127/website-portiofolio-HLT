//import axios from "axios";

export default {
  namespaced: true,
  state: {
    currentCV: {
      id: null,
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
        id: null,
        phoneNumber: "",
        linkedIn: "",
        email: "",
        gitHub: "",
      },
    },
  },
};
