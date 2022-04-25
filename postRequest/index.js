const http = require('http');
const data = 'Hello World ';
const url = 'http://localhost:3000';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-length': Buffer.byteLength(data),
  },
};
const req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
req.on('error', (err) => {
  console.log(err.message);
});
req.end(data);
