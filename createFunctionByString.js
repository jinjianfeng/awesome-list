// 通过字符串来创建函数

// parseFunction方法，对new Function做一次封装，对参数和方法体进行分离
// **using Function is a great solution but we can go a bit further and prepare universal parser that parse string and convert it to real JavaScript function...**
if (typeof String.prototype.parseFunction != 'function') {
    String.prototype.parseFunction = function () {
        var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
        var match = funcReg.exec(this.replace(/\n/g, ' '));

        if(match) {
            return new Function(match[1].split(','), match[2]);
        }

        return null;
    };
}

// Using RegExp with Function class (需要自己定义parseFunction方法)

var func = "function (a, b) { return a + b; }".parseFunction();

// Using Function class with "return" !!!!最推荐的还是new Function 方式

var func = new Function("return " + "function (a, b) { return a + b; }")();


// Using official Function constructor

var func = new Function("a", "b", "return a + b;");

// Using Eval

eval("var func = function (a, b) { return a + b; };");


// This technique may be ultimately equivalent to the eval method, but I wanted to add it, as it might be useful for some.

var newCode = document.createElement("script");
newCode.text = "function newFun( a, b ) { return a + b; }";
document.body.appendChild( newCode );

function newFun( a, b ) { return a + b; }







