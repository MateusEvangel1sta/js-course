function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function oneMoment(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Caí no erro!");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na Promise");
    }, time);
  });
}

const promises = [
  "Primeiro Valor",
  oneMoment("Promise 1", rand(1, 5)),
  oneMoment("Promise 2", rand(1, 5)),
  oneMoment("Promise 3", rand(1, 5)),
  oneMoment(1000, rand(1, 5)),
  "Outro valor",
];

// Promise.all
Promise.all(promises)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// Promise.race
promises.pop();
promises.shift();

Promise.race(promises)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// Promise.resolve && Promise.reject
function downloadingPage() {
  const inCache = "vish";

  if (inCache === true) {
    return Promise.resolve("Página em cache!");
  } else if (inCache == "vish") {
    return Promise.reject("Erro!");
  } else {
    return oneMoment("Baixei a página", rand(1, 5));
  }
}

downloadingPage()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
