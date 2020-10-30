function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));

// REST Param
// conversion liste de valeur -> tableau
// ex: 3, 4 -> [3, 4]
// devant une variable/param (à gauche de l'affectation)

// SPREAD Operator
// conversion tableau -> liste de valeur
// ex: [3, 4] -> 3, 4
// devant un tableau (à droite de l'affectation)

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];

console.log(multiply(...nbs));

// cloner un tableau
const clone = [...nbs];

// changement immuable sur un tableau
// (en passant pas la création d'un nouveau tableau)
const newNbs = [0, ...nbs, 5, 6];


const fullName = 'Romain Bohdanowicz';

// const parts = fullName.split(' ');
// const prenom = parts[0];
// const nom = parts[1];
//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          ] = fullName.split(' ');

// combine avec default param + REST
const [un = 1, ...others] = nbs;

