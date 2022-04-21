setTimeout(() => {
  console.log('call time out');
}, 100);

//setTimeout0msは環境によって処理の時間が変わってしまうため安定しない Immediateを推奨

setImmediate(() => {
  console.log('call immediate');
});

process.nextTick(() => {
  console.log('call next tick');
});

Promise.resolve().then(() => {
  console.log('call Promise.resolve');
});
