<template>
  <div class="generateImage">
    <v-text-field
      variant="solo"
      clearable
      v-model="searchTerms"
      label="Search Terms"
      bg-color="grey-lighten-4"
      density="compact"
      placeholder="Mountains"
      @click:clear="onTextCleared"
    ></v-text-field>
    <v-btn
      color="grey-lighten-4"
      append-icon="mdi-image-search"
      size="large"
      @click="getImageFromPexel()"
      height="42"
      >Search</v-btn
    >
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { Constants } from "../../constants";

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
        `${Constants.Connections.PhotoEditorApiUrl}/import/image/${this.searchTerms}`
      );

      this.$store.dispatch("setPhoto", src.data);
      this.$store.dispatch("setOriginalPhoto", src.data);
    },
    onTextCleared() {
      this.$store.dispatch("setPhoto", "");
      this.$store.dispatch("setOriginalPhoto", "");
    },
  },
});
</script>

<style>
.generateImage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3em;
}
</style>
