function setTimeout(cb, delay) {
  // attendre pendant delay ms
  const debut = Date.now();
  while(debut + delay > Date.now());

  cb();
}

function pause(delay) {
  // attendre pendant delay ms
  const debut = Date.now();
  while(debut + delay > Date.now());
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


for (var i = 0; i < 3; i++) {
  pause(1000);
  console.log(i);
}
