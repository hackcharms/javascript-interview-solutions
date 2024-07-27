export default class CircularQueue<T> {
  private $queue: Record<number, T> = {};
  private front = -1;
  private rear = -1;
  public max:number
  constructor(max:number){
    this.max=max;
  }
  enqueue(element: T): typeof this.$queue |void {
    if(this.isFull) throw Error('Queue if Full');
    if(this.isEmpty){
        this.front=0;   
    }
    this.rear=(this.rear+1)%this.max;
    this.$queue[this.rear]=element;
    return this.$queue;

  }
  dequeue(): T | void {
    if(this.isEmpty) throw Error('Queue is empty');
    const temp=this.$queue[this.front];
    delete this.$queue[this.front];
    if(this.front===this.rear){
        this.front=-1;
        this.rear=-1;
    }else{
        this.front=(this.front+1) % this.max;
    }
    return temp;
  }
  get size(): number {
      return Object.keys(this.$queue).length;
  }
  get isEmpty(): boolean {
    return this.front===-1 && this.rear===-1;
  }
  get isFull(): boolean {
    return (this.rear+1)%this.max===this.front;
  }
  peek(): T|void {
    if(this.isEmpty) throw Error('Q is empty')
    return this.$queue[this.front];
  }
  print(): void {
    console.log(this.$queue);
    console.log(`front==>`,this.front,'rear ==>', this.rear);
  }
}
