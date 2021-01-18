class Vehicle {
  // ! uncomment to see the error thrown in Car class which is inheriting this Vehicle class.
  // drive(): void {
  //   console.log('vroom vroom');
  // }

  protected honk(): void {
    console.log('honk honk 🔊');
  }
}

// ! basic inheritance
class Car extends Vehicle {
  private drive(): void {
    console.log('vzzzhhhhh');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vechile = new Vehicle();
// vechile.drive();
// vechile.honk();

const car = new Car();
// car.drive();
car.startDrivingProcess();
// car.honk();
