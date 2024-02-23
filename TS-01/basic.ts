// primitive types : number , string , booleans
// more complex types: arrays , objects
// Function types, parameters

let age: number;
age = 12;

let num: number = 10;

let userName: string = "jonas ";

let isInstructor: boolean = true;

//complex types

let hobbbies: string[]; // to be array of string
let bus: number[]; // to be an array of number

hobbbies = ["drawing", "cycling" /**4 -- this will throw an error  */];

// let person: {
//   name: string;
//   birthYear: number;
// };

// person = {
//   name: "jonas",
//   birthYear: 2010,
// };

// to store objects in an array we can declare it as

let person: {
  name: string;
  birthYear: number;
}[];

person = [
  {
    name: "joans ",
    birthYear: 2024,
  },
  {
    name: "joans ",
    birthYear: 2024,
  },
];

// type interface

let course: string = "react- typscript";
// course = 1234; -- even if we dont define the type ts will automatically define it

// union types

let courseId: string | number = "typescript";

// type aliaas
function add(a: number, b: number) {
  return a + b;
}

//void return type
function printFn(value: any) {
  console.log(value);
}

// generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
