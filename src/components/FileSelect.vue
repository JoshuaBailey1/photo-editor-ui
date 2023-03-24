<template>
  <div class="fileSelect">
    <input type="file" @change="onFileSelected" />
    <button @click="onImport">Upload</button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FileSelect",
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
      await axios.post("http://localhost:8080/adjustment/brightness", {
        intensity: 0.1,
        image: this.selectedFile,
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
