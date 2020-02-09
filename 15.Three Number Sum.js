const input = [12,3,1,2,-6,5,-8,6]


//brute force - for the fun
// function threeNumberSum(input, target) {
//   const output = []
//   for(let i = 0; i<input.length; i++){
//     for(let j = i+1; j<input.length; j++) {
//       for (let k = j+1; k<input.length; k++) {
//         const internalArray = [];
//         let result = input[i]+input[j]+input[k];
//         console.log(result)
//         if( result === 0) {
//           internalArray.push(input[i],input[j],input[k])
//           output.push(internalArray)
//         }
//       }
//     }
//   }
//   return output;
// }
// console.log(threeNumberSum(input,0))


function threeNumberSum(array, target) {
  const output = [];
  array.sort((a,b)=>a-b)
  for (let i = 0; i < array.length-2; i++) {
    let l = i+1;
    let r = array.length - 1;
    while ( l < r) {
      let currentSum = array[i] + array[l] + array[r]
      if(currentSum === target) {
        output.push([array[i], array[l], array[r]])
        l++;
        r--;
      } else if (currentSum < target) {
        l++
      } else if (currentSum > target){
        r--
      } 
    }
  }
  return output;
}

console.log(threeNumberSum(input,0))