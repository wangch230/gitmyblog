webpackJsonp([1],{100:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},40:function(n,t){},42:function(n,t,e){e(91);var r=e(8)(e(49),e(100),"data-v-647e008b",null);n.exports=r.exports},43:function(n,t,e){e(89);var r=e(8)(e(50),e(98),"data-v-35c047fd",null);n.exports=r.exports},44:function(n,t,e){e(87);var r=e(8)(e(47),e(96),"data-v-22ce9519",null);n.exports=r.exports},45:function(n,t,e){e(90);var r=e(8)(e(48),e(99),"data-v-53c8d54c",null);n.exports=r.exports},47:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),a=e.n(i),s=e(24),c=e.n(s),u=e(43),l=e.n(u),d=e(42),h=e.n(d),m=e(95),p=e.n(m),f=e(40);e.n(f);t.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a,ThankEditor:p.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* Source code at https://github.com/sitexa/anires\n* 大家好，我是luckyqiang。\n* 我来copy写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,64,64);\n}\n#content{\n  height:70vh;\n  margin:0;\n}\n#foot{\n  height:29vh;\n  margin:0;\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 70vh;\n  background: rgb(20,20,20);\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(130,150,0); }\n.token.property{ color: rgb(190,140,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(40,160,150); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 30;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 70vh;\n  border: 1px solid;\n  background: rgb(200,200,200); color: #222;\n  overflow: auto;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}\n/* 开始写简历 */\n",'\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n','/* 写封感谢信。\n * 感谢大家对我的关注。\n */\n.thankEditor{\n  position: fixed; left: 0; bottom: 0;\n  padding: .5em;  margin: .5em; margin-top:.2em;\n  font-size: .8em;\n  width: 99vw; height: 28vh;\n  border: 1px solid #ccc;\n  background: rgb(10,10,10);\n  color: rgb(0,200,0);\n  overflow: auto;\n}\n\n.thankEditor ul,.thankEditor ol{\n  list-style: none;\n}\n.thankEditor ul> li::before{\n  content: \'☞\'; color: red;\n  margin-right: .5em;\n}\n.thankEditor ol {\n  counter-reset: section;\n}\n.thankEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, "☞") " ";\n  margin-right: .5em;\n}\n'],currentMarkdown:"",currentThankMarkdown:"",fullMarkdown:"张志强\n====\n\n坐标：广东珠海。\n\n编程小白。\n\n技能\n====\n\n数据库技能\n----\n  - 熟悉关系型数据库oracle\n  - 熟悉非关系型数据库mongodb\n\n后端开发\n----\n  - 博客系统（基于Django+bootstrap）\n  - 公众号开发\n  - 小程序开发\n\n前端开发\n----\n  - Web前端开发,html5+css3+javascript\n\n技术及语言\n----\n  - Python: django, flask, pandas, numpy, matplotlib\n  - DB: Oracle, SQLServer,  MySQL, MongoDB\n  - WebServer: uwsgi, nginx\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: git, Xmind, spss\n\n工作经历\n----\n\n某世界五百强上市公司\n\n教育经历\n----\n\n 西南交通大学 数学与应用数学\n\n链接\n----\n\n* [源码GitHub](https://github.com/sitexa)\n* [GitHub](https://github.com/luckyqiang123)\n* [技术博客](http://luckyqiang.cn)(点此返回我的博客)\n\n勾引方式\n----\n\n* 微信：qqq13823838438 \n* 邮箱：1595541621@qq.com\n\n",thanksMarkdown:"鸣谢\n----\n\n* 本人是个理科男，专注于理科但不限于理科，擅长Ai、Fw、Fl、Br、Ae、Pr、Id、Ps等软件的安装与卸载，精通CSS、JavaScript、PHP、ASP、C、C＋＋、C#、Java、Ruby、Perl、Lisp、python、Objective-C、ActionScript、Pascal、spss、sas等单词的拼写，熟悉Windows、Linux、Mac、Android、iOS、WM10等系统的开关机，熟悉Word文档的打开与关闭、精通代码的复制与粘贴。\n* 无意间看到一个很牛的简历，就是这份简历的模板，简历的原主老哥还开源到GitHub,所以怀着对大牛的敬仰，默默的点了一颗星和clong了下来，做了日常工作--代码的搬运工。在此对这位前辈置于崇高的敬意和感谢！\n  "}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:return n.next=12,this.progressivelyShowThanks();case 12:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=c()(a.a.mark(function t(){var r,s,c,u,l,d=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),c=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})},progressivelyShowThanks:function(){var n=this;return new o.a(function(t,e){var r=n.thanksMarkdown.length,o=n.interval;!function e(){if(n.currentThankMarkdown.length<r){n.currentThankMarkdown=n.thanksMarkdown.substring(0,n.currentThankMarkdown.length+1);n.currentThankMarkdown[n.currentThankMarkdown.length-1];"\n"===n.currentThankMarkdown[n.currentThankMarkdown.length-2]&&n.$refs.thankEditor&&n.$nextTick(function(){return n.$refs.thankEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},48:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),a=e.n(i),s=e(24),c=e.n(s),u=e(43),l=e.n(u),d=e(42),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* Source code at https://github.com/sitexa/anires\n* 大家好，我是luckyqiang。\n* 我来copy写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n\n\n","\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n",'\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"张志强\n====\n坐标：广东珠海。\n\n编程小白。\n\n技能\n====\n\n数据库技能\n----\n  - 熟悉关系型数据库oracle\n  - 熟悉非关系型数据库mongodb\n\n后端开发\n----\n  - 博客系统（基于Django+bootstrap）\n  - 公众号开发\n  - 小程序开发\n\n前端开发\n----\n  - Web前端开发,html5+css3+javascript\n\n技术及语言\n----\n  - Python: django, flask, pandas, numpy, matplotlib\n  - DB: Oracle, SQLServer,  MySQL, MongoDB\n  - WebServer: uwsgi, nginx\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: git, Xmind, spss\n\n工作经历\n----\n\n某世界五百强上市公司\n\n教育经历\n----\n\n 西南交通大学 数学与应用数学\n\n链接\n----\n\n* [源码GitHub](https://github.com/sitexa)\n* [GitHub](https://github.com/luckyqiang123)\n* [技术博客](http://luckyqiang.cn)(点此返回我的博客)\n\n勾引方式\n----\n\n* 微信：qqq13823838438 \n* 邮箱：1595541621@qq.com\n\n鸣谢\n----\n\n* 本人是个理科男，专注于理科但不限于理科，擅长Ai、Fw、Fl、Br、Ae、Pr、Id、Ps等软件的安装与卸载，精通CSS、JavaScript、PHP、ASP、C、C＋＋、C#、Java、Ruby、Perl、Lisp、python、Objective-C、ActionScript、Pascal、spss、sas等单词的拼写，熟悉Windows、Linux、Mac、Android、iOS、WM10等系统的开关机，熟悉Word文档的打开与关闭、精通代码的复制与粘贴。\n* 无意间看到一个很牛的简历，就是这份简历的模板，简历的原主老哥还开源到GitHub,所以怀着对大牛的敬仰，默默的点了一颗星和clong了下来，做了日常工作--代码的搬运工。在此对这位前辈置于崇高的敬意和感谢！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=c()(a.a.mark(function t(){var r,s,c,u,l,d=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),c=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},49:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(41),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},50:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(92),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},51:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(41),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ThankEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},52:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(46),o=e(44),i=e.n(o),a=e(45),s=e.n(a),c=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(c>500?i.a:s.a)}})},87:function(n,t){},88:function(n,t){},89:function(n,t){},90:function(n,t){},91:function(n,t){},95:function(n,t,e){e(88);var r=e(8)(e(51),e(97),"data-v-29ad1df6",null);n.exports=r.exports},96:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1),n._v(" "),e("div",{attrs:{id:"foot"}},[e("ThankEditor",{ref:"thankEditor",attrs:{markdown:n.currentThankMarkdown,enableHtml:n.enableHtml}})],1)])},staticRenderFns:[]}},97:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"thankEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},98:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},99:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[52]);
//# sourceMappingURL=app.130e10e9eb91d2189dd7.js.map