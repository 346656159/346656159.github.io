const str_aside='<aside>\
<div>\
    <img src="/images/tencent.png"/>\
</div>\
<div class="hot">\
    <h4>热门文章</h4>\
    <ul>\
        <li><a href="/article/CentOS6、CentOS7、debian安装SS.html">CentOS6、CentOS7、debian安装SS</a></li>\
        <li><a href="/article/centos7安装SSR.html">centos7安装SSR</a></li>\
        <li><a href="/article/centos7开启BBR.html">centos7开启BBR</a></li>\
    </ul>\
</div>\
<div class="tag">\
    <h4>标签云</h4>\
        <a href="">python</a>\
        <a href="">linux</a>\
        <a href="">字典</a>\
        <a href="">TLS</a>\
        <a href="">linux</a>\
        <a href="">字典</a>\
        <a href="">TLS</a>\
        <a href="">python</a>\
        <a href="">linux</a>\
        <a href="">python</a>\
        <a href="">linux</a>\
        <a href="">字典</a>\
        <a href="">TLS</a>\
</div>\
</aside>';
document.getElementsByClassName('container')[0].insertAdjacentHTML("beforeend",str_aside);