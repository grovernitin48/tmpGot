function fib(n, undefined){
    if(fib.cache[n] === undefined){
        fib.cache[n] = fib(n-1) + fib(n-2);
    }

    return fib.cache[n];
}
fib.cache = [0, 1, 1];
fib(10);
console.log(fib.cache);


const isPrime = (n) => {
  for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
        return false;
      }
  };
  return true;
};
const generatePrime = num => {
  const arr = [];
  let i = 2;
  while(arr.length < num){
      if(isPrime(i)){
        arr.push(i);
      };
      i = i === 2 ? i+1 : i+2;
  };
  return arr;
};
console.log(generatePrime(10));
