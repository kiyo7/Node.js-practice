module.exports = function (max = 10) {
  let original =
    '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZあいうえお';
  let data = [];
  let length = original.length;
  for (let i = 0; i < max; i++) {
    data[i] = original[Math.floor(Math.random() * length)];
  }
  return data.join('');
};
