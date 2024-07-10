import Stack, { StackImproved } from "./stack";

export function test() {
  const stack = new Stack();
  stack.print("  ==> ", (el) => el.name);
  stack.push({ name: "task1", des: "updated the data" });
  stack.push({ name: "task2", des: "updated the data 2" });
  stack.push({ name: "task3", des: "updated the data 3" });
  stack.print("  ==> ", (el) => el.name);
  stack.pop();
  stack.print("  ==> ", (el) => el.name);
}
export function testImproved() {
  const stack = new StackImproved();
  stack.print();
  console.log("stack.size", stack.size);
  stack.push({ name: "task1", des: "updated the data" });
  console.log("stack.size", stack.size);
  stack.pop();
  console.log("stack.size", stack.size);
  // stack.push({ name: "task2", des: "updated the data 2" });
  // stack.push({ name: "task3", des: "updated the data 3" });
  // stack.print();
  stack.print();
}
