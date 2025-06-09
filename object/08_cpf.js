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

  const partial = this.cleanCPF.slice(0, -2);
  this.CreateDigit(partial);

  return true;
};

CPF.prototype.CreateDigit = function (partial) {
  const CPF = Array.from(partial);
  const regressive = CPF.length;
  console.log(regressive);
};

const user = new CPF("705.484.450-52");
console.log(user.cleanCPF);

console.log(user.isValid());
