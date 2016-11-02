function findLongestWord(str) {
  
  var splitString = str.split(' ');
  var longest = 0;
  
  for(var i = 0;i < splitString.length; i++) {
    if(splitString[i].length > longest) {
      longest = splitString[i].length;
    }
  }
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");