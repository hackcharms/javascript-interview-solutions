export default class Queue<T> {
  private $queue: Record<number, T> = {};
  private rear = -1;
  private front = -1;
  enqueue(element: T): typeof this.$queue {
    if(this.isEmpty){
      this.front=0;
    }
    this.rear++;
    this.$queue[this.rear] = element;
    return this.$queue;
  }
  dequeue(): T | void {
    if (this.isEmpty) throw Error("Queue is already empty");
    const temp = this.$queue[this.front];
    delete this.$queue[this.front];
    if(this.front===this.rear){
      this.rear=-1;
      this.front=-1;
    }else{
      this.front++;
    }
    return temp;
  }
  get size(): number {
    return this.rear+1 - this.front;
  }
  get isEmpty(): boolean {
    return this.rear===-1 && this.front===-1;
  }
  peek(): T {
    return this.$queue[this.front];
  }
  print(): void {
    console.log(this.$queue);
  }
}
