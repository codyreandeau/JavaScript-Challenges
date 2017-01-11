function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
    
   var orbitalPeriod = function(x) {
    var a = 2 * Math.PI,
        c = Math.pow(earthRadius + x.avgAlt, 3),
        b = Math.sqrt(c / GM),
        period = Math.round(a * b);
    delete x.avgAlt;
    x.orbitalPeriod = period;
    return x;
  };
  
  for(var i=0; i < arr.length; i++){
    newArr.push(orbitalPeriod(arr[i]));
  }
  
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);