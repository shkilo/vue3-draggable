const throttle = (callback, wait) => {
  let waiting = false;
  return e => {
    if (waiting) {
      return;
    }
    callback(e);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, wait);
    return;
  };
};

export default throttle;
