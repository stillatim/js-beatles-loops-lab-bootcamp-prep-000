function theBeatlesPlay(musicians, instruments) {
var array = [];
for (let i = 0; i < 4; i++) {
  array.push(musicians[i] + ` plays ` + instruments[i])
}
return array; 
}

var facts = ["He  lived", "He died", "He sucked"]

function johnLennonFacts(facts) {
  var array = []; 
  var i = 0
  while (i < 3) {
    array.push(facts[i] + ` !!!`)
  }
  return array; 
}