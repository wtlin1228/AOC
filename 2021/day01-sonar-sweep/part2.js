function sonarSweepWithSlidingWindow(nums, windowSize) {
  if (nums.length < windowSize) {
    return 0;
  }

  let result = 0;
  let prevWindowSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < windowSize) {
      prevWindowSum += nums[i];
    } else {
      const currentWindowSum = prevWindowSum - nums[i - windowSize] + nums[i];
      if (currentWindowSum > prevWindowSum) {
        result += 1;
      }
      prevWindowSum = currentWindowSum;
    }
  }

  return result;
}

module.exports = {
  sonarSweepWithSlidingWindow,
};
