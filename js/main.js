var template = document.getElementById("template").innerHTML;
var xhr = new XMLHttpRequest();

var switchChinese = function () {
    document.getElementsByClassName("tip")[0].innerHTML = '本简历提供在线 <a href="javascript:switchEnglish();">English</a> 版本， ' +
        '或者下载PDF (<a href="张启超的简历.pdf">中文</a>, <a href="QichaoZhang_resume.pdf">英文</a>)';
    document.getElementsByClassName("fork")[0].innerHTML = '<a href="https://github.com/usbuild/resume">在Github上查看源码</a>';
    xhr.open("GET", "js/lang.zh_cn.js", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            eval(xhr.responseText);
            document.title = data['title'];
            document.getElementById("main").innerHTML = Mustache.render(template, data);
        }
    }

};

var switchEnglish = function () {
    document.getElementsByClassName("tip")[0].innerHTML = 'This page is also avaliable in <a href="javascript:switchChinese();">中文</a> , ' +
        'or download it as a PDF (<a href="张启超的简历.pdf">Chinese</a>, <a href="QichaoZhang_resume.pdf#">English</a>)';
    document.getElementsByClassName("fork")[0].innerHTML = '<a href="https://github.com/usbuild/resume">Fork me on Github</a>';
    xhr.open("GET", "js/lang.en_us.js", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            eval(xhr.responseText);
            document.title = data['title'];
            document.getElementById("main").innerHTML = Mustache.render(template, data);
        }
    }

};
switchChinese();
