//Template
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here. Kiro code follows:
	const sums = [];
	calculateBranchSums(root, 0, sums);
	return sums;
}

function calculateBranchSums (node, runningSum, sums) {
  if (!node) return;

  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newRunningSum);
<<<<<<< HEAD
    return sums;
=======
    return;
>>>>>>> 7a851c9d758c6f60b49934cb19668eb194d2d051
  } 
  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}