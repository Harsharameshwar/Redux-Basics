// console.log("Hello World!");

// // function hellWorld(){
// //     console.log("This is the function");
// // }

// // function app(func){
// //     console.log(func)
// // }

// // app(hellWorld);

// function sayHello(){
//     return function(){
//         return "Hello world"
//     }
// }
// let fn=sayHello();
// let m=fn();

// console.log(m)

// let fn1= function(){
//     return "Welcome"
// }


// console.log(fn1); //Returns the whole functions 
// console.log(fn1()); // Return the return value of the function

const input="   JavaScript    ";
const trim=str=> str.trim();
const Wrap= type=>str => `<${type}>${str}</${type}>`;
const toLowerCase= str => str.toLowerCase();

trim(input);

const pipe=require("lodash/fp/pipe");

const res=Wrap(toLowerCase(trim(input)))

const transform=pipe(trim,toLowerCase,Wrap("div"));

console.log(transform(input))