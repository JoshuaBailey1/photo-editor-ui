<template>
  <div>
    <img src="../assets/Final4.jpg" class="starImage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "imageBox",
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
