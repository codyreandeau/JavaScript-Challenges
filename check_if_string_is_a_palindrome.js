
function palindrome(str) {
 
  var original = str.toLowerCase(); //Store original and make it lowercased.
  var newString = str.split(''); //split the string for reversal
  newString.reverse(); //Reverse String
  str = newString.join('').toLowerCase(); //join reversed string and make it lowercased
  
  //Remove spaces and all non-alpha numeric characters from the two strings
  str = str.replace(/\W+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  original = original.replace(/\W+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  //See if they match
  if(original === str){
    return true;
  }else
    return false;
}

palindrome("eye"); // returns true
palindrome("_eye"); // returns true
palindrome("Racecar"); // returns true
palindrome("Race car"); // returns true
palindrome("not a palindrome"); // returns false
palindrome("bagels"); // returns false