function dropElements(arr, func) {
  
  var arr_length = arr.length;
  
  for(var i=0; i < arr_length; i++){
    if(func(arr[0])){
      break;
    }else{
      arr.shift();
    }
  }
  
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});