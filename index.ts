import Graph from "./Breadth First Search/Graph";

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

graph.bfs();

/*
console.log('abc'.charCodeAt(2));
console.log('ABC'.charCodeAt(1));
console.log(String.fromCharCode(99));
console.log(String.fromCharCode(66));

*/
