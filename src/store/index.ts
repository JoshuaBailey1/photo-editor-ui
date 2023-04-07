import axios, { AxiosResponse } from "axios";

import { createStore } from "vuex";
import { AdjustmentRequest } from "./dtos/adjustment.request";

export default createStore({
  state: {
    photo: "",
    photoWithEdits: "",
    brightness: 100,
    contrast: 100,
    saturation: 100,
  },
  mutations: {
    setPhoto(state, photo: string) {
      state.photo = photo;
    },
    setBrightness(state, brightness: number) {
      state.brightness = brightness;
    },
    setContrast(state, brightness: number) {
      state.contrast = brightness;
    },
    setSaturation(state, brightness: number) {
      state.saturation = brightness;
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

    setPhoto({ commit }, data: string) {
      commit("setPhoto", data);
    },
    setBrightness({ commit }, data: number) {
      commit("setBrightness", data);
    },
    setContrast({ commit }, data: number) {
      commit("setContrast", data);
    },
    setSaturation({ commit }, data: number) {
      commit("setSaturation", data);
    },
  },
  getters: {},
  modules: {},
});
