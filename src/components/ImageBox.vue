<template>
  <div>
    <img class="starImage" v-bind:src="$store.state.photo.photo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "imageBox",
  computed: {
    photo() {
      return this.$store.state.photo.photo;
    },
  },
});
</script>

<style scoped>
.starImage {
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 75vw;
}
</style>
