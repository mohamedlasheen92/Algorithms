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
  
  public addEdgesWithWeights(sourceIndex: number, targetsIndices: number[], weights: number[]) {
    this.vertices[sourceIndex].vertexLinks = new Array(targetsIndices.length);

    for (let i = 0; i < targetsIndices.length; i++) {
      this.vertices[sourceIndex].vertexLinks[i] = new Edge(
        this.vertices[sourceIndex],
        this.vertices[targetsIndices[i]],
        weights[i]
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
      vertex.totalLength = 0;
      vertex.sourceofTotalLength = null;
    }
  }


  public DFS() {
    console.log("DFS from Graph Class");
    this.DFSRecursion(this.vertices[0]);
    this.resetVertices();
  }
  private DFSRecursion(currentVertex: Vertex) {
    currentVertex.visited = true;
    let destinations: Edge[] = currentVertex.vertexLinks;
    for (let i = 0; i < destinations.length; i++) {
      if (destinations[i].target.visited === false) {
        console.log(`${currentVertex.name} -> ${destinations[i].target.name}`);
        this.DFSRecursion(destinations[i].target);
      }
    }
  }

  public dijkstra() {
    console.log("Dijkstra from Graph Class");
    for (let i = 1; i < this.vertices.length; i++) {
      this.vertices[i].totalLength = Infinity;
    }

    let currentVertex: Vertex;
    for (let i = 0; i < this.vertices.length; i++) {
      currentVertex = this.vertices[i];
      const destinations: Edge[] = currentVertex.vertexLinks;

      if (!destinations) continue;

      let currentEdge: Edge;

      for (let j = 0; j < destinations.length; j++) {
        currentEdge = destinations[j];
        let newTotalLength = currentVertex.totalLength + currentEdge.weight;
        // console.log(currentEdge.target);
        // if (currentEdge.target === undefined) continue;
        if (newTotalLength < currentEdge.target.totalLength) {
          currentEdge.target.totalLength = newTotalLength;
          currentEdge.target.sourceofTotalLength = currentVertex;
        }

      }
    }
    let path = this.vertices[this.vertices.length - 1].name;
    let currentPath: Vertex = this.vertices[this.vertices.length - 1];
    while (currentPath.sourceofTotalLength !== null) {
      path = currentPath.sourceofTotalLength.name + ' -> ' + path;
      currentPath = currentPath.sourceofTotalLength;
    }
    console.log(this.vertices[this.vertices.length - 1].totalLength);
    console.log(path);
    this.resetVertices();
  }
}



export default Graph;