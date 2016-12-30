
function convertHTML(str) {
  
  var convert = str.split('');
  
    for (var i=0; i < convert.length; i++) {
    switch (convert[i]) {
      case '&':
        convert[i] = '&amp;';
        break;
      case '>':
        convert[i] = '&gt;';
        break;
      case '<':
        convert[i] = '&lt;';
        break;
      case "'":
        convert[i] = "&apos;";
        break;
      case '"':
        convert[i] = '&quot;';
        break;
    }
  }
  
  return convert.join('');
}

convertHTML("Dolce & Gabbana");