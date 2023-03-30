<template>
  <div class="photoEditor">
    <imageBox class="mainImage" />
    <slidersBox class="allSliders" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import imageBox from "./ImageBox.vue";
import slidersBox from "./SlidersBox.vue";

export default defineComponent({
  name: "photoEditor",
  components: {
    imageBox,
    slidersBox,
  },
});
</script>

<style scoped>
.photoEditor {
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 100%;
}
.mainImage {
  grid-column-start: 1;
}
.allSliders {
  grid-column-start: 2;
}
</style>
