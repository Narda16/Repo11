function myMutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  var count = 0;
  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) > -1) {
      count++;
    }
  }
  if (count == second.length) {
    return true;
  } else {
    return false;
  }
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;
