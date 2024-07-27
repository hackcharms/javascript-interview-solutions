import CircularQueue from "./queue/circularQueue";
const cQueue= new CircularQueue(4);
cQueue.enqueue(1)
cQueue.enqueue(2)
console.log('cQueue.size',cQueue.size,cQueue.max)
cQueue.enqueue(3)
cQueue.enqueue(4)
cQueue.print();
cQueue.dequeue();
cQueue.dequeue();
cQueue.dequeue();
cQueue.dequeue();
cQueue.print();
cQueue.enqueue(4)
cQueue.enqueue(3)
cQueue.enqueue(2)
cQueue.enqueue(1)
cQueue.print();
cQueue.enqueue(0)
cQueue.dequeue();
cQueue.enqueue(0)
cQueue.print();

console.log('peek',cQueue.peek(),4);
// cQueue.enqueue(5)
// cQueue.print();
// cQueue.dequeue();
// cQueue.enqueue(5)
// cQueue.dequeue();
// cQueue.enqueue(6)
// cQueue.print();
// console.log('peek should be 6',cQueue.peek());
// console.log('cQueue.size',cQueue.size,cQueue.max)