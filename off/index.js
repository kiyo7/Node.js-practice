const EventEmitter = require('events');

const ev = new EventEmitter();

// *************************** onを使ってonce(一回のみ実行を作る)*************************************

// const ontick = function () {
//   console.log('event is called');
//   ev.off('event', ontick);
// };

// ev.on('event', ontick);

// ev.emit('event');
// ev.emit('event');

// ****************************onceを使った場合************************************

// const ontick = function () {
//   console.log('event  is called ');
// };

// ev.once('event', ontick);

// ev.emit('event');
// ev.emit('event');

// ************************************funcとアロー関数の挙動の違い****************************************

// ev.on('event', function () {
//   console.log('function : \r\n', this);
// });

// ev.emit('event');
