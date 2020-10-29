const prenoms = ['Romain', 'Eric', 'Jean'];

/**
 *
 * @param {string} name
 */
function hello(name = '') {
  return `Hello ${name} !`;
}

// ES6
for (const p of prenoms) {
  console.log(hello());
}

// ES5
// prenoms.forEach(function (p) {
//   console.log(hello(p));
// });
