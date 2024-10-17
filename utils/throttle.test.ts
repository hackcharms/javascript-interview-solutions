import { throttle } from "./throttle";

describe('Throttle ', () => {
    test('can be initialized', () => {
        const increment = throttle(() => { }, 50);
        expect(increment).toBeTruthy();
    });

    test('executes the first reject others', (done) => {
        let i = 0;
        const increment = throttle(() => {
            i++;
        }, 10);

        expect(i).toBe(0);
        increment();
        expect(i).toBe(1);
        increment();

        setTimeout(() => {
            expect(i).toBe(2);
            done();
        }, 20);
    });
});

  describe('uses arguments', () => {
    test('called once', (done) => {
      let i = 21;
      const increment = throttle((a: number, b: number) => {
        i += a * b;
      }, 10);

      expect(i).toBe(21);
      increment(3, 7);
      expect(i).toBe(42);

      setTimeout(() => {
        expect(i).toBe(63);
        done();
      }, 20);
    });

    test('uses arguments of latest invocation', (done) => {
      let i = 21;
      const increment = throttle((a: number, b: number) => {
        i += a * b;
      }, 10);

      expect(i).toBe(21);
      increment(3, 7);
      increment(4, 5);
      expect(i).toBe(42);

      setTimeout(() => {
        expect(i).toBe(62);
        done();
      }, 20);
    });
  });

  test('execute once even after calling it multiple times', (done) => {
    let i = 0;
    const increment = throttle(() => {
      i++;
    }, 20);

    expect(i).toBe(0);
    increment();
    increment();
    increment();
    increment();
    expect(i).toBe(1);

    // Should not fire yet.
    setTimeout(() => {
      expect(i).toBe(1);
    }, 10);

    setTimeout(() => {
      expect(i).toBe(2);
      done();
    }, 30);
  });


  test('callbacks can access `this`', (done) => {
    const increment = throttle(function (this: any, delta: number) {
      this.val += delta;
    }, 10);

    const obj = {
      val: 2,
      increment,
    };

    expect(obj.val).toBe(2);
    obj.increment(3);
    expect(obj.val).toBe(5);
    obj.increment(3);

    setTimeout(() => {
      expect(obj.val).toBe(8);
      done();
    }, 20);
  });
// })