// 深拷贝
function deepCopy(o) {
   var out, v, key;
   out = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       out[key] = (typeof v === "object" && v !== null) ? deepCopy(v) : v;
   }
   return out;
}