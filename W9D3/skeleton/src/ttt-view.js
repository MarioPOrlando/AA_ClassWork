class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }


  bindEvents() {
    this.$el.on("click", "li", (e) => {
      // this.$el.preventDefault();
      let $square = $(e.target);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data("pos");
    let currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    if (currentPlayer === "x"){
      $square.addClass("greenX");
    }else{
      $square.addClass("orangeO");
    }
  };

  setupBoard() {
    const $ul = $("<ul>");
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let $li = $("<li></li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    };
    this.$el.append($ul);
  };
}

module.exports = View;
