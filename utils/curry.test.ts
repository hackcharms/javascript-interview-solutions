import { curry } from "./curry";

describe('Curry Util Function', () => {
    const joinNumbers = (a: number, b: number, c: number) => {
        return [a, b, c].join('_');
    }
    test('can be initialized', () => {
        const init =curry(() => { });
        expect(init).toBeTruthy();
    })
    test('can be called as plain function', () => {
        const joinNumberCurried =curry(joinNumbers);
        expect(joinNumberCurried(1,2,3)).toBe('1_2_3');
    })
    test('can be carried for 2 iteration', () => {
        const joinNumberCurried =curry(joinNumbers);
        expect(joinNumberCurried(1,2)(3)).toBe('1_2_3');
        expect(joinNumberCurried(1)(2,3)).toBe('1_2_3');
        expect(joinNumberCurried()(1,2,3)).toBe('1_2_3');
    })
    test('can be passed empty for first call', () => {
        const joinNumberCurried =curry(joinNumbers);
        expect(joinNumberCurried()(1,2,3)).toBe('1_2_3');
    })
    test('can be passed in n call', () => {
        const joinNumberCurried =curry(joinNumbers);
        expect(joinNumberCurried(1)(2)(3)).toBe('1_2_3');
    })
})