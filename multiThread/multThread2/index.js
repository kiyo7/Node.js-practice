const { fork } = require('child_process');
const path = require('path');

const child = fork(path.join(__dirname, 'child.js'), { execArgv: [] });

//************************************************************************************************親から子へのパターン */
child.send({ hello: 'message from parent.' });
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
//************************************************************************************************子から親へのパターン */
// child.on('message', (data) => {
//   console.log(data);
// });

// child.on('close', (code) => {
//   console.log(`Child process exited with code ${code}`);
// });
