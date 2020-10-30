// function bind(fct, that) {
//   return function() {
//     fct.call(that);
//   }
// }

class Contact {
  name = 'Romain';
  hello() {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}

const romain = new Contact();
romain.hello('romain');
