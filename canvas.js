window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
    window.webKitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 16);
    };
})();

function Particle(x, y, velY) {
  this.shape = Math.floor(Math.random()*3);
  this.x = Math.floor(Math.random() * window.innerWidth);
  this.y = window.innerHeight - Math.random() * 1000;
  this.velY = velY * Math.random() + 0.2;
  this.minY = 0;
  this.size = Math.floor(Math.random() * 3) + 4;
  this.colour = "rgba(255,255,255,1)";
  this.opacity = Math.random() - 0.2;
}

Particle.prototype.draw = function(c) {
  c.save();
  c.fillStyle = this.colour;
  c.strokeStyle = "#FFF";
  c.globalAlpha = this.opacity;
  c.beginPath();

  if(this.shape==0){
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + 7, this.y - 10.5);
    c.lineTo(this.x + 14, this.y);
  }

  else if(this.shape==1){
    c.arc(this.x,this.y,this.size,0,2*Math.PI,false);
  }

  else{
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + 8, this.y);
    c.lineTo(this.x + 8, this.y + 8);
    c.lineTo(this.x, this.y + 8)
  }
  c.closePath();
  c.lineWidth = 1;
  c.stroke();
  c.restore();
}

Particle.prototype.step = function(width, height) {
  this.y -= this.velY;
  if (this.y <= this.minY - this.size) {
    this.y = window.innerHeight;
  }
}

window.addEventListener("load", function() {

  var canvas = document.getElementById("animation"),
    c = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    amount = 30,
    velY = .5,
    particles = [];

  console.log("Succesfully loaded!");

  c.fillStyle = "#1f1f2b";
  c.fillRect(0, 0, width, height);

  window.addEventListener("resize", function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    c.fillStyle = "#1f1f2b";
  });

  for (var i = 0; i < amount; i += 1) {
    var p = new Particle(this.x, this.y, velY);
    particles.push(p);
  }

  function render() {
    c.fillRect(0, 0, width, height);
    for (var i in particles) {
      particles[i].draw(c);
    }

    for (var i in particles) {
      particles[i].step(width, height);
    }

    requestAnimationFrame(render);
  }

  render();

});