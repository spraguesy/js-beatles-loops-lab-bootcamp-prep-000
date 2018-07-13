// add solution here

function theBeatlesPlay (mus, inst) {
  var newArr = [];
  
  for(var i = 0; i < mus.length; i++) {
    var musInst = `${mus} plays ${inst}`;
    newArr.push(musInst);
  }
  return newArr
}

function johnLennonFacts (facts) {
  for (var i=0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  
  return facts
}