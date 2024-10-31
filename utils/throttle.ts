export function throttle(callback: Function, wait: number) {
  let timer: number | NodeJS.Timeout,
    _params: any[],
    hasNewParams: boolean = false;

  return function (this: any, ...params: any[]) {
    _params = params;
    if (timer) {
      return (hasNewParams = true);
    }
    callback.apply(this, _params);
    timer = setTimeout(() => {
      if (hasNewParams) {
        callback.apply(this, _params);
      }
      clearTimeout(timer);
    }, wait);
  };
}
