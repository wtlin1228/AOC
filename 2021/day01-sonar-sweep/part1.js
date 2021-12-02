function sonarSweep(nums) {
  if (nums.length < 2) {
    return 0;
  }

  let result = 0;
  let prevNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prevNum) {
      result += 1;
    }
    prevNum = nums[i];
  }

  return result;
}

module.exports = {
  sonarSweep,
};
