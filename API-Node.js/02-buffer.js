const fs = require('fs');

// Sync
const buffer1 = fs.readFileSync('.gitignore');
const buffer2 = fs.readFileSync('.prettierrc');

const buffer = Buffer.concat([buffer1, buffer2]);
console.log(buffer.toString('utf-8'));
