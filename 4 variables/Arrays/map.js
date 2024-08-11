//map (method)

let arr = [2,4,5,3,4,]
let a = arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value +index
})
console.log(a)


// filetr method
let arr2 = [34,56,43,6,7,3]
let a2 = arr2.filter((a)=>{
  return a<10
})
  console.log(a2)


// Reduce method
let arr3 = [3,5,67,5]
let newarr3 = arr3.reduce((h1,h2)=>{
  return h1 + h2
})
console.log(newarr3)


// practice set chapter 5
//question number 1 => create an array of numbers and take input  from the user to add number to the arrays
let arr1 = [3, 4, 5, 6, 7];
let a1 = prompt("Enter a number");
a1 = parseInt(a1);  // Corrected the variable name and parseInt usage
arr1.push(a1);
console.log(arr1);



//question 2 square in given number


let arr4 = [3,4,5,3]
let n = arr.map((x)=>{
    return x*x
})
console.log(n)