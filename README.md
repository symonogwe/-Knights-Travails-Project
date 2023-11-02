# -Knights-Travails-Project

The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
You can think of the board as having 2-dimensional coordinates.
I will implement this using Breadth-First-Traversal. The function will therefore look like this:

- knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
  Note: Sometimes there is more than one fastest path, an example of this is shown below. Either answer will work.

- knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

- knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

- knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
