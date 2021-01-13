<template>
  <v-card class="stats" elevation="3">
    <h5>Score: {{ score }}</h5>
    <h5>Targets hit: {{ hits }}</h5>
    <h5>Accuracy: {{ accuracy }}%</h5>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Stats",
  computed: {
    ...mapGetters("stats", ["score", "hits", "accuracy"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/stats.scss";
</style>
