//TLDR - Using the dynamic programming
//We track the current sum and we choose Math.max(sum+curr num OR curr num)

function kadanesAlgorithm(array) {
  let currentSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i<array.length; i++) {
    currentSum = Math.max((currentSum+array[i]), array[i])
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }
  return maxSum
}

console.log(kadanesAlgorithm([1, -2, 3, 10, -4, 7, 2, -5]))



//-----Solution  - Brute Force Kiro
//TLDR - double loop, all sums into cache, cache into array, math max on the (destructured) array

function maxSubarray(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  let loop = 0;
  const cache = {};
  for (let i = 0; i<array.length; i++) {
    sum = array[i]
    cache[loop] = sum
    loop+=1;
    for (let j = i+1; j<array.length; j++) {
      sum+=array[j]
      cache[loop] = sum
      loop+=1;
    }
  }
  console.log('this is the cache object with all the sums', cache)
  const arrOfSums = Object.values(cache)
  if (Math.max(...arrOfSums)>0) return Math.max(...arrOfSums);
  else return 0;
}


// console.log('Expected 18',maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
// console.log('Expected 0',maxSubarray([]))
// console.log('Expected 0',maxSubarray([-2,-5,-4]))
// console.log('Expected 10',maxSubarray([2,1,3,4,-99,2]))
// console.log('Expected 12',maxSubarray([-5,12,-90,5,1]))
// console.log('Expected 25',maxSubarray([5,10,-90,25,-100, 15, 6]))
// console.log('Expected 55',maxSubarray([1,12,-11,50,3]))
// console.log('Expected 100',maxSubarray([-100,-100,-100,100,-100,-100]))