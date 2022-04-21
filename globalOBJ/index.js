// console.log('Hello: %o', { hello: 'world' });
// console.trace('Hello');

let sum = 0;
console.time('timer1');

for (let i = 1; i <= 1000; i++) {
  sum += 1;
}
console.timeEnd('timer1');
// console.timeLog();

process.env; //環境変数

process.argv; //実行時引数

process.cwd(); // カレントディレクトリ

process.platform; //実行環境

console.log(process.platform); //output darwin = MacOS

process.on('uncaughtException', (err) => {}); //例外処理 最終的な例外処理では非推奨 役割: メモリ開放 プロセス開放

console.log(`cwd: ${process.cwd()}`);
console.log(`dirname: ${__dirname}`);
