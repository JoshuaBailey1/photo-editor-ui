<template>
  <div class="slidersBox">
    <adjustmentSlider />
    <adjustmentSlider />
    <adjustmentSlider />
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
});
</script>

<style scoped></style>
