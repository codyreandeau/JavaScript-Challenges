function updateInventory(arr1, arr2) {
  
  for(var j=0; j < arr2.length; j++){
    
    var x = compare(arr2[j][1]);
    
    if(x === undefined){
      arr1.push(arr2[j]);
    }else{
      arr1[x][0] += arr2[j][0];
    }
  }
  
 //Compare new inventory against old inventory
 function compare(product) {
    for (var i=0; i < arr1.length; i++){
      if(arr1[i][1] === product){
        return i;
      }
    }
    return undefined;
  }
  
  //function to sort array alphabetically
  arr1.sort(function(currItem, nextItem) {
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

    return arr1;
}