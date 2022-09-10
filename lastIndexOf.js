/*Define a function lastIndexOf.
When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
JavaScript has a .indexOf function (which does something similar), but you may not use it in this exercise.*/

function lastIndexOf(array, value) {
  var index = -1;
  for (let i = 0; i < array.length; i ++) {
    if (value === array[i]) {
      index = i;
    }

    
  }return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);