
function pairElement(str) {  
  
  var strSplit = str.split("");
  var pair_array = [];
  var element = "";   
  var pair = "";

  for (var i = 0; i < strSplit.length; i++){   
    
    element = strSplit[i];
    
    switch (element){
      case "A":
        pair = "T";
        break;
      case "T":
        pair = "A";
        break;
      case "G":
        pair = "C";
        break;
      case "C":
        pair = "G";
        break;
    }
    pair_array.push([element, pair]);  
  }
  return pair_array;
}

pairElement("GCG");