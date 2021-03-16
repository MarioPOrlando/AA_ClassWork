const Game = require("./game");

function GameView (ctx){
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function (){
    this.game.moveObjects();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.start.bind(this));
}


GameView.prototype.bindKeyHandlers = function (){
    console.log(key);
}









module.exports = GameView;










