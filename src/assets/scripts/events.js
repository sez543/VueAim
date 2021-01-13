export const Events = function() {
  window.addEventListener("click", async (mouseEvent) => {
    if (!this.visible) {
      var temp = this.index_cross;
      this.crosses.push({
        y: mouseEvent.pageY - 5,
        x: mouseEvent.pageX - 5,
        index: temp,
      });
      this.index_cross++;
    }
  });
};
