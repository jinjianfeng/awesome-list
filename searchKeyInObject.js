function searchKeyInObject(path, obj) {
  const ps = path.split(".");
  return ps.reduce((xs, x) => ((xs && xs[x] !== undefined) ? xs[x] : null), obj);
}