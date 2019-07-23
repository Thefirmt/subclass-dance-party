$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    
    window.dancers.push(dancer);
  });
  
  $('.dancefloor').on('click', function (e) { //Relative ( to its parent) mouse position 
        var posX = $(this).position().left,
            posY = $(this).position().top;
        
        var randomNum1;
        var randomNum2;
        // alert((e.pageX - posX) + ' , ' + (e.pageY - posY));
        for (var i = 0; i < window.dancers.length; i++) {
          randomNum1 = Math.random() * 200 - 100;
          randomNum2 = Math.random() * 200 - 100;
          window.dancers[i].moveTo((e.pageY - posY + randomNum1), (e.pageX - posX + randomNum2));
        }
        
    });
  
  //lineup button
  $('.line-up-button').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; ++i) {
      window.dancers[i].lineUp(i);  
      }
      
    });
  $('.spread').on('click', function(event){
    for (var i = 0; i < window.dancers.length; ++i) {
      var spreadTop = $("body").height() * Math.random();
      var spreadLeft = $("body").width() * Math.random();
      
      window.dancers[i].moveTo(spreadTop, spreadLeft);
    }
  })
  
  $('.pair').on('click', function(event){
    for(var i = 0; i < window.dancers.length; i+=2){
      var spreadTop = $("body").height() * Math.random();
      var spreadLeft = $("body").width() * Math.random();
      if(window.dancers[i+1] !== undefined) {
        window.dancers[i+1].moveTo(spreadTop, spreadLeft+20);
        window.dancers[i+1].bounce();
      }
      window.dancers[i].moveTo(spreadTop, spreadLeft);
      window.dancers[i].bounce();
      
    }
  })
  
});

