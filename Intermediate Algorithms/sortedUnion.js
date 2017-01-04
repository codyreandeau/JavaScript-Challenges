
function uniteUnique(arr) {
  
  var newArr = [];
  
  for(var i=0; i < arguments.length; i++){
    for(var j=0; j < arguments[i].length; j++){
      newArr.push(arguments[i][j]);
    }
  }
  
  var sortedUnion = newArr.filter(function(elem, pos) {
    return newArr.indexOf(elem) == pos;
  }); 
  
  return sortedUnion;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);