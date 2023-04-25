<template>
  <div class="exportButton">
    <v-btn
      color="green"
      append-icon="mdi-content-save-edit"
      size="x-large"
      @click="exportPhoto()"
      >Export</v-btn
    >
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
    sepia(): number {
      return this.$store.state.sepia;
    },
    blur(): number {
      return this.$store.state.blur;
    },
  },
  data() {
    return {};
  },
  methods: {
    exportPhoto() {
      let image = new Image();
      image.src = this.photo;

      const imageExtension = this.photo.substring(
        this.photo.indexOf("/") + 1,
        this.photo.indexOf(";")
      );

      let canvas = document.createElement("canvas");
      canvas.height = image.height;
      canvas.width = image.width;
      let ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.filter = `brightness(${this.brightness}%) contrast(${this.contrast}%) saturate(${this.saturation}%) sepia(${this.sepia}%) blur(${this.blur}px)`;
        ctx.drawImage(image, 0, 0, image.width, image.height);

        let downloadButton = document.createElement("a");
        downloadButton.download = `image.${imageExtension}`;
        downloadButton.href = canvas.toDataURL();
        downloadButton.click();
      }
    },
  },
});
</script>

<style>
.exportButton {
  display: grid;
}
</style>
