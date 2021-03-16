function MovingObject({pos, vel, radius, color} = {}) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function (ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
  console.log(this.pos);
  ctx.fill();
}


MovingObject.prototype.move = function(){
 this.pos.x += this.vel.x;
 this.pos.y += this.vel.y;
}



module.exports = MovingObject;