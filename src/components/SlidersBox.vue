<template>
  <div class="slidersBox">
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">brightness</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="brightness"
      prepend-icon="mdi-brightness-4"
      track-color="white"
      color="white"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateBrightness(brightness)"
    >
    </v-slider>
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">contrast</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="contrast"
      prepend-icon="mdi-contrast-circle"
      color="black"
      track-color="black"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateContrast(contrast)"
    ></v-slider>
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">saturation</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="saturation"
      prepend-icon="mdi-palette"
      track-color="yellow"
      color="yellow"
      max="200"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSaturation(saturation)"
    ></v-slider>
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">sepia</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="sepia"
      prepend-icon="mdi-brush"
      show-ticks="always"
      track-color="orange"
      color="orange"
      max="100"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSepia(sepia)"
    ></v-slider>
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">blur</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="blur"
      prepend-icon="mdi-blur"
      show-ticks="always"
      track-color="blue"
      color="blue"
      tick-size="3"
      max="5"
      min="0"
      thumb-label="always"
      @vnode-updated="updateBlur(blur)"
    ></v-slider>
    <v-card color="black" width="100" height="50" variant="text">
      <v-card-text class="text-md-center">sharpness</v-card-text>
    </v-card>
    <v-slider
      hide-details
      v-model="sharpness"
      prepend-icon="mdi-sword"
      step="1"
      show-ticks="always"
      track-color="#9A2A2A"
      color="#9A2A2A"
      tick-size="3"
      max="10"
      min="0"
      thumb-label="always"
      @vnode-updated="updateSharpness(sharpness)"
    ></v-slider>
    <v-btn
      color="red"
      append-icon="mdi-arrow-u-left-top"
      class="resetButton"
      size="x-large"
      @click="resetSliders()"
      >Reset</v-btn
    >
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { Constants } from "../../constants";
import { AdjustmentRequest } from "../store/dtos/adjustment.request";

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
      currentSharpness: 0,
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
      if (this.sharpness == this.currentSharpness) {
        //do nothing
      } else if (this.sharpness == 0) {
        this.$store.dispatch("setPhoto", this.originalPhoto);
      } else {
        const adjustmentRequest: AdjustmentRequest = {
          image: this.originalPhoto,
          intensity: sharpness,
        };
        const sharpened = await axios.post(
          `${Constants.Connections.PhotoEditorApiUrl}/adjustment/sharpness`,
          adjustmentRequest
        );

        this.currentSharpness = sharpness;
        this.$store.dispatch("setPhoto", sharpened.data);
      }
    },
  },
});
</script>

<style>
.slidersBox {
  display: grid;
  grid-template-columns: 1fr 3.25fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  align-items: center;
}
.resetButton {
  grid-row-start: 7;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
