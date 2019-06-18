/**
 * 字符串替换函数
 * @param str 替换源字符串
 * @param keys 按顺序变量
 *
 * strReplacer('今天{{0}},明天{{1}}', '星期一', '星期二')
 * 输出: 今天<b>星期一</b>,明天<b>星期二</b>
 *
 */
function strReplacer(str, ...keys) {
  if (typeof str !== "string") return "";
  return str.replace(
    /\{\{(\d)\}\}/g,
    (m, index) => "<b>" + keys[index] + "</b>"
  );
}
