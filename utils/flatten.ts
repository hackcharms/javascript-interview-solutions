export function flatten(arr:any[], depth = 1) {
  const result:any[]=[];
  if(arr.every(el=>!Array.isArray(el))) return arr;
  arr.forEach(el=>{
    if(Array.isArray(el) && depth>0){
      result.push(...flatten(el,depth-1));
    }else{
      result.push(el);
    }
  });
  return result;
}