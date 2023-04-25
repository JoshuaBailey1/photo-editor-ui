<template>
  <div class="photoEditor">
    <imageBox class="mainImage" />
    <slidersBox class="allSliders" />
    <fileSelect class="fileSelector" />
    <exportButton class="exportButton" />
    <generateImage class="generateImage" />
    <div class="adjustmentsPanel"></div>
    <div class="inputs"></div>
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
  display: grid;

  grid-template-columns: 0 3fr 1fr 0;
  grid-template-rows: 0 0.2fr 0.2fr 4fr 0.5fr 0;
  gap: 0.5rem;
  background-color: #696969;
}
.mainImage {
  grid-row-start: 2;
  grid-row-end: 6;
  grid-column-start: 2;

  border: 1vw solid #343434;
  background-color: #343434;
  border-radius: 3px;
}
.allSliders {
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 3;

  padding: 1vw;
  align-items: center;
}
.fileSelector {
  grid-row-start: 2;
  grid-column-start: 3;

  padding-top: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 3px;
}
.exportButton {
  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 3;

  border: 0.35vw solid #343434;
  background-color: silver;
  padding: 1vw;
  border-radius: 0 0 3px 3px;
}
.generateImage {
  grid-row-start: 3;
  grid-column-start: 3;

  padding-right: 1vw;
  padding-left: 1vw;
  align-self: center;
  border-radius: 3px;
}
.adjustmentsPanel {
  grid-column-start: 3;
  grid-row-start: 4;
  grid-row-end: 5;

  border: 0.35vw solid #343434;
  background-color: silver;
}
.inputs {
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 4;

  background-color: silver;
  border: 0.35vw solid #343434;
  border-radius: 3px 3px 0 0;
}
</style>
