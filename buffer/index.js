const fs = require('fs');
const path = require('path');

const iconv = require('iconv-lite');

// fs.readFile(path.join(__dirname, 'sample.txt'), (err, data) => {
//   console.log(iconv.decode(data, 'shiftjis'));
// });

// fs.writeFile(
//   path.join(__dirname, 'test.txt'),
//   iconv.encode('こんにちは', 'shiftjis'),
//   (err) => {
//     console.log('OK');
//   }
// );

// const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'));
// const decoder = iconv.decodeStream('shiftjis');
// reader.pipe(decoder);

// decoder.on('data', (chunk) => {
//   console.log(chunk);
// });

// reader.resume();

const encoder = iconv.encodeStream('shiftjis');
const writer = fs.createWriteStream(path.join(__dirname, 'test.txt'));

encoder.pipe(writer);

encoder.write('こんにちは');
encoder.end();
