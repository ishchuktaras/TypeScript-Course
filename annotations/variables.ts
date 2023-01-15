let orandes: number = 5;
let speed: string = 'fast';
let hasDog: boolean = true;

let nothing: null = null;
let nothing1: undefined = undefined;

// Built-in odjects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 5];
let resaults: boolean[] = [true, false];

// classes
class Car {

}

let car: Car = new Car();

// object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

//When to use type annotation
// 1) Function returns the 'Any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse (json);
console.log(coordinates);

// 2) When declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    isTwo = true;
  }
}

// 3) Variables whoes type can't be inferred
let myNumbers = [-10, -5, 12];
let positiveNumber: boolean | number = false;
for (let i = 0; i < myNumbers.length; i++)
if (myNumbers[i] > 0) {
  positiveNumber = myNumbers[i];
}