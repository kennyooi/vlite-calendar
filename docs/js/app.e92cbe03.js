(function(e){function t(t){for(var n,s,c=t[0],o=t[1],l=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;i.push(["b993","chunk-vendors"]),a()})({1582:function(e,t,a){"use strict";var n=a("5a89"),r=a.n(n);r.a},"4adc":function(e,t,a){"use strict";var n=a("ac68"),r=a.n(n);r.a},"4d09":function(e,t,a){"use strict";var n=a("7080"),r=a.n(n);r.a},"5a89":function(e,t,a){},6635:function(e,t,a){"use strict";var n=a("80fb"),r=a.n(n);r.a},"6df2":function(e,t,a){"use strict";var n=a("c6d1"),r=a.n(n);r.a},7080:function(e,t,a){},7711:function(e,t,a){"use strict";var n=a("8701"),r=a.n(n);r.a},"7ff6":function(e,t,a){"use strict";var n=a("f0c3"),r=a.n(n);r.a},"80fb":function(e,t,a){},8701:function(e,t,a){},9224:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},ac68:function(e,t,a){},b1b7:function(e,t,a){},b993:function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=a("2315"),i=a.n(r),s=(a("2c43"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[e._m(0),a("div",{staticClass:"ver"},[e._v("v "+e._s(e.appVer))])]),a("div",{staticClass:"body"},[a("div",{staticClass:"body-wrap"},[a("nav",{staticClass:"sidebar"},[a("ul",{staticClass:"sidebar-wrap",attrs:{id:"ScrollSpy"}},[e._m(1),e._l(e.navs,(function(t){return a("li",{key:t.id},[a("a",{class:{__active:t.id===e.currSpy},attrs:{href:t.link}},[e._v(" "+e._s(t.name)+" ")])])}))],2)]),a("div",{staticClass:"content"},[a("div",{staticClass:"content-wrap"},[a("DemoCalendar",{attrs:{id:"demo"}}),a("DemoCalendarBare",{attrs:{id:"bare"}}),a("DemoCalendarDisabled",{attrs:{id:"disable"}}),a("DemoDatePicker",{attrs:{id:"datepicker"}}),a("DemoCalendarInject",{attrs:{id:"slots"}}),a("DemoCalendarAdvance",{attrs:{id:"advance"}})],1)])])])])}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("h1",[e._v("VLite Calendar Demo")]),a("h2",[e._v("Flexible and lightweight Vue calendar component.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("label",[e._v("DEMO")])])}],o=a("9224"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[a("h2",[e._v("Built-In Styles")]),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("Calendar",{attrs:{date:e.date},on:{"select-day":e.onSelectDay}})],1),a("div",{staticClass:"section-desc"},[e._m(0),a("p",[e._v("However, you can use the built-in styles directly if you want to.")]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"js"},[e._v(e._s(e.js))])])])])])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default, the component "),a("b",[e._v("DOES NOT")]),e._v(" come with any styles dependency or inline styling, it's intentionally so that you can easily style your own theme to suit your website.")])}],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className},[e._t("prepend"),a("header",{class:e.className+"-header"},[a("nav",{class:e.className+"-row"},[a("div",{class:e.className+"-caption",on:{click:function(t){return t.preventDefault(),e.onViewClick(t)}}},[e._v(" "+e._s(e.currentView.caption)+" ")]),a("a",{class:e.className+"-prev",on:{click:function(t){return t.preventDefault(),e.onDateChange(-1)}}},[e._v(" < ")]),a("a",{class:e.className+"-next",on:{click:function(t){return t.preventDefault(),e.onDateChange(1)}}},[e._v(" > ")])])]),a("div",{key:e.viewType,class:e.className+"-body"},e._l(e.currentView.items,(function(t,n){return a("div",{key:n,class:e.className+"-row"},e._l(t,(function(t){var n;return a("div",{key:t.key,class:[t.classes,(n={},n[e.className+"--out"]=t.isOut,n[e.className+"--today"]=t.isToday,n[e.className+"--current"]=t.isCurrent,n[e.className+"--invalid"]=t.isInvalid,n)],on:{click:function(a){!t.isStatic&&e.onSelect(t)}}},[a("span",[e._v(e._s(t.display))])])})),0)})),0),e._t("append")],2)},p=[],v=a("eb03"),f=a("40d2"),h=a("feb8"),m=a("69eb"),y=a("2fc8"),b=a("e703"),w=a("9274"),_=a("f628"),D=a("8cac"),g=a("f7f1"),O=a("4e31"),C=a("1ba4"),j=a("5888"),k=a("e232"),S=a("d6e9"),P=a("1aab"),x=a("7622"),E=a("cdb6"),M=a("909c"),$=a("7677"),N=a("1212"),T=a("74b5");function I(e){return z(e)||B(e)||A(e)||V()}function V(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(e){if("string"===typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?L(e,t):void 0}}function B(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function z(e){if(Array.isArray(e))return L(e)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var H={name:"Calendar",props:{date:{type:Date,default:function(){return new Date}},className:{type:String,default:"vl-calendar"},weekStart:{type:Number,default:0},views:{type:Array,default:function(){return["days","months","years"]}},processDate:{type:Function,default:function(e){return e}}},data:function(){return{viewDate:new Date(this.date.getTime()),viewType:this.views[0]}},computed:{currentView:function(){return"years"===this.viewType?{items:this.years,caption:[this.dformat(Object(v["a"])(this.viewDate),"yyyy"),this.dformat(Object(f["a"])(this.viewDate),"yyyy")].join("-"),monthsInc:120}:"months"===this.viewType?{items:this.months,caption:this.dformat(this.viewDate,"yyyy"),monthsInc:12}:{items:[this.weeks].concat(this.days),caption:this.dformat(this.viewDate,"MMMM yyyy"),monthsInc:1}},weeks:function(){var e=this;return Object(h["a"])({start:Object(m["a"])(this.viewDate,{weekStartsOn:this.weekStart}),end:Object(y["a"])(this.viewDate,{weekStartsOn:this.weekStart})}).map((function(t){return{key:Object(b["a"])(t),display:e.dformat(t,"iiiiii"),classes:"".concat(e.className,"-week"),isStatic:!0}}))},days:function(){for(var e=this,t=Object(w["a"])({start:Object(_["a"])(this.viewDate),end:Object(D["a"])(this.viewDate)},{weekStartsOn:this.weekStart}),a=t.length;a<6;a+=1)t.push(Object(g["a"])(t[a-1],7));return t.map((function(t){return Object(h["a"])({start:Object(m["a"])(t,{weekStartsOn:e.weekStart}),end:Object(y["a"])(t,{weekStartsOn:e.weekStart})}).map((function(t){return e.processDate({day:t,key:Object(b["a"])(t),type:"day",viewDay:e.viewDate,display:e.dformat(t,"d"),classes:"".concat(e.className,"-day"),isToday:Object(O["a"])(t),isCurrent:Object(C["a"])(t,e.date),isOut:!Object(j["a"])(t,e.viewDate)})}))}))},months:function(){var e=this,t=Object(k["a"])({start:Object(S["a"])(this.viewDate),end:Object(P["a"])(this.viewDate)});return t.reduce((function(t,a,n){var r=Math.floor(n/4);return t[r]||(t[r]=[]),t[r].push(e.processDate({day:a,key:Object(b["a"])(a),type:"month",viewDay:e.viewDate,display:e.dformat(a,"MMM"),classes:"".concat(e.className,"-month"),isCurrent:Object(j["a"])(a,e.date)})),t}),[])},years:function(){var e=this,t=Object(v["a"])(this.viewDate),a=Object(f["a"])(this.viewDate),n=Object(x["a"])({start:Object(E["a"])(t,-1),end:Object(E["a"])(a,1)});return n.reduce((function(n,r,i){var s=Math.floor(i/4);return n[s]||(n[s]=[]),n[s].push(e.processDate({day:r,key:Object(b["a"])(r),type:"year",viewDay:e.viewDate,display:e.dformat(r,"yyyy"),classes:"".concat(e.className,"-year"),isCurrent:Object(M["a"])(r,e.date),isOut:Object($["a"])(r,t)||Object(N["a"])(r,a)})),n}),[])}},methods:{dformat:function(e,t){var a={};return"yyyy"===t?a={year:"numeric"}:"MMMM yyyy"===t?a={year:"numeric",month:"long"}:"MMM"===t?a={month:"short"}:"iiiiii"===t?a={weekday:"short"}:"d"===t&&(a={day:"numeric"}),e.toLocaleString(void 0,a)},changeView:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=I(this.views);t.sort();var a=t.indexOf(this.viewType),n=t[a+(1*e?1:-1)];n&&(this.viewType=n,this.$emit("change-view",this.viewType))},onViewClick:function(){this.changeView(!0)},onDateChange:function(e){this.viewDate=Object(T["a"])(this.viewDate,e*this.currentView.monthsInc)},onSelect:function(e){this.$emit("select-".concat(this.viewType.slice(0,-1)),{date:e,day:e.day}),this.viewDate=e.day,this.changeView()}}},G=H,R=a("2877"),Y=Object(R["a"])(G,u,p,!1,null,null,null),F=Y.exports,J={name:"DemoCalendar",components:{Calendar:F},props:{id:{type:String,default:""}},data:function(){return{date:new Date}},computed:{js:function(){return"\nimport 'vlite-calendar/dist/vlite-calendar-style.min.css';\n      ".trim()}},methods:{onSelectDay:function(e){var t=e.day;this.date=t}}},q=J,U=Object(R["a"])(q,l,d,!1,null,null,null),W=U.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[e._m(0),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("Calendar",{attrs:{"class-name":"vl-bare",date:e.date},on:{"select-day":e.onSelectDay}})],1),a("div",{staticClass:"section-desc"},[a("p",[e._v("In most case, you might want to have your own theme of styling, below are the basic styling setup for you to start with.")]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"css"},[e._v(e._s(e.css))])])]),e._m(1)])])])},Q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("Bare Component "),a("small",[e._v("(with minimal styling)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Read the "),a("a",{attrs:{href:"#"}},[e._v("Styles Guide")]),e._v(" for more information.")])}],X={name:"DemoCalendarBare",components:{Calendar:F},props:{id:{type:String,default:""}},data:function(){return{date:new Date}},computed:{css:function(){return"\n.vl-calendar {\n  width: 100%;\n  text-align: center;\n}\n.vl-calendar-row {\n  display: flex;\n}\n.vl-calendar-row > * {\n  flex: 1;\n}\n      ".trim()}},methods:{onSelectDay:function(e){var t=e.day;this.date=t}}},Z=X,ee=(a("6635"),Object(R["a"])(Z,K,Q,!1,null,"5e5b4782",null)),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[e._m(0),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("Calendar",{attrs:{date:e.date,"process-date":e.onProcessDate},on:{"select-day":e.onSelectDay}})],1),a("div",{staticClass:"section-desc"},[a("p",[e._v("In term of flexibility, the component doesn't come with built-in disabled dates checking, such as min, max or group of disabled dates.")]),e._m(1),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.html))])])]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"js"},[e._v(e._s(e.js))])])]),e._m(2)])])])},ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("Disable Dates "),a("small",[e._v("(Min / Max / Group)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Yet, it will let you to handle them through "),a("code",[e._v("processDate")]),e._v(" prop so that you will have better control of it.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Read the "),a("a",{attrs:{href:"#"}},[e._v("Documentation")]),e._v(" for more information of "),a("code",[e._v("date")]),e._v(" object.")])}];function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){se(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ce={name:"DemoCalendarDisabled",components:{Calendar:F},props:{id:{type:String,default:""}},data:function(){return{date:new Date}},computed:{js:function(){return"\nonProcessDate(date) {\n  // example of min & max implementation\n  const today = new Date();\n  const min = new Date(today);\n  const max = new Date(today);\n  max.setDate(max.getDate() + 7);\n\n  // isBefore is date-fns method\n  if (isBefore(date.day, min)) {\n    date.isInvalid = true;\n  }\n  // isAfter is date-fns method\n  else if (isAfter(date.day, max)) {\n    date.isInvalid = true;\n  }\n  // or other disabled dates checking\n  // ...\n\n  // remember to return the final date object\n  return date;\n},\n      ".trim()},html:function(){return'\n<Calendar\n  ...\n  :process-date="onProcessDate"\n/>\n      '.trim()}},methods:{onSelectDay:function(e){var t=e.day;this.date=t},onProcessDate:function(e){var t=new Date,a=new Date(t),n=new Date(t);n.setDate(n.getDate()+7);var r=ie({},e);return(Object($["a"])(r.day,a)||Object(N["a"])(r.day,n))&&(r.isInvalid=!0),r}}},oe=ce,le=Object(R["a"])(oe,ae,ne,!1,null,null,null),de=le.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[e._m(0),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("div",{staticClass:"form-group"},[a("DatePickerInput",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("div",{staticClass:"form-group"},[a("DatePickerToggle",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)]),e._m(1)])])},pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("DatePicker "),a("small",[e._v("(build your own)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-desc"},[a("p",[e._v("Again, to keep the component lightweight, flexible and customizable, it "),a("b",[e._v("DOES NOT")]),e._v(" include any "),a("code",[e._v("<input>")]),e._v(" tag or events for datepicker input.")]),a("p",[e._v("However, you can easily build your own datepicker component with desired styling and behavior.")]),a("p",[e._v("Refer to repository's folder "),a("a",{attrs:{href:"#"}},[e._v("/demo/src/components/DatePicker/")]),e._v(" for sample code.")])])}],ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datepicker"},[a("input",{staticClass:"datepicker-input",attrs:{type:"text"},domProps:{value:e.displayDate},on:{focus:function(t){e.isShow=!0}}}),e.isShow?a("div",{staticClass:"datepicker-popup"},[a("div",{staticClass:"datepicker-popup-overlay",on:{click:function(t){e.isShow=!1}}}),a("Calendar",{staticClass:"datepicker-popup-calendar",attrs:{date:e.value},on:{"select-day":e.onSelectDay}})],1):e._e()])},fe=[],he={name:"DatePickerInput",components:{Calendar:F},props:{value:{type:Date,default:function(){return new Date}}},data:function(){return{isShow:!1}},computed:{displayDate:function(){return this.value.toLocaleString("en-GB",{weekday:"short",day:"numeric",month:"long",year:"numeric"})}},methods:{onSelectDay:function(e){var t=e.day;this.isShow=!1,this.$emit("input",t)}}},me=he,ye=(a("7ff6"),Object(R["a"])(me,ve,fe,!1,null,"0ede9f05",null)),be=ye.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datepicker"},[a("div",{staticClass:"datepicker-toggle",on:{click:function(t){e.isShow=!0}}},[a("span",[e._v(e._s(e.displayDate))]),a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 139 139",fill:"#aaa"}},[a("path",{attrs:{d:"M113.8 22.9h-13.51v-5.4c0-3.22-2.64-5.85-5.85-5.85s-5.84 2.63-5.84 5.85v5.4H50.4v-5.4c0-3.22-2.62-5.85-5.84-5.85s-5.84 2.63-5.84 5.85v5.4H25.2c-5.53 0-10.03 4.5-10.03 10.04v74.12c0 5.53 4.5 10.04 10.03 10.04h79.63c10.48 0 19-8.53 19-19V32.94c0-5.53-4.5-10.03-10.03-10.03zm-88.6 8h13.52a5.86 5.86 0 005.84 5.7 5.86 5.86 0 005.84-5.7h38.2c.08 3.15 2.67 5.7 5.84 5.7s5.76-2.55 5.84-5.7h13.52c1.1 0 2.03.94 2.03 2.04v15.62H23.17V32.94c0-1.1.93-2.03 2.03-2.03zm-2.03 76.16V56.44h92.66V91.5H99.5l-.12 17.6H25.2c-1.1 0-2.03-.94-2.03-2.04zm84.2 1.73l.06-9.29h8.3a11.01 11.01 0 01-8.36 9.29z"}}),a("path",{attrs:{d:"M46.5 75.32c.03-3.67 1.34-6.34 3.44-8.13 2.1-1.75 4.95-2.6 8.04-2.6 8 0 10.65 5.37 10.65 8 0 6.53-3.65 6.53-3.65 6.66v.1c0 .35 4.52.35 4.52 7.27 0 3.8-2.54 9.79-11.57 9.79-12.4 0-12.43-9.83-12.23-12.15h7.52c-.04 1.65.32 2.9 1.07 3.7.75 1.03 1.9 1.4 3.29 1.4 2.25 0 3.68-.95 3.68-3.5 0-2.72-1.86-3.21-3.68-3.21-1.15 0-1.7.13-2.3.22V76.8c.6.05 1.23.18 2.3.18 1.66 0 3.76-.4 3.76-2.8 0-1.98-1.98-2.74-3.6-2.74-2.14 0-3.89 1.3-3.8 3.9h-7.45zM81.26 78.14h-6.45V71.7c4 .1 7.96-1.6 8.2-6.75h6.49v31.1h-8.24V78.14z"}})])]),e.isShow?a("div",{staticClass:"datepicker-popup"},[a("div",{staticClass:"datepicker-popup-overlay",on:{click:function(t){e.isShow=!1}}}),a("Calendar",{staticClass:"datepicker-popup-calendar",attrs:{date:e.value},on:{"select-day":e.onSelectDay}})],1):e._e()])},_e=[],De={name:"DatePickerToggle",components:{Calendar:F},props:{value:{type:Date,default:function(){return new Date}}},data:function(){return{isShow:!1}},computed:{displayDate:function(){return this.value.toLocaleString("en-GB",{weekday:"short",day:"numeric",month:"long",year:"numeric"})}},methods:{onSelectDay:function(e){var t=e.day;this.isShow=!1,this.$emit("input",t)}}},ge=De,Oe=(a("1582"),Object(R["a"])(ge,we,_e,!1,null,"d733686e",null)),Ce=Oe.exports,je={name:"DemoDatePicker",components:{DatePickerInput:be,DatePickerToggle:Ce},props:{id:{type:String,default:""}},data:function(){return{date:new Date}}},ke=je,Se=(a("4d09"),Object(R["a"])(ke,ue,pe,!1,null,"3e744bc2",null)),Pe=Se.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[e._m(0),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("Calendar",{attrs:{date:e.date},on:{"select-day":e.onSelectDay}},[e._t("default",[a("div",{staticClass:"prepend-wrap"},[a("button",{staticClass:"prepend-btn",attrs:{type:"button"},on:{click:function(t){return e.onClickDate(0)}}},[e._v(" Today ")]),a("button",{staticClass:"prepend-btn",attrs:{type:"button"},on:{click:function(t){return e.onClickDate(1)}}},[e._v(" Tomorrow ")]),a("button",{staticClass:"prepend-btn",attrs:{type:"button"},on:{click:function(t){return e.onClickDate(7)}}},[e._v(" Next Week ")])])],{slot:"prepend"}),e._t("default",[a("div",{staticClass:"append-wrap"},[a("span",[e._v("Selected date: ")]),a("b",[e._v(e._s(e.displayDate))])])],{slot:"append"})],2)],1),a("div",{staticClass:"section-desc"},[a("p",[e._v("The component provided 2 Vue slots for custom DOM injection.")]),e._m(1),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.html))])])])])])])},Ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("Custom DOM Injection "),a("small",[e._v("(Vue Slots)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Slot: "),a("code",[e._v("prepend")]),e._v(", "),a("code",[e._v("append")]),e._v(".")])}],Me={name:"DemoCalendarInject",components:{Calendar:F},props:{id:{type:String,default:""}},data:function(){return{date:new Date}},computed:{html:function(){return'\n<Calendar>\n  <slot slot="prepend">\n    ...\n  </slot>\n  <slot slot="append">\n    ...\n  </slot>\n</Calendar>\n      '.trim()},displayDate:function(){return this.date.toLocaleString("en-GB",{weekday:"short",day:"numeric",month:"long",year:"numeric"})}},methods:{onSelectDay:function(e){var t=e.day;this.date=t},onClickDate:function(e){var t=new Date;t.setDate(t.getDate()+e),this.date=t}}},$e=Me,Ne=(a("7711"),Object(R["a"])($e,xe,Ee,!1,null,"250f2195",null)),Te=Ne.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",attrs:{id:e.id}},[a("h2",[e._v("More Customization...")]),a("div",{staticClass:"section-body"},[a("div",{staticClass:"section-showcase"},[a("Calendar",{attrs:{date:e.date,views:["days"],"week-start":1,"process-date":e.onProcessDate},on:{"select-day":e.onSelectDay}})],1),e._m(0)])])},Ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-desc"},[a("p",[e._v("Other than setting the disabled dates, you can modify the "),a("code",[e._v("date")]),e._v(" object property through "),a("code",[e._v("processDate")]),e._v(" method, like injecting custom CSS class on certain date, changing the display name, and etc.")]),a("p",[e._v("Read the "),a("a",{attrs:{href:"#"}},[e._v("Documentation")]),e._v(" for more information of "),a("code",[e._v("date")]),e._v(" object.")])])}],Ae=a("80b4"),Be=a("c0ae"),ze=a("0d7e");function Le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function He(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(a),!0).forEach((function(t){Ge(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ge(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Re={name:"DemoCalendarAdvace",components:{Calendar:F},props:{id:{type:String,default:""}},data:function(){return{date:new Date}},methods:{onSelectDay:function(e){var t=e.day;this.date=t},onProcessDate:function(e){var t=He({},e);return"day"===t.type&&(Object(Ae["a"])(t.day)&&(t.classes+=" c-weekend"),Object(Be["a"])(t.day)?t.display="Fi":Object(ze["a"])(t.day)&&(t.display="La")),t}}},Ye=Re,Fe=(a("4adc"),Object(R["a"])(Ye,Ie,Ve,!1,null,"80a26752",null)),Je=Fe.exports,qe={name:"App",components:{DemoCalendar:W,DemoCalendarBare:te,DemoCalendarDisabled:de,DemoDatePicker:Pe,DemoCalendarInject:Te,DemoCalendarAdvance:Je},data:function(){return{currSpy:"demo"}},computed:{appVer:function(){return o["a"]},navs:function(){return[{id:"demo",name:"Built-In Styles",link:"#demo"},{id:"bare",name:"Bare Styles",link:"#bare"},{id:"disable",name:"Disable Dates",link:"#disable"},{id:"datepicker",name:"DatePicker",link:"#datepicker"},{id:"slots",name:"Slots",link:"#slots"},{id:"advance",name:"More...",link:"#advance"},{id:"download",name:"Download",link:"#"}]}},mounted:function(){var e=document.querySelectorAll(".section");this.secs=Array.from(e).map((function(e){return{id:e.id,offsetY:e.offsetTop}})),this.secs.reverse(),window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=this.secs.find((function(e){return window.scrollY>=e.offsetY-80}));this.currSpy=e?e.id:this.navs[0].id}}},Ue=qe,We=(a("6df2"),Object(R["a"])(Ue,s,c,!1,null,null,null)),Ke=We.exports;a("b1b7");n["a"].config.productionTip=!1,n["a"].use(i.a),new n["a"]({render:function(e){return e(Ke)}}).$mount("#app")},c6d1:function(e,t,a){},f0c3:function(e,t,a){}});
//# sourceMappingURL=app.e92cbe03.js.map