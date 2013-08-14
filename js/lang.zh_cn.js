var data = {
    name: "张启超",
    title: "张启超的简历",
    user_info: {
        addr: "南京大学软件学院，2010级，本科",
        phone: "(+86) 152-9838-8316",
        url: "http://lecoding.com",
        mail: "njuzhangqichao@gmail.com"
    },
    items: [
        {name: "技能", contents: [
            {content: "<ul><li><strong>系统</strong> Ubuntu, ArchLinux, Gentoo, CentOS</li>" +
                "<li><strong>编程语言</strong> C, Java, PHP, JavaScript, C++, Python, Bash</li>" +
                "<li><strong>工具</strong> Vim, Git, GDB, IntelliJ, Eclipse, Maven</li>" +
                "<li><strong>框架</strong> jQuery, Yii Framework, Backbone, Spring, Spring MVC</li></ul>"
            }
        ]
        },
        {name: "经验", contents: [
            { header: "微软上海 SDET", 
              time: "2013-7 至今",
              content: [
              "在微软商业平台下的 CTP 部门工作，这个部门的任务主要是为 Windows Azure 和其他的一些微软服务提供支付功能。我的主要任务是编写测试用例，添加一些小的功能等。",
              "实习期间，在导师的指导下我写了一个在 Windows Azure 上运行的网站。这其实是一个开放平台，给开发者提供了众多的 API。整个网站相当于一个在网页上运行的操作系统，在这个系统上通过已有的 SDK 构建应用十分简单。"
                ].join("")
            },
            {   header: "江苏中正信息科技有限公司",
                time: "2012-7 ~ 2012-12",
                content: ["这是一个创业团队，主要使用 Yii 框架开发 PHP 程序。本人的工作主要是设计开放平台 OAuth2.0 认证和平台 API 。",
                    "除此还进行一些前端的开发工作(主要基于 jQuery 和 Bootstrap )。在开发过程中加深了对前后端协作和团队开发的认识。"].join("")
            } 
        ]},
        {name: "项目", contents: [
            {
                header: "<a href=\"https://github.com/usbuild/uws\">UWS: 网络服务器</a>",
                time: "2012 ~ 2013",
                content: ["个人项目，使用C语言开发。旨在设计一个高性能的Web服务器，功能类似于 Nginx，截至目前版本已达到 0.0.10。",
                    "功能包括：虚拟主机，自定义错误页，304 状态，gzip 和 deflate 压缩，http basic 认证，url 重写，简单的反向代理，FastCGI 支持。<br>",
                    "性能：在虚拟机512M的内存情况下，ab 测试 1000 并发单进程处理量超过 7kqps<br>",
                    "为了解决服务器内存泄漏问题，本人编写了一个内存管理程序 <a href=\"https://github.com/usbuild/usmem\">usmem</a>，借鉴了 Loki 的实现，使内存分配效率得到提高。<br>",
                    "目前测试站点已上线，<a href='http://demo.lecoding.com' target='_blank'>访问Demo站</a>。"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/distmem\">DistMem: NoSQL 数据库</a>",
                time: "2012 ~ 2013",
                content: ["个人项目，使用C++开发。提供了简单的 API ，支持 set, get 和 del，数据类型支持 string，float，list，int，其中 string 是二进制安全的。",
                    "数据存储参照了 fat12 文件格式，索引使用了 B 树，为了提高访问性能采用了 LRU 作为缓存算法。<br>",
                    "数据交换协议参照了 Redis，并使用 Python 编写了客户端控制台。<br>",
                    "另外本人还使用 C 语言开发了<a href=\"https://github.com/usbuild/php_distmem\">php_distmem</a> 作为 PHP 语言访问该数据库的扩展。"].join("")
            },
            {
                header: "南大文集",
                time: "2012",
                content: ["合作项目，基于 Yii 框架。这是与学长合作的一个项目，旨在为南京大学文学爱好者提供一个单纯的文学交流平台。<br/>",
                    "本人在其中主要有：<ol><li>社交平台的整合，包括分享至各大社交网络，OAuth 认证等。</li>",
                    "<li>评论功能，包括评论的展示和发表。</li>",
                    "<li>类 Markdown 的格式转换器，用于将遵循特定格式的文章转为标准的 HTML。</li>",
                    "<li>在 textarea 中显示下拉框的 jQuery 插件</li>",
                    "<li>其它一些前端和后端琐碎工作，为别人提供 RESTful 接口，修改页面 CSS 等。</li></ol>"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/uplex\">UPLEX: Python 的 Lex 解析器</a>",
                time: "2012",
                content: ["个人项目，使用 Python 语言开发的 LEX 程序。依据《编译原理》中的知识设计的 Lex，核心是正则表达式引擎。",
                    "可对简单的正则使用 NFA->DFA->mDFA 过程处理得到最小化 DFA ，再依据 *.l 文件生成规则解析文件。"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/Lily-PHP-SDK\">Lily-PHP-SDK: 南京大学小百合论坛 SDK</a>",
                time: "2011~2012",
                content: ["个人项目，使用 PHP 开发。由于小百合未提供 API，所以主要工作是解析页面 DOM，最终提供合乎规范的调用接口。相关子项目如下:<br>",
                    "<ol><li><a href=\"https://github.com/usbuild/Lily-ME\">Lily-ME</a>: 这是一个基于 jQuery Mobile 的小百合移动网页版，使用了上面提供的 SDK。</li>",
                    "<li><a href=\"https://github.com/usbuild/LilyClient\">Lily-Mobile</a>: 这是一个 Android 版本的小百合客户端，使用了上面提供的 SDK 并添加的部分功能，如“@”、”位置标记”、“涂鸦”等功能。</li></ol>"].join("")
            },
            {
                header: "其它项目",
                time: "2011~2013",
                content: ["<ol><li>轻博客，基于 Yii 和 jQuery 的博客系统</li>",
                    "<li>网络白板，基于 Java 和 Swing 的网络白板，本人主要负责整体结构的假设、语音传输和消息队列功能。</li>",
                    "<li>基于 Google App Engine 和 Python 的一些实用程序，如记事本，匿名网盘等。<a href=\"http://tools.lecoding.com\" target='_blank'>访问网站</a></li>",
                    "<li>教务网自动选课插件。这是一个 Chrome 插件，用于南京大学教务网抢课，实战效果明显。</li></ol>"].join("")
            }

        ]},
        {
            name: "在校成绩",
            contents: [
                {content: "GPA: 4.1"},
                {content: "四 / 六级: 617 / 546"}
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
