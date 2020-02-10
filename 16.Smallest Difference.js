const input1 = [-1,5,10,2,28,3]
const input2 = [15,17,26,134,135]

function smallestDifference(arrayOne, arrayTwo) {
  //sort arrays
  arrayOne.sort((a,b)=>a-b)
  arrayTwo.sort((a,b)=>a-b)
  let l = 0;
  let r = 0;
 
  let difference = Infinity;
  let currentDifference = Infinity;
  let output = [];

  while (l<arrayOne.length && r<arrayTwo.length) {
    //we declare vars because wwe will be updating the indexes
    let firstNum = arrayOne[l];
    let secondNum = arrayTwo[r];

    if(firstNum<secondNum) {
      currentDifference = secondNum - arrayOne[l]
      console.log('l>r', firstNum,secondNum )
      l++;
    } else if (firstNum>arrayTwo[r]) {
      currentDifference = firstNum-secondNum
      console.log('l<r',firstNum,secondNum )
      r++
    } else {
      console.log('l===r', )
      return [firstNum, secondNum]
    }

    if(currentDifference<difference) {
      console.log('current before end', currentDifference)
      difference = currentDifference;
      output = [firstNum, secondNum]
    }
  }
  return output
}

console.log(smallestDifference(input1, input2))