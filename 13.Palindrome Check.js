//input: string
//output: boolean


//Solution 1 with methods
function isPalindrome1(string) {
  const compareString = 
    string.split('')
    .reverse()
    .join('')
  if(string === compareString) return true;
  else return false
}

//Solution 2 - algoexpert
function isPalindrome(string) {
 let reversedString = ''
 for (let i = string.length-1; i>=0; i--) {
   reversedString += string[i]
 }
return reversedString === string

}

function swap(i, j, array) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array;
}

const input = 'aaa'

console.log(isPalindrome(input))