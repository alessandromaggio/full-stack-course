let a = 0;
let b = 1;
while(a + b < 1000) {
  let total = a + b;
  console.log(a + ' + ' + b + ' = ' + total);
  a = b;
  b = total;
}