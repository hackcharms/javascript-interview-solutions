export default class Stack {
  public $stack: any[] = [];
  constructor(stack: [] = []) {
    this.$stack.concat(stack);
  }
  pop() {
    if (!this.$stack.length) return console.warn("Stack is already empty.");
    const result = this.$stack[this.$stack.length - 1];
    this.$stack = this.$stack.slice(0, this.$stack.length - 1);
    return result;
  }
  push(element: any) {
    return this.$stack.push(element);
  }
  print(
    joiner: string = "  ==> ",
    mapper?: (element: (typeof this.$stack)[number]) => string
  ) {
    console.log(`====== printing stack ======`);
    if (mapper) {
      const printableData = this.$stack.map(mapper);
      return console.log(printableData.join(joiner));
    }
    console.log(this.$stack.join(joiner));
    console.log(`====== end stack ======`);
  }
}

export class StackImproved {
  private $stack: Record<number, any> = {};
  private pointer = -1;
  push(element: any) {
    this.$stack[this.pointer + 1] = element;
    this.pointer++;
  }
  pop() {
    if (this.isEmpty) return console.warn("Stack is empty");
    delete this.$stack[this.pointer];
    this.pointer--;
  }
  print() {
    console.log(`====== printing stack ======`);
    console.log(this.$stack);
    console.log(`====== printing done ======`);
  }
  get size() {
    return this.pointer + 1;
  }
  get isEmpty() {
    return !this.size;
  }
}
