<template>
  <v-dialog class="modal" v-model="visible" persistent max-width="290">
    <div class="menu">
      <v-form>
        <div class="field" id="speed">
          <div class="text">Targets per second:</div>
          <v-slider
            v-model="speed"
            value="2"
            color="red darken-1"
            min="1"
            max="3"
            step="0.5"
            :thumb-size="24"
            thumb-color="red darken-3"
            thumb-label
          ></v-slider>
        </div>
        <div class="field" id="treshold">
          <div class="text">Maximum targets on screen:</div>
          <v-slider
            v-model="treshold"
            value="6"
            color="red darken-1"
            min="2"
            max="10"
            step="1"
            :thumb-size="24"
            thumb-color="red darken-3"
            thumb-label
          ></v-slider>
        </div>
        <div class="field" id="additional">
          <div id="crosshair">
            <v-btn
              v-for="(crosshair, i) in crosshairs"
              :key="i"
              @click="ChangeCrosshair(i + 1)"
              class="crosshair_btn"
              depressed
              text
            >
              <img :src="crosshair" alt="" />
            </v-btn>
          </div>
          <div class="checkbox">
            <div class="text">Enable sounds:</div>
            <v-switch v-model="sound" color="red darken-1"></v-switch>
          </div>
        </div>
        <div class="field" id="modes">
          <div class="precision">
            <div class="text">Precision Mode:</div>
            <v-switch v-model="precision" color="red darken-1"></v-switch>
          </div>
        </div>
      </v-form>
    </div>
    <div class="menu button_bar">
      <v-btn href="https://github.com/sez543/sez543.github.io" icon>
        <i class="v-icon fa fa-github"></i>
      </v-btn>
      <v-btn href="https://github.com/sez543/sez543.github.io" icon>
        <i class="v-icon fa fa-trophy"></i>
      </v-btn>
      <v-btn href="https://github.com/sez543/sez543.github.io" icon>
        <i class="v-icon fa fa-info"></i>
      </v-btn>
    </div>
    <v-btn @click="start" depressed large color="red darken-1" text>
      Play
    </v-btn>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Modal",
  data: () => {
    return {
      crosshairs: [
        require("../assets/media/crosshair_1.svg"),
        require("../assets/media/crosshair_2.svg"),
        require("../assets/media/crosshair_3.svg"),
      ],
    };
  },
  computed: {
    ...mapGetters(["visible"]),
    speed: {
      get() {
        return this.$store.state.settings.speed;
      },
      set(newValue) {
        this.$store.commit("settings/ChangeSpeed", newValue);
      },
    },
    treshold: {
      get() {
        return this.$store.state.settings.treshold;
      },
      set(newValue) {
        this.$store.commit("settings/ChangeTreshold", newValue);
      },
    },
    sound: {
      get() {
        return this.$store.state.settings.sound;
      },
      set(newValue) {
        this.$store.commit("settings/ToggleSound", newValue);
      },
    },
    precision: {
      get() {
        return this.$store.state.settings.precision;
      },
      set(newValue) {
        this.$store.commit("settings/TogglePrecision", newValue);
      },
    },
  },
  methods: {
    ...mapActions("settings", ["ChangeCrosshair"]),
    start: function() {
      this.$emit("start");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/modal.scss";
</style>
