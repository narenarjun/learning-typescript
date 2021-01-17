const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// ? creating a type definition [type alias]
type Drink = [string, boolean, number];

// const loveO: [string, boolean, number] = ['brown', true, 40]; //! this is a tuple

const loveO: Drink = ['brown', true, 40];
const maaza: Drink = ['yellow', false, 50];
const fizz: Drink = ['teal', true, 40];
