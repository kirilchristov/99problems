//j - starts as i but goes backwards

function insertionSort(array) {
  for (let i = 0; i<array.length; i++) {
    let j = i;
    while (j>0 && array[j]<array[j-1]) {
      swap(j,j-1, array)
      j-=1
    }
  }
  return array
}

//swap function
function swap(i, j, array) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array
}

//test case
const input = [8,5,2,9,5,6,3]

console.log(insertionSort(input))
