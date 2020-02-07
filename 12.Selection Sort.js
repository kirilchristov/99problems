// declare smallest as the array[0]
//loop and find smallest - update it
//at the end of the loop put smallest in the front
//update the index
//start the same at index[1]


const input  = [8,5,2,9,5,6,3]

function selectionSort(array) {
  let startIndex = 0;

  while (startIndex < array.length-1) {
    let smallestIndex = startIndex;
    for (let i = startIndex+1; i < array.length; i++) {
      if(array[i]<array[smallestIndex]) {
        smallestIndex = i;
      }
    }
    swap(smallestIndex,startIndex,array)
    startIndex+=1;
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array;
}

console.log(selectionSort(input))