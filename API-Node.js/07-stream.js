const fs = require('fs');
const {createGzip} = require('zlib');

const readStream = fs.createReadStream('.prettierrc');
const writeStream = fs.createWriteStream('.prettierrc.zip');

// readStream.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// cat .prettierrc | console
readStream.pipe(process.stdout);

// cat .prettierrc | gzip > .prettierrc.zip
readStream.pipe(createGzip()).pipe(writeStream);
