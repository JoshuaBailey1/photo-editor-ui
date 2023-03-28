import axios, { AxiosResponse } from "axios";
import { createStore } from "vuex";
import { AdjustmentRequest } from "./dtos/adjustment.request";

export default createStore({
  state: {
    photo: "",
  },
  mutations: {
    setPhoto(state, photo: string) {
      state.photo = photo;
    },
  },
  actions: {
    async adjustBrightness({ commit }, body: AdjustmentRequest) {
      return await axios
        .post("http://localhost:8080/adjustment/brightness", body)
        .then((photo: AxiosResponse<string>) => {
          commit("setPhoto", photo.data);
        })
        .catch((e) => {
          throw `Failed to adjust brightness ${e}`;
        });
    },
  },
  modules: {},
});
