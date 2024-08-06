import Edge from "./Edge";

class Vertex {
  public name: string;
  public visited: boolean;
  public vertexLinks: Edge[];

  constructor(vertexName: string) {
    this.name = vertexName;
    this.visited = false;
    this.vertexLinks = [];
  }


  
}

export default Vertex;
