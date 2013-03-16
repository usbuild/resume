var data = {
    name: "张启超",
    title:"张启超的简历",
    user_info: {
        addr: "南京大学, 汉口路22号, 210093",
        phone: "(+86) 152-9838-8316",
        url: "http://lecoding.com",
        mail: "njuzhangqichao@gmail.com"
    },
    items: [
        {name: "技能", contents: [
            {content: "<ul><li><strong>系统</strong> Ubuntu, ArchLinux, CentOS</li>" +
                "<li><strong>编程语言</strong> C, Java, PHP, JavaScript, C++, Python, Shell</li>" +
                "<li><strong>工具</strong> Vim, Git, IntelliJ, Eclipse</li>" +
                "<li><strong>框架</strong> jQuery, Yii, Backbone, Spring</li></ul>"
            }
        ]
        },
        {name: "经验", contents: [
            {   header: "江苏中正信息科技有限公司",
                time: "2012-7-20 ~ 2012-12-20",
                content: "这是一个创业团队，主要使用 YII 框架开发 PHP 程序。我在这的工作主要做开放平台 OAuth2.0 认证和平台 API 接口的设计工作。除此还进行一些前端的开发工作(基于 jQuery 和 Bootstrap )。"
            }
        ]},
        {name: "项目", contents: [
            {
                header: "<a href=\"https://github.com/usbuild/uws\">UWS: 网络服务器</a>",
                time: "2012 ~ 2013",
                content: ["个人项目。使用C语言开发。旨在设计一个高性能的Web服务器，功能类似于 Nginx，截至目前版本已开发到 0.0.10。",
                    "其中一个子项目使用了自己开发的动态内存管理程序 <a href=\"https://github.com/usbuild/usmem\">usmem</a>，类似于 Loki，彻底解决了服务器的内存泄漏问题。<br>",
                    "功能包括：304 页面支持，Http Basic 认证，Url 重写，简单的反向代理，FastCGI 支持。<br>",
                    "性能：在虚拟机512M的内存情况下，ab 测试 1000 并发单进程处理量超过 7kqps<br>",
                    "<a href='http://demo.lecoding.com' target='_blank'>==>访问Demo站</a>"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/distmem\">DistMem: NoSQL 数据库</a>",
                time: "2012 ~ 2013",
                content: ["个人项目。使用C++开发。类似于Redis，提供弱化的API接口，仅支持set,get和del，数据类型支持String，Float，List，Int，其中String是Binary Safe的。",
                    "数据存储参照了Fat12文件格式，索引使用了B树，为了提高访问性能采用了LRU作为缓存机制。<br>",
                    "另外我还开发了<a href=\"https://github.com/usbuild/php_distmem\">php_distmem</a> 作为PHP访问该数据库的C语言扩展。"].join("")
            },
            {
                header: "南大文集",
                time: "2012",
                content: ["合作项目。基于YII框架。这是与学长合作的一个项目，旨在为南京大学文学爱好者提供一个单纯的交流平台。<br/>",
                    "我在其中主要负责：<ol><li>社交平台的整合，包括分享至各大社交网络，OAuth认证等。</li>",
                    "<li>评论功能，包括评论的展示和发表。</li>",
                    "<li>类Markdown的格式转换器，用于将特定的文章格式转为标准的HTML。</li>",
                    "<li>@提示列表功能，目前已做成jQuery插件。</li>",
                    "<li>其它一些前端和后端琐碎工作，为别人提供RESTful接口，修改页面CSS显示等。</li></ol>"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/uplex\">UPLEX: Python Lex 解析器</a>",
                time: "2012",
                content: "个人项目。使用Python语言开发的LEX程序。依据编译原理中的知识设计的Python版本的Lex，核心是正则表达式引擎。利用NFA->DFA->mDFA得到处理后的正则，可应对简单的正则表达式。该程序可读取*.l文件生成规则解析文件。"
            },
            {
                header: "<a href=\"https://github.com/usbuild/Lily-PHP-SDK\">Lily-PHP-SDK: 南京大学小百合论坛SDK</a>",
                time: "2011~2012",
                content: ["个人项目。使用PHP开发，为了封装南京大学小百合论坛的 API 而编写的程序。由于小百合未提供API，所以我的主要工作是解析页面DOM，考虑到效率问题，我主要采用了正则匹配，最终提供合乎规范的调用接口。相关子项目如下:<br>",
                    "<ol><li><a href=\"https://github.com/usbuild/Lily-ME\">Lily-ME</a>: 这是一个基于jQuery Mobile的小百合移动网页版，使用了上面提供的SDK。</li>",
                    "<li><a href=\"https://github.com/usbuild/LilyClient\">Lily-Mobile</a>: 这是一个Android版本的小百合客户端，使用了上面提供的SDK并添加的部分功能如“@”、”位置标记”等功能。</li></ol>"].join("")
            },
            {
                header: "其它项目",
                time: "2011~2013",
                content: ["<ol><li>轻博客，基于YII和jQuery的博客系统</li>",
                    "<li>网络白板，基于Java和Swing的远程白板程序，主要负责整体架构、语音传输和IPC功能。</li>",
                    "<li>基于Google App Engine和Python的一些实用程序，如记事本，匿名网盘等。<a href=\"http://tools.lecoding.com\">访问网站</a></li>",
                    "<li>教务网自动选课插件。这是一个Chrome插件，用于南京大学教务网抢课，使用HTML5开发，实际使用效果显著。</li></ol>"].join("")
            }

        ]},
        {
            name: "在校成绩",
            contents: [
                {content: "GPA: 4.1"},
                {content: "四级: 617"},
                {content: "六级: 546"}
            ]
        },
        {
            name: "相关链接",
            contents: [
                {content: "个人博客:  <a href=\"http://lecoding.com\">http://lecoding.com</a>"},
                {content: "GitHub:   <a href=\"https://github.com/usbuild\">https://github.com/usbuild</a>"},
                {content: "Twitter:   <a href=\"https://twitter.com/Usbuild\">@Usbuild</a>"}
            ]
        }
    ]
};