function largestOfFour(arr) {

  var max_values = [];
    for (var i=0; i < arr.length; i++) {
        max_values.push(Math.max.apply(Math, arr[i]));
    }
  return max_values;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);