// for loop 

let marks = {
  harry: 90,
  lovish: 78,
  monika: 80,
  nitin: 89
}

// for(let i = 0; i < Object.keys(marks).length; i++){
//   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


//question  no 2  for in loop 

for(let key in marks) {
 // console.log("The marks of" + key +"are" +marks[key])
}


// question noumber 3 in correct number
let cn = 48;
let i
while(i != cn){
  i = prompt("Enter the  number") 
}
console.log("you have a enterd a correct number")


// question no 4
const mean = (a, b, c, d)=>{
  return(a+ b+ c+ d)/4
}
console.log(mean(4,5,6,7))