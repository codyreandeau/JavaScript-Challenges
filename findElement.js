function findElement(arr, func) {
  var num = arr.filter(func)[0];
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { 
  return num % 2 === 0; });