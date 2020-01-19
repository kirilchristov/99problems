/* Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum. 
Input - array
output - array with the two numbers

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]
*/

// const inputArray = [-21, 301, 12, 4, 65, 56, 210, 356,9, -47]
// const target = 164;

// const inputArray =  [3, 5, -4, 8, 11, 1, -1, 6]
// const target =  10;

//Solution 1 = Brute force

function twoNumberSum(array, targetSum) {
  for (let i = 0; i<array.length; i++) {
    for (let j = i+1; j<array.length; j++) {
      if(target === array[i]+array[j]) {
        return [array[i], array[j]]
       }
    } 
  }
  return []
}

// console.log(twoNumberSum(inputArray,target))

//Solution 2 = Hash table
function twoNumberSum(array, targetSum) {
  const hash = {};
  for (let i = 0; i< array.length; i++) {
    const diff = targetSum - array[i]
    if(hash[diff]) {
      return [diff, array[i]]
    } else {
      hash[array[i]] = diff
    }
  }
}

// console.log(twoNumberSum(inputArray,target))

//Solution 2.1 = Hash table 2
function twoNumberSum(array, targetSum) {
  const hash = {}
  for (let i = 0; i<array.length; i++) {
    let numberWeNeed = targetSum - array[i]
    if(hash[numberWeNeed]) {
      return [numberWeNeed, array[i]]
    } else {
      hash[array[i]] = true
    }
  }
  return []
}

// console.log(twoNumberSum(inputArray,target))

//Solution 3 with sorting 
function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a-b) //sort it in asc order
  let leftP = 0;
  let rightP = array.length - 1

  while (leftP<rightP) {
    let sum = array[leftP]+array[rightP]
    if (sum===targetSum) {
      return [array[leftP], array[rightP]]
    } else if (sum < targetSum) {
      leftP+=1;
    } else if (sum > targetSum) {
      rightP-=1
    }
  }
  return []
}

// console.log(twoNumberSum(inputArray,target))
// console.log(twoNumberSum([-21,301,12,4,65,56,210,356,9,-47],163))
