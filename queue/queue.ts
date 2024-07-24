export default class Queue<T> {
  private $queue: Record<number, T> = {};
  private front = 0;
  private rear = 0;
  enqueue(element: T): typeof this.$queue {
    this.$queue[this.front] = element;
    this.front++;
    return this.$queue;
  }
  dequeue(): number | void {
    if (this.isEmpty) return console.warn("Queue is already empty");
    const temp = this.$queue[this.rear];
    delete this.$queue[this.rear];
    this.rear++;
  }
  get size(): number {
    return this.front - this.rear;
  }
  get isEmpty(): boolean {
    return !(this.front - this.rear);
  }
  peek(): T {
    return this.$queue[this.front - 1];
  }
  print(): void {
    console.log(this.$queue);
  }
}
