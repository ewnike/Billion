function Billion(days){

var reward = 0.01;
for (var i = 1; i < days; i ++){
  reward =  reward *2;
}
console.log(reward);
}

Billion(15)
