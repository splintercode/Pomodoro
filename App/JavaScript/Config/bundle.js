﻿/*
 AngularJS v1.3.0-rc.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,X,t){'use strict';function E(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.5/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Na(b){if(null==b||Oa(b))return!1;var a=b.length;return b.nodeType===
ia&&a?!0:u(b)||B(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(A(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(B(b)||Na(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==q)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function hc(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);
return a.sort()}function zd(b,a,c){for(var d=hc(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function ic(b){return function(a,c){b(c,a)}}function Ad(){return++gb}function jc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}jc(b,a);return b}function $(b){return parseInt(b,10)}function kc(b,a){return w(new (w(function(){},{prototype:b})),
a)}function z(){}function Pa(b){return b}function ba(b){return function(){return b}}function G(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function O(b){return null!==b&&"object"===typeof b}function u(b){return"string"===typeof b}function aa(b){return"number"===typeof b}function ca(b){return"[object Date]"===Fa.call(b)}function A(b){return"function"===typeof b}function hb(b){return"[object RegExp]"===Fa.call(b)}function Oa(b){return b&&b.window===b}function Qa(b){return b&&
b.$evalAsync&&b.$watch}function Ra(b){return"boolean"===typeof b}function Bd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Cd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ma(b){return H(b.nodeName||b[0].nodeName)}function Sa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ga(b,a,c,d){if(Oa(b)||Qa(b))throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];d=d||[];if(O(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(B(b))for(var f=
a.length=0;f<b.length;f++)e=Ga(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;B(a)?a.length=0:q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ga(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);jc(a,g)}}else if(a=b)B(b)?a=Ga(b,[],c,d):ca(b)?a=new Date(b.getTime()):hb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):O(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ga(b,e,c,d));return a}function na(b,
a){if(B(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(O(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function oa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(B(b)){if(!B(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!oa(b[d],a[d]))return!1;return!0}}else{if(ca(b))return ca(a)?oa(b.getTime(),a.getTime()):!1;if(hb(b)&&hb(a))return b.toString()==a.toString();
if(Qa(b)||Qa(a)||Oa(b)||Oa(a)||B(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!oa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!A(a[d]))return!1;return!0}return!1}function ib(b,a,c){return b.concat(Ua.call(a,c))}function lc(b,a){var c=2<arguments.length?Ua.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ua.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Dd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Oa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Qa(a)&&(c="$SCOPE");return c}function pa(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Dd,a?"  ":null)}function mc(b){return u(b)?JSON.parse(b):b}function qa(b){b=C(b).clone();try{b.empty()}catch(a){}var c=C("<div>").append(b).html();try{return b[0].nodeType===jb?H(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
H(b)})}catch(d){return H(c)}}function nc(b){try{return decodeURIComponent(b)}catch(a){}}function oc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=nc(c[0]),y(d)&&(b=y(c[1])?nc(c[1]):!0,Gb.call(a,d)?B(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Hb(b){var a=[];q(b,function(b,d){B(b)?q(b,function(b){a.push(xa(d,!0)+(!0===b?"":"="+xa(b,!0)))}):a.push(xa(d,!0)+(!0===b?"":"="+xa(b,!0)))});return a.length?a.join("&"):""}function kb(b){return xa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function xa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Ed(b,a){var c,d,e=lb.length;b=C(b);for(d=0;d<e;++d)if(c=lb[d]+a,u(c=b.attr(c)))return c;return null}function Fd(b,a){var c,d,e={};q(lb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});q(lb,function(a){a+="app";
var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Ed(c,"strict-di"),a(c,d?[d]:[],e))}function pc(b,a,c){O(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=C(b);if(b.injector()){var d=b[0]===X?"document":qa(b);throw Ta("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
d=Ib(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(c.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return d();R.name=R.name.replace(f,"");ya.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function Gd(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}function Hd(b){return ya.element(b).injector().get("$$testability")}
function Jb(b,a){a=a||"_";return b.replace(Id,function(b,d){return(d?a:"")+b.toLowerCase()})}function Jd(){var b;qc||((ja=R.jQuery)&&ja.fn.on?(C=ja,w(ja.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),b=ja.cleanData,ja.cleanData=function(a){var c;if(Kb)Kb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ja._data(e,"events"))&&c.$destroy&&ja(e).triggerHandler("$destroy");b(a)}):C=P,ya.element=C,qc=!0)}function Lb(b,a,c){if(!b)throw Ta("areq",
a||"?",c||"required");return b}function mb(b,a,c){c&&B(b)&&(b=b[b.length-1]);Lb(A(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ia(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function rc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&A(b)?lc(e,b):b}function nb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return C(c)}function Kd(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=E("$injector"),d=E("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||E;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return m}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),m={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:s,run:function(a){e.push(a);return this}};h&&s(h);return m})}})}function Ld(b){w(b,{bootstrap:pc,copy:Ga,extend:w,equals:oa,element:C,forEach:q,
injector:Ib,noop:z,bind:lc,toJson:pa,fromJson:mc,identity:Pa,isUndefined:G,isDefined:y,isString:u,isFunction:A,isObject:O,isNumber:aa,isElement:Bd,isArray:B,version:Md,isDate:ca,lowercase:H,uppercase:ob,callbacks:{counter:0},getTestability:Hd,$$minErr:E,$$csp:Va,reloadWithDebugInfo:Gd});Wa=Kd(R);try{Wa("ngLocale")}catch(a){Wa("ngLocale",[]).provider("$locale",Nd)}Wa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Od});a.provider("$compile",sc).directive({a:Pd,input:tc,textarea:tc,
form:Qd,script:Rd,select:Sd,style:Td,option:Ud,ngBind:Vd,ngBindHtml:Wd,ngBindTemplate:Xd,ngClass:Yd,ngClassEven:Zd,ngClassOdd:$d,ngCloak:ae,ngController:be,ngForm:ce,ngHide:de,ngIf:ee,ngInclude:fe,ngInit:ge,ngNonBindable:he,ngPluralize:ie,ngRepeat:je,ngShow:ke,ngStyle:le,ngSwitch:me,ngSwitchWhen:ne,ngSwitchDefault:oe,ngOptions:pe,ngTransclude:qe,ngModel:re,ngList:se,ngChange:te,pattern:uc,ngPattern:uc,required:vc,ngRequired:vc,minlength:wc,ngMinlength:wc,maxlength:xc,ngMaxlength:xc,ngValue:ue,ngModelOptions:ve}).directive({ngInclude:we}).directive(pb).directive(yc);
a.provider({$anchorScroll:xe,$animate:ye,$browser:ze,$cacheFactory:Ae,$controller:Be,$document:Ce,$exceptionHandler:De,$filter:zc,$interpolate:Ee,$interval:Fe,$http:Ge,$httpBackend:He,$location:Ie,$log:Je,$parse:Ke,$rootScope:Le,$q:Me,$$q:Ne,$sce:Oe,$sceDelegate:Pe,$sniffer:Qe,$templateCache:Re,$templateRequest:Se,$$testability:Te,$timeout:Ue,$window:Ve,$$rAF:We,$$asyncCallback:Xe})}])}function Xa(b){return b.replace(Ye,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ze,"Moz$1")}function Ac(b){b=
b.nodeType;return b===ia||!b||9===b}function Bc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Mb.test(b)){c=c||e.appendChild(a.createElement("div"));d=($e.exec(b)||["",""])[1].toLowerCase();d=da[d]||da._default;c.innerHTML=d[1]+b.replace(af,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=ib(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function P(b){if(b instanceof P)return b;var a;
u(b)&&(b=V(b),a=!0);if(!(this instanceof P)){if(a&&"<"!=b.charAt(0))throw Nb("nosel");return new P(b)}if(a){a=X;var c;b=(c=bf.exec(b))?[a.createElement(c[1])]:(c=Bc(b,a))?c.childNodes:[]}Cc(this,b)}function Ob(b){return b.cloneNode(!0)}function qb(b,a){a||rb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)rb(c[d])}function Dc(b,a,c,d){if(y(d))throw Nb("offargs");var e=(d=sb(b))&&d.events;if(d&&d.handle)if(a)q(a.split(" "),function(a){G(c)?(b.removeEventListener(a,
e[a],!1),delete e[a]):Sa(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function rb(b,a){var c=b.ng339,d=c&&tb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Dc(b)),delete tb[c],b.ng339=t))}function sb(b,a){var c=b.ng339,c=c&&tb[c];a&&!c&&(b.ng339=c=++cf,c=tb[c]={events:{},data:{},handle:t});return c}function Pb(b,a,c){if(Ac(b)){var d=y(c),e=!d&&a&&!O(a),f=!a;b=(b=sb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&
b[a];w(b,a)}}}function Qb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Rb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",V((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+V(a)+" "," ")))})}function Sb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=V(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});
b.setAttribute("class",V(c))}}function Cc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ec(b,a){return ub(b,"$"+(a||"ngController")+"Controller")}function ub(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=B(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=C.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Fc(b){for(qb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Gc(b,a){a||qb(b);var c=b.parentNode;c&&c.removeChild(b)}function Hc(b,a){var c=vb[a.toLowerCase()];return c&&Ic[ma(b)]&&c}function df(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Jc[a]}function ef(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(G(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&
c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=na(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function Ja(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ad)():c+":"+b}function Ya(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function ff(b){return(b=
b.toString().replace(Kc,"").match(Lc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Tb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw u(c)&&c||(c=b.name||ff(b)),za("strictdi",c);a=b.toString().replace(Kc,"");a=a.match(Lc);q(a[1].split(gf),function(a){a.replace(hf,function(a,b,c){d.push(c)})})}b.$inject=d}}else B(b)?(a=b.length-1,mb(b[a],"fn"),d=b.slice(0,a)):mb(b,"fn",!0);return d}function Ib(b,a){function c(a){return function(b,c){if(O(b))q(b,
ic(a));else return a(b,c)}}function d(a,b){Ia(a,"service");if(A(b)||B(b))b=s.instantiate(b);if(!b.$get)throw za("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b);if(G(c))throw za("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!p.get(a)){p.put(a,!0);try{u(a)?(c=Wa(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):A(a)?b.push(s.invoke(a)):B(a)?b.push(s.invoke(a)):mb(a,"module")}catch(e){throw B(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),za("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===k)throw za("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a)}catch(e){throw b[a]===k&&delete b[a],e;}finally{l.shift()}}function e(b,
c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Tb(b,a,g);var k,l,m;l=0;for(k=g.length;l<k;l++){m=g[l];if("string"!==typeof m)throw za("itkn",m);h.push(f&&f.hasOwnProperty(m)?f[m]:d(m))}B(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(B(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return O(a)||A(a)?a:d},get:d,annotate:Tb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],p=new Ya([],
!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ba(b),!1)}),constant:c(function(a,b){Ia(a,"constant");n[a]=b;m[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},s=n.$injector=h(n,function(){throw za("unpr",l.join(" <- "));}),m={},r=m.$injector=h(m,function(a){var b=s.get(a+"Provider");return r.invoke(b.$get,
b,t,a)});q(g(b),function(a){r.invoke(a||z)});return r}function xe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==ma(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&
""===a||d.$evalAsync(f)});return f}]}function Xe(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function jf(b,a,c,d){function e(a){try{a.apply(null,Ua.call(arguments,1))}finally{if(r--,0===r)for(;L.length;)try{L.pop()()}catch(b){c.error(b)}}}function f(a,b){(function wb(){q(F,function(a){a()});x=b(wb,a)})()}function g(){if(v!==h.url()||Q!==p.state)v=h.url(),q(T,function(a){a(h.url(),p.state)})}var h=this,k=a[0],l=b.location,
p=b.history,n=b.setTimeout,s=b.clearTimeout,m={};h.isMock=!1;var r=0,L=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){r++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===r?a():L.push(a)};var F=[],x;h.addPollFn=function(a){G(x)&&f(100,n);F.push(a);return a};var v=l.href,Q=p.state,D=a.find("base"),M=null;h.url=function(a,c,e){G(e)&&(e=null);l!==b.location&&(l=b.location);p!==b.history&&(p=b.history);if(a){if(v!==a||d.history&&p.state!==e){var f=
v&&Aa(v)===Aa(a);v=a;!d.history||f&&p.state===e?(f||(M=a),c?l.replace(a):l.href=a):(p[c?"replaceState":"pushState"](e,"",a),Q=p.state);return h}}else return M||l.href.replace(/%27/g,"'")};h.state=function(){return G(p.state)?null:p.state};var T=[],I=!1;h.onUrlChange=function(a){if(!I){if(d.history)C(b).on("popstate",g);C(b).on("hashchange",g);I=!0}T.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=D.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var S={},W="",N=
h.baseHref();h.cookies=function(a,b){var d,e,f,g;if(a)b===t?k.cookie=encodeURIComponent(a)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT":u(b)&&(d=(k.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+N).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==W)for(W=k.cookie,d=W.split("; "),S={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=decodeURIComponent(e.substring(0,g)),S[a]===t&&(S[a]=
decodeURIComponent(e.substring(g+1))));return S}};h.defer=function(a,b){var c;r++;c=n(function(){delete m[c];e(a)},b||0);m[c]=!0;return c};h.defer.cancel=function(a){return m[a]?(delete m[a],s(a),e(z),!0):!1}}function ze(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new jf(b,d,a,c)}]}function Ae(){this.$get=function(){function b(b,d){function e(a){a!=n&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw E("$cacheFactory")("iid",
b);var g=0,h=w({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,p={},n=null,s=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=p[a]||(p[a]={key:a});e(c)}if(!G(b))return a in k||g++,k[a]=b,g>l&&this.remove(s.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=p[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=p[a];if(!b)return;b==n&&(n=b.p);b==s&&(s=b.n);f(b.n,b.p);delete p[a]}delete k[a];g--},removeAll:function(){k={};g=0;p={};n=s=null},destroy:function(){p=
h=k=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Re(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function sc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};q(a,function(a,e){var f=a.match(c);if(!f)throw fa("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=Cd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){Ia(a,"directive");u(a)?(Lb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];q(d[a],function(d,g){try{var h=b.invoke(d);A(h)?h={compile:ba(h)}:!h.compile&&h.link&&(h.compile=ba(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";O(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):q(a,ic(n));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=function(a){return y(a)?(l=a,this):
l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,L,F,x,v,Q,D,M){function T(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e){a instanceof C||(a=C(a));q(a,function(b,c){b.nodeType==jb&&b.nodeValue.match(/\S+/)&&(a[c]=C(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);I.$$addScopeClass(a);var g=null;return function(b,c,d,e,h){Lb(b,"scope");g||(g=(h=h&&h[0])?
"foreignobject"!==ma(h)&&h.toString().match(/SVG/)?"svg":"html":"html");h="html"!==g?C(R(g,C("<div>").append(a).html())):c?Ha.clone.call(a):a;if(d)for(var k in d)h.data("$"+k+"Controller",d[k].instance);I.$$addScopeInfo(h,b);c&&c(h,b);f&&f(b,h,h,e);return h}}function S(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,m,s,v,r;if(n)for(r=Array(c.length),m=0;m<g.length;m+=3)f=g[m],r[f]=c[f];else r=c;m=0;for(s=g.length;m<s;)k=r[g[m++]],c=g[m++],f=g[m++],c?(c.scope?(l=a.$new(),I.$$addScopeInfo(C(k),l)):l=a,
v=c.transcludeOnThisElement?W(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?W(a,b):null,c(f,l,k,d,v)):f&&f(a,k.childNodes,t,e)}for(var g=[],k,l,m,s,n,v=0;v<a.length;v++){k=new Wb;l=N(a[v],[],k,0===v?d:t,e);(f=l.length?ea(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&I.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[v].childNodes)||!m.length?null:S(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)g.push(v,f,k),s=!0,n=n||f;
f=null}return s?h:null}function W(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,f,c,g)}}function N(b,c,g,h,k){var l=g.$attr,m;switch(b.nodeType){case ia:y(c,ra(ma(b)),"E",h,k);for(var s,v,r,F=b.attributes,L=0,Q=F&&F.length;L<Q;L++){var D=!1,I=!1;s=F[L];m=s.name;s=V(s.value);v=ra(m);if(r=$a.test(v))m=Jb(v.substr(6),"-");var M=v.replace(/(Start|End)$/,""),T;a:{var N=M;if(d.hasOwnProperty(N)){T=void 0;for(var N=a.get(N+"Directive"),q=0,W=N.length;q<W;q++)if(T=
N[q],T.multiElement){T=!0;break a}}T=!1}T&&v===M+"Start"&&(D=m,I=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));v=ra(m.toLowerCase());l[v]=m;if(r||!g.hasOwnProperty(v))g[v]=s,Hc(b,v)&&(g[v]=!0);P(b,c,s,v,r);y(c,v,"A",h,k,D,I)}b=b.className;if(u(b)&&""!==b)for(;m=f.exec(b);)v=ra(m[2]),y(c,v,"C",h,k)&&(g[v]=V(m[3])),b=b.substr(m.index+m[0].length);break;case jb:ga(c,b.nodeValue);break;case 8:try{if(m=e.exec(b.nodeValue))v=ra(m[1]),y(c,v,"M",h,k)&&(g[v]=V(m[2]))}catch(K){}}c.sort(E);return c}
function K(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);a.nodeType==ia&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return C(d)}function U(a,b,c){return function(d,e,f,g,h){e=K(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,k,l,v,n){function r(a,b,c,d){if(a){c&&(a=U(a,c,d));a.require=J.require;a.directiveName=ga;if(x===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=U(b,
c,d));b.require=J.require;b.directiveName=ga;if(x===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});v.push(b)}}function Q(a,b,c,d){var e,f="data",g=!1,k=c,l;if(u(b)){if(l=b.match(h),b=b.substring(l[0].length),l[3]&&(l[1]?l[3]=null:l[1]=l[3]),"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",k=c.parent()),"?"===l[2]&&(g=!0),e=null,d&&"data"===f&&(e=d[b])&&(e=e.instance),e=e||k[f]("$"+b+"Controller"),!e&&!g)throw fa("ctreq",b,a);}else B(b)&&(e=[],q(b,function(b){e.push(Q(a,b,c,d))}));return e}
function D(a,c,f,g,h){function k(a,b,c){var d;Qa(a)||(c=b,b=a,a=t);z&&(d=Za);c||(c=z?N.parent():N);return h(a,b,d,c,Vb)}var m,n,r,M,Za,T,N,K;d===f?(K=e,N=e.$$element):(N=C(f),K=new Wb(N,e));x&&(M=c.$new(!0));T=h&&k;W&&(S={},Za={},q(W,function(a){var b={$scope:a===x||a.$$isolateScope?M:c,$element:N,$attrs:K,$transclude:T};r=a.controller;"@"==r&&(r=K[a.name]);b=F(r,b,!0,a.controllerAs);Za[a.name]=b;z||N.data("$"+a.name+"Controller",b.instance);S[a.name]=b}));if(x){I.$$addScopeInfo(N,M,!0,!(ea&&(ea===
x||ea===x.$$originalDirective)));I.$$addScopeClass(N,!0);g=S&&S[x.name];var U=M;g&&g.identifier&&!0===x.bindToController&&(U=g.instance);q(M.$$isolateBindings=x.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":K.$observe(e,function(a){U[d]=a});K.$$observers[e].$$scope=c;K[e]&&(U[d]=b(K[e])(c));break;case "=":if(f&&!K[e])break;h=L(K[e]);l=h.literal?oa:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=U[d]=h(c);throw fa("nonassign",K[e],
x.name);};g=U[d]=h(c);f=function(a){l(a,U[d])||(l(a,g)?k(c,a=U[d]):U[d]=a);return g=a};f.$stateful=!0;f=c.$watch(L(K[e],f),null,h.literal);M.$on("$destroy",f);break;case "&":h=L(K[e]),U[d]=function(a){return h(c,a)}}})}S&&(q(S,function(a){a()}),S=null);g=0;for(m=l.length;g<m;g++)n=l[g],Z(n,n.isolateScope?M:c,N,K,n.require&&Q(n.directiveName,n.require,N,Za),T);var Vb=c;x&&(x.template||null===x.templateUrl)&&(Vb=M);a&&a(Vb,f.childNodes,t,h);for(g=v.length-1;0<=g;g--)n=v[g],Z(n,n.isolateScope?M:c,N,
K,n.require&&Q(n.directiveName,n.require,N,Za),T)}n=n||{};for(var M=-Number.MAX_VALUE,T,W=n.controllerDirectives,S,x=n.newIsolateScopeDirective,ea=n.templateDirective,Ca=n.nonTlbTranscludeDirective,y=!1,Ub=!1,z=n.hasElementTranscludeDirective,w=e.$$element=C(d),J,ga,E,Ba=f,sa,H=0,P=a.length;H<P;H++){J=a[H];var xb=J.$$start,$a=J.$$end;xb&&(w=K(d,xb,$a));E=t;if(M>J.priority)break;if(E=J.scope)J.templateUrl||(O(E)?(Ka("new/isolated scope",x||T,J,w),x=J):Ka("new/isolated scope",x,J,w)),T=T||J;ga=J.name;
!J.templateUrl&&J.controller&&(E=J.controller,W=W||{},Ka("'"+ga+"' controller",W[ga],J,w),W[ga]=J);if(E=J.transclude)y=!0,J.$$tlb||(Ka("transclusion",Ca,J,w),Ca=J),"element"==E?(z=!0,M=J.priority,E=w,w=e.$$element=C(X.createComment(" "+ga+": "+e[ga]+" ")),d=w[0],yb(g,Ua.call(E,0),d),Ba=I(E,f,M,k&&k.name,{nonTlbTranscludeDirective:Ca})):(E=C(Ob(d)).contents(),w.empty(),Ba=I(E,f));if(J.template)if(Ub=!0,Ka("template",ea,J,w),ea=J,E=A(J.template)?J.template(w,e):J.template,E=Nc(E),J.replace){k=J;E=Mb.test(E)?
Oc(R(J.templateNamespace,V(E))):[];d=E[0];if(1!=E.length||d.nodeType!==ia)throw fa("tplrt",ga,"");yb(g,w,d);P={$attr:{}};E=N(d,[],P);var $=a.splice(H+1,a.length-(H+1));x&&wb(E);a=a.concat(E).concat($);Mc(e,P);P=a.length}else w.html(E);if(J.templateUrl)Ub=!0,Ka("template",ea,J,w),ea=J,J.replace&&(k=J),D=G(a.splice(H,a.length-H),w,e,g,y&&Ba,l,v,{controllerDirectives:W,newIsolateScopeDirective:x,templateDirective:ea,nonTlbTranscludeDirective:Ca}),P=a.length;else if(J.compile)try{sa=J.compile(w,e,Ba),
A(sa)?r(null,sa,xb,$a):sa&&r(sa.pre,sa.post,xb,$a)}catch(aa){c(aa,qa(w))}J.terminal&&(D.terminal=!0,M=Math.max(M,J.priority))}D.scope=T&&!0===T.scope;D.transcludeOnThisElement=y;D.elementTranscludeOnThisElement=z;D.templateOnThisElement=Ub;D.transclude=Ba;n.hasElementTranscludeDirective=z;return D}function wb(a){for(var b=0,c=a.length;b<c;b++)a[b]=kc(a[b],{$$isolateScope:!0})}function y(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var s;e=a.get(e+"Directive");for(var v=0,r=e.length;v<
r;v++)try{s=e[v],(g===t||g>s.priority)&&-1!=s.restrict.indexOf(f)&&(k&&(s=kc(s,{$$start:k,$$end:l})),b.push(s),h=s)}catch(F){c(F)}}return h}function Mc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(T(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||
(a[f]=b,d[f]=c[f])})}function G(a,b,c,d,e,f,g,h){var k=[],l,m,s=b[0],n=a.shift(),v=w({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),F=A(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,L=n.templateNamespace;b.empty();r(Q.getTrustedResourceUrl(F)).then(function(r){var Q,D;r=Nc(r);if(n.replace){r=Mb.test(r)?Oc(R(L,V(r))):[];Q=r[0];if(1!=r.length||Q.nodeType!==ia)throw fa("tplrt",n.name,F);r={$attr:{}};yb(d,b,Q);var M=N(Q,[],r);O(n.scope)&&wb(M);a=M.concat(a);Mc(c,r)}else Q=
s,b.html(r);a.unshift(v);l=ea(a,Q,c,e,b,n,f,g,h);q(d,function(a,c){a==Q&&(d[c]=b[0])});for(m=S(b[0].childNodes,e);k.length;){r=k.shift();D=k.shift();var I=k.shift(),K=k.shift(),M=b[0];if(!r.$$destroyed){if(D!==s){var x=D.className;h.hasElementTranscludeDirective&&n.replace||(M=Ob(Q));yb(I,C(D),M);T(C(M),x)}D=l.transcludeOnThisElement?W(r,l.transclude,K):K;l(m,r,M,d,D)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),k.push(d),k.push(a)):(l.transcludeOnThisElement&&(a=
W(b,l.transclude,e)),l(m,b,c,d,a)))}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ka(a,b,c,d){if(b)throw fa("multidir",b.name,c.name,a,qa(d));}function ga(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&I.$$addBindingClass(a);return function(a,c){var e=c.parent();b||I.$$addBindingClass(e);I.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function R(a,
b){a=H(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ba(a,b){if("srcdoc"==b)return Q.HTML;var c=ma(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Q.RESOURCE_URL}function P(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ma(a))throw fa("selmulti",qa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||
(l.$$observers={});if(k.test(e))throw fa("nodomevents");l[e]&&(h=b(l[e],!0,Ba(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function yb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,
d);a=X.createDocumentFragment();a.appendChild(d);C(c).data(C(d).data());ja?(Kb=!0,ja.cleanData([d])):delete C.cache[d[C.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],C(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,qa(d))}}var Wb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Wb.prototype=
{$normalize:ra,$addClass:function(a){a&&0<a.length&&D.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&D.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Pc(a,b);c&&c.length&&D.addClass(this.$$element,c);(c=Pc(b,a))&&c.length&&D.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Hc(f,a),h=df(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Jb(a,"-"));g=ma(this.$$element);
if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var s=2*l,g=g+M(V(h[s]),!0),g=g+(" "+V(h[s+1]));h=V(h[2*l]).split(/\s/);g+=M(V(h[0]),!0);2===h.length&&(g+=" "+V(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&q(a[f],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=Object.create(null)),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Sa(e,b)}}};var sa=b.startSymbol(),Ca=b.endSymbol(),Nc="{{"==sa||"}}"==Ca?Pa:function(a){return a.replace(/\{\{/g,sa).replace(/}}/g,Ca)},$a=/^ngAttr[A-Z]/;I.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];B(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;I.$$addBindingClass=l?function(a){T(a,"ng-binding")}:
z;I.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;I.$$addScopeClass=l?function(a,b){T(a,b?"ng-isolate-scope":"ng-scope")}:z;return I}]}function ra(b){return Xa(b.replace(kf,""))}function Pc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Oc(b){b=C(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&lf.call(b,
a,1);return b}function Be(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ia(a,"controller");O(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!O(a.$scope))throw E("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var p,n,s;k=!0===k;l&&u(l)&&(s=l);u(g)&&(l=g.match(c),n=l[1],s=s||l[3],g=b.hasOwnProperty(n)?b[n]:rc(h.$scope,n,!0)||(a?rc(e,n,!0):t),mb(g,n,!0));if(k)return k=function(){},
k.prototype=(B(g)?g[g.length-1]:g).prototype,p=new k,s&&f(h,s,p,n||g.name),w(function(){d.invoke(g,p,h,n);return p},{instance:p,identifier:s});p=d.instantiate(g,h,n);s&&f(h,s,p,n||g.name);return p}}]}function Ce(){this.$get=["$window",function(b){return C(b.document)}]}function De(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Qc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=H(V(b.substr(0,e)));d=V(b.substr(e+1));c&&(a[c]=
a[c]?a[c]+", "+d:d)});return a}function Rc(b){var a=O(b)?b:t;return function(c){a||(a=Qc(b));return c?a[H(c)]||null:a}}function Sc(b,a,c){if(A(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Ge(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d,e){if(u(d)){d=d.replace(c,"");var f=e("Content-Type");if(f&&0===f.indexOf("application/json")||b.test(d)&&a.test(d))d=mc(d)}return d}],
transformRequest:[function(a){return O(a)&&"[object File]"!==Fa.call(a)&&"[object Blob]"!==Fa.call(a)?pa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:na(d),put:na(d),patch:na(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return y(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,s){function m(a){function b(a){var d=w({},
a,{data:Sc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=w({},a.headers),d,f,b=w({},b.common,b[H(a.method)]);a:for(d in b){a=H(d);for(f in c)if(H(f)===a)continue a;c[d]=b[d]}(function(a){var b;q(a,function(c,d){A(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);w(c,a);c.headers=d;c.method=ob(c.method);var f=[function(a){d=
a.headers;var c=Sc(a.data,Rc(d),a.transformRequest);G(c)&&q(d,function(a,b){"content-type"===H(b)&&delete d[b]});G(a.withCredentials)&&!G(e.withCredentials)&&(a.withCredentials=e.withCredentials);return r(a,c,d).then(b,b)},t],g=n.when(c);for(q(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,
b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function r(c,g,l){function s(a,b,c,e){function g(){r(b,a,c,e)}N&&(200<=a&&300>a?N.put(U,[a,b,Qc(c),e]):N.remove(U));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function r(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?x.resolve:x.reject)({data:a,status:b,headers:Rc(d),config:c,statusText:e})}function I(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var x=
n.defer(),q=x.promise,N,K,U=L(c.url,c.params);m.pendingRequests.push(c);q.then(I,I);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=O(c.cache)?c.cache:O(e.cache)?e.cache:F);if(N)if(K=N.get(U),y(K)){if(K&&A(K.then))return K.then(I,I),K;B(K)?r(K[1],K[0],na(K[2]),K[3]):r(K,200,{},"OK")}else N.put(U,q);G(K)&&((K=Tc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(l[c.xsrfHeaderName||e.xsrfHeaderName]=K),a(c.method,U,g,s,l,c.timeout,c.withCredentials,c.responseType));
return q}function L(a,b){if(!b)return a;var c=[];zd(b,function(a,b){null===a||G(a)||(B(a)||(a=[a]),q(a,function(a){O(a)&&(a=ca(a)?a.toISOString():pa(a));c.push(xa(b)+"="+xa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),x=[];q(g,function(a){x.unshift(u(a)?s.get(a):s.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=
function(b,c,d){return m(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=e;return m}]}function mf(){return new R.XMLHttpRequest}function He(){this.$get=["$browser","$window","$document",function(b,a,c){return nf(b,mf,b.defer,a.angular.callbacks,c[0])}]}function nf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),p=null;f.type="text/javascript";f.src=a;f.async=!0;p=function(a){f.removeEventListener("load",p,!1);f.removeEventListener("error",p,!1);e.body.removeChild(f);
f=null;var g=-1,m="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),m=a.type,g="error"===a.type?404:200);c&&c(g,m)};f.addEventListener("load",p,!1);f.addEventListener("error",p,!1);e.body.appendChild(f);return p}return function(e,h,k,l,p,n,s,m){function r(){x&&x();v&&v.abort()}function L(a,d,e,f,g){D&&c.cancel(D);x=v=null;a(d,e,f,g);b.$$completeOutstandingRequest(z)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==H(e)){var F="_"+(d.counter++).toString(36);d[F]=function(a){d[F].data=
a;d[F].called=!0};var x=f(h.replace("JSON_CALLBACK","angular.callbacks."+F),F,function(a,b){L(l,a,d[F].data,"",b);d[F]=z})}else{var v=a();v.open(e,h,!0);q(p,function(a,b){y(a)&&v.setRequestHeader(b,a)});v.onload=function(){var a=v.statusText||"",b="response"in v?v.response:v.responseText,c=1223===v.status?204:v.status;0===c&&(c=b?200:"file"==ua(h).protocol?404:0);L(l,c,b,v.getAllResponseHeaders(),a)};e=function(){L(l,-1,null,null,"")};v.onerror=e;v.onabort=e;s&&(v.withCredentials=!0);if(m)try{v.responseType=
m}catch(Q){if("json"!==m)throw Q;}v.send(k||null)}if(0<n)var D=c(r,n);else n&&A(n.then)&&n.then(r)}}function Ee(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,m,r){function L(c){return c.replace(l,b).replace(p,a)}function F(a){try{var b;var c=m?e.getTrusted(m,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;
case "number":c=""+c;break;default:c=pa(c)}b=c}return b}catch(g){a=Xb("interr",f,g.toString()),d(a)}}r=!!r;for(var x,v,Q=0,D=[],M=[],q=f.length,I=[],S=[];Q<q;)if(-1!=(x=f.indexOf(b,Q))&&-1!=(v=f.indexOf(a,x+h)))Q!==x&&I.push(L(f.substring(Q,x))),Q=f.substring(x+h,v),D.push(Q),M.push(c(Q,F)),Q=v+k,S.push(I.length),I.push("");else{Q!==q&&I.push(L(f.substring(Q)));break}if(m&&1<I.length)throw Xb("noconcat",f);if(!g||D.length){var W=function(a){for(var b=0,c=D.length;b<c;b++){if(r&&G(a[b]))return;I[S[b]]=
a[b]}return I.join("")};return w(function(a){var b=0,c=D.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return W(e)}catch(g){a=Xb("interr",f,g.toString()),d(a)}},{exp:f,expressions:D,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=W(c);A(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),p=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Fe(){this.$get=
["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var p=a.setInterval,n=a.clearInterval,s=0,m=y(l)&&!l,r=(m?d:c).defer(),L=r.promise;k=y(k)?k:0;L.then(null,null,e);L.$$intervalId=p(function(){r.notify(s++);0<k&&s>=k&&(r.resolve(s),n(L.$$intervalId),delete f[L.$$intervalId]);m||b.$apply()},h);f[L.$$intervalId]=r;return L}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
!1};return e}]}function Nd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Yb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);return b.join("/")}function Uc(b,a,c){b=ua(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=$(b.port)||of[b.protocol]||null}function Vc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=oc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Aa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Zb(b){return b.substr(0,
Aa(b).lastIndexOf("/")+1)}function $b(b,a){this.$$html5=!0;a=a||"";var c=Zb(b);Uc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!u(e))throw ab("ipthprfx",a,c);Vc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Hb(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Yb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ta(b,d))!==t?
(g=f,g=(f=ta(a,f))!==t?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ac(b,a){var c=Zb(b);Uc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!u(e))throw ab("ihshprfx",d,a);Vc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Hb(this.$$search),e=this.$$hash?
"#"+kb(this.$$hash):"";this.$$url=Yb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Aa(b)==Aa(a)?(this.$$parse(a),!0):!1}}function Wc(b,a){this.$$html5=!0;ac.apply(this,arguments);var c=Zb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Aa(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Hb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):
"";this.$$url=Yb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function zb(b){return function(){return this[b]}}function Xc(b,a){return function(c){if(G(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ie(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Ra(b)?(a.enabled=b,this):O(b)?(Ra(b.enabled)&&(a.enabled=b.enabled),Ra(b.requireBase)&&(a.requireBase=b.requireBase),Ra(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var p=d.url(),n;if(a.enabled){if(!l&&a.requireBase)throw ab("nobase");n=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(l||"/");l=e.history?$b:Wc}else n=Aa(p),
l=ac;k=new l(n,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=C(b.target);"a"!==ma(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");O(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);s.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=
d.url()&&(c.$apply(),R.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=p&&d.url(k.absUrl(),!0);var m=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state;k.$$parse(a);k.$$state=b;c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(m=!1,h(d,e))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=k.$$replace;if(m||a!==k.absUrl()||k.$$html5&&e.history&&b!==k.$$state)m=!1,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
k.absUrl(),a,k.$$state,b).defaultPrevented?(k.$$parse(a),k.$$state=b):(g(k.absUrl(),f,b===k.$$state?null:k.$$state),h(a,b))});k.$$replace=!1});return k}]}function Je(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},
e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===
b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function bc(b){return b.constant}function La(b,a,c,d){va(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=ka(a.shift(),d);var g=va(b[e],d);g||(g={},b[e]=g);b=g}e=ka(a.shift(),d);va(b[e],d);return b[e]=c}function Yc(b,a,c,d,e,f){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return function(f,h){var k=h&&h.hasOwnProperty(b)?
h:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return t;k=k[a];if(!c)return k;if(null==k)return t;k=k[c];if(!d)return k;if(null==k)return t;k=k[d];return e?null==k?t:k=k[e]:k}}function Zc(b,a,c){var d=$c[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Yc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Yc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=t,a=g;while(d<f);return g};else{var g="";q(e,function(a,b){ka(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=ba(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return La(a,b,c,b)};return $c[b]=d}function Ke(){var b=Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===
b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],p=0,n=e.length;p<n;p++)l[p]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&
(h=d(a));return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;A(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;q(a,function(a){y(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){A(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){A(b)&&
b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,L,F;switch(typeof d){case "string":return F=d=d.trim(),g=b[F],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(L=!0,d=d.substring(2)),g=new cc(a),g=(new bb(g,c,a)).parse(d),g.constant?g.$$watchDelegate=p:L?(g=e(g),
g.$$watchDelegate=g.literal?l:k):g.inputs&&(g.$$watchDelegate=h),b[F]=g),n(g,f);case "function":return n(d,f);default:return n(z,f)}}}]}function Me(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ad(function(a){b.$evalAsync(a)},a)}]}function Ne(){this.$get=["$browser","$exceptionHandler",function(b,a){return ad(function(a){b.defer(a)},a)}]}function ad(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{A(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=
E("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(O(b)||A(b))d=b&&b.then;A(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(A(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{A(c)&&(d=c())}catch(e){return k(e,!1)}return d&&A(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},p=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function m(a){if(!A(a))throw h("norslvr",a);if(!(this instanceof
m))return new m(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=p;n.all=function(a){var b=new g,c=0,d=B(a)?[]:{};q(a,function(a,e){c++;p(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function We(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Le(){var b=10,a=E("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(e,f,g,h){function k(){this.$id=++gb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function p(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}function s(){for(;x.length;)try{x.shift()()}catch(a){f(a)}d=
null}function m(){null===d&&(d=h.defer(function(){r.$apply(s)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++gb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;A(b)||(h.fn=z);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Sa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=
!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(O(e))if(Na(e))for(f!==n&&(f=n,r=f.length=0,l++),a=e.length,r!==a&&(l++,f.length=r=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g);else{f!==m&&(f=m={},r=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(r++,f[b]=g,l++));if(r>a)for(b in l++,f)e.hasOwnProperty(b)||(r--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,p=g(a,c),n=[],m={},s=!0,r=0;return this.$watch(p,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(O(e))if(Na(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Gb.call(e,
a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,p,m,q,x=b,t,N=[],K,U,y;l("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),s());c=null;do{q=!1;for(t=this;L.length;){try{y=L.shift(),y.scope.$eval(y.expression)}catch(w){f(w)}c=null}a:do{if(p=t.$$watchers)for(m=p.length;m--;)try{if(e=p[m])if((g=e.get(t))!==(k=e.last)&&!(e.eq?oa(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=e,e.last=e.eq?Ga(g,null):g,e.fn(g,k===n?g:k,t),5>x&&(K=4-x,N[K]||(N[K]=
[]),U=A(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,U+="; newVal: "+pa(g)+"; oldVal: "+pa(k),N[K].push(U));else if(e===c){q=!1;break a}}catch(E){f(E)}if(!(p=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((q||L.length)&&!x--)throw r.$$phase=null,a("infdig",b,pa(N));}while(q||L.length);for(r.$$phase=null;F.length;)try{F.shift()()}catch(C){f(C)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=
!0;if(this!==r){for(var b in this.$$listenerCount)p(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$parent=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){r.$$phase||L.length||h.defer(function(){L.length&&r.$digest()});L.push({scope:this,expression:a})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&
x.push(b);m()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;p(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ib([h],arguments,1),l,p;do{d=e.$$listeners[a]||c;h.currentScope=e;
l=0;for(p=d.length;l<p;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,p--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ib([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new k,L=r.$$asyncQueue=[],F=r.$$postDigestQueue=[],x=r.$$applyAsyncQueue=[];return r}]}function Od(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=
function(){return function(c,d){var e=d?a:b,f;f=ua(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function pf(b){if("self"===b)return b;if(u(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(hb(b))return new RegExp("^"+b.source+"$");throw wa("imatcher");}function bd(b){var a=[];y(b)&&q(b,function(b){a.push(pf(b))});return a}function Pe(){this.SCE_CONTEXTS=
ha;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=bd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=bd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Tc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw wa("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ha.HTML]=e(g);h[ha.CSS]=e(g);h[ha.URL]=e(g);h[ha.JS]=e(g);h[ha.RESOURCE_URL]=e(h[ha.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===ha.RESOURCE_URL){var g=ua(e.toString()),n,s,m=!1;n=0;for(s=b.length;n<s;n++)if(d(b[n],g)){m=!0;break}if(m)for(n=0,s=a.length;n<s;n++)if(d(a[n],g)){m=!1;break}if(m)return e;throw wa("insecurl",e.toString());}if(c===ha.HTML)return f(e);throw wa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Oe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,
c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=na(ha);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Pa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ha,function(a,b){var c=H(b);e[Xa("parse_as_"+c)]=function(b){return f(a,b)};e[Xa("get_trusted_"+c)]=function(b){return g(a,
b)};e[Xa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Qe(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(H((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,p=!1,n=!1;if(l){for(var s in l)if(p=k.exec(s)){h=p[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");p=!!("transition"in l||h+"Transition"in
l);n=!!("animation"in l||h+"Animation"in l);!d||p&&n||(p=u(f.body.style.webkitTransition),n=u(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Da)return!1;if(G(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Va(),vendorPrefix:h,transitions:p,animations:n,android:d,msie:Da,msieDocumentMode:g}}]}function Se(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;
if(!f)throw fa("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Te(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var d=ya.element(a).data("$binding");d&&q(d,function(d){c?(new RegExp("(^|\\s)"+
b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ue(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,
a,c,d,e){function f(f,k,l){var p=y(l)&&!l,n=(p?d:c).defer(),s=n.promise;k=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),e(a)}finally{delete g[s.$$timeoutId]}p||b.$apply()},k);s.$$timeoutId=k;g[k]=n;return s}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function ua(b,a){var c=b;Da&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?
Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Tc(b){b=u(b)?ua(b):b;return b.protocol===cd.protocol&&b.host===cd.host}function Ve(){this.$get=ba(R)}function zc(b){function a(c,d){if(O(c)){var e={};q(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",dd);a("date",ed);a("filter",qf);a("json",rf);a("limitTo",sf);a("lowercase",tf);a("number",fd);a("orderBy",gd);a("uppercase",uf)}function qf(){return function(b,a,c){if(!B(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ya.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Gb.call(a,d)&&c(a[d],
b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function dd(b){var a=b.NUMBER_FORMATS;return function(b,d){G(d)&&(d=a.CURRENCY_SYM);return null==b?b:hd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function fd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
b?b:hd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function hd(b,a,c,d,e){if(!isFinite(b)||O(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var p=g.match(/([\d\.]+)e(-?)(\d+)/);p&&"-"==p[2]&&p[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(id)[1]||"").length;G(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(id);g=b[0];b=b[1]||"";var p=
0,n=a.lgSize,s=a.gSize;if(g.length>=n+s)for(p=g.length-n,l=0;l<p;l++)0===(p-l)%s&&0!==l&&(h+=c),h+=g.charAt(l);for(l=p;l<g.length;l++)0===(g.length-l)%n&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Ab(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();
if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ab(e,a,d)}}function Bb(b,a){return function(c,d){var e=c["get"+b](),f=ob(a?"SHORT"+b:b);return d[f][e]}}function jd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function kd(b){return function(a){var c=jd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ab(a,b)}}function ed(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:
a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;u(c)&&(c=vf.test(c)?$(c):a(c));aa(c)&&(c=new Date(c));if(!ca(c))return c;
for(;e;)(l=wf.exec(e))?(h=ib(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));q(h,function(a){k=xf[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rf(){return function(b){return pa(b,!0)}}function sf(){return function(b,a){aa(b)&&(b=b.toString());if(!B(b)&&!u(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(u(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):
"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function gd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ca(a)&&ca(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Na(a))return a;c=B(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||
Pa;if(u(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function ld(b,
a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||cb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ia(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;
f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});Sa(g,a)};md({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Sa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,Cb);f.$dirty=!0;f.$pristine=
!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ma,Cb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function dc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function db(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,h={},k=H(a[0].type);if(!e.android){var l=
!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;p()})}var p=function(b){if(!l){var e=a.val(),f=b&&b.type;Da&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===k||c.ngTrim&&"false"===c.ngTrim||(e=V(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",p);else{var n,s=function(a){n||(n=f.defer(function(){p(a);n=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&
19>b||37<=b&&40>=b||s(a)});if(e.hasEvent("paste"))a.on("paste cut",s)}a.on("change",p);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Db(b,a){return function(c,d){var e,f;if(ca(c))return c;if(u(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(yf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function eb(b,a,c,d){return function(e,f,g,h,k,l,p){function n(a){return y(a)?ca(a)?a:c(a):t}nd(e,f,g,h);db(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,m;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,m),"UTC"===s&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(h.$isEmpty(a))m=
null;else{if(!ca(a))throw Eb("datefmt",a);if((m=a)&&"UTC"===s){var b=6E4*m.getTimezoneOffset();m=new Date(m.getTime()+b)}return p("date")(a,d,s)}return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return h.$isEmpty(a)||G(r)||c(a)>=r};g.$observe("min",function(a){r=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var q;h.$validators.max=function(a){return h.$isEmpty(a)||G(q)||c(a)<=q};g.$observe("max",function(a){q=n(a);h.$validate()})}h.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==
a.getTime()}}}function nd(b,a,c,d){(d.$$hasNativeValidators=O(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function od(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw E("ngModel")("constexpr",c,d);return b(a)}return e}function md(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Jb(b,"-"):"";a(fb+b,!0===c);a(pd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=
b.unset,k=b.parentForm,l=b.$animate;f[pd]=!(f[fb]=e.hasClass(fb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),qd(d.$pending)&&(d.$pending=t));Ra(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(rd,!0),d.$valid=d.$invalid=t,c("",null)):(a(rd,!1),d.$valid=qd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:
d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function qd(b){if(b)for(var a in b)return!1;return!0}function ec(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],p=0;p<b.length;p++)if(e==b[p])continue a;c.push(e)}return c}function e(a){if(!B(a)){if(u(a))return a.split(" ");if(O(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||
{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!p){var m=k(l,1);h.$addClass(m)}else if(!oa(b,p)){var r=e(p),m=d(l,r),l=d(r,l),m=k(m,1),l=k(l,-1);m&&m.length&&c.addClass(g,m);l&&l.length&&c.removeClass(g,l)}}p=na(b)}var p;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=
e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var zf=/^\/(.+)\/([a-z]*)$/,H=function(b){return u(b)?b.toLowerCase():b},Gb=Object.prototype.hasOwnProperty,ob=function(b){return u(b)?b.toUpperCase():b},Da,C,ja,Ua=[].slice,lf=[].splice,Af=[].push,Fa=Object.prototype.toString,Ta=E("ng"),ya=R.angular||(R.angular={}),Wa,gb=0;Da=X.documentMode;z.$inject=[];Pa.$inject=[];var B=Array.isArray,V=function(b){return u(b)?b.trim():b},Va=function(){if(y(Va.isActive_))return Va.isActive_;
var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Va.isActive_=b},lb=["ng-","data-ng-","ng:","x-ng-"],Id=/[A-Z]/g,qc=!1,Kb,ia=1,jb=3,Md={full:"1.3.0-rc.5",major:1,minor:3,dot:0,codeName:"impossible-choreography"};P.expando="ng339";var tb=P.cache={},cf=1;P._data=function(b){return this.cache[b[this.expando]]||{}};var Ye=/([\:\-\_]+(.))/g,Ze=/^moz([A-Z])/,Bf={mouseleave:"mouseout",mouseenter:"mouseover"},Nb=E("jqLite"),bf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Mb=/<|&#?\w+;/,$e=/<([\w:]+)/,af=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ha=P.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),P(R).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?C(this[b]):C(this[this.length+b])},length:0,push:Af,sort:[].sort,splice:[].splice},vb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){vb[H(b)]=b});var Ic={};q("input select option textarea button form details".split(" "),
function(b){Ic[b]=!0});var Jc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Pb,removeData:rb},function(b,a){P[a]=b});q({data:Pb,inheritedData:ub,scope:function(b){return C.data(b,"$scope")||ub(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return C.data(b,"$isolateScope")||C.data(b,"$isolateScopeNoTemplate")},controller:Ec,injector:function(b){return ub(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Qb,
css:function(b,a,c){a=Xa(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=H(a);if(vb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||z).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(G(b)){var d=a.nodeType;return d===ia||d===jb?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(G(a)){if(b.multiple&&"select"===ma(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(G(a))return b.innerHTML;qb(b,!0);b.innerHTML=a},empty:Fc},function(b,a){P.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Fc&&(2==b.length&&b!==Qb&&b!==Ec?a:d)===t){if(O(a)){for(e=0;e<g;e++)if(b===Pb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:rb,on:function a(c,d,e,f){if(y(f))throw Nb("onargs");if(Ac(c)){var g=sb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=ef(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Bf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
h,!1),l=f[d]);l.push(e)}}},off:Dc,one:function(a,c,d){a=C(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;qb(a);q(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){a.nodeType===ia&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ia||11===d){c=new P(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ia){var d=a.firstChild;q(new P(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=C(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Gc,detach:function(a){Gc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new P(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Sb,removeClass:Rb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=
d;G(f)&&(f=!Qb(a,c));(f?Sb:Rb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ob,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=sb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:z,type:g,target:a},c.type&&(e=w(e,c)),c=na(h),f=d?[e].concat(d):[e],q(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){P.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)G(g)?(g=a(this[h],c,e,f),y(g)&&(g=C(g))):Cc(g,a(this[h],c,e,f));return y(g)?g:this};P.prototype.bind=P.prototype.on;P.prototype.unbind=P.prototype.off});Ya.prototype={put:function(a,
c){this[Ja(a,this.nextUid)]=c},get:function(a){return this[Ja(a,this.nextUid)]},remove:function(a){var c=this[a=Ja(a,this.nextUid)];delete this[a];return c}};var Lc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gf=/,/,hf=/^\s*(_?)(\S+?)\1\s*$/,Kc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,za=E("$injector");Ib.$$annotate=Tb;var Cf=E("$animate"),ye=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Cf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=Object.create(null);q((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});q(c.classes,function(a,c){var g=
f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length&&d,e.length&&e]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){l||(l=a.defer(),d(function(){l.resolve();l=null}));return l.promise}var l;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return k()},leave:function(a){a.remove();return k()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){return this.setClass(a,c,[])},$$addClassImmediately:function(a,c){a=C(a);c=
u(c)?c:B(c)?c.join(" "):"";q(a,function(a){Sb(a,c)})},removeClass:function(a,c){return this.setClass(a,[],c)},$$removeClassImmediately:function(a,c){a=C(a);c=u(c)?c:B(c)?c.join(" "):"";q(a,function(a){Rb(a,c)});return k()},setClass:function(a,c,d,e){var l=this,q=!1;a=C(a);if(e)return l.$$addClassImmediately(a,c),l.$$removeClassImmediately(a,d),k();e=a.data("$$animateClasses");e||(e={classes:{}},q=!0);var t=e.classes;c=B(c)?c:c.split(" ");d=B(d)?d:d.split(" ");h(t,c,!0);h(t,d,!1);q&&(e.promise=f(function(c){var d=
a.data("$$animateClasses");a.removeData("$$animateClasses");if(d=d&&g(a,d))d[0]&&l.$$addClassImmediately(a,d[0]),d[1]&&l.$$removeClassImmediately(a,d[1]);c()}),a.data("$$animateClasses",e));return e.promise},enabled:z,cancel:z}}]}],fa=E("$compile");sc.$inject=["$provide","$$sanitizeUriProvider"];var kf=/^(x[\:\-_]|data[\:\-_])/i,Xb=E("$interpolate"),Df=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,of={http:80,https:443,ftp:21},ab=E("$location"),Ef={$$html5:!1,$$replace:!1,absUrl:zb("$$absUrl"),url:function(a){if(G(a))return this.$$url;
a=Df.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:zb("$$protocol"),host:zb("$$host"),port:zb("$$port"),path:Xc("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(u(a)||aa(a))a=a.toString(),this.$$search=oc(a);else if(O(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw ab("isrcharg");
break;default:G(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Xc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Wc,ac,$b],function(a){a.prototype=Object.create(Ef);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==$b||!this.$$html5)throw ab("nostate");this.$$state=G(c)?null:c;return this}});var la=E("$parse"),Ff=Function.prototype.call,Gf=Function.prototype.apply,
Hf=Function.prototype.bind,Fb=Object.create(null);q({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Fb[c]=a});Fb["this"]=function(a){return a};Fb["this"].sharedGetter=!0;var fc=w(Object.create(null),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,
c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),If={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},cc=function(a){this.options=a};cc.prototype={constructor:cc,lex:function(a){this.text=a;this.index=0;this.ch=t;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&
this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=fc[this.ch],e=fc[a],f=fc[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),
this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||
"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=H(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&
this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=t));if(e)for(f=
this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}this.tokens.push({index:d,text:c,fn:Fb[c]||Zc(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,
this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=If[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});bb.prototype=
{constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&
(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],
g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return w(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){return w(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=
[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=[],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return w(function(c,h){var k=a(c,h);if(f){f[0]=
k;for(k=e.length;k--;)f[k+1]=e[k](c,h);return d.apply(t,f)}return d(k)},{constant:!d.$stateful&&c.every(bc),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=
this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return w(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=
this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},
unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=Zc(d,this.options,c);return w(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return La(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=
a(e,f),h=d(e,f);ka(h,c);return g?va(g[h],c):t},{assign:function(e,f,g){var h=ka(d(e,g),c);(g=va(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):g,l=a(g,h,k)||z;if(f)for(var p=d.length;p--;)f[p]=va(d[p](g,h),e);va(k,e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Ff||l===Gf||l===Hf)throw la("isecff",
e);}k=l.apply?l.apply(k,f):l(f[0],f[1],f[2],f[3],f[4]);return va(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return w(function(c,e){for(var f=[],g=0,h=a.length;g<h;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(bc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||
d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(bc),inputs:c})}};var $c=Object.create(null),wa=E("$sce"),ha={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},fa=E("$compile"),Y=X.createElement("a"),cd=ua(R.location.href,!0);zc.$inject=["$provide"];dd.$inject=["$locale"];fd.$inject=["$locale"];var id=".",xf={yyyy:Z("FullYear",
4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Bb("Month"),MMM:Bb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Bb("Day"),EEE:Bb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ab(Math[0<a?"floor":"ceil"](a/60),
2)+Ab(Math.abs(a%60),2))},ww:kd(2),w:kd(1)},wf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,vf=/^\-?\d+$/;ed.$inject=["$locale"];var tf=ba(H),uf=ba(ob);gd.$inject=["$parse"];var Pd=ba({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Fa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),pb={};q(vb,function(a,c){if("multiple"!=a){var d=
ra("ng-"+c);pb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(Jc,function(a,c){pb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(zf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=ra("ng-"+a);pb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;
"href"===a&&"[object SVGAnimatedString]"===Fa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Da&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var cb={$addControl:z,$$renameControl:function(a,c){a.$name=c},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};ld.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var sd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":
"E",controller:ld,compile:function(a){a.addClass(Ma).addClass(fb);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,p=h.$name;p&&(La(a,p,h,p),g.$observe(g.name?"name":"ngForm",function(c){p!==c&&(La(a,p,t,p),p=c,La(a,p,h,p),
l.$$renameControl(h,p))}));if(l!==cb)d.on("$destroy",function(){l.$removeControl(h);p&&La(a,p,t,p);w(h,cb)})}}}}}]},Qd=sd(),ce=sd(!0),yf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Jf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Kf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Lf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,td=/^(\d{4})-(\d{2})-(\d{2})$/,ud=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
gc=/^(\d{4})-W(\d\d)$/,vd=/^(\d{4})-(\d\d)$/,wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mf=/(\s+|^)default(\s+|$)/,Eb=new E("ngModel"),xd={text:function(a,c,d,e,f,g){db(a,c,d,e,f,g);dc(e)},date:eb("date",td,Db(td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":eb("datetimelocal",ud,Db(ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:eb("time",wd,Db(wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:eb("week",gc,function(a,c){if(ca(a))return a;if(u(a)){gc.lastIndex=0;var d=
gc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=jd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:eb("month",vd,Db(vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){nd(a,c,d,e);db(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Lf.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!aa(a))throw Eb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||G(h)||a>=h};d.$observe("min",function(a){y(a)&&!aa(a)&&(a=parseFloat(a,10));h=aa(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||G(k)||a<=k};d.$observe("max",function(a){y(a)&&!aa(a)&&(a=parseFloat(a,10));k=aa(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){db(a,c,d,e,f,g);dc(e);e.$$parserName="url";e.$validators.url=
function(a){return e.$isEmpty(a)||Jf.test(a)}},email:function(a,c,d,e,f,g){db(a,c,d,e,f,g);dc(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Kf.test(a)}},radio:function(a,c,d,e){G(d.name)&&c.attr("name",++gb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=od(k,a,"ngTrueValue",d.ngTrueValue,!0),p=od(k,a,"ngFalseValue",
d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return oa(a,l)});e.$parsers.push(function(a){return a?l:p})},hidden:z,button:z,submit:z,reset:z,file:z},tc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(xd[H(h.type)]||xd.text)(f,g,h,k[0],c,a,d,e)}}}}],fb="ng-valid",
pd="ng-invalid",Ma="ng-pristine",Cb="ng-dirty",rd="ng-pending",Nf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,p){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
t;this.$name=p(d.name||"",!1)(a);var n=f(d.ngModel),s=null,m=this,r=function(){var c=n(a);m.$options&&m.$options.getterSetter&&A(c)&&(c=c());return c},L=function(c){var d;m.$options&&m.$options.getterSetter&&A(d=n(a))?d(m.$modelValue):n.assign(a,m.$modelValue)};this.$$setOptions=function(a){m.$options=a;if(!(n.assign||a&&a.getterSetter))throw Eb("nonassign",d.ngModel,qa(e));};this.$render=z;this.$isEmpty=function(a){return G(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||cb,
x=0;md({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Cb);g.addClass(e,Ma)};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(s);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};
this.$validate=function(){aa(m.$modelValue)&&isNaN(m.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;q(m.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(q(m.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;q(m.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!A(k.then))throw Eb("$asyncValidators",k);h(g,t);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},
z):k(!0)}function h(a,c){p===x&&m.$setValidity(a,c)}function k(a){p===x&&e(a)}x++;var p=x;(function(a){var c=m.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return q(m.$validators,function(a,c){h(c,null)}),q(m.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(s);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&(m.$dirty=!0,m.$pristine=
!1,g.removeClass(e,Ma),g.addClass(e,Cb),F.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=m.$$lastCommittedViewValue,c=a,d=G(c)?t:!0;if(d)for(var e=0;e<m.$parsers.length;e++)if(c=m.$parsers[e](c),G(c)){d=!1;break}aa(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=r());var f=m.$modelValue,g=m.$options&&m.$options.allowInvalid;g&&(m.$modelValue=c,m.$modelValue!==f&&m.$$writeModelToScope());m.$$runValidators(d,c,a,function(a){g||(m.$modelValue=a?c:t,m.$modelValue!==
f&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){L(m.$modelValue);q(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,aa(e)?d=e:aa(e[c])?d=e[c]:aa(e["default"])&&(d=e["default"]));h.cancel(s);d?s=h(function(){m.$commitViewValue()},d):k.$$phase?m.$commitViewValue():
a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var a=r();if(a!==m.$modelValue){m.$modelValue=a;for(var c=m.$formatters,d=c.length,e=a;d--;)e=c[d](e);m.$viewValue!==e&&(m.$viewValue=m.$$lastCommittedViewValue=e,m.$render(),m.$$runValidators(t,a,e,z))}return a})}],re=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Nf,priority:1,compile:function(a){a.addClass(Ma).addClass("ng-untouched").addClass(fb);return{pre:function(a,d,e,f){var g=f[0],h=
f[1]||cb;g.$$setOptions(f[2]&&f[2].$options);h.$addControl(g);e.$observe("name",function(a){g.$name!==a&&h.$$renameControl(g,a)});a.$on("$destroy",function(){h.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},te=ba({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){u(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw E("ngPattern")("noregexp",g,a,qa(c));f=a||t;e.$validate()});e.$validators.pattern=
function(a){return e.$isEmpty(a)||G(f)||f.test(a)}}}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=$(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=
f}}}}},se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?V(f):f;e.$parsers.push(function(a){if(!G(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(g?V(a):a)});return c}});e.$formatters.push(function(a){return B(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},Of=/^(true|false|\d+)$/,ue=function(){return{restrict:"A",priority:100,compile:function(a,c){return Of.test(c.ngValue)?function(a,
c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Mf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Vd=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],Xd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],Wd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Yd=ec("",!0),$d=ec("Odd",0),Zd=ec("Even",1),ae=Ea({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],yc={},Pf={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ra("ng-"+a);yc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};Pf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ee=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=nb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],fe=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ya.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,s,m,q){var t=0,F,x,v,w=function(){x&&(x.remove(),x=null);F&&(F.$destroy(),
F=null);v&&(d.leave(v).then(function(){x=null}),x=v,v=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(l)||l&&!f.$eval(l)||c()},s=++t;e?(a(e,!0).then(function(a){if(s===t){var c=f.$new();m.template=a;a=q(c,function(a){w();d.enter(a,null,g).then(h)});F=c;v=a;F.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){s===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),m.template=null)})}}}}],we=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Bc(f.template,X).childNodes)(c,function(a){d.append(a)},t,t,d)):(d.html(f.template),a(d.contents())(c))}}}],ge=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),he=Ea({terminal:!0,priority:1E3}),ie=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,p=e.$eval(k)||
{},n={},s=c.startSymbol(),m=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(g,function(a,c){r.test(c)&&(p[H(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(p,function(a,e){n[e]=c(a.replace(d,s+h+"-"+l+m))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in p||(c=a.pluralCat(c-l));return n[c](e)},function(a){f.text(a)})}}}],je=["$parse","$animate",function(a,c){var d=E("ngRepeat"),e=function(a,c,d,e,l,p,n){a[d]=e;l&&(a[l]=p);a.$index=c;a.$first=0===c;a.$last=c===
n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=X.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var p=l[1],n=l[2],s=l[3],m=l[4],l=p.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",p);var r=l[3]||l[1],y=
l[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))throw d("badident",s);var w,x,v,E,z={$id:Ja};m?w=a(m):(v=function(a,c){return Ja(c)},E=function(a){return a});return function(a,f,g,l,m){w&&(x=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return w(a,z)});var p=Object.create(null);a.$watchCollection(n,function(g){var l,n,w=f[0],I,F=Object.create(null),z,G,D,B,S,u,A;s&&(a[s]=g);if(Na(g))S=g,n=x||v;else{n=x||E;
S=[];for(A in g)g.hasOwnProperty(A)&&"$"!=A.charAt(0)&&S.push(A);S.sort()}z=S.length;A=Array(z);for(l=0;l<z;l++)if(G=g===S?l:S[l],D=g[G],B=n(G,D,l),p[B])u=p[B],delete p[B],F[B]=u,A[l]=u;else{if(F[B])throw q(A,function(a){a&&a.scope&&(p[a.id]=a)}),d("dupes",h,B,pa(D));A[l]={id:B,scope:t,clone:t};F[B]=!0}for(I in p){u=p[I];B=nb(u.clone);c.leave(B);if(B[0].parentNode)for(l=0,n=B.length;l<n;l++)B[l].$$NG_REMOVED=!0;u.scope.$destroy()}for(l=0;l<z;l++)if(G=g===S?l:S[l],D=g[G],u=A[l],u.scope){I=w;do I=I.nextSibling;
while(I&&I.$$NG_REMOVED);u.clone[0]!=I&&c.move(nb(u.clone),null,C(w));w=u.clone[u.clone.length-1];e(u.scope,l,r,D,y,G,z)}else m(function(a,d){u.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,C(w));w=f;u.clone=a;F[u.id]=u;e(u.scope,l,r,D,y,G,z)});p=F})}}}}],ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide","ng-hide-animate")})}}}],de=["$animate",function(a){return{restrict:"A",multiElement:!0,
link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide","ng-hide-animate")})}}}],le=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),me=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],p=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=
k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var r=nb(h[d].clone);l[d].$destroy();(k[d]=a.leave(r)).then(p(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],ne=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+
d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),oe=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),qe=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw E("ngTransclude")("orphan",qa(c));f(function(a){c.empty();c.append(a)})}}),Rd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],yd=E("ngOptions"),pe=ba({restrict:"A",terminal:!0}),Sd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:z};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,l={},p=e,n;k.databound=d.ngModel;
k.init=function(a,c,d){p=a;n=d};k.addOption=function(c,d){Ia(c,'"option value"');l[c]=!0;p.$viewValue==c&&(a.val(c),n.parent()&&n.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],p.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ja(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=
z})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(u.parent()&&u.remove(),c.val(a),""===a&&z.prop("selected",!0)):G(a)&&z?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){u.parent()&&u.remove();d.$setViewValue(c.val())})})}function p(a,c,d){var e;d.$render=function(){var a=new Ya(d.$viewValue);q(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){oa(e,d.$viewValue)||(e=na(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(a,c,d){R[u]=d;F&&(R[F]=c);return a(e,R)}function k(a){var c;if(m)if(!C&&H&&B(a)){c=new Ya([]);for(var d=0;d<a.length;d++)c.put(h(H,null,a[d]),!0)}else c=new Ya(a);else!A&&H&&(a=h(H,null,a));return function(d,e){var f;f=A?A:H?H:D;return m?y(c.remove(h(f,d,e))):a==h(f,d,e)}}function l(){x||(e.$$postDigest(p),x=!0)}function p(){x=
!1;var a={"":[]},c=[""],d,l,n,q,r;n=g.$viewValue;q=M(e)||[];var t=F?hc(q):q,u,A,C,B,D;B=k(n);r=!1;var H;for(D=0;C=t.length,D<C;D++){u=D;if(F&&(u=t[D],"$"===u.charAt(0)))continue;A=q[u];d=h(G,u,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=B(u,A);r=r||d;u=h(z,u,A);u=y(u)?u:"";l.push({id:F?t[D]:D,label:u,selected:d})}m||(w||null===n?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));B=0;for(t=c.length;B<t;B++){d=c[B];l=a[d];P.length<=B?(n={element:E.clone().attr("label",
d),label:l.label},q=[n],P.push(q),f.append(n.element)):(q=P[B],n=q[0],n.label!=d&&n.element.attr("label",n.label=d));u=null;D=0;for(C=l.length;D<C;D++)d=l[D],(r=q[D+1])?(u=r.element,r.label!==d.label&&u.text(r.label=d.label),r.id!==d.id&&u.val(r.id=d.id),u[0].selected!==d.selected&&(u.prop("selected",r.selected=d.selected),Da&&u.prop("selected",r.selected))):(""===d.id&&w?H=w:(H=v.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),q.push({element:H,label:d.label,
id:d.id,selected:d.selected}),s.addOption(d.label,H),u?u.after(H):n.element.append(H),u=H);for(D++;q.length>D;)d=q.pop(),s.removeOption(d.label),d.element.remove()}for(;P.length>B;)P.pop()[0].element.remove()}var n;if(!(n=r.match(d)))throw yd("iexp",r,qa(f));var z=c(n[2]||n[1]),u=n[4]||n[6],C=/ as /.test(n[0])&&n[1],A=C?c(C):null,F=n[5],G=c(n[3]||""),D=c(n[2]?n[1]:u),M=c(n[7]),O=n[8],H=O?c(n[8]):null,P=[[{element:f,label:""}]],R={};if(H&&A)throw yd("trkslct",C,O);w&&(a(w)(e),w.removeClass("ng-scope"),
w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=M(e)||[],c;if(m)c=[],q(f.val(),function(d){c.push("?"===d?t:""===d?null:h(A?A:D,d,a[d]))});else{var d=f.val();c="?"===d?t:""===d?null:h(A?A:D,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(M,l);e.$watchCollection(function(){var a=M(e),c;if(a&&B(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(z,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(z,d,a[d]));return c},l);m&&e.$watchCollection(function(){return g.$modelValue},
l)}if(k[1]){var s=k[0];k=k[1];var m=h.multiple,r=h.ngOptions,w=!1,z,x=!1,v=C(X.createElement("option")),E=C(X.createElement("optgroup")),u=v.clone();h=0;for(var A=g.children(),O=A.length;h<O;h++)if(""===A[h].value){z=w=A.eq(h);break}s.init(k,w,u);m&&(k.$isEmpty=function(a){return!a||0===a.length});r?n(e,g,k):m?p(e,g,k):l(e,g,k,s)}}}}],Ud=["$interpolate",function(a){var c={addOption:z,removeOption:z};return{restrict:"E",priority:100,compile:function(d,e){if(G(e.value)){var f=a(d.text(),!0);f||e.$set("value",
d.text())}return function(a,d,e){var l=d.parent(),p=l.data("$selectController")||l.parent().data("$selectController");p&&p.databound||(p=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&p.removeOption(c);p.addOption(a,d)}):p.addOption(e.value,d);d.on("$destroy",function(){p.removeOption(e.value)})}}}}],Td=ba({restrict:"E",terminal:!1});R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Jd(),Ld(ya),C(X).ready(function(){Fd(X,pc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.3.0-rc.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,e,B){'use strict';function u(q,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,g,x){function y(){k&&(f.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=f.leave(m),k.then(function(){k=null}),m=null)}function w(){var c=q.current&&q.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),g=q.current;m=x(c,function(c){f.enter(c,null,m||b).then(function(){!e.isDefined(s)||s&&!a.$eval(s)||h()});y()});l=g.scope=c;l.$emit("$viewContentLoaded");
l.$eval(v)}else y()}var l,m,k,s=c.autoscroll,v=c.onload||"";a.$on("$routeChangeSuccess",w);w()}}}function z(e,h,f){return{restrict:"ECA",priority:-400,link:function(a,b){var c=f.current,g=c.locals;b.html(g.$template);var x=e(b.contents());c.controller&&(g.$scope=a,g=h(c.controller,g),c.controllerAs&&(a[c.controllerAs]=g),b.data("$ngControllerController",g),b.children().data("$ngControllerController",g));x(a)}}}p=e.module("ngRoute",["ng"]).provider("$route",function(){function q(a,b){return e.extend(new (e.extend(function(){},
{prototype:a})),b)}function h(a,e){var c=e.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",c?"i":"");return g}var f={};this.when=function(a,b){f[a]=e.extend({reloadOnSearch:!0},b,a&&h(a,b));if(a){var c=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[c]=e.extend({redirectTo:a},h(c,b))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,b,c,g,h,p,w){function l(b){var d=r.current;(u=(n=k())&&d&&n.$$route===d.$$route&&e.equals(n.pathParams,d.pathParams)&&!n.reloadOnSearch&&!v)||!d&&!n||a.$broadcast("$routeChangeStart",n,d).defaultPrevented&&
b&&b.preventDefault()}function m(){var t=r.current,d=n;if(u)t.params=d.params,e.copy(t.params,c),a.$broadcast("$routeUpdate",t);else if(d||t)v=!1,(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(s(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),g.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?h.get(d):h.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&
(b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=w.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=c,b=p(c)));e.isDefined(b)&&(a.$template=b);return g.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,t))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,t,b)})}function k(){var a,d;e.forEach(f,function(c,g){var f;if(f=!d){var h=b.path();f=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=
1,m=h.length;k<m;++k){var n=f[k-1],p=h[k];n&&p&&(l[n.name]=p)}f=l}else f=null;else f=null;f=a=f}f&&(d=q(c,{params:e.extend({},b.search(),a),pathParams:a}),d.$$route=c)});return d||f[null]&&q(f[null],{params:{},pathParams:{}})}function s(a,b){var c=[];e.forEach((a||"").split(":"),function(a,e){if(0===e)c.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var v=!1,n,u,r={routes:f,reload:function(){v=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&
this.current.$$route){var c={},f=this;e.forEach(Object.keys(a),function(b){f.current.pathParams[b]||(c[b]=a[b])});a=e.extend({},this.current.params,a);b.path(s(this.current.$$route.originalPath,a));b.search(e.extend({},b.search(),c))}else throw A("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return r}]});var A=e.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",u);p.directive("ngView",z);u.$inject=["$route",
"$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
/*!
    localForage -- Offline Storage, Improved
    Version 0.1.0
    http://mozilla.github.io/localForage
    (c) 2013-2014 Mozilla, Apache License 2.0
*/
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)k.push("exports"===i[l]?g={}:b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/cast",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.cast=b}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:void(c[a]=b)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a="Promise"in window&&"cast"in window.Promise&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var a;return new window.Promise(function(b){a=b}),f(a)}();a||(window.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./cast","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(a){if(!w(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof j))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],k(a,this)}function k(a,b){function c(a){p(b,a)}function d(a){r(b,a)}try{a(c,d)}catch(e){d(e)}}function l(a,b,c,d){var e,f,g,h,i=w(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;o(b,e)||(i&&g?p(b,e):h?r(b,f):a===F?p(b,e):a===G&&r(b,e))}function m(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+F]=c,e[f+G]=d}function n(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],l(b,c,d,f);a._subscribers=null}function o(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(v(b)&&(d=b.then,w(d)))return d.call(b,function(d){return c?!0:(c=!0,void(b!==d?p(a,d):q(a,d)))},function(b){return c?!0:(c=!0,void r(a,b))}),!0}catch(e){return c?!0:(r(a,e),!0)}return!1}function p(a,b){a===b?q(a,b):o(a,b)||q(a,b)}function q(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(s,a))}function r(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(t,a))}function s(a){n(a,a._state=F)}function t(a){n(a,a._state=G)}var u=a.config,v=(a.configure,b.objectOrFunction),w=b.isFunction,x=(b.now,c.cast),y=d.all,z=e.race,A=f.resolve,B=g.reject,C=h.asap;u.async=C;var D=void 0,E=0,F=1,G=2;j.prototype={constructor:j,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;u.async(function(){l(c._state,d,e[c._state-1],c._detail)})}else m(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},j.all=y,j.cast=x,j.race=z,j.resolve=A,j.reject=B,i.Promise=j}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}(),function(){"use strict";function a(a){if(a)for(var b in j)void 0!==a[b]&&(j[b]=a[b]);return new h(function(a,b){var c=k.open(j.name,j.version);c.onerror=function(){b(c.error.name)},c.onupgradeneeded=function(){c.result.createObjectStore(j.storeName)},c.onsuccess=function(){i=c.result,a()}})}function b(a,b){var c=this;return new h(function(d,e){c.ready().then(function(){var c=i.transaction(j.storeName,"readonly").objectStore(j.storeName),f=c.get(a);f.onsuccess=function(){var a=f.result;void 0===a&&(a=null),b&&b(a),d(a)},f.onerror=function(){e(f.error.name)}})})}function c(a,b,c){var d=this;return new h(function(e,f){d.ready().then(function(){var d=i.transaction(j.storeName,"readwrite").objectStore(j.storeName);void 0===b&&(b=null);var g=d.put(b,a);g.onsuccess=function(){c&&c(b),e(b)},g.onerror=function(){f(g.error.name)}})})}function d(a,b){var c=this;return new h(function(d,e){c.ready().then(function(){var c=i.transaction(j.storeName,"readwrite").objectStore(j.storeName),f=c["delete"](a);f.onsuccess=function(){b&&b(),d()},f.onerror=function(){e(f.error.name)}})})}function e(a){var b=this;return new h(function(c,d){b.ready().then(function(){var b=i.transaction(j.storeName,"readwrite").objectStore(j.storeName),e=b.clear();e.onsuccess=function(){a&&a(),c()},e.onerror=function(){d(e.error.name)}})})}function f(a){var b=this;return new h(function(c,d){b.ready().then(function(){var b=i.transaction(j.storeName,"readonly").objectStore(j.storeName),e=b.count();e.onsuccess=function(){a&&a(e.result),c(e.result)},e.onerror=function(){d(e.error.name)}})})}function g(a,b){var c=this;return new h(function(d,e){return 0>a?(b&&b(null),void d(null)):void c.ready().then(function(){var c=i.transaction(j.storeName,"readonly").objectStore(j.storeName),f=!1,g=c.openCursor();g.onsuccess=function(){var c=g.result;return c?void(0===a?(b&&b(c.key),d(c.key)):f?(b&&b(c.key),d(c.key)):(f=!0,c.advance(a))):(b&&b(null),void d(null))},g.onerror=function(){e(g.error.name)}})})}var h=window.Promise,i=null,j={name:"localforage",storeName:"keyvaluepairs",version:1},k=k||window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB;if(k){var l={_driver:"asyncStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g};"function"==typeof define&&define.amd?define("asyncStorage",function(){return l}):"undefined"!=typeof module&&module.exports?module.exports=l:this.asyncStorage=l}}.call(this),function(){"use strict";function a(a){if(a)for(var b in l)void 0!==a[b]&&(l[b]=a[b]);return k=l.name+"/",m.resolve()}function b(a){var b=this;return new m(function(c){b.ready().then(function(){n.clear(),a&&a(),c()})})}function c(a,b){var c=this;return new m(function(d,e){c.ready().then(function(){try{var c=n.getItem(k+a);c&&(c=g(c)),b&&b(c),d(c)}catch(f){e(f)}})})}function d(a,b){var c=this;return new m(function(d){c.ready().then(function(){var c=n.key(a);c&&(c=c.substring(k.length)),b&&b(c),d(c)})})}function e(a){var b=this;return new m(function(c){b.ready().then(function(){var b=n.length;a&&a(b),c(b)})})}function f(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.removeItem(k+a),b&&b(),d()})})}function g(a){if(a.substring(0,q)!==p)return JSON.parse(a);for(var b=a.substring(C),c=a.substring(q,C),d=new ArrayBuffer(2*b.length),e=new Uint16Array(d),f=b.length-1;f>=0;f--)e[f]=b.charCodeAt(f);switch(c){case r:return d;case s:return new Blob([d]);case t:return new Int8Array(d);case u:return new Uint8Array(d);case v:return new Uint8ClampedArray(d);case w:return new Int16Array(d);case y:return new Uint16Array(d);case x:return new Int32Array(d);case z:return new Uint32Array(d);case A:return new Float32Array(d);case B:return new Float64Array(d);default:throw new Error("Unkown type: "+c)}}function h(a){var b="",c=new Uint16Array(a);try{b=String.fromCharCode.apply(null,c)}catch(d){for(var e=0;e<c.length;e++)b+=String.fromCharCode(c[e])}return b}function i(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=p;a instanceof ArrayBuffer?(d=a,e+=r):(d=a.buffer,"[object Int8Array]"===c?e+=t:"[object Uint8Array]"===c?e+=u:"[object Uint8ClampedArray]"===c?e+=v:"[object Int16Array]"===c?e+=w:"[object Uint16Array]"===c?e+=y:"[object Int32Array]"===c?e+=x:"[object Uint32Array]"===c?e+=z:"[object Float32Array]"===c?e+=A:"[object Float64Array]"===c?e+=B:b(new Error("Failed to get type for BinaryArray")));var f=h(d);b(null,e+f)}else if("[object Blob]"===c){var g=new FileReader;g.onload=function(){var a=h(this.result);b(null,p+s+a)},g.readAsArrayBuffer(a)}else try{b(null,JSON.stringify(a))}catch(i){console.error("Couldn't convert value into a JSON string: ",a),b(i)}}function j(a,b,c){var d=this;return new m(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;i(b,function(b,g){b?f(b):(n.setItem(k+a,g),c&&c(d),e(d))})})})}var k="",l={name:"localforage"},m=window.Promise,n=null;try{n=window.localStorage}catch(o){return}var p="__lfsc__:",q=p.length,r="arbf",s="blob",t="si08",u="ui08",v="uic8",w="si16",x="si32",y="ur16",z="ui32",A="fl32",B="fl64",C=q+r.length,D={_driver:"localStorageWrapper",_initStorage:a,getItem:c,setItem:j,removeItem:f,clear:b,length:e,key:d};"function"==typeof define&&define.amd?define("localStorageWrapper",function(){return D}):"undefined"!=typeof module&&module.exports?module.exports=D:this.localStorageWrapper=D}.call(this),function(){"use strict";function a(a){if(a)for(var b in o)void 0!==a[b]&&(o[b]="string"!=typeof a[b]?a[b].toString():a[b]);return new m(function(a){n=window.openDatabase(o.name,o.version,o.description,l),n.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS "+o.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){a()},null)})})}function b(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var e=c.rows.length?c.rows.item(0).value:null;e&&(e=i(e)),b&&b(e),d(e)},null)})})})}function c(a,b,c){var d=this;return new m(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;j(b,function(b,g){b?f(b):n.transaction(function(b){b.executeSql("INSERT OR REPLACE INTO "+o.storeName+" (key, value) VALUES (?, ?)",[a,g],function(){c&&c(d),e(d)},null)})})})})}function d(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[a],function(){b&&b(),d()},null)})})})}function e(a){var b=this;return new m(function(c){b.ready().then(function(){n.transaction(function(b){b.executeSql("DELETE FROM "+o.storeName,[],function(){a&&a(),c()},null)})})})}function f(a){var b=this;return new m(function(c){b.ready().then(function(){n.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+o.storeName,[],function(b,d){var e=d.rows.item(0).c;a&&a(e),c(e)},null)})})})}function g(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var e=c.rows.length?c.rows.item(0).key:null;b&&b(e),d(e)},null)})})})}function h(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=k[c[b]>>2],d+=k[(3&c[b])<<4|c[b+1]>>4],d+=k[(15&c[b+1])<<2|c[b+2]>>6],d+=k[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function i(a){if(a.substring(0,q)!==p)return JSON.parse(a);var b,c,d,e,f,g=a.substring(C),h=a.substring(q,C),i=.75*g.length,j=g.length,l=0;"="===g[g.length-1]&&(i--,"="===g[g.length-2]&&i--);var m=new ArrayBuffer(i),n=new Uint8Array(m);for(b=0;j>b;b+=4)c=k.indexOf(g[b]),d=k.indexOf(g[b+1]),e=k.indexOf(g[b+2]),f=k.indexOf(g[b+3]),n[l++]=c<<2|d>>4,n[l++]=(15&d)<<4|e>>2,n[l++]=(3&e)<<6|63&f;switch(h){case r:return m;case s:return new Blob([m]);case t:return new Int8Array(m);case u:return new Uint8Array(m);case v:return new Uint8ClampedArray(m);case w:return new Int16Array(m);case y:return new Uint16Array(m);case x:return new Int32Array(m);case z:return new Uint32Array(m);case A:return new Float32Array(m);case B:return new Float64Array(m);default:throw new Error("Unkown type: "+h)}}function j(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=p;a instanceof ArrayBuffer?(d=a,e+=r):(d=a.buffer,"[object Int8Array]"===c?e+=t:"[object Uint8Array]"===c?e+=u:"[object Uint8ClampedArray]"===c?e+=v:"[object Int16Array]"===c?e+=w:"[object Uint16Array]"===c?e+=y:"[object Int32Array]"===c?e+=x:"[object Uint32Array]"===c?e+=z:"[object Float32Array]"===c?e+=A:"[object Float64Array]"===c?e+=B:b(new Error("Failed to get type for BinaryArray")));var f=h(d);b(null,e+f)}else if("[object Blob]"===c){var g=new FileReader;g.onload=function(){var a=h(this.result);b(null,p+s+a)},g.readAsArrayBuffer(a)}else try{b(null,JSON.stringify(a))}catch(i){console.error("Couldn't convert value into a JSON string: ",a),b(i)}}var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=4980736,m=window.Promise,n=null,o={description:"",name:"localforage",storeName:"keyvaluepairs",version:"1.0"},p="__lfsc__:",q=p.length,r="arbf",s="blob",t="si08",u="ui08",v="uic8",w="si16",x="si32",y="ur16",z="ui32",A="fl32",B="fl64",C=q+r.length;if(window.openDatabase){var D={_driver:"webSQLStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g};"function"==typeof define&&define.amd?define("webSQLStorage",function(){return D}):"undefined"!=typeof module&&module.exports?module.exports=D:this.webSQLStorage=D}}.call(this),function(){"use strict";var a=window.Promise,b=1,c=2,d=3,e=d;"function"==typeof define&&define.amd?e=b:"undefined"!=typeof module&&module.exports&&(e=c);var f,g=g||window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB,h=this,i={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage",driver:function(){return this._driver||null},_ready:a.reject(new Error("setDriver() wasn't called")),setDriver:function(d,f){return this._ready=new a(function(a,j){if(!g&&d===i.INDEXEDDB||!window.openDatabase&&d===i.WEBSQL)return f&&f(i),void j(i);if(e===b)require([d],function(b){i._extend(b),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})});else if(e===c){var k;switch(d){case i.INDEXEDDB:k=require("localforage/src/drivers/indexeddb");break;case i.LOCALSTORAGE:k=require("localforage/src/drivers/localstorage");break;case i.WEBSQL:k=require("localforage/src/drivers/websql")}i._extend(k),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})}else i._extend(h[d]),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})}),i._ready},ready:function(){return this._ready},_extend:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}};f=g?i.INDEXEDDB:window.openDatabase?i.WEBSQL:i.LOCALSTORAGE,i.setDriver(f),e===b?define(function(){return i}):e===c?module.exports=i:this.localforage=i}.call(this);
/**
 * copyright: Olivier Combe (https://github.com/ocombe/angular-localForage)
 */

(function (window, angular, undefined) {
    'use strict';

    var angularLocalForage = angular.module('LocalForageModule', ['ng']);
    angularLocalForage.provider('$localForage', function () {
        window.localForageConfig = {
            name: 'lf' // default prefix
        };

        // Send signals for each of the following actions ?
        this.notify = {
            setItem: false,
            removeItem: false
        };

        // Setter for the prefix
        this.setPrefix = function (prefix) {
            if (angular.isDefined(prefix) && prefix !== window.localForageConfig.name) {
                window.localForageConfig.name = prefix;
                localforage._initStorage(window.localForageConfig);
            }
        };

        // Setter for the storage driver
        var setDriver = function (driver) {
            return localforage.setDriver(driver);
        };

        this.setDriver = setDriver;

        // Getter for the storage driver
        var driver = function () {
            return localforage.driver();
        };

        // Setter for notification config, itemSet & itemRemove should be booleans
        this.setNotify = function (itemSet, itemRemove) {
            this.notify = {
                setItem: itemSet,
                removeItem: itemRemove
            };
        };

        this.config = function (config) {
            if (angular.isObject(config)) {
                window.localForageConfig = config;
                if (angular.isDefined(config.driver)) {
                    return setDriver(config.driver);
                } else {
                    return localforage._initStorage(config);
                }
            }
        }

        this.$get = ['$rootScope', '$q', '$parse', function ($rootScope, $q, $parse) {
            var notify = this.notify;
            var watchers = {};

            var prefix = function () {
                return driver() === 'localStorageWrapper' ? 'lfp.' : '';
            }

            var onError = function (data, args, fct, deferred) {
                if (data === 'InvalidStateError' && driver() === 'asyncStorage') {
                    setDriver('localStorageWrapper').then(function () {
                        fct(args).then(function (item) {
                            deferred.resolve(item);
                        }, function (data) {
                            deferred.reject(data);
                        });
                    }, function () {
                        deferred.reject(data);
                    });
                } else {
                    deferred.reject(data);
                }
            }

            // Directly adds a value to storage
            var setItem = function (key, value) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.setItem(prefix() + key, value).then(function success() {
                    if (notify.setItem) {
                        $rootScope.$broadcast('LocalForageModule.setItem', { key: key, newvalue: value, driver: localforage.driver() });
                    }
                    deferred.resolve();
                }, function error(data) {
                    onError(data, args, setItem, deferred);
                });

                return deferred.promise;
            };

            // Directly get a value from storage
            var getItem = function (key) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.getItem(prefix() + key).then(function success(item) {
                    deferred.resolve(item);
                }, function error(data) {
                    onError(data, args, getItem, deferred);
                });
                return deferred.promise;
            };

            // Remove an item from storage
            var removeItem = function (key) {
                var promise = localforage.removeItem(prefix() + key);
                if (notify.setItem) {
                    return promise.then(function (value) {
                        $rootScope.$broadcast('LocalForageModule.removeItem', { key: key, driver: localforage.driver() });
                    });
                } else {
                    return promise;
                }
            };

            // Remove all data for this app from storage (we could use localforage.clear(); but we don't want to remove things without the prefix
            var clear = function () {
                var deferred = $q.defer(),
					args = arguments,
					promises = [];
                getKeys().then(function success(keys) {
                    angular.forEach(keys, function (key) {
                        promises.push(removeItem(key));
                    });

                    $q.all(promises).then(function () {
                        deferred.resolve();
                    });
                }, function error(data) {
                    onError(data, args, clearAll, deferred);
                });
                return deferred.promise;
            }

            // Return the key for item at position n
            var key = function (n) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.key(n).then(function success(key) {
                    deferred.resolve(key);
                }, function error(data) {
                    onError(data, args, key, deferred);
                });
                return deferred.promise;
            };

            var length = function () {
                var deferred = $q.defer(),
					args = arguments; // using $q to avoid using $apply
                localforage.length().then(function success(length) {
                    deferred.resolve(length);
                }, function error(data) {
                    onError(data, args, length, deferred);
                });
                return deferred.promise;
            }

            // Return the list of keys stored for this application
            var getKeys = function () {
                var deferred = $q.defer(),
					args = arguments;
                length().then(function success(length) {
                    var promises = [],
						keys = [],
                        p = prefix();
                    for (var i = 0; i < length; i++) {
                        promises.push(key(i).then(function (key) {
                            if (key.indexOf(p) === 0) {
                                keys.push(key.substr(p.length, key.length));
                            }
                        }));
                    }

                    $q.all(promises).then(function () {
                        deferred.resolve(keys);
                    });
                }, function error(data) {
                    onError(data, args, getKeys, deferred);
                });
                return deferred.promise;
            }

            /**
			 * Bind - let's you directly bind a LocalForage value to a $scope variable
			 * @param {Angular $scope} $scope - the current scope you want the variable available in
			 * @param {String} key - the name of the variable you are binding
			 * @param {String} key - the name of the variable you are binding OR {Object} opts - key and custom options like default value or unique store name
			 * Here are the available options you can set:
			 * * defaultValue: the default value
			 * * storeName: add a custom store key value instead of using the scope variable name
			 * @returns {*} - returns whatever the stored value is
			 */
            var bind = function ($scope, opts) {
                if (angular.isString(opts)) {
                    opts = {
                        key: opts
                    }
                } else if (!angular.isObject(opts) || angular.isUndefined(opts.key)) {
                    throw "You must defined a key to bind";
                }
                var defaultOpts = {
                    defaultValue: '',
                    storeName: ''
                };
                // If no defined options we use defaults otherwise extend defaults
                opts = angular.extend(defaultOpts, opts || {});

                // Set the storeName key for the LocalForage entry
                // use user defined in specified
                var storeName = opts.storeName || opts.key,
					model = $parse(opts.key);

                return getItem(storeName).then(function (item) {
                    if (item) { // If it does exist assign it to the $scope value
                        model.assign($scope, item);
                    } else if (opts.defaultValue) { // If a value doesn't already exist store it as is
                        setItem(storeName, opts.defaultValue);
                    }

                    // Register a listener for changes on the $scope value
                    // to update the localForage value
                    if (angular.isDefined(watchers[opts.key])) {
                        watchers[opts.key]();
                    }

                    watchers[opts.key] = $scope.$watch($parse(opts.key), function (val) {
                        if (angular.isDefined(val)) {
                            setItem(storeName, val);
                        }
                    }, true);
                });
            }

            /**
			 * Unbind - let's you unbind a variable from localForage while removing the value from both
			 * the localForage and the local variable and sets it to null
			 * @param $scope - the scope the variable was initially set in
			 * @param key - the name of the variable you are unbinding
			 * @param storeName - (optional) if you used a custom storeName you will have to specify it here as well
			 */
            var unbind = function ($scope, key, storeName) {
                storeName = storeName || key;
                $parse(key).assign($scope, null);
                if (angular.isDefined(watchers[key])) {
                    watchers[key](); // unwatch
                    delete watchers[key];
                }
                removeItem(storeName);
            }

            return {
                setDriver: setDriver,
                driver: driver,
                getDriver: driver, // deprecated
                setItem: setItem,
                set: setItem, // deprecated
                getItem: getItem,
                get: getItem, // deprecated
                remove: removeItem,
                removeItem: removeItem, // deprecated
                clear: clear,
                clearAll: clear, // deprecated
                key: key,
                getKeyAt: key, // deprecated
                getKeys: getKeys,
                length: length,
                getLength: length, // deprecated
                bind: bind,
                unbind: unbind
            };
        }]
    });

    angularLocalForage.directive('localForage', ['$localForage', function ($localForage) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                var opts = $scope.$eval($attrs.localForage);
                if (angular.isObject(opts) && angular.isDefined(opts.key) && angular.isDefined(opts.storeName)) {
                    $localForage.bind($scope, opts);
                } else {
                    $localForage.bind($scope, $attrs.localForage);
                }
            }
        }
    }]);
})(window, window.angular);
/**
 * Copyright 2012 Tsvetan Tsvetkov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Tsvetan Tsvetkov (tsekach@gmail.com)
 */
(function (win) {
    /*
     Safari native methods required for Notifications do NOT run in strict mode.
     */
    //"use strict";
    var PERMISSION_DEFAULT = "default",
        PERMISSION_GRANTED = "granted",
        PERMISSION_DENIED = "denied",
        PERMISSION = [PERMISSION_GRANTED, PERMISSION_DEFAULT, PERMISSION_DENIED],
        defaultSetting = {
            pageVisibility: false,
            autoClose: 0
        },
        empty = {},
        emptyString = "",
        isSupported = (function () {
            var isSupported = false;
            /*
             * Use try {} catch() {} because the check for IE may throws an exception
             * if the code is run on browser that is not Safar/Chrome/IE or
             * Firefox with html5notifications plugin.
             *
             * Also, we canNOT detect if msIsSiteMode method exists, as it is
             * a method of host object. In IE check for existing method of host
             * object returns undefined. So, we try to run it - if it runs
             * successfully - then it is IE9+, if not - an exceptions is thrown.
             */
            try {
                isSupported = !!(/* Safari, Chrome */win.Notification || /* Chrome & ff-html5notifications plugin */win.webkitNotifications || /* Firefox Mobile */navigator.mozNotification || /* IE9+ */(win.external && win.external.msIsSiteMode() !== undefined));
            } catch (e) { }
            return isSupported;
        }()),
        ieVerification = Math.floor((Math.random() * 10) + 1),
        isFunction = function (value) { return (value && (value).constructor === Function); },
        isString = function (value) { return (value && (value).constructor === String); },
        isObject = function (value) { return (value && (value).constructor === Object); },
        /**
         * Dojo Mixin
         */
        mixin = function (target, source) {
            var name, s;
            for (name in source) {
                s = source[name];
                if (!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))) {
                    target[name] = s;
                }
            }
            return target; // Object
        },
        noop = function () { },
        settings = defaultSetting;
    function getNotification(title, options) {
        var notification;
        if (win.Notification) { /* Safari 6, Chrome (23+) */
            notification = new win.Notification(title, {
                /* The notification's icon - For Chrome in Windows, Linux & Chrome OS */
                icon: isString(options.icon) ? options.icon : options.icon.x32,
                /* The notification’s subtitle. */
                body: options.body || emptyString,
                /*
                    The notification’s unique identifier.
                    This prevents duplicate entries from appearing if the user has multiple instances of your website open at once.
                */
                tag: options.tag || emptyString
            });
        } else if (win.webkitNotifications) { /* FF with html5Notifications plugin installed */
            notification = win.webkitNotifications.createNotification(options.icon, title, options.body);
            notification.show();
        } else if (navigator.mozNotification) { /* Firefox Mobile */
            notification = navigator.mozNotification.createNotification(title, options.body, options.icon);
            notification.show();
        } else if (win.external && win.external.msIsSiteMode()) { /* IE9+ */
            //Clear any previous notifications
            win.external.msSiteModeClearIconOverlay();
            win.external.msSiteModeSetIconOverlay((isString(options.icon) ? options.icon : options.icon.x16), title);
            win.external.msSiteModeActivate();
            notification = {
                "ieVerification": ieVerification + 1
            };
        }
        return notification;
    }
    function getWrapper(notification) {
        return {
            close: function () {
                if (notification) {
                    if (notification.close) {
                        //http://code.google.com/p/ff-html5notifications/issues/detail?id=58
                        notification.close();
                    }
                    else if (notification.cancel) {
                        notification.cancel();
                    } else if (win.external && win.external.msIsSiteMode()) {
                        if (notification.ieVerification === ieVerification) {
                            win.external.msSiteModeClearIconOverlay();
                        }
                    }
                }
            }
        };
    }
    function requestPermission(callback) {
        if (!isSupported) { return; }
        var callbackFunction = isFunction(callback) ? callback : noop;
        if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            /*
             * Chrome 23 supports win.Notification.requestPermission, but it
             * breaks the browsers, so use the old-webkit-prefixed
             * win.webkitNotifications.checkPermission instead.
             *
             * Firefox with html5notifications plugin supports this method
             * for requesting permissions.
             */
            win.webkitNotifications.requestPermission(callbackFunction);
        } else if (win.Notification && win.Notification.requestPermission) {
            win.Notification.requestPermission(callbackFunction);
        }
    }
    function permissionLevel() {
        var permission;
        if (!isSupported) { return; }
        if (win.Notification && win.Notification.permissionLevel) {
            //Safari 6
            permission = win.Notification.permissionLevel();
        } else if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            //Chrome & Firefox with html5-notifications plugin installed
            permission = PERMISSION[win.webkitNotifications.checkPermission()];
        } else if (win.Notification && win.Notification.permission) {
            // Firefox 23+
            permission = win.Notification.permission;
        } else if (navigator.mozNotification) {
            //Firefox Mobile
            permission = PERMISSION_GRANTED;
        } else if (win.external && (win.external.msIsSiteMode() !== undefined)) { /* keep last */
            //IE9+
            permission = win.external.msIsSiteMode() ? PERMISSION_GRANTED : PERMISSION_DEFAULT;
        }
        return permission;
    }
    /**
     *
     */
    function config(params) {
        if (params && isObject(params)) {
            mixin(settings, params);
        }
        return settings;
    }
    function isDocumentHidden() {
        return settings.pageVisibility ? (document.hidden || document.msHidden || document.mozHidden || document.webkitHidden) : true;
    }
    function createNotification(title, options) {
        var notification,
            notificationWrapper;
        /*
            Return undefined if notifications are not supported.

            Return undefined if no permissions for displaying notifications.

            Title and icons are required. Return undefined if not set.
         */
        if (isSupported && isDocumentHidden() && isString(title) && (options && (isString(options.icon) || isObject(options.icon))) && (permissionLevel() === PERMISSION_GRANTED)) {
            notification = getNotification(title, options);
        }
        notificationWrapper = getWrapper(notification);
        //Auto-close notification
        if (settings.autoClose && notification && !notification.ieVerification && notification.addEventListener) {
            notification.addEventListener("show", function () {
                var notification = notificationWrapper;
                win.setTimeout(function () {
                    notification.close();
                }, settings.autoClose);
            });
        }
        return notificationWrapper;
    }
    win.notify = {
        PERMISSION_DEFAULT: PERMISSION_DEFAULT,
        PERMISSION_GRANTED: PERMISSION_GRANTED,
        PERMISSION_DENIED: PERMISSION_DENIED,
        isSupported: isSupported,
        config: config,
        createNotification: createNotification,
        permissionLevel: permissionLevel,
        requestPermission: requestPermission
    };
    if (isFunction(Object.seal)) {
        Object.seal(win.notify);
    }
}(window));
(function () {
    'use strict';

    var app = angular.module('AgileTasker', [
        'ngRoute',
        'LocalForageModule',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'Partials/timer.html'
        });
        $routeProvider.when('/about', {
            templateUrl: 'Partials/about.html'
        });
        $routeProvider.when('/history', {
            templateUrl: 'Partials/history.html'
        });
        $routeProvider.when('/settings', {
            templateUrl: 'Partials/settings.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
})();
(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('TimerCtrl', ['$scope', '$localForage', 'userSettings', 'notificationService', function ($scope, $localForage, userSettings, notificationService) {
        var startTime = new Date().toLocaleTimeString();
        var timerInterval = null;
        var timerDate = new Date();
        timerDate.setMinutes(25);
        timerDate.setSeconds(0);

        $scope.isPlaying = false;
        $scope.settings = {
            options: [{ value: 15, label: 15 }, { value: 20, label: 20 }, { value: 25, label: 25 }, { value: 30, label: 30 }],
            currentTime: "",
            selectedTime: {},
            taskTextBox: ""
        };

        $scope.settings.selectedTime = $scope.settings.options[2];
        $scope.settings.currentTime = $scope.settings.options[2].value + ":00";

        // Bind userSettings service to local storage
        $scope.userSettings = userSettings;
        $localForage.bind($scope, {
            key: 'userSettings',
            defaultValue: userSettings,
            storeName: 'StorageSettings'
        });

        $scope.startTimer = startTimer;
        $scope.stopTimer = stopTimer;
        $scope.clearList = clearHistory;
        $scope.toggleSound = toggleSound;

        function startTimer() {
            resetTimer();
            timerInterval = setInterval(intervalTimer, 1000);
            startTime = new Date().toLocaleTimeString();
            $scope.isPlaying = true;

            if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
                notify.requestPermission();
            }
        }

        function stopTimer() {
            resetTimer();
            $scope.isPlaying = '';
            document.title = 'Agile Tasker';
        }

        function clearHistory() {
            $scope.userSettings.taskHistory = [];
        }

        function toggleSound() {
            $scope.userSettings.sound.play = !$scope.userSettings.sound.play;
            if ($scope.userSettings.sound.play === true) {
                notificationService.playAudio();
            }
        }

        function intervalTimer() {
            if (timeIsUp()) {
                $scope.stopTimer();
                console.log($scope.userSettings.sound.play);
                notificationService.notify($scope.userSettings.sound.play);
                saveTaskToHistory();
            } else {
                timerDate.setSeconds(timerDate.getSeconds() - 1);
                $scope.settings.currentTime = getCurrentTime(timerDate);
                document.title = $scope.settings.currentTime;
            }
            $scope.$apply();
        }

        function timeIsUp() {
            return (timerDate.getMinutes() === 0 && timerDate.getSeconds() === 0);
        }

        function resetTimer() {
            clearInterval(timerInterval);
            $scope.settings.currentTime = $scope.settings.selectedTime.value + ":" + "00";
            timerDate.setMinutes($scope.settings.selectedTime.value);  // $scope.settings.selectedTime.value
            timerDate.setSeconds(0);
        }

        function getCurrentTime(currentTime) {
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            return minutes + ':' + seconds;
        }

        function saveTaskToHistory() {
            var _text = "Unknown";
            if ($scope.settings.taskTextBox !== "") {
                _text = $scope.settings.taskTextBox;
            }

            $scope.userSettings.taskHistory.push({ start: startTime, stop: new Date().toLocaleTimeString(), text: _text });
            $scope.settings.taskTextBox = "";
        }
    }]);
})();

(function () {
    'use strict';

    var appDirectives = angular.module('app.directives', []);

    appDirectives.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
})();
(function () {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('agileHistory', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                bindModel: '=ngModel'
            },
            template: [
                '<ul class="task-list">',
                    '<li ng-repeat="task in bindModel track by $index">',
                        '<div>{{task.text}}</div>',
                        '<span class="smallText"><span>{{task.start}}</span>&nbsp;<strong>to</strong>&nbsp;<span>{{task.stop}}</span></span>',
                    '</li>',
                '</ul>'
            ].join(''),
            link: function (scope, element, attrs) {

            }
        };
    });
})();
(function () {
    'use strict';

    var appDirectives = angular.module('app.directives');

    appDirectives.directive('agileClock', ['$timeout', 'dateFilter', function ($timeout, dateFilter) { // http://jsdo.it/can.i.do.web/zHbM
        return function (scope, element, attrs) {
            var timeoutId; // timeoutId, so that we can cancel the time updates

            // schedule update in one second
            function updateLater() {
                // save the timeoutId for canceling
                timeoutId = $timeout(function () {
                    element.text(dateFilter(new Date(), 'shortTime'));
                    updateLater(); // schedule another update
                }, 1000);
            }

            // listen on DOM destroy (removal) event, and cancel the next UI update
            // to prevent updating time ofter the DOM element was removed.
            element.bind('$destroy', function () {
                $timeout.cancel(timeoutId);
            });

            updateLater(); // kick off the UI update process.
        };
    }]);
})();
(function () {
    'use strict';

    var appFilters = angular.module('app.filters', []);

    appFilters.filter('interpolateVersion', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
})();
(function () {
    'use strict';

    var appServices = angular.module('app.services', []).value('version', '1.5.4');

    appServices.factory('userSettings', function () {
        var _userSettings = {
            sound: { play: true },
            taskHistory: []
        };
        return _userSettings;
    });
})();
(function () {
    'use strict';

    var appServices = angular.module('app.services');

    appServices.factory('notificationService', function () {

        var notificationService = {};

        notificationService.notify = function (playSound) {
            vibrationNotification();
            setTimeout(function () { nativeNotification(); toggleAudio(playSound); }, 1600); // Set timeout because html5 Vibrate API does not take a callback ( Alert stops vibration )
        };

        notificationService.playAudio = function () {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        };

        var audio = new Audio();
        audio.src = Modernizr.audio.ogg ? 'Content/Audio/chime.ogg' :
                    Modernizr.audio.mp3 ? 'Content/Audio/chime.mp3' :
                                          'Content/Audio/chime.m4a';

        function nativeNotification() {
            // Refactor to case statement
            if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
                notify.requestPermission();
            } else if (notify.permissionLevel() === notify.PERMISSION_GRANTED) {
                notify.createNotification('Agile Task Complete', {
                    body: 'Time to take a break!',
                    icon: 'Content/Images/icon.png'
                });
            } else if (notify.permissionLevel() === notify.PERMISSION_DENIED) {
                alert("Agile Task Complete");
            } else {
                alert("Agile Task Complete");
            }
        }

        function toggleAudio(playSound) {
            if (playSound === true) {
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
        }

        function vibrationNotification() {
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

            if (navigator.vibrate) {
                navigator.vibrate([500, 200, 500]);
            }
        }

        return notificationService;
    });
})();
