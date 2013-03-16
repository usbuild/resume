var data = {
    name: "Qichao Zhang",
    title: "Qichao Zhang's Resume",
    user_info: {
        addr: "Nanjing University, #22 Hankou Road, 210093",
        phone: "(+86) 152-9838-8316",
        url: "http://lecoding.com",
        mail: "njuzhangqichao@gmail.com"
    },
    items: [
        {name: "Technical Skills", contents: [
            {content: "<ul><li><strong>Operating Systems</strong> Ubuntu, ArchLinux, Gentoo, CentOS</li>" +
                "<li><strong>Languages</strong> C, Java, PHP, JavaScript, C++, Python, Bash</li>" +
                "<li><strong>Softwares</strong> Vim, Git, GDB, IntelliJ, Eclipse, Maven</li>" +
                "<li><strong>Frameworks</strong> jQuery, Yii, Backbone, Spring, Spring MVC</li></ul>"
            }
        ]
        },
        {name: "Experience", contents: [
            {   header: "Jiangsu Zhongzheng InfoTech Ltd",
                time: "2012-7-20 ~ 2012-12-20",
                content: ["A entrepreneurial team, working on a platform website to serve NJU students, using PHP and Yii Framework. My job here mainly includes",
                    "designing the authentication for OAuth2.0 and supplying APIs for the open platform, besides some front-end development (using jQuery and Bootstrap).",
                    "Here, I learned a lot about team cooperation and font-end to backend interaction"
                ].join("")
            }
        ]},
        {name: "Projects", contents: [
            {
                header: "<a href=\"https://github.com/usbuild/uws\"><strong>UWS,</strong> A lightweight http web server</a>",
                time: "2012 ~ 2013",
                content: ["Independent Project, developing with C language, aiming to build a high performace http server, it has similar configuration file with <a href=\"http://nginx.org/\">nginx</a>.",
                    "Implemented functions：custom error pages, 304 status , deflate and gzip compression, http basic authentication, url rewrite, simple reverse proxy and <a href=\"www.fastcgi.com/\">FastCGI</a> support.<br>",
                    "Performance：under Ubuntu in a VMware instance having 512M memory, it can handle 7wqps of apache ab test at single process mode<br/>",
                    "To solve the memory leak problem, I wrote a memory pool named <a href=\"https://github.com/usbuild/usmem\">usmem</a>,",
                    " referring the design of <a href=\"http://loki-lib.sourceforge.net/\">Loki</a>.<br/>",
                    "<a href='http://demo.lecoding.com' target='_blank'>==>View Demo Site</a>"
                ].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/distmem\"><strong>DistMem,</strong> a NoSQL database</a>",
                time: "2012 ~ 2013",
                content: ["Independent Project, developing with C++. It provides simple APIs, like set,get and del.",
                    "It has 4 data types: int, float, string and list, and string is binary safe. ",
                    "The data file implementation take the design of the FAT12 file system and it uses B-Tree as index structure, also I add LRU cache for better performance. <br>",
                    "The protocol of communicating refers the Redis specification, so it's cross-platformed, and I wrote a client console using Python.<br/>",
                    "Besides, I developed a PHP extension named <a href=\"https://github.com/usbuild/php_distmem\">php_distmem</a>(written in C) to supply access to distmem."].join("")
            },
            {
                header: "<strong>NJU Wenji</strong>, A web site for literature lovers",
                time: "2012",
                content: ["Cooperative project, based on Yii Framework. It's a project I written with seniors, providing a site for NJU literature lovers. <br/>",
                    "My job mainly includes：<ol><li>Integrating with SNS and share with others using OAuth2.0</li>",
                    "<li>Comment, includes post comments and their display</li>",
                    "<li>A <a href=\"http://daringfireball.net/projects/markdown/\">Markdown</a>-like language interpreter, translating specific article format to HTML</li>",
                    "<li>A jQuery plugin of building a dropdown list in a textarea</li>",
                    "<li>Other trivial jobs like supplying RESTful APIs and building front-end interaction</li></ol>"].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/uplex\"><strong>UPLEX,</strong> Python Lex interpreter</a>",
                time: "2012",
                content: ["Independent project, A lex implementation using Python language, according to 《Compilers》. Regular expression engine is its core function, ",
                    "using the procedure NFA->DFA->mDFA, we can get a minimized DFA, it can deal with simple regexp. This program can read a *.l file and generate a runnable py file. "].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/Lily-PHP-SDK\"><strong>Lily-PHP-SDK,</strong> NJU Lily BBS API Wrapper</a>",
                time: "2011~2012",
                content: ["Independent project, develop with PHP. Lily BBS is too old to supply standard API, so I using curl to craw the site and resolve useable APIs. Here are some sub-projects:<br>",
                    "<ol><li><a href=\"https://github.com/usbuild/Lily-ME\">Lily-ME</a>: A mobile site of Lily BBS using jQuery Mobile and Lily-PHP-SDK</li>",
                    "<li><a href=\"https://github.com/usbuild/LilyClient\">Lily-Mobile</a>: This is an android app for Lily BBS, enhanced the bbs and using proxy to save network cost.</li></ol>"].join("")
            },
            {
                header: "<string>Other projects</string>",
                time: "2011~2013",
                content: ["<ol><li><a href=\"https://github.com/usbuild/WebWork\">Light blog</a>，A blog app based on Yii Framework and jQuery</li>",
                    "<li>Remote whiteboard, based on Java and Swing, I am in charge of software architecture, audio transmission and message queue.</li>",
                    "<li>Some Python websites on Google App Engine, like blog, disk and notepad. <a href=\"http://tools.lecoding.com\">view online</a></li>",
                    "<li>NJU-Courses-Select chrome plugin, using for grabbing hot courses.</li></ol>"].join("")
            }

        ]},
        {
            name: "Education",
            contents: [
                {content: "GPA: 4.1"},
                {content: "CET4 / CET6: 617 / 546"},
                {content: "Renming 3rd class scholarship"}
            ]
        },
        {
            name: "Links",
            contents: [
                {content: "BLOG:  <a href=\"http://lecoding.com\">http://lecoding.com</a>"},
                {content: "GitHub:   <a href=\"https://github.com/usbuild\">https://github.com/usbuild</a>"},
                {content: "Twitter:   <a href=\"https://twitter.com/Usbuild\">@Usbuild</a>"}
            ]
        }
    ]
};