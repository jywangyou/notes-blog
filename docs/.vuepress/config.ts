/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';// 站点信息
import baidutj from './common/baidutj';//百度统计

const DOMAIN_NAME = 'wangyou.ink' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "忘忧的小站",
      description: 'Kronos 个人博客,使用 VuePress 搭建,专注web前端学习与总结。分享技术，记录生活',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '导航站', link: '/tools/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
              // { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
              { text: 'HTML', link: '/note/html/' },
              { text: 'CSS', link: '/note/css/' },
            ],
          },
          // {
          //   text: '页面',
          //   items: [
          //     { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          //     { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
          //   ],
          // },
          {
            text: '学习笔记',
            items: [
              { text: '《JavaScript》', link: '/note/javascript/' },
              // { text: '《JavaScript高级程序设计》', link: '/note/js/' },
              { text: '《ES6 教程》', link: '/note/es6/' },
              { text: '《Vue》', link: '/note/vue/' },
              {
                text: '《TypeScript 从零实现 axios》',
                link: '/note/typescript-axios/',
              },
              {
                text: '《Git》',
                link: '/note/git/',
              },
              { text: '《MUI》', link: '/note/mui/' },
              {
                text: '小程序笔记',
                link: '/note/wx-miniprogram/',
              },
            ],
          },
        ],
      },
      {
        text: '后端',
        link: '/backend/',
        items: [
          {
            text: 'Nodejs', link: '/note/node/'
            // text: 'Nodejs',
            // items: [
            //   { text: 'Nodejs 笔记', link: '/note/node/' }
            // ],
          },
          {
            text: 'C#',link: '/note/cc/'
            // items: [
            //   { text: '《C#》笔记', link: '/note/cc/' },
            // ],
          },
          {
            text: '数据库',link: '/note/db/'
            // items: [
            //   { text: '《C#》笔记', link: '/note/cc/' },
            // ],
          },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
          { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/baaa02/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },
      { text: '关于', link: '/about/' },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    

    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'jywangyou/notes-blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    bodyBgImg: [
      '/img/bodybg.webp'
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Kronos', // 必需
      link: 'https://github.com/jywangyou', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://cdn.jsdelivr.net/gh/jywangyou/Images@master/img/okhead.5l9l7bclm5o0.png',
      name: 'Kronos',
      slogan: '纵有疾风起，人生不言弃',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      iconfontCssFile: '//at.alicdn.com/t/c/font_4330037_9cegdl3g03m.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:2712334479@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/jywangyou',
        },
        {
          iconClass: 'icon-QQ',
          title: 'QQ',
          link: 'https://qm.qq.com/q/OeKpLeEyWG',
        },
        {
          iconClass: 'icon-douban',
          title: '豆瓣',
          link: 'https://www.douban.com/people/wangyous/',
        },
        {
          iconClass: 'icon-wangyiyun1',
          title: '网易云',
          link: 'https://music.163.com/#/playlist?id=5309180789',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2023, // 博客创建年份
      copyrightInfo:
        'Kronos | <a href="https://beian.miit.gov.cn/" target="_blank" title="备案号">豫ICP备2021038004号-1</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Kronos',
        link: 'https://github.com/jywangyou'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules,
    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2023-11-11', // 博客创建时间
      indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
    // 背景大图
    indexImg: {
      navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
      desc: [
        "Web前端技术博客，积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu", 
        "愿你能成为自己的英雄，不惧离别，不怕孤独 —— 来自 Kronos", 
        "心中有世界，闭目自可观",
        "时间在走，没有回头，只有路口"
      ],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
      descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: false,    // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
    
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no' }],//防止在移动端获取焦点页面变大
    // ['meta', { name: 'baidu-site-verification', content: 'codeva-6ATZk0KU7R' }],//百度统计的站长验证
    ['meta', { name: 'baidu-site-verification', content: 'codeva-3L2X2VBzam' }],//百度统计的站长验证（子链）
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],//解决Chrome 统计访问不准确问题
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],//站点信息相关图标
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],//代码块折叠的箭头图标&时间提示的图标
    ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }],//评论系统twikoo
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,Kronos个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['script', {}, baidutj],//百度统计
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search【即thirdparty-search】）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'fulltext-search',
      // {
      //   thirdparty: [
      //     {
      //       title: '在MDN中搜索',
      //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
      //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
      //     },
      //     {
      //       title: '在Runoob中搜索',
      //       frontUrl: 'https://www.runoob.com/?s=',
      //     },
      //     {
      //       title: '在Vue API中搜索',
      //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
      //     },
      //     {
      //       title: '在Bing中搜索',
      //       frontUrl: 'https://cn.bing.com/search?q=',
      //     },
      //     {
      //       title: '通过百度搜索本站的',
      //       frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
      //     },
      //   ],
      // }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: true, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     // 具体参数请看官网：https://valine.js.org/
    //     choosen: 'valine',
    //     // options 选项中的所有参数，会传给 Valine 的配置
    //     options: {
    //         el: '#valine-vuepress-comment',
    //         appId: 'ZKCYGuL0fTYMnuOpEfSgbfsD-MdYXbMMI',
    //         appKey: '3e0fNpPt5byP05jdWgWushE6',
    //         placeholder: '请留下你的足迹 ~~',
    //         // 有 URL、''、mp、identicon、monsterid、wavatar、retro、robohash、hide 头像选择，具体头像是什么样子，请访问 https://valine.js.org/avatar.html
    //         avatar: 'mp',	// 默认头像
    //         pageSize: 10,   // 评论列表分页，每页条数
    //         visitor: true,    // 文章访问量统计
    //         recordIP: false,   // 是否记录评论者 IP
    //         enableQQ: true,   // 是否启用昵称框自动获取 QQ 昵称和 QQ 头像, 默认关闭
    //     }
    //     // choosen: 'gitalk',
    //     // options: {
    //     //   clientID: 'a6e1355287947096b88b',
    //     //   clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //     //   repo: 'blog-gitalk-comment', // GitHub 仓库
    //     //   owner: 'xugaoyi', // GitHub仓库所有者
    //     //   admin: ['xugaoyi'], // 对仓库有写权限的人
    //     //   // distractionFreeMode: true,
    //     //   pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //     //   id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //     //   title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //     //   labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //     //   body:
    //     //     '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     // },
    //   },
    // ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    [
    	{
        	name: 'custom-plugins',
        	globalUIComponents: ["Twikoo","BlockToggle","GlobalTip","PageInfo","LastReadingPopup"] // 这里分别是评论组件，代码块组件，时间提示组件,站点信息组件,记录阅读位置组件,全局背景图组件("Fantasy")
    	}
    ],
    [
      'reading-progress' //这个是页面阅读进度进度条（顶部插件）
    ],
    // [
    // 	{
    //     	name: 'custom-plugins',
    //     	globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    // 	}
    // ],
    
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
