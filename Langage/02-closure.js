// function() {
globalThis.globalVar = 'globalVar'; // ES2019
const moduleVar = 'moduleVar'; // module => fichier

function externe() {
  const closureVar = 'closureVar';
  function interne() {
    const localVar = 'localVar';
    console.log('localVar', localVar);
    console.log('closureVar', closureVar);
    console.log('moduleVar', moduleVar);
    console.log('globalVar', globalVar);
  }
  interne();
}

externe();
// interne, closureVar, localVar
//}
// pile d'appels
// ^
// |lg - lg - lg - lg
// |interne
// |externe
// +-------------------------------------------> temps
