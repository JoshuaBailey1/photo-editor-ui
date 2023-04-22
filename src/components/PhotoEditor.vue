<template>
  <div class="photoEditor">
    <imageBox class="mainImage" />
    <slidersBox class="allSliders" />
    <fileSelect class="fileSelector" />
    <exportButton class="exportButton" />
    <generateImage class="generateImage" />
    <div class="columnTwo"></div>
    <div class="columnTwoRowOne"></div>
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
  grid-template-rows: 0 1.2fr 1fr 4fr 0.5fr 0;
  gap: 1rem;
  background-color: #696969;
}
.mainImage {
  grid-row-start: 2;
  grid-row-end: 6;
  grid-column-start: 2;

  border: 1vw solid #343434;
  background-color: #343434;
  border-radius: 15px;
}
.allSliders {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 3;

  padding-right: 1vw;
  padding-left: 1vw;

  align-items: center;
}
.fileSelector {
  grid-row-start: 2;
  grid-column-start: 3;

  padding-top: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
}

.exportButton {
  grid-row-start: 5;
  grid-column-start: 3;
  padding: 1vw;
}

.generateImage {
  grid-row-start: 2;
  grid-column-start: 3;
  padding-left: 1vw;
  padding-right: 1vw;
  align-self: end;
}

.columnTwo {
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 6;

  background-color: silver;
  border-radius: 15px;
}

.columnTwoRowOne {
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  background-color: #343434;
  border-radius: 15px 15px 0 0;
}
</style>
