(this["webpackJsonpfull-stack-takehome"]=this["webpackJsonpfull-stack-takehome"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i,a=n(1),u=n.n(a),r=n(6),s=n.n(r),c=(n(14),n(15),n(2)),l=n(4);!function(e){e[e.WEI=1]="WEI",e[e.KWEI=1e3]="KWEI",e[e.MWEI=1e6]="MWEI",e[e.GWEI=1e9]="GWEI",e[e.MICROETHER=1e12]="MICROETHER",e[e.MILLIETHER=1e15]="MILLIETHER",e[e.ETHER=1e18]="ETHER"}(i||(i={}));var o=n(7),h=n(8),v=n(3),E=n.n(v);E.a.config({ROUNDING_MODE:E.a.ROUND_DOWN});var d=function(){function e(){Object(o.a)(this,e),this.value=void 0,this.defaultUnit=void 0,this.units=void 0,this.defaultUnit=i.GWEI,this.value=1,this.units={wei:{key:i.WEI,value:"0"},kwei:{key:i.KWEI,value:"0"},mwei:{key:i.MWEI,value:"0"},gwei:{key:i.GWEI,value:"0"},microether:{key:i.MICROETHER,value:"0"},milliether:{key:i.MILLIETHER,value:"0"},ether:{key:i.ETHER,value:"0"}},this.init()}return Object(h.a)(e,[{key:"defaults",get:function(){return this.units}},{key:"getConvertedValue",value:function(e,t,n){return new E.a(e).multipliedBy(new E.a(t)).dividedBy(new E.a(n)).toString(10)}},{key:"getEtherUnits",value:function(e,t,n){return this.units.wei.value=this.getConvertedValue(e,t,i.WEI),this.units.kwei.value=this.getConvertedValue(e,t,i.KWEI),this.units.mwei.value=this.getConvertedValue(e,t,i.MWEI),this.units.gwei.value=this.getConvertedValue(e,t,i.GWEI),this.units.microether.value=this.getConvertedValue(e,t,i.MICROETHER),this.units.milliether.value=this.getConvertedValue(e,t,i.MILLIETHER),this.units.ether.value=this.getConvertedValue(e,t,i.ETHER),this.units}},{key:"wei",get:function(){return this.units.wei}},{key:"kwei",get:function(){return this.units.kwei}},{key:"mwei",get:function(){return this.units.mwei}},{key:"gwei",get:function(){return this.units.gwei}},{key:"microether",get:function(){return this.units.microether}},{key:"milliether",get:function(){return this.units.milliether}},{key:"ether",get:function(){return this.units.ether}},{key:"init",value:function(){return this.getEtherUnits(1,i.GWEI,i.ETHER)}}]),e}(),f=function(){var e=Object(a.useState)(i.GWEI),t=Object(c.a)(e,2),n=t[0],u=t[1],r=new d,s=Object(a.useState)(r.defaults),o=Object(c.a)(s,2),h=o[0],v=o[1];return{conversionData:h,handleEtherConverter:function(e){var t=Number.isInteger(e.target.valueAsNumber)?e.target.valueAsNumber:0;v(Object(l.a)({},r.getEtherUnits(t,n,i.ETHER)))},handleActiveUnit:function(e){u(e)},isActiveUnit:function(e){return e===n}}},j=n(0),b=function(e){var t=e.unitName,n=e.unitDetails,i=e.handleEtherConverter,a=e.handleActiveUnit,u=e.isActiveUnit,r="0"===n.value&&u(n.key)?"":n.value;return Object(j.jsxs)("label",{htmlFor:t,className:"input-wrapper",children:[t,Object(j.jsx)("input",{id:t,type:"number",className:"input-field",placeholder:n.value,onFocus:function(){return a(n.key)},onChange:function(e){i(e)},value:r})]})},m=function(){var e=f(),t=e.conversionData,n=e.handleEtherConverter,i=e.handleActiveUnit,a=e.isActiveUnit;return Object(j.jsx)("main",{className:"main-content",children:Object.entries(t).map((function(e){var t=Object(c.a)(e,2),u=t[0],r=t[1];return Object(j.jsx)(b,{unitName:u,unitDetails:r,isActiveUnit:a,handleActiveUnit:i,handleEtherConverter:n},u)}))})},g=n(9),I=function(e){var t=e.text,n=Object(g.a)(e,["text"]);return Object(j.jsx)("button",Object(l.a)(Object(l.a)({},n),{},{children:t}))},O=u.a.memo((function(e){var t=e.handleConversionsPanel;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(I,{className:"c-button",onClick:function(){return t(!0)},text:"show panel"}),Object(j.jsx)(I,{className:"c-button",onClick:function(){return t(!1)},text:"hide panel"})]})})),k=function(e){var t=u.a.useState(e),n=Object(c.a)(t,2),i=n[0],a=n[1];return{showConversionsPanel:i,handleConversionsPanel:u.a.useCallback((function(e){a(e)}),[])}};var C=function(){var e=k(!1),t=e.showConversionsPanel,n=e.handleConversionsPanel;return Object(j.jsx)("div",{className:"app-body",children:Object(j.jsxs)("div",{className:"panel-wrapper",children:[Object(j.jsx)(O,{handleConversionsPanel:n}),t&&Object(j.jsx)(m,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),u(e),r(e)}))};s.a.render(Object(j.jsx)(u.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.381943a3.chunk.js.map