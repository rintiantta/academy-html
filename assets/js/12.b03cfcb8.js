(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(t,e,n){"use strict";var r=n(72);n(15)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},110:function(t,e,n){},118:function(t,e,n){"use strict";var r=n(15),i=n(40)(1);r(r.P+r.F*!n(39)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},127:function(t,e,n){var r=n(15),i=n(14),o=n(12);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},128:function(t,e,n){var r=n(5),i=n(19),o=n(16)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},195:function(t,e,n){var r=n(5),i=n(196).onFreeze;n(127)("freeze",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},196:function(t,e,n){var r=n(21)("meta"),i=n(5),o=n(37),u=n(18).f,c=0,s=Object.isExtensible||function(){return!0},a=!n(12)(function(){return s(Object.preventExtensions({}))}),l=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return a&&f.NEED&&s(t)&&!o(t,r)&&l(t),t}}},197:function(t,e,n){"use strict";var r=n(128),i=n(35),o=n(198),u=n(91),c=n(17),s=n(92),a=n(72),l=n(12),f=Math.min,p=[].push,v=!l(function(){RegExp(4294967295,"y")});n(93)("split",2,function(t,e,n,l){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,u,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,l+"g");(o=a.call(h,i))&&!((u=h.lastIndex)>f&&(s.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(s,o.slice(1)),c=o[0].length,f=u,s.length>=v));)h.lastIndex===o.index&&h.lastIndex++;return f===i.length?!c&&h.test("")||s.push(""):s.push(i.slice(f)),s.length>v?s.slice(0,v):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):h.call(String(i),n,r)},function(t,e){var r=l(h,t,this,e,h!==n);if(r.done)return r.value;var a=i(t),p=String(this),g=o(a,RegExp),x=a.unicode,d=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(v?"y":"g"),m=new g(v?a:"^(?:"+a.source+")",d),y=void 0===e?4294967295:e>>>0;if(0===y)return[];if(0===p.length)return null===s(m,p)?[p]:[];for(var b=0,E=0,w=[];E<p.length;){m.lastIndex=v?E:0;var j,R=s(m,v?p:p.slice(E));if(null===R||(j=f(c(m.lastIndex+(v?0:E)),p.length))===b)E=u(p,E,x);else{if(w.push(p.slice(b,E)),w.length===y)return w;for(var O=1;O<=R.length-1;O++)if(w.push(R[O]),w.length===y)return w;E=b=j}}return w.push(p.slice(b)),w}]})},198:function(t,e,n){var r=n(35),i=n(25),o=n(16)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||null==(n=r(u)[o])?e:i(n)}},199:function(t,e,n){"use strict";var r=n(110);n.n(r).a},262:function(t,e,n){"use strict";n.r(e);n(195),n(197),n(118);var r={props:{autoplay:Boolean},data:function(){return{timer:null,index:0,original:["機能ごとに解説している Vue.js 入門書です。これからはじめる方にも、すでに Vue.js をお使いの方にも、楽しんでいただける内容になっています。","Vue.js は直感的に使える機能が多く、雰囲気で使ってしまいがちです。どんなメリット＆デメリットがあるかも解説しているため、しっかりと学習できます。","Vue.js는 직관적으로 사용할 수 있는 내용이 많습니다. 그래서 어떻게든 작동이 되니 자세한 이해 없이 코드를 작성하는 경우가 많습니다. 많이들 실수하는 코드를 살펴보며 어떠한 장점과 단점이 있는지 분석하는 내용도 담고 있습니다."],messages:[],text:""}},computed:{editor:{get:function(){return this.text.map(function(t){return t.text}).join("")},set:function(t){this.text=this.convText(t)}}},watch:{autoplay:function(t){clearTimeout(this.timer),t&&this.ticker()}},methods:{ticker:function(){var t=this;this.timer=setTimeout(function(){t.autoplay&&(t.index=t.index<t.messages.length-1?t.index+1:0,t.text=t.messages[t.index],t.ticker())},5e3)},convText:function(t){var e={},n=t.split("").map(function(t){return e[t]=e[t]?++e[t]:1,{id:"".concat(t,"_").concat(e[t]),text:t}});return Object.freeze(n)}},created:function(){var t=this;this.messages=this.original.map(function(e){return t.convText(e)}),this.text=this.messages[0],this.ticker()}},i=(n(199),n(1)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextAnime1"},[n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.editor,expression:"editor",modifiers:{lazy:!0}}],staticStyle:{width:"80%",height:"40px"},domProps:{value:t.editor},on:{change:function(e){t.editor=e.target.value}}}),t._v(" "),n("transition-group",{staticClass:"title",attrs:{tag:"div"}},t._l(t.text,function(e){return n("span",{key:e.id,staticClass:"item",domProps:{textContent:t._s(e.text)}})}),0)],1)},[],!1,null,"cd2ce602",null);e.default=o.exports},72:function(t,e,n){"use strict";var r,i,o=n(94),u=RegExp.prototype.exec,c=String.prototype.replace,s=u,a=(r=/a/,i=/b*/g,u.call(r,"a"),u.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(a||l)&&(s=function(t){var e,n,r,i,s=this;return l&&(n=new RegExp("^"+s.source+"$(?!\\s)",o.call(s))),a&&(e=s.lastIndex),r=u.call(s,t),a&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),l&&r&&r.length>1&&c.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=s},91:function(t,e,n){"use strict";var r=n(98)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},92:function(t,e,n){"use strict";var r=n(99),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},93:function(t,e,n){"use strict";n(100);var r=n(41),i=n(13),o=n(12),u=n(36),c=n(16),s=n(72),a=c("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),v=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),h=v?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[a]=function(){return n}),n[p](""),!e}):void 0;if(!v||!h||"replace"===t&&!l||"split"===t&&!f){var g=/./[p],x=n(u,p,""[t],function(t,e,n,r,i){return e.exec===s?v&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),d=x[0],m=x[1];r(String.prototype,t,d),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},94:function(t,e,n){"use strict";var r=n(35);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},98:function(t,e,n){var r=n(38),i=n(36);t.exports=function(t){return function(e,n){var o,u,c=String(i(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(o=c.charCodeAt(s))<55296||o>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):o:t?c.slice(s,s+2):u-56320+(o-55296<<10)+65536}}},99:function(t,e,n){var r=n(19),i=n(16)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}}}]);