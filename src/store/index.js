import Vue from "vue";
import Vuex from "vuex";
import stats from "./modules/stats.js";
import settings from "./modules/settings.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visible: true,
  },
  getters: {
    visible: (state) => {
      return state.visible;
    },
  },
  mutations: {
    Disable_Menu: (state) => {
      state.visible = false;
    },
    Enable_Menu: (state) => {
      state.visible = true;
    },
  },
  actions: {
    Disable_Menu: (context) => {
      context.commit("Disable_Menu");
    },
    Enable_Menu: (context) => {
      context.commit("Enable_Menu");
    },
  },
  modules: {
    stats: {
      namespaced: true,
      ...stats,
    },
    settings: {
      namespaced: true,
      ...settings,
    },
  },
});
