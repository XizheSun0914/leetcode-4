/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  for (var i = 1; i < Number.MAX_VALUE; ++i) {
    if ((i + i * i) / 2 === n) {
      return i;
    } else if ((i + i * i) / 2 > n) {
      return i - 1;
    }
  }
};

console.log(arrangeCoins(1));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
