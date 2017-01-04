function spinalCase(str) {
  
  //Splits string at charcters like "+()*_!@#$%^&" and spaces.
  var spinalTap = str.split(/[\s,]+|[+()*_!@#$%^&]|(?=[A-Z])/).join('-').toLowerCase();
  
  return spinalTap;
}

spinalCase("this*isSpinal!Tap");