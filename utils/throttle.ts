export function throttle(callback:Function, wait:number) {
    let timer:number|NodeJS.Timeout,_params:any[];
    
    return function (this: any, ...params: any[]) {
        _params = params;
        if (timer) {
            return;
        }
        callback.apply(this, _params);
        timer = setTimeout(() => {
            callback.apply(this, _params);
            clearTimeout(timer);
        },
        wait)
        
    }
}