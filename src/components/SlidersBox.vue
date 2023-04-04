<template>
  <div>
    <adjustmentSlider
      id="brightness"
      v-model="brightness"
      class="brightness"
      @input="updateBrightness(+brightness)"
    />
    <adjustmentSlider
      id="contrast"
      v-model="contrast"
      class="contrast"
      @input="updateContrast(+contrast)"
    />
    <adjustmentSlider
      id="saturation"
      v-model="saturation"
      class="saturation"
      @input="updateSaturation(+saturation)"
    />
    <adjustmentSlider />
    <adjustmentSlider />
    <adjustmentSlider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import adjustmentSlider from "./AdjustmentSlider.vue";

export default defineComponent({
  name: "slidersBox",
  components: {
    adjustmentSlider,
  },
  data() {
    return {
      brightness:
        (document.getElementById("brightness") as HTMLInputElement)?.value ?? 0,
      contrast:
        (document.getElementById("contrast") as HTMLInputElement)?.value ?? 0,
      saturation:
        (document.getElementById("saturation") as HTMLInputElement)?.value ?? 0,
    };
  },
  methods: {
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
