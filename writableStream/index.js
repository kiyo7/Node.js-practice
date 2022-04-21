const path = require('path');
const fs = require('fs');

const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');

const writer = fs.createWriteStream(
  path.join(__dirname, 'sample-copy.txt'),
  'utf8'
);

reader.pipe(writer);

reader.resume();

// const writer = fs.createWriteStream(
//   path.join(__dirname, 'created.txt'),
//   'utf8'
// );

// writer.end('Hello World!');
