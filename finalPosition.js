const finalPosition = function (move) {
  var position = []
  var x = 0;
  var y = 0;
  for (const mov of move) {
    if (mov==='north') {
      y=y+1;
    }
    else if (mov==='south') {
      y=y-1;
    }
    else if (mov==='west') {
          x=x-1;
    }
    else
     x=x+1;
    
  
}
position[0]=x;
 position[1]=y;
 return position;}
 
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));