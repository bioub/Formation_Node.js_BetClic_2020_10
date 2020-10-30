// Dictionnaire clé/valeur
// PHP : tableau associatif
// C : struct
// Java : Map
// C++ : HashTable
// Ruby : dictionnary
// JS : object

// Un objet JS est extensible
console.log(Math.sum === undefined); // true

Math.sum = (a, b) => a + b;
// Math.sum = function (a, b) {
//   return a + b;
// };

console.log(Math.sum(1, 2)); // 3

// MAUVAISE PRATIQUE d'étendre des objets
// qu'on a pas créé

delete Math.sum; // undefined


// object literal
const coords = {
  x: 1,
  y: 2,
};

// extensibilité
coords.z = 3;

// si méthode, l'objet doit être unique
globalThis.MyMaths = {
  sum: function(a, b) {
    return a + b;
  }
};

// fonction constructeur
// function Contact(name) {
//   // pseuso variable this
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   console.log(`Hello my name is ${this.name}`);
// };
class Contact {
  constructor(name) {
    // pseuso variable this
    this.name = name;
  }
  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const romain = new Contact('Romain');
const jean = new Contact('Jean');

console.log(romain.name); // Romain

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function
console.log(typeof romain); // object

romain.hello(); // Hello my name is Romain
jean.hello(); // Hello my name is Jean

console.log(romain.hello === jean.hello); // est-ce la même fonction ?
