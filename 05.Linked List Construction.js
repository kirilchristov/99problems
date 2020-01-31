// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    
  }

  setTail(node) {
    
  }

  insertBefore(node, nodeToInsert) {
    //04 - Gets an existing node and moves it to another part
    //Case  - if it is the only one
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    //In case we have nodeToInsert from before - we delete it, just in case
    this.remove(nodeToInsert);
    //And we fixing all the pointers
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert 
    } else {
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert
  }

  insertAfter(node, nodeToInsert) {
    
  }

  insertAtPosition(position, nodeToInsert) {
    
  }

  removeNodesWithValue(value) {
    //03 
    //Find the item to delete, but before that assign the current ot the next node, so you won't lose track
    let node = this.head;
    while (node !== null) {
      let nodeToDelete = node;
      node = node.next
      if (nodeToDelete.value === value) {
        this.remove(nodeToDelete)
      }
    }
  }

  remove(node) {
    //02 to implement - 0(1) time | 0 (1) space
    //check if it's the only one
    if (node === this.head) {
      head = this.head.next
    }
    if (node === this.tail) {
      tail = this.tail.prev
    }
    this.removeBindings(node)
    
  }

  removeBindings(node){
    //we are fixiing the prev and next pointers and nulling the node
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
   
  }

  containsNodeWithValue(value) {
    // 01 to implement
    //loop while the current node is null or "(node.value === value) === false", then check if the node is null or not. If it's === value it will come true, if it's empty (at the end and couldn't dint value === false)
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next
    }
    return node !== null
  }
}

const kiroList = new DoublyLinkedList;
kiroList.head = new Node(8)
// console.log(kiroList)
console.log(kiroList.containsNodeWithValue(7))