<template>
  <v-app :class="'crosshair_' + crosshair">
    <v-main>
      <Stats></Stats>
      <Modal @start="start" />
      <Range ref="Range" />
    </v-main>
  </v-app>
</template>

<script>
import Modal from "./components/Modal";
import Range from "./components/Range";
import Stats from "./components/Stats";

import { mapGetters } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapGetters("settings", ["crosshair"]),
  },

  components: {
    Modal,
    Range,
    Stats,
  },

  methods: {
    start: async function() {
      await this.$refs.Range.Start();
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
