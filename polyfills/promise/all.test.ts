import { all } from "./all"

describe('Promise.All Polyfill',()=>{
    test('intiated',()=>{
        expect(all).toBeTruthy();
    });
    test('All resolved',()=>{
        expect(all([Promise.resolve('res 1'),Promise.resolve('res 2')])).resolves.toStrictEqual(['res 1','res 2']);
    })
    test('reject on any error encountered',()=>{
         expect(all([Promise.resolve('res 1'),Promise.reject(new Error('rejected 2'))])).rejects.toThrow();
    })
    test('maintain the order',()=>{
        const p1= new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('resolved 1'),1000)
        });
        const p2= new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('resolved 2'),100)
        });
        const p3= Promise.resolve('resolved 3');

         expect(all([p1,p2,p3])).resolves.toStrictEqual(['resolved 1','resolved 2','resolved 3']);
    })
})