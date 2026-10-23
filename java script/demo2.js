// class Student {

//     // setter funtion is use to assigning the value
//     // getter function is use to get the value 
// setter(name , age){
// this.name = name;
// this.age = age;

//     }
//     getter(){
//         console.log(this.name , this.age)
//     }
// }

// const obj = new Student();
// obj.setter("satish", 16);
// obj.getter();

// // concat means to add two array
// const arr1 = [1,3,6,8,12,45];
// const arr2 = [2,4,7,9,13,46];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// //it will check all the element of array if all the element is greater than 3 then it will return true otherwise false
// const every = arr1.every((el)=> el>=1) // this is call back funtion  
// console.log(every);

// const freach = arr1.forEach((el)=> console.log(el));  /// it will print all the element of array one by one

// const spl = "hello"
// const arrfrom = Array.from(spl);  /// it will convert string to array
// console.log(arrfrom);

// console.log(spl.indexOf("e"));  /// it will return the index of element in array

// console.log(arr1.reverse());  /// it will reverse the array
// console.log(arrfrom.reverse());  /// it will reverse the array



// this is object in javascript
const student  = {
    name : "satish",
    age : 16,
    rollno : 123,
}
console.log(student.age);  /// it will print the name of student


// this is called destructuring in javascript
// destructuring is a way to extract values from objects or arrays and assign them to variables in a more concise way. In this case, we are extracting the properties of the student object and assigning them to variables with the same name.
const { name, age, rollno } = student;
console.log(name , age , rollno);  /// it will print the name of student

// spread operator is used to copy the values of one object to another object
const number = [1 ,2,3,4,5];
const number1 = [...number];  /// it will copy the values of number to number1
console.log(number1);

// rest operator is used to collect the values of an object into a single variable

const abc = (...nums)=> {
    console.log(nums);
}
console.log(abc(10,15))
