import { StackImproved } from "./stack";

describe("Stack", () => {
  test("constructor", () => {
    const s = new StackImproved();
    expect(s instanceof StackImproved);
  });

  test("push()", () => {
    const s = new StackImproved();
    expect(s.push(100)).toBe(1);
    expect(s.push(200)).toBe(2);
  });

  test("isEmpty", () => {
    const s = new StackImproved();
    expect(s.isEmpty).toBeTruthy();
    s.push(200);
    expect(s.isEmpty).toBeFalsy();
  });
  test("pop()", () => {
    const s = new StackImproved();
    s.push(100);
    s.push(200);
    expect(s.pop()).toBe(200);
    expect(s.pop()).toBe(100);
  });
});
