// let num = [2, 4, 7, 8, 9];
// let b = num.toString();
// console.log(b);


// arrays to the join number
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.join('-');
// console.log(result);


// // string arrays in 
// let arr = ['Apple', 'Banana', 'Cherry'];
// let result = arr.join('');  // No separator
// console.log(result);



// pop meaning is last element deleted
// num.pop()
// console.log(num)


// push  meaning is last digit number add

// num.push(7)
// console.log(num)

// let r = num.shift()
// console.log(r.num)


let num = [1,2,3,4,5,6,7,8,9]
let num_more = [11,12,13,14,15,16,17,18,19]
let num_more_even = [111,112,113,114,115,116,117,118,119]
let newArray = num.concat(num_more,num_more_even)
console.log(newArray)



//sort method()
let r = [2,45,6,3,1,5]
r.sort()
console.log(r)


// splice method 
let n = [12,114,113,115,4446,4444,2]
n.splice(2,3,225,233)
console.log(n)