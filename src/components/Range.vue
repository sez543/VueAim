<template>
  <div class="range" @click="incrementTotal">
    <div class="targets">
      <div v-if="!precision" class="standart">
        <div
          v-for="(target, i) in targets"
          :key="i"
          class="white large"
          :style="{
            top: target.y + 'px',
            right: target.x + 'px',
          }"
          @click="Clear(target.index)"
        >
          <div class="red large" @click="Register_Hit('red_outer')">
            <div class="white small" @click="Register_Hit('white_inner')">
              <div class="red small" @click="Register_Hit('red_inner')"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="precision" class="precision">
        <div
          @click="Clear(target.index)"
          v-for="(target, i) in targets"
          :key="i"
          :style="{
            top: target.y + 'px',
            right: target.x + 'px',
          }"
          class="red small"
        ></div>
      </div>
    </div>
    <div class="crosses" v-for="(cross, j) in crosses" :key="j + 6">
      <img
        :style="{
          top: cross.y + 'px',
          left: cross.x + 'px',
        }"
        class="cross"
        src="../assets/media/cross.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { variables } from "../assets/scripts/local_data.js";
import { Events } from "../assets/scripts/events.js";
import { Game_Functions } from "../assets/scripts/game_functions.js";
export default {
  name: "Range",
  computed: {
    ...mapGetters(["visible"]),
    ...mapGetters("settings", ["speed", "treshold", "sound", "precision"]),
  },
  created: Events,
  data: () => {
    return variables;
  },
  methods: {
    ...mapActions("stats", [
      "ResetValues",
      "incrementScore",
      "incrementTotal",
      "incrementHits",
      "updateAccuracy",
    ]),
    ...mapActions(["Disable_Menu", "Enable_Menu"]),
    ...Game_Functions,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/range.scss";
</style>
