var maxArea = function (height) {
  //  Solution O(n^2)
  // let maxContainer = 0;
  // let currentArea = 0;
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = 0; j < height.length; j++) {
  //     currentArea = (i - j) * Math.min(height[i], height[j]);
  //     maxContainer = Math.max(maxContainer, currentArea);
  //   }
  // }
  // return maxContainer;

  let l = 0;
  let r = height.length - 1;
  let res = 0;
  let currentHeight = 0;

  while (l < r) {
    currentHeight = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, currentHeight);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
