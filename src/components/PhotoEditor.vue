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
  grid-template-columns: 75% 25%;
  grid-template-rows: 100%;
}
.mainImage {
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 1;
}
.allSliders {
  grid-row-start: 1;
  grid-column-start: 2;
}
.fileSelector {
  grid-row-start: 1;
  grid-column-start: 2;
}
</style>
