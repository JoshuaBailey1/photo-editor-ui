<template>
  <div>
    <v-file-input
      label="Select Image"
      show-size
      density="compact"
      type="file"
      @change="onFileSelected"
      accept="image/png, image/jpeg"
      prepend-icon="mdi-camera"
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
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedFile!);
      fileReader.addEventListener("load", () => {
        this.$store.dispatch("setPhoto", fileReader.result);
        this.$store.dispatch("setOriginalPhoto", fileReader.result);
      });
    },
  },
});
</script>

<style></style>
