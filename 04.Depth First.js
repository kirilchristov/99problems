

// -----> Challenge starts here
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Building a test case - a tree for the 
const test = new Node ('A')
test.addChild('B')
test.addChild('C')
test.addChild('D')
test.children[0].addChild('E')
test.children[0].addChild('F')

test.children[0].children[1].addChild('I')
test.children[0].children[1].addChild('J')
test.children[2].addChild('G')
test.children[2].addChild('H')
test.children[2].children[0].addChild('K')
// console.log( test.children[2].children[0])
console.log(test.depthFirstSearch([])) //-------> We are passing an empty array so we will collect everything in it




