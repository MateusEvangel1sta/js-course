function rand(min = 0, max = 5) {
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

// oneMoment("Promise 1", rand())
//   .then((data) => {
//     console.log(data);
//     return oneMoment("Promise 2", rand());
//   })
//   .then((data) => {
//     console.log(data);
//     return oneMoment("Promise 3", rand());
//   })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

async function execute() {
  try {
    const phase1 = await oneMoment("Promise 1", rand());
    console.log(phase1);

    const phase2 = await oneMoment("Promise 2", rand());
    console.log(phase2);

    const phase3 = await oneMoment("Promise 3", rand());
    console.log(phase3);

    const phase4 = await oneMoment(5, rand());
    console.log(phase4);

    console.log("Terminamos na fase: ", phase4);
  } catch (e) {
    console.log(e);
  }
}

execute();
