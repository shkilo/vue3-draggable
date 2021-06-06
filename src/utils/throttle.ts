export const throttle = (callback: Function, limit: number) => {
  let waiting = false;
  return (...args: any[]) => {
    if (waiting) {
      return;
    }
    callback(...args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
    return;
  };
};
