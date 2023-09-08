//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length <= 1) {
    return -Infinity;
  }

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num < firstMax && num > secondMax) {
      secondMax = num;
    }
  }

  if (secondMax === -Infinity || firstMax === secondMax) {
    return -Infinity;
  }

  return secondMax;
}
