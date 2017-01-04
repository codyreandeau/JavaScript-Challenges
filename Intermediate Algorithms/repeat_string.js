function repeatStringNumTimes(str, num) {
  
// repeat after me
  var i = 0;
  var repeat = "";

  //no repeat
  while(i < num) {
   repeat += str;
   i++;
  }
  
  return repeat;
}

repeatStringNumTimes("abc", 3);