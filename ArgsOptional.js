function addTogether() {
  
if(arguments.length === 2){
  if(typeof arguments[0] !== 'number'|| typeof arguments[1] !== 'number'){
    return undefined;
  } 
    return arguments[0] + arguments[1];
}

  if(arguments.length === 1){
    var one_arg = arguments[0];
    if(typeof one_arg !== 'number'){
      return undefined;
    }else{
      return function(arg2){
    if(typeof arg2 !== 'number'){
      return undefined;
    } else {
      return one_arg + arg2;
    }
   };
  }
 }
}

addTogether(2)(3);