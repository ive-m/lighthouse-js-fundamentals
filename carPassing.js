/*Complete the logic in the function carPassing.

The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor.

This function should create a new object with a property called speed, and another property called time and add it to the cars array.
Our function should return an array that includes all of the elements in cars as well as our new element.*/


const carPassing = function (cars, speed) {
  var newObj = {}
  newObj.time = Date.now();
  newObj.speed = speed;
  cars.push(newObj)
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

var car=carPassing(cars, speed)
for (const each of car) {
  console.log(each)
}