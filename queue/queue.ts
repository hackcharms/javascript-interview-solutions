export default class Queue {
  private $queue: Record<number, any> = {};
  private front = 0;
  private rear = 0;
  enqueue(element: any) {
    this.$queue[this.front] = element;
    this.front++;
    return this.$queue;
  }
  dequeue() {
    if (this.isEmpty) return console.warn("Queue is already empty");
    const temp = this.$queue[this.rear];
    delete this.$queue[this.rear];
    this.rear++;
  }
  get size() {
    return this.front - this.rear;
  }
  get isEmpty() {
    return !(this.front - this.rear);
  }
  peek() {
    return this.$queue[this.front];
  }
  print() {
    console.log(this.$queue);
  }
}
