<template>
  <v-app>
    <div class="main"><photoEditor /></div>
  </v-app>
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
.main {
  background-color: grey;
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
</style>
