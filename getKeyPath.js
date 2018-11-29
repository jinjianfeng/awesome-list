// 通过key path获取object的值方法
function getPath(p, o){
   return p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
}