// 判断是否在iframe下，只要判断window.self是否是window.top
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}