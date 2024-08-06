function oneplusAvg(x , y){
  //console.log("done")
  //return 1 + (x + y) / 2
  return Math.round (1 + (x+y) / 2)
}


let a = 2;
let b = 3;
let c = 4;
hello();
console.log("one plus Average of a and b is ", oneplusAvg(a, b))
console.log("one plus Average of b and c is ", oneplusAvg(b, a))
console.log("one plus Average of a and c is ", oneplusAvg(a, c))



//return ka thorugh function
const hello = ()=>{
  console.log("hey how are you i am fine")
 
}