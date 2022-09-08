//UDACITY ACTIVITIES

//parameter: variable name and appears in the function declaration
//argument: actual data that is passed into the function when is called


/*function laugh(num){
  var final='';
  for (let i = 0; i < num; i++) {
        final=final+"ha";
      }
  return final+'!';
}
console.log(laugh(3));*/


//***************************************************************** */
/*function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line+ "\n";
}
function buildTriangle(params) {
  var triangle="";
  for (let i = 1; i <= params; i++) {
    triangle=triangle + makeLine(i);
    
  }return triangle;
}
console.log(buildTriangle(20));*/
/****************************************************************************** //*
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
/*var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");*/


/**************************************************************************** */
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
/*
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");*/


/************************************************************************** */
// anonymous function expression
/*var doSomething = function(y) {
  return y + 1;
};
/*var laugh = function (num) {
  var final='';
  for (let i = 0; i < num; i++) {
        final=final+"ha";
      }
  return final+'!';
}
console.log(laugh(10));



// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);
var cry = function Bo() {
  return 'boohoo!';
}
console.log(cry());



/************************************************************************* *
//mine
var laugh = function (num) {
  var final='';
  for (let i = 0; i < num; i++) {
        final=final+"ha";
      }
  return final+'!';}

  function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));}

  emotions('happy',laugh)  ;

  //theirs
  
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
/******************************************************************** */


