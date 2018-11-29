// 将一组数据按size分组成多组

// i 累加size来处理
function chunkArrayInGroups(arr, size) {
    var result = [];
    for (var i=0; i<arr.length; i+=size)
      result.push(arr.slice(i, i+size));
    return result;
}

// 可以考虑产出一个generator
function* chunkArrayInGroups(arr, size) {
    for (var i=0; i<arr.length; i+=size)
      yield arr.slice(i, i+size);
}

function chunkArrayInGroups(arr, size) {
  var result = [];
  var j = 0;
  for (var i = 0; i < Math.ceil(arr.length / size); i++) {
    result[i] = arr.slice(j, j + size);
    j = j + size;
  }
  return result;
}


function chunkArrayInGroups(arr, size) {
  var result = [];
  var pos = 0;
  while (pos < size) {
    result.push(arr.slice(pos, pos + size));
    pos += size;
  }
  return result;
}


