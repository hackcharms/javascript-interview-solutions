import CircularQueue from "./circularQueue";
describe("CircularQueue", () => {
  test("initialized", () => {
    const q = new CircularQueue<number>(5);
    expect(q).toBeInstanceOf(CircularQueue);
  });
  test("Empty and Overflow", () => {
    const q = new CircularQueue<number>(2);
    expect(q.dequeue).toThrow(Error)
    q.enqueue(1)
    q.enqueue(2)
    expect(()=>q.enqueue(3)).toThrow(Error);
  })
  test("enqueue", () => {
    const q = new CircularQueue<number>(5);
    q.enqueue(10);
    expect(q.size).toBe(1);
    q.enqueue(20);
    expect(q.size).toBe(2);
  });
  test("dequeue", () => {
    const q = new CircularQueue<number>(4);
    expect(q.isEmpty).toBeTruthy();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    expect(()=>q.enqueue(4)).toThrow(Error)
    expect(q.peek()).toBe(10);
    expect(q.size).toBe(4);
    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(20);
    expect(q.dequeue()).toBe(30);
    expect(q.dequeue()).toBe(40);
    expect(q.isEmpty).toBeTruthy();
    q.enqueue(4);
    expect(q.peek()).toBe(4);
  });
});
