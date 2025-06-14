class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.audioVolume = 0;
  }

  increaseVolume() {
    this.audioVolume += 2;
  }

  // Instance method
  decreaseVolume() {
    this.audioVolume -= 2;
  }

  // Static method
  static changeBattery() {
    console.log("Troque a pilha de todos os controles.");
  }
}

const firstRemoteControl = new RemoteControl("Samsung");
const secondRemoteControl = new RemoteControl("LG");

firstRemoteControl.increaseVolume();
firstRemoteControl.increaseVolume();
firstRemoteControl.increaseVolume();

console.log(firstRemoteControl);

// calling static method
RemoteControl.changeBattery();
