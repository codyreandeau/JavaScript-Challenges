function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr.push(num);
  
  //Sort array in ascending order.
  arr.sort(function(a, b) {
    return a - b;
  });
  
  //find the index of num
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);