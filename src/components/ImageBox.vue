<template>
  <body>
    <div class="imageBox">
      <img
        alt="stars"
        src="'data:image;base64,' + $store.state.photo"
        class="starImage"
      />
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "imageBox",
});
</script>

<style scoped>
.starImage {
  float: left;
  border: 25px solid #909090;
  width: 1200;
  height: 800px;
  object-fit: fill;
  margin-left: auto;
  margin-right: auto;
}
</style>
