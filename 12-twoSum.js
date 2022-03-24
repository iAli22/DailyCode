var getSum = function (a, b) {
  let temp;
  while (b !== 0) {
    temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }

  return a;
};

console.log(getSum(1, 2));
