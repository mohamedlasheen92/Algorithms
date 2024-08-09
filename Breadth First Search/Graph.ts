import { Queue } from "queue-typed";
import Edge from "./Edge";
import Vertex from "./Vertex";

class Graph {
  private lastIndex: number = 0;
  public vertices: Vertex[];

  constructor(names: string[]) {
    this.vertices = new Array(names.length);
    for (const name of names) {
      this.vertices[this.lastIndex] = new Vertex(name);
      this.lastIndex++;
    }
  }
  public addEdges(sourceIndex: number, targetsIndices: number[]) {
    this.vertices[sourceIndex].vertexLinks = new Array(targetsIndices.length);

    for (let i = 0; i < targetsIndices.length; i++) {
      this.vertices[sourceIndex].vertexLinks[i] = new Edge(
        this.vertices[sourceIndex],
        this.vertices[targetsIndices[i]]
      );
    }
  }
  public bfs() {
    console.log("Breadth First Search from Graph Class");
    const queue = new Queue<Vertex>();

    queue.push(this.vertices[0]);
    this.vertices[0].visited = true;

    let destinations: Edge[];
    let currentVertex: Vertex;

    while (!queue.isEmpty()) {
      currentVertex = queue.shift()!;
      destinations = currentVertex!.vertexLinks;

      for (let i = 0; i < destinations.length; i++) {
        if (destinations[i].target.visited === false) {
          queue.push(destinations[i].target);
          destinations[i].target.visited = true;

          console.log(
            `${currentVertex.name} -> ${destinations[i].target.name}`
          );
        }
      }
    }
  }
  //If I use this Graph for other purposes
  public resetVertices() {
    for (const vertex of this.vertices) {
      vertex.visited = false;
    }
  }
}



export default Graph;