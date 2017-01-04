function myReplace(str, before, after) {
  
  var split_str = str.split(" ");
  var replace = before;
  var newWord = after;
  
  for(var i=0; i <= split_str.length; i++){
    if(split_str[i] === before){
      split_str[i] = newWord;
      if(replace[0] === replace[0].toUpperCase()) {
        split_str[i] = newWord[0].toUpperCase() + newWord.substring(1, newWord.length);
      }
    }
  }
  
  var newString = split_str.join(" ");
  
  return newString;
}
   

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");