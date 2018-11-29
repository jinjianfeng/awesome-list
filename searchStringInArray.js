// 在数组中搜索字符串
function searchStringInArray (str, strArray) {
      for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].match(str)) return i;
      }
      return -1;
}