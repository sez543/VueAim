export const Game_Functions = {
  Start: async function() {
    if (this.sound) {
      this.audio_start.play();
    }
    if (this.precision) {
      this.radius = Math.floor(window.innerHeight * 0.03);
    } else {
      this.radius = Math.floor(window.innerHeight * 0.08);
    }
    this.Disable_Menu();
    this.ResetValues();
    this.targets = [];
    this.index = 0;
    while (this.targets.length < this.treshold) {
      var x = 0;
      var y = 0;
      var w = document.querySelector(".stats").scrollWidth - 15;
      var h = document.querySelector(".stats").scrollHeight - 15;
      if (window.innerWidth > 700) {
        y = Math.random() * (window.innerHeight - this.radius);
        if (y <= h) {
          x = Math.random() * (window.innerWidth - this.radius - w) + w;
        } else {
          x = Math.random() * (window.innerWidth - this.radius);
        }
      } else {
        y = Math.random() * (window.innerHeight - this.radius - h) + h;
        x = Math.random() * (window.innerWidth - this.radius);
      }
      this.targets.push({
        x: x,
        y: y,
        index: this.index,
      });
      if (this.sound) {
        this.audio_pop.play();
      }
      this.index++;
      await new Promise((y) => setTimeout(y, 1000 / this.speed));
    }
    if (this.sound) {
      this.audio_gameOver.play();
    }
    this.crosses = [];
    this.numbers = [];
    this.Enable_Menu();
  },

  Register_Hit: function(ring) {
    this.rings_hit[ring] = true;
  },

  Clear: function(index) {
    this.targets = this.targets.filter(function(i) {
      return i.index != index;
    });
    if (this.sound) {
      this.audio_hit.play();
    }
    this.incrementHits(1);
    this.Add_Score();
    this.rings_hit = {
      red_outer: false,
      white_inner: false,
      red_inner: false,
    };
  },

  Add_Score: function() {
    Object.keys(this.hit_dictionary).forEach((key) => {
      if (
        this.hit_dictionary[key].red_inner === this.rings_hit.red_inner &&
        this.hit_dictionary[key].red_outer === this.rings_hit.red_outer &&
        this.hit_dictionary[key].white_inner === this.rings_hit.white_inner
      ) {
        this.incrementScore(this.hit_dictionary[key].score);
      }
    });
  },
};
