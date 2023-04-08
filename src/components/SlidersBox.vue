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
    <v-slider
      v-model="sharpness"
      label="sharpness"
      step="1"
      show-ticks="always"
      tick-size="3"
      max="10"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSharpness(sharpness)"
    ></v-slider>
    <v-btn color="red" @click="resetSliders()">Reset</v-btn>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "slidersBox",
  computed: {
    photo(): string {
      return this.$store.state.photo;
    },
    originalPhoto(): string {
      return this.$store.state.originalPhoto;
    },
  },
  data() {
    return {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sharpness: 0,
    };
  },
  methods: {
    resetSliders() {
      this.brightness = 100;
      this.$store.dispatch("setBrightness", this.brightness);
      this.contrast = 100;
      this.$store.dispatch("setContrast", this.contrast);
      this.saturation = 100;
      this.$store.dispatch("setSaturation", this.saturation);
      this.sharpness = 0;
      this.$store.dispatch("setPhoto", this.originalPhoto);
    },
    updateBrightness(brightness: number) {
      this.$store.dispatch("setBrightness", brightness);
    },
    updateContrast(contrast: number) {
      this.$store.dispatch("setContrast", contrast);
    },
    updateSaturation(saturation: number) {
      this.$store.dispatch("setSaturation", saturation);
    },
    async updateSharpness(sharpness: number) {
      if (this.sharpness == 0) {
        this.$store.dispatch("setPhoto", this.originalPhoto);
      } else {
        const sharpened = await axios.post(
          "http://localhost:8080/adjustment/sharpness",
          {
            image: this.originalPhoto,
            intensity: sharpness,
          }
        );

        this.$store.dispatch("setPhoto", sharpened.data);
      }
    },
  },
});
</script>

<style scoped></style>
