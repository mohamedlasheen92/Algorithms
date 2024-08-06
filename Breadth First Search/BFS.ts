import Graph from "./Graph";


const graph = new Graph(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);

graph.addEdges(0, [1, 2])

console.log(graph.vertices[0].vertexLinks);

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);

// console.log(queue);
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue);
// console.log(queue.isEmpty());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.isEmpty());
