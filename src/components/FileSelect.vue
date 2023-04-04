<template>
  <div>
    <input
      type="file"
      @change="onFileSelected"
      accept="image/png, image/jpeg"
    />
    />
    <button @click="onImport">Upload</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "fileSelect",
  computed: {
    photo(): any {
      return this.$store.state.photo;
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
        this.$store.dispatch("setPhoto", { photo: fileReader.result });
      });
    },

    async onImport() {
      // await axios.post("http://localhost:8080/adjustment/contrast", fd, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    },
  },
});
</script>

<style></style>
