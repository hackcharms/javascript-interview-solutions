import {reducer} from './reduce';
describe("Testing Reduces Polyfill",()=>{
    test('checking for number addition',()=>{
        const arr=[1,2,3,4,5];
        function reducerFunc(acc:any,el:any){
            return acc+el;
        }
        const result=reducer(reducerFunc,0,arr);
        expect(result).toBe(arr.reduce(reducerFunc,0));
    })
    test('checking for Object and Number',()=>{
        const arr=[
            {category:'dairy',count:2},
            {category:'vegetable',count:4},
            {category:'vegetable',count:4},
            {category:'vegetable',count:4},
            {category:'cookies',count:5},

        ];
        function reducerFunc(acc:number,el:{category:string,count:number}){
                if(el.category==='vegetable'){
                    return acc+=el.count;
                }else return 0;
        }
        const result=reducer(reducerFunc,0,arr);
        
        expect(result).toBe(arr.reduce(reducerFunc,0));
    })
    test('checking for Prototype Binding',()=>{
        const arr=[
            {category:'dairy',count:2},
            {category:'vegetable',count:4},
            {category:'vegetable',count:4},
            {category:'vegetable',count:4},
            {category:'cookies',count:5},

        ];
        function reducerFunc(acc:any,el:any){
                if(el.category==='vegetable'){
                    return acc+=el.count;
                }else return 0;
        }
        const result=reducer.bind(arr)(reducerFunc,0);
        
        expect(result).toBe(arr.reduce(reducerFunc,0));
    })
})