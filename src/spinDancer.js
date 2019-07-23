var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-radius', '0');
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var degrees = Math.floor(Math.random() * 180);
  
  this.$node.css({'transform' : 'rotate(' + degrees + 'deg)'})
}