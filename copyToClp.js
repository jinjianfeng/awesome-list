// 复制文字到剪切板
function copyToClp(txt){
    txt = document.createTextNode(txt);
    document.body.appendChild(txt);
    if (document.body.createTextRange) {
        var d = document.body.createTextRange();
        d.moveToElementText(txt);
        d.select();
        document.execCommand('copy');
    } else {
        var d = document.createRange();
        d.selectNodeContents(txt);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(d);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
    txt.remove();
}