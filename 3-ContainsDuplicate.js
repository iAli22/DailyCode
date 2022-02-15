var containsDuplicate = function (nums) {
  let map = {};

  for (const item of nums) {
    if (!map[item]) {
      map[item] = item;
    }
  }

  const mapSize = Object.keys(map).length;
  const numsSize = nums.length;

  return mapSize < numsSize;
};

console.log(containsDuplicate([2, 2, 3, 4]));
