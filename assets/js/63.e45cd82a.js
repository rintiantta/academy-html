(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{492:function(n,e,t){"use strict";t.r(e);var i={data:function(){return{list:[{id:1,name:"슬라임",hp:100},{id:2,name:"고블린",hp:200},{id:3,name:"드래곤",hp:500}]}},methods:{doRemove:function(n){this.list.splice(n,1)}}},o=t(1),u=Object(o.a)(i,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",n._l(n.list,function(e,i){return t("li",{key:e.id},[n._v("\n    ID."+n._s(e.id)+" "+n._s(e.name)+" HP."+n._s(e.hp)+"\n    "),n._v(" "),t("button",{on:{click:function(e){return n.doRemove(i)}}},[n._v("몬스터 제거하기")])])}),0)},[],!1,null,null,null);e.default=u.exports}}]);