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
      )
    }
  }
}



export default Graph;