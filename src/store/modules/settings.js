const state = {
  // TODO: Standart, Precision, Moving Targets, Reaction Time modes
  speed: 2,
  treshold: 5,
  crosshair: 1,
  sound: true,
  precision: false,
};

const getters = {
  speed: (state) => {
    return state.speed;
  },
  treshold: (state) => {
    return state.treshold;
  },
  crosshair: (state) => {
    return state.crosshair;
  },
  sound: (state) => {
    return state.sound;
  },
  precision: (state) => {
    return state.precision;
  },
};

const actions = {
  ChangeSpeed: (context, newValue) => {
    context.commit("ChangeSpeed", newValue);
  },
  ChangeTreshold: (context, newValue) => {
    context.commit("ChangeTreshold", newValue);
  },
  ChangeCrosshair: (context, newValue) => {
    context.commit("ChangeCrosshair", newValue);
  },
  ToggleSound: (context, newValue) => {
    context.commit("ToggleSound", newValue);
  },
  TogglePrecision: (context, newValue) => {
    context.commit("TogglePrecision", newValue);
  },
};

const mutations = {
  ChangeSpeed: (state, newValue) => {
    if (state.sound) {
      var notify = new Audio(require("../../assets/audio/notify.wav"));
      notify.play();
    }
    state.speed = newValue;
  },
  ChangeTreshold: (state, newValue) => {
    if (state.sound) {
      var notify = new Audio(require("../../assets/audio/notify.wav"));
      notify.play();
    }
    state.treshold = newValue;
  },
  ChangeCrosshair: (state, newValue) => {
    if (state.sound) {
      var notify = new Audio(require("../../assets/audio/notify.wav"));
      notify.play();
    }
    state.crosshair = newValue;
  },
  ToggleSound: (state, newValue) => {
    state.sound = newValue;
  },
  TogglePrecision: (state, newValue) => {
    state.precision = newValue;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
