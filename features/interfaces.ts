//  ! we can have any type inside interface , not just primitive types.
// interface Vehicle {
// name: string;
// year: number;
// broken: boolean;
// summary(): string;
// }

interface Reportable {
  summary(): string;
}

const oldSClass = {
  name: 'S class',
  year: 1994,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'yellow',
  carbonated: false,
  sugar: 50,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};
*/

// const printVehicle = (vehicle: Vehicle): void => {
//   // console.log(`Name: ${vehicle.name}`);
//   // console.log(`Year: ${vehicle.year}`);
//   // console.log(`Broken? ${vehicle.broken}`);
//   console.log(vehicle.summary());
// };

// printVehicle(oldSClass);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldSClass);

//  here the summary of drink is printed and single `Reportable` interface is used in the function and this is code reusability based on the usage.
printSummary(drink);
