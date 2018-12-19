// 获取url链接中参数
function getQueryString(name, url = window.location) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = url.search.substr(1).match(reg)
    if (r != null) {
        return decodeURIComponent(r[2])
    }
    return ''
}