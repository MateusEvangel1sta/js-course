function CPF(send) {
  Object.defineProperty(this, "cleanCPF", {
    enumerable: true,
    get: function () {
      return send.replace(/\D+/g, "");
    },
  });
}

CPF.prototype.isValid = function () {
  if (typeof this.cleanCPF === "undefined") return false;
  if (this.cleanCPF.length !== 11) return false;
  if (this.isSequence()) return false;

  const partial = this.cleanCPF.slice(0, -2);

  const firstDigit = this.CreateDigit(partial);
  const secondDigit = this.CreateDigit(partial + firstDigit);

  const newDocument = partial + firstDigit + secondDigit;
  console.log(newDocument);

  return newDocument === this.cleanCPF;
};

CPF.prototype.CreateDigit = function (partial) {
  const CPF = Array.from(partial);
  let regressive = CPF.length + 1;

  const total = CPF.reduce((acc, el) => {
    acc += regressive * Number(el);
    regressive--;

    return acc;
  }, 0);

  const digit = 11 - (total % 11);

  return digit > 9 ? "0" : String(digit);
};

CPF.prototype.isSequence = function () {
  return this.cleanCPF[0].repeat(this.cleanCPF.length) === this.cleanCPF;
};

const user = new CPF("705.484.450-52");
// const user = new CPF("111.111.111-11");
// console.log(user.cleanCPF);

user.isValid();
