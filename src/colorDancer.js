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
}
