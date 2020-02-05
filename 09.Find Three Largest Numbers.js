const input = [141,1,17,-7,-17-27,18,541,8,7,7]

function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null]
  for (let num of array) {
     updateThreeLargestArray(threeLargest, num)
  }
  return threeLargest
}

//helper that checks the logic
function updateThreeLargestArray(arrayOfThree, num) {
  if (num > arrayOfThree[2] || arrayOfThree[2] === null) {
    shiftArray(arrayOfThree, num, 2)
  } else if (num > arrayOfThree[1] || arrayOfThree[1] === null) {
    shiftArray(arrayOfThree, num, 1)
  } else if (num > arrayOfThree[0] || arrayOfThree[0] === null) {
    shiftArray(arrayOfThree, num, 0)
  }
}

//helper that swaps
function shiftArray(arrayOfThree, num, index) {
  for (let i = 0; i<=index; i++) {
    if(i===index) {
      arrayOfThree[i] = num
    } else {
      arrayOfThree[i] = arrayOfThree[i+1]
    }
  }
}


console.log(findThreeLargestNumbers(input))
