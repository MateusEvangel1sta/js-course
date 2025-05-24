function rand(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(cb) {
  setTimeout(function() {
    console.log('f1');
    if (cb) cb();
  }, rand());
}

function f2(cb) {
  setTimeout(function() {
    console.log('f2');
    if (cb) cb();
   }, rand());
}

function f3(cb) {
  setTimeout(function() {
    console.log('f3');
    if (cb) cb();
  }, rand());
}

f1(function() {
  f2(function() {
    f3(function() {
      console.log('Olá, mundo!');
    })
  });
});