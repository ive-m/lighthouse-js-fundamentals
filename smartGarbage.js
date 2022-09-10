
//const smartGarbage = function (trash, bins)*****THEIRS

function smartGarbage(trash, bins) {
  if (trash === "waste") {
    bins.waste++
  }
  if (trash === "recycling") {
    bins.recycling++
  }
  else bins.compost++
  return bins;

}

console.log(smartGarbage("recycling",{waste:4, recycling:2, compost:5}))