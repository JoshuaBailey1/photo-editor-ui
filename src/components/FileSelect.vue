<template>
  <div>
    <input type="file" @change="onFileSelected" />
    <button @click="onImport">Upload</button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "fileSelect",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    async onImport() {
      const fd = new FormData();
      fd.append("image", this.selectedFile!);
      fd.append("intensity", "0.5");

      await axios.post("http://localhost:8080/adjustment/contrast", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  },
});
</script>

<style></style>
