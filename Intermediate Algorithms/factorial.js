function factorialize(num) {
  
 var factorial = num;
  
  if(factorial === 0){
    return 1;
  }
  
  while(num > 1){
    num--;
    factorial *= num;
  }
  return factorial;
}

factorialize(5);