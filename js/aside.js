const str_aside='<aside>\
<div>\
    图文精选\
    <img src="images/1.jpg"/>\
</div>\
<div>\
    图文精选\
    <img src="images/2.png" style="width:100%"/>\
</div>\
</aside>';
document.getElementsByClassName('container')[0].insertAdjacentHTML("beforeend",str_aside);