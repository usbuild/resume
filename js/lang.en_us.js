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
            {content: "<ul><li><strong>Operating Systems</strong> Ubuntu, ArchLinux, CentOS</li>" +
                "<li><strong>Languages</strong> C, Java, PHP, JavaScript, C++, Python, Shell</li>" +
                "<li><strong>Softwares</strong> Vim, Git, IntelliJ, Eclipse</li>" +
                "<li><strong>Frameworks</strong> jQuery, Yii, Backbone, Spring</li></ul>"
            }
        ]
        },
        {name: "Experience", contents: [
            {   header: "Jiangsu Zhongzheng InfoTech Ltd",
                time: "2012-7-20 ~ 2012-12-20",
                content: ["A Entrepreneurial team, work on a platform website to serve NJU students, using PHP and Yii Framework. My job here mainly includes",
                    "designing the authentication for OAuth 2.0 and supplying APIs for the open platform, besides some front-end development (using jQuery and Bootstrap)."].join()
            }
        ]},
        {name: "Projects", contents: [
            {
                header: "<a href=\"https://github.com/usbuild/uws\"><strong>UWS,</strong> A lightweight http web server</a>",
                time: "2012 ~ 2013",
                content: ["Independent Project, developing with C language, aiming to build a high performace http server, it has similar configuration file with <a href=\"http://nginx.org/\">nginx</a>.",
                    "implement functions：304 page support , Http basic authentication, url rewrite, simple reverse proxy and <a href=\"www.fastcgi.com/\">FastCGI</a> support.<br>",
                    "performance：under Ubuntu in a VMware instance having 512M memory, it can handle 7wqps of apache ab test<br/>",
                    "by the way, I wrote a memory pool named <a href=\"https://github.com/usbuild/usmem\">usmem</a>,",
                    " just like <a href=\"http://loki-lib.sourceforge.net/\">Loki</a>, it solved the memory leak problem."].join("")
            },
            {
                header: "<a href=\"https://github.com/usbuild/distmem\"><strong>DistMem,</strong> a NoSQL database</a>",
                time: "2012 ~ 2013",
                content: ["Independent Project, developing with C++. like <a href=\"http://redis.io/\">Redis</a>, but supplys less API, only support set,get and del.",
                    "It has 4 data types: int, float, string and list, and string is binary safe",
                    "The data file implementation borrowed the FAT12 file system and it uses B-Tree as index structure, and I add LRU cache for better performance<br>",
                    "Besides, I developed a PHP extension named <a href=\"https://github.com/usbuild/php_distmem\">php_distmem</a>(written in C) to supply access to distmem。"].join("")
            },
            {
                header: "<strong>NJU Wenji</strong>, A web site for literature lovers",
                time: "2012",
                content: ["Cooperative project, based on Yii Framework. It's a project I written with seniors, providing a site for NJU literature lovers<br/>",
                    "My job mainly includes：<ol><li>Integrating with SNS and share with others using OAuth2.0</li>",
                    "<li>Comment, includes post comments and comments display</li>",
                    "<li>A <a href=\"http://daringfireball.net/projects/markdown/\">Markdown</a>-like language interpreter, translating specific article format to html</li>",
                    "<li>A jQuery Plugin of building a dropdown list in a textarea</li>",
                    "<li>Other trivial jobs like providing RESTful APIs and building front-end interaction</li></ol>"].join("")
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
                content: ["Independent project, develop with PHP. Lily BBS is too old to supply standard API, so I using curl to craw the site and resolve useable APIS. Here are some sub-projects:<br>",
                    "<ol><li><a href=\"https://github.com/usbuild/Lily-ME\">Lily-ME</a>: A mobile site of Lily BBS using jQuery Mobile and Lily-PHP-SDK</li>",
                    "<li><a href=\"https://github.com/usbuild/LilyClient\">Lily-Mobile</a>: This is and android app for Lily BBS, enhanced the bbs and using proxy to save network cost.</li></ol>"].join("")
            },
            {
                header: "<string>Other projects</string>",
                time: "2011~2013",
                content: ["<ol><li><a href=\"https://github.com/usbuild/WebWork\">Light blog</a>，A blog app based on Yii Framework and jQuery</li>",
                    "<li>Remote whiteboard, based on Java and Swing, I am in charge of software architecture, audio transmission and IPC</li>",
                    "<li>Some Python websites on Google App Engine, like blog, disk and notepad. <a href=\"http://tools.lecoding.com\">view online</a></li>",
                    "<li>NJU course select chrome plugin, using for grabbing hot courses.</li></ol>"].join("")
            }

        ]},
        {
            name: "Education",
            contents: [
                {content: "GPA: 4.1"},
                {content: "CET4: 617"},
                {content: "CET6: 546"}
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