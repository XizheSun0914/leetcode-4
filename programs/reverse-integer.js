var x = -123;

var reverse = function(x) {
  var str = x.toString();
  var result = parseInt(str[0] !== '-' ? str.split('').reverse().join('') :
    str[0] + str.slice(1).split('').reverse().join(''));
  if (x > 2147483647 || result > 2147483647 || x < -2147483648 || result < -2147483648)
    return 0;
  else
    return result;
};

console.log(reverse(-123));
