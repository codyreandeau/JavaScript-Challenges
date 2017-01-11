function pairwise(arr, arg) {
  
  var indices = 0;
  var newArr = arr;
  
   for(var i = 0; i < newArr.length; i++) {
   for(var j = i + 1; j < newArr.length; j++) {
     if(newArr[i] + newArr[j] == arg) {
       indices += i + j;
       newArr[i] = NaN;
       newArr[j] = NaN;
     }
   }
 }
 return indices;
}


pairwise([1,4,2,3,0,5], 7);