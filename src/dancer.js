// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.step();
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.top;
  this.left;
  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return dancer;
};

makeDancer.prototype.move = function () {
    
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(position, startLeft) {
  this.$node.stop();
  this.$node.stop();
  
  var middle = $('body').height() / 2;
  // var pageMiddle = $('body').width() / 2;
  var offset = position;
  
  this.$node.animate({
    top: middle,
    left: startLeft + offset,
  }, 'slowly');
  // this.setPosition(this.top, middle);
}

makeDancer.prototype.moveTo = function(top, left) {
  this.$node.stop();
  this.$node.stop();
  
    this.$node.animate({
    top: top,
    left: left,
  }, 'slowly');
}

makeDancer.prototype.bounce = function(amount = 50) {
  // var pos = this.$node.position();
  // var offset = this.$node.offset();
  // var originTop = offset.top;
  // var context = this;
  // this.$node.animate({
  //     top : '200px',
  // }, 1500, function() {
  //     context.$node.animate({
  //         top : '-200px',
  // }, 1500)
  // });
  
  // context = this.$node;
  // context.stop();
  var bounceIt = function() {
    this.$node.animate({top:'+='+amount}, 200);
    this.$node.animate({top:'-='+amount}, 200, bounceIt.bind(this));
  }
   
  bounceIt.call(this);
        
  // this,$node.animate({
  //   top:
  //   left:
  // }, 'slowly');
}

makeDancer.prototype.wave = function (position, startLeft, amount) {
  this.lineUp(position, startLeft);
  
  
  setTimeout(this.bounce.bind(this, amount), position+500);
  
}













