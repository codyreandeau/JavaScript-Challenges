function translatePigLatin(str) {
  
  var pigLatin = "";
  var vowels = /[aeiou]/gi;
  var consonants, beginning, ending = "";
  
 if (str[0].match(vowels)) {
    pigLatin = str + 'way';
    }else{
      consonants = str.indexOf(str.match(vowels)[0]);
      beginning = str.substring(consonants);
      ending = str.substring(0, consonants) + "ay";
      pigLatin = beginning + ending;
   }
  
  return pigLatin;
}

translatePigLatin("glove");