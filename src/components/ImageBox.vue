<template>
  <div>
    <v-img class="image" v-bind:src="$store.state.photo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "imageBox",
  computed: {
    photo() {
      return this.$store.state.photo;
    },
    brightness() {
      return `brightness(${this.$store.state.brightness}%)`;
    },
    contrast() {
      return `contrast(${this.$store.state.contrast}%)`;
    },
    saturation() {
      return `saturate(${this.$store.state.saturation}%)`;
    },
    filters() {
      return `brightness(${this.$store.state.brightness}%) contrast(${this.$store.state.contrast}%) saturate(${this.$store.state.saturation}%)`;
    },
  },
});
</script>

<style scoped>
.image {
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 75vw;

  filter: v-bind(filters);
}
</style>
