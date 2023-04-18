<template>
  <div class="slidersBox">
    <v-slider
      v-model="brightness"
      label="brightness"
      prepend-icon="mdi-brightness-4"
      track-color="white"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateBrightness(brightness)"
    ></v-slider>
    <v-slider
      v-model="contrast"
      label="contrast"
      prepend-icon="mdi-contrast-circle"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateContrast(contrast)"
    ></v-slider>
    <v-slider
      v-model="saturation"
      label="saturation"
      prepend-icon="mdi-palette"
      track-color="yellow"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSaturation(saturation)"
    ></v-slider>
    <v-slider
      v-model="sepia"
      label="sepia"
      prepend-icon="mdi-brush"
      show-ticks="always"
      track-color="orange"
      max="100"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSepia(sepia)"
    ></v-slider>
    <v-slider
      v-model="blur"
      label="blur"
      prepend-icon="mdi-blur"
      show-ticks="always"
      track-color="blue"
      tick-size="3"
      max="5"
      min="0"
      thumb-label="always"
      @vnode-updated="updateBlur(blur)"
    ></v-slider>
    <v-slider
      v-model="sharpness"
      label="sharpness"
      prepend-icon="mdi-sword"
      step="1"
      show-ticks="always"
      track-color="red"
      tick-size="3"
      max="10"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSharpness(sharpness)"
    ></v-slider>
    <v-btn
      color="red"
      append-icon="mdi-arrow-u-left-top"
      @click="resetSliders()"
      >Reset</v-btn
    >
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
      sepia: 0,
      blur: 0,
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
      this.sepia = 0;
      this.$store.dispatch("setSepia", this.sepia);
      this.blur = 0;
      this.$store.dispatch("setBlur", this.blur);
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
    updateSepia(sepia: number) {
      this.$store.dispatch("setSepia", sepia);
    },
    updateBlur(blur: number) {
      this.$store.dispatch("setBlur", blur);
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

<style>
.slidersBox {
  display: grid;
}
</style>
