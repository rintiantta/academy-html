(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{453:function(n,t,e){"use strict";e.r(t);var c={components:{compChild:{render:function(n){return n("button",{on:{click:this.handleClick}},"イベント発火")},methods:{handleClick:function(){this.$emit("childs-event")}}}},methods:{parentsMethod:function(){alert("イベントをキャッチ！ ")}}},i=e(1),o=Object(i.a)(c,function(){var n=this.$createElement;return(this._self._c||n)("comp-child",{on:{"childs-event":this.parentsMethod}})},[],!1,null,null,null);t.default=o.exports}}]);