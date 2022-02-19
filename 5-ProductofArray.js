var productExceptSelf = function (nums) {
  let res = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    let elementI = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let elementJ = nums[j];
      if (elementI === elementJ && elementI !== 0 && elementJ !== 0) continue;

      product *= elementJ;
    }

    res.push(product);
    product = 1;
  }

  return res;
};
