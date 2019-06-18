const throttleAjax = (function() {
  const t = {};
  return function(name, callback) {
    if (!t[name] || t[name].isFulfilled) {
      const promiseWithState = callback().then(
        r => {
          t[name].isFulfilled = true;
          return r;
        },
        e => {
          t[name].isFulfilled = true;
          return e;
        }
      );
      t[name] = {
        isFulfilled: false,
        promiseWithState
      };
    } else {
      return t[name].promiseWithState;
    }
  };
})();
