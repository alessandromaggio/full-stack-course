let source = [1, 2, 13, 147, -1, 45, 23, 29, 31, 32, 37, 40];
let primes = [];

for(let i=0; i < source.length; i++) {
  if (source[i] <= 1) continue;
  let prime = true;
  for (let j=2; j < source[i]; j++) {
    if (source[i] % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) primes.push(source[i]);
}

console.log(primes);