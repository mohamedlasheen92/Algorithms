export default class PriorityQueue<T> {
  private queue: { item: T; priority: number }[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: T, priority: number): void {
    const queueItem = { item, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (queueItem.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(queueItem);
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift()!.item;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0].item;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }
}