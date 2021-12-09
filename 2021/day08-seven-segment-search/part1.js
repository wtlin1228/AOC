function get1478(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if ([2, 3, 4, 7].includes(arr[i].length)) {
      result += 1;
    }
  }
  return result;
}

function getAll1478(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += get1478(data[i].displays);
  }
  return result;
}

module.exports = {
  getAll1478,
};
