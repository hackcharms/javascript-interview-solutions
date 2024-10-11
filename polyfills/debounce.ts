export default function debounce(
  func: Function,
  wait: number,
) {
  let timeout: number | NodeJS.Timeout | null;
  const debounced = function (this:any,...args:any[]) {
    const context = this as unknown;
    if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
  }

  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = null;
  };

  return debounced;
}
