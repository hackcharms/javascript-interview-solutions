import { flatten } from "./flatten"

describe('Flatten Suite', () => {
  test('initialized',()=> {
    const flatFunc = flatten;
    expect(flatFunc).toBeTruthy();
  })
  test('Flatten with default Depth value',()=> {
    const result = flatten([1,2,3,[4,[5]]]);
    const result2 = flatten([1,2,3,[4,[5]]],1);
    expect(result).toStrictEqual(result2);
  })
  test('Flatten with 2 Depth value',()=> {
    const result = flatten([1,[2,[3]]],2);
    expect(result).toStrictEqual([1,2,3]);
  })
  test('Flatten with 2 Depth value for 4 nested array',()=> {
    const result = flatten([1,[2,[3,[4,[5]]]]],2);
    expect(result).toStrictEqual([1,2,3,[4,[5]]]);
  })
  test('Flatten with 4 Depth',()=> {
    const result = flatten([1,[[2,[3,[4,[5]]]]]],4);
    expect(result).toStrictEqual([1,2,3,4,[5]]);
  })
  test('Flatten Plain Array with 4 Depth',()=> {
    const result = flatten([1,2,3,4],4);
    expect(result).toStrictEqual([1,2,3,4]);
  })
})