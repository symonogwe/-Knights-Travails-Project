// Node class for each Board Square
class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }

  // connect method connects a node to another node
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
}

// nodes array

// nodes creation
// We create node 1A - 6H using a for loop as their
// creation and adjacencies are similar and only differ
// by +1
let squareObj = {};

for (let i = 1; i <= 8; i++) {
  squareObj[`${i}A`] = new Node(`${i}A`);
  squareObj[`${i}B`] = new Node(`${i}B`);
  squareObj[`${i}C`] = new Node(`${i}C`);
  squareObj[`${i}D`] = new Node(`${i}D`);
  squareObj[`${i}E`] = new Node(`${i}E`);
  squareObj[`${i}F`] = new Node(`${i}F`);
  squareObj[`${i}G`] = new Node(`${i}G`);
  squareObj[`${i}H`] = new Node(`${i}H`);
}

const nodesArray = Object.values(squareObj);
console.log(nodesArray);
