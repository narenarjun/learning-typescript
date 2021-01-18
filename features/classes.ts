class Vehicle {
  constructor(public color: string) {}

  // ! uncomment to see the error thrown in Car class which is inheriting this Vehicle class.
  // drive(): void {
  //   console.log('vroom vroom');
  // }

  protected honk(): void {
    console.log('honk honk 🔊');
  }
}

const vehicle = new Vehicle('yellow');
console.log(vehicle.color);

// ! basic inheritance
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vzzzhhhhh');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'red');
// car.drive();
car.startDrivingProcess();
// car.honk();
