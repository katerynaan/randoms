import { userProxy } from './proxy.js';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }
  size() {
    return this.count;
  }
  insert(value) {
    const node = new Node(value);
    this.count++;
    searchTree(this.root);
    function searchTree(currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) currentNode.left = node;
        else searchTree(currentNode.left);
      } else {
        if (!currentNode.right) currentNode.right = node;
        else searchTree(currentNode.right);
      }
    }
  }
  min() {
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }
  max() {
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }
  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
  //values by branch direction: center, left and  right
  //root, left, right
  dfsPreOrder() {
    const result = [];
    const traverseTree = (node) => {
      result.push(node.value);
      if (node.left) traverseTree(node.left);
      if (node.right) traverseTree(node.right);
    };
    traverseTree(this.root);
    return result;
  }
  //left, root, right
  dfsInOrder() {
    const result = [];
    const traverseTree = (node) => {
      if (node.left) traverseTree(node.left);
      result.push(node.value);
      if (node.right) traverseTree(node.right);
    };
    traverseTree(this.root);

    return result;
  }
  //left, right, root
  dfsPostOrder() {
    const result = [];
    const traverseTree = (node) => {
      if (node.left) traverseTree(node.left);
      if (node.right) traverseTree(node.right);
      result.push(node.value);
    };
    traverseTree(this.root);
    return result;
  }
  //values by level of the tree
  bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }
}

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(userProxy.congratulate('Happy birthday!'));
