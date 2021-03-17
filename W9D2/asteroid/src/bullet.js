const MovingObject = require("./moving_object");
const Util = require("./util");


function Bullet (ship, angle){
    MovingObject.call({
        game: ship.game, 
        radius: Bullet.RADIUS,
        color: Bullet.COLOR,
        pos: ship.pos,
        vel: {
            x: Bullet.SPEED* Math.sin(angle * Math.PI / 180),
            y: Bullet.SPEED* Math.cos(-angle * Math.PI / 180)
        }
    });
}

Bullet.SPEED = 2;
Bullet.RADIUS = 2;
Bullet.COLOR = "green";
Util.inherits(Bullet, MovingObject);

module.exports = Bullet;
