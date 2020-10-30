const fs = require('fs');

// Sync
try {
  const buffer = fs.readFileSync('.gitignore');
  fs.writeFileSync('.gitignore.copy', buffer);
  console.log('DONE');
}
catch (err) {
  console.log(err);
}

// Async -> Callback Hell / Pyramid of Doom
// http://callbackhell.com/
fs.readFile('.gitignore', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.gitignore.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('DONE');
      }
    });
  }
});

// Bibliothèques à partir de 2005
// Promise
// Dans Node.js on peut les utiliser nativement avec fs

fs.promises.readFile('.gitignore')
  .then((buffer) => fs.promises.writeFile('.gitignore.copy', buffer))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err));

// ES2017 async/await
async function copy() {
  try {
    const buffer = await fs.promises.readFile('.gitignore');
    await fs.promises.writeFile('.gitignore.copy', buffer);
    console.log('DONE');
  }
  catch (err) {
    console.log(err);
  }
}

copy();
