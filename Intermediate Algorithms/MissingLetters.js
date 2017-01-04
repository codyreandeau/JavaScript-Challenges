
function fearNotLetter(str) {
  
  var original = str;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var beg = alphabet.indexOf(original[0]);
  var end = alphabet.lastIndexOf(original[original.length-1]);
  var compare = alphabet.substring(beg, end + 1);
  
  if(original === compare) {
    return undefined;
  }else{
  
  var string1 = original.split("");
  var string2 = compare.split("");
  var longer = "";
  var difference = "";
    
   if(string1.length > string2.length){
        longer = string1;
    }
    else {
        longer = string2;
    }
    for(var i=0;i<longer.length;i++){
        if(string1[i]!=string2[i]){
            difference += (string2[i]);
        }
    }
    return difference[0];
  }
 }

fearNotLetter("abcdefghjklmno");