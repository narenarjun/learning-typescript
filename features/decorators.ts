@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, boat sunk near java!!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator waves: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    // throw new Error();
    // console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// # first argument of a decorator function is always prototype of the class
// ? decorators can't be able to get {direct} access to any instance properties of the class,
function testDecorator(target: any, key: string) {
  console.log(key);
}

// ! PropertyDescriptor is globally available in typescript.

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
