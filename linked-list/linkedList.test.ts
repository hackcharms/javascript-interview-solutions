import LinkList from "./linkedList";

describe("Linked List", () => {
  test("Link list initialized", () => {
    const ll = new LinkList();
    expect(ll).toBeInstanceOf(LinkList);
  });
  test("Appending data", () => {
    const ll = new LinkList();
    ll.append(20);
    expect(ll.length()).toBe(1);
    ll.append(30);
    expect(ll.length()).toBe(2);
    expect(ll.lastNode()?.value).toBe(30);
  });
  test("Append at Nth position", () => {
    const ll = new LinkList();
    ll.append(20);
    ll.append(50);
    ll.append(30, 1);
    ll.append(40, 2);
    expect(ll.nthNode(0)?.value).toBe(20);
    expect(ll.nthNode(2)?.value).toBe(40);
    expect(ll.nthNode(1)?.value).toBe(30);
  });
  test("Nth Node", () => {
    const ll = new LinkList();
    ll.append(20);
    ll.append(30);
    expect(ll.nthNode(0)?.value).toBe(20);
    expect(ll.nthNode(1)?.value).toBe(30);
  });
  test("Delete Last Node", () => {
    const ll = new LinkList();
    ll.append(20);
    ll.append(30);
    expect(ll.length()).toBe(2);
    ll.delete(ll.length() - 1);
    expect(ll.length()).toBe(1);
  });
  test("Check Circle", () => {
    const ll = new LinkList();
    ll.append(20);
    ll.append(30);
    expect(ll.length()).toBe(2);
    ll.createCircleFromLast(1);
    expect(ll.hasCircle()).toBeTruthy();
    ll.hasCircle(true);
    expect(ll.hasCircle()).toBeFalsy();
  });
});
