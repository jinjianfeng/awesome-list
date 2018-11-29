// 获取两个数组的不同值

function arrayDiff(a, b) {
    return [
        ...a.filter(x => b.indexOf(x) === -1),
        ...b.filter(x => a.indexOf(x) === -1)
    ];
}

// 复杂arrays:
function arrayDiff(...arrays) {
    return [].concat(...arrays.map( (arr, i) => {
        const others = arrays.slice(0);
        others.splice(i, 1);
        const unique = [...new Set([].concat(...others))];
        return arr.filter(x => unique.indexOf(x) === -1);
    }));
}


function arrayDiff(a, b) {
    var arrays = Array.prototype.slice.call(arguments);
    var diff = [];

    arrays.forEach(function(arr, i) {
        var other = i === 1 ? a : b;
        arr.forEach(function(x) {
            if (other.indexOf(x) === -1) {
                diff.push(x);
            }
        });
    })

    return diff;
}


function arrayDiff() {
    var arrays = Array.prototype.slice.call(arguments);
    var diff = [];

    arrays.forEach(function(arr, i) {
        var others = arrays.slice(0);
        others.splice(i, 1);
        var otherValues = Array.prototype.concat.apply([], others);
        var unique = otherValues.filter(function (x, j) { 
            return otherValues.indexOf(x) === j; 
        });
        diff = diff.concat(arr.filter(x => unique.indexOf(x) === -1));
    });
    return diff;
}
