//以下内容皆是作者整理
//全部来自网络

//浏览器内核
//火狐  Firefox
//O朋   Opera
//IE9   MSIE 9.0
//辣鸡IE就不写了
//判断是否为谷歌内核   返回true 和  false
let ischorme = window.navigator.userAgent.indexOf("Chrome") !== -1
if (ischorme) {
    console.log("您使用的是谷歌浏览器")
} else {
    if (confirm('您的浏览器浏览本页面有兼容问题，是否下载谷歌浏览器')) {
        window.open('https://www.google.cn/chrome/', '_blank');
    } else {

        // var opened = window.open('about:blank', '_self');
        // opened.close();
    }
}