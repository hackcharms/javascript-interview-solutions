export function reducer<T extends any,R extends any>(this:any,callback:(acc:R,current:T)=>R,initialValue:R,source?:T[]):R{
    source=source||(this as T[]);
    if(!Array.isArray(source)) throw Error('reducer is only available in array');
    let acc= initialValue;
    source.map((current)=>{
       acc=callback.bind(source)(acc,current);
    });
    return acc;
}
