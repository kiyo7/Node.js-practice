const fs = require('fs');
const path = require('path');

// console.log(path.join(__dirname));
// console.log(path);

const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');
const writer = fs.createWriteStream(
  path.join(__dirname, 'sample-copy.txt'),
  'utf8'
);
reader.pipe(writer);
reader.resume();
