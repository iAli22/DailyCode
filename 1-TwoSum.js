var twoSum = function (nums, target) {
  let diff;
  let map = [];

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (diff in map) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }

  return -1;
};
