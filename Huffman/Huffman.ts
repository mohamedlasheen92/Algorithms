import PriorityQueue from "./PriorityQueue";

class HeapNode {
  public data: string;
  public freq: number;
  public left : HeapNode | null;
  public right: HeapNode | null;
  constructor(data: string, freq: number) {
    this.data = data
    this.freq = freq
    this.left = null
    this.right = null
  }
}
export default class Huffman {
  // Hashtable with data and char
  private minHeap: PriorityQueue<HeapNode> = new PriorityQueue<HeapNode>()
  private internal_char: string = String.fromCharCode(0)
      public codes: { [key: string]: string } = {};


  // Convert Hashtable to priority queue
  constructor(message: string) {

    let freqHash: {[key: string]: number} = {}
    for (let i = 0; i < message.length; i++) {
      if (!freqHash[message[i]]) {
        freqHash[message[i]] = 1
      } else {
        ++freqHash[message[i]]
      }
    }
    // Convert Hashtable to Priority Queue
    for (const key in freqHash) {
      const newNode: HeapNode = new HeapNode(key, freqHash[key])
      this.minHeap.enqueue(newNode, freqHash[key])
    }
    // Huffman map
    let top: HeapNode, left: HeapNode , right: HeapNode ;
    let newFreq: number;
    while (this.minHeap.size() !== 1) {
      left = this.minHeap.dequeue()!
      right = this.minHeap.dequeue()!
      newFreq = left.freq + right.freq
      top = new HeapNode(this.internal_char, newFreq)
      top.left = left
      top.right = right
      this.minHeap.enqueue(top, newFreq)
    }

    this.generateCodes(this.minHeap.dequeue()!, "");
    console.log(this.codes);
    

  }
  private generateCodes(node: HeapNode | null, str: string): void {
        if (node === null) {
            return;
        }
        if (node.data !== this.internal_char) {
            this.codes[node.data] = str;
        }
        this.generateCodes(node.left, str + "0");
        this.generateCodes(node.right, str + "1");
    }
}
