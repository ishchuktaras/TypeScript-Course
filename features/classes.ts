class Vehicle {
  // public drive(): void {
  //   console.log (`I'm driving!`);
  // }

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  public stop(): void {
    console.log (`I'm stopped!`);
  }

  protected beep(): void {
    console.log ('BEEEEEP!');
  }
}

class Car extends Vehicle {

  constructor (public wheels: number, color: string){
    super (color);
  }

  private drive(): void {
    console.log (`I'm a car and I'm driving!`);
  }
  startDriving(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle (`black`);
console.log (vehicle.color);
// vehicle.drive();
// vehicle.stop();

const car = new Car(4, 'silver');
// car.startDriving();
// car.stop();
