export const variables = {
  targets: [],
  crosses: [],
  radius: Math.floor(window.innerHeight * 0.08),
  index_target: 0,
  index_cross: 0,
  audio_pop: new Audio(require("../audio/pop.wav")),
  audio_gameOver: new Audio(require("../audio/end.wav")),
  audio_hit: new Audio(require("../audio/light_pop.mp3")),
  audio_miss: new Audio(require("../audio/miss.wav")),
  audio_start: new Audio(require("../audio/start.wav")),
  rings_hit: {
    red_outer: false,
    white_inner: false,
    red_inner: false,
  },
  hit_dictionary: {
    bullseye: {
      red_outer: true,
      white_inner: true,
      red_inner: true,
      score: 5,
    },
    second_layer: {
      red_outer: true,
      white_inner: true,
      red_inner: false,
      score: 3,
    },
    third_layer: {
      red_outer: true,
      white_inner: false,
      red_inner: false,
      score: 2,
    },
    fourth_layer: {
      red_outer: false,
      white_inner: false,
      red_inner: false,
      score: 1,
    },
  },
};
