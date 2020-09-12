function min(arr) {
  let min = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function max(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function calc(arr) {
  if (arr.length === 0) return undefined;
  return [
    min(arr),
    max(arr),
    avg(arr)
  ];
}

console.log(calc([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(calc([10]));
console.log(calc([-1, -40, 23, 12]));
console.log(calc([]));