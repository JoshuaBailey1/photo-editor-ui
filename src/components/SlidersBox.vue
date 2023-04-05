<template>
  <div>
    <v-slider
      v-model="brightness"
      label="brightness"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateBrightness(brightness)"
    ></v-slider>
    <v-slider
      v-model="contrast"
      label="contrast"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateContrast(contrast)"
    ></v-slider>
    <v-slider
      v-model="saturation"
      label="saturation"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSaturation(saturation)"
    ></v-slider>
    <v-btn @click="resetSliders()">Reset</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "slidersBox",
  data() {
    return {
      brightness: 100,
      contrast: 100,
      saturation: 100,
    };
  },
  methods: {
    resetSliders() {
      this.brightness = 100;
      console.log("hi?");
      this.$store.dispatch("setBrightness", this.brightness);
      this.contrast = 100;
      this.$store.dispatch("setContrast", this.contrast);
      this.saturation = 100;
      this.$store.dispatch("setSaturation", this.saturation);
    },
    updateBrightness(brightness: number) {
      console.log(brightness);
      this.$store.dispatch("setBrightness", brightness);
    },
    updateContrast(contrast: number) {
      console.log(contrast);
      this.$store.dispatch("setContrast", contrast);
    },
    updateSaturation(saturation: number) {
      console.log(saturation);
      this.$store.dispatch("setSaturation", saturation);
    },
  },
});
</script>

<style scoped></style>
