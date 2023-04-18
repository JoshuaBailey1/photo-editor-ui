<template>
  <div class="generateImage">
    <v-text-field
      clearable
      v-model="searchTerms"
      label="Search Terms"
      bg-color="grey-lighten-2"
      placeholder="Mount Rainier"
    ></v-text-field>
    <v-btn
      color="yellow"
      append-icon="mdi-image-search"
      @click="getImageFromPexel()"
      >Find Images</v-btn
    >
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "generateImage",
  computed: {
    photo(): string {
      return this.$store.state.photo;
    },
  },
  data() {
    return {
      searchTerms: "",
    };
  },
  methods: {
    async getImageFromPexel() {
      const src = await axios.get(
        `http://localhost:8080/import/image/${this.searchTerms}`
      );

      this.$store.dispatch("setPhoto", src.data);
      this.$store.dispatch("setOriginalPhoto", src.data);
    },
  },
});
</script>

<style>
.generateImage {
  display: grid;
  grid-template-columns: 50fr 50fr;
}
</style>
