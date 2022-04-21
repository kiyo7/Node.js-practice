const { echo, area } = require('./methods');
const Lamborghini = require('./lamborghini');
const config = require('./config');

echo('こんにちは');
console.log(area(100, 79));

const car = new Lamborghini('lamborghini');
car.echo();
car.drive();

console.log(JSON.stringify(config));
