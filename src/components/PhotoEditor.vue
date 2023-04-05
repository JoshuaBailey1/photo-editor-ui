<template>
  <div class="photoEditor">
    <imageBox class="mainImage" />
    <slidersBox class="allSliders" />
    <fileSelect class="fileSelector" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import fileSelect from "./FileSelect.vue";
import imageBox from "./ImageBox.vue";
import slidersBox from "./SlidersBox.vue";

export default defineComponent({
  name: "photoEditor",
  components: {
    imageBox,
    slidersBox,
    fileSelect,
  },
});
</script>

<style scoped>
.photoEditor {
  display: grid;
  grid-template-columns: 1% 74% 24% 1%;
  grid-template-rows: 2% 23% 73% 2%;
}
.mainImage {
  justify-self: stretch;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  align-self: stretch;
}
.allSliders {
  grid-row-start: 3;
  grid-column-start: 3;
  align-self: center;
}
.fileSelector {
  grid-row-start: 2;
  grid-column-start: 3;
  /* justify-self: center; */
  align-self: center;
}
</style>
