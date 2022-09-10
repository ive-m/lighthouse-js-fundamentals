//************************Udacity********************************

/*Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.*/

//My code
/*
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(bill) {
bill = bill+ bill*15/100;
return Number.parseFloat(bill).toFixed(2);

});
console.log(totals);*/

/*Theirs

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
});
*/
//************************************************************** */
/*Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".*/

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++){
      if(numbers[i][j]%2===0)
      numbers[i][j]="even";
      else numbers[i][j]="odd";
    }}
    
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      
    }