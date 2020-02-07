//TLDR - isSorted false, while it's false - keep looping. 
//Before every loop we set it to true, so if the func gets into the loop it gets false again. 
//Until it doesn't get into the loop and remain true.

function bubbleSort(array){
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for (let i = 0; i< array.length; i++) {
      if (array[i]>array[i+1]) {
        swap(i, i+1, array)
        isSorted = false;
      }
    }
  }
  return array; 
}

function swap(i, j, array) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array;
}

//test case

const input = [6,5,4,3,2,1]
console.log(bubbleSort(input))
