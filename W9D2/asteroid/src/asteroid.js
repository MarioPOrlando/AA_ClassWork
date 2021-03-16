const MovingObject = require("./moving_object");
const Util = require("./util");
const CONSTANTS = {
    COLOR: "grey",
    RADIUS: 30
};



function Asteroid(pos){
    MovingObject.call(this, {pos: pos, vel: Math.random(), radius: CONSTANTS.RADIUS, color: CONSTANTS.COLOR});
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;
