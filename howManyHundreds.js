function howManyHundreds(num) {
  var x = num % 100;
  if (x===0) {
    return num/100;
  }
  else {
    num=num-x;
    return num/100;
  }
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);