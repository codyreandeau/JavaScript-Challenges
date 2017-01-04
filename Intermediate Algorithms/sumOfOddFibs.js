function sumFibs(num) {

var current= 1;
var previous = 0;
var sumOfOdds = 0;
var next_fib = 0;

while(current <= num){
   if(current % 2 === 1) {
     sumOfOdds += current;
   }
    next_fib = current + previous;
    previous = current;
    current = next_fib;
}
return sumOfOdds;
}

sumFibs(4);