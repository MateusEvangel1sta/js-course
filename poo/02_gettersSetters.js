const _speed = Symbol("speed");

class Vehicle {
  constructor(name, speedLimit) {
    this.name = name;
    this.speedLimit = speedLimit;
    this[_speed] = 0;
  }

  set vehicleSpeed(speed) {
    console.log("SETTER");
    if (typeof speed !== "number") return;
    if (speed >= this.speedLimit || speed <= 0) return;

    this[_speed] = speed;
  }

  get vehicleSpeed() {
    console.log("GETTER");
    return this[_speed];
  }

  accelerate(acceleration) {
    this[_speed] += acceleration;
    if (this[_speed] > this.speedLimit) {
      this[_speed] = this.speedLimit;
      return `\nVocê alcançou o limite de ${this.speedLimit}km/h`;
    }

    return `\nVocê acelerou!\nVelocidade atual: ${this[_speed]}km/h\nLimite atual: ${this.speedLimit}km/h`;
  }

  brake(acceleration) {
    this[_speed] -= acceleration;
    if (this[_speed] < 0) this[_speed] = 0;

    return `\nVocê freiou!\nVelocidade atual: ${this[_speed]}km/h`;
  }
}

const motorcycle = new Vehicle("Titan 160", 100);

console.log(motorcycle.accelerate(50));
console.log(motorcycle.accelerate(60));
console.log(motorcycle.accelerate(60));

motorcycle.vehicleSpeed = 20;
console.log(motorcycle.vehicleSpeed);
