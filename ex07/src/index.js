function largestNumFromArr(arr) {
  var maxNumArray = [];
  var largest = 0;

  for (var i = 0; i < arr.length; i++) {
    largest = Math.max(...arr[i]);
    maxNumArray.push(largest);
  }

  return maxNumArray;
}

console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

module.exports = largestNumFromArr;
