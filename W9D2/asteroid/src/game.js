const Asteroid = require("./asteroid");

const CONSTANTS = {
    DIM_X: 960,
    DIM_Y: 540,
    NUM_ASTEROIDS: 10
}

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function (){
    while(this.asteroids.length < CONSTANTS.NUM_ASTEROIDS) {
        let asteroid = new Asteroid({
            x: CONSTANTS.DIM_X * Math.random(),
            y: CONSTANTS.DIM_Y * Math.random()
        }, {game: this});

        this.asteroids.push(asteroid);
    }
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    this.asteroids.forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => asteroid.move());
}

Game.prototype.wrap = function(pos){
    let {x, y} = pos;

    if ( x > CONSTANTS.DIM_X ) x = 0;
    if ( y > CONSTANTS.DIM_Y ) y = 0;
    if ( x < 0 ) x = CONSTANTS.DIM_X;
    if ( y < 0 ) y = CONSTANTS.DIM_Y;

    return {x, y};
}

module.exports = Game;










