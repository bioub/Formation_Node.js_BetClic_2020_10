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
  return interne;
}

const interneExtraitDeExterne = externe();
interneExtraitDeExterne();
// pile d'appels
// ^
// |
// |          lg - lg - lg - lg
// |externe - interne
// +-------------------------------------------> temps
