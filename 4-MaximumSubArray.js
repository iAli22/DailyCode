var maxSubArray = function (nums) {
  let maxArr = [];
  maxArr[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxArr[i] = Math.max(nums[i], nums[i] + maxArr[i - 1]);
  }
  return Math.max(...maxArr);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
