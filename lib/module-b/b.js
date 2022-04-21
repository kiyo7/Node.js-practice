const a = require('../module-a/a');
module.exports = function () {
  a();
  console.log('call module-b ');
};
