// ! When to use annotations

// # on Functions

/*
 *
 * `Type annotations for functions` -->  Code we add to tell typescript what type of arguments a function will receive and what
 *                                       type of values it will return.
 *
 * `Type inference for functions`   -->   Typescript tries to figure out what type of value a function will return.
 *
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (c: number, d: number): number => {
  return c - d;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

/*
 *
 * The `never` type represents the type of values that never occur.
 * For instance, never is the return type for a function expression or an arrow function expression
 * that always throws an exception or one that never returns.
 * Variables also acquire the type `never` when narrowed by any type guards that can never be true.
 */
const throwError = (message: string): never => {
  throw new Error(message);
};
// we annotate a funtions return never only when it doesn't return anyhting at all cost.

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
