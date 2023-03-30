<template>
  <div class="sliders">
    <input type="range" min="-100" max="100" value="0" class="slider" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "adjustmentSlider",
});
</script>

<style scoped>
.slider {
  margin-top: 5vh;
  -webkit-appearance: none;
  width: 25vw;
  height: 1vw;
  border-radius: 1vw;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  float: right;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background: purple;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background: purple;
  cursor: pointer;
}
</style>
