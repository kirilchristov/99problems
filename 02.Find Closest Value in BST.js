//The tree creator function
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value) {
      if(this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    }
    if (value > this.value) {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}
//The test case for tree creator
const test = new BST(10)
test.insert(5)
test.insert(15)
test.insert(2)
test.insert(5)
test.insert(13)
test.insert(22)
test.insert(1)
test.insert(14)

//Solution 1 - With a helper function

function findClosest (node, target) {
  //The helper function gets the arguments but adds Infintiy in order to compare
  return helperFindClosest(node, target, Infinity)
}

function helperFindClosest(node, target, closest) {
  if (node === null) return closest;
  if (Math.abs(node.value - target) === Math.abs(closest - target)) {
    return node.value
  }
  if (Math.abs(node.value - target) < Math.abs(closest - target)) {
    closest = node.value
  }
  if (node.value < target) return helperFindClosest(node.right, target, closest)
  if (node.value > target) return helperFindClosest(node.left, target, closest)
  else return closest
}


// Solution 2
function findClosest (node, target) {
  //The helper function gets the arguments but adds Infintiy in order to compare
  return helperFindClosest(node, target, Infinity)
}


function helperFindClosest(node, target, closest) {
  let currentNode = node;
  while (currentNode !== null) {
    if (Math.abs(currentNode.value - target) < Math.abs( closest - target)) {
      closest = currentNode.value
    }
    if (currentNode.value < target) {
      currentNode = currentNode.right
    }
    else if (currentNode.value > target) {
      currentNode = currentNode.left
    } 
    else {
      break;
    }
  }
  return closest
}

