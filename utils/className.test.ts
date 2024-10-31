import { className } from "./className"

describe('class name Utility', () => {
    test('initialization', () => {
        expect(className).toBeTruthy();
    })
    test('Accept array with object , null and undefined', () => {
        const tempClass = [null, undefined, 'cls-1', 1, '2']
        expect(className(tempClass)).toBe('cls-1 1 2');
    })
    test('Accept multiple arguments', () => {
        expect(className(null, undefined, 'cls-1', 1, '2')).toBe('cls-1 1 2');
    })
    test('Accept multiple arguments', () => {
        expect(className(null, undefined, 'cls-1', 1, '2')).toBe('cls-1 1 2');
    })
    test('Accept multiple type arguments', () => {
        expect(className('foo', ['bar'], { baz: true })).toBe('foo bar baz');
    })
    test('Random type of arguments', () => {
        expect(className('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe('foo bar baz quux');
    })
 })
