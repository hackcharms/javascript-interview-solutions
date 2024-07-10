import Queue from "./queue";

export function test() {
  const queue = new Queue();
  console.log("is queue empty", queue.isEmpty);
  queue.enqueue({ name: "task1" });
  queue.enqueue({ name: "task2" });
  console.log("size", queue.size);
  queue.enqueue({ name: "task3" });
  queue.enqueue({ name: "task4" });
  queue.dequeue();
  queue.dequeue();
  queue.enqueue({ name: "task5" });
  console.log("size", queue.size);
  queue.print();
}
