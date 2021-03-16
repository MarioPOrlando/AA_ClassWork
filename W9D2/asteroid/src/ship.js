const MovingObject = require("./moving_object");






function Ship (game) {
    MovingObject.call(this, {
        radius: Ship.RADIUS, 
        color: Ship.COLOR,
        vel: {x: 0, y:0},
        // pos: {
        //     x: CONSTANTS.DIM_X * Math.random(),
        //     y: CONSTANTS.DIM_Y * Math.random()
        // };
        pos: game.randomPosition();
    })
}


Ship.prototype.power = function (impulse) {
    this.vel.x += impulse.x;
    this.vel.y += impulse.y;
}













Ship.RADIUS = 20;
Ship.COLOR = "blue";