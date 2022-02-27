var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let min;
  let res = nums[0];
  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    min = Math.floor((r + l) / 2);
    res = Math.min(res, nums[min]);

    if (nums[min] >= nums[l]) {
      l = min + 1;
    } else {
      r = min - 1;
    }
  }

  return res;
};

console.log(findMin([3, 4, 5, 1, 2]));
