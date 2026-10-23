// var x = 10;
// let y = 13;
// const z = 25;

// console.log("hallo world")
// function add(x, y) {    /// how to create a function 
//     return x + y;
// }
// console.log(add(x, y)); ///  () function call   


// // arrow function
// const mul = (a, b) => {
//     return a * b;
// }
// console.log(mul(x, y));

// /// another way to write arrow function
// const sub = (a, b) => a - b;
// console.log(sub(x, y));

// const abc =(a, b) => a + b;
// console.log(abc(x,y));


// array 
// const arr = [1, 2, 3, 4, 5];
const arr = [12,23,45,67,15];

arr.push(100);  /// add element at the end of array
arr.pop();  /// remove last element from array

console.log(arr);   

// type of array 
// map , filter , reduce , find
x

// map method is used to display the element of array one by one
/// here element is a variable which is used to store the value of array one by one
const age = arr.map((element) => {
  console.log(element);
});



// filter method is used to filter the element of array based on condition
const age1 = arr.filter((element) => {
  return element > 20;
});
console.log(age1);

// find method is used to find the element in array 
const age2 =arr.find((element) => {
return element == 45;
});
console.log(age2);


// reduce method is used to reduce the array to a single value
const age3 = arr.reduce((sum , mark) => { //acummulator is sum and current value is mark  here sum is the initial value of the accumulator and mark is the current value of the array
  return sum + mark;
}, 0);// here 0 because we want to start the sum from 0 
console.log(age3);


