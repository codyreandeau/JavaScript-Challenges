function sumPrimes(num) {
  
  var sieve = [], primes = [];
  var sumOfPrimes = 0;
    
  //Add prime numbers into array using sieve implementation
   for(var i = 2; i <= num; ++i) {
      if (!sieve[i]) {
          primes.push(i);
         for (var j = i; j <= num; j += i) {
              sieve[j] = true;
            }
          }
        }
  
   for(var x=0; x < primes.length; x++){
      sumOfPrimes += primes[x];
    }
    
  return sumOfPrimes;
}

sumPrimes(10);