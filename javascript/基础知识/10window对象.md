### 浏览器定位和导航

window.location属性引用Location对象，表示当前窗口文档的URL

1. href 完整的url
2. protocal 协议, 如 "http:"
3. host/hostname 主机，host带端口  hostname不带端口
4. port 端口
5. pathname 路径， 根路径则是 "/" 
6. hash 锚点， 如 "#a"
7. search url查询字符串, 如 “?debug=true”

获取url中查询字符串

 ```
 function urlArgs() {
    var args = {};
    var query = window.location.search.substring(1);
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);  // 解码
        args[name]=value;
    }
    return args;
}
// http://search.jd.com/Search?keyword=macbook&enc=utf-8&wq=macbook&pvid=5v3g5ati.1wnwqo

var queries = urlArgs();
// {keyword: "macbook", enc: "utf-8", wq: "macbook", pvid: "5v3g5ati.1wnwqo"}
 ```
 
 