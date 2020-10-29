const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

class Jeu {
  // proche d'être normé (ES.Next)
  // essais = [];

  constructor(options = {}) {
    const min = options.min || 0; // si le défaut est falsy (0, false, '', undefined, null)
    const max = options.max ?? 100; // ES2020 si le défaut est nullish (undefined, null)
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué ' + this.essais.join(' - '));
    }

    this._rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Il faut saisir un nombre entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this._rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// pile d'appels
// ^
// |                          question       question
// |question                  jouer          jouer
// |joueur   ....             =>        .... =>
// +-----0------------------------12---------------------------------> temps
//                      END       B           A     D          C

