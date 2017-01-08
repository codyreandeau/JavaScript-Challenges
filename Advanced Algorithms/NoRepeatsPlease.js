function permAlone(str) {

  var arr = str.split('');
  var perms = [];   
  var consecutive = /(.)\1+/g;
  var tmp;

  function swap(a, b){
    tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
  function gen(n) {
    if (n == 1) {
      perms.push(arr.join(''));
    } else {
      for (var i = 0; i != n; ++i) {
        gen(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  
  gen(arr.length);
  
  var filtered = perms.filter(function(string) {
    return !string.match(consecutive);
  }).length;
  
  return filtered;
}

permAlone('aab');