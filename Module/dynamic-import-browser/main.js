document.addEventListener('click', () => {
  import('./hello.js').then(({hello}) => {
    console.log(hello('Romain'));
  });
});