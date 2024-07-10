import Queue from "./queue";

test("Queue has been initialized", () => {
  const q = new Queue();
  expect(q).toBeInstanceOf(Queue);
});
