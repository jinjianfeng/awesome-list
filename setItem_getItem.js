function setItem(key, val) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(key, val);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function getItem(key) {
  return window.localStorage.getItem(key);
}
