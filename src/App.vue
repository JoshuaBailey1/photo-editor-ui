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
  mounted() {
    document.title = "Photo Editor";
  },
});
</script>

<style>
html {
  overflow-y: hidden;
}
</style>
