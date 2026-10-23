const x  = 10;
const y = 20;

import add from "./add.js";
import subt from "./subt.js";// default export
import {mul} from "./mul.js"; // named export
import {div} from "./div.js";

console.log(add(x, y));
console.log(subt(x, y));
console.log(mul(x, y));


console.log(div(x, y));


const student = {
    name : "John",
    age : 20,
}    // this is called pure function 

console.log(student.age);
student.age = 21; /// update the value of age
console.log(student.age);


const newStudent = {
    ...student,  /// spread operator // shallow copy of student object
    age : 35
}
console.log(newStudent.age);  /// it will print the age of newStudent
 
const deepcopy = structuredClone(student);  /// deep copy of student object
console.log(deepcopy.age);


let ab = 27 ;
const add1 = (a , b) => 
{
    return a + b + ab 
}
console.log(add1(23,45)) // this is called impure function 


let ac = 23 
let ad = "23"
console.log(ac === ad)


