function convertToRoman(num) {
  
  var roman = "";
  var val = num;
  var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    for (var i = 0; i < decimals.length; i++) {
        while (val >= decimals[i]) {
            roman += numerals[i];
            val -= decimals[i];
        }
    }
  
  return roman;
}

convertToRoman(36);