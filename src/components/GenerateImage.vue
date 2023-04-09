<template>
  <div>
    <v-text-field
      v-model="searchTerms"
      label="image"
      placeholder="tigers"
    ></v-text-field>
    <v-btn color="yellow" @click="getImageFromPexel()">Get Image</v-btn>
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

<style></style>
