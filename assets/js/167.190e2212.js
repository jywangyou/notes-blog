(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{556:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("引用 mui 的页面，在触发选项卡切换或者返回的时候，mui 会报错：")]),t._v(" "),s("blockquote",[s("p",[t._v("[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jywangyou/Images@master/article/image.6zm0klp56hc0.webp",alt:"mui选项卡切换报错"}})]),t._v(" "),s("p",[t._v("虽然这个报错不影响项目的运行，但看着控制台红红的报错难受很，")]),t._v(" "),s("p",[t._v("经过查询发现报错的原因是 新版谷歌浏览器的问题：")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("当浏览器对默认的事件进行响应的时候，要检查一下是否进行了默认事件的取消。这样就在响应滑动操作之前有点耽误时间。")])]),t._v(" "),s("p",[t._v("要想修复这个报错，只需在公共样式或者引用 mui 文件的页面中添加如下代码即可：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("touch-action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);