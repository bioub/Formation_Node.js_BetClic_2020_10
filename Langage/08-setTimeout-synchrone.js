function setTimeout(cb, delay) {
  // attendre pendant delay ms
  const debut = Date.now();
  while(debut + 1000 > Date.now());

  cb();
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
