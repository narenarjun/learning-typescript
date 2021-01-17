const carMakers = ['tesla', 'toyota', 'BMW']; //! here type `string[]` is inferred

const phoneMakers: string[] = []; //* here type is annotated so that later it can be useful to ensure only strings in this array

const dates = [new Date(), new Date()];

// ! 2-D arrays

const carByMake = [['Model 3'], ['corolla'], ['s class']]; // here type inferred

// * Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//*  Prevent incompatible values
// carMakers.push(100); // this will show error

//  * Help with `map`
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '22-02-2022']; // here type is inferred
const vaccineDates: (Date | string)[] = [new Date()]; // explicit annotation of types

vaccineDates.push('21-02-2021');
vaccineDates.push(new Date());
