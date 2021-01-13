const state = {
  score: 0,
  total: 0,
  hits: 0,
  accuracy: 0,
};
const getters = {
  score: (state) => {
    return state.score;
  },
  total: (state) => {
    return state.total;
  },
  hits: (state) => {
    return state.hits;
  },
  accuracy: (state) => {
    return state.accuracy;
  },
};
const actions = {
  ResetValues: (context) => {
    context.commit("ResetValues");
  },
  incrementScore: (context, points) => {
    context.commit("incrementScore", points);
  },
  incrementTotal: (context) => {
    context.commit("incrementTotal");
    context.commit("updateAccuracy");
  },
  incrementHits: (context) => {
    context.commit("incrementHits");
    context.commit("updateAccuracy");
  },
};
const mutations = {
  ResetValues: (state) => {
    state.score = 0;
    state.total = 0;
    state.hits = 0;
    state.accuracy = 0;
    state.timer = 0;
  },
  incrementScore: (state, points) => {
    state.score += points;
  },
  incrementTotal: (state) => {
    state.total++;
  },
  incrementHits: (state) => {
    state.hits++;
  },
  updateAccuracy: (state) => {
    state.accuracy = Math.floor((state.hits / state.total) * 100);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
