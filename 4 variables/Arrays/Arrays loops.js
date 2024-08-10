let num = [3,54,2,3,43,54]
for(let i=0; i<num.length; i++){
  console.log(num[i])
}


// for each loop
num.forEach((element)=>{
  console.log(element*element)
  
});

//Array.from
let name ="Shyam"
let arr =Array.from(name)
console.log(arr)