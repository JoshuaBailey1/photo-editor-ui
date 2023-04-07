<template>
  <div>
    <v-btn color="green" @click="exportPhoto()">Export</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "exportButton",
  computed: {
    photo(): string {
      return this.$store.state.photo;
    },
    brightness(): number {
      return this.$store.state.brightness;
    },
    contrast(): number {
      return this.$store.state.contrast;
    },
    saturation(): number {
      return this.$store.state.saturation;
    },
  },
  data() {
    return {};
  },
  methods: {
    exportPhoto() {
      let image = new Image();
      image.src = this.photo;
      let canvas = document.createElement("canvas");
      canvas.height = image.height;
      canvas.width = image.width;
      let ctx = canvas.getContext("2d");
      ctx!.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%) saturate(${this.saturation}%)`;
      ctx?.drawImage(image, 0, 0, image.width, image.height);
      let downloadButton = document.createElement("a");
      downloadButton.download = "insert cool name here.png";
      downloadButton.href = canvas.toDataURL();
      downloadButton.click();
    },
  },
});
</script>

<style></style>
