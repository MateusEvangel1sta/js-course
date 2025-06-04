function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function oneMoment(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("bad value");

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

oneMoment("Frase 1", rand(1, 3))
  .then((res) => {
    console.log(res);
    return oneMoment("Frase 2", rand(1, 3));
  })
  .then((res) => {
    console.log(res);
    return oneMoment(3, rand(1, 3));
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log("Erro: ", e);
  });
