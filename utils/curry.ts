export function curry(this:any,fn:Function) {
  const result:Function = (...params:any[])=>{
    if(fn.length<=params.length){
      return fn.apply(this,params);  
    }
    return result.bind(this,...params)
  }
  return result;
}
