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
body {
  background: grey;
}
.mainImage {
  float: left;
}
.allSliders {
  float: right;
}
</style>
