import Edge from "./Edge";

class Vertex {
  public name: string;
  public visited: boolean;
  public vertexLinks: Edge[];

  public totalLength: number = 0;
  public sourceofTotalLength: Vertex | null = null;


  constructor(vertexName: string) {
    this.name = vertexName;
    this.visited = false;
    this.vertexLinks = [];
  }


  
}

export default Vertex;
