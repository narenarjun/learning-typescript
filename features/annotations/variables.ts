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
