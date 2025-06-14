class EletronicDevice {
  constructor(name) {
    this.name = name;
    this.connected = false;
  }

  toConnect() {
    if (this.connected) {
      console.log(`${this.name} está ligado.`);
      return;
    }

    this.connected = true;
  }

  toDisconnect() {
    if (!this.connected) {
      console.log(`${this.name} está desligado.`);
      return;
    }

    this.connected = false;
  }
}

class DigitalClock extends EletronicDevice {
  constructor(name, color, model) {
    super(name);

    this.color = color;
    this.model = model;
  }
}

class Smartphone extends EletronicDevice {
  constructor(name, color, model) {
    super(name);

    this.color = color;
    this.model = model;
  }
}

const smartwatch = new DigitalClock("Smartwatch", "Amarelo", "IP5");

smartwatch.toConnect();
console.log(smartwatch);

const phone = new Smartphone("Samsung", "Verde Neon", "Galaxy A15");
