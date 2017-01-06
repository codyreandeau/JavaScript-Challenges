function sym(args) {
    args = Array.prototype.slice.call(arguments);
  
   function difference(arr1, arr2) {
    var newArr = [];

    arr1.forEach(function(x) {
      if (!~arr2.indexOf(x) && !~newArr.indexOf(x)) {
        newArr .push(x);
      }
    });

    arr2.forEach(function(x) {
      if (!~arr1.indexOf(x) && !~newArr.indexOf(x)) {
        newArr.push(x);
      }
    });
    return newArr;
  }

  var unique = difference(args.shift(), args.shift());

  while (args.length >= 1) {
    unique = difference(unique, args.shift());
  }

  return unique.sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);