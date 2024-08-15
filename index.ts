import Graph from "./Graph Algorithms/Graph";


const graph = new Graph(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

graph.addEdgesWithWeights(0, [1, 2, 3], [2, 4, 3]);

graph.addEdgesWithWeights(1, [4, 5, 6], [7, 4, 6]);
graph.addEdgesWithWeights(2, [4, 5, 6], [3, 2, 4]);
graph.addEdgesWithWeights(3, [4, 5, 6], [4, 1, 5]);

graph.addEdgesWithWeights(4, [7, 8], [1, 4]);
graph.addEdgesWithWeights(5, [7, 8], [6, 3]);
graph.addEdgesWithWeights(6, [7, 8], [3, 3]);

graph.addEdgesWithWeights(7, [9], [3]);
graph.addEdgesWithWeights(8, [9], [4]);


graph.dijkstra();

/*
const graph = new Graph(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
graph.addEdges(0, [1, 2]);
graph.addEdges(1, [0, 3, 4]);
graph.addEdges(2, [0, 3, 5]);
graph.addEdges(3, [1, 2, 4]);
graph.addEdges(4, [1, 5]);
graph.addEdges(5, [2, 3, 4, 7]);
graph.addEdges(6, [7, 8]);
graph.addEdges(7, [5, 6, 8]);
graph.addEdges(8, [6, 7]);

graph.DFS();
*/

/*
console.log('abc'.charCodeAt(2));
console.log('ABC'.charCodeAt(1));
console.log(String.fromCharCode(99));
console.log(String.fromCharCode(66));

*/
