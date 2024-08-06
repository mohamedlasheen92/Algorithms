import Vertex from "./Vertex";

class Edge {
  public source: Vertex;
  public target: Vertex;
  public weight: number;

  constructor(sourceVertex: Vertex, targetVertex: Vertex, weight: number = 0) {
    this.source = sourceVertex;
    this.target = targetVertex;
    this.weight = weight;
  }

  
}



export default Edge;