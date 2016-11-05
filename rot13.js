function rot13(str) { // LBH QVQ VG!
  
var alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM").split('');
var decode = [];
   
for (i = 0; i < str.length; i++) {
  var arr = alphabet.indexOf(str[i]) + 13;
  //push the space " " into the array
  if(alphabet.indexOf(str[i]) == -1) {
     decode.push(str[i]);
} else {
  //push the letter into the array
  decode.push(alphabet[arr]);
 }
}
  decode = decode.join('');
  return decode;
}

// Change the inputs below to test
rot13("SERR CVMMN!"); //returns FREE PIZZA!