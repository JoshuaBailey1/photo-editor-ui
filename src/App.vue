<template>
  <img alt="Vue logo" src="./assets/wowchards.png" />
  <FileSelect />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileSelect from "./components/FileSelect.vue";

export default defineComponent({
  name: "App",
  components: {
    FileSelect,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
