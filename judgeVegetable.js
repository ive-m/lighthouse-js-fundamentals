const judgeVegetable = function (vegetables, metric) {
  var highest = 0;
  var name = "";    
  for (const one of vegetables) {
    if (one[metric] > highest) {
      highest  = one[metric]
      name = one.submitter
    }
  }
  return name;
  
}

/*const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 100,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 320
  }
]

const metric = 'redness'*/
vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'
result = judgeVegetable(vegetables, metric)

console.log(result)