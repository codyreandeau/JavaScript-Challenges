function checkCashRegister(price, cash, cid) {
    
  function getValue(currencyType) {
        switch (currencyType) {
            case "PENNY":
                return 1;
            case "NICKEL":
                return 5;
            case "DIME":
                return 10;
            case "QUARTER":
                return 25;
            case "ONE":
                return 100;
            case "FIVE":
                return 500;
            case "TEN":
                return 1000;
            case "TWENTY":
                return 2000;
            case "ONE HUNDRED":
                return 10000;
        }
    }
  
  var change = (cash * 100) - (price * 100);
  var remainingChange = change;
  var cidTotal = totalInRegister(cid);
  var amountReturned = [];
  
  if(change > cidTotal){
    return "Insufficient Funds";
  }else if(cidTotal === change){
    return "Closed";
  }
  
    for (var i = cid.length - 1; i >= 0; i--){
    var amount = 0;
        var coinName = cid[i][0],                 
            coinTotal = cid[i][1] * 100,          
            coinValue = getValue(coinName),
            coinAmount = coinTotal / coinValue,     
            returnedValue = 0; 
        while (remainingChange >= coinValue && coinAmount > 0) { 
            remainingChange -= coinValue;                                                           coinAmount--;                     
            returnedValue++;                                    
        }
        if (returnedValue > 0) {
            amountReturned.push([coinName, returnedValue * coinValue / 100]);
        }
    }
  
  if (totalInRegister(amountReturned) !== change) {
      return "Insufficient Funds";           
    }
 
    return amountReturned;
  
  function totalInRegister(cid){
    var total = 0;
    for(var i=0; i < cid.length; i++){
      total += cid[i][1] * 100;
    }
    return total;
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);