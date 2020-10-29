const prenoms = ['Romain', 'Eric', 'Jean'];

function hello(name = '') {
  return `Hello ${name} !`;
}

// function cb(p) {
//   console.log(hello(p));
// }

// // ES5
// prenoms.forEach(cb);


// ES5
prenoms.forEach((p) => {
  console.log(hello(p));
});

console.log('END');


// pile d'appels
// ^
// |lg   lg   lg
// |=> - => - =>
// |forEach      - lg
// +-------------------------------------------> temps
//  Rom  Eric Jean END