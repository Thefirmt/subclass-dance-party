var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = `rgb(${r}, ${g}, ${b})`;
  this.$node.css('border-color', color);
  this.move();
}

makeColorDancer.prototype.move = function() {
  var position = this.$node.position();
  this.top = position.top
  this.left = position.left
  
  var context = this;
  
  var random1 = Math.floor(Math.random() * 4);
  var random2 = Math.floor(Math.random() * 4);
  
  var random3 = random1 - random2;
  var random4 = random1 - random2;
  
  this.setPosition(context.top += random3, context.left += random4); 
}
