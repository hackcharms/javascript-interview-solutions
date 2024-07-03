export interface NodeInterface {
  value: any;
  next?: Node;
}
export class Node implements NodeInterface {
  constructor(public value: any, public next?: any) {}
}
export default class LinkList {
  public head: Node | undefined;
  constructor(value?: any) {
    if (value) {
      this.head = new Node(value);
    }
  }
  *iterate() {
    let currentNode = this.head;
    if (!currentNode) yield this.head?.value;
    yield currentNode?.value;
    while (currentNode?.next) {
      currentNode = currentNode?.next;
      yield currentNode?.value;
    }
  }
  lastNode() {
    let currentNode = this.head;
    if (!currentNode) return currentNode;
    while (currentNode?.next) {
      currentNode = currentNode?.next;
    }
    return currentNode;
  }
  print() {
    console.log("Printing List\n ======================\n");
    let currentNode = this.head;
    if (!currentNode) return;
    console.log(currentNode.value);
    while (currentNode?.next) {
      currentNode = currentNode?.next;
      console.log(currentNode?.value);
    }
    return currentNode;
  }
  nthNode(index: number) {
    let tempNode = this.head;
    while (index) {
      tempNode = tempNode?.next;
      index--;
    }
    if (!tempNode) {
      console.error(`invalid index ${index} to find node`);
    }
    return tempNode;
  }
  length() {
    if (!this.head) return 0;
    let length = 1;
    let current = this.head;
    while (current.next) {
      current = current.next;
      length++;
    }
    return length;
  }
  append(value: any, listIndex = -1) {
    let index = listIndex;
    const node = new Node(value);
    // let previousNode: Node | undefined;
    let previousNode = this.head;
    if (index === 0) {
      node.next = this.head;
      return (this.head = node);
    }
    if (index === -1) {
      previousNode = this.lastNode();
      // handling no head found
      if (!previousNode) {
        console.warn(
          `Head not found, creating new head, ignoring index ${listIndex}`
        );
        return (this.head = node);
      }
      previousNode.next = node;
      return this.head;
    }

    while (index > 1) {
      previousNode = previousNode?.next;
      index--;
    }
    if (!previousNode) {
      return console.log(
        `Index overflow index ${listIndex} is not a valid index`
      );
    }
    const tempNode = previousNode?.next;
    previousNode.next = node;
    node.next = tempNode;
    return this.head;
  }
  delete(index: number, count: number = 1) {
    if (!count) return console.error("count should be minimum 1");
    if (!this.head) return console.error("list is already empty");
    let previousNode = this.head;
    let lastNode = this.head;
    while (index > 1) {
      previousNode = previousNode.next;
      index--;
      if (!previousNode) {
        return console.error("Index overflow");
      }
    }
    while (count) {
      lastNode = lastNode.next;
      count--;
    }
    if (index === 0) {
      return (this.head = lastNode);
    }
    const tempNext = previousNode.next;
    previousNode.next = tempNext.next;
    return this.head;
  }
  createCircleFromLast(index: number) {
    const lastNode = this.lastNode();
    if (!lastNode) return console.log("no head found");
    const circlePoint = this.nthNode(index);
    if (!circlePoint)
      return console.error("invalid index, node not found", index);
    lastNode.next = circlePoint;
  }
  hasCircle(breakCircle = false) {
    let ptr1 = this.head;
    let index = 0;
    let ptr2 = this.head;
    while (ptr1?.next && ptr2?.next) {
      ptr1 = ptr1.next;
      index++;
      ptr2 = ptr2.next.next;
      if (ptr1 === ptr2) {
        if (breakCircle && ptr1) {
          ptr1.next = undefined;
        }
        console.log(`Linked list has a circle at pointer`, ptr1?.next);
        return true;
      }
    }
    console.log(`Linked list does not has any circle `);
    return false;
  }
}
