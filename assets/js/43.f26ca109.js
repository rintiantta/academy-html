(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{460:function(e,t,i){"use strict";i.r(t);i(78);var n=i(247),r=i.n(n),u={data:function(){return{order:!1,budget:3e3,limit:2,list:[{id:1,name:"사과",price:1e3},{id:2,name:"바나나",price:2e3},{id:3,name:"딸기",price:4e3},{id:4,name:"오렌지",price:3e3},{id:5,name:"메론",price:5e3}]}},computed:{matched:function(){return this.list.filter(function(e){return e.price<=this.budget},this)},sorted:function(){return r()(this.matched,"price",this.order?"desc":"asc")},limited:function(){return this.sorted.slice(0,this.limit)}}},o=i(1),c=Object(o.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.budget,expression:"budget",modifiers:{number:!0}}],attrs:{size:"4"},domProps:{value:e.budget},on:{input:function(t){t.target.composing||(e.budget=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v("원 이하 필터링하기 \n  "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.limit,expression:"limit",modifiers:{number:!0}}],attrs:{size:"4"},domProps:{value:e.limit},on:{input:function(t){t.target.composing||(e.limit=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" 개의 결과 출력하기\n  "),i("button",{on:{click:function(t){e.order=!e.order}}},[e._v("변경하기")]),e._v(" "),i("p",[e._v(e._s(e.matched.length)+"개 중에 "+e._s(e.limited.length)+"개를 출력하고 있습니다.")]),e._v(" "),i("ul",e._l(e.limited,function(t){return i("li",{key:t.id},[e._v("\n      "+e._s(t.name)+" "+e._s(t.price)+"원\n    ")])}),0)])},[],!1,null,"7992e77a",null);t.default=c.exports},78:function(e,t,i){"use strict";var n=i(15),r=i(40)(2);n(n.P+n.F*!i(39)([].filter,!0),"Array",{filter:function(e){return r(this,e,arguments[1])}})}}]);