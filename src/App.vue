<template>
  <div class="container">
    <photoEditor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import photoEditor from "./components/PhotoEditor.vue";

export default defineComponent({
  name: "App",
  components: {
    photoEditor,
  },
});
</script>

<style>
body {
  background: grey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  color: #2c3e50;
}
</style>
