import { Queue } from "queue-typed";

const queue = new Queue<string>();

interface ICharMap {
  [key: string]: string[];
}
interface IVisited {
  [key: string]: boolean;
}
const hash: ICharMap = {
  A: ["B", "C"],
  B: ["E", "D", "A"],
  C: ["D", "F", "A"],
  D: ["C", "F", "B"],
  E: ["F", "B"],
  F: ["D", "E", "C", "H"],
  G: ["H", "I"],
  H: ["G", "I", "F"],
  I: ["G", "H"],
};
queue.push("A");

let visited: IVisited = {
  A: true,
};
let currentVertex: string | undefined;
let destinations: string[];

while (!queue.isEmpty()) {
  currentVertex = queue.shift();
  destinations = hash[currentVertex!];

  for (let i = 0; i < destinations.length; i++) {
    if (!visited.hasOwnProperty(destinations[i])) {
      queue.push(destinations[i]);
      visited[destinations[i]] = true;
      console.log(`${currentVertex} - ${destinations[i]}`);
    }
  }
}
