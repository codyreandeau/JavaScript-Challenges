function confirmEnding(str, target) {

  var end =  str.substr(str.length - target.length);
  
  if(end === target){
       return true;
     }else{
       return false;
    }
 }

confirmEnding("Bastian", "n");