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
    return;
  } 
  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}