<template>
  <div class="photoEditor">
    <imageBox class="mainImage" />
    <slidersBox class="allSliders" />
    <fileSelect class="fileSelector" />
    <exportButton class="exportButton" />
    <generateImage class="generateImage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import exportButton from "./ExportButton.vue";
import fileSelect from "./FileSelect.vue";
import generateImage from "./GenerateImage.vue";
import imageBox from "./ImageBox.vue";
import slidersBox from "./SlidersBox.vue";

export default defineComponent({
  name: "photoEditor",
  components: {
    imageBox,
    slidersBox,
    fileSelect,
    exportButton,
    generateImage,
  },
});
</script>

<style scoped>
.photoEditor {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 0 3fr 1fr 0;
  grid-template-rows: 0 1fr 1fr 4fr 1fr 0;
  gap: 1rem;
}
.mainImage {
  grid-row-start: 2;
  grid-row-end: 6;
  grid-column-start: 2;

  border: 1vw solid #343434;
  background-color: #343434;
}
.allSliders {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 3;
}
.fileSelector {
  grid-row-start: 2;
  grid-column-start: 3;
}

.exportButton {
  grid-row-start: 5;
  grid-column-start: 3;
}

.generateImage {
  grid-row-start: 2;
  grid-column-start: 3;

  align-self: center;
}
</style>
