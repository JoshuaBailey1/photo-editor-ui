import { createStore } from "vuex";

export default createStore({
  state: {
    photo: "",
    originalPhoto: "",
    brightness: 100,
    contrast: 100,
    saturation: 100,
    sepia: 0,
    blur: 0,
  },
  mutations: {
    setPhoto(state, photo: string) {
      state.photo = photo;
    },
    setOriginalPhoto(state, originalPhoto: string) {
      state.originalPhoto = originalPhoto;
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
    setSepia(state, sepia: number) {
      state.sepia = sepia;
    },
    setBlur(state, blur: number) {
      state.blur = blur;
    },
  },
  actions: {
    setPhoto({ commit }, data: string) {
      commit("setPhoto", data);
    },
    setOriginalPhoto({ commit }, data: string) {
      commit("setOriginalPhoto", data);
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
    setSepia({ commit }, data: number) {
      commit("setSepia", data);
    },
    setBlur({ commit }, data: number) {
      commit("setBlur", data);
    },
  },
  getters: {},
  modules: {},
});
