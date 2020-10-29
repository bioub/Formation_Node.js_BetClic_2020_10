for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 3

// Quel va être le résultat :
// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..3s.. 0 1 2
// C - ..1s.. 0 1 2
// D - ..1s.. 3 3 3
// E - ..1s.. 2 2 2

function closure(val) {
  return function() {
    console.log(val);
  }
}

for (var i = 0; i < 3; i++) {
  setTimeout(closure(i), 1000);
}

for (let i = 0; i < 3; i++) { // portée de closure du fait du let
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
