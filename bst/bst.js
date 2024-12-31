console.log("Trees");
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    // const newNode = new Node(value);
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) {
        return undefined;
      }

      if (newNode.value > temp.value) {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
  }

  contains(value) {
    if (this.root === null) return undefined;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
  bfs() {
    let currentNode = this.root;
    let queue = [];
    let result = [];
    queue.push(currentNode);
    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
  DFSPreorder() {
    let result = [];
    function treverse(currentNode) {
      result.push(currentNode.value);
      if (currentNode.left) treverse(currentNode.left);
      if (currentNode.right) treverse(currentNode.right);
    }
    treverse(this.root);
    return result;
  }
  DFSIterativePreorder() {
    let result = [];
    let stack = [];

    if (this.root) {
      stack.push(this.root);
    }

    while (stack.length > 0) {
      let currentNode = stack.pop();
      result.push(currentNode.value);

      // Push right child first so that left child is processed first
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }

    return result;
  }
  DFSPostorder() {
    let result = [];
    function treverse(currentNode) {
      if (currentNode.left) treverse(currentNode.left);
      if (currentNode.right) treverse(currentNode.right);
      result.push(currentNode.value);
    }
    treverse(this.root);
    return result;
  }
  DFSInorder() {
    let result = [];
    function treverse(currentNode) {
      if (currentNode.left) treverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) treverse(currentNode.right);
    }
    treverse(this.root);
    return result;
  }
}
let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
myTree.contains(82);
const timex = new Date();
for (let i = 0; i < 2000000; i++) {
  myTree.insert(Math.floor(Math.random() * 100000000));
}
// let time = new Date();
// console.log(myTree);
// console.log(myTree.contains(996513));
// console.log(myTree.DFSPostorder());
// console.log("DFSIterativePreorder", myTree.DFSIterativePreorder());
// myTree.DFSIterativePreorder();
// console.log("mybfs", myTree.bfs());
// console.log("DFSPreorder", myTree.DFSPreorder());
// let time2 = new Date();
// console.log("DFSIterativePreorder", time2 - time);

// console.log("DFSPreorder", myTree.DFSPreorder());
console.log("DFSInorder", myTree.DFSInorder());
// myTree.DFSPreorder();
const timey = new Date();
console.log("DFSInorder", timey - timex);

const qwe = new Date();
let array = [];
for (let i = 0; i < 2000000; i++) {
  array.push(Math.floor(Math.random() * 100000000));
}

// console.log("DFSPreorder", myTree.DFSPreorder());
array.sort((a, b) => a - b); // myTree.DFSPreorder();
const qweb = new Date();
console.log("sort Array", qweb - qwe);
