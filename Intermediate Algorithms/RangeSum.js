function sumAll(arr) {
  
  var x = Math.min(arr[0], arr[1]);
  var y = Math.max(arr[0], arr[1]);
  var sum = 0;
  
  for(x; x <= y; x++){
    sum += x;
  }
  
  return sum;
}

sumAll([1, 4]