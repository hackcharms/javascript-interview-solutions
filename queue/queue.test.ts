import Queue from "./queue";
describe("Queue", () => {
  test("initialized", () => {
    const q = new Queue();
    expect(q).toBeInstanceOf(Queue);
  });
  test("enqueue", () => {
    const q = new Queue();
    q.enqueue(10);
    expect(q.size).toBe(1);
    q.enqueue(20);
    expect(q.size).toBe(2);
  });
  test("dequeue", () => {
    const q = new Queue<number>();
    expect(q.isEmpty).toBeTruthy();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    q.print();
    console.warn(q.peek());
    expect(q.peek()).toBe(40);
    expect(q.size).toBe(4);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty).toBeTruthy();
    q.enqueue(4);
    expect(q.peek()).toBe(4);
  });
});
