// function(exports, require) {

// Dans node 12 :
// node --experimental-modules esm-node/main.mjs
// A partir de node 13.3
// node esm-node/main.mjs

import { hello } from './hello.mjs';

console.log(hello('Romain'));

// }