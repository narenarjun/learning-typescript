let apples: number = 5;
let speed: string = 'ferrari';
let hasGravity: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//* built in objects

let now: Date = new Date();

// # Array
let colors: string[] = ['red', 'green', 'black'];
let cuteNumbers: number[] = [1, 23, 55];
let truths: boolean[] = [true, false, true, true];

// ! classes
/*
 * classes have first letter captilized
 */

class Car {}

let car: Car = new Car();

// ? Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// ! When to use annotations

//* 1) Function that returns the `any` type

const json = '{"x":20,"y":42}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// Note: try to  Avoid `any` type at all cost

// * 2) When we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
// let foundWord;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// * 3) Variable whose type cannot be inferred correctly

// {the following is not a ideal code example but to know it , it's used }
let numbers = [-10, -232, 6];
let numberAboveZero: boolean | number = false;

for (let i = 0; 1 < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
