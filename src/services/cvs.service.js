import axios from "axios";

const API_URL = "https://localhost:44370/api/CVs/";

class CVsService {
  getAll() {
    return axios.get(API_URL).then((response) => {
      return response.data;
    });
  }

  getById(id) {
    return axios.get(API_URL + id).then((response) => {
      return response.data;
    });
  }
}

export default new CVsService();
