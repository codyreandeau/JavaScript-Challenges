function smallestCommons(arr) {
  
 arr.sort(sortArray); 
  
  function sortArray(a, b) {
    return b - a;
  }
  
 var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

 var SCM = newArr[0];
  for (i = 1; i < newArr.length; i++) {
    var GCD = gcd(SCM, newArr[i]);
    SCM = (SCM * newArr[i]) / GCD;
  }
    return SCM;

  function gcd(x, y) {   
    while(y > 0){
      var temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
}

smallestCommons([1,5]);