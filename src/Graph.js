import { nodesArray } from "./Nodes";
import { squareObj } from "./Nodes";

class Graph {
  constructor(array) {
    this.array = [...array];
  }

  knightTravails(start, end) {
    const queue = [start];
    const visitedNodes = {};
    visitedNodes[start.data] = null;

    while (queue.length > 0) {
      let node = queue.shift();
      if (node.data === end.data) {
        this.revealPath(visitedNodes, end);
      }

      for (let adjacencies of node.edgesList) {
        if (!visitedNodes.hasOwnProperty(adjacencies.data)) {
          queue.push(adjacencies);
          visitedNodes[adjacencies.data] = node;
        }
      }
    }
  }

  revealPath(visitedNodes, end) {
    let currNode = end;
    let pathArr = [];

    while (currNode !== null) {
      pathArr.push(currNode);
      currNode = visitedNodes[currNode.data];
    }
    console.log(pathArr.reverse());
  }
}

// GameBoard
const gameBoard = new Graph(nodesArray);

let startNode = squareObj["3C"];
let endNode = squareObj["1A"];

console.log(startNode);

gameBoard.knightTravails(startNode, endNode);
