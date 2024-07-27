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
    expect(q.dequeue).toThrow(Error);
    expect(q.isEmpty).toBeTruthy();
    q.enqueue(10);
    q.enqueue(20);
    expect(q.peek()).toBe(10);
    q.enqueue(30);
    q.enqueue(40);
    expect(q.peek()).toBe(10);
    expect(q.size).toBe(4);
    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(20);
    expect(q.dequeue()).toBe(30);
    expect(q.dequeue()).toBe(40);
    expect(q.isEmpty).toBeTruthy();
    expect(q.dequeue).toThrow(Error);
    q.enqueue(4);
    expect(q.peek()).toBe(4);
  });
});
