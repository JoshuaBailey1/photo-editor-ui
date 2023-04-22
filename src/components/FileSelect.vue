<template>
  <div>
    <v-file-input
      label="Select Image"
      show-size
      density="compact"
      variant="solo"
      type="file"
      @input="onFileSelected"
      @click:clear="onFileCleared"
      accept="image/png, image/jpeg, image/bmp, image/tiff, image/gif, image/webp"
      prepend-inner-icon="mdi-camera"
      prepend-icon=""
      bg-color="grey-lighten-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "fileSelect",
  computed: {
    photo(): string {
      return this.$store.state.photo;
    },
    originalPhoto(): string {
      return this.$store.state.originalPhoto;
    },
  },
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.selectedFile!);
        fileReader.addEventListener("load", () => {
          this.$store.dispatch("setPhoto", fileReader.result);
          this.$store.dispatch("setOriginalPhoto", fileReader.result);
        });
      }
    },
    onFileCleared() {
      this.$store.dispatch("setPhoto", "");
      this.$store.dispatch("setOriginalPhoto", "");
    },
  },
});
</script>

<style></style>
