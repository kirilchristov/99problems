// O(2^n) time; O(n) space
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// O(n) time; O(n) space
function fib(n) {
  let memCache = { 1: 0, 2: 1, 3: 1 };
  if (n in memCache) {
    return memCache[n];
  } else {
    memCache[n] = fib(n - 1) + fib(n - 2);
    return memCache[n];
  }
}

// O(n) time; O(1) space
function fib(n) {
  let lastTwo = [0, 1];
  let i = 3;
  while (i <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    i++;
  }
  if (n===0) return "Try a real number";
  if (n===1) return 0;
  else return lastTwo[1]
}

// console.log(fib(10))