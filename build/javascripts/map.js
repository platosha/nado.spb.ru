// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.0.0-6-gbcf5421

(function(){var k,aa=aa||{},ba=this;function l(a){return void 0!==a}function ca(){}function da(a){a.gb=function(){return a.ee?a.ee:a.ee=new a}}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ga(a){return null===a}function ha(a){return"array"==fa(a)}function ia(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ja(a){return"string"==typeof a}function ka(a){return"number"==typeof a}function la(a){return"function"==fa(a)}function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function na(a){return a[oa]||(a[oa]=++pa)}
var oa="closure_uid_"+(1E9*Math.random()>>>0),pa=0;function qa(a,b,c){return a.call.apply(a.bind,arguments)}function ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function sa(a,b,c){sa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?qa:ra;return sa.apply(null,arguments)}function ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ua=Date.now||function(){return+new Date};
function s(a,b){var c=a.split("."),d=ba;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&l(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}function t(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.Xi=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(va,Error);va.prototype.name="CustomError";var wa;function xa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ya(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}
function Ca(a){if(!Da.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ea,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Fa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ga,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ha,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ja,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ka,"&#0;"));return a}var Ea=/&/g,Fa=/</g,Ga=/>/g,Ha=/"/g,Ja=/'/g,Ka=/\x00/g,Da=/[\x00&<>"']/;function La(a,b){return-1!=a.indexOf(b)}
function Ma(a){a=l(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);b=Math.max(0,2-b);return Array(b+1).join("0")+a}
function Na(a,b){for(var c=0,d=ya(String(a)).split("."),e=ya(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",m=e[g]||"",n=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var r=n.exec(h)||["","",""],q=p.exec(m)||["","",""];if(0==r[0].length&&0==q[0].length)break;c=Oa(0==r[1].length?0:parseInt(r[1],10),0==q[1].length?0:parseInt(q[1],10))||Oa(0==r[2].length,0==q[2].length)||Oa(r[2],q[2])}while(0==c)}return c}function Oa(a,b){return a<b?-1:a>b?1:0}
function Pa(){return"transform".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}function Qa(a){var b=ja(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var Ra=Array.prototype,Sa=Ra.indexOf?function(a,b,c){return Ra.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ja(a))return ja(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ta=Ra.forEach?function(a,b,c){Ra.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ja(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ua=Ra.filter?function(a,b,c){return Ra.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],
f=0,g=ja(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},Va=Ra.map?function(a,b,c){return Ra.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=ja(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Wa=Ra.some?function(a,b,c){return Ra.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ja(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Xa(a){var b;a:{b=Ya;for(var c=a.length,d=ja(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:ja(a)?a.charAt(b):a[b]}function Za(a,b){return 0<=Sa(a,b)}function $a(a){if(!ha(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}function ab(a,b){var c=Sa(a,b),d;(d=0<=c)&&Ra.splice.call(a,c,1);return d}function bb(a){return Ra.concat.apply(Ra,arguments)}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(ha(d)||(e=ia(d))&&Object.prototype.hasOwnProperty.call(d,"callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}}function eb(a,b,c,d){Ra.splice.apply(a,fb(arguments,1))}function fb(a,b,c){return 2>=arguments.length?Ra.slice.call(a,b):Ra.slice.call(a,b,c)}
function gb(a,b){a.sort(b||hb)}function ib(a,b){if(!ia(a)||!ia(b)||a.length!=b.length)return!1;for(var c=a.length,d=jb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}function hb(a,b){return a>b?1:a<b?-1:0}function jb(a,b){return a===b};var lb;a:{var mb=ba.navigator;if(mb){var nb=mb.userAgent;if(nb){lb=nb;break a}}lb=""};var ob,pb,qb;function rb(){return ba.navigator||null}var sb=La(lb,"Opera")||La(lb,"OPR"),ub=La(lb,"Trident")||La(lb,"MSIE"),vb=La(lb,"Gecko")&&!La(lb.toLowerCase(),"webkit")&&!(La(lb,"Trident")||La(lb,"MSIE")),wb=La(lb.toLowerCase(),"webkit"),xb,yb=rb();xb=yb&&yb.platform||"";ob=La(xb,"Mac");pb=La(xb,"Win");qb=La(xb,"Linux");var zb=!!rb()&&La(rb().appVersion||"","X11");function Bb(){var a=ba.document;return a?a.documentMode:void 0}
var Cb=function(){var a="",b;if(sb&&ba.opera)return a=ba.opera.version,la(a)?a():a;vb?b=/rv\:([^\);]+)(\)|;)/:ub?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:wb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(lb))?a[1]:"");return ub&&(b=Bb(),b>parseFloat(a))?String(b):a}(),Db={};function Eb(a){return Db[a]||(Db[a]=0<=Na(Cb,a))}var Fb=ba.document,Gb=Fb&&ub?Bb()||("CSS1Compat"==Fb.compatMode?parseInt(Cb,10):5):void 0;var Hb="https:"===ba.location.protocol,Ib=ub&&!Eb("9.0")&&""!==Cb;function Jb(a,b,c){return Math.min(Math.max(a,b),c)}function Kb(a,b){var c=a%b;return 0>c*b?c+b:c}function Lb(a,b,c){return a+c*(b-a)}function Mb(a){return a*Math.PI/180};function Nb(a){return function(b){if(l(b))return[Jb(b[0],a[0],a[2]),Jb(b[1],a[1],a[3])]}}function Ob(a){return a};function Pb(a,b){var c,d;c=0;for(d=b.length;c<d;++c)a.push(b[c])}function Qb(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1};function Rb(a){return function(b,c,d){if(l(b))return b=Qb(a,b,d),b=Jb(b+c,0,a.length-1),a[b]}}function Sb(a,b,c){return function(d,e,f){if(l(d))return f=0<f?0:0>f?1:.5,d=Math.floor(Math.log(b/d)/Math.log(a)+f),e=Math.max(d+e,0),l(c)&&(e=Math.min(e,c)),b/Math.pow(a,e)}};function Tb(a){if(l(a))return 0}function Ub(a,b){if(l(a))return a+b}function Vb(a){var b=2*Math.PI/a;return function(a,d){if(l(a))return a=Math.floor((a+d)/b+.5)*b}}function Wb(){var a=Mb(5);return function(b,c){if(l(b))return Math.abs(b+c)<=a?0:b+c}};function Xb(a,b,c){this.center=a;this.resolution=b;this.rotation=c};var Yb=!ub||ub&&9<=Gb,Zb=!ub||ub&&9<=Gb,$b=ub&&!Eb("9");!wb||Eb("528");vb&&Eb("1.9b")||ub&&Eb("8")||sb&&Eb("9.5")||wb&&Eb("528");vb&&!Eb("8")||ub&&Eb("9");function ac(){0!=bc&&(cc[na(this)]=this)}var bc=0,cc={};ac.prototype.qb=!1;ac.prototype.Nb=function(){if(!this.qb&&(this.qb=!0,this.I(),0!=bc)){var a=na(this);delete cc[a]}};function dc(a,b){var c=ta(ec,b);a.bb||(a.bb=[]);a.bb.push(l(void 0)?sa(c,void 0):c)}ac.prototype.I=function(){if(this.bb)for(;this.bb.length;)this.bb.shift()()};function ec(a){a&&"function"==typeof a.Nb&&a.Nb()};function fc(a,b){this.type=a;this.b=this.target=b;this.g=!1;this.Fe=!0}fc.prototype.Nb=function(){};fc.prototype.d=function(){this.g=!0};fc.prototype.preventDefault=function(){this.Fe=!1};function gc(a){a.d()};var hc=ub?"focusout":"DOMFocusOut";function ic(a){ic[" "](a);return a}ic[" "]=ca;function jc(a,b){fc.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.k=this.f=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.p=this.e=this.c=this.l=!1;this.state=null;this.i=!1;this.a=null;a&&kc(this,a,b)}t(jc,fc);var lc=[1,4,2];
function kc(a,b,c){var d=a.type=b.type;a.target=b.target||b.srcElement;a.b=c;if(c=b.relatedTarget){if(vb){var e;a:{try{ic(c.nodeName);e=!0;break a}catch(f){}e=!1}e||(c=null)}}else"mouseover"==d?c=b.fromElement:"mouseout"==d&&(c=b.toElement);a.relatedTarget=c;a.offsetX=wb||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=wb||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||0;a.screenY=b.screenY||
0;a.button=b.button;a.f=b.keyCode||0;a.k=b.charCode||("keypress"==d?b.keyCode:0);a.l=b.ctrlKey;a.c=b.altKey;a.e=b.shiftKey;a.p=b.metaKey;a.i=ob?b.metaKey:b.ctrlKey;a.state=b.state;a.a=b;b.defaultPrevented&&a.preventDefault()}function mc(a){return(Yb?0==a.a.button:"click"==a.type?!0:!!(a.a.button&lc[0]))&&!(wb&&ob&&a.l)}jc.prototype.d=function(){jc.K.d.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};
jc.prototype.preventDefault=function(){jc.K.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$b)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};jc.prototype.o=function(){return this.a};var nc="closure_listenable_"+(1E6*Math.random()|0);function oc(a){return!(!a||!a[nc])}var pc=0;function qc(a,b,c,d,e){this.wb=a;this.a=null;this.src=b;this.type=c;this.bc=!!d;this.Wc=e;this.key=++pc;this.Zb=this.Ec=!1}function rc(a){a.Zb=!0;a.wb=null;a.a=null;a.src=null;a.Wc=null};function sc(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function tc(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function uc(a){var b=0,c;for(c in a)b++;return b}function vc(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function xc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function yc(a,b){return b in a}function zc(a){var b=Ac,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}function Bc(a){for(var b in a)return!1;return!0}function Cc(a){for(var b in a)delete a[b]}
function Dc(a,b){b in a&&delete a[b]}function v(a,b,c){return b in a?a[b]:c}function Ec(a,b){var c=[];return b in a?a[b]:a[b]=c}function Fc(a){var b={},c;for(c in a)b[c]=a[c];return b}var Gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Gc.length;f++)c=Gc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ic(a){this.src=a;this.a={};this.c=0}Ic.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.c++);var g=Jc(a,b,d,e);-1<g?(b=a[g],c||(b.Ec=!1)):(b=new qc(b,this.src,f,!!d,e),b.Ec=c,a.push(b));return b};Ic.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Jc(e,b,c,d);return-1<b?(rc(e[b]),Ra.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.c--),!0):!1};
function Kc(a,b){var c=b.type;if(!(c in a.a))return!1;var d=ab(a.a[c],b);d&&(rc(b),0==a.a[c].length&&(delete a.a[c],a.c--));return d}function Lc(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=Jc(a,c,d,e));return-1<b?a[b]:null}function Mc(a,b,c){var d=l(b),e=d?b.toString():"",f=l(c);return tc(a.a,function(a){for(var b=0;b<a.length;++b)if(!(d&&a[b].type!=e||f&&a[b].bc!=c))return!0;return!1})}
function Jc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Zb&&f.wb==b&&f.bc==!!c&&f.Wc==d)return e}return-1};var Nc="closure_lm_"+(1E6*Math.random()|0),Oc={},Pc=0;function y(a,b,c,d,e){if(ha(b)){for(var f=0;f<b.length;f++)y(a,b[f],c,d,e);return null}c=Qc(c);return oc(a)?a.ya(b,c,d,e):Rc(a,b,c,!1,d,e)}function Rc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Sc(a);h||(a[Nc]=h=new Ic(a));c=h.add(b,c,d,e,f);if(c.a)return c;d=Tc();c.a=d;d.src=a;d.wb=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Uc(b.toString()),d);Pc++;return c}
function Tc(){var a=Vc,b=Zb?function(c){return a.call(b.src,b.wb,c)}:function(c){c=a.call(b.src,b.wb,c);if(!c)return c};return b}function Wc(a,b,c,d,e){if(ha(b)){for(var f=0;f<b.length;f++)Wc(a,b[f],c,d,e);return null}c=Qc(c);return oc(a)?a.Qa.add(String(b),c,!0,d,e):Rc(a,b,c,!0,d,e)}function Xc(a,b,c,d,e){if(ha(b))for(var f=0;f<b.length;f++)Xc(a,b[f],c,d,e);else c=Qc(c),oc(a)?a.Od(b,c,d,e):a&&(a=Sc(a))&&(b=Lc(a,b,c,!!d,e))&&Yc(b)}
function Yc(a){if(ka(a)||!a||a.Zb)return!1;var b=a.src;if(oc(b))return Kc(b.Qa,a);var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.bc):b.detachEvent&&b.detachEvent(Uc(c),d);Pc--;(c=Sc(b))?(Kc(c,a),0==c.c&&(c.src=null,b[Nc]=null)):rc(a);return!0}function Uc(a){return a in Oc?Oc[a]:Oc[a]="on"+a}function Zc(a,b,c,d){var e=1;if(a=Sc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.bc==c&&!f.Zb&&(e&=!1!==$c(f,d))}return Boolean(e)}
function $c(a,b){var c=a.wb,d=a.Wc||a.src;a.Ec&&Yc(a);return c.call(d,b)}
function Vc(a,b){if(a.Zb)return!0;if(!Zb){var c;if(!(c=b))a:{c=["window","event"];for(var d=ba,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new jc(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.b;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.g&&0<=h;h--)c.b=e[h],d&=Zc(e[h],f,!0,c);for(h=0;!c.g&&h<e.length;h++)c.b=e[h],d&=Zc(e[h],f,
!1,c)}return d}return $c(a,new jc(b,this))}function Sc(a){a=a[Nc];return a instanceof Ic?a:null}var ad="__closure_events_fn_"+(1E9*Math.random()>>>0);function Qc(a){if(la(a))return a;a[ad]||(a[ad]=function(b){return a.handleEvent(b)});return a[ad]};function bd(a){return function(){return a}}var cd=bd(!1),dd=bd(!0);function ed(a){return a}function fd(a){var b;b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}function gd(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};function hd(){ac.call(this);this.Qa=new Ic(this);this.Se=this;this.pd=null}t(hd,ac);hd.prototype[nc]=!0;k=hd.prototype;k.addEventListener=function(a,b,c,d){y(this,a,b,c,d)};k.removeEventListener=function(a,b,c,d){Xc(this,a,b,c,d)};
k.dispatchEvent=function(a){var b,c=this.pd;if(c)for(b=[];c;c=c.pd)b.push(c);var c=this.Se,d=a.type||a;if(ja(a))a=new fc(a,c);else if(a instanceof fc)a.target=a.target||c;else{var e=a;a=new fc(d,c);Hc(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.g&&0<=g;g--)f=a.b=b[g],e=id(f,d,!0,a)&&e;a.g||(f=a.b=c,e=id(f,d,!0,a)&&e,a.g||(e=id(f,d,!1,a)&&e));if(b)for(g=0;!a.g&&g<b.length;g++)f=a.b=b[g],e=id(f,d,!1,a)&&e;return e};
k.I=function(){hd.K.I.call(this);if(this.Qa){var a=this.Qa,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,rc(d[e]);delete a.a[c];a.c--}}this.pd=null};k.ya=function(a,b,c,d){return this.Qa.add(String(a),b,!1,c,d)};k.Od=function(a,b,c,d){return this.Qa.remove(String(a),b,c,d)};
function id(a,b,c,d){b=a.Qa.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Zb&&g.bc==c){var h=g.wb,m=g.Wc||g.src;g.Ec&&Kc(a.Qa,g);e=!1!==h.call(m,d)&&e}}return e&&!1!=d.Fe}function jd(a,b,c){return Mc(a.Qa,l(b)?String(b):void 0,c)};function ld(){hd.call(this);this.c=0}t(ld,hd);k=ld.prototype;k.n=function(){++this.c;this.dispatchEvent("change")};k.A=function(){return this.c};k.t=function(a,b,c){return y(this,a,b,!1,c)};k.B=function(a,b,c){return Wc(this,a,b,!1,c)};k.v=function(a,b,c){Xc(this,a,b,!1,c)};k.C=function(a){Yc(a)};function md(a,b){fc.call(this,a);this.key=b}t(md,fc);function nd(a,b,c,d){this.source=a;this.target=b;this.e=c;this.c=d;this.b=this.a=ed}nd.prototype.d=function(a,b){this.a=a;this.b=b;od(this.source,this.e)};function pd(a){ld.call(this);na(this);this.p={};this.ga={};this.Ib={};this.Jb={};l(a)&&this.L(a)}t(pd,ld);var qd={},rd={},sd={};function td(a){return qd.hasOwnProperty(a)?qd[a]:qd[a]="change:"+a.toLowerCase()}k=pd.prototype;
k.Z=function(a,b,c){c=c||a;this.Y(a);var d=td(c);this.Jb[a]=y(b,d,function(){od(this,a)},void 0,this);this.Ib[a]=y(b,"beforepropertychange",ud(a,c),void 0,this);b=new nd(this,b,a,c);this.ga[a]=b;od(this,a);return b};function ud(a,b){return function(c){c.key===b&&this.dispatchEvent(new md("beforepropertychange",a))}}
k.get=function(a){var b,c=this.ga;if(c.hasOwnProperty(a)){a=c[a];b=a.target;var c=a.c,d=rd.hasOwnProperty(c)?rd[c]:rd[c]="get"+(c.substr(0,1).toUpperCase()+c.substr(1)),d=v(b,d);b=l(d)?d.call(b):b.get(c);b=a.b(b)}else this.p.hasOwnProperty(a)&&(b=this.p[a]);return b};k.N=function(){var a=this.ga,b;if(Bc(this.p)){if(Bc(a))return[];b=a}else if(Bc(a))b=this.p;else{b={};for(var c in this.p)b[c]=!0;for(c in a)b[c]=!0}return xc(b)};
k.R=function(){var a={},b;for(b in this.p)a[b]=this.p[b];for(b in this.ga)a[b]=this.get(b);return a};function od(a,b){var c=td(b);a.dispatchEvent(c);a.dispatchEvent(new md("propertychange",b))}k.set=function(a,b){this.dispatchEvent(new md("beforepropertychange",a));var c=this.ga;if(c.hasOwnProperty(a)){var d=c[a],c=d.target,e=d.c;b=d.a(b);d=sd.hasOwnProperty(e)?sd[e]:sd[e]="set"+(e.substr(0,1).toUpperCase()+e.substr(1));d=v(c,d);l(d)?d.call(c,b):c.set(e,b)}else this.p[a]=b,od(this,a)};
k.L=function(a){for(var b in a)this.set(b,a[b])};k.Y=function(a){var b=this.Jb,c=b[a];c&&(delete b[a],Yc(c),b=this.get(a),delete this.ga[a],this.p[a]=b);if(b=this.Ib[a])Yc(b),delete this.Ib[a]};k.$=function(){for(var a in this.Jb)this.Y(a)};function vd(a,b){a[0]+=b[0];a[1]+=b[1];return a}function wd(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],g=e[0],e=e[1],h=f[0],f=f[1],m=h-g,n=f-e,c=0===m&&0===n?0:(m*(c-g)+n*(d-e))/(m*m+n*n||0);0>=c||(1<=c?(g=h,e=f):(g+=c*m,e+=c*n));return[g,e]}function xd(a,b){var c=Kb(a+180,360)-180,d=Math.abs(Math.round(3600*c));return Math.floor(d/3600)+"\u00b0 "+Math.floor(d/60%60)+"\u2032 "+Math.floor(d%60)+"\u2033 "+b.charAt(0>c?1:0)}
function zd(a,b,c){return l(a)?b.replace("{x}",a[0].toFixed(c)).replace("{y}",a[1].toFixed(c)):""}function Ad(a,b){for(var c=!0,d=a.length-1;0<=d;--d)if(a[d]!=b[d]){c=!1;break}return c}function Bd(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e;return a}function Cd(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function Dd(a,b){return zd(a,"{x}, {y}",b)};function Ed(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}Ed.prototype.a=4;Ed.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};Ed.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(Ed.BYTES_PER_ELEMENT=4,Ed.prototype.BYTES_PER_ELEMENT=Ed.prototype.a,Ed.prototype.set=Ed.prototype.set,Ed.prototype.toString=Ed.prototype.toString,s("Float32Array",Ed));function Fd(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}Fd.prototype.a=8;Fd.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};Fd.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{Fd.BYTES_PER_ELEMENT=8}catch(Gd){}Fd.prototype.BYTES_PER_ELEMENT=Fd.prototype.a;Fd.prototype.set=Fd.prototype.set;Fd.prototype.toString=Fd.prototype.toString;s("Float64Array",Fd)};function Hd(a,b,c,d,e){a[0]=b;a[1]=c;a[2]=d;a[3]=e};function Id(){var a=Array(16);Jd(a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return a}function Kd(){var a=Array(16);Jd(a,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return a}function Jd(a,b,c,d,e,f,g,h,m,n,p,r,q,u,x,B,E){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;a[6]=h;a[7]=m;a[8]=n;a[9]=p;a[10]=r;a[11]=q;a[12]=u;a[13]=x;a[14]=B;a[15]=E}
function Ld(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15]}function Md(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1}
function Nd(a,b,c){var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],m=a[5],n=a[6],p=a[7],r=a[8],q=a[9],u=a[10],x=a[11],B=a[12],E=a[13],F=a[14];a=a[15];var w=b[0],U=b[1],Q=b[2],ea=b[3],Y=b[4],za=b[5],kb=b[6],Aa=b[7],Ab=b[8],tb=b[9],Ba=b[10],Ia=b[11],yd=b[12],kd=b[13],wc=b[14];b=b[15];c[0]=d*w+h*U+r*Q+B*ea;c[1]=e*w+m*U+q*Q+E*ea;c[2]=f*w+n*U+u*Q+F*ea;c[3]=g*w+p*U+x*Q+a*ea;c[4]=d*Y+h*za+r*kb+B*Aa;c[5]=e*Y+m*za+q*kb+E*Aa;c[6]=f*Y+n*za+u*kb+F*Aa;c[7]=g*Y+p*za+x*kb+a*Aa;c[8]=d*Ab+h*tb+r*Ba+B*Ia;c[9]=e*Ab+m*tb+q*Ba+
E*Ia;c[10]=f*Ab+n*tb+u*Ba+F*Ia;c[11]=g*Ab+p*tb+x*Ba+a*Ia;c[12]=d*yd+h*kd+r*wc+B*b;c[13]=e*yd+m*kd+q*wc+E*b;c[14]=f*yd+n*kd+u*wc+F*b;c[15]=g*yd+p*kd+x*wc+a*b}function Od(a,b,c){var d=a[1]*b+a[5]*c+0*a[9]+a[13],e=a[2]*b+a[6]*c+0*a[10]+a[14],f=a[3]*b+a[7]*c+0*a[11]+a[15];a[12]=a[0]*b+a[4]*c+0*a[8]+a[12];a[13]=d;a[14]=e;a[15]=f}function Pd(a,b,c){Jd(a,a[0]*b,a[1]*b,a[2]*b,a[3]*b,a[4]*c,a[5]*c,a[6]*c,a[7]*c,1*a[8],1*a[9],1*a[10],1*a[11],a[12],a[13],a[14],a[15])}
function Qd(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],m=a[6],n=a[7],p=Math.cos(b),r=Math.sin(b);a[0]=c*p+g*r;a[1]=d*p+h*r;a[2]=e*p+m*r;a[3]=f*p+n*r;a[4]=c*-r+g*p;a[5]=d*-r+h*p;a[6]=e*-r+m*p;a[7]=f*-r+n*p}new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function Rd(a){for(var b=Sd(),c=0,d=a.length;c<d;++c){var e=b,f=a[c];f[0]<e[0]&&(e[0]=f[0]);f[0]>e[2]&&(e[2]=f[0]);f[1]<e[1]&&(e[1]=f[1]);f[1]>e[3]&&(e[3]=f[1])}return b}function Td(a,b,c){var d=Math.min.apply(null,a),e=Math.min.apply(null,b);a=Math.max.apply(null,a);b=Math.max.apply(null,b);return Ud(d,e,a,b,c)}function Vd(a,b,c){return l(c)?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}
function Wd(a,b){return l(b)?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function Xd(a,b,c){b=b<a[0]?a[0]-b:a[2]<b?b-a[2]:0;a=c<a[1]?a[1]-c:a[3]<c?c-a[3]:0;return b*b+a*a}function Yd(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}function Sd(){return[Infinity,Infinity,-Infinity,-Infinity]}function Ud(a,b,c,d,e){return l(e)?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function Zd(a){return Ud(Infinity,Infinity,-Infinity,-Infinity,a)}
function $d(a,b){var c=a[0],d=a[1];return Ud(c,d,c,d,b)}function ae(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function be(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3]);return a}function ce(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}function de(a){var b=0;ee(a)||(b=fe(a)*ge(a));return b}function he(a){return[a[0],a[1]]}
function ie(a){return[a[2],a[1]]}function je(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}function ke(a,b){var c;"bottom-left"===b?c=he(a):"bottom-right"===b?c=ie(a):"top-left"===b?c=le(a):"top-right"===b&&(c=me(a));return c}function ne(a,b,c,d){var e=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);c=Math.sin(c);e=[-e,-e,e,e];d=[-d,d,-d,d];var f,g,h;for(f=0;4>f;++f)g=e[f],h=d[f],e[f]=a[0]+g*b-h*c,d[f]=a[1]+g*c+h*b;return Td(e,d,void 0)}function ge(a){return a[3]-a[1]}
function oe(a,b){var c=l(void 0)?void 0:Sd();pe(a,b)&&(c[0]=a[0]>b[0]?a[0]:b[0],c[1]=a[1]>b[1]?a[1]:b[1],c[2]=a[2]<b[2]?a[2]:b[2],c[3]=a[3]<b[3]?a[3]:b[3]);return c}function le(a){return[a[0],a[3]]}function me(a){return[a[2],a[3]]}function fe(a){return a[2]-a[0]}function pe(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]}function ee(a){return a[2]<a[0]||a[3]<a[1]}function qe(a,b){return l(b)?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a}
function re(a,b){var c=(a[2]-a[0])/2*(b-1),d=(a[3]-a[1])/2*(b-1);a[0]-=c;a[2]+=c;a[1]-=d;a[3]+=d}function te(a,b,c){a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);return Td([a[0],a[2],a[4],a[6]],[a[1],a[3],a[5],a[7]],c)};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
function ue(a){this.radius=a}function ve(a,b){var c=Mb(a[1]),d=Mb(b[1]),e=(d-c)/2,f=Mb(b[0]-a[0])/2,c=Math.sin(e)*Math.sin(e)+Math.sin(f)*Math.sin(f)*Math.cos(c)*Math.cos(d);return 2*we.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}ue.prototype.offset=function(a,b,c){var d=Mb(a[1]);b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(Mb(a[0])+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var we=new ue(6370997);var xe={};xe.degrees=2*Math.PI*we.radius/360;xe.ft=.3048;xe.m=1;function ye(a){this.a=a.code;this.c=a.units;this.g=l(a.extent)?a.extent:null;this.d=l(a.worldExtent)?a.worldExtent:null;this.b=l(a.axisOrientation)?a.axisOrientation:"enu";this.f=l(a.global)?a.global:!1;this.e=null}k=ye.prototype;k.mf=function(){return this.a};k.s=function(){return this.g};k.fh=function(){return this.c};k.ae=function(){return xe[this.c]};k.Mf=function(){return this.d};function ze(a){return a.b}k.rg=function(){return this.f};
k.gh=function(a){this.g=a};k.wi=function(a){this.d=a};k.yd=function(a,b){if("degrees"==this.c)return a;var c=Ae(this,Be("EPSG:4326")),d=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2],d=c(d,d,2),c=(ve(d.slice(0,2),d.slice(2,4))+ve(d.slice(4,6),d.slice(6,8)))/2;"ft"==this.c&&(c/=.3048);return c};var Ce={},De={};function Ee(a){Fe(a);Ta(a,function(b){Ta(a,function(a){b!==a&&Ge(b,a,He)})})}function Ie(){var a=Je,b=Ke,c=Le;Ta(Me,function(d){Ta(a,function(a){Ge(d,a,b);Ge(a,d,c)})})}
function Ne(a){Ce[a.a]=a;Ge(a,a,He)}function Fe(a){var b=[];Ta(a,function(a){b.push(Ne(a))})}function Oe(a){return null!=a?ja(a)?Be(a):a:Be("EPSG:3857")}function Ge(a,b,c){a=a.a;b=b.a;a in De||(De[a]={});De[a][b]=c}function Pe(a,b,c,d){a=Be(a);b=Be(b);Ge(a,b,Qe(c));Ge(b,a,Qe(d))}function Qe(a){return function(b,c,d){var e=b.length;d=l(d)?d:2;c=l(c)?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function Be(a){var b;if(a instanceof ye)b=a;else if(ja(a)){if(b=Ce[a],!l(b)&&"function"==typeof proj4){var c=proj4.defs(a);if(l(c)){b=c.units;!l(b)&&l(c.to_meter)&&(b=c.to_meter.toString(),xe[b]=c.to_meter);b=new ye({code:a,units:b,axisOrientation:c.axis});Ne(b);var d,e,f;for(d in Ce)e=proj4.defs(d),l(e)&&(f=Be(d),e===c?Ee([f,b]):(e=proj4(d,a),Pe(f,b,e.forward,e.inverse)))}else b=null}}else b=null;return b}function Re(a,b){return a===b?!0:a.c!=b.c?!1:Ae(a,b)===He}
function Se(a,b){var c=Be(a),d=Be(b);return Ae(c,d)}function Ae(a,b){var c=a.a,d=b.a,e;c in De&&d in De[c]&&(e=De[c][d]);l(e)||(e=Te);return e}function Te(a,b){if(l(b)&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function He(a,b){var c;if(l(b)){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c}function Ue(a,b,c){b=Se(b,c);return te(a,b)};function z(a){pd.call(this);a=l(a)?a:{};this.l=[0,0];var b={};b.center=l(a.center)?a.center:null;this.o=Oe(a.projection);var c,d,e,f=l(a.minZoom)?a.minZoom:0;c=l(a.maxZoom)?a.maxZoom:28;var g=l(a.zoomFactor)?a.zoomFactor:2;if(l(a.resolutions))c=a.resolutions,d=c[0],e=c[c.length-1],c=Rb(c);else{d=Oe(a.projection);e=d.s();var h=(null===e?360*xe.degrees/xe[d.c]:Math.max(fe(e),ge(e)))/256/Math.pow(2,0),m=h/Math.pow(2,28);d=a.maxResolution;l(d)?f=0:d=h/Math.pow(g,f);e=a.minResolution;l(e)||(e=l(a.maxZoom)?
l(a.maxResolution)?d/Math.pow(g,c):h/Math.pow(g,c):m);c=f+Math.floor(Math.log(d/e)/Math.log(g));e=d/Math.pow(g,c-f);c=Sb(g,d,c-f)}this.f=d;this.u=e;this.k=f;f=l(a.extent)?Nb(a.extent):Ob;(l(a.enableRotation)?a.enableRotation:1)?(d=a.constrainRotation,d=l(d)&&!0!==d?!1===d?Ub:ka(d)?Vb(d):Ub:Wb()):d=Tb;this.r=new Xb(f,c,d);l(a.resolution)?b.resolution=a.resolution:l(a.zoom)&&(b.resolution=this.constrainResolution(this.f,a.zoom-this.k));b.rotation=l(a.rotation)?a.rotation:0;this.L(b)}t(z,pd);
z.prototype.g=function(a){return this.r.center(a)};z.prototype.constrainResolution=function(a,b,c){return this.r.resolution(a,b||0,c||0)};z.prototype.constrainRotation=function(a,b){return this.r.rotation(a,b||0)};z.prototype.a=function(){return this.get("center")};z.prototype.getCenter=z.prototype.a;z.prototype.D=function(a){var b=this.a(),c=this.b();return[b[0]-c*a[0]/2,b[1]-c*a[1]/2,b[0]+c*a[0]/2,b[1]+c*a[1]/2]};z.prototype.F=function(){return this.o};z.prototype.b=function(){return this.get("resolution")};
z.prototype.getResolution=z.prototype.b;z.prototype.i=function(a,b){return Math.max(fe(a)/b[0],ge(a)/b[1])};function Ve(a){var b=a.f,c=Math.log(b/a.u)/Math.log(2);return function(a){return b/Math.pow(2,a*c)}}z.prototype.e=function(){return this.get("rotation")};z.prototype.getRotation=z.prototype.e;function We(a){var b=a.f,c=Math.log(b/a.u)/Math.log(2);return function(a){return Math.log(b/a)/Math.log(2)/c}}
function Xe(a){var b=a.a(),c=a.o,d=a.b();a=a.e();return{center:b.slice(),projection:l(c)?c:null,resolution:d,rotation:l(a)?a:0}}k=z.prototype;k.Of=function(){var a,b=this.b();if(l(b)){var c,d=0;do{c=this.constrainResolution(this.f,d);if(c==b){a=d;break}++d}while(c>this.u)}return l(a)?this.k+a:a};k.Yd=function(a,b){if(!ee(a)){this.Ka(je(a));var c=this.i(a,b),d=this.constrainResolution(c,0,0);d<c&&(d=this.constrainResolution(d,-1,0));this.d(d)}};
k.lf=function(a,b,c){var d=l(c)?c:{};c=l(d.padding)?d.padding:[0,0,0,0];var e=l(d.constrainResolution)?d.constrainResolution:!0,f=l(d.nearest)?d.nearest:!1,g;l(d.minResolution)?g=d.minResolution:l(d.maxZoom)?g=this.constrainResolution(this.f,d.maxZoom-this.k,0):g=0;var h=a.j,m=this.e(),d=Math.cos(-m),m=Math.sin(-m),n=Infinity,p=Infinity,r=-Infinity,q=-Infinity;a=a.a;for(var u=0,x=h.length;u<x;u+=a)var B=h[u]*d-h[u+1]*m,E=h[u]*m+h[u+1]*d,n=Math.min(n,B),p=Math.min(p,E),r=Math.max(r,B),q=Math.max(q,
E);b=this.i([n,p,r,q],[b[0]-c[1]-c[3],b[1]-c[0]-c[2]]);b=isNaN(b)?g:Math.max(b,g);e&&(g=this.constrainResolution(b,0,0),!f&&g<b&&(g=this.constrainResolution(g,-1,0)),b=g);this.d(b);m=-m;f=(n+r)/2+(c[1]-c[3])/2*b;c=(p+q)/2+(c[0]-c[2])/2*b;this.Ka([f*d-c*m,c*d+f*m])};k.ff=function(a,b,c){var d=this.e(),e=Math.cos(-d),d=Math.sin(-d),f=a[0]*e-a[1]*d;a=a[1]*e+a[0]*d;var g=this.b(),f=f+(b[0]/2-c[0])*g;a+=(c[1]-b[1]/2)*g;d=-d;this.Ka([f*e-a*d,a*e+f*d])};function Ye(a){return null!=a.a()&&l(a.b())}
k.rotate=function(a,b){if(l(b)){var c,d=this.a();l(d)&&(c=[d[0]-b[0],d[1]-b[1]],Bd(c,a-this.e()),vd(c,b));this.Ka(c)}this.q(a)};k.Ka=function(a){this.set("center",a)};z.prototype.setCenter=z.prototype.Ka;function Ze(a,b){a.l[1]+=b}z.prototype.d=function(a){this.set("resolution",a)};z.prototype.setResolution=z.prototype.d;z.prototype.q=function(a){this.set("rotation",a)};z.prototype.setRotation=z.prototype.q;z.prototype.Q=function(a){a=this.constrainResolution(this.f,a-this.k,0);this.d(a)};function $e(a){return 1-Math.pow(1-a,3)};function af(a){return 3*a*a-2*a*a*a}function bf(a){return a}function cf(a){return.5>a?af(2*a):1-af(2*(a-.5))};function df(a){var b=a.source,c=l(a.start)?a.start:ua(),d=b[0],e=b[1],f=l(a.duration)?a.duration:1E3,g=l(a.easing)?a.easing:af;return function(a,b){if(b.time<c)return b.animate=!0,b.viewHints[0]+=1,!0;if(b.time<c+f){var n=1-g((b.time-c)/f),p=d-b.viewState.center[0],r=e-b.viewState.center[1];b.animate=!0;b.viewState.center[0]+=n*p;b.viewState.center[1]+=n*r;b.viewHints[0]+=1;return!0}return!1}}
function ef(a){var b=l(a.rotation)?a.rotation:0,c=l(a.start)?a.start:ua(),d=l(a.duration)?a.duration:1E3,e=l(a.easing)?a.easing:af,f=l(a.anchor)?a.anchor:null;return function(a,h){if(h.time<c)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<c+d){var m=1-e((h.time-c)/d),m=(b-h.viewState.rotation)*m;h.animate=!0;h.viewState.rotation+=m;if(null!==f){var n=h.viewState.center;n[0]-=f[0];n[1]-=f[1];Bd(n,m);vd(n,f)}h.viewHints[0]+=1;return!0}return!1}}
function ff(a){var b=a.resolution,c=l(a.start)?a.start:ua(),d=l(a.duration)?a.duration:1E3,e=l(a.easing)?a.easing:af;return function(a,g){if(g.time<c)return g.animate=!0,g.viewHints[0]+=1,!0;if(g.time<c+d){var h=1-e((g.time-c)/d),m=b-g.viewState.resolution;g.animate=!0;g.viewState.resolution+=h*m;g.viewHints[0]+=1;return!0}return!1}};function gf(a,b,c,d){return l(d)?(d[0]=a,d[1]=b,d[2]=c,d):[a,b,c]}function hf(a,b,c){return a+"/"+b+"/"+c}function jf(a){var b=a[0],c=Array(b),d=1<<b-1,e,f;for(e=0;e<b;++e)f=48,a[1]&d&&(f+=1),a[2]&d&&(f+=2),c[e]=String.fromCharCode(f),d>>=1;return c.join("")}function kf(a){return hf(a[0],a[1],a[2])};function lf(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}function mf(a,b,c,d,e){return l(e)?(e.a=a,e.d=b,e.b=c,e.c=d,e):new lf(a,b,c,d)}lf.prototype.contains=function(a){return nf(this,a[1],a[2])};function of(a,b){return a.a<=b.a&&b.d<=a.d&&a.b<=b.b&&b.c<=a.c}function nf(a,b,c){return a.a<=b&&b<=a.d&&a.b<=c&&c<=a.c}function pf(a,b){return a.a==b.a&&a.b==b.b&&a.d==b.d&&a.c==b.c};function qf(a){this.c=a.html;this.a=l(a.tileRanges)?a.tileRanges:null}qf.prototype.b=function(){return this.c};var rf=!ub||ub&&9<=Gb;!vb&&!ub||ub&&ub&&9<=Gb||vb&&Eb("1.9.1");ub&&Eb("9");function sf(a,b){this.x=l(a)?a:0;this.y=l(b)?b:0}k=sf.prototype;k.clone=function(){return new sf(this.x,this.y)};k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};k.scale=function(a,b){var c=ka(b)?b:a;this.x*=a;this.y*=c;return this};function tf(a,b){this.width=a;this.height=b}k=tf.prototype;k.clone=function(){return new tf(this.width,this.height)};k.ka=function(){return!(this.width*this.height)};k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){var c=ka(b)?b:a;this.width*=a;this.height*=c;return this};function vf(a){return a?new wf(xf(a)):wa||(wa=new wf)}function yf(a){var b=document;return ja(a)?b.getElementById(a):a}function zf(a,b){sc(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Af?a.setAttribute(Af[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Af={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Bf(a){a=a.document.documentElement;return new tf(a.clientWidth,a.clientHeight)}
function Cf(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!rf&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ca(g.name),'"');if(g.type){f.push(' type="',Ca(g.type),'"');var h={};Hc(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(ja(g)?f.className=g:ha(g)?f.className=g.join(" "):zf(f,g));2<d.length&&Df(e,f,d,2);return f}
function Df(a,b,c,d){function e(c){c&&b.appendChild(ja(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];!ia(f)||ma(f)&&0<f.nodeType?e(f):Ta(Ef(f)?cb(f):f,e)}}function Ff(a){return document.createElement(a)}function Gf(a,b){Df(xf(a),a,arguments,1)}function Hf(a){for(var b;b=a.firstChild;)a.removeChild(b)}function If(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)}function Jf(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}
function Kf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function Lf(a){if(void 0!=a.firstElementChild)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}function Mf(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function xf(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ef(a){if(a&&"number"==typeof a.length){if(ma(a))return"function"==typeof a.item||"string"==typeof a.item;if(la(a))return"function"==typeof a.item}return!1}function wf(a){this.a=a||ba.document||document}function Nf(a){var b=a.a;a=wb?b.body||b.documentElement:b.documentElement;b=b.parentWindow||b.defaultView;return ub&&Eb("10")&&b.pageYOffset!=a.scrollTop?new sf(a.scrollLeft,a.scrollTop):new sf(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)}wf.prototype.appendChild=function(a,b){a.appendChild(b)};
wf.prototype.contains=Mf;function Of(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}k=Of.prototype;k.clone=function(){return new Of(this.top,this.right,this.bottom,this.left)};k.contains=function(a){return this&&a?a instanceof Of?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
k.scale=function(a,b){var c=ka(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function Pf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}k=Pf.prototype;k.clone=function(){return new Pf(this.left,this.top,this.width,this.height)};k.contains=function(a){return a instanceof Pf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
function Qf(a,b){var c=b.x<a.left?a.left-b.x:Math.max(b.x-(a.left+a.width),0),d=b.y<a.top?a.top-b.y:Math.max(b.y-(a.top+a.height),0);return c*c+d*d}k.distance=function(a){return Math.sqrt(Qf(this,a))};k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};k.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};k.scale=function(a,b){var c=ka(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function Rf(a,b){var c=xf(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Sf(a,b){return Rf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Tf(a,b,c){var d,e=vb&&(ob||zb)&&Eb("1.9");b instanceof sf?(d=b.x,b=b.y):(d=b,b=c);a.style.left=Uf(d,e);a.style.top=Uf(b,e)}
function Vf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}ub&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Wf(a){if(ub&&!(ub&&8<=Gb))return a.offsetParent;var b=xf(a),c=Sf(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Sf(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Xf(a){var b,c=xf(a),d=Sf(a,"position"),e=vb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new sf(0,0),g;b=c?xf(c):document;(g=!ub||ub&&9<=Gb)||(vf(b),g=!0);g=g?b.documentElement:b.body;if(a==g)return f;if(a.getBoundingClientRect)b=Vf(a),a=Nf(vf(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{b=a;do{f.x+=b.offsetLeft;
f.y+=b.offsetTop;b!=a&&(f.x+=b.clientLeft||0,f.y+=b.clientTop||0);if(wb&&"fixed"==Sf(b,"position")){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(sb||wb&&"absolute"==d)f.y-=c.body.offsetTop;for(b=a;(b=Wf(b))&&b!=c.body&&b!=g;)f.x-=b.scrollLeft,sb&&"TR"==b.tagName||(f.y-=b.scrollTop)}return f}function Yf(a,b){var c=Zf(a),d=Zf(b);return new sf(c.x-d.x,c.y-d.y)}
function Zf(a){if(1==a.nodeType){var b;if(a.getBoundingClientRect)b=Vf(a),b=new sf(b.left,b.top);else{b=Nf(vf(a));var c=Xf(a);b=new sf(c.x-b.x,c.y-b.y)}if(vb&&!Eb(12)){b:{c=Pa();if(void 0===a.style[c]&&(c=(wb?"Webkit":vb?"Moz":ub?"ms":sb?"O":null)+Qa(c),void 0!==a.style[c])){c=(wb?"-webkit":vb?"-moz":ub?"-ms":sb?"-o":null)+"-transform";break b}c="transform"}a=(a=Sf(a,c)||Sf(a,"transform"))?(a=a.match($f))?new sf(parseFloat(a[1]),parseFloat(a[2])):new sf(0,0):new sf(0,0);a=new sf(b.x+a.x,b.y+a.y)}else a=
b;return a}b=la(a.o);c=a;a.targetTouches?c=a.targetTouches[0]:b&&a.a.targetTouches&&(c=a.a.targetTouches[0]);return new sf(c.clientX,c.clientY)}function Uf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function ag(a){var b=bg;if("none"!=Sf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function bg(a){var b=a.offsetWidth,c=a.offsetHeight,d=wb&&!b&&!c;return l(b)&&!d||!a.getBoundingClientRect?new tf(b,c):(a=Vf(a),new tf(a.right-a.left,a.bottom-a.top))}function cg(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")}function dg(a,b){a.style.display=b?"":"none"}
function eg(a){var b=xf(a),c=ub&&a.currentStyle,d;if(d=c)vf(b),d=!0;if(d&&"auto"!=c.width&&"auto"!=c.height&&!c.boxSizing)return b=fg(a,c.width,"width","pixelWidth"),a=fg(a,c.height,"height","pixelHeight"),new tf(b,a);c=new tf(a.offsetWidth,a.offsetHeight);b=gg(a,"padding");a=hg(a);return new tf(c.width-a.left-b.left-b.right-a.right,c.height-a.top-b.top-b.bottom-a.bottom)}
function fg(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}function ig(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?fg(a,c,"left","pixelLeft"):0}
function gg(a,b){if(ub){var c=ig(a,b+"Left"),d=ig(a,b+"Right"),e=ig(a,b+"Top"),f=ig(a,b+"Bottom");return new Of(e,d,f,c)}c=Rf(a,b+"Left");d=Rf(a,b+"Right");e=Rf(a,b+"Top");f=Rf(a,b+"Bottom");return new Of(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c))}var jg={thin:2,medium:4,thick:6};function kg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jg?jg[c]:fg(a,c,"left","pixelLeft")}
function hg(a){if(ub&&!(ub&&9<=Gb)){var b=kg(a,"borderLeft"),c=kg(a,"borderRight"),d=kg(a,"borderTop");a=kg(a,"borderBottom");return new Of(d,c,a,b)}b=Rf(a,"borderLeftWidth");c=Rf(a,"borderRightWidth");d=Rf(a,"borderTopWidth");a=Rf(a,"borderBottomWidth");return new Of(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}var $f=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;function lg(a,b){var c=Ff("CANVAS");l(a)&&(c.width=a);l(b)&&(c.height=b);return c.getContext("2d")}
var mg=function(){var a;return function(){if(!l(a))if(ba.getComputedStyle){var b=Ff("P"),c,d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(b);for(var e in d)e in b.style&&(b.style[e]="translate(1px,1px)",c=ba.getComputedStyle(b).getPropertyValue(d[e]));Kf(b);a=c&&"none"!==c}else a=!1;return a}}(),ng=function(){var a;return function(){if(!l(a))if(ba.getComputedStyle){var b=Ff("P"),
c,d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(b);for(var e in d)e in b.style&&(b.style[e]="translate3d(1px,1px,1px)",c=ba.getComputedStyle(b).getPropertyValue(d[e]));Kf(b);a=c&&"none"!==c}else a=!1;return a}}();function og(a,b){var c=a.style;c.WebkitTransform=b;c.MozTransform=b;c.a=b;c.msTransform=b;c.transform=b;ub&&!Ib&&(a.style.transformOrigin="0 0")}
function pg(a,b){var c;if(ng()){if(l(6)){var d=Array(16);for(c=0;16>c;++c)d[c]=b[c].toFixed(6);c=d.join(",")}else c=b.join(",");og(a,"matrix3d("+c+")")}else if(mg()){d=[b[0],b[1],b[4],b[5],b[12],b[13]];if(l(6)){var e=Array(6);for(c=0;6>c;++c)e[c]=d[c].toFixed(6);c=e.join(",")}else c=d.join(",");og(a,"matrix("+c+")")}else a.style.left=Math.round(b[12])+"px",a.style.top=Math.round(b[13])+"px"};var qg=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function rg(a,b){var c,d,e=qg.length;for(d=0;d<e;++d)try{if(c=a.getContext(qg[d],b),null!==c)return c}catch(f){}return null};var sg=ba.devicePixelRatio||1,tg="ArrayBuffer"in ba,ug=!1,vg=function(){if(!("HTMLCanvasElement"in ba))return!1;try{var a=lg();if(null===a)return!1;l(a.setLineDash)&&(ug=!0);return!0}catch(b){return!1}}(),wg="DeviceOrientationEvent"in ba,xg="geolocation"in ba.navigator,yg="ontouchstart"in ba,zg="PointerEvent"in ba,Ag=!!ba.navigator.msPointerEnabled,Bg=function(){if(!("WebGLRenderingContext"in ba))return!1;try{var a=Ff("CANVAS");return!ga(rg(a,{kf:!0}))}catch(b){return!1}}();function Cg(a,b,c){fc.call(this,a,c);this.element=b}t(Cg,fc);function A(a){pd.call(this);this.a=a||[];Dg(this)}t(A,pd);k=A.prototype;k.clear=function(){for(;0<this.xb();)this.pop()};k.je=function(a){var b,c;b=0;for(c=a.length;b<c;++b)this.push(a[b]);return this};k.forEach=function(a,b){Ta(this.a,a,b)};k.Hg=function(){return this.a};k.item=function(a){return this.a[a]};k.xb=function(){return this.get("length")};k.Xc=function(a,b){eb(this.a,a,0,b);Dg(this);this.dispatchEvent(new Cg("add",b,this))};
k.pop=function(){return this.gd(this.xb()-1)};k.push=function(a){var b=this.a.length;this.Xc(b,a);return b};k.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return this.gd(c)};k.gd=function(a){var b=this.a[a];Ra.splice.call(this.a,a,1);Dg(this);this.dispatchEvent(new Cg("remove",b,this));return b};
k.si=function(a,b){var c=this.xb();if(a<c)c=this.a[a],this.a[a]=b,this.dispatchEvent(new Cg("remove",c,this)),this.dispatchEvent(new Cg("add",b,this));else{for(;c<a;++c)this.Xc(c,void 0);this.Xc(a,b)}};function Dg(a){a.set("length",a.a.length)};var Eg=/^#(?:[0-9a-f]{3}){1,2}$/i,Fg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,Gg=/^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;function Hg(a){return ha(a)?a:Ig(a)}function Jg(a){if(!ja(a)){var b=a[0];b!=(b|0)&&(b=b+.5|0);var c=a[1];c!=(c|0)&&(c=c+.5|0);var d=a[2];d!=(d|0)&&(d=d+.5|0);a="rgba("+b+","+c+","+d+","+a[3]+")"}return a}
var Ig=function(){var a={},b=0;return function(c,d){var e;if(a.hasOwnProperty(c))e=a[c];else{if(1024<=b){e=0;for(var f in a)0===(e++&3)&&(delete a[f],--b)}var g,h;Eg.exec(c)?(h=3==c.length-1?1:2,e=parseInt(c.substr(1+0*h,h),16),f=parseInt(c.substr(1+1*h,h),16),g=parseInt(c.substr(1+2*h,h),16),1==h&&(e=(e<<4)+e,f=(f<<4)+f,g=(g<<4)+g),e=[e,f,g,1]):(h=Gg.exec(c))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),h=Number(h[4]),e=[e,f,g,h],e=Kg(e,e)):(h=Fg.exec(c))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),
e=[e,f,g,1],e=Kg(e,e)):e=void 0;a[c]=e;++b}l(d)&&(d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e=d);return e}}();function Kg(a,b){var c=l(b)?b:[];c[0]=Jb(a[0]+.5|0,0,255);c[1]=Jb(a[1]+.5|0,0,255);c[2]=Jb(a[2]+.5|0,0,255);c[3]=Jb(a[3],0,1);return c};function Lg(){this.g=Id();this.c=void 0;this.a=Id();this.d=void 0;this.b=Id();this.f=void 0;this.e=Id();this.l=void 0;this.i=Id()}
function Mg(a,b,c,d,e){var f=!1;l(b)&&b!==a.c&&(f=a.a,Md(f),f[12]=b,f[13]=b,f[14]=b,f[15]=1,a.c=b,f=!0);if(l(c)&&c!==a.d){f=a.b;Md(f);f[0]=c;f[5]=c;f[10]=c;f[15]=1;var g=-.5*c+.5;f[12]=g;f[13]=g;f[14]=g;f[15]=1;a.d=c;f=!0}l(d)&&d!==a.f&&(f=Math.cos(d),g=Math.sin(d),Jd(a.e,.213+.787*f-.213*g,.213-.213*f+.143*g,.213-.213*f-.787*g,0,.715-.715*f-.715*g,.715+.285*f+.14*g,.715-.715*f+.715*g,0,.072-.072*f+.928*g,.072-.072*f-.283*g,.072+.928*f+.072*g,0,0,0,0,1),a.f=d,f=!0);l(e)&&e!==a.l&&(Jd(a.i,.213+.787*
e,.213-.213*e,.213-.213*e,0,.715-.715*e,.715+.285*e,.715-.715*e,0,.072-.072*e,.072-.072*e,.072+.928*e,0,0,0,0,1),a.l=e,f=!0);f&&(f=a.g,Md(f),l(c)&&Nd(f,a.b,f),l(b)&&Nd(f,a.a,f),l(e)&&Nd(f,a.i,f),l(d)&&Nd(f,a.e,f));return a.g};function Ng(a){if(a.classList)return a.classList;a=a.className;return ja(a)&&a.match(/\S+/g)||[]}function Og(a,b){return a.classList?a.classList.contains(b):Za(Ng(a),b)}function Pg(a,b){a.classList?a.classList.add(b):Og(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Qg(a,b){a.classList?a.classList.remove(b):Og(a,b)&&(a.className=Ua(Ng(a),function(a){return a!=b}).join(" "))};function Rg(a,b,c){fc.call(this,a);this.map=b;this.frameState=l(c)?c:null}t(Rg,fc);function Sg(a){pd.call(this);this.element=l(a.element)?a.element:null;this.D=l(a.target)?yf(a.target):null;this.a=null;this.i=[]}t(Sg,pd);Sg.prototype.I=function(){Kf(this.element);Sg.K.I.call(this)};Sg.prototype.d=function(){return this.a};Sg.prototype.yb=ca;
Sg.prototype.setMap=function(a){null===this.a||Kf(this.element);0!=this.i.length&&(Ta(this.i,Yc),this.i.length=0);this.a=a;null!==this.a&&((null===this.D?a.r:this.D).appendChild(this.element),this.yb!==ca&&this.i.push(y(a,"postrender",this.yb,!1,this)),a.O())};function Tg(a,b){this.a=a;this.e=b};function Ug(a){Tg.call(this,a,{mousedown:this.tg,mousemove:this.ug,mouseup:this.xg,mouseover:this.wg,mouseout:this.vg});this.c=a.b;this.b=[]}t(Ug,Tg);function Vg(a,b){for(var c=a.b,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var m=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=m)return!0}return!1}function Wg(a){var b=Xg(a,a.a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.isPrimary=!0;b.pointerType="mouse";return b}k=Ug.prototype;
k.tg=function(a){if(!Vg(this,a)){(1).toString()in this.c&&this.cancel(a);var b=Wg(a);this.c[(1).toString()]=a;Yg(this.a,Zg,b,a)}};k.ug=function(a){if(!Vg(this,a)){var b=Wg(a);Yg(this.a,$g,b,a)}};k.xg=function(a){if(!Vg(this,a)){var b=v(this.c,(1).toString());b&&b.button===a.button&&(b=Wg(a),Yg(this.a,ah,b,a),Dc(this.c,(1).toString()))}};k.wg=function(a){if(!Vg(this,a)){var b=Wg(a);bh(this.a,b,a)}};k.vg=function(a){if(!Vg(this,a)){var b=Wg(a);ch(this.a,b,a)}};
k.cancel=function(a){var b=Wg(a);this.a.cancel(b,a);Dc(this.c,(1).toString())};function dh(a){Tg.call(this,a,{MSPointerDown:this.Cg,MSPointerMove:this.Dg,MSPointerUp:this.Gg,MSPointerOut:this.Eg,MSPointerOver:this.Fg,MSPointerCancel:this.Bg,MSGotPointerCapture:this.zg,MSLostPointerCapture:this.Ag});this.c=a.b;this.b=["","unavailable","touch","pen","mouse"]}t(dh,Tg);function eh(a,b){var c=b;ka(b.a.pointerType)&&(c=Xg(b,b.a),c.pointerType=a.b[b.a.pointerType]);return c}k=dh.prototype;k.Cg=function(a){this.c[a.a.pointerId]=a;var b=eh(this,a);Yg(this.a,Zg,b,a)};
k.Dg=function(a){var b=eh(this,a);Yg(this.a,$g,b,a)};k.Gg=function(a){var b=eh(this,a);Yg(this.a,ah,b,a);Dc(this.c,a.a.pointerId)};k.Eg=function(a){var b=eh(this,a);ch(this.a,b,a)};k.Fg=function(a){var b=eh(this,a);bh(this.a,b,a)};k.Bg=function(a){var b=eh(this,a);this.a.cancel(b,a);Dc(this.c,a.a.pointerId)};k.Ag=function(a){this.a.dispatchEvent(new fh("lostpointercapture",a,a.a))};k.zg=function(a){this.a.dispatchEvent(new fh("gotpointercapture",a,a.a))};function hh(a){Tg.call(this,a,{pointerdown:this.Zh,pointermove:this.$h,pointerup:this.ci,pointerout:this.ai,pointerover:this.bi,pointercancel:this.Yh,gotpointercapture:this.Pf,lostpointercapture:this.sg})}t(hh,Tg);k=hh.prototype;k.Zh=function(a){ih(this.a,a)};k.$h=function(a){ih(this.a,a)};k.ci=function(a){ih(this.a,a)};k.ai=function(a){ih(this.a,a)};k.bi=function(a){ih(this.a,a)};k.Yh=function(a){ih(this.a,a)};k.sg=function(a){ih(this.a,a)};k.Pf=function(a){ih(this.a,a)};function fh(a,b,c){fc.call(this,a);this.a=b;a=l(c)?c:{};this.buttons=jh(a);this.pressure=kh(a,this.buttons);this.bubbles=v(a,"bubbles",!1);this.cancelable=v(a,"cancelable",!1);this.view=v(a,"view",null);this.detail=v(a,"detail",null);this.screenX=v(a,"screenX",0);this.screenY=v(a,"screenY",0);this.clientX=v(a,"clientX",0);this.clientY=v(a,"clientY",0);this.button=v(a,"button",0);this.relatedTarget=v(a,"relatedTarget",null);this.pointerId=v(a,"pointerId",0);this.width=v(a,"width",0);this.height=v(a,
"height",0);this.pointerType=v(a,"pointerType","");this.isPrimary=v(a,"isPrimary",!1);b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}t(fh,fc);function jh(a){if(a.buttons||lh)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}function kh(a,b){var c=0;a.pressure?c=a.pressure:c=b?.5:0;return c}var lh=!1;try{lh=1===(new MouseEvent("click",{buttons:1})).buttons}catch(mh){};function nh(a,b){Tg.call(this,a,{touchstart:this.Bi,touchmove:this.Ai,touchend:this.zi,touchcancel:this.yi});this.c=a.b;this.g=b;this.b=void 0;this.f=0;this.d=void 0}t(nh,Tg);k=nh.prototype;k.Ee=function(){this.f=0;this.d=void 0};
function oh(a,b,c){b=Xg(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.f;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.pressure=c.webkitForce||c.force||.5;b.isPrimary=a.b===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function ph(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.a.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=oh(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
k.Bi=function(a){var b=a.a.touches,c=xc(this.c),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.c[g];var m;if(!(m=1==g))a:{m=b.length;for(var n=void 0,p=0;p<m;p++)if(n=b[p],n.identifier===g-2){m=!0;break a}m=!1}m||e.push(h.Bb)}for(f=0;f<e.length;++f)this.ud(a,e[f])}b=uc(this.c);if(0===b||1===b&&(1).toString()in this.c)this.b=a.a.changedTouches[0].identifier,l(this.d)&&ba.clearTimeout(this.d);qh(this,a);this.f++;ph(this,a,this.Uh)};
k.Uh=function(a,b){this.c[b.pointerId]={target:b.target,Bb:b,Ae:b.target};var c=this.a;b.bubbles=!0;Yg(c,rh,b,a);c=this.a;b.bubbles=!1;Yg(c,sh,b,a);Yg(this.a,Zg,b,a)};k.Ai=function(a){a.preventDefault();ph(this,a,this.yg)};k.yg=function(a,b){var c=v(this.c,b.pointerId);if(c){var d=c.Bb,e=c.Ae;Yg(this.a,$g,b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(ch(this.a,d,a),bh(this.a,b,a)):(b.target=e,b.relatedTarget=null,this.ud(a,b)));c.Bb=b;c.Ae=b.target}};
k.zi=function(a){qh(this,a);ph(this,a,this.Ci)};k.Ci=function(a,b){Yg(this.a,ah,b,a);this.a.Bb(b,a);var c=this.a;b.bubbles=!1;Yg(c,th,b,a);Dc(this.c,b.pointerId);b.isPrimary&&(this.b=void 0,this.d=ba.setTimeout(sa(this.Ee,this),200))};k.yi=function(a){ph(this,a,this.ud)};k.ud=function(a,b){this.a.cancel(b,a);this.a.Bb(b,a);var c=this.a;b.bubbles=!1;Yg(c,th,b,a);Dc(this.c,b.pointerId);b.isPrimary&&(this.b=void 0,this.d=ba.setTimeout(sa(this.Ee,this),200))};
function qh(a,b){var c=a.g.b,d=b.a.changedTouches[0];if(a.b===d.identifier){var e=[d.clientX,d.clientY];c.push(e);ba.setTimeout(function(){ab(c,e)},2500)}};function uh(a){hd.call(this);this.e=a;this.b={};this.d={};this.c=[];zg?vh(this,new hh(this)):Ag?vh(this,new dh(this)):(a=new Ug(this),vh(this,a),yg&&vh(this,new nh(this,a)));a=this.c.length;for(var b,c=0;c<a;c++)b=this.c[c],wh(this,xc(b.e))}t(uh,hd);function vh(a,b){var c=xc(b.e);c&&(Ta(c,function(a){var c=b.e[a];c&&(this.d[a]=sa(c,b))},a),a.c.push(b))}uh.prototype.a=function(a){var b=this.d[a.type];b&&b(a)};function wh(a,b){Ta(b,function(a){y(this.e,a,this.a,!1,this)},a)}
function xh(a,b){Ta(b,function(a){Xc(this.e,a,this.a,!1,this)},a)}function Xg(a,b){for(var c={},d,e=0,f=yh.length;e<f;e++)d=yh[e][0],c[d]=a[d]||b[d]||yh[e][1];return c}uh.prototype.Bb=function(a,b){a.bubbles=!0;Yg(this,zh,a,b)};uh.prototype.cancel=function(a,b){Yg(this,Ah,a,b)};function ch(a,b,c){a.Bb(b,c);b.target.contains(b.relatedTarget)||(b.bubbles=!1,Yg(a,th,b,c))}function bh(a,b,c){b.bubbles=!0;Yg(a,rh,b,c);b.target.contains(b.relatedTarget)||(b.bubbles=!1,Yg(a,sh,b,c))}
function Yg(a,b,c,d){a.dispatchEvent(new fh(b,d,c))}function ih(a,b){a.dispatchEvent(new fh(b.type,b,b.a))}uh.prototype.I=function(){for(var a=this.c.length,b,c=0;c<a;c++)b=this.c[c],xh(this,xc(b.e));uh.K.I.call(this)};
var $g="pointermove",Zg="pointerdown",ah="pointerup",rh="pointerover",zh="pointerout",sh="pointerenter",th="pointerleave",Ah="pointercancel",yh=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",
!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Bh(a){a=l(a)?a:{};this.o=Ff("UL");this.l=Ff("LI");this.o.appendChild(this.l);dg(this.l,!1);this.b=l(a.collapsed)?a.collapsed:!0;this.f=l(a.collapsible)?a.collapsible:!0;this.f||(this.b=!1);var b=l(a.className)?a.className:"ol-attribution",c=Cf("SPAN",{role:"tooltip"},l(a.tipLabel)?a.tipLabel:"Attributions");this.q=l(a.collapseLabel)?a.collapseLabel:"\u00bb";this.u=l(a.label)?a.label:"i";this.r=Cf("SPAN",{},this.f&&!this.b?this.q:this.u);var d=Cf("BUTTON",{"class":"ol-has-tooltip",type:"button"},
this.r);d.appendChild(c);c=new uh(d);dc(this,c);y(c,ah,this.Vg,!1,this);y(d,"click",this.Ug,!1,this);y(d,["mouseout",hc],function(){this.blur()},!1);b=Cf("DIV",{"class":b+" ol-unselectable ol-control"+(this.b&&this.f?" ol-collapsed":"")+(this.f?"":" ol-uncollapsible")},this.o,d);Sg.call(this,{element:b,target:a.target});this.k=!0;this.g={};this.e={};this.F={}}t(Bh,Sg);k=Bh.prototype;
k.yb=function(a){a=a.frameState;if(null===a)this.k&&(dg(this.element,!1),this.k=!1);else{var b,c,d,e,f,g,h,m,n,p=a.layerStatesArray,r=Fc(a.attributions),q={};c=0;for(b=p.length;c<b;c++)if(d=p[c].layer.a,n=na(d).toString(),m=d.f,null!==m)for(d=0,e=m.length;d<e;d++)if(g=m[d],h=na(g).toString(),!(h in r)){f=a.usedTiles[n];var u;if(u=l(f))a:if(null===g.a)u=!0;else{var x=u=void 0,B=void 0,E=void 0;for(E in f)if(E in g.a)for(B=f[E],u=0,x=g.a[E].length;u<x;++u){var F=g.a[E][u];if(F.a<=B.d&&F.d>=B.a&&F.b<=
B.c&&F.c>=B.b){u=!0;break a}}u=!1}u?(h in q&&delete q[h],r[h]=g):q[h]=g}b=[r,q];c=b[0];b=b[1];for(var w in this.g)w in c?(this.e[w]||(dg(this.g[w],!0),this.e[w]=!0),delete c[w]):w in b?(this.e[w]&&(dg(this.g[w],!1),delete this.e[w]),delete b[w]):(Kf(this.g[w]),delete this.g[w],delete this.e[w]);for(w in c)n=Ff("LI"),n.innerHTML=c[w].c,this.o.appendChild(n),this.g[w]=n,this.e[w]=!0;for(w in b)n=Ff("LI"),n.innerHTML=b[w].c,dg(n,!1),this.o.appendChild(n),this.g[w]=n;w=!Bc(this.e)||!Bc(a.logos);this.k!=
w&&(dg(this.element,w),this.k=w);w&&Bc(this.e)?Pg(this.element,"ol-logo-only"):Qg(this.element,"ol-logo-only");var U;a=a.logos;w=this.F;for(U in w)U in a||(Kf(w[U]),delete w[U]);for(var Q in a)Q in w||(U=new Image,U.src=Q,c=a[Q],""===c?c=U:(c=Cf("A",{href:c,target:"_blank"}),c.appendChild(U)),this.l.appendChild(c),w[Q]=c);dg(this.l,!Bc(a))}};k.Ug=function(a){0!==a.screenX&&0!==a.screenY||Ch(this)};k.Vg=function(a){a.a.preventDefault();Ch(this)};
function Ch(a){var b=a.element;Og(b,"ol-collapsed")?Qg(b,"ol-collapsed"):Pg(b,"ol-collapsed");var b=a.r,c=a.b?a.q:a.u;if("textContent"in b)b.textContent=c;else if(3==b.nodeType)b.data=c;else if(b.firstChild&&3==b.firstChild.nodeType){for(;b.lastChild!=b.firstChild;)b.removeChild(b.lastChild);b.firstChild.data=c}else Hf(b),b.appendChild(xf(b).createTextNode(String(c)));a.b=!a.b}k.of=function(){return this.f};
k.ui=function(a){if(this.f!==a){this.f=a;var b=this.element;Og(b,"ol-uncollapsible")?Qg(b,"ol-uncollapsible"):Pg(b,"ol-uncollapsible");!a&&this.b&&Ch(this)}};k.ti=function(a){this.f&&this.b!==a&&Ch(this)};k.nf=function(){return this.b};function Dh(a){a=l(a)?a:{};var b=l(a.className)?a.className:"ol-rotate";this.b=Cf("SPAN",{"class":"ol-compass"},l(a.label)?a.label:"\u21e7");var c=Cf("SPAN",{role:"tooltip"},l(a.tipLabel)?a.tipLabel:"Reset rotation"),c=Cf("BUTTON",{"class":b+"-reset ol-has-tooltip",name:"ResetRotation",type:"button"},c,this.b),d=new uh(c);dc(this,d);y(d,ah,Dh.prototype.k,!1,this);y(c,"click",Dh.prototype.l,!1,this);y(c,["mouseout",hc],function(){this.blur()},!1);b=Cf("DIV",b+" ol-unselectable ol-control",c);Sg.call(this,
{element:b,target:a.target});this.f=l(a.duration)?a.duration:250;this.e=l(a.autoHide)?a.autoHide:!0;this.g=void 0;b.style.opacity=this.e?0:1}t(Dh,Sg);Dh.prototype.l=function(a){0!==a.screenX&&0!==a.screenY||Eh(this)};Dh.prototype.k=function(a){a.a.preventDefault();Eh(this)};function Eh(a){for(var b=a.a,c=b.a(),d=c.e();d<-Math.PI;)d+=2*Math.PI;for(;d>Math.PI;)d-=2*Math.PI;l(d)&&(0<a.f&&b.Ea(ef({rotation:d,duration:a.f,easing:$e})),c.q(0))}
Dh.prototype.yb=function(a){a=a.frameState;if(null!==a){a=a.viewState.rotation;if(a!=this.g){var b="rotate("+180*a/Math.PI+"deg)";this.e&&(this.element.style.opacity=0===a?0:1);this.b.style.msTransform=b;this.b.style.webkitTransform=b;this.b.style.transform=b}this.g=a}};function Fh(a){a=l(a)?a:{};var b=l(a.className)?a.className:"ol-zoom",c=l(a.delta)?a.delta:1,d=l(a.zoomInLabel)?a.zoomInLabel:"+",e=l(a.zoomOutLabel)?a.zoomOutLabel:"\u2212",f=l(a.zoomOutTipLabel)?a.zoomOutTipLabel:"Zoom out",g=Cf("SPAN",{role:"tooltip"},l(a.zoomInTipLabel)?a.zoomInTipLabel:"Zoom in"),d=Cf("BUTTON",{"class":b+"-in ol-has-tooltip",type:"button"},g,d),g=new uh(d);dc(this,g);y(g,ah,ta(Fh.prototype.f,c),!1,this);y(d,"click",ta(Fh.prototype.e,c),!1,this);y(d,["mouseout",hc],function(){this.blur()},
!1);f=Cf("SPAN",{role:"tooltip"},f);e=Cf("BUTTON",{"class":b+"-out  ol-has-tooltip",type:"button"},f,e);f=new uh(e);dc(this,f);y(f,ah,ta(Fh.prototype.f,-c),!1,this);y(e,"click",ta(Fh.prototype.e,-c),!1,this);y(e,["mouseout",hc],function(){this.blur()},!1);b=Cf("DIV",b+" ol-unselectable ol-control",d,e);Sg.call(this,{element:b,target:a.target});this.b=l(a.duration)?a.duration:250}t(Fh,Sg);Fh.prototype.e=function(a,b){0!==b.screenX&&0!==b.screenY||Gh(this,a)};
Fh.prototype.f=function(a,b){b.a.preventDefault();Gh(this,a)};function Gh(a,b){var c=a.a,d=c.a(),e=d.b();l(e)&&(0<a.b&&c.Ea(ff({resolution:e,duration:a.b,easing:$e})),c=d.constrainResolution(e,b),d.d(c))};function Hh(a){a=l(a)?a:{};var b=new A;(l(a.zoom)?a.zoom:1)&&b.push(new Fh(a.zoomOptions));(l(a.rotate)?a.rotate:1)&&b.push(new Dh(a.rotateOptions));(l(a.attribution)?a.attribution:1)&&b.push(new Bh(a.attributionOptions));return b};var Ih=wb?"webkitfullscreenchange":vb?"mozfullscreenchange":ub?"MSFullscreenChange":"fullscreenchange";function Jh(){var a=vf().a,b=a.body;return!!(b.webkitRequestFullscreen||b.mozRequestFullScreen&&a.mozFullScreenEnabled||b.msRequestFullscreen&&a.msFullscreenEnabled||b.requestFullscreen&&a.fullscreenEnabled)}
function Kh(a){a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen?a.msRequestFullscreen():a.requestFullscreen&&a.requestFullscreen()}function Lh(){var a=vf().a;return!!(a.webkitIsFullScreen||a.mozFullScreen||a.msFullscreenElement||a.fullscreenElement)};function Mh(a){a=l(a)?a:{};this.b=l(a.className)?a.className:"ol-full-screen";var b=Cf("SPAN",{role:"tooltip"},l(a.tipLabel)?a.tipLabel:"Toggle full-screen"),c=Cf("BUTTON",{"class":this.b+"-"+Lh()+" ol-has-tooltip"});c.appendChild(b);b=new uh(c);dc(this,b);y(b,ah,this.l,!1,this);y(c,"click",this.g,!1,this);y(c,["mouseout",hc],function(){this.blur()},!1);y(ba.document,Ih,this.e,!1,this);b=this.b+" ol-unselectable ol-control"+(Jh()?"":"ol-unsupported");c=Cf("DIV",b,c);Sg.call(this,{element:c,target:a.target});
this.f=l(a.keys)?a.keys:!1}t(Mh,Sg);Mh.prototype.g=function(a){0!==a.screenX&&0!==a.screenY||Nh(this)};Mh.prototype.l=function(a){a.a.preventDefault();Nh(this)};
function Nh(a){if(Jh()){var b=a.a;null!==b&&(Lh()?(a=vf().a,a.webkitCancelFullScreen?a.webkitCancelFullScreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.msExitFullscreen?a.msExitFullscreen():a.exitFullscreen&&a.exitFullscreen()):(b=b.rc(),b=yf(b),a.f?b.mozRequestFullScreenWithKeys?b.mozRequestFullScreenWithKeys():b.webkitRequestFullscreen?b.webkitRequestFullscreen():Kh(b):Kh(b)))}}
Mh.prototype.e=function(){var a=this.b+"-true",b=this.b+"-false",c=Lf(this.element),d=this.a;Lh()?Og(c,b)&&(Qg(c,b),Pg(c,a)):Og(c,a)&&(Qg(c,a),Pg(c,b));null===d||d.F()};function C(a){a=l(a)?a:{};var b=Cf("DIV",{"class":l(a.className)?a.className:"ol-mouse-position"});Sg.call(this,{element:b,target:a.target});y(this,td("projection"),this.F,!1,this);l(a.coordinateFormat)&&this.q(a.coordinateFormat);l(a.projection)&&this.o(Be(a.projection));this.Q=l(a.undefinedHTML)?a.undefinedHTML:"";this.l=b.innerHTML;this.f=this.e=this.b=null}t(C,Sg);
C.prototype.yb=function(a){a=a.frameState;null===a?this.b=null:this.b!=a.viewState.projection&&(this.b=a.viewState.projection,this.e=null);Oh(this,this.f)};C.prototype.F=function(){this.e=null};C.prototype.g=function(){return this.get("coordinateFormat")};C.prototype.getCoordinateFormat=C.prototype.g;C.prototype.k=function(){return this.get("projection")};C.prototype.getProjection=C.prototype.k;C.prototype.r=function(a){a=Yf(a,this.a.b);this.f=[a.x,a.y];Oh(this,this.f)};
C.prototype.u=function(){Oh(this,null);this.f=null};C.prototype.setMap=function(a){C.K.setMap.call(this,a);null!==a&&(a=a.b,this.i.push(y(a,"mousemove",this.r,!1,this),y(a,"mouseout",this.u,!1,this)))};C.prototype.q=function(a){this.set("coordinateFormat",a)};C.prototype.setCoordinateFormat=C.prototype.q;C.prototype.o=function(a){this.set("projection",a)};C.prototype.setProjection=C.prototype.o;
function Oh(a,b){var c=a.Q;if(null!==b&&null!==a.b){if(null===a.e){var d=a.k();a.e=l(d)?Ae(a.b,d):Te}d=a.a.ta(b);null!==d&&(a.e(d,d),c=a.g(),c=l(c)?c(d):d.toString())}l(a.l)&&c==a.l||(a.element.innerHTML=c,a.l=c)};function Ph(a){a=l(a)?a:{};var b=l(a.className)?a.className:"ol-scale-line";this.g=Cf("DIV",{"class":b+"-inner"});this.f=Cf("DIV",{"class":b+" ol-unselectable"},this.g);this.q=null;this.l=l(a.minWidth)?a.minWidth:64;this.b=!1;this.u=void 0;this.r="";this.e=null;Sg.call(this,{element:this.f,target:a.target});y(this,td("units"),this.F,!1,this);this.o(a.units||"metric")}t(Ph,Sg);var Qh=[1,2,5];Ph.prototype.k=function(){return this.get("units")};Ph.prototype.getUnits=Ph.prototype.k;
Ph.prototype.yb=function(a){a=a.frameState;null===a?this.q=null:this.q=a.viewState;Rh(this)};Ph.prototype.F=function(){Rh(this)};Ph.prototype.o=function(a){this.set("units",a)};Ph.prototype.setUnits=Ph.prototype.o;
function Rh(a){var b=a.q;if(null===b)a.b&&(dg(a.f,!1),a.b=!1);else{var c=b.center,d=b.projection,b=d.yd(b.resolution,c),e=d.c,f=a.k();"degrees"!=e||"metric"!=f&&"imperial"!=f&&"us"!=f&&"nautical"!=f?"ft"!=e&&"m"!=e||"degrees"!=f?a.e=null:(null===a.e&&(a.e=Ae(d,Be("EPSG:4326"))),c=Math.cos(Mb(a.e(c)[1])),d=we.radius,"ft"==e&&(d/=.3048),b*=180/(Math.PI*c*d)):(a.e=null,c=Math.cos(Mb(c[1])),b*=Math.PI*c*we.radius/180);c=a.l*b;e="";"degrees"==f?c<1/60?(e="\u2033",b*=3600):1>c?(e="\u2032",b*=60):e="\u00b0":
"imperial"==f?.9144>c?(e="in",b/=.0254):1609.344>c?(e="ft",b/=.3048):(e="mi",b/=1609.344):"nautical"==f?(b/=1852,e="nm"):"metric"==f?1>c?(e="mm",b*=1E3):1E3>c?e="m":(e="km",b/=1E3):"us"==f&&(.9144>c?(e="in",b*=39.37):1609.344>c?(e="ft",b/=.30480061):(e="mi",b/=1609.3472));for(var f=3*Math.floor(Math.log(a.l*b)/Math.log(10)),g,h;;){g=Qh[f%3]*Math.pow(10,Math.floor(f/3));h=Math.round(g/b);if(isNaN(h)){dg(a.f,!1);a.b=!1;return}if(h>=a.l)break;++f}g=g+e;a.r!=g&&(a.g.innerHTML=g,a.r=g);a.u!=h&&(a.g.style.width=
h+"px",a.u=h);a.b||(dg(a.f,!0),a.b=!0)}};function Sh(a){ac.call(this);this.c=a;this.a={}}t(Sh,ac);var Th=[];Sh.prototype.ya=function(a,b,c,d){ha(b)||(b&&(Th[0]=b.toString()),b=Th);for(var e=0;e<b.length;e++){var f=y(a,b[e],c||this.handleEvent,d||!1,this.c||this);if(!f)break;this.a[f.key]=f}return this};
Sh.prototype.Od=function(a,b,c,d,e){if(ha(b))for(var f=0;f<b.length;f++)this.Od(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.c||this,c=Qc(c),d=!!d,b=oc(a)?Lc(a.Qa,String(b),c,d,e):a?(a=Sc(a))?Lc(a,b,c,d,e):null:null,b&&(Yc(b),delete this.a[b.key]);return this};function Uh(a){sc(a.a,Yc);a.a={}}Sh.prototype.I=function(){Sh.K.I.call(this);Uh(this)};Sh.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Vh(a,b,c){hd.call(this);this.target=a;this.handle=b||a;this.c=c||new Pf(NaN,NaN,NaN,NaN);this.b=xf(a);this.a=new Sh(this);dc(this,this.a);y(this.handle,["touchstart","mousedown"],this.Ke,!1,this)}t(Vh,hd);var Wh=ub||vb&&Eb("1.9.3");k=Vh.prototype;k.clientX=0;k.clientY=0;k.screenX=0;k.screenY=0;k.Le=0;k.Me=0;k.Sb=0;k.Tb=0;k.rb=!1;k.I=function(){Vh.K.I.call(this);Xc(this.handle,["touchstart","mousedown"],this.Ke,!1,this);Uh(this.a);Wh&&this.b.releaseCapture();this.handle=this.target=null};
k.Ke=function(a){var b="mousedown"==a.type;if(this.rb||b&&!mc(a))this.dispatchEvent("earlycancel");else if(Xh(a),this.dispatchEvent(new Yh("start",this,a.clientX,a.clientY))){this.rb=!0;a.preventDefault();var b=this.b,c=b.documentElement,d=!Wh;this.a.ya(b,["touchmove","mousemove"],this.dg,d);this.a.ya(b,["touchend","mouseup"],this.Jc,d);Wh?(c.setCapture(!1),this.a.ya(c,"losecapture",this.Jc)):this.a.ya(b?b.parentWindow||b.defaultView:window,"blur",this.Jc);this.e&&this.a.ya(this.e,"scroll",this.Th,
d);this.clientX=this.Le=a.clientX;this.clientY=this.Me=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;this.Sb=this.target.offsetLeft;this.Tb=this.target.offsetTop;this.d=Nf(vf(this.b));ua()}};k.Jc=function(a){Uh(this.a);Wh&&this.b.releaseCapture();if(this.rb){Xh(a);this.rb=!1;var b=Zh(this,this.Sb),c=$h(this,this.Tb);this.dispatchEvent(new Yh("end",this,a.clientX,a.clientY,0,b,c))}else this.dispatchEvent("earlycancel")};
function Xh(a){var b=a.type;"touchstart"==b||"touchmove"==b?kc(a,a.a.targetTouches[0],a.b):"touchend"!=b&&"touchcancel"!=b||kc(a,a.a.changedTouches[0],a.b)}
k.dg=function(a){Xh(a);var b=1*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.rb){var d=this.Le-this.clientX,e=this.Me-this.clientY;if(0<d*d+e*e)if(this.dispatchEvent(new Yh("start",this,a.clientX,a.clientY)))this.rb=!0;else{this.qb||this.Jc(a);return}}c=ai(this,b,c);b=c.x;c=c.y;this.rb&&this.dispatchEvent(new Yh("beforedrag",this,a.clientX,a.clientY,0,b,c))&&(bi(this,a,b,c),a.preventDefault())};
function ai(a,b,c){var d=Nf(vf(a.b));b+=d.x-a.d.x;c+=d.y-a.d.y;a.d=d;a.Sb+=b;a.Tb+=c;b=Zh(a,a.Sb);a=$h(a,a.Tb);return new sf(b,a)}k.Th=function(a){var b=ai(this,0,0);a.clientX=this.clientX;a.clientY=this.clientY;bi(this,a,b.x,b.y)};function bi(a,b,c,d){a.target.style.left=c+"px";a.target.style.top=d+"px";a.dispatchEvent(new Yh("drag",a,b.clientX,b.clientY,0,c,d))}
function Zh(a,b){var c=a.c,d=isNaN(c.left)?null:c.left,c=isNaN(c.width)?0:c.width;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}function $h(a,b){var c=a.c,d=isNaN(c.top)?null:c.top,c=isNaN(c.height)?0:c.height;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}function Yh(a,b,c,d,e,f,g){fc.call(this,a);this.clientX=c;this.clientY=d;this.left=l(f)?f:b.Sb;this.top=l(g)?g:b.Tb}t(Yh,fc);function ci(a){a=l(a)?a:{};this.b=void 0;this.f=di;this.g=!1;var b=l(a.className)?a.className:"ol-zoomslider";a=Cf("DIV",[b+"-thumb","ol-unselectable"]);b=Cf("DIV",[b,"ol-unselectable"],a);this.e=new Vh(a);dc(this,this.e);y(this.e,["drag","end"],this.k,void 0,this);y(b,"click",this.l,!1,this);y(a,"click",gc);Sg.call(this,{element:b})}t(ci,Sg);var di=0;ci.prototype.setMap=function(a){ci.K.setMap.call(this,a);null===a||a.O()};
ci.prototype.yb=function(a){if(null!==a.frameState){if(!this.g){var b=this.element,c=Lf(b),b=eg(b),d;d=Xf(c);var e=ag(c);d=new Pf(d.x,d.y,e.width,e.height);var e=gg(c,"margin"),f=hg(c),c=b.width-e.left-e.right-f.left-f.right-d.width;d=b.height-e.top-e.bottom-f.top-f.bottom-d.height;b.width>b.height?(this.f=1,b=new Pf(0,0,c,0)):(this.f=di,b=new Pf(0,0,0,d));this.e.c=b||new Pf(NaN,NaN,NaN,NaN);this.g=!0}a=a.frameState.viewState.resolution;a!==this.b&&(this.b=a,a=-1*(We(this.a.a())(a)-1),b=this.e,c=
Lf(this.element),1==this.f?Tf(c,b.c.left+b.c.width*a):Tf(c,b.c.left,b.c.top+b.c.height*a))}};ci.prototype.l=function(a){var b=this.a,c=b.a();a=ei(this,fi(this,a.offsetX,a.offsetY));b.Ea(ff({resolution:a,duration:200,easing:$e}));a=c.constrainResolution(a);c.d(a)};function fi(a,b,c){var d=a.e.c,e=0;return e=1===a.f?(b-d.left)/d.width:(c-d.top)/d.height}function ei(a,b){b=-1*(Jb(b,0,1)-1);return Ve(a.a.a())(b)}
ci.prototype.k=function(a){var b=this.a,c=b.a();"drag"===a.type?(a=ei(this,fi(this,a.left,a.top)),a!==this.b&&(this.b=a,c.d(a))):(b.Ea(ff({resolution:this.b,duration:200,easing:$e})),a=c.constrainResolution(this.b),c.d(a))};function gi(a){a=l(a)?a:{};this.b=l(a.extent)?a.extent:null;var b=l(a.className)?a.className:"ol-zoom-extent",c=Cf("SPAN",{role:"tooltip"},l(a.tipLabel)?a.tipLabel:"Fit to extent"),d=Cf("BUTTON",{"class":"ol-has-tooltip"});d.appendChild(c);c=new uh(d);dc(this,c);y(c,ah,this.f,!1,this);y(d,"click",this.e,!1,this);y(d,["mouseout",hc],function(){this.blur()},!1);b=Cf("DIV",b+" ol-unselectable ol-control",d);Sg.call(this,{element:b,target:a.target})}t(gi,Sg);
gi.prototype.e=function(a){0!==a.screenX&&0!==a.screenY||hi(this)};gi.prototype.f=function(a){a.a.preventDefault();hi(this)};function hi(a){var b=a.a,c=b.a();a=null===a.b?c.o.s():a.b;b=b.e();c.Yd(a,b)};function D(a){pd.call(this);a=l(a)?a:{};this.a=null;y(this,td("tracking"),this.l,!1,this);this.b(l(a.tracking)?a.tracking:!1)}t(D,pd);D.prototype.I=function(){this.b(!1);D.K.I.call(this)};
D.prototype.k=function(a){a=a.a;if(null!=a.alpha){var b=Mb(a.alpha);this.set("alpha",b);"boolean"==typeof a.absolute&&a.absolute?this.set("heading",b):null!=a.webkitCompassHeading&&null!=a.webkitCompassAccuracy&&-1!=a.webkitCompassAccuracy&&this.set("heading",Mb(a.webkitCompassHeading))}null!=a.beta&&this.set("beta",Mb(a.beta));null!=a.gamma&&this.set("gamma",Mb(a.gamma));this.n()};D.prototype.e=function(){return this.get("alpha")};D.prototype.getAlpha=D.prototype.e;D.prototype.f=function(){return this.get("beta")};
D.prototype.getBeta=D.prototype.f;D.prototype.g=function(){return this.get("gamma")};D.prototype.getGamma=D.prototype.g;D.prototype.i=function(){return this.get("heading")};D.prototype.getHeading=D.prototype.i;D.prototype.d=function(){return this.get("tracking")};D.prototype.getTracking=D.prototype.d;D.prototype.l=function(){if(wg){var a=this.d();a&&null===this.a?this.a=y(ba,"deviceorientation",this.k,!1,this):a||null===this.a||(Yc(this.a),this.a=null)}};
D.prototype.b=function(a){this.set("tracking",a)};D.prototype.setTracking=D.prototype.b;function ii(a){pd.call(this);this.a=a;y(this.a,["change","input"],this.i,!1,this);y(this,td("value"),this.l,!1,this);y(this,td("checked"),this.g,!1,this)}t(ii,pd);ii.prototype.b=function(){return this.get("checked")};ii.prototype.getChecked=ii.prototype.b;ii.prototype.d=function(){return this.get("value")};ii.prototype.getValue=ii.prototype.d;ii.prototype.f=function(a){this.set("value",a)};ii.prototype.setValue=ii.prototype.f;ii.prototype.e=function(a){this.set("checked",a)};
ii.prototype.setChecked=ii.prototype.e;ii.prototype.i=function(){var a=this.a;"checkbox"===a.type||"radio"===a.type?this.e(a.checked):this.f(a.value)};ii.prototype.g=function(){this.a.checked=this.b()};ii.prototype.l=function(){this.a.value=this.d()};function ji(a,b,c,d){Rg.call(this,a,b,d);this.a=c;this.originalEvent=c.a;this.pixel=b.xd(this.originalEvent);this.coordinate=b.ta(this.pixel)}t(ji,Rg);ji.prototype.preventDefault=function(){ji.K.preventDefault.call(this);this.a.preventDefault()};ji.prototype.d=function(){ji.K.d.call(this);this.a.d()};function ki(a,b,c,d){ji.call(this,a,b,c.a,d);this.c=c}t(ki,ji);
function li(a){hd.call(this);this.c=a;this.e=0;this.i=!1;this.f=this.g=this.b=null;a=this.c.b;this.p=0;this.k={};this.d=new uh(a);this.a=null;this.g=y(this.d,Zg,this.fg,!1,this);this.l=y(this.d,$g,this.ii,!1,this)}t(li,hd);function mi(a,b){var c;c=new ki(ni,a.c,b);a.dispatchEvent(c);0!==a.e?(ba.clearTimeout(a.e),a.e=0,c=new ki(oi,a.c,b),a.dispatchEvent(c)):a.e=ba.setTimeout(sa(function(){this.e=0;var a=new ki(pi,this.c,b);this.dispatchEvent(a)},a),250)}
function qi(a,b){b.type==ri||b.type==si?delete a.k[b.pointerId]:b.type==ti&&(a.k[b.pointerId]=!0);a.p=uc(a.k)}k=li.prototype;k.ne=function(a){qi(this,a);var b=new ki(ri,this.c,a);this.dispatchEvent(b);0===this.p&&(Ta(this.b,Yc),this.b=null,ec(this.a),this.a=null);!this.i&&0===a.button&&mi(this,this.f)};
k.fg=function(a){qi(this,a);var b=new ki(ti,this.c,a);this.dispatchEvent(b);this.f=a;this.i=!1;null===this.b&&(this.a=new uh(document),this.b=[y(this.a,ui,this.Sg,!1,this),y(this.a,ri,this.ne,!1,this),y(this.d,si,this.ne,!1,this)]);a.preventDefault()};k.Sg=function(a){if(a.clientX!=this.f.clientX||a.clientY!=this.f.clientY){this.i=!0;var b=new ki(vi,this.c,a);this.dispatchEvent(b)}a.preventDefault()};k.ii=function(a){this.dispatchEvent(new ki(a.type,this.c,a))};
k.I=function(){null!==this.l&&(Yc(this.l),this.l=null);null!==this.g&&(Yc(this.g),this.g=null);null!==this.b&&(Ta(this.b,Yc),this.b=null);null!==this.a&&(ec(this.a),this.a=null);null!==this.d&&(ec(this.d),this.d=null);li.K.I.call(this)};var pi="singleclick",ni="click",oi="dblclick",vi="pointerdrag",ui="pointermove",ti="pointerdown",ri="pointerup",si="pointercancel",wi={Wi:pi,Li:ni,Mi:oi,Pi:vi,Si:ui,Oi:ti,Vi:ri,Ui:"pointerover",Ti:"pointerout",Qi:"pointerenter",Ri:"pointerleave",Ni:si};function xi(a){a=a.a;return a.c&&!a.i&&a.e}function yi(a){return a.type==pi}function zi(a){a=a.a;return!a.c&&!a.i&&!a.e}function Ai(a){a=a.a;return!a.c&&!a.i&&a.e}function Bi(a){a=a.a.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function Ci(a){return 1==a.c.pointerId};function Di(){ld.call(this);this.extent=void 0;this.i=-1;this.l={};this.o=this.k=0}t(Di,ld);Di.prototype.g=function(a,b){var c=l(b)?b:[NaN,NaN];this.Fa(a[0],a[1],c,Infinity);return c};Di.prototype.zb=cd;Di.prototype.f=function(a,b){this.Mb(Se(a,b));return this};var Ei=[0,0,0,1],Fi=[],Gi=[0,0,0,1];function Hi(a){a=l(a)?a:{};this.a=l(a.color)?a.color:null}Hi.prototype.c=function(){return this.a};function Ii(a){this.r=a.opacity;this.u=a.rotateWithView;this.g=a.rotation;this.i=a.scale;this.D=a.snapToPixel}Ii.prototype.l=function(){return this.g};Ii.prototype.k=function(){return this.i};function Ji(a){a=l(a)?a:{};this.a=l(a.color)?a.color:null;this.b=a.lineCap;this.d=l(a.lineDash)?a.lineDash:null;this.e=a.lineJoin;this.f=a.miterLimit;this.c=a.width}k=Ji.prototype;k.Ah=function(){return this.a};k.xf=function(){return this.b};k.Bh=function(){return this.d};k.yf=function(){return this.e};k.Cf=function(){return this.f};k.Ch=function(){return this.c};function Ki(a){a=l(a)?a:{};this.e=Ff("CANVAS");this.c=null;this.b=l(a.fill)?a.fill:null;this.p=[0,0];this.d=a.radius;this.a=l(a.stroke)?a.stroke:null;var b,c=this.e,d;null===this.a?d=0:(b=Jg(this.a.a),d=this.a.c,l(d)||(d=1));var e=2*(this.d+d)+1;c.height=e;c.width=e;var e=c.width,f=c.getContext("2d");f.arc(e/2,e/2,this.d,0,2*Math.PI,!0);null!==this.b&&(f.fillStyle=Jg(this.b.a),f.fill());null!==this.a&&(f.strokeStyle=b,f.lineWidth=d,f.stroke());null===this.b?(c=this.c=Ff("CANVAS"),c.height=e,c.width=
e,f=c.getContext("2d"),f.arc(e/2,e/2,this.d,0,2*Math.PI,!0),f.fillStyle=Ei,f.fill(),null!==this.a&&(f.strokeStyle=b,f.lineWidth=d,f.stroke())):this.c=c;b=e;this.f=[b/2,b/2];this.o=[b,b];Ii.call(this,{opacity:1,rotateWithView:!1,rotation:0,scale:1,snapToPixel:l(a.snapToPixel)?a.snapToPixel:!0})}t(Ki,Ii);k=Ki.prototype;k.Pb=function(){return this.f};k.wh=function(){return this.b};k.ue=function(){return this.c};k.sc=function(){return this.e};k.ve=function(){return 2};k.Wb=function(){return this.p};
k.xh=function(){return this.d};k.lb=function(){return this.o};k.yh=function(){return this.a};k.fe=ca;k.we=ca;k.Ne=ca;function Li(a){a=l(a)?a:{};this.d=l(a.fill)?a.fill:null;this.e=l(a.image)?a.image:null;this.b=l(a.stroke)?a.stroke:null;this.c=l(a.text)?a.text:null;this.a=a.zIndex}k=Li.prototype;k.Dh=function(){return this.d};k.Eh=function(){return this.e};k.Fh=function(){return this.b};k.Gh=function(){return this.c};k.Nf=function(){return this.a};function Mi(a){la(a)||(a=ha(a)?a:[a],a=bd(a));return a}
function Ni(){var a=new Hi({color:"rgba(255,255,255,0.4)"}),b=new Ji({color:"#3399CC",width:1.25}),c=[new Li({image:new Ki({fill:a,stroke:b,radius:5}),fill:a,stroke:b})];Ni=function(){return c};return c}
function Oi(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new Li({fill:new Hi({color:[255,255,255,.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new Li({stroke:new Ji({color:b,width:5})}),new Li({stroke:new Ji({color:c,width:3})})];a.MultiLineString=a.LineString;a.Point=[new Li({image:new Ki({radius:6,fill:new Hi({color:c}),stroke:new Ji({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.Point);return a};function G(a){pd.call(this);this.T=void 0;this.a="geometry";this.g=null;this.d=void 0;this.f=null;y(this,td(this.a),this.Vc,!1,this);l(a)&&(a instanceof Di||null===a?this.Ba(a):this.L(a))}t(G,pd);G.prototype.clone=function(){var a=new G(this.R());a.e(this.a);var b=this.J();null!=b&&a.Ba(b.clone());b=this.g;null===b||a.i(b);return a};G.prototype.J=function(){return this.get(this.a)};G.prototype.getGeometry=G.prototype.J;k=G.prototype;k.tf=function(){return this.T};k.sf=function(){return this.a};
k.Ng=function(){return this.g};k.Og=function(){return this.d};k.Wf=function(){this.n()};k.Vc=function(){null!==this.f&&(Yc(this.f),this.f=null);var a=this.J();null!=a&&(this.f=y(a,"change",this.Wf,!1,this),this.n())};k.Ba=function(a){this.set(this.a,a)};G.prototype.setGeometry=G.prototype.Ba;G.prototype.i=function(a){this.g=a;la(a)||(a=ha(a)?a:[a],a=bd(a));this.d=a;this.n()};G.prototype.b=function(a){this.T=a;this.n()};
G.prototype.e=function(a){Xc(this,td(this.a),this.Vc,!1,this);this.a=a;y(this,td(this.a),this.Vc,!1,this);this.Vc()};function Pi(a,b,c,d,e,f,g){fc.call(this,a,b);this.vectorContext=c;this.a=d;this.frameState=e;this.context=f;this.glContext=g}t(Pi,fc);function Qi(a,b,c,d,e,f){var g=e[0],h=e[1],m=e[4],n=e[5],p=e[12];e=e[13];for(var r=l(f)?f:[],q=0;b<c;b+=d){var u=a[b],x=a[b+1];r[q++]=g*u+m*x+p;r[q++]=h*u+n*x+e}l(f)&&r.length!=q&&(r.length=q);return r};function Ri(){Di.call(this);this.b="XY";this.a=2;this.j=null}t(Ri,Di);function Si(a){if("XY"==a)return 2;if("XYZ"==a||"XYM"==a)return 3;if("XYZM"==a)return 4}k=Ri.prototype;k.zb=cd;k.s=function(a){if(this.i!=this.c){var b=this.j,c=this.j.length,d=this.a,e=Zd(this.extent);this.extent=ce(e,b,0,c,d);this.i=this.c}return qe(this.extent,a)};k.Xa=function(){return this.j.slice(0,this.a)};k.Ya=function(){return this.j.slice(this.j.length-this.a)};k.Za=function(){return this.b};
k.zd=function(a){this.o!=this.c&&(Cc(this.l),this.k=0,this.o=this.c);if(0>a||0!==this.k&&a<=this.k)return this;var b=a.toString();if(this.l.hasOwnProperty(b))return this.l[b];var c=this.Qb(a);if(c.j.length<this.j.length)return this.l[b]=c;this.k=a;return this};k.Qb=function(){return this};function Ui(a,b,c){a.a=Si(b);a.b=b;a.j=c}
function Vi(a,b,c,d){if(l(b))c=Si(b);else{for(b=0;b<d;++b){if(0===c.length){a.b="XY";a.a=2;return}c=c[0]}c=c.length;b=2==c?"XY":3==c?"XYZ":4==c?"XYZM":void 0}a.b=b;a.a=c}k.Mb=function(a){null!==this.j&&(a(this.j,this.j,this.a),this.n())};function Wi(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function Xi(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function Yi(a,b,c,d,e){e=l(e)?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Xi(a,b,c[g],d),e[f++]=b;e.length=f;return e};function Zi(a,b,c){Ri.call(this);this.He(a,l(b)?b:0,c)}t(Zi,Ri);k=Zi.prototype;k.clone=function(){var a=new Zi(null);Ui(a,this.b,this.j.slice());a.n();return a};k.Fa=function(a,b,c,d){var e=this.j;a-=e[0];var f=b-e[1];b=a*a+f*f;if(b<d){if(0===b)for(d=0;d<this.a;++d)c[d]=e[d];else for(d=this.pe()/Math.sqrt(b),c[0]=e[0]+d*a,c[1]=e[1]+d*f,d=2;d<this.a;++d)c[d]=e[d];c.length=this.a;return b}return d};k.zb=function(a,b){var c=this.j,d=a-c[0],c=b-c[1];return d*d+c*c<=$i(this)};
k.Dd=function(){return this.j.slice(0,this.a)};k.s=function(a){if(this.i!=this.c){var b=this.j,c=b[this.a]-b[0];this.extent=Ud(b[0]-c,b[1]-c,b[0]+c,b[1]+c,this.extent);this.i=this.c}return qe(this.extent,a)};k.pe=function(){return Math.sqrt($i(this))};function $i(a){var b=a.j[a.a]-a.j[0];a=a.j[a.a+1]-a.j[1];return b*b+a*a}k.G=function(){return"Circle"};k.Wg=function(a){var b=this.a,c=a.slice();c[b]=c[0]+(this.j[b]-this.j[0]);var d;for(d=1;d<b;++d)c[b+d]=a[d];Ui(this,this.b,c);this.n()};
k.He=function(a,b,c){if(null===a)Ui(this,"XY",null);else{Vi(this,c,a,0);null===this.j&&(this.j=[]);c=this.j;a=Wi(c,a);c[a++]=c[0]+b;var d;b=1;for(d=this.a;b<d;++b)c[a++]=c[b];c.length=a}this.n()};k.vi=function(a){this.j[this.a]=this.j[0]+a;this.n()};function aj(a){Di.call(this);this.e=l(a)?a:null;bj(this)}t(aj,Di);function cj(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].clone());return b}function dj(a){var b,c;if(null!==a.e)for(b=0,c=a.e.length;b<c;++b)Xc(a.e[b],"change",a.n,!1,a)}function bj(a){var b,c;if(null!==a.e)for(b=0,c=a.e.length;b<c;++b)y(a.e[b],"change",a.n,!1,a)}k=aj.prototype;k.clone=function(){var a=new aj(null);a.Ie(this.e);return a};
k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;var e=this.e,f,g;f=0;for(g=e.length;f<g;++f)d=e[f].Fa(a,b,c,d);return d};k.zb=function(a,b){var c=this.e,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].zb(a,b))return!0;return!1};k.s=function(a){if(this.i!=this.c){var b=Zd(this.extent),c=this.e,d,e;d=0;for(e=c.length;d<e;++d)be(b,c[d].s());this.extent=b;this.i=this.c}return qe(this.extent,a)};k.$d=function(){return cj(this.e)};
k.zd=function(a){this.o!=this.c&&(Cc(this.l),this.k=0,this.o=this.c);if(0>a||0!==this.k&&a<this.k)return this;var b=a.toString();if(this.l.hasOwnProperty(b))return this.l[b];var c=[],d=this.e,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],m=h.zd(a);c.push(m);m!==h&&(e=!0)}if(e)return a=new aj(null),dj(a),a.e=c,bj(a),a.n(),this.l[b]=a;this.k=a;return this};k.G=function(){return"GeometryCollection"};k.ka=function(){return 0==this.e.length};k.Ie=function(a){a=cj(a);dj(this);this.e=a;bj(this);this.n()};
k.Mb=function(a){var b=this.e,c,d;c=0;for(d=b.length;c<d;++c)b[c].Mb(a);this.n()};k.I=function(){dj(this);aj.K.I.call(this)};function ej(a,b,c,d,e,f){var g=e-c,h=f-d;if(0!==g||0!==h){var m=((a-c)*g+(b-d)*h)/(g*g+h*h);1<m?(c=e,d=f):0<m&&(c+=g*m,d+=h*m)}return fj(a,b,c,d)}function fj(a,b,c,d){a=c-a;b=d-b;return a*a+b*b};function gj(a,b,c,d,e,f,g){var h=a[b],m=a[b+1],n=a[c]-h,p=a[c+1]-m;if(0!==n||0!==p)if(f=((e-h)*n+(f-m)*p)/(n*n+p*p),1<f)b=c;else if(0<f){for(e=0;e<d;++e)g[e]=Lb(a[b+e],a[c+e],f);g.length=d;return}for(e=0;e<d;++e)g[e]=a[b+e];g.length=d}function hj(a,b,c,d,e){var f=a[b],g=a[b+1];for(b+=d;b<c;b+=d){var h=a[b],m=a[b+1],f=fj(f,g,h,m);f>e&&(e=f);f=h;g=m}return e}function ij(a,b,c,d,e){var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];e=hj(a,b,h,d,e);b=h}return e}
function jj(a,b,c,d,e,f,g,h,m,n,p){if(b==c)return n;var r;if(0===e){r=fj(g,h,a[b],a[b+1]);if(r<n){for(p=0;p<d;++p)m[p]=a[b+p];m.length=d;return r}return n}for(var q=l(p)?p:[NaN,NaN],u=b+d;u<c;)if(gj(a,u-d,u,d,g,h,q),r=fj(g,h,q[0],q[1]),r<n){n=r;for(p=0;p<d;++p)m[p]=q[p];m.length=d;u+=d}else u+=d*Math.max((Math.sqrt(r)-Math.sqrt(n))/e|0,1);if(f&&(gj(a,c-d,b,d,g,h,q),r=fj(g,h,q[0],q[1]),r<n)){n=r;for(p=0;p<d;++p)m[p]=q[p];m.length=d}return n}
function kj(a,b,c,d,e,f,g,h,m,n,p){p=l(p)?p:[NaN,NaN];var r,q;r=0;for(q=c.length;r<q;++r){var u=c[r];n=jj(a,b,u,d,e,f,g,h,m,n,p);b=u}return n};function lj(a,b,c,d,e){e=l(e)?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function mj(a,b,c,d,e){e=l(e)?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var m=c[g];e[f++]=lj(a,b,m,d,e[f]);b=m}e.length=f;return e};function nj(a,b,c,d,e){var f=NaN,g=NaN,h=(c-b)/d;if(0!==h)if(1==h)f=a[b],g=a[b+1];else if(2==h)f=.5*a[b]+.5*a[b+d],g=.5*a[b+1]+.5*a[b+d+1];else{var g=a[b],h=a[b+1],m=0,f=[0],n;for(n=b+d;n<c;n+=d){var p=a[n],r=a[n+1],m=m+Math.sqrt((p-g)*(p-g)+(r-h)*(r-h));f.push(m);g=p;h=r}c=.5*m;for(var q,g=hb,h=0,m=f.length;h<m;)n=h+m>>1,p=g(c,f[n]),0<p?h=n+1:(m=n,q=!p);q=q?h:~h;0>q?(c=(c-f[-q-2])/(f[-q-1]-f[-q-2]),b+=(-q-2)*d,f=Lb(a[b],a[b+d],c),g=Lb(a[b+1],a[b+d+1],c)):(f=a[b+q*d],g=a[b+q*d+1])}return null!=e?
(e[0]=f,e[1]=g,e):[f,g]}function oj(a,b,c,d,e,f){if(c==b)return null;if(e<a[b+d-1])return f?(c=a.slice(b,b+d),c[d-1]=e,c):null;if(a[c-1]<e)return f?(c=a.slice(c-d,c),c[d-1]=e,c):null;if(e==a[b+d-1])return a.slice(b,b+d);b/=d;for(c/=d;b<c;)f=b+c>>1,e<a[(f+1)*d-1]?c=f:b=f+1;c=a[b*d-1];if(e==c)return a.slice((b-1)*d,(b-1)*d+d);f=(e-c)/(a[(b+1)*d-1]-c);c=[];var g;for(g=0;g<d-1;++g)c.push(Lb(a[(b-1)*d+g],a[b*d+g],f));c.push(e);return c}
function pj(a,b,c,d,e,f){var g=0;if(f)return oj(a,g,b[b.length-1],c,d,e);if(d<a[c-1])return e?(a=a.slice(0,c),a[c-1]=d,a):null;if(a[a.length-1]<d)return e?(a=a.slice(a.length-c),a[c-1]=d,a):null;e=0;for(f=b.length;e<f;++e){var h=b[e];if(g!=h){if(d<a[g+c-1])break;if(d<=a[h-1])return oj(a,g,h,c,d,!1);g=h}}return null};function qj(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var m=Array(h);m[0]=1;m[h-1]=1;c=[b,c-d];for(var n=0,p;0<c.length;){var r=c.pop(),q=c.pop(),u=0,x=a[q],B=a[q+1],E=a[r],F=a[r+1];for(p=q+d;p<r;p+=d){var w=ej(a[p],a[p+1],x,B,E,F);w>u&&(n=p,u=w)}u>e&&(m[(n-b)/d]=1,q+d<n&&c.push(q,n),n+d<r&&c.push(n,r))}for(p=0;p<h;++p)m[p]&&(f[g++]=a[b+p*d],f[g++]=a[b+p*d+1]);return g}
function rj(a,b,c,d,e,f,g,h){var m,n;m=0;for(n=c.length;m<n;++m){var p=c[m];a:{var r=a,q=p,u=d,x=e,B=f;if(b!=q){var E=x*Math.round(r[b]/x),F=x*Math.round(r[b+1]/x);b+=u;B[g++]=E;B[g++]=F;var w=void 0,U=void 0;do if(w=x*Math.round(r[b]/x),U=x*Math.round(r[b+1]/x),b+=u,b==q){B[g++]=w;B[g++]=U;break a}while(w==E&&U==F);for(;b<q;){var Q,ea;Q=x*Math.round(r[b]/x);ea=x*Math.round(r[b+1]/x);b+=u;if(Q!=w||ea!=U){var Y=w-E,za=U-F,kb=Q-E,Aa=ea-F;Y*Aa==za*kb&&(0>Y&&kb<Y||Y==kb||0<Y&&kb>Y)&&(0>za&&Aa<za||za==
Aa||0<za&&Aa>za)||(B[g++]=w,B[g++]=U,E=w,F=U);w=Q;U=ea}}B[g++]=w;B[g++]=U}}h.push(g);b=p}return g};function H(a,b){Ri.call(this);this.d=null;this.q=this.r=this.p=-1;this.P(a,b)}t(H,Ri);k=H.prototype;k.$e=function(a){null===this.j?this.j=a.slice():Pb(this.j,a);this.n()};k.clone=function(){var a=new H(null);sj(a,this.b,this.j.slice());return a};k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;this.q!=this.c&&(this.r=Math.sqrt(hj(this.j,0,this.j.length,this.a,0)),this.q=this.c);return jj(this.j,0,this.j.length,this.a,this.r,!1,a,b,c,d)};
k.Xg=function(a,b){return"XYM"!=this.b&&"XYZM"!=this.b?null:oj(this.j,0,this.j.length,this.a,a,l(b)?b:!1)};k.H=function(){return lj(this.j,0,this.j.length,this.a)};k.Yg=function(){var a=this.j,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.j.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};function tj(a){a.p!=a.c&&(a.d=nj(a.j,0,a.j.length,a.a,a.d),a.p=a.c);return a.d}
k.Qb=function(a){var b=[];b.length=qj(this.j,0,this.j.length,this.a,a,b,0);a=new H(null);sj(a,"XY",b);return a};k.G=function(){return"LineString"};k.P=function(a,b){null===a?sj(this,"XY",null):(Vi(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Xi(this.j,0,a,this.a),this.n())};function sj(a,b,c){Ui(a,b,c);a.n()};function uj(a,b){Ri.call(this);this.d=[];this.p=this.q=-1;this.P(a,b)}t(uj,Ri);k=uj.prototype;k.af=function(a){null===this.j?this.j=a.j.slice():Pb(this.j,a.j.slice());this.d.push(this.j.length);this.n()};k.clone=function(){var a=new uj(null);vj(a,this.b,this.j.slice(),this.d.slice());return a};k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;this.p!=this.c&&(this.q=Math.sqrt(ij(this.j,0,this.d,this.a,0)),this.p=this.c);return kj(this.j,0,this.d,this.a,this.q,!1,a,b,c,d)};
k.$g=function(a,b,c){return"XYM"!=this.b&&"XYZM"!=this.b||0===this.j.length?null:pj(this.j,this.d,this.a,a,l(b)?b:!1,l(c)?c:!1)};k.H=function(){return mj(this.j,0,this.d,this.a)};k.zf=function(a){if(0>a||this.d.length<=a)return null;var b=new H(null);sj(b,this.b,this.j.slice(0===a?0:this.d[a-1],this.d[a]));return b};k.oc=function(){var a=this.j,b=this.d,c=this.b,d=[],e=0,f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],m=new H(null);sj(m,c,a.slice(e,h));d.push(m);e=h}return d};
function wj(a){var b=[],c=a.j,d=0,e=a.d;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=nj(c,d,h,a);Pb(b,d);d=h}return b}k.Qb=function(a){var b=[],c=[],d=this.j,e=this.d,f=this.a,g=0,h=0,m,n;m=0;for(n=e.length;m<n;++m){var p=e[m],h=qj(d,g,p,f,a,b,h);c.push(h);g=p}b.length=h;a=new uj(null);vj(a,"XY",b,c);return a};k.G=function(){return"MultiLineString"};
k.P=function(a,b){if(null===a)vj(this,"XY",null,this.d);else{Vi(this,b,a,2);null===this.j&&(this.j=[]);var c=Yi(this.j,0,a,this.a,this.d);this.j.length=0===c.length?0:c[c.length-1];this.n()}};function vj(a,b,c,d){Ui(a,b,c);a.d=d;a.n()}function xj(a,b){var c="XY",d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];0===f&&(c=h.b);Pb(d,h.j);e.push(d.length)}vj(a,c,d,e)};function yj(a,b){Ri.call(this);this.P(a,b)}t(yj,Ri);k=yj.prototype;k.clone=function(){var a=new yj(null);zj(a,this.b,this.j.slice());return a};k.Fa=function(a,b,c,d){var e=this.j;a=fj(a,b,e[0],e[1]);if(a<d){d=this.a;for(b=0;b<d;++b)c[b]=e[b];c.length=d;return a}return d};k.H=function(){return null===this.j?[]:this.j.slice()};k.s=function(a){this.i!=this.c&&(this.extent=$d(this.j,this.extent),this.i=this.c);return qe(this.extent,a)};k.G=function(){return"Point"};
k.P=function(a,b){null===a?zj(this,"XY",null):(Vi(this,b,a,0),null===this.j&&(this.j=[]),this.j.length=Wi(this.j,a),this.n())};function zj(a,b,c){Ui(a,b,c);a.n()};function Aj(a,b){Ri.call(this);this.P(a,b)}t(Aj,Ri);k=Aj.prototype;k.cf=function(a){null===this.j?this.j=a.j.slice():Pb(this.j,a.j);this.n()};k.clone=function(){var a=new Aj(null);Ui(a,this.b,this.j.slice());a.n();return a};k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;var e=this.j,f=this.a,g,h,m;g=0;for(h=e.length;g<h;g+=f)if(m=fj(a,b,e[g],e[g+1]),m<d){d=m;for(m=0;m<f;++m)c[m]=e[g+m];c.length=f}return d};k.H=function(){return lj(this.j,0,this.j.length,this.a)};
k.Ff=function(a){var b=null===this.j?0:this.j.length/this.a;if(0>a||b<=a)return null;b=new yj(null);zj(b,this.b,this.j.slice(a*this.a,(a+1)*this.a));return b};k.Qc=function(){var a=this.j,b=this.b,c=this.a,d=[],e,f;e=0;for(f=a.length;e<f;e+=c){var g=new yj(null);zj(g,b,a.slice(e,e+c));d.push(g)}return d};k.G=function(){return"MultiPoint"};k.P=function(a,b){null===a?Ui(this,"XY",null):(Vi(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Xi(this.j,0,a,this.a));this.n()};function Bj(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],m=a[b+1],e=e+(g*h-f*m),f=h,g=m;return e/2}function Cj(a,b,c,d){var e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],e=e+Bj(a,b,h,d);b=h}return e};function Dj(a,b){Ri.call(this);this.d=this.p=-1;this.P(a,b)}t(Dj,Ri);k=Dj.prototype;k.clone=function(){var a=new Dj(null);Ej(a,this.b,this.j.slice());return a};k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;this.d!=this.c&&(this.p=Math.sqrt(hj(this.j,0,this.j.length,this.a,0)),this.d=this.c);return jj(this.j,0,this.j.length,this.a,this.p,!0,a,b,c,d)};k.Zg=function(){return Bj(this.j,0,this.j.length,this.a)};k.H=function(){return lj(this.j,0,this.j.length,this.a)};
k.Qb=function(a){var b=[];b.length=qj(this.j,0,this.j.length,this.a,a,b,0);a=new Dj(null);Ej(a,"XY",b);return a};k.G=function(){return"LinearRing"};k.P=function(a,b){null===a?Ej(this,"XY",null):(Vi(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Xi(this.j,0,a,this.a),this.n())};function Ej(a,b,c){Ui(a,b,c);a.n()};function Fj(a,b,c,d,e,f){for(var g=!1,h=a[c-d],m=a[c-d+1];b<c;b+=d){var n=a[b],p=a[b+1];m>f!=p>f&&e<(n-h)*(f-m)/(p-m)+h&&(g=!g);h=n;m=p}return g}function Gj(a,b,c,d,e,f){if(0===c.length||!Fj(a,b,c[0],d,e,f))return!1;var g;b=1;for(g=c.length;b<g;++b)if(Fj(a,c[b-1],c[b],d,e,f))return!1;return!0};function Hj(a,b,c,d,e,f,g){var h,m,n,p,r,q=e[f+1],u=[],x=c[0];n=a[x-d];r=a[x-d+1];for(h=b;h<x;h+=d){p=a[h];m=a[h+1];if(q<=r&&m<=q||r<=q&&q<=m)n=(q-r)/(m-r)*(p-n)+n,u.push(n);n=p;r=m}x=NaN;r=-Infinity;u.sort();n=u[0];h=1;for(m=u.length;h<m;++h){p=u[h];var B=Math.abs(p-n);B>r&&(n=(n+p)/2,Gj(a,b,c,d,n,q)&&(x=n,r=B));n=p}isNaN(x)&&(x=e[f]);return l(g)?(g.push(x,q),g):[x,q]};function Ij(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],m=a[b+1],e=e+(h-f)*(m+g),f=h,g=m;return 0<e}function Jj(a,b,c){var d=0,e,f;e=0;for(f=b.length;e<f;++e){var g=b[e],d=Ij(a,d,g,c);if(0===e?!d:d)return!1;d=g}return!0}function Kj(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h=Ij(a,b,g,d);if(0===e?!h:h)for(var h=a,m=g,n=d;b<m-n;){var p;for(p=0;p<n;++p){var r=h[b+p];h[b+p]=h[m-n+p];h[m-n+p]=r}b+=n;m-=n}b=g}return b};function I(a,b){Ri.call(this);this.d=[];this.q=-1;this.r=null;this.F=this.u=this.D=-1;this.p=null;this.P(a,b)}t(I,Ri);k=I.prototype;k.bf=function(a){null===this.j?this.j=a.j.slice():Pb(this.j,a.j);this.d.push(this.j.length);this.n()};k.clone=function(){var a=new I(null);Lj(a,this.b,this.j.slice(),this.d.slice());return a};
k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;this.u!=this.c&&(this.D=Math.sqrt(ij(this.j,0,this.d,this.a,0)),this.u=this.c);return kj(this.j,0,this.d,this.a,this.D,!0,a,b,c,d)};k.zb=function(a,b){return Gj(Mj(this),0,this.d,this.a,a,b)};k.bh=function(){return Cj(Mj(this),0,this.d,this.a)};k.H=function(){return mj(this.j,0,this.d,this.a)};function Nj(a){if(a.q!=a.c){var b=je(a.s());a.r=Hj(Mj(a),0,a.d,a.a,b,0);a.q=a.c}return a.r}k.vf=function(){return new yj(Nj(this))};
k.Af=function(a){if(0>a||this.d.length<=a)return null;var b=new Dj(null);Ej(b,this.b,this.j.slice(0===a?0:this.d[a-1],this.d[a]));return b};k.Nc=function(){var a=this.b,b=this.j,c=this.d,d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],m=new Dj(null);Ej(m,a,b.slice(e,h));d.push(m);e=h}return d};function Mj(a){if(a.F!=a.c){var b=a.j;Jj(b,a.d,a.a)?a.p=b:(a.p=b.slice(),a.p.length=Kj(a.p,0,a.d,a.a));a.F=a.c}return a.p}
k.Qb=function(a){var b=[],c=[];b.length=rj(this.j,0,this.d,this.a,Math.sqrt(a),b,0,c);a=new I(null);Lj(a,"XY",b,c);return a};k.G=function(){return"Polygon"};k.P=function(a,b){if(null===a)Lj(this,"XY",null,this.d);else{Vi(this,b,a,2);null===this.j&&(this.j=[]);var c=Yi(this.j,0,a,this.a,this.d);this.j.length=0===c.length?0:c[c.length-1];this.n()}};function Lj(a,b,c,d){Ui(a,b,c);a.d=d;a.n()}
function Oj(a,b,c,d){var e=l(d)?d:32;d=[];var f;for(f=0;f<e;++f)db(d,a.offset(b,c,2*Math.PI*f/e));d.push(d[0],d[1]);a=new I(null);Lj(a,"XY",d,[d.length]);return a};function Pj(a,b){Ri.call(this);this.d=[];this.q=-1;this.r=null;this.F=this.u=this.D=-1;this.p=null;this.P(a,b)}t(Pj,Ri);k=Pj.prototype;k.df=function(a){if(null===this.j)this.j=a.j.slice(),a=a.d.slice(),this.d.push();else{var b=this.j.length;Pb(this.j,a.j);a=a.d.slice();var c,d;c=0;for(d=a.length;c<d;++c)a[c]+=b}this.d.push(a);this.n()};k.clone=function(){var a=new Pj(null);Qj(a,this.b,this.j.slice(),this.d.slice());return a};
k.Fa=function(a,b,c,d){if(d<Xd(this.s(),a,b))return d;if(this.u!=this.c){var e=this.d,f=0,g=0,h,m;h=0;for(m=e.length;h<m;++h)var n=e[h],g=ij(this.j,f,n,this.a,g),f=n[n.length-1];this.D=Math.sqrt(g);this.u=this.c}e=Rj(this);f=this.d;g=this.a;h=this.D;m=0;var n=l(void 0)?void 0:[NaN,NaN],p,r;p=0;for(r=f.length;p<r;++p){var q=f[p];d=kj(e,m,q,g,h,!0,a,b,c,d,n);m=q[q.length-1]}return d};
k.zb=function(a,b){var c;a:{c=Rj(this);var d=this.d,e=0;if(0!==d.length){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];if(Gj(c,e,h,this.a,a,b)){c=!0;break a}e=h[h.length-1]}}c=!1}return c};k.ah=function(){var a=Rj(this),b=this.d,c=0,d=0,e,f;e=0;for(f=b.length;e<f;++e)var g=b[e],d=d+Cj(a,c,g,this.a),c=g[g.length-1];return d};k.H=function(){var a=this.j,b=this.d,c=this.a,d=0,e=l(void 0)?void 0:[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var m=b[g];e[f++]=mj(a,d,m,c,e[f]);d=m[m.length-1]}e.length=f;return e};
function Sj(a){if(a.q!=a.c){var b=a.j,c=a.d,d=a.a,e=0,f=[],g,h,m=Sd();g=0;for(h=c.length;g<h;++g){var n=c[g],m=b,p=n[0],r=d,q=Zd(void 0),m=ce(q,m,e,p,r);f.push((m[0]+m[2])/2,(m[1]+m[3])/2);e=n[n.length-1]}b=Rj(a);c=a.d;d=a.a;g=0;h=[];n=0;for(m=c.length;n<m;++n)e=c[n],h=Hj(b,g,e,d,f,2*n,h),g=e[e.length-1];a.r=h;a.q=a.c}return a.r}k.wf=function(){var a=new Aj(null),b=Sj(this).slice();Ui(a,"XY",b);a.n();return a};
function Rj(a){if(a.F!=a.c){var b=a.j,c;a:{c=a.d;var d,e;d=0;for(e=c.length;d<e;++d)if(!Jj(b,c[d],a.a)){c=!1;break a}c=!0}if(c)a.p=b;else{a.p=b.slice();c=b=a.p;d=a.d;e=a.a;var f=0,g,h;g=0;for(h=d.length;g<h;++g)f=Kj(c,f,d[g],e);b.length=f}a.F=a.c}return a.p}k.Qb=function(a){var b=[],c=[],d=this.j,e=this.d,f=this.a;a=Math.sqrt(a);var g=0,h=0,m,n;m=0;for(n=e.length;m<n;++m){var p=e[m],r=[],h=rj(d,g,p,f,a,b,h,r);c.push(r);g=p[p.length-1]}b.length=h;d=new Pj(null);Qj(d,"XY",b,c);return d};
k.Gf=function(a){if(0>a||this.d.length<=a)return null;var b;0===a?b=0:(b=this.d[a-1],b=b[b.length-1]);a=this.d[a].slice();var c=a[a.length-1];if(0!==b){var d,e;d=0;for(e=a.length;d<e;++d)a[d]-=b}d=new I(null);Lj(d,this.b,this.j.slice(b,c),a);return d};k.Rc=function(){var a=this.b,b=this.j,c=this.d,d=[],e=0,f,g,h,m;f=0;for(g=c.length;f<g;++f){var n=c[f].slice(),p=n[n.length-1];if(0!==e)for(h=0,m=n.length;h<m;++h)n[h]-=e;h=new I(null);Lj(h,a,b.slice(e,p),n);d.push(h);e=p}return d};k.G=function(){return"MultiPolygon"};
k.P=function(a,b){if(null===a)Qj(this,"XY",null,this.d);else{Vi(this,b,a,3);null===this.j&&(this.j=[]);var c=this.j,d=this.a,e=this.d,f=0,e=l(e)?e:[],g=0,h,m;h=0;for(m=a.length;h<m;++h)f=Yi(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;0===e.length?this.j.length=0:(c=e[e.length-1],this.j.length=0===c.length?0:c[c.length-1]);this.n()}};function Qj(a,b,c,d){Ui(a,b,c);a.d=d;a.n()}
function Tj(a,b){var c="XY",d=[],e=[],f,g,h;f=0;for(g=b.length;f<g;++f){var m=b[f];0===f&&(c=m.b);var n=d.length;h=m.d;var p,r;p=0;for(r=h.length;p<r;++p)h[p]+=n;Pb(d,m.j);e.push(h)}Qj(a,c,d,e)};var Uj=["Polygon","LineString","Image","Text"];function Vj(a,b){return na(a)-na(b)}function Wj(a,b){var c=.5*a/b;return c*c}function Xj(a,b,c,d,e,f,g){var h=!1,m,n;m=c.e;null===m?Yj(a,b,c,d,e):(n=m.ve(),2==n||3==n?(m.Ne(f,g),2==n&&Yj(a,b,c,d,e)):(0==n&&m.we(),m.fe(f,g),h=!0));return h}function Yj(a,b,c,d,e){b=b.J();null!=b&&(d=b.zd(d),(0,Zj[d.G()])(a,d,c,e))}
var Zj={Point:function(a,b,c,d){var e=c.e;if(null!==e){var f=ak(a,c.a,"Image");f.$b(e);f.nc(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),a.eb(b.H(),0,2,2,b,d))},LineString:function(a,b,c,d){var e=c.b;if(null!==e){var f=ak(a,c.a,"LineString");f.Aa(null,e);f.sb(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),a.eb(tj(b),0,2,2,b,d))},Polygon:function(a,b,c,d){var e=c.d,f=c.b;if(null!==e||null!==f){var g=ak(a,c.a,"Polygon");g.Aa(e,f);g.Ob(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),a.eb(Nj(b),
0,2,2,b,d))},MultiPoint:function(a,b,c,d){var e=c.e;if(null!==e){var f=ak(a,c.a,"Image");f.$b(e);f.lc(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),c=b.j,a.eb(c,0,c.length,b.a,b,d))},MultiLineString:function(a,b,c,d){var e=c.b;if(null!==e){var f=ak(a,c.a,"LineString");f.Aa(null,e);f.kc(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),c=wj(b),a.eb(c,0,c.length,2,b,d))},MultiPolygon:function(a,b,c,d){var e=c.d,f=c.b;if(null!==f||null!==e){var g=ak(a,c.a,"Polygon");g.Aa(e,f);g.mc(b,d)}e=c.c;null!==
e&&(a=ak(a,c.a,"Text"),a.Ca(e),c=Sj(b),a.eb(c,0,c.length,2,b,d))},GeometryCollection:function(a,b,c,d){b=b.e;var e,f;e=0;for(f=b.length;e<f;++e)(0,Zj[b[e].G()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.d,f=c.b;if(null!==e||null!==f){var g=ak(a,c.a,"Polygon");g.Aa(e,f);g.jc(b,d)}e=c.c;null!==e&&(a=ak(a,c.a,"Text"),a.Ca(e),a.eb(b.Dd(),0,2,2,b,d))}};function bk(a){a=l(a)?a:{};this.g=this.d=this.e=this.c=this.b=this.a=null;this.f=void 0;this.me(l(a.style)?a.style:Ni);l(a.features)?ha(a.features)?this.xc(new A(cb(a.features))):this.xc(a.features):this.xc(new A);l(a.map)&&this.setMap(a.map)}k=bk.prototype;k.ke=function(a){this.a.push(a)};k.Ig=function(){return this.a};k.le=function(){ck(this)};k.Uf=function(a){a=a.element;this.c[na(a).toString()]=y(a,"change",this.le,!1,this);ck(this)};
k.Vf=function(a){a=na(a.element).toString();Yc(this.c[a]);delete this.c[a];ck(this)};k.Lg=function(){ck(this)};k.Mg=function(a){if(null!==this.a){var b=this.f;l(b)||(b=Ni);var c=a.a;a=a.frameState;var d=a.pixelRatio,e=a.viewState.resolution,f,g,h;this.a.forEach(function(a){h=b(a,e);if(null!=h)for(g=h.length,f=0;f<g;++f)Xj(c,a,h[f],Wj(e,d),a,this.Lg,this)},this)}};k.cd=function(a){this.a.remove(a)};function ck(a){null===a.e||a.e.O()}
k.xc=function(a){null!==this.b&&(Ta(this.b,Yc),this.b=null);null!==this.c&&(Ta(vc(this.c),Yc),this.c=null);this.a=a;null!==a&&(this.b=[y(a,"add",this.Uf,!1,this),y(a,"remove",this.Vf,!1,this)],this.c={},a.forEach(function(a){this.c[na(a).toString()]=y(a,"change",this.le,!1,this)},this));ck(this)};k.setMap=function(a){null!==this.d&&(Yc(this.d),this.d=null);ck(this);this.e=a;null!==a&&(this.d=y(a,"postcompose",this.Mg,!1,this),a.O())};k.me=function(a){this.g=a;this.f=Mi(a);ck(this)};k.Jg=function(){return this.g};
k.Kg=function(){return this.f};function dk(){this.defaultDataProjection=null}function ek(a,b,c){var d;l(c)&&(d={dataProjection:l(c.dataProjection)?c.dataProjection:a.ra(b),featureProjection:c.featureProjection});return fk(a,d)}function fk(a,b){var c;l(b)&&(c={featureProjection:b.featureProjection,dataProjection:null!=b.dataProjection?b.dataProjection:a.defaultDataProjection});return c}
function gk(a,b,c){var d=l(c)?Be(c.featureProjection):null;c=l(c)?Be(c.dataProjection):null;return null===d||null===c||Re(d,c)?a:a instanceof Di?(b?a.clone():a).f(b?d:c,b?c:d):Ue(b?cb(a):a,b?d:c,b?c:d)};var hk=ba.JSON.parse;function ik(){this.defaultDataProjection=null}t(ik,dk);function jk(a){return ma(a)?a:ja(a)?(a=hk(a),l(a)?a:null):null}k=ik.prototype;k.G=function(){return"json"};k.ob=function(a,b){return kk(this,jk(a),ek(this,a,b))};k.la=function(a,b){return this.c(jk(a),ek(this,a,b))};k.uc=function(a,b){var c=jk(a),d=ek(this,a,b);return lk(c,d)};k.ra=function(a){a=jk(a).crs;return null!=a?"name"==a.type?Be(a.properties.name):"EPSG"==a.type?Be("EPSG:"+a.properties.code):null:this.defaultDataProjection};
k.md=function(a,b){return mk(a,fk(this,b))};k.Hb=function(a,b){var c=fk(this,b),d=[],e,f;e=0;for(f=a.length;e<f;++e)d.push(mk(a[e],c));return{type:"FeatureCollection",features:d}};k.Ac=function(a,b){return this.b(a,fk(this,b))};function nk(a){a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be(null!=a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326");this.a=a.geometryName}t(nk,ik);function lk(a,b){return null===a?null:gk((0,ok[a.type])(a),!1,b)}function pk(a,b){return(0,qk[a.G()])(gk(a,!0,b))}
var ok={Point:function(a){return new yj(a.coordinates)},LineString:function(a){return new H(a.coordinates)},Polygon:function(a){return new I(a.coordinates)},MultiPoint:function(a){return new Aj(a.coordinates)},MultiLineString:function(a){return new uj(a.coordinates)},MultiPolygon:function(a){return new Pj(a.coordinates)},GeometryCollection:function(a,b){var c=Va(a.geometries,function(a){return lk(a,b)});return new aj(c)}},qk={Point:function(a){return{type:"Point",coordinates:a.H()}},LineString:function(a){return{type:"LineString",
coordinates:a.H()}},Polygon:function(a){return{type:"Polygon",coordinates:a.H()}},MultiPoint:function(a){return{type:"MultiPoint",coordinates:a.H()}},MultiLineString:function(a){return{type:"MultiLineString",coordinates:a.H()}},MultiPolygon:function(a){return{type:"MultiPolygon",coordinates:a.H()}},GeometryCollection:function(a,b){return{type:"GeometryCollection",geometries:Va(a.e,function(a){return pk(a,b)})}},Circle:function(){return{type:"GeometryCollection",geometries:[]}}};
function kk(a,b,c){c=lk(b.geometry,c);var d=new G;l(a.a)&&d.e(a.a);d.Ba(c);l(b.id)&&d.b(b.id);l(b.properties)&&d.L(b.properties);return d}nk.prototype.c=function(a,b){if("Feature"==a.type)return[kk(this,a,b)];if("FeatureCollection"==a.type){var c=[],d=a.features,e,f;e=0;for(f=d.length;e<f;++e)c.push(kk(this,d[e],b));return c}return[]};
function mk(a,b){var c={type:"Feature"},d=a.T;null!=d&&(c.id=d);d=a.J();null!=d&&(d=pk(d,b),c.geometry=d);d=a.R();Dc(d,"geometry");Bc(d)||(c.properties=d);return c}nk.prototype.b=pk;var rk;a:if(document.implementation&&document.implementation.createDocument)rk=document.implementation.createDocument("","",null);else{if("undefined"!=typeof ActiveXObject){var sk=new ActiveXObject("MSXML2.DOMDocument");if(sk){sk.resolveExternals=!1;sk.validateOnParse=!1;try{sk.setProperty("ProhibitDTD",!0),sk.setProperty("MaxXMLSize",2048),sk.setProperty("MaxElementDepth",256)}catch(tk){}}if(sk){rk=sk;break a}}throw Error("Your browser does not support creating new documents");}var uk=rk;
function vk(a,b){return uk.createElementNS(a,b)}function wk(a,b){null===a&&(a="");return uk.createNode(1,b,a)}var xk=document.implementation&&document.implementation.createDocument?vk:wk;function yk(a){return zk(a,!1,[]).join("")}function zk(a,b,c){if(4==a.nodeType||3==a.nodeType)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;null!==a;a=a.nextSibling)zk(a,b,c);return c}function Ak(a){return a.localName}
function Bk(a){var b=a.localName;return l(b)?b:a.baseName}var Ck=ub?Bk:Ak;function Dk(a){return a instanceof Document}function Ek(a){return ma(a)&&9==a.nodeType}var Fk=ub?Ek:Dk;function Gk(a){return a instanceof Node}function Hk(a){return ma(a)&&l(a.nodeType)}var Ik=ub?Hk:Gk;function Jk(a,b,c){return a.getAttributeNS(b,c)||""}function Kk(a,b,c){var d="";a=Lk(a,b,c);l(a)&&(d=a.nodeValue);return d}var Mk=document.implementation&&document.implementation.createDocument?Jk:Kk;
function Nk(a,b,c){return a.getAttributeNodeNS(b,c)}function Ok(a,b,c){var d=null;a=a.attributes;for(var e,f,g=0,h=a.length;g<h;++g)if(e=a[g],e.namespaceURI==b&&(f=e.prefix?e.prefix+":"+c:c,f==e.nodeName)){d=e;break}return d}var Lk=document.implementation&&document.implementation.createDocument?Nk:Ok;function Pk(a,b,c,d){a.setAttributeNS(b,c,d)}function Qk(a,b,c,d){null===b?a.setAttribute(c,d):(b=a.ownerDocument.createNode(2,c,b),b.nodeValue=d,a.setAttributeNode(b))}
var Rk=document.implementation&&document.implementation.createDocument?Pk:Qk;function Sk(a){return(new DOMParser).parseFromString(a,"application/xml")}function Tk(a,b){return function(c,d){var e=a.call(b,c,d);l(e)&&db(d[d.length-1],e)}}function Uk(a,b){return function(c,d){var e=a.call(b,c,d);l(e)&&d[d.length-1].push(e)}}function Vk(a){return function(b,c){var d=a.call(void 0,b,c);l(d)&&(c[c.length-1]=d)}}
function Wk(a){return function(b,c){var d=a.call(void 0,b,c);l(d)&&Ec(c[c.length-1],l(void 0)?void 0:b.localName).push(d)}}function J(a,b){return function(c,d){var e=a.call(void 0,c,d);l(e)&&(d[d.length-1][l(b)?b:c.localName]=e)}}function Xk(a,b,c){return Yk(a,b,c)}function K(a){return function(b,c,d){a.call(void 0,b,c,d);d[d.length-1].node.appendChild(b)}}function Zk(a){var b,c;return function(d,e,f){if(!l(b)){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=$k(d.localName)}al(b,c,e,f)}}
function $k(a,b){return function(c,d,e){c=d[d.length-1].node;d=a;l(d)||(d=e);e=b;l(b)||(e=c.namespaceURI);return xk(e,d)}}var bl=$k();function cl(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}function Yk(a,b,c){c=l(c)?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}function dl(a,b,c,d){for(b=b.firstElementChild;null!==b;b=b.nextElementSibling){var e=a[b.namespaceURI];l(e)&&(e=e[b.localName],l(e)&&e.call(d,b,c))}}
function L(a,b,c,d,e){d.push(a);dl(b,c,d,e);return d.pop()}function al(a,b,c,d,e,f){for(var g=(l(e)?e:c).length,h,m,n=0;n<g;++n)h=c[n],l(h)&&(m=b.call(f,h,d,l(e)?e[n]:void 0),l(m)&&a[m.namespaceURI][m.localName].call(f,m,h,d))}function el(a,b,c,d,e,f){e.push(a);al(b,c,d,e,f,void 0);e.pop()};function fl(){this.defaultDataProjection=null}t(fl,dk);k=fl.prototype;k.G=function(){return"xml"};k.ob=function(a,b){if(Fk(a))return gl(this,a,b);if(Ik(a))return this.De(a,b);if(ja(a)){var c=Sk(a);return gl(this,c,b)}return null};function gl(a,b,c){a=hl(a,b,c);return 0<a.length?a[0]:null}k.la=function(a,b){if(Fk(a))return hl(this,a,b);if(Ik(a))return this.Cb(a,b);if(ja(a)){var c=Sk(a);return hl(this,c,b)}return[]};
function hl(a,b,c){var d=[];for(b=b.firstChild;null!==b;b=b.nextSibling)1==b.nodeType&&db(d,a.Cb(b,c));return d}k.uc=function(a,b){if(Fk(a))return this.p(a,b);if(Ik(a)){var c=il(a,[ek(this,a,l(b)?b:{})]);return l(c)?c:null}return ja(a)?(c=Sk(a),this.p(c,b)):null};k.ra=function(a){return Fk(a)?this.wc(a):Ik(a)?this.Yb(a):ja(a)?(a=Sk(a),this.wc(a)):null};k.md=function(a,b){return this.u(a,fk(this,b))};k.Hb=function(a,b){return this.c(a,fk(this,b))};
k.Ac=function(a,b){var c=fk(this,b),d=xk("http://www.opengis.net/gml","geom"),e={node:d,srsName:this.a,curve:this.b,surface:this.i,multiSurface:this.e,multiCurve:this.d};l(c)&&Hc(e,c);jl(d,a,[e]);return d};function kl(a){a=yk(a);return ll(a)}function ll(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return l(a[1])||!1}function ml(a){a=yk(a);if(a=/^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)){var b=Date.UTC(parseInt(a[1],10),parseInt(a[2],10)-1,parseInt(a[3],10),parseInt(a[4],10),parseInt(a[5],10),parseInt(a[6],10))/1E3;if("Z"!=a[7]){var c="-"==a[8]?-1:1,b=b+60*c*parseInt(a[9],10);l(a[10])&&(b+=3600*c*parseInt(a[10],10))}return b}}
function nl(a){a=yk(a);return pl(a)}function pl(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function ql(a){a=yk(a);return rl(a)}function rl(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function M(a){a=yk(a);return ya(a)}function sl(a,b){tl(a,b?"1":"0")}function ul(a,b){a.appendChild(uk.createTextNode(b.toPrecision()))}function vl(a,b){a.appendChild(uk.createTextNode(b.toString()))}function tl(a,b){a.appendChild(uk.createTextNode(b))};function wl(a){a=l(a)?a:{};this.g=a.featureType;this.f=a.featureNS;this.a=a.srsName;this.i=l(a.surface)?a.surface:!1;this.b=l(a.curve)?a.curve:!1;this.d=l(a.multiCurve)?a.multiCurve:!0;this.e=l(a.multiSurface)?a.multiSurface:!0;this.l=l(a.schemaLocation)?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";this.defaultDataProjection=null}t(wl,fl);
function xl(a,b){var c=Ck(a),d=b[0],e=v(d,"featureType"),f;if("FeatureCollection"==c)f=L(null,yl,a,b);else if("featureMembers"==c||"featureMember"==c){f={};var g={};f[e]="featureMembers"==c?Uk(zl):Vk(zl);g[v(d,"featureNS")]=f;f=L([],g,a,b)}l(f)||(f=[]);return f}var yl={"http://www.opengis.net/gml":{featureMember:Uk(xl),featureMembers:Vk(xl)}};function il(a,b){var c=b[0],d=a.firstElementChild.getAttribute("srsName");c.srsName=d;d=L(null,Al,a,b);if(null!=d)return gk(d,!1,c)}
function zl(a,b){var c,d=a.getAttribute("fid")||Mk(a,"http://www.opengis.net/gml","id"),e={},f;for(c=a.firstElementChild;null!==c;c=c.nextElementSibling)if(0===c.childNodes.length||1===c.childNodes.length&&3===c.firstChild.nodeType){var g=yk(c);/^[\s\xa0]*$/.test(g)&&(g=void 0);e[Ck(c)]=g}else f=Ck(c),e[f]=il(c,b);c=new G(e);l(f)&&c.e(f);d&&c.b(d);return c}function Bl(a,b){dl(Cl,a,b)}function Dl(a,b){dl(El,a,b)}function Fl(a,b){dl(Gl,a,b)}function Hl(a,b){dl(Il,a,b)}function Jl(a,b){dl(Kl,a,b)}
function Ll(a,b){var c=Ml(a,b);if(null!=c){var d=new H(null);sj(d,"XYZ",c);return d}}function Nl(a,b){var c=L([null],Ol,a,b);if(l(c)&&null!==c[0]){var d=new I(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)Pb(e,c[g]),f.push(e.length);Lj(d,"XYZ",e,f);return d}}function Pl(a,b){var c=L([null],Ql,a,b);if(l(c)&&null!==c[0]){var d=new I(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)Pb(e,c[g]),f.push(e.length);Lj(d,"XYZ",e,f);return d}}
function Rl(a,b){var c=L([null],Sl,a,b);if(l(c)){var d=new H(null);sj(d,"XYZ",c);return d}}function Ml(a,b){return L(null,Tl,a,b)}
function Ul(a,b){var c=yk(a).replace(/^\s*|\s*$/g,""),d=v(b[0],"srsName"),e=a.parentNode.getAttribute("srsDimension"),f="enu";null===d||(f=ze(Be(d)));c=c.split(/\s+/);d=2;ga(a.getAttribute("srsDimension"))?ga(a.getAttribute("dimension"))?null===e||(d=rl(e)):d=rl(a.getAttribute("dimension")):d=rl(a.getAttribute("srsDimension"));for(var g,h,m=[],n=0,p=c.length;n<p;n+=d)e=parseFloat(c[n]),g=parseFloat(c[n+1]),h=3===d?parseFloat(c[n+2]):0,"en"===f.substr(0,2)?m.push(e,g,h):m.push(g,e,h);return m}
var Al={"http://www.opengis.net/gml":{Point:Vk(function(a,b){var c=Ml(a,b);if(null!=c){var d=new yj(null);zj(d,"XYZ",c);return d}}),MultiPoint:Vk(function(a,b){var c=L([],Vl,a,b);if(l(c))return new Aj(c)}),LineString:Vk(Ll),MultiLineString:Vk(function(a,b){var c=L([],Wl,a,b);if(l(c)){var d=new uj(null);xj(d,c);return d}}),LinearRing:Vk(function(a,b){var c=Ml(a,b);if(l(c)){var d=new Dj(null);Ej(d,"XYZ",c);return d}}),Polygon:Vk(Nl),MultiPolygon:Vk(function(a,b){var c=L([],Xl,a,b);if(l(c)){var d=new Pj(null);
Tj(d,c);return d}}),Surface:Vk(Pl),MultiSurface:Vk(function(a,b){var c=L([],Zl,a,b);if(l(c)){var d=new Pj(null);Tj(d,c);return d}}),Curve:Vk(Rl),MultiCurve:Vk(function(a,b){var c=L([],$l,a,b);if(l(c)){var d=new uj(null);xj(d,c);return d}}),Envelope:Vk(function(a,b){var c=L([null],am,a,b);return Ud(c[1][0],c[1][1],c[2][0],c[2][1])})}},Tl={"http://www.opengis.net/gml":{pos:Vk(function(a,b){for(var c=yk(a),d=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*/,e=[],f;f=d.exec(c);)e.push(parseFloat(f[1])),c=c.substr(f[0].length);
if(""===c){c=v(b[0],"srsName");d="enu";null===c||(d=ze(Be(c)));if("neu"===d)for(c=0,d=e.length;c<d;c+=3)f=e[c],e[c]=e[c+1],e[c+1]=f;c=e.length;2==c&&e.push(0);return 0===c?void 0:e}}),posList:Vk(Ul)}},Ol={"http://www.opengis.net/gml":{interior:function(a,b){var c=L(void 0,bm,a,b);l(c)&&b[b.length-1].push(c)},exterior:function(a,b){var c=L(void 0,bm,a,b);l(c)&&(b[b.length-1][0]=c)}}},Vl={"http://www.opengis.net/gml":{pointMember:Uk(Bl),pointMembers:Uk(Bl)}},Wl={"http://www.opengis.net/gml":{lineStringMember:Uk(Dl),
lineStringMembers:Uk(Dl)}},$l={"http://www.opengis.net/gml":{curveMember:Uk(Fl),curveMembers:Uk(Fl)}},Zl={"http://www.opengis.net/gml":{surfaceMember:Uk(Hl),surfaceMembers:Uk(Hl)}},Xl={"http://www.opengis.net/gml":{polygonMember:Uk(Jl),polygonMembers:Uk(Jl)}},Cl={"http://www.opengis.net/gml":{Point:Uk(Ml)}},El={"http://www.opengis.net/gml":{LineString:Uk(Ll)}},Gl={"http://www.opengis.net/gml":{LineString:Uk(Ll),Curve:Uk(Rl)}},Il={"http://www.opengis.net/gml":{Polygon:Uk(Nl),Surface:Uk(Pl)}},Kl={"http://www.opengis.net/gml":{Polygon:Uk(Nl)}},
Ql={"http://www.opengis.net/gml":{patches:Vk(function(a,b){return L([null],cm,a,b)})}},Sl={"http://www.opengis.net/gml":{segments:Vk(function(a,b){return L([null],dm,a,b)})}},am={"http://www.opengis.net/gml":{lowerCorner:Uk(Ul),upperCorner:Uk(Ul)}},cm={"http://www.opengis.net/gml":{PolygonPatch:Vk(function(a,b){return L([null],Ol,a,b)})}},dm={"http://www.opengis.net/gml":{LineStringSegment:Vk(function(a,b){return L([null],Tl,a,b)})}},bm={"http://www.opengis.net/gml":{LinearRing:Vk(function(a,b){var c=
L(null,Tl,a,b);if(null!=c)return c})}};wl.prototype.Cb=function(a,b){var c={featureType:this.g,featureNS:this.f};l(b)&&Hc(c,ek(this,a,b));return xl(a,[c])};wl.prototype.Yb=function(a){return Be(l(this.a)?this.a:a.firstElementChild.getAttribute("srsName"))};function em(a,b,c){c=v(c[c.length-1],"srsName");b=b.H();for(var d=b.length,e=Array(d),f,g=0;g<d;++g){f=b[g];var h=g,m="enu";null!=c&&(m=ze(Be(c)));e[h]="en"===m.substr(0,2)?f[0]+" "+f[1]:f[1]+" "+f[0]}tl(a,e.join(" "))}
function fm(a,b,c){var d=v(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",d);d=xk(a.namespaceURI,"pos");a.appendChild(d);c=v(c[c.length-1],"srsName");a="enu";null!=c&&(a=ze(Be(c)));b=b.H();tl(d,"en"===a.substr(0,2)?b[0]+" "+b[1]:b[1]+" "+b[0])}var gm={"http://www.opengis.net/gml":{lowerCorner:K(tl),upperCorner:K(tl)}};function hm(a,b,c){var d=v(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",d);d=xk(a.namespaceURI,"posList");a.appendChild(d);em(d,b,c)}
function im(a,b){var c=b[b.length-1],d=c.node,e=v(c,"exteriorWritten");l(e)||(c.exteriorWritten=!0);return xk(d.namespaceURI,l(e)?"interior":"exterior")}
function jm(a,b,c){var d=v(c[c.length-1],"srsName");"PolygonPatch"!==a.nodeName&&null!=d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.Nc(),el({node:a,srsName:d},km,im,b,c)):"Surface"===a.nodeName&&(d=xk(a.namespaceURI,"patches"),a.appendChild(d),a=xk(d.namespaceURI,"PolygonPatch"),d.appendChild(a),jm(a,b,c))}
function lm(a,b,c){var d=v(c[c.length-1],"srsName");"LineStringSegment"!==a.nodeName&&null!=d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=xk(a.namespaceURI,"posList"),a.appendChild(d),em(d,b,c)):"Curve"===a.nodeName&&(d=xk(a.namespaceURI,"segments"),a.appendChild(d),a=xk(d.namespaceURI,"LineStringSegment"),d.appendChild(a),lm(a,b,c))}
function mm(a,b,c){var d=c[c.length-1],e=v(d,"srsName"),d=v(d,"surface");null!=e&&a.setAttribute("srsName",e);b=b.Rc();el({node:a,srsName:e,surface:d},nm,om,b,c)}function pm(a,b,c){var d=c[c.length-1],e=v(d,"srsName"),d=v(d,"curve");null!=e&&a.setAttribute("srsName",e);b=b.oc();el({node:a,srsName:e,curve:d},qm,om,b,c)}function rm(a,b,c){var d=xk(a.namespaceURI,"LinearRing");a.appendChild(d);hm(d,b,c)}function sm(a,b,c){var d=tm(b,c);l(d)&&(a.appendChild(d),jm(d,b,c))}
function um(a,b,c){var d=tm(b,c);l(d)&&(a.appendChild(d),lm(d,b,c))}function jl(a,b,c){var d=c[c.length-1],e=Fc(d);e.node=a;var f;ha(b)?l(d.dataProjection)?f=Ue(b,d.featureProjection,d.dataProjection):f=b:f=gk(b,!0,d);el(e,vm,tm,[f],c)}
function wm(a,b,c){var d=b.T;l(d)&&a.setAttribute("fid",d);var d=c[c.length-1],e=v(d,"featureNS"),f=b.a;l(d.Db)||(d.Db={},d.Db[e]={});var g=b.R();b=[];var h=[],m;for(m in g){var n=g[m];null!==n&&(b.push(m),h.push(n),m==f?m in d.Db[e]||(d.Db[e][m]=K(jl)):m in d.Db[e]||(d.Db[e][m]=K(tl)))}m=Fc(d);m.node=a;el(m,d.Db,$k(void 0,e),h,c,b)}
var nm={"http://www.opengis.net/gml":{surfaceMember:K(sm),polygonMember:K(sm)}},xm={"http://www.opengis.net/gml":{pointMember:K(function(a,b,c){var d=xk(a.namespaceURI,"Point");a.appendChild(d);fm(d,b,c)})}},qm={"http://www.opengis.net/gml":{lineStringMember:K(um),curveMember:K(um)}},km={"http://www.opengis.net/gml":{exterior:K(rm),interior:K(rm)}},vm={"http://www.opengis.net/gml":{Curve:K(lm),MultiCurve:K(pm),Point:K(fm),MultiPoint:K(function(a,b,c){var d=v(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",
d);b=b.Qc();el({node:a,srsName:d},xm,$k("pointMember"),b,c)}),LineString:K(lm),MultiLineString:K(pm),LinearRing:K(hm),Polygon:K(jm),MultiPolygon:K(mm),Surface:K(jm),MultiSurface:K(mm),Envelope:K(function(a,b,c){var d=v(c[c.length-1],"srsName");l(d)&&a.setAttribute("srsName",d);el({node:a},gm,bl,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"])})}},ym={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};
function om(a,b){return xk("http://www.opengis.net/gml",ym[b[b.length-1].node.nodeName])}function tm(a,b){var c=b[b.length-1],d=v(c,"multiSurface"),e=v(c,"surface"),f=v(c,"curve"),c=v(c,"multiCurve"),g;ha(a)?g="Envelope":(g=a.G(),"MultiPolygon"===g&&!0===d?g="MultiSurface":"Polygon"===g&&!0===e?g="Surface":"LineString"===g&&!0===f?g="Curve":"MultiLineString"===g&&!0===c&&(g="MultiCurve"));return xk("http://www.opengis.net/gml",g)}
wl.prototype.c=function(a,b){var c=xk("http://www.opengis.net/gml","featureMembers");Rk(c,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.l);var d={srsName:this.a,curve:this.b,surface:this.i,multiSurface:this.e,multiCurve:this.d,featureNS:this.f,featureType:this.g};l(b)&&Hc(d,b);var d=[d],e=d[d.length-1],f=v(e,"featureType"),g=v(e,"featureNS"),h={};h[g]={};h[g][f]=K(wm);e=Fc(e);e.node=c;el(e,h,$k(f,g),a,d);return c};function zm(a){a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be("EPSG:4326");this.f=a.readExtensions}t(zm,fl);var Am=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function Bm(a,b,c){a.push(parseFloat(b.getAttribute("lon")),parseFloat(b.getAttribute("lat")));"ele"in c?(a.push(v(c,"ele")),Dc(c,"ele")):a.push(0);"time"in c?(a.push(v(c,"time")),Dc(c,"time")):a.push(0);return a}
function Cm(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);dl(Dm,a,b)}function Em(a,b){b[b.length-1].extensionsNode_=a}function Fm(a,b){var c=b[0],d=L({flatCoordinates:[]},Gm,a,b);if(l(d)){var e=v(d,"flatCoordinates");Dc(d,"flatCoordinates");var f=new H(null);sj(f,"XYZM",e);gk(f,!1,c);c=new G(f);c.L(d);return c}}
function Hm(a,b){var c=b[0],d=L({flatCoordinates:[],ends:[]},Im,a,b);if(l(d)){var e=v(d,"flatCoordinates");Dc(d,"flatCoordinates");var f=v(d,"ends");Dc(d,"ends");var g=new uj(null);vj(g,"XYZM",e,f);gk(g,!1,c);c=new G(g);c.L(d);return c}}function Jm(a,b){var c=b[0],d=L({},Km,a,b);if(l(d)){var e=Bm([],a,d),e=new yj(e,"XYZM");gk(e,!1,c);c=new G(e);c.L(d);return c}}
var Lm={rte:Fm,trk:Hm,wpt:Jm},Mm=Xk(Am,{rte:Uk(Fm),trk:Uk(Hm),wpt:Uk(Jm)}),Dm=Xk(Am,{text:J(M,"linkText"),type:J(M,"linkType")}),Gm=Xk(Am,{name:J(M),cmt:J(M),desc:J(M),src:J(M),link:Cm,number:J(ql),extensions:Em,type:J(M),rtept:function(a,b){var c=L({},Nm,a,b);l(c)&&Bm(v(b[b.length-1],"flatCoordinates"),a,c)}}),Nm=Xk(Am,{ele:J(nl),time:J(ml)}),Im=Xk(Am,{name:J(M),cmt:J(M),desc:J(M),src:J(M),link:Cm,number:J(ql),type:J(M),extensions:Em,trkseg:function(a,b){var c=b[b.length-1];dl(Om,a,b);v(c,"ends").push(v(c,
"flatCoordinates").length)}}),Om=Xk(Am,{trkpt:function(a,b){var c=L({},Pm,a,b);l(c)&&Bm(v(b[b.length-1],"flatCoordinates"),a,c)}}),Pm=Xk(Am,{ele:J(nl),time:J(ml)}),Km=Xk(Am,{ele:J(nl),time:J(ml),magvar:J(nl),geoidheight:J(nl),name:J(M),cmt:J(M),desc:J(M),src:J(M),link:Cm,sym:J(M),type:J(M),fix:J(M),sat:J(ql),hdop:J(nl),vdop:J(nl),pdop:J(nl),ageofdgpsdata:J(nl),dgpsid:J(ql),extensions:Em});
function Qm(a,b){null===b&&(b=[]);for(var c=0,d=b.length;c<d;++c){var e=b[c];if(l(a.f)){var f=e.get("extensionsNode_")||null;a.f(e,f)}e.set("extensionsNode_",void 0)}}zm.prototype.De=function(a,b){if(!Za(Am,a.namespaceURI))return null;var c=Lm[a.localName];if(!l(c))return null;c=c(a,[ek(this,a,b)]);if(!l(c))return null;Qm(this,[c]);return c};zm.prototype.Cb=function(a,b){if(!Za(Am,a.namespaceURI))return[];if("gpx"==a.localName){var c=L([],Mm,a,[ek(this,a,b)]);if(l(c))return Qm(this,c),c}return[]};
zm.prototype.wc=function(){return this.defaultDataProjection};zm.prototype.Yb=function(){return this.defaultDataProjection};function Rm(a,b,c){a.setAttribute("href",b);b=v(c[c.length-1],"properties");el({node:a},Sm,bl,[v(b,"linkText"),v(b,"linkType")],c,Tm)}
function Um(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=v(d,"properties");Rk(a,null,"lat",b[1]);Rk(a,null,"lon",b[0]);switch(v(d,"geometryLayout")){case "XYZM":0!==b[3]&&(f.time=b[3]);case "XYZ":0!==b[2]&&(f.ele=b[2]);break;case "XYM":0!==b[2]&&(f.time=b[2])}b=Vm[e];d=cl(f,b);el({node:a,properties:f},Wm,bl,d,c,b)}
var Tm=["text","type"],Sm=Yk(Am,{text:K(tl),type:K(tl)}),Xm=Yk(Am,"name cmt desc src link number type rtept".split(" ")),Ym=Yk(Am,{name:K(tl),cmt:K(tl),desc:K(tl),src:K(tl),link:K(Rm),number:K(vl),type:K(tl),rtept:Zk(K(Um))}),Zm=Yk(Am,"name cmt desc src link number type trkseg".split(" ")),bn=Yk(Am,{name:K(tl),cmt:K(tl),desc:K(tl),src:K(tl),link:K(Rm),number:K(vl),type:K(tl),trkseg:Zk(K(function(a,b,c){el({node:a,geometryLayout:b.b,properties:{}},$m,an,b.H(),c)}))}),an=$k("trkpt"),$m=Yk(Am,{trkpt:K(Um)}),
Vm=Yk(Am,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),Wm=Yk(Am,{ele:K(ul),time:K(function(a,b){var c=new Date(1E3*b),c=c.getUTCFullYear()+"-"+Ma(c.getUTCMonth()+1)+"-"+Ma(c.getUTCDate())+"T"+Ma(c.getUTCHours())+":"+Ma(c.getUTCMinutes())+":"+Ma(c.getUTCSeconds())+"Z";a.appendChild(uk.createTextNode(c))}),magvar:K(ul),geoidheight:K(ul),name:K(tl),cmt:K(tl),desc:K(tl),src:K(tl),link:K(Rm),sym:K(tl),type:K(tl),fix:K(tl),sat:K(vl),
hdop:K(ul),vdop:K(ul),pdop:K(ul),ageofdgpsdata:K(ul),dgpsid:K(vl)}),cn={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function dn(a,b){var c=a.J();if(l(c))return xk(b[b.length-1].node.namespaceURI,cn[c.G()])}
var en=Yk(Am,{rte:K(function(a,b,c){var d=c[0],e=b.R();a={node:a,properties:e};b=b.J();l(b)&&(b=gk(b,!0,d),a.geometryLayout=b.b,d=b.H(),e.rtept=d);d=Xm[c[c.length-1].node.namespaceURI];e=cl(e,d);el(a,Ym,bl,e,c,d)}),trk:K(function(a,b,c){var d=c[0],e=b.R();a={node:a,properties:e};b=b.J();l(b)&&(b=gk(b,!0,d),d=b.oc(),e.trkseg=d);d=Zm[c[c.length-1].node.namespaceURI];e=cl(e,d);el(a,bn,bl,e,c,d)}),wpt:K(function(a,b,c){var d=c[0],e=c[c.length-1],f=b.R();e.properties=f;b=b.J();l(b)&&(b=gk(b,!0,d),e.geometryLayout=
b.b,Um(a,b.H(),c))})});zm.prototype.c=function(a,b){var c=xk("http://www.topografix.com/GPX/1/1","gpx");el({node:c},en,dn,a,[b]);return c};function fn(a){a=gn(a);return Va(a,function(a){return a.b.substring(a.c,a.a)})}function hn(a,b,c){this.b=a;this.c=b;this.a=c}function gn(a){for(var b=RegExp("\r\n|\r|\n","g"),c=0,d,e=[];d=b.exec(a);)c=new hn(a,c,d.index),e.push(c),c=b.lastIndex;c<a.length&&(c=new hn(a,c,a.length),e.push(c));return e};function jn(){this.defaultDataProjection=null}t(jn,dk);k=jn.prototype;k.G=function(){return"text"};k.ob=function(a,b){return this.tc(ja(a)?a:"",fk(this,b))};k.la=function(a,b){return this.Jd(ja(a)?a:"",fk(this,b))};k.uc=function(a,b){return this.vc(ja(a)?a:"",fk(this,b))};k.ra=function(a){return this.Ld(ja(a)?a:"")};k.md=function(a,b){return this.od(a,fk(this,b))};k.Hb=function(a,b){return this.Qe(a,fk(this,b))};k.Ac=function(a,b){return this.Bc(a,fk(this,b))};function kn(a){a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be("EPSG:4326");this.a=l(a.altitudeMode)?a.altitudeMode:"none"}t(kn,jn);var ln=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,mn=/^H.([A-Z]{3}).*?:(.*)/,nn=/^HFDTE(\d{2})(\d{2})(\d{2})/;
kn.prototype.tc=function(a,b){var c=this.a,d=fn(a),e={},f=[],g=2E3,h=0,m=1,n,p;n=0;for(p=d.length;n<p;++n){var r=d[n],q;if("B"==r.charAt(0)){if(q=ln.exec(r)){var r=parseInt(q[1],10),u=parseInt(q[2],10),x=parseInt(q[3],10),B=parseInt(q[4],10)+parseInt(q[5],10)/6E4;"S"==q[6]&&(B=-B);var E=parseInt(q[7],10)+parseInt(q[8],10)/6E4;"W"==q[9]&&(E=-E);f.push(E,B);"none"!=c&&f.push("gps"==c?parseInt(q[11],10):"barometric"==c?parseInt(q[12],10):0);f.push(Date.UTC(g,h,m,r,u,x)/1E3)}}else if("H"==r.charAt(0))if(q=
nn.exec(r))m=parseInt(q[1],10),h=parseInt(q[2],10)-1,g=2E3+parseInt(q[3],10);else if(q=mn.exec(r))e[q[1]]=ya(q[2]),nn.exec(r)}if(0===f.length)return null;d=new H(null);sj(d,"none"==c?"XYM":"XYZM",f);c=new G(gk(d,!1,b));c.L(e);return c};kn.prototype.Jd=function(a,b){var c=this.tc(a,b);return null===c?[]:[c]};kn.prototype.Ld=function(){return this.defaultDataProjection};function on(a,b){this.c={};this.a=[];this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof on?(c=a.N(),d=a.ub()):(c=xc(a),d=vc(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}k=on.prototype;k.fb=function(){return this.b};k.ub=function(){pn(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};k.N=function(){pn(this);return this.a.concat()};
k.ka=function(){return 0==this.b};k.clear=function(){this.c={};this.b=this.a.length=0};k.remove=function(a){return qn(this.c,a)?(delete this.c[a],this.b--,this.a.length>2*this.b&&pn(this),!0):!1};function pn(a){if(a.b!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];qn(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.b!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],qn(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return qn(this.c,a)?this.c[a]:b};
k.set=function(a,b){qn(this.c,a)||(this.b++,this.a.push(a));this.c[a]=b};k.forEach=function(a,b){for(var c=this.N(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new on(this)};function qn(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var rn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function sn(a){if(tn){tn=!1;var b=ba.location;if(b){var c=b.href;if(c&&(c=(c=sn(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw tn=!0,Error();}}return a.match(rn)}var tn=wb;function un(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function vn(a,b,c){if(ha(b))for(var d=0;d<b.length;d++)vn(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}function wn(a,b){for(var c in b)vn(c,b[c],a);return a};function xn(a,b){var c;a instanceof xn?(this.vb=l(b)?b:a.vb,yn(this,a.pb),this.Fb=a.Fb,this.Wa=a.Wa,zn(this,a.Xb),this.Ta=a.Ta,An(this,a.a.clone()),this.tb=a.tb):a&&(c=sn(String(a)))?(this.vb=!!b,yn(this,c[1]||"",!0),this.Fb=Bn(c[2]||""),this.Wa=Bn(c[3]||""),zn(this,c[4]),this.Ta=Bn(c[5]||""),An(this,c[6]||"",!0),this.tb=Bn(c[7]||"")):(this.vb=!!b,this.a=new Cn(null,0,this.vb))}k=xn.prototype;k.pb="";k.Fb="";k.Wa="";k.Xb=null;k.Ta="";k.tb="";k.vb=!1;
k.toString=function(){var a=[],b=this.pb;b&&a.push(Dn(b,En),":");if(b=this.Wa){a.push("//");var c=this.Fb;c&&a.push(Dn(c,En),"@");a.push(encodeURIComponent(String(b)));b=this.Xb;null!=b&&a.push(":",String(b))}if(b=this.Ta)this.Wa&&"/"!=b.charAt(0)&&a.push("/"),a.push(Dn(b,"/"==b.charAt(0)?Fn:Gn));(b=this.a.toString())&&a.push("?",b);(b=this.tb)&&a.push("#",Dn(b,Hn));return a.join("")};k.clone=function(){return new xn(this)};function yn(a,b,c){a.pb=c?Bn(b):b;a.pb&&(a.pb=a.pb.replace(/:$/,""))}
function zn(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Xb=b}else a.Xb=null}function An(a,b,c){b instanceof Cn?(a.a=b,In(a.a,a.vb)):(c||(b=Dn(b,Jn)),a.a=new Cn(b,0,a.vb))}function Kn(a){return a instanceof xn?a.clone():new xn(a,void 0)}
function Ln(a,b){a instanceof xn||(a=Kn(a));b instanceof xn||(b=Kn(b));var c=a,d=b,e=c.clone(),f=!!d.pb;f?yn(e,d.pb):f=!!d.Fb;f?e.Fb=d.Fb:f=!!d.Wa;f?e.Wa=d.Wa:f=null!=d.Xb;var g=d.Ta;if(f)zn(e,d.Xb);else if(f=!!d.Ta)if("/"!=g.charAt(0)&&(c.Wa&&!c.Ta?g="/"+g:(c=e.Ta.lastIndexOf("/"),-1!=c&&(g=e.Ta.substr(0,c+1)+g))),c=g,".."==c||"."==c)g="";else if(La(c,"./")||La(c,"/.")){for(var g=0==c.lastIndexOf("/",0),c=c.split("/"),h=[],m=0;m<c.length;){var n=c[m++];"."==n?g&&m==c.length&&h.push(""):".."==n?((1<
h.length||1==h.length&&""!=h[0])&&h.pop(),g&&m==c.length&&h.push("")):(h.push(n),g=!0)}g=h.join("/")}else g=c;f?e.Ta=g:f=""!==d.a.toString();f?An(e,Bn(d.a.toString())):f=!!d.tb;f&&(e.tb=d.tb);return e}function Bn(a){return a?decodeURIComponent(a):""}function Dn(a,b){return ja(a)?encodeURI(a).replace(b,Mn):null}function Mn(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var En=/[#\/\?@]/g,Gn=/[\#\?:]/g,Fn=/[\#\?]/g,Jn=/[\#\?@]/g,Hn=/#/g;
function Cn(a,b,c){this.a=a||null;this.c=!!c}function Nn(a){if(!a.ca&&(a.ca=new on,a.ja=0,a.a))for(var b=a.a.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=On(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}k=Cn.prototype;k.ca=null;k.ja=null;k.fb=function(){Nn(this);return this.ja};
k.add=function(a,b){Nn(this);this.a=null;a=On(this,a);var c=this.ca.get(a);c||this.ca.set(a,c=[]);c.push(b);this.ja++;return this};k.remove=function(a){Nn(this);a=On(this,a);return qn(this.ca.c,a)?(this.a=null,this.ja-=this.ca.get(a).length,this.ca.remove(a)):!1};k.clear=function(){this.ca=this.a=null;this.ja=0};k.ka=function(){Nn(this);return 0==this.ja};function Pn(a,b){Nn(a);b=On(a,b);return qn(a.ca.c,b)}
k.N=function(){Nn(this);for(var a=this.ca.ub(),b=this.ca.N(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.ub=function(a){Nn(this);var b=[];if(ja(a))Pn(this,a)&&(b=bb(b,this.ca.get(On(this,a))));else{a=this.ca.ub();for(var c=0;c<a.length;c++)b=bb(b,a[c])}return b};k.set=function(a,b){Nn(this);this.a=null;a=On(this,a);Pn(this,a)&&(this.ja-=this.ca.get(a).length);this.ca.set(a,[b]);this.ja++;return this};
k.get=function(a,b){var c=a?this.ub(a):[];return 0<c.length?String(c[0]):b};function Qn(a,b,c){a.remove(b);0<c.length&&(a.a=null,a.ca.set(On(a,b),cb(c)),a.ja+=c.length)}k.toString=function(){if(this.a)return this.a;if(!this.ca)return"";for(var a=[],b=this.ca.N(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.ub(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.a=a.join("&")};
k.clone=function(){var a=new Cn;a.a=this.a;this.ca&&(a.ca=this.ca.clone(),a.ja=this.ja);return a};function On(a,b){var c=String(b);a.c&&(c=c.toLowerCase());return c}function In(a,b){b&&!a.c&&(Nn(a),a.a=null,a.ca.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Qn(this,e,a))},a));a.c=b};function Rn(a){a=l(a)?a:{};this.e=l(a.anchor)?a.anchor:[.5,.5];this.d=null;this.c=l(a.anchorOrigin)?a.anchorOrigin:"top-left";this.p=l(a.anchorXUnits)?a.anchorXUnits:"fraction";this.o=l(a.anchorYUnits)?a.anchorYUnits:"fraction";var b=l(a.crossOrigin)?a.crossOrigin:null,c=l(a.img)?a.img:null,d=a.src;l(d)&&0!==d.length||null===c||(d=c.src);var e=l(a.src)?0:2,f=Sn.gb(),g=f.get(d,b);null===g&&(g=new Tn(c,d,b,e),f.set(d,b,g));this.a=g;this.F=l(a.offset)?a.offset:[0,0];this.b=l(a.offsetOrigin)?a.offsetOrigin:
"top-left";this.f=null;this.q=l(a.size)?a.size:null;Ii.call(this,{opacity:l(a.opacity)?a.opacity:1,rotation:l(a.rotation)?a.rotation:0,scale:l(a.scale)?a.scale:1,snapToPixel:l(a.snapToPixel)?a.snapToPixel:!0,rotateWithView:l(a.rotateWithView)?a.rotateWithView:!1})}t(Rn,Ii);k=Rn.prototype;
k.Pb=function(){if(null!==this.d)return this.d;var a=this.e,b=this.lb();if("fraction"==this.p||"fraction"==this.o){if(null===b)return null;a=this.e.slice();"fraction"==this.p&&(a[0]*=b[0]);"fraction"==this.o&&(a[1]*=b[1])}if("top-left"!=this.c){if(null===b)return null;a===this.e&&(a=this.e.slice());if("top-right"==this.c||"bottom-right"==this.c)a[0]=-a[0]+b[0];if("bottom-left"==this.c||"bottom-right"==this.c)a[1]=-a[1]+b[1]}return this.d=a};k.sc=function(){return this.a.a};k.ve=function(){return this.a.b};
k.ue=function(){var a=this.a;if(null===a.e)if(a.i){var b=a.c[0],c=a.c[1],d=lg(b,c);d.fillRect(0,0,b,c);a.e=d.canvas}else a.e=a.a;return a.e};k.Wb=function(){if(null!==this.f)return this.f;var a=this.F;if("top-left"!=this.b){var b=this.lb(),c=this.a.c;if(null===b||null===c)return null;a=a.slice();if("top-right"==this.b||"bottom-right"==this.b)a[0]=c[0]-b[0]-a[0];if("bottom-left"==this.b||"bottom-right"==this.b)a[1]=c[1]-b[1]-a[1]}return this.f=a};k.zh=function(){return this.a.f};
k.lb=function(){return null===this.q?this.a.c:this.q};k.fe=function(a,b){return y(this.a,"change",a,!1,b)};k.we=function(){var a=this.a;if(0==a.b){a.b=1;a.d=[Wc(a.a,"error",a.g,!1,a),Wc(a.a,"load",a.l,!1,a)];try{a.a.src=a.f}catch(b){a.g()}}};k.Ne=function(a,b){Xc(this.a,"change",a,!1,b)};function Tn(a,b,c,d){hd.call(this);this.e=null;this.a=null===a?new Image:a;null!==c&&(this.a.crossOrigin=c);this.d=null;this.b=d;this.c=null;this.f=b;this.i=!1}t(Tn,hd);
Tn.prototype.g=function(){this.b=3;Ta(this.d,Yc);this.d=null;this.dispatchEvent("change")};Tn.prototype.l=function(){this.b=2;this.c=[this.a.width,this.a.height];Ta(this.d,Yc);this.d=null;var a=lg(1,1);a.drawImage(this.a,0,0);try{a.getImageData(0,0,1,1)}catch(b){this.i=!0}this.dispatchEvent("change")};function Sn(){this.a={};this.c=0}da(Sn);Sn.prototype.clear=function(){this.a={};this.c=0};Sn.prototype.get=function(a,b){var c=b+":"+a;return c in this.a?this.a[c]:null};
Sn.prototype.set=function(a,b,c){this.a[b+":"+a]=c;++this.c};function Un(a){a=l(a)?a:{};this.d=a.font;this.e=a.rotation;this.c=a.scale;this.b=a.text;this.g=a.textAlign;this.i=a.textBaseline;this.a=l(a.fill)?a.fill:null;this.f=l(a.stroke)?a.stroke:null;this.l=l(a.offsetX)?a.offsetX:0;this.k=l(a.offsetY)?a.offsetY:0}k=Un.prototype;k.rf=function(){return this.d};k.Hh=function(){return this.a};k.Ih=function(){return this.e};k.Jh=function(){return this.c};k.Kh=function(){return this.f};k.Lh=function(){return this.b};k.Hf=function(){return this.g};k.If=function(){return this.i};function Vn(a){function b(a){return ha(a)?a:ja(a)?(!(a in d)&&"#"+a in d&&(a="#"+a),b(d[a])):c}a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be("EPSG:4326");var c=l(a.defaultStyle)?a.defaultStyle:Wn,d={};this.g=l(a.extractStyles)?a.extractStyles:!0;this.f=d;this.l=function(){var a=this.get("Style");if(l(a))return a;a=this.get("styleUrl");return l(a)?b(a):c}}t(Vn,fl);
var Xn=["http://www.google.com/kml/ext/2.2"],Yn=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],Zn=[255,255,255,1],$n=new Hi({color:Zn}),ao=[2,20],bo=[32,32],co=new Rn({anchor:ao,anchorXUnits:"pixels",anchorYUnits:"pixels",crossOrigin:"anonymous",rotation:0,scale:1,size:bo,src:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"}),eo=new Ji({color:Zn,width:1}),Wn=[new Li({fill:$n,image:co,text:null,
stroke:eo,zIndex:0})],fo={fraction:"fraction",pixels:"pixels"};function go(a){a=yk(a);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}
function ho(a){a=yk(a);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);return""!==a?void 0:b}function io(a){var b=yk(a);return null!=a.baseURI?Ln(a.baseURI,ya(b)).toString():ya(b)}function jo(a,b){return L(null,ko,a,b)}
function lo(a,b){var c=L({j:[],Pe:[]},mo,a,b);if(l(c)){var d=c.j,c=c.Pe,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new H(null);sj(c,"XYZM",d);return c}}function no(a,b){var c=L(null,oo,a,b);if(l(c)){var d=new H(null);sj(d,"XYZ",c);return d}}function po(a,b){var c=L(null,oo,a,b);if(l(c)){var d=new I(null);Lj(d,"XYZ",c,[c.length]);return d}}
function qo(a,b){var c=L([],ro,a,b);if(!l(c))return null;if(0===c.length)return new aj(c);var d=!0,e=c[0].G(),f,g,h;g=1;for(h=c.length;g<h;++g)if(f=c[g],f.G()!=e){d=!1;break}if(d){if("Point"==e){f=c[0];d=f.b;e=f.j;g=1;for(h=c.length;g<h;++g)f=c[g],Pb(e,f.j);c=new Aj(null);Ui(c,d,e);c.n();return c}return"LineString"==e?(f=new uj(null),xj(f,c),f):"Polygon"==e?(f=new Pj(null),Tj(f,c),f):"GeometryCollection"==e?new aj(c):null}return new aj(c)}
function so(a,b){var c=L(null,oo,a,b);if(null!=c){var d=new yj(null);zj(d,"XYZ",c);return d}}function to(a,b){var c=L([null],uo,a,b);if(null!=c&&null!==c[0]){var d=new I(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)Pb(e,c[g]),f.push(e.length);Lj(d,"XYZ",e,f);return d}}
function vo(a,b){var c=L({},wo,a,b);if(!l(c))return null;var d=v(c,"fillStyle",$n),e=v(c,"fill");l(e)&&!e&&(d=null);var e=v(c,"imageStyle",co),f=v(c,"strokeStyle",eo),c=v(c,"outline");l(c)&&!c&&(f=null);return[new Li({fill:d,image:e,stroke:f,text:null,zIndex:void 0})]}
var xo=Xk(Yn,{value:Vk(M)}),zo=Xk(Yn,{Data:function(a,b){var c=a.getAttribute("name");if(null!==c){var d=L(void 0,xo,a,b);l(d)&&(b[b.length-1][c]=d)}},SchemaData:function(a,b){dl(yo,a,b)}}),ko=Xk(Yn,{coordinates:Vk(ho)}),uo=Xk(Yn,{innerBoundaryIs:function(a,b){var c=L(void 0,Ao,a,b);l(c)&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=L(void 0,Bo,a,b);l(c)&&(b[b.length-1][0]=c)}}),mo=Xk(Yn,{when:function(a,b){var c=b[b.length-1].Pe,d=yk(a);if(d=/^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(d)){var e=
Date.UTC(parseInt(d[1],10),l(d[3])?parseInt(d[3],10)-1:0,l(d[5])?parseInt(d[5],10):1,l(d[7])?parseInt(d[7],10):0,l(d[8])?parseInt(d[8],10):0,l(d[9])?parseInt(d[9],10):0);if(l(d[10])&&"Z"!=d[10]){var f="-"==d[11]?-1:1,e=e+60*f*parseInt(d[12],10);l(d[13])&&(e+=3600*f*parseInt(d[13],10))}c.push(e)}else c.push(0)}},Xk(Xn,{coord:function(a,b){var c=b[b.length-1].j,d=yk(a);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?
c.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]),0):c.push(0,0,0,0)}})),oo=Xk(Yn,{coordinates:Vk(ho)}),Co=Xk(Yn,{href:J(io)},Xk(Xn,{x:J(nl),y:J(nl),w:J(nl),h:J(nl)})),Do=Xk(Yn,{Icon:J(function(a,b){var c=L({},Co,a,b);return l(c)?c:null}),heading:J(nl),hotSpot:J(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),Qd:fo[b],y:parseFloat(a.getAttribute("y")),Rd:fo[c]}}),scale:J(function(a){a=nl(a);if(l(a))return Math.sqrt(a)})}),Ao=Xk(Yn,
{LinearRing:Vk(jo)}),Eo=Xk(Yn,{color:J(go),width:J(nl)}),ro=Xk(Yn,{LineString:Uk(no),LinearRing:Uk(po),MultiGeometry:Uk(qo),Point:Uk(so),Polygon:Uk(to)}),Fo=Xk(Xn,{Track:Uk(lo)}),Bo=Xk(Yn,{LinearRing:Vk(jo)}),Go=Xk(Yn,{Style:J(vo),key:J(M),styleUrl:J(function(a){var b=ya(yk(a));return null!=a.baseURI?Ln(a.baseURI,b).toString():b})}),Io=Xk(Yn,{ExtendedData:function(a,b){dl(zo,a,b)},MultiGeometry:J(qo,"geometry"),LineString:J(no,"geometry"),LinearRing:J(po,"geometry"),Point:J(so,"geometry"),Polygon:J(to,
"geometry"),Style:J(vo),StyleMap:function(a,b){var c=L(void 0,Ho,a,b);if(l(c)){var d=b[b.length-1];ha(c)?d.Style=c:ja(c)&&(d.styleUrl=c)}},address:J(M),description:J(M),name:J(M),open:J(kl),phoneNumber:J(M),styleUrl:J(io),visibility:J(kl)},Xk(Xn,{MultiTrack:J(function(a,b){var c=L([],Fo,a,b);if(l(c)){var d=new uj(null);xj(d,c);return d}},"geometry"),Track:J(lo,"geometry")})),Jo=Xk(Yn,{color:J(go),fill:J(kl),outline:J(kl)}),yo=Xk(Yn,{SimpleData:function(a,b){var c=a.getAttribute("name");if(null!==
c){var d=M(a);b[b.length-1][c]=d}}}),wo=Xk(Yn,{IconStyle:function(a,b){var c=L({},Do,a,b);if(l(c)){var d=b[b.length-1],e=v(c,"Icon",{}),f;f=v(e,"href");f=l(f)?f:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";var g,h,m,n=v(c,"hotSpot");l(n)?(g=[n.x,n.y],h=n.Qd,m=n.Rd):"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"===f?(g=ao,m=h="pixels"):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(f)&&(g=[.5,0],m=h="fraction");var p,n=v(e,"x"),r=v(e,"y");l(n)&&l(r)&&(p=[n,r]);var q,
n=v(e,"w"),e=v(e,"h");l(n)&&l(e)&&(q=[n,e]);var u,e=v(c,"heading");l(e)&&(u=Mb(e));c=v(c,"scale");"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"==f&&(q=bo);g=new Rn({anchor:g,anchorOrigin:"bottom-left",anchorXUnits:h,anchorYUnits:m,crossOrigin:"anonymous",offset:p,offsetOrigin:"bottom-left",rotation:u,scale:c,size:q,src:f});d.imageStyle=g}},LineStyle:function(a,b){var c=L({},Eo,a,b);l(c)&&(b[b.length-1].strokeStyle=new Ji({color:v(c,"color",Zn),width:v(c,"width",1)}))},PolyStyle:function(a,
b){var c=L({},Jo,a,b);if(l(c)){var d=b[b.length-1];d.fillStyle=new Hi({color:v(c,"color",Zn)});var e=v(c,"fill");l(e)&&(d.fill=e);c=v(c,"outline");l(c)&&(d.outline=c)}}}),Ho=Xk(Yn,{Pair:function(a,b){var c=L({},Go,a,b);if(l(c)){var d=v(c,"key");l(d)&&"normal"==d&&(d=v(c,"styleUrl"),l(d)&&(b[b.length-1]=d),c=v(c,"Style"),l(c)&&(b[b.length-1]=c))}}});k=Vn.prototype;
k.Ce=function(a,b){Ck(a);var c=Xk(Yn,{Folder:Tk(this.Ce,this),Placemark:Uk(this.Kd,this),Style:sa(this.hi,this),StyleMap:sa(this.gi,this)}),c=L([],c,a,b,this);if(l(c))return c};k.Kd=function(a,b){var c=L({geometry:null},Io,a,b);if(l(c)){var d=new G,e=a.getAttribute("id");null===e||d.b(e);e=b[0];null!=c.geometry&&gk(c.geometry,!1,e);d.L(c);this.g&&d.i(this.l);return d}};
k.hi=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=vo(a,b);l(d)&&(c=null!=a.baseURI?Ln(a.baseURI,"#"+c).toString():"#"+c,this.f[c]=d)}};k.gi=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=L(void 0,Ho,a,b);l(d)&&(c=null!=a.baseURI?Ln(a.baseURI,"#"+c).toString():"#"+c,this.f[c]=d)}};k.De=function(a,b){if(!Za(Yn,a.namespaceURI))return null;var c=this.Kd(a,[ek(this,a,b)]);return l(c)?c:null};
k.Cb=function(a,b){if(!Za(Yn,a.namespaceURI))return[];var c;c=Ck(a);if("Document"==c||"Folder"==c)return c=this.Ce(a,[ek(this,a,b)]),l(c)?c:[];if("Placemark"==c)return c=this.Kd(a,[ek(this,a,b)]),l(c)?[c]:[];if("kml"==c){c=[];var d;for(d=a.firstElementChild;null!==d;d=d.nextElementSibling){var e=this.Cb(d,b);l(e)&&db(c,e)}return c}return[]};k.fi=function(a){if(Fk(a))return Ko(this,a);if(Ik(a))return Lo(this,a);if(ja(a))return a=Sk(a),Ko(this,a)};
function Ko(a,b){var c;for(c=b.firstChild;null!==c;c=c.nextSibling)if(1==c.nodeType){var d=Lo(a,c);if(l(d))return d}}function Lo(a,b){var c;for(c=b.firstElementChild;null!==c;c=c.nextElementSibling)if(Za(Yn,c.namespaceURI)&&"name"==c.localName)return M(c);for(c=b.firstElementChild;null!==c;c=c.nextElementSibling){var d=Ck(c);if(Za(Yn,c.namespaceURI)&&("Document"==d||"Folder"==d||"Placemark"==d||"kml"==d)&&(d=Lo(a,c),l(d)))return d}}k.wc=function(){return this.defaultDataProjection};k.Yb=function(){return this.defaultDataProjection};
function Mo(a,b){var c=Hg(b),c=[255*(4==c.length?c[3]:1),c[2],c[1],c[0]],d;for(d=0;4>d;++d){var e=parseInt(c[d],10).toString(16);c[d]=1==e.length?"0"+e:e}tl(a,c.join(""))}function No(a,b,c){el({node:a},Oo,Po,[b],c)}
function Qo(a,b,c){var d={node:a};null!=b.T&&a.setAttribute("id",b.T);a=b.R();var e=b.d;l(e)&&(e=e.call(b,0),null!==e&&0<e.length&&(a.Style=e[0],e=e[0].c,null!==e&&(a.name=e.b)));e=Ro[c[c.length-1].node.namespaceURI];a=cl(a,e);el(d,So,bl,a,c,e);a=c[0];b=b.J();null!=b&&(b=gk(b,!0,a));el(d,So,To,[b],c)}function Uo(a,b,c){var d=b.j;a={node:a};a.layout=b.b;a.stride=b.a;el(a,Vo,Wo,[d],c)}function Xo(a,b,c){b=b.Nc();var d=b.shift();a={node:a};el(a,Yo,Zo,b,c);el(a,Yo,$o,[d],c)}
function ap(a,b){ul(a,b*b)}
var bp=Yk(Yn,["Document","Placemark"]),ep=Yk(Yn,{Document:K(function(a,b,c){el({node:a},cp,dp,b,c)}),Placemark:K(Qo)}),cp=Yk(Yn,{Placemark:K(Qo)}),fp={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry"},gp=Yk(Yn,["href"],Yk(Xn,["x","y","w","h"])),hp=Yk(Yn,{href:K(tl)},Yk(Xn,{x:K(ul),y:K(ul),w:K(ul),h:K(ul)})),ip=Yk(Yn,["scale","heading","Icon","hotSpot"]),kp=Yk(Yn,{Icon:K(function(a,
b,c){a={node:a};var d=gp[c[c.length-1].node.namespaceURI],e=cl(b,d);el(a,hp,bl,e,c,d);d=gp[Xn[0]];e=cl(b,d);el(a,hp,jp,e,c,d)}),heading:K(ul),hotSpot:K(function(a,b){a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("xunits",b.Qd);a.setAttribute("yunits",b.Rd)}),scale:K(ap)}),lp=Yk(Yn,["color","scale"]),mp=Yk(Yn,{color:K(Mo),scale:K(ap)}),np=Yk(Yn,["color","width"]),op=Yk(Yn,{color:K(Mo),width:K(ul)}),Oo=Yk(Yn,{LinearRing:K(Uo)}),pp=Yk(Yn,{LineString:K(Uo),Point:K(Uo),Polygon:K(Xo)}),
Ro=Yk(Yn,"name open visibility address phoneNumber description styleUrl Style".split(" ")),So=Yk(Yn,{MultiGeometry:K(function(a,b,c){a={node:a};var d=b.G(),e,f;"MultiPoint"==d?(e=b.Qc(),f=qp):"MultiLineString"==d?(e=b.oc(),f=rp):"MultiPolygon"==d&&(e=b.Rc(),f=sp);el(a,pp,f,e,c)}),LineString:K(Uo),LinearRing:K(Uo),Point:K(Uo),Polygon:K(Xo),Style:K(function(a,b,c){a={node:a};var d={},e=b.d,f=b.b,g=b.e;b=b.c;null!==g&&(d.IconStyle=g);null!==b&&(d.LabelStyle=b);null!==f&&(d.LineStyle=f);null!==e&&(d.PolyStyle=
e);b=tp[c[c.length-1].node.namespaceURI];d=cl(d,b);el(a,up,bl,d,c,b)}),address:K(tl),description:K(tl),name:K(tl),open:K(sl),phoneNumber:K(tl),styleUrl:K(tl),visibility:K(sl)}),Vo=Yk(Yn,{coordinates:K(function(a,b,c){c=c[c.length-1];var d=v(c,"layout");c=v(c,"stride");var e;"XY"==d||"XYM"==d?e=2:("XYZ"==d||"XYZM"==d)&&(e=3);var f,g=b.length,h="";if(0<g){h+=b[0];for(d=1;d<e;++d)h+=","+b[d];for(f=c;f<g;f+=c)for(h+=" "+b[f],d=1;d<e;++d)h+=","+b[f+d]}tl(a,h)})}),Yo=Yk(Yn,{outerBoundaryIs:K(No),innerBoundaryIs:K(No)}),
vp=Yk(Yn,{color:K(Mo)}),tp=Yk(Yn,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),up=Yk(Yn,{IconStyle:K(function(a,b,c){a={node:a};var d={},e=b.lb(),f=b.a.c,g={href:b.a.f};if(null!==e){g.w=e[0];g.h=e[1];var h=b.Pb(),m=b.Wb();null!==m&&null!==f&&0!==m[0]&&m[1]!==e[1]&&(g.x=m[0],g.y=f[1]-(m[1]+e[1]));null!==h&&0!==h[0]&&h[1]!==e[1]&&(d.hotSpot={x:h[0],Qd:"pixels",y:e[1]-h[1],Rd:"pixels"})}d.Icon=g;e=b.i;1!==e&&(d.scale=e);b=b.g;0!==b&&(d.heading=b);b=ip[c[c.length-1].node.namespaceURI];d=cl(d,b);
el(a,kp,bl,d,c,b)}),LabelStyle:K(function(a,b,c){a={node:a};var d={},e=b.a;null!==e&&(d.color=e.a);b=b.c;l(b)&&1!==b&&(d.scale=b);b=lp[c[c.length-1].node.namespaceURI];d=cl(d,b);el(a,mp,bl,d,c,b)}),LineStyle:K(function(a,b,c){a={node:a};var d=np[c[c.length-1].node.namespaceURI];b=cl({color:b.a,width:b.c},d);el(a,op,bl,b,c,d)}),PolyStyle:K(function(a,b,c){el({node:a},vp,wp,[b.a],c)})});function jp(a,b,c){return xk(Xn[0],"gx:"+c)}
function dp(a,b){return xk(b[b.length-1].node.namespaceURI,"Placemark")}function To(a,b){if(null!=a)return xk(b[b.length-1].node.namespaceURI,fp[a.G()])}var wp=$k("color"),Wo=$k("coordinates"),Zo=$k("innerBoundaryIs"),qp=$k("Point"),rp=$k("LineString"),Po=$k("LinearRing"),sp=$k("Polygon"),$o=$k("outerBoundaryIs");
Vn.prototype.c=function(a,b){var c=xk(Yn[4],"kml");Rk(c,"http://www.w3.org/2000/xmlns/","xmlns:gx",Xn[0]);Rk(c,"http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");Rk(c,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var d={node:c},e={};1<a.length?e.Document=a:1==a.length&&(e.Placemark=a[0]);var f=bp[c.namespaceURI],e=cl(e,f);el(d,ep,bl,e,[b],f);return c};function xp(){this.defaultDataProjection=null;this.defaultDataProjection=Be("EPSG:4326")}t(xp,fl);function yp(a,b){var c=a.getAttribute("k"),d=a.getAttribute("v");b[b.length-1].yc[c]=d}
var zp=[null],Ap=Xk(zp,{nd:function(a,b){b[b.length-1].Ub.push(a.getAttribute("ref"))},tag:yp}),Cp=Xk(zp,{node:function(a,b){var c=b[0],d=b[b.length-1],e=a.getAttribute("id"),f=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];d.ie[e]=f;var g=L({yc:{}},Bp,a,b);Bc(g.yc)||(f=new yj(f),gk(f,!1,c),c=new G(f),c.b(e),c.L(g.yc),d.features.push(c))},way:function(a,b){for(var c=b[0],d=a.getAttribute("id"),e=L({Ub:[],yc:{}},Ap,a,b),f=b[b.length-1],g=[],h=0,m=e.Ub.length;h<m;h++)db(g,v(f.ie,
e.Ub[h]));e.Ub[0]==e.Ub[e.Ub.length-1]?(h=new I(null),Lj(h,"XY",g,[g.length])):(h=new H(null),sj(h,"XY",g));gk(h,!1,c);c=new G(h);c.b(d);c.L(e.yc);f.features.push(c)}}),Bp=Xk(zp,{tag:yp});xp.prototype.Cb=function(a,b){var c=ek(this,a,b);return"osm"==a.localName&&(c=L({ie:{},features:[]},Cp,a,[c]),l(c.features))?c.features:[]};xp.prototype.wc=function(){return this.defaultDataProjection};xp.prototype.Yb=function(){return this.defaultDataProjection};function Dp(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};function Ep(){}Ep.prototype.a=function(a){return Fk(a)?Fp(this,a):Ik(a)?Gp(this,a):ja(a)?(a=Sk(a),Fp(this,a)):null};function Hp(a){a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be("EPSG:4326");this.a=l(a.factor)?a.factor:1E5}t(Hp,jn);function Ip(a,b,c){c=l(c)?c:1E5;var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;var f,g;f=0;for(g=a.length;f<g;)for(d=0;d<b;++d,++f){var h=a[f],m=h-e[d];e[d]=h;a[f]=m}return Jp(a,c)}function Kp(a,b,c){var d=l(c)?c:1E5,e=Array(b);for(c=0;c<b;++c)e[c]=0;a=Lp(a,d);var f,d=0;for(f=a.length;d<f;)for(c=0;c<b;++c,++d)e[c]+=a[d],a[d]=e[c];return a}
function Jp(a,b){var c=l(b)?b:1E5,d,e;d=0;for(e=a.length;d<e;++d)a[d]=Math.round(a[d]*c);c=0;for(d=a.length;c<d;++c)e=a[c],a[c]=0>e?~(e<<1):e<<1;c="";d=0;for(e=a.length;d<e;++d){for(var f=a[d],g=void 0,h="";32<=f;)g=(32|f&31)+63,h+=String.fromCharCode(g),f>>=5;g=f+63;h+=String.fromCharCode(g);c+=h}return c}
function Lp(a,b){var c=l(b)?b:1E5,d=[],e=0,f=0,g,h;g=0;for(h=a.length;g<h;++g){var m=a.charCodeAt(g)-63,e=e|(m&31)<<f;32>m?(d.push(e),f=e=0):f+=5}e=0;for(f=d.length;e<f;++e)g=d[e],d[e]=g&1?~(g>>1):g>>1;e=0;for(f=d.length;e<f;++e)d[e]/=c;return d}k=Hp.prototype;k.tc=function(a,b){var c=this.vc(a,b);return new G(c)};k.Jd=function(a,b){return[this.tc(a,b)]};k.vc=function(a,b){var c=Kp(a,2,this.a),c=lj(c,0,c.length,2);return gk(new H(c),!1,fk(this,b))};k.Ld=function(){return this.defaultDataProjection};
k.od=function(a,b){var c=a.J();return null!=c?this.Bc(c,b):""};k.Qe=function(a,b){return this.od(a[0],b)};k.Bc=function(a,b){a=gk(a,!0,fk(this,b));return Ip(a.j,a.a,this.a)};function Mp(a){a=l(a)?a:{};this.defaultDataProjection=null;this.defaultDataProjection=Be(null!=a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326")}t(Mp,ik);function Np(a,b){var c=[],d,e,f,g;f=0;for(g=a.length;f<g;++f)d=a[f],0<f&&c.pop(),0<=d?e=b[d]:e=b[~d].slice().reverse(),c.push.apply(c,e);d=0;for(e=c.length;d<e;++d)c[d]=c[d].slice();return c}function Op(a,b,c,d,e){a=a.geometries;var f=[],g,h;g=0;for(h=a.length;g<h;++g)f[g]=Pp(a[g],b,c,d,e);return f}
function Pp(a,b,c,d,e){var f=a.type,g=Qp[f];b="Point"===f||"MultiPoint"===f?g(a,c,d):g(a,b);c=new G;c.Ba(gk(b,!1,e));l(a.id)&&c.b(a.id);l(a.properties)&&c.L(a.properties);return c}
Mp.prototype.c=function(a,b){if("Topology"==a.type){var c,d=null,e=null;l(a.transform)&&(c=a.transform,d=c.scale,e=c.translate);var f=a.arcs;if(l(c)){c=d;var g=e,h,m;h=0;for(m=f.length;h<m;++h)for(var n=f[h],p=c,r=g,q=0,u=0,x=void 0,B=void 0,E=void 0,B=0,E=n.length;B<E;++B)x=n[B],q+=x[0],u+=x[1],x[0]=q,x[1]=u,Rp(x,p,r)}c=[];g=vc(a.objects);h=0;for(m=g.length;h<m;++h)"GeometryCollection"===g[h].type?(n=g[h],c.push.apply(c,Op(n,f,d,e,b))):(n=g[h],c.push(Pp(n,f,d,e,b)));return c}return[]};
function Rp(a,b,c){a[0]=a[0]*b[0]+c[0];a[1]=a[1]*b[1]+c[1]}Mp.prototype.ra=function(){return this.defaultDataProjection};
var Qp={Point:function(a,b,c){a=a.coordinates;null===b||null===c||Rp(a,b,c);return new yj(a)},LineString:function(a,b){var c=Np(a.arcs,b);return new H(c)},Polygon:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Np(a.arcs[d],b);return new I(c)},MultiPoint:function(a,b,c){a=a.coordinates;var d,e;if(null!==b&&null!==c)for(d=0,e=a.length;d<e;++d)Rp(a[d],b,c);return new Aj(a)},MultiLineString:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Np(a.arcs[d],b);return new uj(c)},
MultiPolygon:function(a,b){var c=[],d,e,f,g,h,m;h=0;for(m=a.arcs.length;h<m;++h){d=a.arcs[h];e=[];f=0;for(g=d.length;f<g;++f)e[f]=Np(d[f],b);c[h]=e}return new Pj(c)}};function Sp(a){a=l(a)?a:{};this.l=a.featureType;this.f=a.featureNS;this.g=l(a.schemaLocation)?a.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";this.defaultDataProjection=null}t(Sp,fl);Sp.prototype.Cb=function(a,b){var c={featureType:this.l,featureNS:this.f};Hc(c,ek(this,a,l(b)?b:{}));c=L([],yl,a,[c]);l(c)||(c=[]);return c};Sp.prototype.o=function(a){if(Fk(a))return Tp(a);if(Ik(a))return L({},Up,a,[]);if(ja(a))return a=Sk(a),Tp(a)};
Sp.prototype.k=function(a){if(Fk(a))return Vp(a);if(Ik(a))return Wp(a);if(ja(a))return a=Sk(a),Vp(a)};function Vp(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return Wp(a)}var Xp={"http://www.opengis.net/gml":{boundedBy:J(il,"bounds")}};function Wp(a){var b={},c=rl(a.getAttribute("numberOfFeatures"));b.numberOfFeatures=c;return L(b,Xp,a,[])}
var Yp={"http://www.opengis.net/wfs":{totalInserted:J(ql),totalUpdated:J(ql),totalDeleted:J(ql)}},Zp={"http://www.opengis.net/ogc":{FeatureId:Uk(function(a){return a.getAttribute("fid")})}},$p={"http://www.opengis.net/wfs":{Feature:function(a,b){dl(Zp,a,b)}}},Up={"http://www.opengis.net/wfs":{TransactionSummary:J(function(a,b){return L({},Yp,a,b)},"transactionSummary"),InsertResults:J(function(a,b){return L([],$p,a,b)},"insertIds")}};
function Tp(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return L({},Up,a,[])}var aq={"http://www.opengis.net/wfs":{PropertyName:K(tl)}};function bq(a,b){var c=xk("http://www.opengis.net/ogc","Filter"),d=xk("http://www.opengis.net/ogc","FeatureId");c.appendChild(d);d.setAttribute("fid",b);a.appendChild(c)}
var cq={"http://www.opengis.net/wfs":{Insert:K(function(a,b,c){var d=c[c.length-1],d=xk(v(d,"featureNS"),v(d,"featureType"));a.appendChild(d);wm(d,b,c)}),Update:K(function(a,b,c){var d=c[c.length-1],e=v(d,"featureType"),f=v(d,"featurePrefix"),f=l(f)?f:"feature",g=v(d,"featureNS");a.setAttribute("typeName",f+":"+e);Rk(a,"http://www.w3.org/2000/xmlns/","xmlns:"+f,g);e=b.T;if(l(e)){for(var f=b.N(),g=[],h=0,m=f.length;h<m;h++){var n=b.get(f[h]);l(n)&&g.push({name:f[h],value:n})}el({node:a,srsName:v(d,
"srsName")},cq,$k("Property"),g,c);bq(a,e)}}),Delete:K(function(a,b,c){var d=c[c.length-1];c=v(d,"featureType");var e=v(d,"featurePrefix"),e=l(e)?e:"feature",d=v(d,"featureNS");a.setAttribute("typeName",e+":"+c);Rk(a,"http://www.w3.org/2000/xmlns/","xmlns:"+e,d);b=b.T;l(b)&&bq(a,b)}),Property:K(function(a,b,c){var d=xk("http://www.opengis.net/wfs","Name");a.appendChild(d);tl(d,b.name);null!=b.value&&(d=xk("http://www.opengis.net/wfs","Value"),a.appendChild(d),b.value instanceof Di?jl(d,b.value,c):
tl(d,b.value))}),Native:K(function(a,b){l(b.Ei)&&a.setAttribute("vendorId",b.Ei);l(b.ri)&&a.setAttribute("safeToIgnore",b.ri);l(b.value)&&tl(a,b.value)})}},dq={"http://www.opengis.net/wfs":{Query:K(function(a,b,c){var d=c[c.length-1],e=v(d,"featurePrefix"),f=v(d,"featureNS"),g=v(d,"propertyNames"),h=v(d,"srsName");a.setAttribute("typeName",(l(e)?e+":":"")+b);l(h)&&a.setAttribute("srsName",h);l(f)&&Rk(a,"http://www.w3.org/2000/xmlns/","xmlns:"+e,f);b=Fc(d);b.node=a;el(b,aq,$k("PropertyName"),g,c);
d=v(d,"bbox");l(d)&&(g=xk("http://www.opengis.net/ogc","Filter"),b=v(c[c.length-1],"geometryName"),e=xk("http://www.opengis.net/ogc","BBOX"),g.appendChild(e),f=xk("http://www.opengis.net/ogc","PropertyName"),tl(f,b),e.appendChild(f),jl(e,d,c),a.appendChild(g))})}};
Sp.prototype.q=function(a){var b=xk("http://www.opengis.net/wfs","GetFeature");b.setAttribute("service","WFS");b.setAttribute("version","1.1.0");l(a)&&(l(a.handle)&&b.setAttribute("handle",a.handle),l(a.outputFormat)&&b.setAttribute("outputFormat",a.outputFormat),l(a.maxFeatures)&&b.setAttribute("maxFeatures",a.maxFeatures),l(a.resultType)&&b.setAttribute("resultType",a.resultType),l(a.xi)&&b.setAttribute("startIndex",a.xi),l(a.count)&&b.setAttribute("count",a.count));Rk(b,"http://www.w3.org/2001/XMLSchema-instance",
"xsi:schemaLocation",this.g);var c=a.featureTypes;a=[{node:b,srsName:a.srsName,featureNS:l(a.featureNS)?a.featureNS:this.f,featurePrefix:a.featurePrefix,geometryName:a.geometryName,bbox:a.bbox,Be:l(a.Be)?a.Be:[]}];var d=Fc(a[a.length-1]);d.node=b;el(d,dq,$k("Query"),c,a);return b};
Sp.prototype.r=function(a,b,c,d){var e=[],f=xk("http://www.opengis.net/wfs","Transaction");f.setAttribute("service","WFS");f.setAttribute("version","1.1.0");var g,h;l(d)&&(g=l(d.gmlOptions)?d.gmlOptions:{},l(d.handle)&&f.setAttribute("handle",d.handle));Rk(f,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.g);null!=a&&(h={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},Hc(h,g),el(h,cq,$k("Insert"),a,e));null!=b&&(h={node:f,featureNS:d.featureNS,
featureType:d.featureType,featurePrefix:d.featurePrefix},Hc(h,g),el(h,cq,$k("Update"),b,e));null!=c&&el({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},cq,$k("Delete"),c,e);l(d.nativeElements)&&el({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},cq,$k("Native"),d.nativeElements,e);return f};Sp.prototype.wc=function(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return this.Yb(a);return null};
Sp.prototype.Yb=function(a){a=a.firstElementChild.firstElementChild;if(null!=a)for(a=a.firstElementChild;null!==a;a=a.nextElementSibling)if(0!==a.childNodes.length&&(1!==a.childNodes.length||3!==a.firstChild.nodeType)){var b=[{}];il(a,b);return Be(b.pop().srsName)}return null};function eq(a){a=l(a)?a:{};this.defaultDataProjection=null;this.a=l(a.splitCollection)?a.splitCollection:!1}t(eq,jn);function fq(a){a=a.H();return 0==a.length?"":a[0]+" "+a[1]}function gq(a){a=a.H();for(var b=[],c=0,d=a.length;c<d;++c)b.push(a[c][0]+" "+a[c][1]);return b.join(",")}function hq(a){var b=[];a=a.Nc();for(var c=0,d=a.length;c<d;++c)b.push("("+gq(a[c])+")");return b.join(",")}function iq(a){var b=a.G();a=(0,jq[b])(a);b=b.toUpperCase();return 0===a.length?b+" EMPTY":b+"("+a+")"}
var jq={Point:fq,LineString:gq,Polygon:hq,MultiPoint:function(a){var b=[];a=a.Qc();for(var c=0,d=a.length;c<d;++c)b.push("("+fq(a[c])+")");return b.join(",")},MultiLineString:function(a){var b=[];a=a.oc();for(var c=0,d=a.length;c<d;++c)b.push("("+gq(a[c])+")");return b.join(",")},MultiPolygon:function(a){var b=[];a=a.Rc();for(var c=0,d=a.length;c<d;++c)b.push("("+hq(a[c])+")");return b.join(",")},GeometryCollection:function(a){var b=[];a=a.$d();for(var c=0,d=a.length;c<d;++c)b.push(iq(a[c]));return b.join(",")}};
k=eq.prototype;k.tc=function(a,b){var c=this.vc(a,b);if(l(c)){var d=new G;d.Ba(c);return d}return null};k.Jd=function(a,b){var c=[],d=this.vc(a,b);this.a&&"GeometryCollection"==d.G()?c=d.e:c=[d];for(var e=[],f=0,g=c.length;f<g;++f)d=new G,d.Ba(c[f]),e.push(d);return e};k.vc=function(a,b){var c;c=new kq(new lq(a));c.a=mq(c.c);c=nq(c);return l(c)?gk(c,!1,b):null};k.Ld=function(){return null};k.od=function(a,b){var c=a.J();return l(c)?this.Bc(c,b):""};
k.Qe=function(a,b){if(1==a.length)return this.od(a[0],b);for(var c=[],d=0,e=a.length;d<e;++d)c.push(a[d].J());c=new aj(c);return this.Bc(c,b)};k.Bc=function(a,b){return iq(gk(a,!0,b))};function lq(a){this.c=a;this.a=-1}function oq(a,b){var c=l(b)?b:!1;return"0"<=a&&"9">=a||"."==a&&!c}
function mq(a){var b=a.c.charAt(++a.a),c={position:a.a,value:b};if("("==b)c.type=2;else if(","==b)c.type=5;else if(")"==b)c.type=3;else if(oq(b)||"-"==b){c.type=4;var d,b=a.a,e=!1;do"."==d&&(e=!0),d=a.c.charAt(++a.a);while(oq(d,e));a=parseFloat(a.c.substring(b,a.a--));c.value=a}else if("a"<=b&&"z">=b||"A"<=b&&"Z">=b){c.type=1;b=a.a;do d=a.c.charAt(++a.a);while("a"<=d&&"z">=d||"A"<=d&&"Z">=d);a=a.c.substring(b,a.a--).toUpperCase();c.value=a}else{if(" "==b||"\t"==b||"\r"==b||"\n"==b)return mq(a);if(""===
b)c.type=6;else throw Error("Unexpected character: "+b);}return c}function kq(a){this.c=a}k=kq.prototype;k.match=function(a){if(a=this.a.type==a)this.a=mq(this.c);return a};
function nq(a){var b=a.a;if(a.match(1)){var c=b.value;if("GEOMETRYCOLLECTION"==c){a:{if(a.match(2)){b=[];do b.push(nq(a));while(a.match(5));if(a.match(3)){a=b;break a}}else if(pq(a)){a=[];break a}qq(a);a=void 0}return new aj(a)}var d=rq[c],b=sq[c];if(!l(d)||!l(b))throw Error("Invalid geometry type: "+c);a=d.call(a);return new b(a)}qq(a)}k.Hd=function(){if(this.match(2)){var a=tq(this);if(this.match(3))return a}else if(pq(this))return null;qq(this)};
k.Gd=function(){if(this.match(2)){var a=uq(this);if(this.match(3))return a}else if(pq(this))return[];qq(this)};k.Id=function(){if(this.match(2)){var a=vq(this);if(this.match(3))return a}else if(pq(this))return[];qq(this)};k.Wh=function(){if(this.match(2)){var a;if(2==this.a.type)for(a=[this.Hd()];this.match(5);)a.push(this.Hd());else a=uq(this);if(this.match(3))return a}else if(pq(this))return[];qq(this)};
k.Vh=function(){if(this.match(2)){var a=vq(this);if(this.match(3))return a}else if(pq(this))return[];qq(this)};k.Xh=function(){if(this.match(2)){for(var a=[this.Id()];this.match(5);)a.push(this.Id());if(this.match(3))return a}else if(pq(this))return[];qq(this)};function tq(a){for(var b=[],c=0;2>c;++c){var d=a.a;if(a.match(4))b.push(d.value);else break}if(2==b.length)return b;qq(a)}function uq(a){for(var b=[tq(a)];a.match(5);)b.push(tq(a));return b}
function vq(a){for(var b=[a.Gd()];a.match(5);)b.push(a.Gd());return b}function pq(a){var b=1==a.a.type&&"EMPTY"==a.a.value;b&&(a.a=mq(a.c));return b}function qq(a){throw Error("Unexpected `"+a.a.value+"` at position "+a.a.position+" in `"+a.c.c+"`");}var sq={POINT:yj,LINESTRING:H,POLYGON:I,MULTIPOINT:Aj,MULTILINESTRING:uj,MULTIPOLYGON:Pj},rq={POINT:kq.prototype.Hd,LINESTRING:kq.prototype.Gd,POLYGON:kq.prototype.Id,MULTIPOINT:kq.prototype.Wh,MULTILINESTRING:kq.prototype.Vh,MULTIPOLYGON:kq.prototype.Xh};function wq(){this.version=void 0}t(wq,Ep);function Fp(a,b){for(var c=b.firstChild;null!==c;c=c.nextSibling)if(1==c.nodeType)return Gp(a,c);return null}function Gp(a,b){a.version=ya(b.getAttribute("version"));var c=L({version:a.version},xq,b,[]);return l(c)?c:null}function yq(a,b){return L({},zq,a,b)}function Aq(a,b){return L({},Bq,a,b)}function Cq(a,b){var c=yq(a,b);if(l(c)){var d=[rl(a.getAttribute("width")),rl(a.getAttribute("height"))];c.size=d;return c}}function Dq(a,b){return L([],Eq,a,b)}
var Fq=[null,"http://www.opengis.net/wms"],xq=Xk(Fq,{Service:J(function(a,b){return L({},Gq,a,b)}),Capability:J(function(a,b){return L({},Hq,a,b)})}),Hq=Xk(Fq,{Request:J(function(a,b){return L({},Iq,a,b)}),Exception:J(function(a,b){return L([],Jq,a,b)}),Layer:J(function(a,b){return L({},Kq,a,b)})}),Gq=Xk(Fq,{Name:J(M),Title:J(M),Abstract:J(M),KeywordList:J(Dq),OnlineResource:J(Dp),ContactInformation:J(function(a,b){return L({},Lq,a,b)}),Fees:J(M),AccessConstraints:J(M),LayerLimit:J(ql),MaxWidth:J(ql),
MaxHeight:J(ql)}),Lq=Xk(Fq,{ContactPersonPrimary:J(function(a,b){return L({},Mq,a,b)}),ContactPosition:J(M),ContactAddress:J(function(a,b){return L({},Nq,a,b)}),ContactVoiceTelephone:J(M),ContactFacsimileTelephone:J(M),ContactElectronicMailAddress:J(M)}),Mq=Xk(Fq,{ContactPerson:J(M),ContactOrganization:J(M)}),Nq=Xk(Fq,{AddressType:J(M),Address:J(M),City:J(M),StateOrProvince:J(M),PostCode:J(M),Country:J(M)}),Jq=Xk(Fq,{Format:Uk(M)}),Kq=Xk(Fq,{Name:J(M),Title:J(M),Abstract:J(M),KeywordList:J(Dq),CRS:Wk(M),
EX_GeographicBoundingBox:J(function(a,b){var c=L({},Oq,a,b);if(l(c)){var d=v(c,"westBoundLongitude"),e=v(c,"southBoundLatitude"),f=v(c,"eastBoundLongitude"),c=v(c,"northBoundLatitude");return l(d)&&l(e)&&l(f)&&l(c)?[d,e,f,c]:void 0}}),BoundingBox:Wk(function(a){var b=[pl(a.getAttribute("minx")),pl(a.getAttribute("miny")),pl(a.getAttribute("maxx")),pl(a.getAttribute("maxy"))],c=[pl(a.getAttribute("resx")),pl(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),extent:b,res:c}}),Dimension:Wk(function(a){return{name:a.getAttribute("name"),
units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:ll(a.getAttribute("multipleValues")),nearestValue:ll(a.getAttribute("nearestValue")),current:ll(a.getAttribute("current")),values:M(a)}}),Attribution:J(function(a,b){return L({},Pq,a,b)}),AuthorityURL:Wk(function(a,b){var c=yq(a,b);if(l(c)){var d=a.getAttribute("name");c.name=d;return c}}),Identifier:Wk(M),MetadataURL:Wk(function(a,b){var c=yq(a,b);if(l(c)){var d=a.getAttribute("type");
c.type=d;return c}}),DataURL:Wk(yq),FeatureListURL:Wk(yq),Style:Wk(function(a,b){return L({},Qq,a,b)}),MinScaleDenominator:J(nl),MaxScaleDenominator:J(nl),Layer:Wk(function(a,b){var c=b[b.length-1],d=L({},Kq,a,b);if(l(d)){var e=ll(a.getAttribute("queryable"));l(e)||(e=v(c,"queryable"));d.queryable=l(e)?e:!1;e=rl(a.getAttribute("cascaded"));l(e)||(e=v(c,"cascaded"));d.cascaded=e;e=ll(a.getAttribute("opaque"));l(e)||(e=v(c,"opaque"));d.opaque=l(e)?e:!1;e=ll(a.getAttribute("noSubsets"));l(e)||(e=v(c,
"noSubsets"));d.noSubsets=l(e)?e:!1;e=pl(a.getAttribute("fixedWidth"));l(e)||(e=v(c,"fixedWidth"));d.fixedWidth=e;e=pl(a.getAttribute("fixedHeight"));l(e)||(e=v(c,"fixedHeight"));d.fixedHeight=e;Ta(["Style","CRS","AuthorityURL"],function(a){l(v(c,a))&&Ec(d,a)});Ta("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "),function(a){l(v(d,a))||(d[a]=v(c,a))});return d}})}),Pq=Xk(Fq,{Title:J(M),OnlineResource:J(Dp),LogoURL:J(Cq)}),Oq=Xk(Fq,{westBoundLongitude:J(nl),
eastBoundLongitude:J(nl),southBoundLatitude:J(nl),northBoundLatitude:J(nl)}),Iq=Xk(Fq,{GetCapabilities:J(Aq),GetMap:J(Aq),GetFeatureInfo:J(Aq)}),Bq=Xk(Fq,{Format:Wk(M),DCPType:Wk(function(a,b){return L({},Rq,a,b)})}),Rq=Xk(Fq,{HTTP:J(function(a,b){return L({},Sq,a,b)})}),Sq=Xk(Fq,{Get:J(yq),Post:J(yq)}),Qq=Xk(Fq,{Name:J(M),Title:J(M),Abstract:J(M),LegendURL:Wk(Cq),StyleSheetURL:J(yq),StyleURL:J(yq)}),zq=Xk(Fq,{Format:J(M),OnlineResource:J(Dp)}),Eq=Xk(Fq,{Keyword:Uk(M)});var Tq=new ue(6378137);function N(a){pd.call(this);a=l(a)?a:{};this.a=null;this.d=Te;this.b=void 0;y(this,td("projection"),this.Pg,!1,this);y(this,td("tracking"),this.Qg,!1,this);l(a.projection)&&this.l(Be(a.projection));l(a.trackingOptions)&&this.k(a.trackingOptions);this.e(l(a.tracking)?a.tracking:!1)}t(N,pd);k=N.prototype;k.I=function(){this.e(!1);N.K.I.call(this)};k.Pg=function(){var a=this.g();null!=a&&(this.d=Ae(Be("EPSG:4326"),a),null===this.a||this.set("position",this.d(this.a)))};
k.Qg=function(){if(xg){var a=this.i();a&&!l(this.b)?this.b=ba.navigator.geolocation.watchPosition(sa(this.di,this),sa(this.ei,this),this.f()):!a&&l(this.b)&&(ba.navigator.geolocation.clearWatch(this.b),this.b=void 0)}};
k.di=function(a){a=a.coords;this.set("accuracy",a.accuracy);this.set("altitude",null===a.altitude?void 0:a.altitude);this.set("altitudeAccuracy",null===a.altitudeAccuracy?void 0:a.altitudeAccuracy);this.set("heading",null===a.heading?void 0:Mb(a.heading));null===this.a?this.a=[a.longitude,a.latitude]:(this.a[0]=a.longitude,this.a[1]=a.latitude);var b=this.d(this.a);this.set("position",b);this.set("speed",null===a.speed?void 0:a.speed);a=Oj(Tq,this.a,a.accuracy);a.Mb(this.d);this.set("accuracyGeometry",
a);this.n()};k.ei=function(a){a.type="error";this.dispatchEvent(a)};k.Zd=function(){return this.get("accuracy")};N.prototype.getAccuracy=N.prototype.Zd;N.prototype.o=function(){return this.get("accuracyGeometry")||null};N.prototype.getAccuracyGeometry=N.prototype.o;N.prototype.q=function(){return this.get("altitude")};N.prototype.getAltitude=N.prototype.q;N.prototype.r=function(){return this.get("altitudeAccuracy")};N.prototype.getAltitudeAccuracy=N.prototype.r;N.prototype.D=function(){return this.get("heading")};
N.prototype.getHeading=N.prototype.D;N.prototype.F=function(){return this.get("position")};N.prototype.getPosition=N.prototype.F;N.prototype.g=function(){return this.get("projection")};N.prototype.getProjection=N.prototype.g;N.prototype.u=function(){return this.get("speed")};N.prototype.getSpeed=N.prototype.u;N.prototype.i=function(){return this.get("tracking")};N.prototype.getTracking=N.prototype.i;N.prototype.f=function(){return this.get("trackingOptions")};N.prototype.getTrackingOptions=N.prototype.f;
N.prototype.l=function(a){this.set("projection",a)};N.prototype.setProjection=N.prototype.l;N.prototype.e=function(a){this.set("tracking",a)};N.prototype.setTracking=N.prototype.e;N.prototype.k=function(a){this.set("trackingOptions",a)};N.prototype.setTrackingOptions=N.prototype.k;function Uq(a,b,c){for(var d=[],e=a(0),f=a(1),g=b(e),h=b(f),m=[f,e],n=[h,g],p=[1,0],r={},q=1E5,u,x,B,E,F;0<--q&&0<p.length;)B=p.pop(),e=m.pop(),g=n.pop(),f=B.toString(),f in r||(d.push(g[0],g[1]),r[f]=!0),E=p.pop(),f=m.pop(),h=n.pop(),F=(B+E)/2,u=a(F),x=b(u),ej(x[0],x[1],g[0],g[1],h[0],h[1])<c?(d.push(h[0],h[1]),f=E.toString(),r[f]=!0):(p.push(E,F,F,B),n.push(h,x,x,g),m.push(f,u,u,e));return d}function Vq(a,b,c,d,e){var f=Be("EPSG:4326");return Uq(function(d){return[a,b+(c-b)*d]},Se(f,d),e)}
function Wq(a,b,c,d,e){var f=Be("EPSG:4326");return Uq(function(d){return[b+(c-b)*d,a]},Se(f,d),e)};function Xq(a){a=l(a)?a:{};this.i=this.g=null;this.d=this.b=Infinity;this.f=this.e=-Infinity;this.r=l(a.targetSize)?a.targetSize:100;this.o=l(a.maxLines)?a.maxLines:100;this.a=[];this.c=[];this.q=l(a.strokeStyle)?a.strokeStyle:Yq;this.p=this.l=void 0;this.k=null;this.setMap(l(a.map)?a.map:null)}var Yq=new Ji({color:"rgba(0,0,0,0.2)"}),Zq=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function $q(a,b,c,d,e){var f=e;b=Vq(b,a.e,a.b,a.i,c);f=l(a.a[f])?a.a[f]:new H(null);sj(f,"XY",b);pe(f.s(),d)&&(a.a[e++]=f);return e}function ar(a,b,c,d,e){var f=e;b=Wq(b,a.f,a.d,a.i,c);f=l(a.c[f])?a.c[f]:new H(null);sj(f,"XY",b);pe(f.s(),d)&&(a.c[e++]=f);return e}k=Xq.prototype;k.Rg=function(){return this.g};k.Bf=function(){return this.a};k.Ef=function(){return this.c};
k.de=function(a){var b=a.vectorContext,c=a.frameState;a=c.extent;var d=c.viewState,e=d.center,f=d.projection,d=d.resolution,c=c.pixelRatio,c=d*d/(4*c*c);if(null===this.i||!Re(this.i,f)){var g=f.s(),h=f.d,m=h[2],n=h[1],p=h[0];this.b=h[3];this.d=m;this.e=n;this.f=p;h=Be("EPSG:4326");this.l=Se(h,f);this.p=Se(f,h);this.k=this.p(je(g));this.i=f}for(var f=this.k[0],g=this.k[1],h=-1,r,n=Math.pow(this.r*d,2),p=[],q=[],d=0,m=Zq.length;d<m;++d){r=Zq[d]/2;p[0]=f-r;p[1]=g-r;q[0]=f+r;q[1]=g+r;this.l(p,p);this.l(q,
q);r=Math.pow(q[0]-p[0],2)+Math.pow(q[1]-p[1],2);if(r<=n)break;h=Zq[d]}d=h;if(-1==d)this.a.length=this.c.length=0;else{f=this.p(e);e=f[0];f=f[1];g=this.o;e=Math.floor(e/d)*d;n=Jb(e,this.f,this.d);m=$q(this,n,c,a,0);for(h=0;n!=this.f&&h++<g;)n=Math.max(n-d,this.f),m=$q(this,n,c,a,m);n=Jb(e,this.f,this.d);for(h=0;n!=this.d&&h++<g;)n=Math.min(n+d,this.d),m=$q(this,n,c,a,m);this.a.length=m;f=Math.floor(f/d)*d;e=Jb(f,this.e,this.b);m=ar(this,e,c,a,0);for(h=0;e!=this.e&&h++<g;)e=Math.max(e-d,this.e),m=
ar(this,e,c,a,m);e=Jb(f,this.e,this.b);for(h=0;e!=this.b&&h++<g;)e=Math.min(e+d,this.b),m=ar(this,e,c,a,m);this.c.length=m}b.Aa(null,this.q);a=0;for(c=this.a.length;a<c;++a)e=this.a[a],b.sb(e,null);a=0;for(c=this.c.length;a<c;++a)e=this.c[a],b.sb(e,null)};k.setMap=function(a){null!==this.g&&(this.g.v("postcompose",this.de,this),this.g.O());null!==a&&(a.t("postcompose",this.de,this),a.O());this.g=a};function br(a,b,c,d,e){hd.call(this);this.g=e;this.l=a;this.f=c;this.b=b;this.state=d}t(br,hd);br.prototype.s=function(){return this.l};function cr(a,b,c,d,e,f){br.call(this,a,b,c,0,d);this.i=e;this.a=new Image;null!==f&&(this.a.crossOrigin=f);this.e={};this.c=null;this.state=0}t(cr,br);cr.prototype.d=function(a){if(l(a)){var b=na(a);if(b in this.e)return this.e[b];a=Bc(this.e)?this.a:this.a.cloneNode(!1);return this.e[b]=a}return this.a};cr.prototype.k=function(){this.state=3;Ta(this.c,Yc);this.c=null;this.dispatchEvent("change")};cr.prototype.p=function(){this.state=2;Ta(this.c,Yc);this.c=null;this.dispatchEvent("change")};
function dr(a){0==a.state&&(a.state=1,a.c=[Wc(a.a,"error",a.k,!1,a),Wc(a.a,"load",a.p,!1,a)],a.a.src=a.i)};function er(a,b,c,d,e){br.call(this,a,b,c,2,d);this.a=e}t(er,br);er.prototype.d=function(){return this.a};function fr(a,b){hd.call(this);this.a=a;this.state=b}t(fr,hd);fr.prototype.d=function(){return na(this).toString()};fr.prototype.i=function(){return this.a};function gr(a,b,c,d,e){fr.call(this,a,b);this.l=c;this.c=new Image;null!==d&&(this.c.crossOrigin=d);this.f={};this.e=null;this.o=e}t(gr,fr);gr.prototype.b=function(a){if(l(a)){var b=na(a);if(b in this.f)return this.f[b];a=Bc(this.f)?this.c:this.c.cloneNode(!1);return this.f[b]=a}return this.c};gr.prototype.d=function(){return this.l};gr.prototype.k=function(){this.state=3;Ta(this.e,Yc);this.e=null;this.dispatchEvent("change")};
gr.prototype.p=function(){l(this.c.naturalWidth)||(this.c.naturalWidth=this.c.width,this.c.naturalHeight=this.c.height);this.state=this.c.naturalWidth&&this.c.naturalHeight?2:4;Ta(this.e,Yc);this.e=null;this.dispatchEvent("change")};function hr(a,b,c){return function(d,e,f){return c(a,b,d,e,f)}}function ir(){};function jr(){ld.call(this);this.g=null}t(jr,ld);jr.prototype.setMap=function(a){this.g=a};function kr(a,b,c,d,e){if(null!=c){var f=b.e(),g=b.a();l(f)&&l(g)&&l(e)&&0<e&&(a.Ea(ef({rotation:f,duration:e,easing:$e})),l(d)&&a.Ea(df({source:g,duration:e,easing:$e})));b.rotate(c,d)}}function lr(a,b,c,d,e){var f=b.b();c=b.constrainResolution(f,c,0);mr(a,b,c,d,e)}
function mr(a,b,c,d,e){if(null!=c){var f=b.b(),g=b.a();l(f)&&l(g)&&l(e)&&0<e&&(a.Ea(ff({resolution:f,duration:e,easing:$e})),l(d)&&a.Ea(df({source:g,duration:e,easing:$e})));if(null!=d){var h;a=b.a();e=b.b();l(a)&&l(e)&&(h=[d[0]-c*(d[0]-a[0])/e,d[1]-c*(d[1]-a[1])/e]);b.Ka(h)}b.d(c)}};function nr(a){a=l(a)?a:{};this.a=l(a.delta)?a.delta:1;jr.call(this);this.b=l(a.duration)?a.duration:250}t(nr,jr);nr.prototype.La=function(a){var b=!1,c=a.a;if(a.type==oi){var b=a.map,d=a.coordinate,c=c.e?-this.a:this.a,e=b.a();lr(b,e,c,d,this.b);a.preventDefault();b=!0}return!b};function or(a,b){hd.call(this);this.a=new Sh(this);var c=a;b&&(c=xf(a));this.a.ya(c,"dragenter",this.Ph);c!=a&&this.a.ya(c,"dragover",this.Qh);this.a.ya(a,"dragover",this.Rh);this.a.ya(a,"drop",this.Sh)}t(or,hd);k=or.prototype;k.ic=!1;k.I=function(){or.K.I.call(this);this.a.Nb()};k.Ph=function(a){var b=a.a.dataTransfer;(this.ic=!(!b||!(b.types&&(Za(b.types,"Files")||Za(b.types,"public.file-url"))||b.files&&0<b.files.length)))&&a.preventDefault()};
k.Qh=function(a){this.ic&&(a.preventDefault(),a.a.dataTransfer.dropEffect="none")};k.Rh=function(a){this.ic&&(a.preventDefault(),a.d(),a=a.a.dataTransfer,a.effectAllowed="all",a.dropEffect="copy")};k.Sh=function(a){this.ic&&(a.preventDefault(),a.d(),a=new jc(a.a),a.type="drop",this.dispatchEvent(a))};function pr(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function qr(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function rr(a){ba.setTimeout(function(){throw a;},0)}function sr(a,b){var c=a;b&&(c=sa(a,b));c=tr(c);la(ba.setImmediate)?ba.setImmediate(c):(ur||(ur=vr()),ur(c))}var ur;
function vr(){var a=ba.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=sa(function(a){if(a.origin==d||a.data==c)this.port1.onmessage()},
this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){c=c.next;var a=c.Td;c.Td=null;a()};return function(a){d.next={Td:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);
b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){ba.setTimeout(a,0)}}var tr=ed;function wr(a,b){xr||yr();zr||(xr(),zr=!0);Ar.push(new Br(a,b))}var xr;function yr(){if(ba.Promise&&ba.Promise.resolve){var a=ba.Promise.resolve();xr=function(){a.then(Cr)}}else xr=function(){sr(Cr)}}var zr=!1,Ar=[];function Cr(){for(;Ar.length;){var a=Ar;Ar=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.a.call(c.c)}catch(d){rr(d)}}}zr=!1}function Br(a,b){this.a=a;this.c=b};function Dr(a,b){this.c=Er;this.f=void 0;this.a=this.b=null;this.d=this.e=!1;try{var c=this;a.call(b,function(a){Fr(c,Gr,a)},function(a){Fr(c,Hr,a)})}catch(d){Fr(this,Hr,d)}}var Er=0,Gr=2,Hr=3;Dr.prototype.then=function(a,b,c){return Ir(this,la(a)?a:null,la(b)?b:null,c)};pr(Dr);Dr.prototype.cancel=function(a){this.c==Er&&wr(function(){var b=new Jr(a);Kr(this,b)},this)};
function Kr(a,b){if(a.c==Er)if(a.b){var c=a.b;if(c.a){for(var d=0,e=-1,f=0,g;g=c.a[f];f++)if(g=g.Fc)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.c==Er&&1==d?Kr(c,b):(d=c.a.splice(e,1)[0],Lr(c,d,Hr,b)))}}else Fr(a,Hr,b)}function Mr(a,b){a.a&&a.a.length||a.c!=Gr&&a.c!=Hr||Nr(a);a.a||(a.a=[]);a.a.push(b)}
function Ir(a,b,c,d){var e={Fc:null,ye:null,ze:null};e.Fc=new Dr(function(a,g){e.ye=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;e.ze=c?function(b){try{var e=c.call(d,b);!l(e)&&b instanceof Jr?g(b):a(e)}catch(n){g(n)}}:g});e.Fc.b=a;Mr(a,e);return e.Fc}Dr.prototype.g=function(a){this.c=Er;Fr(this,Gr,a)};Dr.prototype.i=function(a){this.c=Er;Fr(this,Hr,a)};
function Fr(a,b,c){if(a.c==Er){if(a==c)b=Hr,c=new TypeError("Promise cannot resolve to itself");else{if(qr(c)){a.c=1;c.then(a.g,a.i,a);return}if(ma(c))try{var d=c.then;if(la(d)){Or(a,c,d);return}}catch(e){b=Hr,c=e}}a.f=c;a.c=b;Nr(a);b!=Hr||c instanceof Jr||Pr(a,c)}}function Or(a,b,c){function d(b){f||(f=!0,a.i(b))}function e(b){f||(f=!0,a.g(b))}a.c=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}function Nr(a){a.e||(a.e=!0,wr(a.l,a))}
Dr.prototype.l=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;b++)Lr(this,a[b],this.c,this.f)}this.e=!1};function Lr(a,b,c,d){if(c==Gr)b.ye(d);else{for(;a&&a.d;a=a.b)a.d=!1;b.ze(d)}}function Pr(a,b){a.d=!0;wr(function(){a.d&&Qr.call(null,b)})}var Qr=rr;function Jr(a){va.call(this,a)}t(Jr,va);Jr.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Rr(a,b){this.e=[];this.o=a;this.p=b||null;this.d=this.a=!1;this.b=void 0;this.l=this.q=this.g=!1;this.f=0;this.c=null;this.i=0}Rr.prototype.cancel=function(a){if(this.a)this.b instanceof Rr&&this.b.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.i--,0>=b.i&&b.cancel())}this.o?this.o.call(this.p,this):this.l=!0;this.a||(a=new Sr,Tr(this),Ur(this,!1,a))}};Rr.prototype.k=function(a,b){this.g=!1;Ur(this,a,b)};function Ur(a,b,c){a.a=!0;a.b=c;a.d=!b;Vr(a)}
function Tr(a){if(a.a){if(!a.l)throw new Wr;a.l=!1}}function Xr(a,b,c,d){a.e.push([b,c,d]);a.a&&Vr(a)}Rr.prototype.then=function(a,b,c){var d,e,f=new Dr(function(a,b){d=a;e=b});Xr(this,d,function(a){a instanceof Sr?f.cancel():e(a)});return f.then(a,b,c)};pr(Rr);function Yr(a){return Wa(a.e,function(a){return la(a[1])})}
function Vr(a){if(a.f&&a.a&&Yr(a)){var b=a.f,c=Zr[b];c&&(ba.clearTimeout(c.T),delete Zr[b]);a.f=0}a.c&&(a.c.i--,delete a.c);for(var b=a.b,d=c=!1;a.e.length&&!a.g;){var e=a.e.shift(),f=e[0],g=e[1],e=e[2];if(f=a.d?g:f)try{var h=f.call(e||a.p,b);l(h)&&(a.d=a.d&&(h==b||h instanceof Error),a.b=b=h);qr(b)&&(d=!0,a.g=!0)}catch(m){b=m,a.d=!0,Yr(a)||(c=!0)}}a.b=b;d&&(h=sa(a.k,a,!0),d=sa(a.k,a,!1),b instanceof Rr?(Xr(b,h,d),b.q=!0):b.then(h,d));c&&(b=new $r(b),Zr[b.T]=b,a.f=b.T)}
function Wr(){va.call(this)}t(Wr,va);Wr.prototype.message="Deferred has already fired";Wr.prototype.name="AlreadyCalledError";function Sr(){va.call(this)}t(Sr,va);Sr.prototype.message="Deferred was canceled";Sr.prototype.name="CanceledError";function $r(a){this.T=ba.setTimeout(sa(this.c,this),0);this.a=a}$r.prototype.c=function(){delete Zr[this.T];throw this.a;};var Zr={};function as(a,b){l(a.name)?(this.name=a.name,this.code=Ac[a.name]):(this.code=a.code,this.name=bs(a.code));va.call(this,xa("%s %s",this.name,b))}t(as,va);function bs(a){var b=zc(function(b){return a==b});if(!l(b))throw Error("Invalid code: "+a);return b}var Ac={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};function cs(a,b){fc.call(this,a.type,b)}t(cs,fc);function ds(){hd.call(this);this.Na=new FileReader;this.Na.onloadstart=sa(this.a,this);this.Na.onprogress=sa(this.a,this);this.Na.onload=sa(this.a,this);this.Na.onabort=sa(this.a,this);this.Na.onerror=sa(this.a,this);this.Na.onloadend=sa(this.a,this)}t(ds,hd);ds.prototype.getError=function(){return this.Na.error&&new as(this.Na.error,"reading file")};ds.prototype.a=function(a){this.dispatchEvent(new cs(a,this))};ds.prototype.I=function(){ds.K.I.call(this);delete this.Na};
function es(a){var b=new Rr;a.ya("loadend",ta(function(a,b){var e=b.Na.result,f=b.getError();null==e||f?(Tr(a),Ur(a,!1,f)):(Tr(a),Ur(a,!0,e));b.Nb()},b,a));return b};function fs(a){a=l(a)?a:{};jr.call(this);this.d=l(a.formatConstructors)?a.formatConstructors:[];this.e=l(a.reprojectTo)?Be(a.reprojectTo):null;this.b=null;this.a=void 0}t(fs,jr);k=fs.prototype;k.I=function(){l(this.a)&&Yc(this.a);fs.K.I.call(this)};k.Qf=function(a){a=a.a.dataTransfer.files;var b,c,d;b=0;for(c=a.length;b<c;++b){var e=d=a[b],f=new ds,g=es(f);f.Na.readAsText(e,"");Xr(g,ta(this.kg,d),null,this)}};
k.kg=function(a,b){var c=this.g,d=this.e;null===d&&(d=c.a().o);var c=this.d,e=[],f,g;f=0;for(g=c.length;f<g;++f){var h=new c[f],m;try{m=h.la(b)}catch(n){m=null}if(null!==m){var h=h.ra(b),h=Se(h,d),p,r;p=0;for(r=m.length;p<r;++p){var q=m[p],u=q.J();null!=u&&u.Mb(h);e.push(q)}}}this.dispatchEvent(new gs(hs,this,a,e,d))};k.La=dd;
k.setMap=function(a){l(this.a)&&(Yc(this.a),this.a=void 0);null!==this.b&&(ec(this.b),this.b=null);fs.K.setMap.call(this,a);null!==a&&(this.b=new or(a.b),this.a=y(this.b,"drop",this.Qf,!1,this))};var hs="addfeatures";function gs(a,b,c,d,e){fc.call(this,a,b);this.features=d;this.file=c;this.projection=e}t(gs,fc);function is(){jr.call(this);this.l=!1;this.p={};this.b=[]}t(is,jr);function js(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}k=is.prototype;k.jb=ca;k.ab=cd;k.$a=cd;
k.La=function(a){if(!(a instanceof ki))return!0;var b=!1,c=a.type;if(c===ti||c===vi||c===ri)c=a.c,a.type==ri?delete this.p[c.pointerId]:a.type==ti?this.p[c.pointerId]=c:c.pointerId in this.p&&(this.p[c.pointerId]=c),this.b=vc(this.p);this.l&&(a.type==vi?this.jb(a):a.type==ri&&(this.l=this.ab(a)));a.type==ti&&(this.l=a=this.$a(a),b=this.kd(a));return!b};k.kd=cd;function ks(a){this.b=this.c=this.e=this.d=this.a=null;this.f=a}t(ks,ac);function ls(a){var b=a.e,c=a.c;a=Va([b,[b[0],c[1]],c,[c[0],b[1]]],a.a.ta,a.a);a[4]=a[0].slice();return new I([a])}ks.prototype.I=function(){this.setMap(null)};ks.prototype.g=function(a){var b=this.b,c=this.f;a.vectorContext.Ic(Infinity,function(a){a.Aa(c.d,c.b);a.Ca(c.c);a.Ob(b,null)})};ks.prototype.J=function(){return this.b};function ms(a){null===a.a||null===a.e||null===a.c||a.a.O()}
ks.prototype.setMap=function(a){null!==this.d&&(Yc(this.d),this.d=null,this.a.O(),this.a=null);this.a=a;null!==this.a&&(this.d=y(a,"postcompose",this.g,!1,this),ms(this))};function ns(a,b){fc.call(this,a);this.coordinate=b}t(ns,fc);function os(a){is.call(this);a=l(a)?a:{};this.d=new ks(l(a.style)?a.style:null);this.a=null;this.e=l(a.condition)?a.condition:dd}t(os,is);k=os.prototype;k.jb=function(a){if(Ci(a)){var b=this.d;a=a.pixel;b.e=this.a;b.c=a;b.b=ls(b);ms(b)}};k.J=function(){return this.d.J()};k.xe=ca;
k.ab=function(a){if(!Ci(a))return!0;this.d.setMap(null);var b=a.pixel[0]-this.a[0],c=a.pixel[1]-this.a[1];64<=b*b+c*c&&(this.xe(a),this.dispatchEvent(new ns("boxend",a.coordinate)));return!1};k.$a=function(a){if(Ci(a)&&mc(a.a)&&this.e(a)){this.a=a.pixel;this.d.setMap(a.map);var b=this.d,c=this.a;b.e=this.a;b.c=c;b.b=ls(b);ms(b);this.dispatchEvent(new ns("boxstart",a.coordinate));return!0}return!1};k.kd=ed;function ps(a,b,c){this.e=a;this.b=b;this.f=c;this.a=[];this.c=this.d=0}ps.prototype.update=function(a,b){this.a.push(a,b,ua())};function qs(a,b){var c=a.e,d=a.c,e=a.b-d,f=rs(a);return df({source:b,duration:f,easing:function(a){return d*(Math.exp(c*a*f)-1)/e}})}function rs(a){return Math.log(a.b/a.c)/a.e};function ss(a){is.call(this);this.a=(l(a)?a:{}).kinetic;this.d=this.e=null;this.i=l(a.condition)?a.condition:zi;this.f=!1}t(ss,is);ss.prototype.jb=function(a){var b=js(this.b);this.a&&this.a.update(b[0],b[1]);if(null!==this.d){var c=this.d[0]-b[0],d=b[1]-this.d[1];a=a.map;var e=a.a(),f=Xe(e),d=c=[c,d],g=f.resolution;d[0]*=g;d[1]*=g;Bd(c,f.rotation);vd(c,f.center);c=e.g(c);a.O();e.Ka(c)}this.d=b};
ss.prototype.ab=function(a){a=a.map;var b=a.a();if(0===this.b.length){var c;if(c=!this.f&&this.a)if(c=this.a,6>c.a.length)c=!1;else{var d=ua()-c.f,e=c.a.length-3;if(c.a[e+2]<d)c=!1;else{for(var f=e-3;0<f&&c.a[f+2]>d;)f-=3;var d=c.a[e+2]-c.a[f+2],g=c.a[e]-c.a[f],e=c.a[e+1]-c.a[f+1];c.d=Math.atan2(e,g);c.c=Math.sqrt(g*g+e*e)/d;c=c.c>c.b}}c&&(c=this.a,c=(c.b-c.c)/c.e,e=this.a.d,f=b.a(),this.e=qs(this.a,f),a.Ea(this.e),f=a.f(f),c=a.ta([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),c=b.g(c),b.Ka(c));Ze(b,-1);
a.O();return!1}this.d=null;return!0};ss.prototype.$a=function(a){if(0<this.b.length&&this.i(a)){var b=a.map,c=b.a();this.d=null;this.l||Ze(c,1);b.O();null!==this.e&&ab(b.u,this.e)&&(c.Ka(a.frameState.viewState.center),this.e=null);this.a&&(a=this.a,a.a.length=0,a.d=0,a.c=0);this.f=1<this.b.length;return!0}return!1};function ts(a,b){this.x=a;this.y=b}t(ts,sf);ts.prototype.clone=function(){return new ts(this.x,this.y)};ts.prototype.scale=sf.prototype.scale;ts.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};ts.prototype.rotate=function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.y*b+this.x*a;this.x=this.x*b-this.y*a;this.y=c;return this};function us(a){a=l(a)?a:{};is.call(this);this.f=l(a.condition)?a.condition:Ai;this.a=this.d=void 0;this.e=0}t(us,is);us.prototype.jb=function(a){if(Ci(a)){var b=a.map,c=b.e();a=a.pixel;a=new ts(a[0]-c[0]/2,c[1]/2-a[1]);c=Math.atan2(a.y,a.x);a=Math.sqrt(a.x*a.x+a.y*a.y);var d=b.a(),e=Xe(d);b.O();l(this.d)&&kr(b,d,e.rotation-(c-this.d));this.d=c;l(this.a)&&mr(b,d,e.resolution/a*this.a);l(this.a)&&(this.e=this.a/a);this.a=a}};
us.prototype.ab=function(a){if(!Ci(a))return!0;a=a.map;var b=a.a();Ze(b,-1);var c=Xe(b),d=this.e-1,e=c.rotation,e=b.constrainRotation(e,0);kr(a,b,e,void 0,void 0);c=c.resolution;c=b.constrainResolution(c,0,d);mr(a,b,c,void 0,400);this.e=0;return!1};us.prototype.$a=function(a){return Ci(a)&&this.f(a)?(Ze(a.map.a(),1),this.a=this.d=void 0,!0):!1};us.prototype.kd=ed;function vs(a){a=l(a)?a:{};is.call(this);this.d=l(a.condition)?a.condition:xi;this.a=void 0}t(vs,is);vs.prototype.jb=function(a){if(Ci(a)){var b=a.map,c=b.e();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(l(this.a)){a=c-this.a;var d=b.a(),e=Xe(d);b.O();kr(b,d,e.rotation-a)}this.a=c}};vs.prototype.ab=function(a){if(!Ci(a))return!0;a=a.map;var b=a.a();Ze(b,-1);var c=Xe(b).rotation,c=b.constrainRotation(c,0);kr(a,b,c,void 0,250);return!1};
vs.prototype.$a=function(a){return Ci(a)&&mc(a.a)&&this.d(a)?(a=a.map,Ze(a.a(),1),a.O(),this.a=void 0,!0):!1};function ws(a){a=l(a)?a:{};os.call(this,{condition:l(a.condition)?a.condition:Ai,style:l(a.style)?a.style:new Li({stroke:new Ji({color:[0,0,255,1]})})})}t(ws,os);ws.prototype.xe=function(){var a=this.g,b=a.a(),c=this.J().s(),d=je(c),e=a.e(),c=b.i(c,e),c=b.constrainResolution(c,0,void 0);mr(a,b,c,d,200)};function xs(a,b,c){ac.call(this);this.d=a;this.b=c;this.a=b||window;this.c=sa(this.Vd,this)}t(xs,ac);k=xs.prototype;k.T=null;k.Pd=!1;k.start=function(){ys(this);this.Pd=!1;var a=zs(this),b=As(this);a&&!b&&this.a.mozRequestAnimationFrame?(this.T=y(this.a,"MozBeforePaint",this.c),this.a.mozRequestAnimationFrame(null),this.Pd=!0):this.T=a&&b?a.call(this.a,this.c):this.a.setTimeout(fd(this.c),20)};
function ys(a){if(null!=a.T){var b=zs(a),c=As(a);b&&!c&&a.a.mozRequestAnimationFrame?Yc(a.T):b&&c?c.call(a.a,a.T):a.a.clearTimeout(a.T)}a.T=null}k.Vd=function(){this.Pd&&this.T&&Yc(this.T);this.T=null;this.d.call(this.b,ua())};k.I=function(){ys(this);xs.K.I.call(this)};function zs(a){a=a.a;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function As(a){a=a.a;return a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};function Bs(){this.a=ua()}new Bs;Bs.prototype.set=function(a){this.a=a};Bs.prototype.get=function(){return this.a};function Cs(a){hd.call(this);this.zc=a||window;this.Tc=y(this.zc,"resize",this.jg,!1,this);this.Uc=Bf(this.zc||window)}t(Cs,hd);k=Cs.prototype;k.Tc=null;k.zc=null;k.Uc=null;k.I=function(){Cs.K.I.call(this);this.Tc&&(Yc(this.Tc),this.Tc=null);this.Uc=this.zc=null};k.jg=function(){var a=Bf(this.zc||window),b=this.Uc;a==b||a&&b&&a.width==b.width&&a.height==b.height||(this.Uc=a,this.dispatchEvent("resize"))};function Ds(a,b,c,d,e){if(!(ub||wb&&Eb("525")))return!0;if(ob&&e)return Es(a);if(e&&!d)return!1;ka(b)&&(b=Fs(b));if(!c&&(17==b||18==b||ob&&91==b))return!1;if(wb&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(ub&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!wb}return Es(a)}
function Es(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||wb&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Fs(a){if(vb)a=Gs(a);else if(ob&&wb)a:switch(a){case 93:a=91;break a}return a}
function Gs(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Hs(a,b){hd.call(this);a&&Is(this,a,b)}t(Hs,hd);k=Hs.prototype;k.qc=null;k.Yc=null;k.Ad=null;k.Zc=null;k.xa=-1;k.kb=-1;k.td=!1;
var Js={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ks={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ls=ub||wb&&Eb("525"),Ms=ob&&vb;
Hs.prototype.a=function(a){wb&&(17==this.xa&&!a.l||18==this.xa&&!a.c||ob&&91==this.xa&&!a.p)&&(this.kb=this.xa=-1);-1==this.xa&&(a.l&&17!=a.f?this.xa=17:a.c&&18!=a.f?this.xa=18:a.p&&91!=a.f&&(this.xa=91));Ls&&!Ds(a.f,this.xa,a.e,a.l,a.c)?this.handleEvent(a):(this.kb=Fs(a.f),Ms&&(this.td=a.c))};Hs.prototype.c=function(a){this.kb=this.xa=-1;this.td=a.c};
Hs.prototype.handleEvent=function(a){var b=a.a,c,d,e=b.altKey;ub&&"keypress"==a.type?(c=this.kb,d=13!=c&&27!=c?b.keyCode:0):wb&&"keypress"==a.type?(c=this.kb,d=0<=b.charCode&&63232>b.charCode&&Es(c)?b.charCode:0):sb?(c=this.kb,d=Es(c)?b.keyCode:0):(c=b.keyCode||this.kb,d=b.charCode||0,Ms&&(e=this.td),ob&&63==d&&224==c&&(c=191));var f=c=Fs(c),g=b.keyIdentifier;c?63232<=c&&c in Js?f=Js[c]:25==c&&a.e&&(f=9):g&&g in Ks&&(f=Ks[g]);this.xa=f;a=new Ns(f,d,0,b);a.c=e;this.dispatchEvent(a)};
function Is(a,b,c){a.Zc&&Os(a);a.qc=b;a.Yc=y(a.qc,"keypress",a,c);a.Ad=y(a.qc,"keydown",a.a,c,a);a.Zc=y(a.qc,"keyup",a.c,c,a)}function Os(a){a.Yc&&(Yc(a.Yc),Yc(a.Ad),Yc(a.Zc),a.Yc=null,a.Ad=null,a.Zc=null);a.qc=null;a.xa=-1;a.kb=-1}Hs.prototype.I=function(){Hs.K.I.call(this);Os(this)};function Ns(a,b,c,d){jc.call(this,d);this.type="key";this.f=a;this.k=b}t(Ns,jc);function Ps(a,b){hd.call(this);var c=this.a=a;(c=ma(c)&&1==c.nodeType?this.a:this.a?this.a.body:null)&&Sf(c,"direction");this.c=y(this.a,vb?"DOMMouseScroll":"mousewheel",this,b)}t(Ps,hd);
Ps.prototype.handleEvent=function(a){var b=0,c=0,d=0;a=a.a;if("mousewheel"==a.type){c=1;if(ub||wb&&(pb||Eb("532.0")))c=40;d=Qs(-a.wheelDelta,c);l(a.wheelDeltaX)?(b=Qs(-a.wheelDeltaX,c),c=Qs(-a.wheelDeltaY,c)):c=d}else d=a.detail,100<d?d=3:-100>d&&(d=-3),l(a.axis)&&a.axis===a.HORIZONTAL_AXIS?b=d:c=d;ka(this.b)&&Jb(b,-this.b,this.b);ka(this.d)&&(c=Jb(c,-this.d,this.d));b=new Rs(d,a,0,c);this.dispatchEvent(b)};function Qs(a,b){return wb&&(ob||qb)&&0!=a%b?a:a/b}
Ps.prototype.I=function(){Ps.K.I.call(this);Yc(this.c);this.c=null};function Rs(a,b,c,d){jc.call(this,b);this.type="mousewheel";this.detail=a;this.q=d}t(Rs,jc);function Ss(a){ld.call(this);this.i=Be(a.projection);this.f=l(a.attributions)?a.attributions:null;this.q=a.logo;this.l=l(a.state)?a.state:"ready"}t(Ss,ld);k=Ss.prototype;k.ed=ca;k.U=function(){return this.f};k.S=function(){return this.q};k.V=function(){return this.i};k.W=function(){return this.l};function Ts(a,b){a.l=b;a.n()};function O(a){pd.call(this);a=Fc(a);a.brightness=l(a.brightness)?a.brightness:0;a.contrast=l(a.contrast)?a.contrast:1;a.hue=l(a.hue)?a.hue:0;a.opacity=l(a.opacity)?a.opacity:1;a.saturation=l(a.saturation)?a.saturation:1;a.visible=l(a.visible)?a.visible:!0;a.maxResolution=l(a.maxResolution)?a.maxResolution:Infinity;a.minResolution=l(a.minResolution)?a.minResolution:0;this.L(a)}t(O,pd);O.prototype.d=function(){return this.get("brightness")};O.prototype.getBrightness=O.prototype.d;O.prototype.e=function(){return this.get("contrast")};
O.prototype.getContrast=O.prototype.e;O.prototype.f=function(){return this.get("hue")};O.prototype.getHue=O.prototype.f;function Us(a){var b=a.d(),c=a.e(),d=a.f(),e=a.k(),f=a.l(),g=a.Va(),h=a.b(),m=a.s(),n=a.g(),p=a.i();return{layer:a,brightness:l(b)?Jb(b,-1,1):0,contrast:l(c)?Math.max(c,0):1,hue:l(d)?d:0,opacity:l(e)?Jb(e,0,1):1,saturation:l(f)?Math.max(f,0):1,Lb:g,visible:l(h)?!!h:!0,extent:m,maxResolution:l(n)?n:Infinity,minResolution:l(p)?Math.max(p,0):0}}O.prototype.s=function(){return this.get("extent")};
O.prototype.getExtent=O.prototype.s;O.prototype.g=function(){return this.get("maxResolution")};O.prototype.getMaxResolution=O.prototype.g;O.prototype.i=function(){return this.get("minResolution")};O.prototype.getMinResolution=O.prototype.i;O.prototype.k=function(){return this.get("opacity")};O.prototype.getOpacity=O.prototype.k;O.prototype.l=function(){return this.get("saturation")};O.prototype.getSaturation=O.prototype.l;O.prototype.b=function(){return this.get("visible")};
O.prototype.getVisible=O.prototype.b;O.prototype.q=function(a){this.set("brightness",a)};O.prototype.setBrightness=O.prototype.q;O.prototype.r=function(a){this.set("contrast",a)};O.prototype.setContrast=O.prototype.r;O.prototype.u=function(a){this.set("hue",a)};O.prototype.setHue=O.prototype.u;O.prototype.o=function(a){this.set("extent",a)};O.prototype.setExtent=O.prototype.o;O.prototype.D=function(a){this.set("maxResolution",a)};O.prototype.setMaxResolution=O.prototype.D;
O.prototype.F=function(a){this.set("minResolution",a)};O.prototype.setMinResolution=O.prototype.F;O.prototype.Q=function(a){this.set("opacity",a)};O.prototype.setOpacity=O.prototype.Q;O.prototype.X=function(a){this.set("saturation",a)};O.prototype.setSaturation=O.prototype.X;O.prototype.ba=function(a){this.set("visible",a)};O.prototype.setVisible=O.prototype.ba;function P(a){var b=Fc(a);delete b.source;O.call(this,b);this.a=a.source;y(this.a,"change",this.sd,!1,this)}t(P,O);P.prototype.Oa=function(a){a=l(a)?a:[];a.push(Us(this));return a};P.prototype.ma=function(){return this.a};P.prototype.Va=function(){return this.a.l};P.prototype.sd=function(){this.n()};function Vs(a){this.minZoom=l(a.minZoom)?a.minZoom:0;this.a=a.resolutions;this.maxZoom=this.a.length-1;this.e=l(a.origin)?a.origin:null;this.g=null;l(a.origins)&&(this.g=a.origins);this.b=null;l(a.tileSizes)&&(this.b=a.tileSizes);this.f=l(a.tileSize)?a.tileSize:null===this.b?256:void 0}var Ws=[0,0,0];k=Vs.prototype;k.Lc=function(a,b,c,d,e){e=Xs(this,a,e);for(a=a[0]-1;a>=this.minZoom;){if(b.call(c,a,Ys(this,e,a,d)))return!0;--a}return!1};k.Oc=function(){return this.maxZoom};k.Pc=function(){return this.minZoom};
k.mb=function(a){return null===this.e?this.g[a]:this.e};k.fa=function(a){return this.a[a]};k.fd=function(){return this.a};k.Sc=function(a,b,c){return a[0]<this.maxZoom?(c=Xs(this,a,c),Ys(this,c,a[0]+1,b)):null};function Zs(a,b,c,d){$s(a,b[0],b[1],c,!1,Ws);var e=Ws[1],f=Ws[2];$s(a,b[2],b[3],c,!0,Ws);return mf(e,Ws[1],f,Ws[2],d)}function Ys(a,b,c,d){return Zs(a,b,a.fa(c),d)}function at(a,b){var c=a.mb(b[0]),d=a.fa(b[0]),e=a.ia(b[0]);return[c[0]+(b[1]+.5)*e*d,c[1]+(b[2]+.5)*e*d]}
function Xs(a,b,c){var d=a.mb(b[0]),e=a.fa(b[0]);a=a.ia(b[0]);var f=d[0]+b[1]*a*e;b=d[1]+b[2]*a*e;return Ud(f,b,f+a*e,b+a*e,c)}function $s(a,b,c,d,e,f){var g=Qb(a.a,d,0),h=d/a.fa(g),m=a.mb(g);a=a.ia(g);b=h*(b-m[0])/(d*a);c=h*(c-m[1])/(d*a);e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));return gf(g,b,c,f)}k.ia=function(a){return l(this.f)?this.f:this.b[a]};
function bt(a,b,c){b=l(b)?b:42;c=l(c)?c:256;a=Math.max(fe(a)/c,ge(a)/c);b+=1;c=Array(b);for(var d=0;d<b;++d)c[d]=a/Math.pow(2,d);return c}function ct(a){a=Be(a);var b=a.s();null===b&&(a=180*xe.degrees/a.ae(),b=Ud(-a,-a,a,a));return b};function dt(a){Ss.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.u=l(a.opaque)?a.opaque:!1;this.D=l(a.tilePixelRatio)?a.tilePixelRatio:1;this.tileGrid=l(a.tileGrid)?a.tileGrid:null}t(dt,Ss);k=dt.prototype;k.Ed=cd;k.vd=function(a,b,c,d){var e=!0,f,g,h,m;for(h=d.a;h<=d.d;++h)for(m=d.b;m<=d.c;++m)g=this.hb(c,h,m),a[c]&&a[c][g]||(f=b(c,h,m),null===f?e=!1:(a[c]||(a[c]={}),a[c][g]=f));return e};k.Mc=function(){return 0};k.hb=hf;k.wa=function(){return this.tileGrid};
function et(a,b){var c;if(null===a.tileGrid){if(c=b.e,null===c){c=ct(b);var d=l(void 0)?void 0:256,e=l(void 0)?void 0:"bottom-left",f=bt(c,void 0,d);c=new Vs({origin:ke(c,e),resolutions:f,tileSize:d});b.e=c}}else c=a.tileGrid;return c}k.pc=function(a,b,c){return et(this,c).ia(a)*this.D};k.Oe=ca;function ft(a,b){ac.call(this);this.d=a;this.a=b}t(ft,ac);ft.prototype.f=ca;ft.prototype.p=function(a){2===a.target.state&&gt(this)};function gt(a){var b=a.a;b.b()&&"ready"==b.Va()&&a.d.f.O()}function ht(a,b){b.Ed()&&a.postRenderFunctions.push(ta(function(a,b,e){b=na(a).toString();a.se(e.usedTiles[b])},b))}function it(a,b){if(null!=b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[na(c).toString()]=c}}function jt(a,b){var c=b.q;l(c)&&(ja(c)?a.logos[c]="":ma(c)&&(a.logos[c.src]=c.href))}
function kt(a,b,c,d){b=na(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.a<a.a&&(a.a=d.a),d.d>a.d&&(a.d=d.d),d.b<a.b&&(a.b=d.b),d.c>a.c&&(a.c=d.c)):a[b][c]=d:(a[b]={},a[b][c]=d)}function lt(a,b,c,d){return function(e,f,g){e=b.Rb(e,f,g,c,d);return a(e)?e:null}}function mt(a,b,c){return[b*(Math.round(a[0]/b)+c[0]%2/2),b*(Math.round(a[1]/b)+c[1]%2/2)]}
function nt(a,b,c,d,e,f,g,h,m,n){var p=na(b).toString();p in a.wantedTiles||(a.wantedTiles[p]={});var r=a.wantedTiles[p];a=a.tileQueue;var q=c.minZoom,u,x,B,E,F,w;l(h)||(h=0);for(w=g;w>=q;--w)for(x=Ys(c,f,w,x),B=c.fa(w),E=x.a;E<=x.d;++E)for(F=x.b;F<=x.c;++F)g-w<=h?(u=b.Rb(w,E,F,d,e),0==u.state&&(r[kf(u.a)]=!0,u.d()in a.b||ot(a,[u,p,at(c,u.a),B])),l(m)&&m.call(n,u)):b.Oe(w,E,F)};function pt(a,b,c,d,e,f,g,h){Md(a);0===b&&0===c||Od(a,b,c);1==d&&1==e||Pd(a,d,e);0!==f&&Qd(a,f);0===g&&0===h||Od(a,g,h);return a}function qt(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[4]==b[4]&&a[5]==b[5]&&a[12]==b[12]&&a[13]==b[13]}function rt(a,b,c){var d=a[1],e=a[5],f=a[13],g=b[0];b=b[1];c[0]=a[0]*g+a[4]*b+a[12];c[1]=d*g+e*b+f;return c};function st(a,b){ac.call(this);this.f=b;this.k=null;this.b={}}t(st,ac);
function tt(a){var b=a.viewState,c=a.coordinateToPixelMatrix;pt(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);a=a.pixelToCoordinateMatrix;var b=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],m=c[6],n=c[7],p=c[8],r=c[9],q=c[10],u=c[11],x=c[12],B=c[13],E=c[14],c=c[15],F=b*h-d*g,w=b*m-e*g,U=b*n-f*g,Q=d*m-e*h,ea=d*n-f*h,Y=e*n-f*m,za=p*B-r*x,kb=p*E-q*x,Aa=p*c-u*x,Ab=r*E-q*B,tb=r*c-u*B,Ba=q*c-u*E,Ia=F*Ba-w*tb+U*Ab+Q*Aa-ea*kb+Y*za;0!=Ia&&(Ia=1/Ia,a[0]=(h*Ba-m*tb+
n*Ab)*Ia,a[1]=(-d*Ba+e*tb-f*Ab)*Ia,a[2]=(B*Y-E*ea+c*Q)*Ia,a[3]=(-r*Y+q*ea-u*Q)*Ia,a[4]=(-g*Ba+m*Aa-n*kb)*Ia,a[5]=(b*Ba-e*Aa+f*kb)*Ia,a[6]=(-x*Y+E*U-c*w)*Ia,a[7]=(p*Y-q*U+u*w)*Ia,a[8]=(g*tb-h*Aa+n*za)*Ia,a[9]=(-b*tb+d*Aa-f*za)*Ia,a[10]=(x*ea-B*U+c*F)*Ia,a[11]=(-p*ea+r*U-u*F)*Ia,a[12]=(-g*Ab+h*kb-m*za)*Ia,a[13]=(b*Ab-d*kb+e*za)*Ia,a[14]=(-x*Q+B*w-E*F)*Ia,a[15]=(p*Q-r*w+q*F)*Ia)}st.prototype.Gc=function(a){return new ft(this,a)};st.prototype.I=function(){sc(this.b,ec);st.K.I.call(this)};
function ut(){var a=Sn.gb();if(32<a.c){var b=0,c,d;for(c in a.a){d=a.a[c];var e;if(e=0===(b++&3))oc(d)?d=jd(d,void 0,void 0):(d=Sc(d),d=!!d&&Mc(d,void 0,void 0)),e=!d;e&&(delete a.a[c],--a.c)}}}
function vt(a,b,c,d,e,f,g){var h,m=c.extent,n=c.viewState,p=n.resolution,n=n.rotation;if(null!==a.k){var r={};if(h=wt(a.k,m,p,n,b,{},function(a,b){var c=na(b).toString();if(!(c in r))return r[c]=!0,d.call(e,b,null)}))return h}m=a.f.ib().Oa();for(n=m.length-1;0<=n;--n){h=m[n];var q=h.layer;if(h.visible&&p>=h.minResolution&&p<h.maxResolution&&f.call(g,q)&&(h=xt(a,q).f(b,c,d,e)))return h}}function xt(a,b){var c=na(b).toString();if(c in a.b)return a.b[c];var d=a.Gc(b);return a.b[c]=d}
st.prototype.hd=ca;st.prototype.u=function(a,b){for(var c in this.b)if(!(null!==b&&c in b.layerStates)){var d=this.b[c];delete this.b[c];ec(d)}};function yt(a,b){for(var c in a.b)if(!(c in b.layerStates)){b.postRenderFunctions.push(sa(a.u,a));break}};function zt(a,b){this.f=a;this.e=b;this.a=[];this.c=[];this.b={}}zt.prototype.clear=function(){this.a.length=0;this.c.length=0;Cc(this.b)};function At(a){var b=a.a,c=a.c,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Bt(a,0));b=a.e(d);delete a.b[b];return d}function ot(a,b){var c=a.f(b);Infinity!=c&&(a.a.push(b),a.c.push(c),a.b[a.e(b)]=!0,Ct(a,0,a.a.length-1))}zt.prototype.fb=function(){return this.a.length};zt.prototype.ka=function(){return 0===this.a.length};
function Bt(a,b){for(var c=a.a,d=a.c,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var m=2*b+1,n=2*b+2,m=n<e&&d[n]<d[m]?n:m;c[b]=c[m];d[b]=d[m];b=m}c[b]=f;d[b]=g;Ct(a,h,b)}function Ct(a,b,c){var d=a.a;a=a.c;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Dt(a){var b=a.f,c=a.a,d=a.c,e=0,f=c.length,g,h,m;for(h=0;h<f;++h)g=c[h],m=b(g),Infinity==m?delete a.b[a.e(g)]:(d[e]=m,c[e++]=g);c.length=e;d.length=e;for(b=(a.a.length>>1)-1;0<=b;b--)Bt(a,b)};function Et(a,b){zt.call(this,function(b){return a.apply(null,b)},function(a){return a[0].d()});this.i=b;this.d=0}t(Et,zt);Et.prototype.g=function(){--this.d;this.i()};function Ft(a){jr.call(this);a=l(a)?a:{};this.a=l(a.condition)?a.condition:gd(zi,Bi);this.b=l(a.pixelDelta)?a.pixelDelta:128}t(Ft,jr);Ft.prototype.La=function(a){var b=!1;if("key"==a.type){var c=a.a.f;if(this.a(a)&&(40==c||37==c||39==c||38==c)){var d=a.map,b=d.a(),e=Xe(b),f=e.resolution*this.b,g=0,h=0;40==c?h=-f:37==c?g=-f:39==c?g=f:h=f;c=[g,h];Bd(c,e.rotation);e=b.a();l(e)&&(l(100)&&d.Ea(df({source:e,duration:100,easing:bf})),d=b.g([e[0]+c[0],e[1]+c[1]]),b.Ka(d));a.preventDefault();b=!0}}return!b};function Gt(a){jr.call(this);a=l(a)?a:{};this.b=l(a.condition)?a.condition:Bi;this.a=l(a.delta)?a.delta:1;this.d=l(a.duration)?a.duration:100}t(Gt,jr);Gt.prototype.La=function(a){var b=!1;if("key"==a.type){var c=a.a.k;if(this.b(a)&&(43==c||45==c)){b=a.map;c=43==c?this.a:-this.a;b.O();var d=b.a();lr(b,d,c,void 0,this.d);a.preventDefault();b=!0}}return!b};function Ht(a){a=l(a)?a:{};jr.call(this);this.a=0;this.i=l(a.duration)?a.duration:250;this.d=null;this.e=this.b=void 0}t(Ht,jr);Ht.prototype.La=function(a){var b=!1;if("mousewheel"==a.type){var b=a.map,c=a.a;this.d=a.coordinate;this.a+=c.q;l(this.b)||(this.b=ua());c=Math.max(80-(ua()-this.b),0);ba.clearTimeout(this.e);this.e=ba.setTimeout(sa(this.f,this,b),c);a.preventDefault();b=!0}return!b};
Ht.prototype.f=function(a){var b=Jb(this.a,-1,1),c=a.a();a.O();lr(a,c,-b,this.d,this.i);this.a=0;this.d=null;this.e=this.b=void 0};function It(a){is.call(this);a=l(a)?a:{};this.d=null;this.e=void 0;this.a=!1;this.f=0;this.i=l(a.threshold)?a.threshold:.3}t(It,is);It.prototype.jb=function(a){var b=0,c=this.b[0],d=this.b[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);l(this.e)&&(b=c-this.e,this.f+=b,!this.a&&Math.abs(this.f)>this.i&&(this.a=!0));this.e=c;a=a.map;c=Zf(a.b);d=js(this.b);d[0]-=c.x;d[1]-=c.y;this.d=a.ta(d);this.a&&(c=a.a(),d=Xe(c),a.O(),kr(a,c,d.rotation+b,this.d))};
It.prototype.ab=function(a){if(2>this.b.length){a=a.map;var b=a.a();Ze(b,-1);if(this.a){var c=Xe(b).rotation,d=this.d,c=b.constrainRotation(c,0);kr(a,b,c,d,250)}return!1}return!0};It.prototype.$a=function(a){return 2<=this.b.length?(a=a.map,this.d=null,this.e=void 0,this.a=!1,this.f=0,this.l||Ze(a.a(),1),a.O(),!0):!1};function Jt(a){a=l(a)?a:{};is.call(this);this.d=null;this.f=l(a.duration)?a.duration:400;this.a=void 0;this.e=1}t(Jt,is);Jt.prototype.jb=function(a){var b=1,c=this.b[0],d=this.b[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);l(this.a)&&(b=this.a/e);this.a=e;1!=b&&(this.e=b);a=a.map;var e=a.a(),c=Xe(e),d=Zf(a.b),f=js(this.b);f[0]-=d.x;f[1]-=d.y;this.d=a.ta(f);a.O();mr(a,e,c.resolution*b,this.d)};
Jt.prototype.ab=function(a){if(2>this.b.length){a=a.map;var b=a.a();Ze(b,-1);var c=Xe(b).resolution,d=this.d,e=this.f,c=b.constrainResolution(c,0,this.e-1);mr(a,b,c,d,e);return!1}return!0};Jt.prototype.$a=function(a){return 2<=this.b.length?(a=a.map,this.d=null,this.a=void 0,this.e=1,this.l||Ze(a.a(),1),a.O(),!0):!1};function Kt(a){a=l(a)?a:{};var b=new A,c=new ps(-.005,.05,100);(l(a.altShiftDragRotate)?a.altShiftDragRotate:1)&&b.push(new vs);(l(a.doubleClickZoom)?a.doubleClickZoom:1)&&b.push(new nr({delta:a.zoomDelta,duration:a.zoomDuration}));(l(a.dragPan)?a.dragPan:1)&&b.push(new ss({kinetic:c}));(l(a.pinchRotate)?a.pinchRotate:1)&&b.push(new It);(l(a.pinchZoom)?a.pinchZoom:1)&&b.push(new Jt({duration:a.zoomDuration}));if(l(a.keyboard)?a.keyboard:1)b.push(new Ft),b.push(new Gt({delta:a.zoomDelta,duration:a.zoomDuration}));
(l(a.mouseWheelZoom)?a.mouseWheelZoom:1)&&b.push(new Ht({duration:a.zoomDuration}));(l(a.shiftDragZoom)?a.shiftDragZoom:1)&&b.push(new ws);return b};function R(a){var b=l(a)?a:{};a=Fc(b);delete a.layers;b=b.layers;O.call(this,a);this.a=null;y(this,td("layers"),this.ag,!1,this);l(b)?ha(b)&&(b=new A(cb(b))):b=new A;this.aa(b)}t(R,O);k=R.prototype;k.ce=function(){this.b()&&this.n()};
k.ag=function(){null!==this.a&&(Ta(vc(this.a),Yc),this.a=null);var a=this.Ab();if(null!=a){this.a={add:y(a,"add",this.$f,!1,this),remove:y(a,"remove",this.bg,!1,this)};var a=a.a,b,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.a[na(d).toString()]=y(d,["propertychange","change"],this.ce,!1,this)}this.n()};k.$f=function(a){a=a.element;this.a[na(a).toString()]=y(a,["propertychange","change"],this.ce,!1,this);this.n()};k.bg=function(a){a=na(a.element).toString();Yc(this.a[a]);delete this.a[a];this.n()};
k.Ab=function(){return this.get("layers")};R.prototype.getLayers=R.prototype.Ab;R.prototype.aa=function(a){this.set("layers",a)};R.prototype.setLayers=R.prototype.aa;
R.prototype.Oa=function(a){var b=l(a)?a:[],c=b.length;this.Ab().forEach(function(a){a.Oa(b)});a=Us(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.brightness=Jb(e.brightness+a.brightness,-1,1),e.contrast*=a.contrast,e.hue+=a.hue,e.opacity*=a.opacity,e.saturation*=a.saturation,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution),l(a.extent)&&l(e.extent)&&(e.extent=oe(e.extent,a.extent));return b};
R.prototype.Va=function(){return"ready"};function Lt(a){ye.call(this,{code:a,units:"m",extent:Mt,global:!0,worldExtent:Nt})}t(Lt,ye);Lt.prototype.yd=function(a,b){var c=b[1]/6378137;return a/((Math.exp(c)+Math.exp(-c))/2)};var Ot=6378137*Math.PI,Mt=[-Ot,-Ot,Ot,Ot],Nt=[-180,-85,180,85],Je=Va("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "),function(a){return new Lt(a)});
function Ke(a,b,c){var d=a.length;c=1<c?c:2;l(b)||(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=6378137*Math.PI*a[e]/180,b[e+1]=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));return b}function Le(a,b,c){var d=a.length;c=1<c?c:2;l(b)||(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/(6378137*Math.PI),b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};function Pt(a,b){ye.call(this,{code:a,units:"degrees",extent:Qt,axisOrientation:b,global:!0,worldExtent:Qt})}t(Pt,ye);Pt.prototype.yd=function(a){return a};var Qt=[-180,-90,180,90],Me=[new Pt("CRS:84"),new Pt("EPSG:4326","neu"),new Pt("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Pt("urn:ogc:def:crs:OGC:1.3:CRS84"),new Pt("urn:ogc:def:crs:OGC:2:84"),new Pt("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Pt("urn:x-ogc:def:crs:EPSG:4326","neu")];function Rt(){Ee(Je);Ee(Me);Ie()};function S(a){P.call(this,a)}t(S,P);function T(a){P.call(this,a)}t(T,P);T.prototype.aa=function(){return this.get("preload")};T.prototype.getPreload=T.prototype.aa;T.prototype.na=function(a){this.set("preload",a)};T.prototype.setPreload=T.prototype.na;T.prototype.ea=function(){return this.get("useInterimTilesOnError")};T.prototype.getUseInterimTilesOnError=T.prototype.ea;T.prototype.sa=function(a){this.set("useInterimTilesOnError",a)};T.prototype.setUseInterimTilesOnError=T.prototype.sa;function V(a){a=l(a)?a:{};var b=Fc(a);delete b.style;P.call(this,b);this.cb=null;this.ea=void 0;this.na(a.style)}t(V,P);V.prototype.ac=function(){return this.cb};V.prototype.Cc=function(){return this.ea};V.prototype.na=function(a){this.cb=l(a)?a:Ni;this.ea=null===a?void 0:Mi(this.cb);this.n()};function St(a,b,c,d,e){this.p={};this.b=a;this.r=b;this.e=c;this.D=d;this.cb=e;this.f=this.a=this.c=this.ma=this.ea=this.aa=null;this.qb=this.bb=this.o=this.X=this.Q=this.F=0;this.Oa=!1;this.g=this.na=0;this.Ib=!1;this.ba=0;this.d="";this.l=this.u=this.Va=this.sa=0;this.ga=this.k=this.i=null;this.q=[];this.Jb=Id()}
function Tt(a,b,c){if(null!==a.f){b=Qi(b,0,c,2,a.D,a.q);c=a.b;var d=a.Jb,e=c.globalAlpha;1!=a.o&&(c.globalAlpha=e*a.o);var f=a.na;a.Oa&&(f+=a.cb);var g,h;g=0;for(h=b.length;g<h;g+=2){var m=b[g]-a.F,n=b[g+1]-a.Q;a.Ib&&(m=m+.5|0,n=n+.5|0);if(0!==f||1!=a.g){var p=m+a.F,r=n+a.Q;pt(d,p,r,a.g,a.g,f,-p,-r);c.setTransform(d[0],d[1],d[4],d[5],d[12],d[13])}c.drawImage(a.f,a.bb,a.qb,a.ba,a.X,m,n,a.ba,a.X)}0===f&&1==a.g||c.setTransform(1,0,0,1,0,0);1!=a.o&&(c.globalAlpha=e)}}
function Ut(a,b,c,d){var e=0;if(null!==a.ga&&""!==a.d){null===a.i||Vt(a,a.i);null===a.k||Wt(a,a.k);var f=a.ga,g=a.b,h=a.ma;null===h?(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.ma={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline}):(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline));b=Qi(b,e,c,d,a.D,a.q);for(f=a.b;e<c;e+=d){g=b[e]+
a.sa;h=b[e+1]+a.Va;if(0!==a.u||1!=a.l){var m=pt(a.Jb,g,h,a.l,a.l,a.u,-g,-h);f.setTransform(m[0],m[1],m[4],m[5],m[12],m[13])}null===a.k||f.strokeText(a.d,g,h);null===a.i||f.fillText(a.d,g,h)}0===a.u&&1==a.l||f.setTransform(1,0,0,1,0,0)}}function Xt(a,b,c,d,e,f){var g=a.b;a=Qi(b,c,d,e,a.D,a.q);g.moveTo(a[0],a[1]);for(b=2;b<a.length;b+=2)g.lineTo(a[b],a[b+1]);f&&g.lineTo(a[0],a[1]);return d}function Yt(a,b,c,d,e){var f=a.b,g,h;g=0;for(h=d.length;g<h;++g)c=Xt(a,b,c,d[g],e,!0),f.closePath();return c}
k=St.prototype;k.Ic=function(a,b){var c=a.toString(),d=this.p[c];l(d)?d.push(b):this.p[c]=[b]};k.jc=function(a){if(pe(this.e,a.s())){if(null!==this.c||null!==this.a){null===this.c||Vt(this,this.c);null===this.a||Wt(this,this.a);var b;b=a.j;b=null===b?null:Qi(b,0,b.length,a.a,this.D,this.q);var c=b[2]-b[0],d=b[3]-b[1],c=Math.sqrt(c*c+d*d),d=this.b;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);null===this.c||d.fill();null===this.a||d.stroke()}""!==this.d&&Ut(this,a.Dd(),2,2)}};
k.Wd=function(a,b){var c=a.J();if(null!=c&&pe(this.e,c.s())){var d=b.a;l(d)||(d=0);this.Ic(d,function(a){a.Aa(b.d,b.b);a.$b(b.e);a.Ca(b.c);Zt[c.G()].call(a,c,null)})}};k.Xd=function(a,b){var c=a.e,d,e;d=0;for(e=c.length;d<e;++d){var f=c[d];Zt[f.G()].call(this,f,b)}};k.nc=function(a){var b=a.j;a=a.a;null===this.f||Tt(this,b,b.length);""!==this.d&&Ut(this,b,b.length,a)};k.lc=function(a){var b=a.j;a=a.a;null===this.f||Tt(this,b,b.length);""!==this.d&&Ut(this,b,b.length,a)};
k.sb=function(a){if(pe(this.e,a.s())){if(null!==this.a){Wt(this,this.a);var b=this.b,c=a.j;b.beginPath();Xt(this,c,0,c.length,a.a,!1);b.stroke()}""!==this.d&&(a=tj(a),Ut(this,a,2,2))}};k.kc=function(a){var b=a.s();if(pe(this.e,b)){if(null!==this.a){Wt(this,this.a);var b=this.b,c=a.j,d=0,e=a.d,f=a.a;b.beginPath();var g,h;g=0;for(h=e.length;g<h;++g)d=Xt(this,c,d,e[g],f,!1);b.stroke()}""!==this.d&&(a=wj(a),Ut(this,a,a.length,2))}};
k.Ob=function(a){if(pe(this.e,a.s())){if(null!==this.a||null!==this.c){null===this.c||Vt(this,this.c);null===this.a||Wt(this,this.a);var b=this.b;b.beginPath();Yt(this,Mj(a),0,a.d,a.a);null===this.c||b.fill();null===this.a||b.stroke()}""!==this.d&&(a=Nj(a),Ut(this,a,2,2))}};
k.mc=function(a){if(pe(this.e,a.s())){if(null!==this.a||null!==this.c){null===this.c||Vt(this,this.c);null===this.a||Wt(this,this.a);var b=this.b,c=Rj(a),d=0,e=a.d,f=a.a,g,h;g=0;for(h=e.length;g<h;++g){var m=e[g];b.beginPath();d=Yt(this,c,d,m,f);null===this.c||b.fill();null===this.a||b.stroke()}}""!==this.d&&(a=Sj(a),Ut(this,a,a.length,2))}};function $t(a){var b=Va(xc(a.p),Number);gb(b);var c,d,e,f,g;c=0;for(d=b.length;c<d;++c)for(e=a.p[b[c].toString()],f=0,g=e.length;f<g;++f)e[f](a)}
function Vt(a,b){var c=a.b,d=a.aa;null===d?(c.fillStyle=b.fillStyle,a.aa={fillStyle:b.fillStyle}):d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle)}
function Wt(a,b){var c=a.b,d=a.ea;null===d?(c.lineCap=b.lineCap,ug&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.ea={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle}):(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),ug&&!ib(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=
b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle))}
k.Aa=function(a,b){if(null===a)this.c=null;else{var c=a.a;this.c={fillStyle:Jg(null===c?Ei:c)}}if(null===b)this.a=null;else{var c=b.a,d=b.b,e=b.d,f=b.e,g=b.c,h=b.f;this.a={lineCap:l(d)?d:"round",lineDash:null!=e?e:Fi,lineJoin:l(f)?f:"round",lineWidth:this.r*(l(g)?g:1),miterLimit:l(h)?h:10,strokeStyle:Jg(null===c?Gi:c)}}};
k.$b=function(a){if(null===a)this.f=null;else{var b=a.Pb(),c=a.sc(1),d=a.Wb(),e=a.lb();this.F=b[0];this.Q=b[1];this.X=e[1];this.f=c;this.o=a.r;this.bb=d[0];this.qb=d[1];this.Oa=a.u;this.na=a.g;this.g=a.i;this.Ib=a.D;this.ba=e[0]}};
k.Ca=function(a){if(null===a)this.d="";else{var b=a.a;null===b?this.i=null:(b=b.a,this.i={fillStyle:Jg(null===b?Ei:b)});var c=a.f;if(null===c)this.k=null;else{var b=c.a,d=c.b,e=c.d,f=c.e,g=c.c,c=c.f;this.k={lineCap:l(d)?d:"round",lineDash:null!=e?e:Fi,lineJoin:l(f)?f:"round",lineWidth:l(g)?g:1,miterLimit:l(c)?c:10,strokeStyle:Jg(null===b?Gi:b)}}var b=a.d,d=a.l,e=a.k,f=a.e,g=a.c,c=a.b,h=a.g;a=a.i;this.ga={font:l(b)?b:"10px sans-serif",textAlign:l(h)?h:"center",textBaseline:l(a)?a:"middle"};this.d=
l(c)?c:"";this.sa=l(d)?this.r*d:0;this.Va=l(e)?this.r*e:0;this.u=l(f)?f:0;this.l=this.r*(l(g)?g:1)}};var Zt={Point:St.prototype.nc,LineString:St.prototype.sb,Polygon:St.prototype.Ob,MultiPoint:St.prototype.lc,MultiLineString:St.prototype.kc,MultiPolygon:St.prototype.mc,GeometryCollection:St.prototype.Xd,Circle:St.prototype.jc};function au(a,b,c){this.ma=a;this.ba=b;this.e=0;this.resolution=c;this.Q=this.F=null;this.c=[];this.coordinates=[];this.aa=Id();this.a=[];this.ga=[];this.d=Sd();this.ea=Id()}
function bu(a,b,c,d,e,f){var g=a.coordinates.length,h=a.wd(),m=[b[c],b[c+1]],n=[NaN,NaN],p=!0,r,q,u;for(r=c+e;r<d;r+=e){n[0]=b[r];n[1]=b[r+1];u=h[1];var x=h[2],B=h[3],E=n[0],F=n[1],w=0;E<h[0]?w=w|16:E>x&&(w=w|4);F<u?w|=8:F>B&&(w|=2);0===w&&(w=1);u=w;u!==q?(p&&(a.coordinates[g++]=m[0],a.coordinates[g++]=m[1]),a.coordinates[g++]=n[0],a.coordinates[g++]=n[1],p=!1):1===u?(a.coordinates[g++]=n[0],a.coordinates[g++]=n[1],p=!1):p=!0;m[0]=n[0];m[1]=n[1];q=u}r===c+e&&(a.coordinates[g++]=m[0],a.coordinates[g++]=
m[1]);f&&(a.coordinates[g++]=b[c],a.coordinates[g++]=b[c+1]);return g}function cu(a,b,c){a.F=[0,b,c,0];a.c.push(a.F);a.Q=[0,b,c,0];a.a.push(a.Q)}
function du(a,b,c,d,e,f,g,h){var m;qt(d,a.aa)?m=a.ga:(m=Qi(a.coordinates,0,a.coordinates.length,2,d,a.ga),Ld(a.aa,d));d=0;var n=g.length,p=0,r;for(a=a.ea;d<n;){var q=g[d],u,x,B,E;switch(q[0]){case 0:p=q[2];p=na(p).toString();l(v(f,p))?d=q[3]:++d;break;case 1:b.beginPath();++d;break;case 2:p=q[1];r=m[p];var F=m[p+1],w=m[p+2]-r,p=m[p+3]-F;b.arc(r,F,Math.sqrt(w*w+p*p),0,2*Math.PI,!0);++d;break;case 3:b.closePath();++d;break;case 4:p=q[1];r=q[2];u=q[3];B=q[4]*c;var U=q[5]*c,Q=q[6];x=q[7];var ea=q[8],
Y=q[9],F=q[11],w=q[12],za=q[13],kb=q[14];for(q[10]&&(F+=e);p<r;p+=2){q=m[p]-B;E=m[p+1]-U;za&&(q=q+.5|0,E=E+.5|0);if(1!=w||0!==F){var Aa=q+B,Ab=E+U;pt(a,Aa,Ab,w,w,F,-Aa,-Ab);b.setTransform(a[0],a[1],a[4],a[5],a[12],a[13])}Aa=b.globalAlpha;1!=x&&(b.globalAlpha=Aa*x);b.drawImage(u,ea,Y,kb,Q,q,E,kb*c,Q*c);1!=x&&(b.globalAlpha=Aa);1==w&&0===F||b.setTransform(1,0,0,1,0,0)}++d;break;case 5:p=q[1];r=q[2];B=q[3];U=q[4]*c;Q=q[5]*c;F=q[6];w=q[7]*c;u=q[8];for(x=q[9];p<r;p+=2){q=m[p]+U;E=m[p+1]+Q;if(1!=w||0!==
F)pt(a,q,E,w,w,F,-q,-E),b.setTransform(a[0],a[1],a[4],a[5],a[12],a[13]);x&&b.strokeText(B,q,E);u&&b.fillText(B,q,E);1==w&&0===F||b.setTransform(1,0,0,1,0,0)}++d;break;case 6:if(l(h)&&(r=q[1],p=q[2],p=h(r,p)))return p;++d;break;case 7:b.fill();++d;break;case 8:p=q[1];r=q[2];b.moveTo(m[p],m[p+1]);for(p+=2;p<r;p+=2)b.lineTo(m[p],m[p+1]);++d;break;case 9:b.fillStyle=q[1];++d;break;case 10:p=l(q[7])?q[7]:!0;r=q[2];b.strokeStyle=q[1];b.lineWidth=p?r*c:r;b.lineCap=q[3];b.lineJoin=q[4];b.miterLimit=q[5];
ug&&b.setLineDash(q[6]);++d;break;case 11:b.font=q[1];b.textAlign=q[2];b.textBaseline=q[3];++d;break;case 12:b.stroke();++d;break;default:++d}}}function eu(a){var b=a.a;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[3]=c;e=a.a;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function fu(a,b,c){a.F[3]=a.c.length;a.F=null;a.Q[3]=a.a.length;a.Q=null;b=[6,b,c];a.c.push(b);a.a.push(b)}au.prototype.dd=ca;au.prototype.wd=function(){return this.ba};
au.prototype.s=function(){return this.d};function gu(a,b,c){au.call(this,a,b,c);this.i=this.X=null;this.r=this.q=this.o=this.p=this.k=this.D=this.u=this.l=this.g=this.f=this.b=void 0}t(gu,au);
gu.prototype.nc=function(a,b){if(null!==this.i){be(this.d,a.s());cu(this,a,b);var c=a.j,d=this.coordinates.length,c=bu(this,c,0,c.length,a.a,!1);this.c.push([4,d,c,this.i,this.b,this.f,this.g,this.l,this.u,this.D,this.k,this.p,this.o,this.q,this.r]);this.a.push([4,d,c,this.X,this.b,this.f,this.g,this.l,this.u,this.D,this.k,this.p,this.o,this.q,this.r]);fu(this,a,b)}};
gu.prototype.lc=function(a,b){if(null!==this.i){be(this.d,a.s());cu(this,a,b);var c=a.j,d=this.coordinates.length,c=bu(this,c,0,c.length,a.a,!1);this.c.push([4,d,c,this.i,this.b,this.f,this.g,this.l,this.u,this.D,this.k,this.p,this.o,this.q,this.r]);this.a.push([4,d,c,this.X,this.b,this.f,this.g,this.l,this.u,this.D,this.k,this.p,this.o,this.q,this.r]);fu(this,a,b)}};
gu.prototype.dd=function(){eu(this);this.f=this.b=void 0;this.i=this.X=null;this.r=this.q=this.p=this.k=this.D=this.u=this.l=this.o=this.g=void 0};gu.prototype.$b=function(a){var b=a.Pb(),c=a.lb(),d=a.ue(1),e=a.sc(1),f=a.Wb();this.b=b[0];this.f=b[1];this.X=d;this.i=e;this.g=c[1];this.l=a.r;this.u=f[0];this.D=f[1];this.k=a.u;this.p=a.g;this.o=a.i;this.q=a.D;this.r=c[0]};
function hu(a,b,c){au.call(this,a,b,c);this.b={hc:void 0,cc:void 0,dc:null,ec:void 0,fc:void 0,gc:void 0,Bd:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}t(hu,au);function iu(a,b,c,d,e){var f=a.coordinates.length;b=bu(a,b,c,d,e,!1);f=[8,f,b];a.c.push(f);a.a.push(f);return d}k=hu.prototype;k.wd=function(){var a=this.ba;this.e&&(a=Vd(a,this.resolution*(this.e+1)/2));return a};
function ju(a){var b=a.b,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineJoin,g=b.lineWidth,h=b.miterLimit;b.hc==c&&b.cc==d&&ib(b.dc,e)&&b.ec==f&&b.fc==g&&b.gc==h||(b.Bd!=a.coordinates.length&&(a.c.push([12]),b.Bd=a.coordinates.length),a.c.push([10,c,g,d,f,h,e],[1]),b.hc=c,b.cc=d,b.dc=e,b.ec=f,b.fc=g,b.gc=h)}
k.sb=function(a,b){var c=this.b,d=c.lineWidth;l(c.strokeStyle)&&l(d)&&(be(this.d,a.s()),ju(this),cu(this,a,b),this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash],[1]),c=a.j,iu(this,c,0,c.length,a.a),this.a.push([12]),fu(this,a,b))};
k.kc=function(a,b){var c=this.b,d=c.lineWidth;if(l(c.strokeStyle)&&l(d)){be(this.d,a.s());ju(this);cu(this,a,b);this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash],[1]);var c=a.d,d=a.j,e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=iu(this,d,f,c[g],e);this.a.push([12]);fu(this,a,b)}};k.dd=function(){this.b.Bd!=this.coordinates.length&&this.c.push([12]);eu(this);this.b=null};
k.Aa=function(a,b){var c=b.a;this.b.strokeStyle=Jg(null===c?Gi:c);c=b.b;this.b.lineCap=l(c)?c:"round";c=b.d;this.b.lineDash=null===c?Fi:c;c=b.e;this.b.lineJoin=l(c)?c:"round";c=b.c;this.b.lineWidth=l(c)?c:1;c=b.f;this.b.miterLimit=l(c)?c:10;this.e=Math.max(this.e,this.b.lineWidth)};
function ku(a,b,c){au.call(this,a,b,c);this.b={Ud:void 0,hc:void 0,cc:void 0,dc:null,ec:void 0,fc:void 0,gc:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}t(ku,au);
function lu(a,b,c,d,e){var f=a.b,g=[1];a.c.push(g);a.a.push(g);var h,g=0;for(h=d.length;g<h;++g){var m=d[g],n=a.coordinates.length;c=bu(a,b,c,m,e,!0);c=[8,n,c];n=[3];a.c.push(c,n);a.a.push(c,n);c=m}b=[7];a.a.push(b);l(f.fillStyle)&&a.c.push(b);l(f.strokeStyle)&&(f=[12],a.c.push(f),a.a.push(f));return c}k=ku.prototype;
k.jc=function(a,b){var c=this.b,d=c.strokeStyle;if(l(c.fillStyle)||l(d)){be(this.d,a.s());mu(this);cu(this,a,b);this.a.push([9,Jg(Ei)]);l(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]);var e=a.j,d=this.coordinates.length;bu(this,e,0,e.length,a.a,!1);e=[1];d=[2,d];this.c.push(e,d);this.a.push(e,d);d=[7];this.a.push(d);l(c.fillStyle)&&this.c.push(d);l(c.strokeStyle)&&(c=[12],this.c.push(c),this.a.push(c));fu(this,a,b)}};
k.Ob=function(a,b){var c=this.b,d=c.strokeStyle;if(l(c.fillStyle)||l(d))be(this.d,a.s()),mu(this),cu(this,a,b),this.a.push([9,Jg(Ei)]),l(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]),c=a.d,d=Mj(a),lu(this,d,0,c,a.a),fu(this,a,b)};
k.mc=function(a,b){var c=this.b,d=c.strokeStyle;if(l(c.fillStyle)||l(d)){be(this.d,a.s());mu(this);cu(this,a,b);this.a.push([9,Jg(Ei)]);l(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]);var c=a.d,d=Rj(a),e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=lu(this,d,f,c[g],e);fu(this,a,b)}};k.dd=function(){eu(this);this.b=null;var a=this.ma;if(0!==a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
k.wd=function(){var a=this.ba;this.e&&(a=Vd(a,this.resolution*(this.e+1)/2));return a};
k.Aa=function(a,b){var c=this.b;if(null===a)c.fillStyle=void 0;else{var d=a.a;c.fillStyle=Jg(null===d?Ei:d)}null===b?(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineJoin=void 0,c.lineWidth=void 0,c.miterLimit=void 0):(d=b.a,c.strokeStyle=Jg(null===d?Gi:d),d=b.b,c.lineCap=l(d)?d:"round",d=b.d,c.lineDash=null===d?Fi:d.slice(),d=b.e,c.lineJoin=l(d)?d:"round",d=b.c,c.lineWidth=l(d)?d:1,d=b.f,c.miterLimit=l(d)?d:10,this.e=Math.max(this.e,c.lineWidth))};
function mu(a){var b=a.b,c=b.fillStyle,d=b.strokeStyle,e=b.lineCap,f=b.lineDash,g=b.lineJoin,h=b.lineWidth,m=b.miterLimit;l(c)&&b.Ud!=c&&(a.c.push([9,c]),b.Ud=b.fillStyle);!l(d)||b.hc==d&&b.cc==e&&b.dc==f&&b.ec==g&&b.fc==h&&b.gc==m||(a.c.push([10,d,h,e,g,m,f]),b.hc=d,b.cc=e,b.dc=f,b.ec=g,b.fc=h,b.gc=m)}function nu(a,b,c){au.call(this,a,b,c);this.u=this.r=this.q=null;this.i="";this.o=this.p=this.k=this.l=0;this.g=this.f=this.b=null}t(nu,au);
nu.prototype.eb=function(a,b,c,d,e,f){if(""!==this.i&&null!==this.g&&(null!==this.b||null!==this.f)){ce(this.d,a,b,c,d);if(null!==this.b){var g=this.b,h=this.q;if(null===h||h.fillStyle!=g.fillStyle){var m=[9,g.fillStyle];this.c.push(m);this.a.push(m);null===h?this.q={fillStyle:g.fillStyle}:h.fillStyle=g.fillStyle}}null!==this.f&&(g=this.f,h=this.r,null===h||h.lineCap!=g.lineCap||h.lineDash!=g.lineDash||h.lineJoin!=g.lineJoin||h.lineWidth!=g.lineWidth||h.miterLimit!=g.miterLimit||h.strokeStyle!=g.strokeStyle)&&
(m=[10,g.strokeStyle,g.lineWidth,g.lineCap,g.lineJoin,g.miterLimit,g.lineDash,!1],this.c.push(m),this.a.push(m),null===h?this.r={lineCap:g.lineCap,lineDash:g.lineDash,lineJoin:g.lineJoin,lineWidth:g.lineWidth,miterLimit:g.miterLimit,strokeStyle:g.strokeStyle}:(h.lineCap=g.lineCap,h.lineDash=g.lineDash,h.lineJoin=g.lineJoin,h.lineWidth=g.lineWidth,h.miterLimit=g.miterLimit,h.strokeStyle=g.strokeStyle));g=this.g;h=this.u;if(null===h||h.font!=g.font||h.textAlign!=g.textAlign||h.textBaseline!=g.textBaseline)m=
[11,g.font,g.textAlign,g.textBaseline],this.c.push(m),this.a.push(m),null===h?this.u={font:g.font,textAlign:g.textAlign,textBaseline:g.textBaseline}:(h.font=g.font,h.textAlign=g.textAlign,h.textBaseline=g.textBaseline);cu(this,e,f);g=this.coordinates.length;a=bu(this,a,b,c,d,!1);a=[5,g,a,this.i,this.l,this.k,this.p,this.o,null!==this.b,null!==this.f];this.c.push(a);this.a.push(a);fu(this,e,f)}};
nu.prototype.Ca=function(a){if(null===a)this.i="";else{var b=a.a;null===b?this.b=null:(b=b.a,b=Jg(null===b?Ei:b),null===this.b?this.b={fillStyle:b}:this.b.fillStyle=b);var c=a.f;if(null===c)this.f=null;else{var b=c.a,d=c.b,e=c.d,f=c.e,g=c.c,c=c.f,d=l(d)?d:"round",e=null!=e?e.slice():Fi,f=l(f)?f:"round",g=l(g)?g:1,c=l(c)?c:10,b=Jg(null===b?Gi:b);if(null===this.f)this.f={lineCap:d,lineDash:e,lineJoin:f,lineWidth:g,miterLimit:c,strokeStyle:b};else{var h=this.f;h.lineCap=d;h.lineDash=e;h.lineJoin=f;h.lineWidth=
g;h.miterLimit=c;h.strokeStyle=b}}var m=a.d,b=a.l,d=a.k,e=a.e,g=a.c,c=a.b,f=a.g,h=a.i;a=l(m)?m:"10px sans-serif";f=l(f)?f:"center";h=l(h)?h:"middle";null===this.g?this.g={font:a,textAlign:f,textBaseline:h}:(m=this.g,m.font=a,m.textAlign=f,m.textBaseline=h);this.i=l(c)?c:"";this.l=l(b)?b:0;this.k=l(d)?d:0;this.p=l(e)?e:0;this.o=l(g)?g:1}};function ou(a,b,c){this.f=a;this.c=b;this.e=c;this.a={};this.b=lg(1,1);this.d=Id()}
function pu(a,b,c,d,e,f,g){var h=Va(xc(a.a),Number);gb(h);a:{var m=a.c,n=m[0],p=m[1],r=m[2],m=m[3],n=Qi([n,p,n,m,r,m,r,p],0,8,2,e);b.save();b.beginPath();b.moveTo(n[0],n[1]);b.lineTo(n[2],n[3]);b.lineTo(n[4],n[5]);b.lineTo(n[6],n[7]);b.closePath();b.clip();for(var q,u,n=0,p=h.length;n<p;++n)for(q=a.a[h[n].toString()],r=0,m=Uj.length;r<m;++r)if(u=q[Uj[r]],l(u)&&pe(c,u.s())&&(u=du(u,b,d,e,f,g,u.c,void 0)))break a;b.restore()}}
function qu(a,b,c,d,e,f,g,h){var m,n,p,r,q;m=0;for(n=b.length;m<n;++m)for(r in p=a.a[b[m].toString()],p)if(q=p[r],pe(d,q.s())&&(q=du(q,c,1,e,f,g,q.a,h)))return q}function wt(a,b,c,d,e,f,g){var h=a.d;pt(h,.5,.5,1/c,-1/c,-d,-e[0],-e[1]);c=Va(xc(a.a),Number);gb(c,function(a,b){return b-a});var m=a.b;m.clearRect(0,0,1,1);return qu(a,c,m,b,h,d,f,function(a,b){if(0<m.getImageData(0,0,1,1).data[3]){var c=g(a,b);if(c)return c;m.clearRect(0,0,1,1)}})}
function ru(a){for(var b in a.a){var c=a.a[b],d;for(d in c)c[d].dd()}}function ak(a,b,c){var d=l(b)?b.toString():"0";b=a.a[d];l(b)||(b={},a.a[d]=b);d=b[c];l(d)||(d=new su[c](a.f,a.c,a.e),b[c]=d);return d}ou.prototype.ka=function(){return Bc(this.a)};var su={Image:gu,LineString:hu,Polygon:ku,Text:nu};function tu(a,b){ft.call(this,a,b);this.F=Id()}t(tu,ft);
tu.prototype.r=function(a,b,c){uu(this,"precompose",c,a,void 0);var d=this.u();if(null!==d){var e=this.q(),f=c.globalAlpha;c.globalAlpha=b.opacity;if(0===a.viewState.rotation){b=e[13];var g=d.width*e[0],h=d.height*e[5];c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[12]),Math.round(b),Math.round(g),Math.round(h))}else c.setTransform(e[0],e[1],e[4],e[5],e[12],e[13]),c.drawImage(d,0,0),c.setTransform(1,0,0,1,0,0);c.globalAlpha=f}uu(this,"postcompose",c,a,void 0)};
function uu(a,b,c,d,e){var f=a.a;jd(f,b)&&(a=l(e)?e:vu(a,d),a=new St(c,d.pixelRatio,d.extent,a,d.viewState.rotation),f.dispatchEvent(new Pi(b,f,a,null,d,c,null)),$t(a))}function vu(a,b){var c=b.viewState,d=b.pixelRatio;return pt(a.F,d*b.size[0]/2,d*b.size[1]/2,d/c.resolution,-d/c.resolution,-c.rotation,-c.center[0],-c.center[1])}
var wu=function(){var a=null,b=null;return function(c){if(null===a){a=lg(1,1);b=a.createImageData(1,1);var d=b.data;d[0]=42;d[1]=84;d[2]=126;d[3]=255}var d=a.canvas,e=c[0]<=d.width&&c[1]<=d.height;e||(d.width=c[0],d.height=c[1],d=c[0]-1,c=c[1]-1,a.putImageData(b,d,c),c=a.getImageData(d,c,1,1),e=ib(b.data,c.data));return e}}();function xu(a){Ss.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.k=l(a.resolutions)?a.resolutions:null}t(xu,Ss);function yu(a,b){if(null!==a.k){var c=Qb(a.k,b,0);b=a.k[c]}return b};function zu(a,b){tu.call(this,a,b);this.c=null;this.e=Id()}t(zu,tu);zu.prototype.f=function(a,b,c,d){var e=this.a;return e.a.ed(b.extent,b.viewState.resolution,b.viewState.rotation,a,b.skippedFeatureUids,function(a){return c.call(d,a,e)})};zu.prototype.u=function(){return null===this.c?null:this.c.d()};zu.prototype.q=function(){return this.e};
zu.prototype.b=function(a,b){var c=a.pixelRatio,d=a.viewState,e=d.center,f=d.resolution,g=d.rotation,h=this.a.a,m=a.viewHints,n=a.extent;l(b.extent)&&(n=oe(n,b.extent));m[0]||m[1]||ee(n)||(d=h.Vb(n,f,c,d.projection),null!==d&&(m=d.state,0==m?(Wc(d,"change",this.p,!1,this),dr(d)):2==m&&(this.c=d)));if(null!==this.c){var d=this.c,m=d.s(),n=d.b,p=d.f,f=c*n/(f*p);pt(this.e,c*a.size[0]/2,c*a.size[1]/2,f,f,g,p*(m[0]-e[0])/n,p*(e[1]-m[3])/n);it(a.attributions,d.g);jt(a,h)}return!0};function Au(a,b){tu.call(this,a,b);this.c=this.g=null;this.l=!1;this.k=null;this.D=Id();this.o=NaN;this.i=this.e=null}t(Au,tu);Au.prototype.u=function(){return this.g};Au.prototype.q=function(){return this.D};
Au.prototype.b=function(a,b){var c=a.pixelRatio,d=a.viewState,e=d.projection,f=this.a,g=f.a,h=et(g,e),m=g.Mc(),n=Qb(h.a,d.resolution,0),p=g.pc(n,a.pixelRatio,e),r=h.fa(n),q=r/(p/h.ia(n)),u=d.center,x;r==d.resolution?(u=mt(u,r,a.size),x=ne(u,r,d.rotation,a.size)):x=a.extent;l(b.extent)&&(x=oe(x,b.extent));if(ee(x))return!1;var B=Zs(h,x,r),E=p*(B.d-B.a+1),F=p*(B.c-B.b+1),w,U;null===this.g?(U=lg(E,F),this.g=U.canvas,this.c=[E,F],this.k=U,this.l=!wu(this.c)):(w=this.g,U=this.k,this.c[0]<E||this.c[1]<
F||this.l&&(this.c[0]>E||this.c[1]>F)?(w.width=E,w.height=F,this.c=[E,F],this.l=!wu(this.c),this.e=null):(E=this.c[0],F=this.c[1],n==this.o&&of(this.e,B)||(this.e=null,n<this.o&&this.k.clearRect(0,0,E,F))));var Q,ea;null===this.e?(E/=p,F/=p,Q=B.a-Math.floor((E-(B.d-B.a+1))/2),ea=B.b-Math.floor((F-(B.c-B.b+1))/2),this.o=n,this.e=new lf(Q,Q+E-1,ea,ea+F-1),this.i=Array(E*F),F=this.e):(F=this.e,E=F.d-F.a+1);w={};w[n]={};var Y=[],za=sa(g.vd,g,w,lt(function(a){return null!==a&&2==a.state},g,c,e)),kb=f.ea();
l(kb)||(kb=!0);var Aa=Sd(),Ab=new lf(0,0,0,0),tb,Ba,Ia;for(ea=B.a;ea<=B.d;++ea)for(Ia=B.b;Ia<=B.c;++Ia)Ba=g.Rb(n,ea,Ia,c,e),Q=Ba.state,2==Q||4==Q||3==Q&&!kb?w[n][kf(Ba.a)]=Ba:(tb=h.Lc(Ba.a,za,null,Ab,Aa),tb||(Y.push(Ba),tb=h.Sc(Ba.a,Ab,Aa),null===tb||za(n+1,tb)));za=0;for(tb=Y.length;za<tb;++za)Ba=Y[za],ea=p*(Ba.a[1]-F.a),Ia=p*(F.c-Ba.a[2]),U.clearRect(ea,Ia,p,p);Y=Va(xc(w),Number);gb(Y);var yd=g.u,kd=le(Xs(h,[n,F.a,F.c],Aa)),wc,se,Ti,gh,uf,Yl,za=0;for(tb=Y.length;za<tb;++za)if(wc=Y[za],p=g.pc(wc,
c,e),gh=w[wc],wc==n)for(Ti in gh)Ba=gh[Ti],se=(Ba.a[2]-F.b)*E+(Ba.a[1]-F.a),this.i[se]!=Ba&&(ea=p*(Ba.a[1]-F.a),Ia=p*(F.c-Ba.a[2]),Q=Ba.state,4!=Q&&(3!=Q||kb)&&yd||U.clearRect(ea,Ia,p,p),2==Q&&U.drawImage(Ba.b(),m,m,p,p,ea,Ia,p,p),this.i[se]=Ba);else for(Ti in wc=h.fa(wc)/r,gh)for(Ba=gh[Ti],se=Xs(h,Ba.a,Aa),ea=(se[0]-kd[0])/q,Ia=(kd[1]-se[3])/q,Yl=wc*p,uf=wc*p,Q=Ba.state,4!=Q&&yd||U.clearRect(ea,Ia,Yl,uf),2==Q&&U.drawImage(Ba.b(),m,m,p,p,ea,Ia,Yl,uf),Ba=Ys(h,se,n,Ab),Q=Math.max(Ba.a,F.a),Ia=Math.min(Ba.d,
F.d),ea=Math.max(Ba.b,F.b),Ba=Math.min(Ba.c,F.c);Q<=Ia;++Q)for(uf=ea;uf<=Ba;++uf)se=(uf-F.b)*E+(Q-F.a),this.i[se]=void 0;kt(a.usedTiles,g,n,B);nt(a,g,h,c,e,x,n,f.aa());ht(a,g);jt(a,g);pt(this.D,c*a.size[0]/2,c*a.size[1]/2,c*q/d.resolution,c*q/d.resolution,d.rotation,(kd[0]-u[0])/q,(u[1]-kd[1])/q);return!0};function Bu(a,b,c,d){this.extent=a;this.height=b;this.a=c;this.value=d}function Cu(a,b){return a.extent[0]-b.extent[0]}function Du(a,b){return a.extent[1]-b.extent[1]}function Eu(a,b,c,d){a=a.a;for(d=Zd(d);b<c;++b)be(d,a[b].extent);return d}Bu.prototype.remove=function(a,b,c){var d=this.a,e=d.length,f,g;if(1==this.height)for(g=0;g<e;++g){if(f=d[g],f.value===b)return Ra.splice.call(d,g,1),!0}else for(g=0;g<e;++g)if(f=d[g],Yd(f.extent,a)){c.push(f);if(f.remove(a,b,c))return!0;c.pop()}return!1};
function Fu(a){var b=Zd(a.extent);a=a.a;var c,d;c=0;for(d=a.length;c<d;++c)be(b,a[c].extent)}function Gu(a){this.b=Math.max(4,l(a)?a:9);this.d=Math.max(2,Math.ceil(.4*this.b));this.a=new Bu(Sd(),1,[],null);this.c={}}function Hu(a,b,c){var d=b.a;a=a.d;var e=d.length;gb(d,c);c=Eu(b,0,a);var f=Eu(b,e-a,e),g=fe(c)+ge(c)+(fe(f)+ge(f));for(b=a;b<e-a;++b)be(c,d[b].extent),g+=fe(c)+ge(c);for(b=e-a-1;b>=a;--b)be(f,d[b].extent),g+=fe(f)+ge(f);return g}k=Gu.prototype;
k.clear=function(){var a=this.a;a.extent=Zd(this.a.extent);a.height=1;a.a.length=0;a.value=null;Cc(this.c)};k.forEach=function(a,b){return Iu(this.a,a,b)};function Iu(a,b,c){for(var d=[a],e,f,g;0<d.length;)if(a=d.pop(),e=a.a,1==a.height)for(a=0,f=e.length;a<f;++a){if(g=b.call(c,e[a].value))return g}else d.push.apply(d,e)}function Ju(a,b,c){return Ku(a,b,c,void 0)}
function Ku(a,b,c,d){a=[a.a];for(var e;0<a.length;)if(e=a.pop(),pe(b,e.extent))if(null===e.a){if(e=c.call(d,e.value))return e}else if(Yd(b,e.extent)){if(e=Iu(e,c,d))return e}else a.push.apply(a,e.a)}function Lu(a){var b=[];a.forEach(function(a){b.push(a)});return b}function Mu(a,b){var c=[];Ju(a,b,function(a){c.push(a)});return c}k.s=function(a){return qe(this.a.extent,a)};function Nu(a,b,c){var d=na(c).toString();Ou(a,b,c,a.a.height-1);a.c[d]=Wd(b)}
function Ou(a,b,c,d){for(var e=[a.a],f=a.a;null!==f.a&&e.length-1!=d;){var g=Infinity,h=Infinity,f=f.a,m=null,n,p;n=0;for(p=f.length;n<p;++n){var r=f[n],q=de(r.extent),u=r.extent,x=b,B=Math.min(u[0],x[0]),E=Math.min(u[1],x[1]),F=Math.max(u[2],x[2]),u=Math.max(u[3],x[3]),B=(F-B)*(u-E)-q;B<h?(h=B,g=Math.min(q,g),m=r):B==h&&q<g&&(g=q,m=r)}f=m;e.push(f)}d=f;d.a.push(new Bu(b,0,null,c));be(d.extent,b);for(c=e.length-1;0<=c;--c)if(e[c].a.length>a.b){g=a;h=e;f=c;d=h[f];p=g;m=d;n=Hu(p,m,Cu);p=Hu(p,m,Du);
n<p&&gb(m.a,Cu);m=d;n=g.d;p=m.a.length;q=r=Infinity;B=Sd();E=Sd();F=0;u=void 0;for(u=n;u<=p-n;++u){var B=Eu(m,0,u,B),E=Eu(m,u,p,E),x=oe(B,E),x=de(x),w=de(B)+de(E);x<r?(r=x,q=Math.min(w,q),F=u):x==r&&w<q&&(q=w,F=u)}m=d.a.splice(F);m=new Bu(Sd(),d.height,m,null);Fu(d);Fu(m);f?h[f-1].a.push(m):(h=m,f=d.height+1,m=be(d.extent.slice(),h.extent),g.a=new Bu(m,f,[d,h],null))}else break;for(;0<=c;--c)be(e[c].extent,b)}k.ka=function(){return 0===this.a.a.length};
k.remove=function(a){var b=na(a).toString(),c=this.c[b];delete this.c[b];return Pu(this,c,a)};function Pu(a,b,c){var d=a.a,e=[d];if(b=d.remove(b,c,e))for(c=e.length-1;0<=c;--c)d=e[c],0===d.a.length?0<c?ab(e[c-1].a,d):a.clear():Fu(d);return b}k.update=function(a,b){var c=na(b).toString(),d=this.c[c];ae(d,a)||(Pu(this,d,b),Ou(this,a,b,this.a.height-1),this.c[c]=Wd(a,d))};function Qu(a){a=l(a)?a:{};Ss.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,state:l(a.state)?a.state:void 0});this.b=new Gu;this.d={};this.e={};this.g={};this.o={};l(a.features)&&this.Pa(a.features)}t(Qu,Ss);k=Qu.prototype;k.za=function(a){Ru(this,a);this.n()};
function Ru(a,b){var c=na(b).toString();a.o[c]=[y(b,"change",a.te,!1,a),y(b,"propertychange",a.te,!1,a)];var d=b.J();null!=d?(d=d.s(),Nu(a.b,d,b)):a.d[c]=b;d=b.T;l(d)?a.e[d.toString()]=b:a.g[c]=b;a.dispatchEvent(new Su("addfeature",b))}k.oa=function(a){this.Pa(a);this.n()};k.Pa=function(a){var b,c;b=0;for(c=a.length;b<c;++b)Ru(this,a[b])};k.clear=function(){this.b.forEach(this.Md,this);this.b.clear();sc(this.d,this.Md,this);Cc(this.d);this.n()};k.Ha=function(a,b){return this.b.forEach(a,b)};
function Tu(a,b,c){a.pa([b[0],b[1],b[0],b[1]],function(a){if(a.J().zb(b[0],b[1]))return c.call(void 0,a)})}k.pa=function(a,b,c){return Ku(this.b,a,b,c)};k.Kc=function(a,b,c,d){return this.pa(a,c,d)};k.qa=function(){var a=Lu(this.b);Bc(this.d)||db(a,vc(this.d));return a};k.va=function(a){var b=[];Tu(this,a,function(a){b.push(a)});return b};
k.Ia=function(a){var b=a[0],c=a[1],d=null,e=[NaN,NaN],f=Infinity,g=[-Infinity,-Infinity,Infinity,Infinity];Ju(this.b,g,function(a){var m=a.J(),n=f;f=m.Fa(b,c,e,f);f<n&&(d=a,a=Math.sqrt(f),g[0]=b-a,g[1]=c-a,g[2]=b+a,g[3]=c+a)});return d};k.s=function(){return this.b.s()};k.ua=function(a){a=this.e[a.toString()];return l(a)?a:null};
k.te=function(a){a=a.target;var b=na(a).toString(),c=a.J();null!=c?(c=c.s(),b in this.d?(delete this.d[b],Nu(this.b,c,a)):this.b.update(c,a)):b in this.d||(this.b.remove(a),this.d[b]=a);c=a.T;l(c)?(c=c.toString(),b in this.g?(delete this.g[b],this.e[c]=a):this.e[c]!==a&&(Uu(this,a),this.e[c]=a)):b in this.g||(Uu(this,a),this.g[b]=a);this.n()};k.ka=function(){return this.b.ka()&&Bc(this.d)};k.bd=ca;k.Ma=function(a){var b=na(a).toString();b in this.d?delete this.d[b]:this.b.remove(a);this.Md(a);this.n()};
k.Md=function(a){var b=na(a).toString();Ta(this.o[b],Yc);delete this.o[b];var c=a.T;l(c)?delete this.e[c.toString()]:delete this.g[b];this.dispatchEvent(new Su("removefeature",a))};function Uu(a,b){for(var c in a.e)if(a.e[c]===b){delete a.e[c];break}}function Su(a,b){fc.call(this,a);this.feature=b}t(Su,fc);function Vu(a,b){tu.call(this,a,b);this.e=!1;this.i=-1;this.o=NaN;this.l=Sd();this.c=this.k=null;this.g=lg()}t(Vu,tu);
Vu.prototype.r=function(a,b,c){var d=vu(this,a);uu(this,"precompose",c,a,d);var e=this.c;if(null!==e&&!e.ka()){var f;jd(this.a,"render")?(this.g.canvas.width=c.canvas.width,this.g.canvas.height=c.canvas.height,f=this.g):f=c;var g=f.globalAlpha;f.globalAlpha=b.opacity;pu(e,f,a.extent,a.pixelRatio,d,a.viewState.rotation,a.skippedFeatureUids);f!=c&&(uu(this,"render",f,a,d),c.drawImage(f.canvas,0,0));f.globalAlpha=g}uu(this,"postcompose",c,a,d)};
Vu.prototype.f=function(a,b,c,d){if(null!==this.c){var e=this.a,f={};return wt(this.c,b.extent,b.viewState.resolution,b.viewState.rotation,a,b.skippedFeatureUids,function(a,b){var m=na(b).toString();if(!(m in f))return f[m]=!0,c.call(d,b,e)})}};Vu.prototype.D=function(){gt(this)};
Vu.prototype.b=function(a){function b(a){var b;l(a.d)?b=a.d.call(a,h):l(c.ea)&&(b=(0,c.ea)(a,h));if(null!=b){if(null!=b){var d,e,f=!1;d=0;for(e=b.length;d<e;++d)f=Xj(q,a,b[d],Wj(h,m),a,this.D,this)||f;a=f}else a=!1;this.e=this.e||a}}var c=this.a,d=c.a;it(a.attributions,d.f);jt(a,d);if(!this.e&&(a.viewHints[0]||a.viewHints[1]))return!0;var e=a.extent,f=a.viewState,g=f.projection,h=f.resolution,m=a.pixelRatio;a=c.c;f=c.get("renderOrder");l(f)||(f=Vj);if(!this.e&&this.o==h&&this.i==a&&this.k==f&&Yd(this.l,
e))return!0;var n=this.l,p=fe(e)/4,r=ge(e)/4;n[0]=e[0]-p;n[1]=e[1]-r;n[2]=e[2]+p;n[3]=e[3]+r;ec(this.c);this.c=null;this.e=!1;var q=new ou(.5*h/m,n,h);d.bd(n,h,g);if(null===f)d.Kc(n,h,b,this);else{var u=[];d.Kc(n,h,function(a){u.push(a)},this);gb(u,f);Ta(u,b,this)}ru(q);this.o=h;this.i=a;this.k=f;this.c=q;return!0};function Wu(a,b){st.call(this,0,b);this.g=lg();this.a=this.g.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Jf(a,this.a,0);this.c=!0;this.i=Id()}t(Wu,st);Wu.prototype.Gc=function(a){return a instanceof S?new zu(this,a):a instanceof T?new Au(this,a):a instanceof V?new Vu(this,a):null};
function Xu(a,b,c){var d=a.f,e=a.g;if(jd(d,b)){var f=c.extent,g=c.pixelRatio,h=c.viewState,m=h.resolution,n=h.rotation;pt(a.i,a.a.width/2,a.a.height/2,g/h.resolution,-g/h.resolution,-h.rotation,-h.center[0],-h.center[1]);h=new St(e,g,f,a.i,n);m=new ou(.5*m/g,f,m);d.dispatchEvent(new Pi(b,d,h,m,c,e,null));ru(m);m.ka()||pu(m,e,f,g,a.i,n,{});$t(h);a.k=m}}Wu.prototype.G=function(){return"canvas"};
Wu.prototype.hd=function(a){if(null===a)this.c&&(dg(this.a,!1),this.c=!1);else{var b=this.g,c=a.size[0]*a.pixelRatio,d=a.size[1]*a.pixelRatio;this.a.width!=c||this.a.height!=d?(this.a.width=c,this.a.height=d):b.clearRect(0,0,this.a.width,this.a.height);tt(a);Xu(this,"precompose",a);var c=a.layerStatesArray,d=a.viewState.resolution,e,f,g,h;e=0;for(f=c.length;e<f;++e)h=c[e],g=h.layer,g=xt(this,g),h.visible&&d>=h.minResolution&&d<h.maxResolution&&"ready"==h.Lb&&g.b(a,h)&&g.r(a,h,b);Xu(this,"postcompose",
a);this.c||(dg(this.a,!0),this.c=!0);yt(this,a);a.postRenderFunctions.push(ut)}};function Yu(a,b,c){ft.call(this,a,b);this.target=c}t(Yu,ft);function Zu(a,b){var c=Ff("DIV");c.style.position="absolute";Yu.call(this,a,b,c);this.c=null;this.e=Kd()}t(Zu,Yu);Zu.prototype.f=function(a,b,c,d){var e=this.a;return e.a.ed(b.extent,b.viewState.resolution,b.viewState.rotation,a,b.skippedFeatureUids,function(a){return c.call(d,a,e)})};
Zu.prototype.b=function(a,b){var c=a.viewState,d=c.center,e=c.resolution,f=c.rotation,g=this.c,h=this.a.a,m=a.viewHints,n=a.extent;l(b.extent)&&(n=oe(n,b.extent));m[0]||m[1]||ee(n)||(c=h.Vb(n,e,a.pixelRatio,c.projection),null!==c&&(m=c.state,0==m?(Wc(c,"change",this.p,!1,this),dr(c)):2==m&&(g=c)));null!==g&&(m=g.s(),n=g.b,c=Id(),pt(c,a.size[0]/2,a.size[1]/2,n/e,n/e,f,(m[0]-d[0])/n,(d[1]-m[3])/n),g!=this.c&&(d=g.d(this),d.style.maxWidth="none",d.style.position="absolute",Hf(this.target),this.target.appendChild(d),
this.c=g),qt(c,this.e)||(pg(this.target,c),Ld(this.e,c)),it(a.attributions,g.g),jt(a,h));return!0};function $u(a,b){var c=Ff("DIV");c.style.position="absolute";Yu.call(this,a,b,c);this.e=!0;this.i=1;this.g=0;this.c={}}t($u,Yu);
$u.prototype.b=function(a,b){if(!b.visible)return this.e&&(dg(this.target,!1),this.e=!1),!0;var c=a.pixelRatio,d=a.viewState,e=d.projection,f=this.a,g=f.a,h=et(g,e),m=g.Mc(),n=Qb(h.a,d.resolution,0),p=h.fa(n),r=d.center,q;p==d.resolution?(r=mt(r,p,a.size),q=ne(r,p,d.rotation,a.size)):q=a.extent;l(b.extent)&&(q=oe(q,b.extent));var p=Zs(h,q,p),u={};u[n]={};var x=sa(g.vd,g,u,lt(function(a){return null!==a&&2==a.state},g,c,e)),B=f.ea();l(B)||(B=!0);var E=Sd(),F=new lf(0,0,0,0),w,U,Q,ea;for(Q=p.a;Q<=p.d;++Q)for(ea=
p.b;ea<=p.c;++ea)w=g.Rb(n,Q,ea,c,e),U=w.state,2==U?u[n][kf(w.a)]=w:4==U||3==U&&!B||(U=h.Lc(w.a,x,null,F,E),U||(w=h.Sc(w.a,F,E),null===w||x(n+1,w)));var Y;if(this.g!=g.c){for(Y in this.c)B=this.c[+Y],Kf(B.target);this.c={};this.g=g.c}E=Va(xc(u),Number);gb(E);var x={},za;Q=0;for(ea=E.length;Q<ea;++Q){Y=E[Q];Y in this.c?B=this.c[Y]:(B=$s(h,r[0],r[1],h.fa(Y),!1,void 0),B=new av(h,B),x[Y]=!0,this.c[Y]=B);Y=u[Y];for(za in Y)bv(B,Y[za],m);cv(B)}m=Va(xc(this.c),Number);gb(m);Q=Id();za=0;for(E=m.length;za<
E;++za)if(Y=m[za],B=this.c[Y],Y in u)if(w=B.g,ea=B.f,pt(Q,a.size[0]/2,a.size[1]/2,w/d.resolution,w/d.resolution,d.rotation,(ea[0]-r[0])/w,(r[1]-ea[1])/w),dv(B,Q),Y in x){for(Y-=1;0<=Y;--Y)if(Y in this.c){If(B.target,this.c[Y].target);break}0>Y&&Jf(this.target,B.target,0)}else a.viewHints[0]||a.viewHints[1]||ev(B,q,F);else Kf(B.target),delete this.c[Y];b.opacity!=this.i&&(cg(this.target,b.opacity),this.i=b.opacity);b.visible&&!this.e&&(dg(this.target,!0),this.e=!0);kt(a.usedTiles,g,n,p);nt(a,g,h,c,
e,q,n,f.aa());ht(a,g);jt(a,g);return!0};function av(a,b){this.target=Ff("DIV");this.target.style.position="absolute";this.target.style.width="100%";this.target.style.height="100%";this.d=a;this.b=b;this.f=le(Xs(a,b));this.g=a.fa(b[0]);this.c={};this.a=null;this.e=Kd()}
function bv(a,b,c){var d=b.a,e=d[0],f=d[1],g=d[2],d=kf(d);if(!(d in a.c)){var e=a.d.ia(e),h=b.b(a),m=h.style;m.maxWidth="none";var n,p;0<c?(n=Ff("DIV"),p=n.style,p.overflow="hidden",p.width=e+"px",p.height=e+"px",m.position="absolute",m.left=-c+"px",m.top=-c+"px",m.width=e+2*c+"px",m.height=e+2*c+"px",n.appendChild(h)):(m.width=e+"px",m.height=e+"px",n=h,p=m);p.position="absolute";p.left=(f-a.b[1])*e+"px";p.top=(a.b[2]-g)*e+"px";null===a.a&&(a.a=document.createDocumentFragment());a.a.appendChild(n);
a.c[d]=b}}function cv(a){null!==a.a&&(a.target.appendChild(a.a),a.a=null)}function ev(a,b,c){var d=Ys(a.d,b,a.b[0],c);b=[];for(var e in a.c)c=a.c[e],d.contains(c.a)||b.push(c);var f,d=0;for(f=b.length;d<f;++d)c=b[d],e=kf(c.a),Kf(c.b(a)),delete a.c[e]}function dv(a,b){qt(b,a.e)||(pg(a.target,b),Ld(a.e,b))};function fv(a,b){st.call(this,0,b);this.a=Ff("DIV");this.a.className="ol-unselectable";var c=this.a.style;c.position="absolute";c.width="100%";c.height="100%";Jf(a,this.a,0);this.c=!0}t(fv,st);fv.prototype.Gc=function(a){if(a instanceof S)a=new Zu(this,a);else if(a instanceof T)a=new $u(this,a);else return null;return a};fv.prototype.G=function(){return"dom"};
fv.prototype.hd=function(a){if(null===a)this.c&&(dg(this.a,!1),this.c=!1);else{var b;b=function(a,b){Jf(this.a,a,b)};var c=a.layerStatesArray,d,e,f,g;d=0;for(e=c.length;d<e;++d)g=c[d],f=g.layer,f=xt(this,f),b.call(this,f.target,d),"ready"==g.Lb&&f.b(a,g);b=a.layerStates;for(var h in this.b)h in b||(f=this.b[h],Kf(f.target));this.c||(dg(this.a,!0),this.c=!0);tt(a);yt(this,a);a.postRenderFunctions.push(ut)}};function gv(){}k=gv.prototype;k.Ic=function(){};k.jc=function(){};k.Wd=function(){};k.Xd=function(){};k.nc=function(){};k.sb=function(){};k.kc=function(){};k.lc=function(){};k.mc=function(){};k.Ob=function(){};k.eb=function(){};k.Aa=function(){};k.$b=function(){};k.Ca=function(){};function hv(a){this.a=a}function iv(a){this.a=a}t(iv,hv);iv.prototype.G=function(){return 35632};function jv(a){this.a=a}t(jv,hv);jv.prototype.G=function(){return 35633};function kv(){this.a="precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"}t(kv,iv);da(kv);function lv(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}t(lv,jv);da(lv);
function mv(a,b){this.g=a.getUniformLocation(b,"f");this.d=a.getUniformLocation(b,"g");this.e=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.b=a.getUniformLocation(b,"h");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function nv(){this.a="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}t(nv,iv);da(nv);function ov(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}t(ov,jv);da(ov);
function pv(a,b){this.d=a.getUniformLocation(b,"f");this.e=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.b=a.getUniformLocation(b,"g");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function qv(a){this.a=l(a)?a:[]}function rv(a,b,c){if(b!=c){var d=a.a,e=d.length,f;for(f=0;f<e;f+=2)if(b<=d[f]){d.splice(f,0,b,c);sv(a);return}d.push(b,c);sv(a)}}qv.prototype.clear=function(){this.a.length=0};function sv(a){a=a.a;var b=a.length,c=0,d;for(d=0;d<b;d+=2)a[d]!=a[d+1]&&(0<c&&a[c-2]<=a[d]&&a[d]<=a[c-1]?a[c-1]=Math.max(a[c-1],a[d+1]):(a[c++]=a[d],a[c++]=a[d+1]));a.length=c}function tv(a,b){var c=a.a,d=c.length,e;for(e=0;e<d;e+=2)b.call(void 0,c[e],c[e+1])}
qv.prototype.ka=function(){return 0===this.a.length};function uv(a,b,c){var d=a.a,e=d.length,f;for(f=0;f<e;f+=2)if(!(c<d[f]||d[f+1]<b)){if(d[f]>c)break;if(b<d[f])if(c==d[f])break;else if(c<d[f+1]){d[f]=Math.max(d[f],c);break}else d.splice(f,2),f-=2,e-=2;else if(b==d[f])if(c<d[f+1]){d[f]=c;break}else if(c==d[f+1]){d.splice(f,2);break}else d.splice(f,2),f-=2,e-=2;else if(c<d[f+1]){d.splice(f,2,d[f],b,c,d[f+1]);break}else if(c==d[f+1]){d[f+1]=b;break}else d[f+1]=b}sv(a)};function vv(a,b,c){this.c=l(a)?a:[];this.a=[];this.b=new qv;a=l(b)?b:this.c.length;a<this.c.length&&rv(this.b,a,this.c.length);this.d=l(c)?c:35044}vv.prototype.add=function(a){var b=a.length,c;a:{c=this.b.a;var d=c.length,e=-1,f,g,h;for(g=0;g<d;g+=2){h=c[g+1]-c[g];if(h==b){c=c[g];break a}h>b&&(-1==e||h<f)&&(e=c[g],f=h)}c=e}uv(this.b,c,c+b);for(d=0;d<b;++d)this.c[c+d]=a[d];wv(this,b,c);return c};
vv.prototype.fb=function(){var a=this.b.a,b=a.length,c=0,d;for(d=0;d<b;d+=2)c+=a[d+1]-a[d];return this.c.length-c};function wv(a,b,c){var d,e;d=0;for(e=a.a.length;d<e;++d)rv(a.a[d],c,c+b)}vv.prototype.remove=function(a,b){var c,d;rv(this.b,b,b+a);c=0;for(d=this.a.length;c<d;++c)uv(this.a[c],b,b+a)};vv.prototype.set=function(a,b){var c=this.c,d=a.length,e;for(e=0;e<d;++e)c[b+e]=a[e];wv(this,d,b)};function xv(a,b){ft.call(this,a,b);this.Q=new vv([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.e=this.Da=null;this.g=void 0;this.u=Id();this.D=Kd();this.ba=new Lg;this.k=this.l=null}t(xv,ft);
function yv(a,b,c){var d=a.d.d;if(l(a.g)&&a.g==c)d.bindFramebuffer(36160,a.e);else{b.postRenderFunctions.push(ta(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))},d,a.e,a.Da));b=d.createTexture();d.bindTexture(3553,b);d.texImage2D(3553,0,6408,c,c,0,6408,5121,null);d.texParameteri(3553,10240,9729);d.texParameteri(3553,10241,9729);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.Da=b;a.e=e;a.g=c}}
function zv(a,b,c,d){a=a.a;jd(a,b)&&a.dispatchEvent(new Pi(b,a,new gv,null,d,null,c))}xv.prototype.o=function(){this.e=this.Da=null;this.g=void 0};function Av(a,b){xv.call(this,a,b);this.c=null}t(Av,xv);function Bv(a,b){var c=b.d(),d=a.d.d,e=d.createTexture();d.bindTexture(3553,e);d.texImage2D(3553,0,6408,6408,5121,c);d.texParameteri(3553,10242,33071);d.texParameteri(3553,10243,33071);d.texParameteri(3553,10241,9729);d.texParameteri(3553,10240,9729);return e}Av.prototype.f=function(a,b,c,d){var e=this.a;return e.a.ed(b.extent,b.viewState.resolution,b.viewState.rotation,a,b.skippedFeatureUids,function(a){return c.call(d,a,e)})};
Av.prototype.b=function(a,b){var c=this.d.d,d=a.viewState,e=d.center,f=d.resolution,g=d.rotation,h=this.c,m=this.Da,n=this.a.a,p=a.viewHints,r=a.extent;l(b.extent)&&(r=oe(r,b.extent));p[0]||p[1]||ee(r)||(d=n.Vb(r,f,a.pixelRatio,d.projection),null!==d&&(p=d.state,0==p?(Wc(d,"change",this.p,!1,this),dr(d)):2==p&&(h=d,m=Bv(this,d),null===this.Da||a.postRenderFunctions.push(ta(function(a,b){a.isContextLost()||a.deleteTexture(b)},c,this.Da)))));null!==h&&(c=this.d.e.f,Cv(this,c.width,c.height,e,f,g,h.s()),
e=this.u,Md(e),Pd(e,1,-1),Od(e,0,-1),this.c=h,this.Da=m,it(a.attributions,h.g),jt(a,n));return!0};function Cv(a,b,c,d,e,f,g){b*=e;c*=e;a=a.D;Md(a);Pd(a,2/b,2/c);Qd(a,-f);Od(a,g[0]-d[0],g[1]-d[1]);Pd(a,(g[2]-g[0])/2,(g[3]-g[1])/2);Od(a,1,1)};function Dv(){this.a="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}t(Dv,iv);da(Dv);function Ev(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}t(Ev,jv);da(Ev);function Fv(a,b){this.b=a.getUniformLocation(b,"e");this.d=a.getUniformLocation(b,"d");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function Gv(a,b){xv.call(this,a,b);this.X=Dv.gb();this.ga=Ev.gb();this.c=null;this.F=new vv([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.r=this.i=null;this.q=-1}t(Gv,xv);Gv.prototype.I=function(){var a=this.d.e,b=a.c,c=na(this.F),d=a.a[c];ab(d.Sd.a,d.Hc);b.isContextLost()||b.deleteBuffer(d.buffer);delete a.a[c];Gv.K.I.call(this)};Gv.prototype.o=function(){Gv.K.o.call(this);this.c=null};
Gv.prototype.b=function(a,b){var c=this.d,d=c.e,e=c.d,f=a.viewState,g=f.projection,h=this.a,m=h.a,n=et(m,g),p=Qb(n.a,f.resolution,0),r=n.fa(p),q=m.pc(p,a.pixelRatio,g),u=q/n.ia(p),x=r/u,B=m.Mc(),E=f.center,F;r==f.resolution?(E=mt(E,r,a.size),F=ne(E,r,f.rotation,a.size)):F=a.extent;r=Zs(n,F,r);if(null!==this.i&&pf(this.i,r)&&this.q==m.c)x=this.r;else{var w=[r.d-r.a+1,r.c-r.b+1],w=Math.max(w[0]*q,w[1]*q),U=Math.pow(2,Math.ceil(Math.log(w)/Math.LN2)),w=x*U,Q=n.mb(p),ea=Q[0]+r.a*q*x,x=Q[1]+r.b*q*x,x=
[ea,x,ea+w,x+w];yv(this,a,U);e.viewport(0,0,U,U);e.clearColor(0,0,0,0);e.clear(16384);e.disable(3042);U=Hv(d,this.X,this.ga);d.Fd(U);null===this.c&&(this.c=new Fv(e,U));Iv(d,this.F);e.enableVertexAttribArray(this.c.a);e.vertexAttribPointer(this.c.a,2,5126,!1,16,0);e.enableVertexAttribArray(this.c.c);e.vertexAttribPointer(this.c.c,2,5126,!1,16,8);e.uniform1i(this.c.b,0);d={};d[p]={};var Y=sa(m.vd,m,d,lt(function(a){return null!==a&&2==a.state&&Jv(c.c,a.d())},m,u,g)),za=h.ea();l(za)||(za=!0);var U=
!0,ea=Sd(),kb=new lf(0,0,0,0),Aa,Ab,tb;for(Ab=r.a;Ab<=r.d;++Ab)for(tb=r.b;tb<=r.c;++tb){Q=m.Rb(p,Ab,tb,u,g);if(l(b.extent)&&(Aa=Xs(n,Q.a,ea),!pe(Aa,b.extent)))continue;Aa=Q.state;if(2==Aa){if(Jv(c.c,Q.d())){d[p][kf(Q.a)]=Q;continue}}else if(4==Aa||3==Aa&&!za)continue;U=!1;Aa=n.Lc(Q.a,Y,null,kb,ea);Aa||(Q=n.Sc(Q.a,kb,ea),null===Q||Y(p+1,Q))}Y=Va(xc(d),Number);gb(Y);var za=new Float32Array(4),Ba,Ia,yd,kd,kb=0;for(Ab=Y.length;kb<Ab;++kb)for(Ia in yd=d[Y[kb]],yd)Q=yd[Ia],Aa=Xs(n,Q.a,ea),tb=2*(Aa[2]-Aa[0])/
w,Ba=2*(Aa[3]-Aa[1])/w,kd=2*(Aa[0]-x[0])/w-1,Aa=2*(Aa[1]-x[1])/w-1,Hd(za,tb,Ba,kd,Aa),e.uniform4fv(this.c.d,za),Kv(c,Q,q,B*u),e.drawArrays(5,0,4);U?(this.i=r,this.r=x,this.q=m.c):(this.r=this.i=null,this.q=-1,a.animate=!0)}kt(a.usedTiles,m,p,r);var wc=c.i;nt(a,m,n,u,g,F,p,h.aa(),function(a){var b;(b=2!=a.state||Jv(c.c,a.d()))||(b=a.d()in wc.b);b||ot(wc,[a,at(n,a.a),n.fa(a.a[0]),q,B*u])},this);ht(a,m);jt(a,m);e=this.u;Md(e);Od(e,(E[0]-x[0])/(x[2]-x[0]),(E[1]-x[1])/(x[3]-x[1]));0!==f.rotation&&Qd(e,
f.rotation);Pd(e,a.size[0]*f.resolution/(x[2]-x[0]),a.size[1]*f.resolution/(x[3]-x[1]));Od(e,-.5,-.5);return!0};function Lv(){this.b=0;this.d={};this.c=this.a=null}k=Lv.prototype;k.clear=function(){this.b=0;this.d={};this.c=this.a=null};function Jv(a,b){return a.d.hasOwnProperty(b)}k.forEach=function(a,b){for(var c=this.a;null!==c;)a.call(b,c.Gb,c.$c,this),c=c.Ja};k.get=function(a){a=this.d[a];if(a===this.c)return a.Gb;a===this.a?(this.a=this.a.Ja,this.a.nb=null):(a.Ja.nb=a.nb,a.nb.Ja=a.Ja);a.Ja=null;a.nb=this.c;this.c=this.c.Ja=a;return a.Gb};k.fb=function(){return this.b};
k.N=function(){var a=Array(this.b),b=0,c;for(c=this.c;null!==c;c=c.nb)a[b++]=c.$c;return a};k.ub=function(){var a=Array(this.b),b=0,c;for(c=this.c;null!==c;c=c.nb)a[b++]=c.Gb;return a};k.pop=function(){var a=this.a;delete this.d[a.$c];null!==a.Ja&&(a.Ja.nb=null);this.a=a.Ja;null===this.a&&(this.c=null);--this.b;return a.Gb};k.set=function(a,b){var c={$c:a,Ja:null,nb:this.c,Gb:b};null===this.c?this.a=c:this.c.Ja=c;this.c=c;this.d[a]=c;++this.b};function Mv(a,b){this.f=a;this.c=b;this.a={};this.d={};this.b={};this.e=null;y(this.f,"webglcontextlost",this.Nh,!1,this);y(this.f,"webglcontextrestored",this.Oh,!1,this)}
function Iv(a,b){var c=a.c,d=b.c,e=na(b);if(e in a.a)e=a.a[e],c.bindBuffer(34962,e.buffer),tv(e.Hc,function(a,b){c.bufferSubData(34962,a,new Float32Array(d.slice(a,b)))}),e.Hc.clear();else{var f=c.createBuffer();c.bindBuffer(34962,f);c.bufferData(34962,new Float32Array(d),b.d);var g=new qv;b.a.push(g);a.a[e]={Sd:b,buffer:f,Hc:g}}}k=Mv.prototype;
k.I=function(){sc(this.a,function(a){ab(a.Sd.a,a.Hc)});var a=this.c;a.isContextLost()||(sc(this.a,function(b){a.deleteBuffer(b.buffer)}),sc(this.b,function(b){a.deleteProgram(b)}),sc(this.d,function(b){a.deleteShader(b)}))};k.Mh=function(){return this.c};function Nv(a,b){var c=na(b);if(c in a.d)return a.d[c];var d=a.c,e=d.createShader(b.G());d.shaderSource(e,b.a);d.compileShader(e);return a.d[c]=e}
function Hv(a,b,c){var d=na(b)+"/"+na(c);if(d in a.b)return a.b[d];var e=a.c,f=e.createProgram();e.attachShader(f,Nv(a,b));e.attachShader(f,Nv(a,c));e.linkProgram(f);return a.b[d]=f}k.Nh=function(){Cc(this.a);Cc(this.d);Cc(this.b);this.e=null};k.Oh=function(){};k.Fd=function(a){if(a==this.e)return!1;this.c.useProgram(a);this.e=a;return!0};function Ov(a,b){st.call(this,0,b);this.a=Ff("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Jf(a,this.a,0);this.o=0;this.q=lg();this.l=!0;this.d=rg(this.a,{antialias:!0,depth:!1,kf:!0,preserveDrawingBuffer:!1,stencil:!0});this.e=new Mv(this.a,this.d);y(this.a,"webglcontextlost",this.hh,!1,this);y(this.a,"webglcontextrestored",this.ih,!1,this);this.c=new Lv;this.p=null;this.i=new zt(sa(function(a){var b=a[1];a=a[2];var e=b[0]-this.p[0],b=b[1]-this.p[1];
return 65536*Math.log(a)+Math.sqrt(e*e+b*b)/a},this),function(a){return a[0].d()});this.r=sa(function(){if(!this.i.ka()){Dt(this.i);var a=At(this.i);Kv(this,a[0],a[3],a[4])}},this);this.g=0;Pv(this)}t(Ov,st);
function Kv(a,b,c,d){var e=a.d,f=b.d();if(Jv(a.c,f))a=a.c.get(f),e.bindTexture(3553,a.Da),9729!=a.ge&&(e.texParameteri(3553,10240,9729),a.ge=9729),9729!=a.he&&(e.texParameteri(3553,10240,9729),a.he=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.q.canvas,m=a.q;a.o!=c?(h.width=c,h.height=c,a.o=c):m.clearRect(0,0,c,c);m.drawImage(b.b(),d,d,c,c,0,0,c,c);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,0,6408,6408,5121,b.b());e.texParameteri(3553,10240,9729);e.texParameteri(3553,
10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);a.c.set(f,{Da:g,ge:9729,he:9729})}}k=Ov.prototype;k.Gc=function(a){return a instanceof S?new Av(this,a):a instanceof T?new Gv(this,a):null};function Qv(a,b,c){var d=a.f;jd(d,b)&&d.dispatchEvent(new Pi(b,d,new gv,null,c,null,a.e))}k.I=function(){var a=this.d;a.isContextLost()||this.c.forEach(function(b){null===b||a.deleteTexture(b.Da)});ec(this.e);Ov.K.I.call(this)};
k.jf=function(a,b){for(var c=this.d,d;1024<this.c.fb()-this.g;){d=this.c.a.Gb;if(null===d)if(+this.c.a.$c==b.index)break;else--this.g;else c.deleteTexture(d.Da);this.c.pop()}};k.G=function(){return"webgl"};k.hh=function(a){a.preventDefault();this.c.clear();this.g=0;sc(this.b,function(a){a.o()})};k.ih=function(){Pv(this);this.f.O()};function Pv(a){a=a.d;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
k.hd=function(a){var b=this.e,c=this.d;if(c.isContextLost())return!1;if(null===a)return this.l&&(dg(this.a,!1),this.l=!1),!1;this.p=a.focus;this.c.set((-a.index).toString(),null);++this.g;var d=[],e=a.layerStatesArray,f=a.viewState.resolution,g,h,m,n;g=0;for(h=e.length;g<h;++g)n=e[g],n.visible&&f>=n.minResolution&&f<n.maxResolution&&"ready"==n.Lb&&(m=xt(this,n.layer),m.b(a,n)&&d.push(n));g=a.size[0]*a.pixelRatio;h=a.size[1]*a.pixelRatio;if(this.a.width!=g||this.a.height!=h)this.a.width=g,this.a.height=
h;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.a.width,this.a.height);Qv(this,"precompose",a);g=0;for(h=d.length;g<h;++g){n=d[g];c=m=xt(this,n.layer);e=a;f=b;zv(c,"precompose",f,e);Iv(f,c.Q);m=f.c;var p=n.brightness||1!=n.contrast||n.hue||1!=n.saturation,r=void 0,q=void 0;p?(r=kv.gb(),q=lv.gb()):(r=nv.gb(),q=ov.gb());r=Hv(f,r,q);q=void 0;p?null===c.l?(q=new mv(m,r),c.l=q):q=c.l:null===c.k?(q=new pv(m,r),c.k=q):q=c.k;f.Fd(r)&&(m.enableVertexAttribArray(q.a),
m.vertexAttribPointer(q.a,2,5126,!1,16,0),m.enableVertexAttribArray(q.c),m.vertexAttribPointer(q.c,2,5126,!1,16,8),m.uniform1i(q.b,0));m.uniformMatrix4fv(q.f,!1,c.u);m.uniformMatrix4fv(q.e,!1,c.D);p&&m.uniformMatrix4fv(q.g,!1,Mg(c.ba,n.brightness,n.contrast,n.hue,n.saturation));m.uniform1f(q.d,n.opacity);m.bindTexture(3553,c.Da);m.drawArrays(5,0,4);zv(c,"postcompose",f,e)}this.l||(dg(this.a,!0),this.l=!0);tt(a);1024<this.c.fb()-this.g&&a.postRenderFunctions.push(sa(this.jf,this));this.i.ka()||(a.postRenderFunctions.push(this.r),
a.animate=!0);Qv(this,"postcompose",a);yt(this,a);a.postRenderFunctions.push(ut)};var Rv=["canvas","webgl","dom"];
function W(a){pd.call(this);var b=Sv(a);this.Te=l(a.pixelRatio)?a.pixelRatio:sg;this.sd=b.logos;this.o=new xs(this.oi,void 0,this);dc(this,this.o);this.Cc=Id();this.Ve=Id();this.rd=0;this.k=this.Q=this.ba=this.d=null;this.b=Cf("DIV","ol-viewport");this.b.style.position="relative";this.b.style.overflow="hidden";this.b.style.width="100%";this.b.style.height="100%";this.b.style.msTouchAction="none";yg&&(this.b.className="ol-touch");this.Oa=Cf("DIV","ol-overlaycontainer");this.b.appendChild(this.Oa);
this.r=Cf("DIV","ol-overlaycontainer-stopevent");y(this.r,["click","dblclick","mousedown","touchstart","MSPointerDown",ti,vb?"DOMMouseScroll":"mousewheel"],gc);this.b.appendChild(this.r);a=new li(this);y(a,vc(wi),this.oe,!1,this);dc(this,a);this.ma=b.keyboardEventTarget;this.q=new Hs;y(this.q,"key",this.be,!1,this);dc(this,this.q);a=new Ps(this.b);y(a,"mousewheel",this.be,!1,this);dc(this,a);this.i=b.controls;this.qd=b.deviceOptions;this.g=b.interactions;this.l=b.overlays;this.aa=new b.qi(this.b,
this);dc(this,this.aa);this.ac=new Cs;dc(this,this.ac);y(this.ac,"resize",this.F,!1,this);this.X=null;this.u=[];this.na=[];this.Kb=new Et(sa(this.Jf,this),sa(this.ng,this));this.ea={};y(this,td("layergroup"),this.Xf,!1,this);y(this,td("view"),this.og,!1,this);y(this,td("size"),this.lg,!1,this);y(this,td("target"),this.mg,!1,this);this.L(b.Di);this.i.forEach(function(a){a.setMap(this)},this);y(this.i,"add",function(a){a.element.setMap(this)},!1,this);y(this.i,"remove",function(a){a.element.setMap(null)},
!1,this);this.g.forEach(function(a){a.setMap(this)},this);y(this.g,"add",function(a){a.element.setMap(this)},!1,this);y(this.g,"remove",function(a){a.element.setMap(null)},!1,this);this.l.forEach(function(a){a.setMap(this)},this);y(this.l,"add",function(a){a.element.setMap(this)},!1,this);y(this.l,"remove",function(a){a.element.setMap(null)},!1,this)}t(W,pd);k=W.prototype;k.We=function(a){this.i.push(a)};k.Xe=function(a){this.g.push(a)};k.Ye=function(a){this.ib().Ab().push(a)};k.Ze=function(a){this.l.push(a)};
k.Ea=function(a){this.O();Array.prototype.push.apply(this.u,arguments)};k.I=function(){Kf(this.b);W.K.I.call(this)};k.Cd=function(a,b,c,d,e){if(null!==this.d)return a=this.ta(a),vt(this.aa,a,this.d,b,l(c)?c:null,l(d)?d:dd,l(e)?e:null)};k.qf=function(a){return this.ta(this.xd(a))};k.xd=function(a){if(l(a.changedTouches)){a=a.changedTouches[0];var b=Zf(this.b);return[a.clientX-b.x,a.clientY-b.y]}a=Yf(a,this.b);return[a.x,a.y]};k.rc=function(){return this.get("target")};W.prototype.getTarget=W.prototype.rc;
k=W.prototype;k.ta=function(a){var b=this.d;if(null===b)return null;a=a.slice();return rt(b.pixelToCoordinateMatrix,a,a)};k.pf=function(){return this.i};k.Df=function(){return this.l};k.uf=function(){return this.g};k.ib=function(){return this.get("layergroup")};W.prototype.getLayerGroup=W.prototype.ib;W.prototype.Ue=function(){var a=this.ib();if(l(a))return a.Ab()};W.prototype.f=function(a){var b=this.d;if(null===b)return null;a=a.slice(0,2);return rt(b.coordinateToPixelMatrix,a,a)};
W.prototype.e=function(){return this.get("size")};W.prototype.getSize=W.prototype.e;W.prototype.a=function(){return this.get("view")};W.prototype.getView=W.prototype.a;k=W.prototype;k.Lf=function(){return this.b};k.Jf=function(a,b,c,d){var e=this.d;if(!(null!==e&&b in e.wantedTiles&&e.wantedTiles[b][kf(a.a)]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};k.be=function(a,b){var c=new ji(b||a.type,this,a);this.oe(c)};
k.oe=function(a){if(null!==this.d){this.X=a.coordinate;a.frameState=this.d;var b=this.g.a,c;if(!1!==this.dispatchEvent(a))for(c=b.length-1;0<=c&&b[c].La(a);c--);}};
k.ig=function(){var a=this.d,b=this.Kb;if(!b.ka()){var c=16,d=c,e=0;if(null!==a){var e=a.viewHints,f=this.qd;e[0]&&(c=!1===f.loadTilesWhileAnimating?0:8,d=2);e[1]&&(c=!1===f.loadTilesWhileInteracting?0:8,d=2);e=uc(a.wantedTiles)}c*=e;d*=e;if(b.d<c){Dt(b);c=Math.min(c-b.d,d,b.fb());for(d=0;d<c;++d)e=At(b)[0],Wc(e,"change",b.g,!1,b),0==e.state&&(e.state=1,e.e=[Wc(e.c,"error",e.k,!1,e),Wc(e.c,"load",e.p,!1,e)],e.o(e,e.l));b.d+=c}}b=this.na;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};k.lg=function(){this.O()};
k.mg=function(){var a=this.rc(),a=l(a)?yf(a):null;Os(this.q);null===a?Kf(this.b):(a.appendChild(this.b),Is(this.q,null===this.ma?a:this.ma));this.F()};k.ng=function(){this.O()};k.pg=function(){this.O()};k.og=function(){null!==this.Q&&(Yc(this.Q),this.Q=null);var a=this.a();null!=a&&(this.Q=y(a,"propertychange",this.pg,!1,this));this.O()};k.Yf=function(){this.O()};k.Zf=function(){this.O()};
k.Xf=function(){if(null!==this.k){for(var a=this.k.length,b=0;b<a;++b)Yc(this.k[b]);this.k=null}a=this.ib();null!=a&&(this.k=[y(a,"propertychange",this.Zf,!1,this),y(a,"change",this.Yf,!1,this)]);this.O()};k.pi=function(){var a=this.o;ys(a);a.Vd()};k.O=function(){null!=this.o.T||this.o.start()};k.ji=function(a){if(l(this.i.remove(a)))return a};k.li=function(a){var b;l(this.g.remove(a))&&(b=a);return b};k.mi=function(a){return this.ib().Ab().remove(a)};k.ni=function(a){if(l(this.l.remove(a)))return a};
k.oi=function(a){var b,c,d,e=this.e(),f=this.a(),g=null;if(l(e)&&0<e[0]&&0<e[1]&&l(f)&&Ye(f)){var g=cb(f.l),h=this.ib().Oa(),m={};b=0;for(c=h.length;b<c;++b)m[na(h[b].layer)]=h[b];d=Xe(f);g={animate:!1,attributions:{},coordinateToPixelMatrix:this.Cc,extent:null,focus:null===this.X?d.center:this.X,index:this.rd++,layerStates:m,layerStatesArray:h,logos:this.sd,pixelRatio:this.Te,pixelToCoordinateMatrix:this.Ve,postRenderFunctions:[],size:e,skippedFeatureUids:this.ea,tileQueue:this.Kb,time:a,usedTiles:{},
viewState:d,viewHints:g,wantedTiles:{}}}a=this.u;b=e=0;for(c=a.length;b<c;++b)f=a[b],f(this,g)&&(a[e++]=f);a.length=e;null!==g&&(g.extent=ne(d.center,d.resolution,d.rotation,g.size));this.d=g;this.aa.hd(g);null!==g&&(g.animate&&this.O(),Array.prototype.push.apply(this.na,g.postRenderFunctions),0!==this.u.length||g.viewHints[0]||g.viewHints[1]||this.ba&&ae(g.extent,this.ba)||(this.dispatchEvent(new Rg("moveend",this,g)),this.ba=Wd(g.extent)));this.dispatchEvent(new Rg("postrender",this,g));sr(this.ig,
this)};k.Je=function(a){this.set("layergroup",a)};W.prototype.setLayerGroup=W.prototype.Je;W.prototype.D=function(a){this.set("size",a)};W.prototype.setSize=W.prototype.D;W.prototype.sa=function(a){this.set("target",a)};W.prototype.setTarget=W.prototype.sa;W.prototype.Va=function(a){this.set("view",a)};W.prototype.setView=W.prototype.Va;W.prototype.cb=function(a){a=na(a).toString();this.ea[a]=!0;this.O()};
W.prototype.F=function(){var a=this.rc(),a=l(a)?yf(a):null;null===a?this.D(void 0):(a=eg(a),this.D([a.width,a.height]))};W.prototype.Lb=function(a){a=na(a).toString();delete this.ea[a];this.O()};
function Sv(a){var b=null;l(a.keyboardEventTarget)&&(b=ja(a.keyboardEventTarget)?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d={};if(!l(a.logo)||"boolean"==typeof a.logo&&a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]="http://openlayers.org/";
else{var e=a.logo;ja(e)?d[e]="":ma(e)&&(d[e.src]=e.href)}e=a.layers instanceof R?a.layers:new R({layers:a.layers});c.layergroup=e;c.target=a.target;c.view=l(a.view)?a.view:new z;var e=st,f;l(a.renderer)?ha(a.renderer)?f=a.renderer:ja(a.renderer)&&(f=[a.renderer]):f=Rv;var g,h;g=0;for(h=f.length;g<h;++g){var m=f[g];if("canvas"==m){if(vg){e=Wu;break}}else if("dom"==m){e=fv;break}else if("webgl"==m&&Bg){e=Ov;break}}var n;l(a.controls)?n=ha(a.controls)?new A(cb(a.controls)):a.controls:n=Hh();f=l(a.deviceOptions)?
a.deviceOptions:{};var p;l(a.interactions)?p=ha(a.interactions)?new A(cb(a.interactions)):a.interactions:p=Kt();a=l(a.overlays)?ha(a.overlays)?new A(cb(a.overlays)):a.overlays:new A;return{controls:n,deviceOptions:f,interactions:p,keyboardEventTarget:b,logos:d,overlays:a,qi:e,Di:c}}Rt();function Tv(a,b){fc.call(this,a);this.feature=b}t(Tv,fc);
function Uv(a){is.call(this);this.r=null;this.F=l(a.source)?a.source:null;this.u=l(a.features)?a.features:null;this.ba=l(a.snapTolerance)?a.snapTolerance:12;this.Q=l(a.minPointsPerRing)?a.minPointsPerRing:3;var b=this.o=a.type,c;if("Point"===b||"MultiPoint"===b)c=Vv;else if("LineString"===b||"MultiLineString"===b)c=Wv;else if("Polygon"===b||"MultiPolygon"===b)c=Xv;this.a=c;this.d=this.k=this.i=this.e=this.f=null;this.q=new bk({style:l(a.style)?a.style:Yv()});this.D=a.geometryName;this.X=l(a.condition)?
a.condition:zi}t(Uv,is);function Yv(){var a=Oi();return function(b){return a[b.J().G()]}}Uv.prototype.setMap=function(a){null===a&&Zv(this);this.q.setMap(a);Uv.K.setMap.call(this,a)};Uv.prototype.La=function(a){var b;b=a.map;if(Mf(document,b.b)&&"none"!=b.b.style.display){var c=b.e();null==c||0>=c[0]||0>=c[1]?b=!1:(b=b.a(),b=l(b)&&Ye(b)?!0:!1)}else b=!1;if(!b)return!0;b=!0;a.type===ui?b=$v(this,a):a.type===oi&&(b=!1);return Uv.K.La.call(this,a)&&b};
Uv.prototype.$a=function(a){return this.X(a)?(this.r=a.pixel,!0):!1};
Uv.prototype.ab=function(a){var b=this.r,c=a.pixel,d=b[0]-c[0],b=b[1]-c[1],c=!0;if(4>=d*d+b*b){$v(this,a);if(null===this.f)aw(this,a);else if(this.a===Vv||bw(this,a)){a=Zv(this);var e,d=a.J();this.a===Vv?e=d.H():this.a===Wv?(e=d.H(),e.pop(),d.P(e)):this.a===Xv&&(this.d[0].pop(),this.d[0].push(this.d[0][0]),d.P(this.d),e=d.H());"MultiPoint"===this.o?a.Ba(new Aj([e])):"MultiLineString"===this.o?a.Ba(new uj([e])):"MultiPolygon"===this.o&&a.Ba(new Pj([e]));null===this.u||this.u.push(a);null===this.F||
this.F.za(a);this.dispatchEvent(new Tv("drawend",a))}else e=a.coordinate,a=this.e.J(),this.a===Wv?(this.f=e.slice(),d=a.H(),d.push(e.slice()),a.P(d)):this.a===Xv&&(this.d[0].push(e.slice()),a.P(this.d)),cw(this);c=!1}return c};
function $v(a,b){if(a.a===Vv&&null===a.f)aw(a,b);else if(null===a.f){var c=b.coordinate.slice();null===a.i?(a.i=new G(new yj(c)),cw(a)):a.i.J().P(c)}else{var c=b.coordinate,d=a.e.J(),e,f;a.a===Vv?(f=d.H(),f[0]=c[0],f[1]=c[1],d.P(f)):(a.a===Wv?e=d.H():a.a===Xv&&(e=a.d[0]),bw(a,b)&&(c=a.f.slice()),a.i.J().P(c),f=e[e.length-1],f[0]=c[0],f[1]=c[1],a.a===Wv?d.P(e):a.a===Xv&&(a.k.J().P(e),d.P(a.d)));cw(a)}return!0}
function bw(a,b){var c=!1;if(null!==a.e){var d=a.e.J(),e=!1,f=[a.f];a.a===Wv?e=2<d.H().length:a.a===Xv&&(e=d.H()[0].length>a.Q,f=[a.d[0][0],a.d[0][a.d[0].length-2]]);if(e)for(var d=b.map,e=0,g=f.length;e<g;e++){var h=f[e],m=d.f(h),n=b.pixel,c=n[0]-m[0],m=n[1]-m[1];if(c=Math.sqrt(c*c+m*m)<=a.ba){a.f=h;break}}}return c}
function aw(a,b){var c=b.coordinate;a.f=c;var d;a.a===Vv?d=new yj(c.slice()):a.a===Wv?d=new H([c.slice(),c.slice()]):a.a===Xv&&(a.k=new G(new H([c.slice(),c.slice()])),a.d=[[c.slice(),c.slice()]],d=new I(a.d));a.e=new G;l(a.D)&&a.e.e(a.D);a.e.Ba(d);cw(a);a.dispatchEvent(new Tv("drawstart",a.e))}function Zv(a){a.f=null;var b=a.e;null!==b&&(a.e=null,a.i=null,a.k=null,a.q.a.clear());return b}
function cw(a){var b=[];null===a.e||b.push(a.e);null===a.k||b.push(a.k);null===a.i||b.push(a.i);a.q.xc(new A(b))}var Vv="Point",Wv="LineString",Xv="Polygon";function dw(a){is.call(this);this.D=l(a.deleteCondition)?a.deleteCondition:gd(zi,yi);this.u=this.d=null;this.r=[0,0];this.a=new Gu;this.f=l(a.pixelTolerance)?a.pixelTolerance:10;this.q=!1;this.e=null;this.i=new bk({style:l(a.style)?a.style:ew()});this.o={Point:this.Ji,LineString:this.Re,LinearRing:this.Re,Polygon:this.Ki,MultiPoint:this.Hi,MultiLineString:this.Gi,MultiPolygon:this.Ii,GeometryCollection:this.Fi};this.k=a.features;this.k.forEach(this.qe,this);y(this.k,"add",this.Sf,!1,this);y(this.k,
"remove",this.Tf,!1,this)}t(dw,is);k=dw.prototype;k.qe=function(a){var b=a.J();l(this.o[b.G()])&&this.o[b.G()].call(this,a,b);a=this.g;null===a||fw(this,this.r,a)};k.setMap=function(a){this.i.setMap(a);dw.K.setMap.call(this,a)};k.Sf=function(a){this.qe(a.element)};k.Tf=function(a){var b=a.element;a=this.a;var c,d=[];Ju(a,b.J().s(),function(a){b===a.feature&&d.push(a)});for(c=d.length-1;0<=c;--c)a.remove(d[c]);null!==this.d&&0===this.k.xb()&&(this.i.cd(this.d),this.d=null)};
k.Ji=function(a,b){var c=b.H(),c={feature:a,geometry:b,da:[c,c]};Nu(this.a,b.s(),c)};k.Hi=function(a,b){var c=b.H(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,geometry:b,depth:[e],index:e,da:[d,d]},Nu(this.a,b.s(),d)};k.Re=function(a,b){var c=b.H(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,geometry:b,index:d,da:f},Nu(this.a,Rd(f),g)};
k.Gi=function(a,b){var c=b.H(),d,e,f,g,h,m,n;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)m=d.slice(e,e+2),n={feature:a,geometry:b,depth:[g],index:e,da:m},Nu(this.a,Rd(m),n)};k.Ki=function(a,b){var c=b.H(),d,e,f,g,h,m,n;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)m=d.slice(e,e+2),n={feature:a,geometry:b,depth:[g],index:e,da:m},Nu(this.a,Rd(m),n)};
k.Ii=function(a,b){var c=b.H(),d,e,f,g,h,m,n,p,r,q;m=0;for(n=c.length;m<n;++m)for(p=c[m],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)r=d.slice(e,e+2),q={feature:a,geometry:b,depth:[g,m],index:e,da:r},Nu(this.a,Rd(r),q)};k.Fi=function(a,b){var c,d=b.e;for(c=0;c<d.length;++c)this.o[d[c].G()].call(this,a,d[c])};function gw(a,b){var c=a.d;null===c?(c=new G(new yj(b)),a.d=c,a.i.ke(c)):c.J().P(b)}
k.$a=function(a){fw(this,a.pixel,a.map);this.e=[];var b=this.d;if(null!==b){a=[];for(var b=b.J().H(),c=Rd([b]),c=Mu(this.a,c),d={},e=0,f=c.length;e<f;++e){var g=c[e],h=g.da;na(g.feature)in d||(d[na(g.feature)]=!0);Ad(h[0],b)?this.e.push([g,0]):Ad(h[1],b)?this.e.push([g,1]):na(h)in this.u&&a.push([g,b])}for(e=a.length-1;0<=e;--e)this.qg.apply(this,a[e])}return null!==this.d};
k.jb=function(a){a=a.coordinate;for(var b=0,c=this.e.length;b<c;++b){var d=this.e[b],e=d[0],f=e.depth,g=e.geometry,h=g.H(),m=e.da,d=d[1];switch(g.G()){case "Point":h=a;m[0]=m[1]=a;break;case "MultiPoint":h[e.index]=a;m[0]=m[1]=a;break;case "LineString":h[e.index+d]=a;m[d]=a;break;case "MultiLineString":h[f[0]][e.index+d]=a;m[d]=a;break;case "Polygon":h[f[0]][e.index+d]=a;m[d]=a;break;case "MultiPolygon":h[f[1]][f[0]][e.index+d]=a,m[d]=a}g.P(h);gw(this,a)}};
k.ab=function(){for(var a,b=this.e.length-1;0<=b;--b)a=this.e[b][0],this.a.update(Rd(a.da),a);return!1};
k.La=function(a){var b,c=a.map.a();cb(c.l)[1]||a.type!=ui||(this.r=a.pixel,fw(this,a.pixel,a.map));if(null!==this.d&&this.q&&this.D(a)){this.d.J();b=this.e;var c={},d=!1,e,f,g,h,m,n,p,r,q;for(m=b.length-1;0<=m;--m)if(g=b[m],r=g[0],h=r.geometry,f=h.H(),q=na(r.feature),e=p=n=void 0,0===g[1]?(p=r,n=r.index):1==g[1]&&(e=r,n=r.index+1),q in c||(c[q]=[e,p,n]),g=c[q],l(e)&&(g[0]=e),l(p)&&(g[1]=p),l(g[0])&&l(g[1])){e=f;d=!1;p=n-1;switch(h.G()){case "MultiLineString":f[r.depth[0]].splice(n,1);d=!0;break;case "LineString":f.splice(n,
1);d=!0;break;case "MultiPolygon":e=e[r.depth[1]];case "Polygon":e=e[r.depth[0]],4<e.length&&(n==e.length-1&&(n=0),e.splice(n,1),d=!0,0===n&&(e.pop(),e.push(e[0]),p=e.length-1))}d&&(this.a.remove(g[0]),this.a.remove(g[1]),h.P(f),f={depth:r.depth,feature:r.feature,geometry:r.geometry,index:p,da:[g[0].da[0],g[1].da[1]]},Nu(this.a,Rd(f.da),f),hw(this,h,n,r.depth,-1),this.i.cd(this.d),this.d=null)}b=d}return dw.K.La.call(this,a)&&!b};
function fw(a,b,c){function d(a,b){return Cd(e,wd(e,a.da))-Cd(e,wd(e,b.da))}var e=c.ta(b),f=c.ta([b[0]-a.f,b[1]+a.f]),g=c.ta([b[0]+a.f,b[1]-a.f]),f=Rd([f,g]),f=Mu(a.a,f);if(0<f.length){f.sort(d);var g=f[0].da,h=wd(e,g),m=c.f(h);if(Math.sqrt(Cd(b,m))<=a.f){b=c.f(g[0]);c=c.f(g[1]);b=Cd(m,b);c=Cd(m,c);a.q=Math.sqrt(Math.min(b,c))<=a.f;a.q&&(h=b>c?g[1]:g[0]);gw(a,h);c={};c[na(g)]=!0;b=1;for(m=f.length;b<m;++b)if(h=f[b].da,Ad(g[0],h[0])&&Ad(g[1],h[1])||Ad(g[0],h[1])&&Ad(g[1],h[0]))c[na(h)]=!0;else break;
a.u=c;return}}null!==a.d&&(a.i.cd(a.d),a.d=null)}
k.qg=function(a,b){var c=a.da,d=a.feature,e=a.geometry,f=a.depth,g=a.index,h;switch(e.G()){case "MultiLineString":h=e.H();h[f[0]].splice(g+1,0,b);break;case "Polygon":h=e.H();h[f[0]].splice(g+1,0,b);break;case "MultiPolygon":h=e.H();h[f[1]][f[0]].splice(g+1,0,b);break;case "LineString":h=e.H();h.splice(g+1,0,b);break;default:return}e.P(h);h=this.a;h.remove(a);hw(this,e,g,f,1);var m={da:[c[0],b],feature:d,geometry:e,depth:f,index:g};Nu(h,Rd(m.da),m);this.e.push([m,1]);c={da:[b,c[1]],feature:d,geometry:e,
depth:f,index:g+1};Nu(h,Rd(c.da),c);this.e.push([c,0])};k.kd=ed;function hw(a,b,c,d,e){Ju(a.a,b.s(),function(a){a.geometry===b&&(!l(d)||ib(a.depth,d))&&a.index>c&&(a.index+=e)})}function ew(){var a=Oi();return function(){return a.Point}};function iw(a){jr.call(this);a=l(a)?a:{};this.e=l(a.condition)?a.condition:yi;this.d=l(a.addCondition)?a.addCondition:cd;this.f=l(a.removeCondition)?a.removeCondition:cd;this.i=l(a.toggleCondition)?a.toggleCondition:Ai;var b;if(l(a.layers))if(la(a.layers))b=a.layers;else{var c=a.layers;b=function(a){return Za(c,a)}}else b=dd;this.b=b;this.a=new bk({style:l(a.style)?a.style:jw()});a=this.a.a;y(a,"add",this.dh,!1,this);y(a,"remove",this.ki,!1,this)}t(iw,jr);k=iw.prototype;k.eh=function(){return this.a.a};
k.La=function(a){if(!this.e(a))return!0;var b=this.d(a),c=this.f(a),d=this.i(a),e=a.map,f=this.a.a;if(b||c||d){var g=[],h=[];e.Cd(a.pixel,function(a){var e=Sa(f.a,a);-1==e?(b||d)&&h.push(a):(c||d)&&g.push(e)},void 0,this.b);for(a=g.length-1;0<=a;--a)f.gd(g[a]);f.je(h)}else a=e.Cd(a.pixel,function(a){return a},void 0,this.b),l(a)&&1==f.xb()&&f.item(0)==a||(0!==f.xb()&&f.clear(),l(a)&&f.push(a));return!1};
k.setMap=function(a){var b=this.g,c=this.a.a;null===b||c.forEach(b.Lb,b);iw.K.setMap.call(this,a);this.a.setMap(a);null===a||c.forEach(a.cb,a)};function jw(){var a=Oi();db(a.Polygon,a.LineString);db(a.GeometryCollection,a.LineString);return function(b){return a[b.J().G()]}}k.dh=function(a){a=a.element;var b=this.g;null===b||b.cb(a)};k.ki=function(a){a=a.element;var b=this.g;null===b||b.Lb(a)};function X(a){a=l(a)?a:{};V.call(this,a);this.aa=null;y(this,td("gradient"),this.qd,!1,this);this.Kb(l(a.gradient)?a.gradient:kw);var b=lw(l(a.radius)?a.radius:8,l(a.blur)?a.blur:15,l(a.shadow)?a.shadow:250),c=Array(256),d=l(a.weight)?a.weight:"weight",e;ja(d)?e=function(a){return a.get(d)}:e=d;this.na(function(a){a=e(a);a=l(a)?Jb(a,0,1):1;var d=255*a|0,h=c[d];l(h)||(h=[new Li({image:new Rn({opacity:a,src:b})})],c[d]=h);return h});this.set("renderOrder",null);y(this,"render",this.rd,!1,this)}
t(X,V);var kw=["#00f","#0ff","#0f0","#ff0","#f00"];function lw(a,b,c){var d=a+b+1,e=2*d,e=lg(e,e);e.shadowOffsetX=e.shadowOffsetY=c;e.shadowBlur=b;e.shadowColor="#000";e.beginPath();b=d-c;e.arc(b,b,a,0,2*Math.PI,!0);e.fill();return e.canvas.toDataURL()}X.prototype.sa=function(){return this.get("gradient")};X.prototype.getGradient=X.prototype.sa;
X.prototype.qd=function(){for(var a=this.sa(),b=lg(1,256),c=b.createLinearGradient(0,0,1,256),d=1/(a.length-1),e=0,f=a.length;e<f;++e)c.addColorStop(e*d,a[e]);b.fillStyle=c;b.fillRect(0,0,1,256);this.aa=b.getImageData(0,0,1,256).data};X.prototype.rd=function(a){a=a.context;var b=a.canvas,b=a.getImageData(0,0,b.width,b.height),c=b.data,d,e,f;d=0;for(e=c.length;d<e;d+=4)if(f=4*c[d+3])c[d]=this.aa[f],c[d+1]=this.aa[f+1],c[d+2]=this.aa[f+2];a.putImageData(b,0,0)};
X.prototype.Kb=function(a){this.set("gradient",a)};X.prototype.setGradient=X.prototype.Kb;function mw(a){return[a]};function Z(a){pd.call(this);this.r=l(a.insertFirst)?a.insertFirst:!0;this.u=l(a.stopEvent)?a.stopEvent:!0;this.b=Ff("DIV");this.b.style.position="absolute";this.a={Dc:"",ad:"",jd:"",ld:"",visible:!0};this.d=null;y(this,td("element"),this.Rf,!1,this);y(this,td("map"),this.cg,!1,this);y(this,td("offset"),this.eg,!1,this);y(this,td("position"),this.gg,!1,this);y(this,td("positioning"),this.hg,!1,this);l(a.element)&&this.Nd(a.element);this.k(l(a.offset)?a.offset:[0,0]);this.q(l(a.positioning)?a.positioning:
"top-left");l(a.position)&&this.o(a.position)}t(Z,pd);Z.prototype.i=function(){return this.get("element")};Z.prototype.getElement=Z.prototype.i;Z.prototype.e=function(){return this.get("map")};Z.prototype.getMap=Z.prototype.e;Z.prototype.f=function(){return this.get("offset")};Z.prototype.getOffset=Z.prototype.f;Z.prototype.l=function(){return this.get("position")};Z.prototype.getPosition=Z.prototype.l;Z.prototype.g=function(){return this.get("positioning")};Z.prototype.getPositioning=Z.prototype.g;
k=Z.prototype;k.Rf=function(){Hf(this.b);var a=this.i();null!=a&&Gf(this.b,a)};k.cg=function(){null!==this.d&&(Kf(this.b),Yc(this.d),this.d=null);var a=this.e();null!=a&&(this.d=y(a,"postrender",this.Tg,!1,this),nw(this),a=this.u?a.r:a.Oa,this.r?Jf(a,this.b,0):Gf(a,this.b))};k.Tg=function(){nw(this)};k.eg=function(){nw(this)};k.gg=function(){nw(this)};k.hg=function(){nw(this)};k.Nd=function(a){this.set("element",a)};Z.prototype.setElement=Z.prototype.Nd;
Z.prototype.setMap=function(a){this.set("map",a)};Z.prototype.setMap=Z.prototype.setMap;Z.prototype.k=function(a){this.set("offset",a)};Z.prototype.setOffset=Z.prototype.k;Z.prototype.o=function(a){this.set("position",a)};Z.prototype.setPosition=Z.prototype.o;Z.prototype.q=function(a){this.set("positioning",a)};Z.prototype.setPositioning=Z.prototype.q;
function nw(a){var b=a.e(),c=a.l();if(l(b)&&null!==b.d&&l(c)){var c=b.f(c),d=b.e(),b=a.b.style,e=a.f(),f=a.g(),g=e[0],e=e[1];if("bottom-right"==f||"center-right"==f||"top-right"==f)""!==a.a.ad&&(a.a.ad=b.left=""),g=Math.round(d[0]-c[0]-g)+"px",a.a.jd!=g&&(a.a.jd=b.right=g);else{""!==a.a.jd&&(a.a.jd=b.right="");if("bottom-center"==f||"center-center"==f||"top-center"==f)g-=ag(a.b).width/2;g=Math.round(c[0]+g)+"px";a.a.ad!=g&&(a.a.ad=b.left=g)}if("bottom-left"==f||"bottom-center"==f||"bottom-right"==
f)""!==a.a.ld&&(a.a.ld=b.top=""),c=Math.round(d[1]-c[1]-e)+"px",a.a.Dc!=c&&(a.a.Dc=b.bottom=c);else{""!==a.a.Dc&&(a.a.Dc=b.bottom="");if("center-left"==f||"center-center"==f||"center-right"==f)e-=ag(a.b).height/2;c=Math.round(c[1]+e)+"px";a.a.ld!=c&&(a.a.ld=b.top=c)}a.a.visible||(dg(a.b,!0),a.a.visible=!0)}else a.a.visible&&(dg(a.b,!1),a.a.visible=!1)};function ow(a,b){var c=b||{},d=c.document||document,e=Ff("SCRIPT"),f={Ge:e,Eb:void 0},g=new Rr(pw,f),h=null,m=null!=c.timeout?c.timeout:5E3;0<m&&(h=window.setTimeout(function(){qw(e,!0);var b=new rw(sw,"Timeout reached for loading script "+a);Tr(g);Ur(g,!1,b)},m),f.Eb=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(qw(e,c.gf||!1,h),Tr(g),Ur(g,!0,null))};e.onerror=function(){qw(e,!0,h);var b=new rw(tw,"Error while loading script "+a);Tr(g);
Ur(g,!1,b)};zf(e,{type:"text/javascript",charset:"UTF-8",src:a});uw(d).appendChild(e);return g}function uw(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function pw(){if(this&&this.Ge){var a=this.Ge;a&&"SCRIPT"==a.tagName&&qw(a,!0,this.Eb)}}function qw(a,b,c){null!=c&&ba.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){Kf(a)},0)}var tw=0,sw=1;
function rw(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);va.call(this,c);this.code=a}t(rw,va);function vw(a,b){this.c=new xn(a);this.a=b?b:"callback";this.Eb=5E3}var ww=0;function xw(a,b,c){var d=b||null;b="_"+(ww++).toString(36)+ua().toString(36);ba._callbacks_||(ba._callbacks_={});var e=a.c.clone();if(d)for(var f in d)if(!d.hasOwnProperty||d.hasOwnProperty(f)){var g=e,h=f,m=d[f];ha(m)||(m=[String(m)]);Qn(g.a,h,m)}c&&(ba._callbacks_[b]=yw(b,c),c=a.a,f="_callbacks_."+b,ha(f)||(f=[String(f)]),Qn(e.a,c,f));a=ow(e.toString(),{timeout:a.Eb,gf:!0});Xr(a,null,zw(b),void 0)}
vw.prototype.cancel=function(a){a&&(a.hf&&a.hf.cancel(),a.T&&Aw(a.T,!1))};function zw(a){return function(){Aw(a,!1)}}function yw(a,b){return function(c){Aw(a,!0);b.apply(void 0,arguments)}}function Aw(a,b){ba._callbacks_[a]&&(b?delete ba._callbacks_[a]:ba._callbacks_[a]=ca)};function Bw(a){var b=/\{z\}/g,c=/\{x\}/g,d=/\{y\}/g,e=/\{-y\}/g;return function(f){return null===f?void 0:a.replace(b,f[0].toString()).replace(c,f[1].toString()).replace(d,f[2].toString()).replace(e,function(){return((1<<f[0])-f[2]-1).toString()})}}function Cw(a){return Dw(Va(a,Bw))}function Dw(a){return 1===a.length?a[0]:function(b,c,d){return null===b?void 0:a[Kb((b[1]<<b[0])+b[2],a.length)](b,c,d)}}function Ew(){}
function Fw(a,b){var c=[0,0,0];return function(d,e,f){return null===d?void 0:b(a(d,f,c),e,f)}}function Gw(a){var b=[],c=/\{(\d)-(\d)\}/.exec(a)||/\{([a-z])-([a-z])\}/.exec(a);if(c){var d=c[2].charCodeAt(0),e;for(e=c[1].charCodeAt(0);e<=d;++e)b.push(a.replace(c[0],String.fromCharCode(e)))}else b.push(a);return b};function Hw(a){Lv.call(this);this.e=l(a)?a:2048}t(Hw,Lv);function Iw(a){return a.fb()>a.e}function Jw(a,b){for(var c,d;Iw(a)&&!(c=a.a.Gb,d=c.a[0].toString(),d in b&&b[d].contains(c.a));)a.pop().Nb()};function Kw(a){dt.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:l(a.state)?a.state:void 0,tileGrid:a.tileGrid,tilePixelRatio:a.tilePixelRatio});this.tileUrlFunction=l(a.tileUrlFunction)?a.tileUrlFunction:Ew;this.crossOrigin=l(a.crossOrigin)?a.crossOrigin:null;this.b=new Hw;this.tileLoadFunction=l(a.tileLoadFunction)?a.tileLoadFunction:Lw;this.tileClass=l(a.tileClass)?a.tileClass:gr}t(Kw,dt);function Lw(a,b){a.b().src=b}k=Kw.prototype;
k.Ed=function(){return Iw(this.b)};k.se=function(a){Jw(this.b,a)};k.Rb=function(a,b,c,d,e){var f=this.hb(a,b,c);if(Jv(this.b,f))return this.b.get(f);a=[a,b,c];d=this.tileUrlFunction(a,d,e);d=new this.tileClass(a,l(d)?0:4,l(d)?d:"",this.crossOrigin,this.tileLoadFunction);this.b.set(f,d);return d};k.Ra=function(){return this.tileLoadFunction};k.Sa=function(){return this.tileUrlFunction};k.Ua=function(a){this.b.clear();this.tileLoadFunction=a;this.n()};
k.ha=function(a){this.b.clear();this.tileUrlFunction=a;this.n()};k.Oe=function(a,b,c){a=this.hb(a,b,c);Jv(this.b,a)&&this.b.get(a)};function Mw(a){var b=l(a.extent)?a.extent:Mt,c=bt(b,a.maxZoom,a.tileSize);Vs.call(this,{minZoom:a.minZoom,origin:ke(b,"top-left"),resolutions:c,tileSize:a.tileSize})}t(Mw,Vs);
Mw.prototype.c=function(a){a=l(a)?a:{};var b=this.minZoom,c=this.maxZoom,d=l(a.wrapX)?a.wrapX:!0,e=null;if(l(a.extent)){var e=Array(c+1),f;for(f=0;f<=c;++f)e[f]=f<b?null:Ys(this,a.extent,f)}return function(a,f,m){f=a[0];if(f<b||c<f)return null;var n=Math.pow(2,f),p=a[1];if(d)p=Kb(p,n);else if(0>p||n<=p)return null;a=a[2];return a<-n||-1<a||null!==e&&!nf(e[f],p,a)?null:gf(f,p,-a-1,m)}};Mw.prototype.Sc=function(a,b){return a[0]<this.maxZoom?mf(2*a[1],2*(a[1]+1),2*a[2],2*(a[2]+1),b):null};
Mw.prototype.Lc=function(a,b,c,d){d=mf(0,a[1],0,a[2],d);for(a=a[0]-1;a>=this.minZoom;--a)if(d.a=d.d>>=1,d.b=d.c>>=1,b.call(c,a,d))return!0;return!1};function Nw(a){Kw.call(this,{crossOrigin:"anonymous",opaque:!0,projection:Be("EPSG:3857"),state:"loading",tileLoadFunction:a.tileLoadFunction});this.a=l(a.culture)?a.culture:"en-us";var b=new xn((Hb?"https:":"http:")+"//dev.virtualearth.net/REST/v1/Imagery/Metadata/"+a.imagerySet);xw(new vw(b,"jsonp"),{include:"ImageryProviders",key:a.key},sa(this.d,this))}t(Nw,Kw);var Ow=new qf({html:'<a class="ol-attribution-bing-tos" target="_blank" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
Nw.prototype.d=function(a){if(200!=a.statusCode||"OK"!=a.statusDescription||"ValidCredentials"!=a.authenticationResultCode||1!=a.resourceSets.length||1!=a.resourceSets[0].resources.length)Ts(this,"error");else{var b=a.brandLogoUri,c=a.resourceSets[0].resources[0],d=new Mw({extent:ct(this.i),minZoom:c.zoomMin,maxZoom:c.zoomMax,tileSize:c.imageWidth});this.tileGrid=d;var e=this.a;this.tileUrlFunction=Fw(d.c(),Dw(Va(c.imageUrlSubdomains,function(a){var b=c.imageUrl.replace("{subdomain}",a).replace("{culture}",
e);return function(a){return null===a?void 0:b.replace("{quadkey}",jf(a))}})));if(c.imageryProviders){var f=Ae(Be("EPSG:4326"),this.i);a=Va(c.imageryProviders,function(a){var b=a.attribution,c={};Ta(a.coverageAreas,function(a){var b=a.zoomMin,e=a.zoomMax;a=a.bbox;a=te([a[1],a[0],a[3],a[2]],f);var g,h;for(g=b;g<=e;++g)h=g.toString(),b=Ys(d,a,g),h in c?c[h].push(b):c[h]=[b]});return new qf({html:b,tileRanges:c})});a.push(Ow);this.f=a}this.q=b;Ts(this,"ready")}};function Pw(a){Qu.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection});this.k=void 0;this.r=l(a.distance)?a.distance:20;this.a=[];this.p=a.source;this.p.t("change",Pw.prototype.u,this)}t(Pw,Qu);Pw.prototype.bd=function(a,b){b!==this.k&&(this.clear(),this.k=b,Qw(this),this.oa(this.a))};Pw.prototype.u=function(){this.clear();Qw(this);this.oa(this.a);this.n()};
function Qw(a){if(l(a.k)){$a(a.a);for(var b=Sd(),c=a.r*a.k,d=a.p.qa(),e={},f=0,g=d.length;f<g;f++){var h=d[f];yc(e,na(h).toString())||(h=h.J().H(),$d(h,b),Vd(b,c,b),h=Mu(a.p.b,b),h=Ua(h,function(a){a=na(a).toString();return a in e?!1:e[a]=!0}),a.a.push(Rw(h)))}}}function Rw(a){for(var b=a.length,c=[0,0],d=0;d<b;d++){var e=a[d].J().H();vd(c,e)}b=1/b;c[0]*=b;c[1]*=b;c=new G(new yj(c));c.set("features",a);return c};function Sw(a,b,c){if(la(a))c&&(a=sa(a,c));else if(a&&"function"==typeof a.handleEvent)a=sa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:ba.setTimeout(a,b||0)};function Tw(){}Tw.prototype.a=null;function Uw(a){var b;(b=a.a)||(b={},Vw(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Ww;function Xw(){}t(Xw,Tw);function Yw(a){return(a=Vw(a))?new ActiveXObject(a):new XMLHttpRequest}function Vw(a){if(!a.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.c}Ww=new Xw;function Zw(a){hd.call(this);this.u=new on;this.l=a||null;this.a=!1;this.i=this.M=null;this.e=this.D=this.o="";this.c=this.p=this.d=this.k=!1;this.g=0;this.b=null;this.f=$w;this.q=this.Q=!1}t(Zw,hd);var $w="",ax=/^https?$/i,bx=["POST","PUT"];
function cx(a,b){if(a.M)throw Error("[goog.net.XhrIo] Object is active with another request="+a.o+"; newUri="+b);a.o=b;a.e="";a.D="GET";a.k=!1;a.a=!0;a.M=a.l?Yw(a.l):Yw(Ww);a.i=a.l?Uw(a.l):Uw(Ww);a.M.onreadystatechange=sa(a.r,a);try{a.p=!0,a.M.open("GET",String(b),!0),a.p=!1}catch(c){dx(a,c);return}var d=a.u.clone(),e=Xa(d.N()),f=ba.FormData&&!1;!Za(bx,"GET")||e||f||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");d.forEach(function(a,b){this.M.setRequestHeader(b,a)},a);a.f&&
(a.M.responseType=a.f);"withCredentials"in a.M&&(a.M.withCredentials=a.Q);try{ex(a),0<a.g&&(a.q=fx(a.M),a.q?(a.M.timeout=a.g,a.M.ontimeout=sa(a.Eb,a)):a.b=Sw(a.Eb,a.g,a)),a.d=!0,a.M.send(""),a.d=!1}catch(g){dx(a,g)}}function fx(a){return ub&&Eb(9)&&ka(a.timeout)&&l(a.ontimeout)}function Ya(a){return"content-type"==a.toLowerCase()}
Zw.prototype.Eb=function(){"undefined"!=typeof aa&&this.M&&(this.e="Timed out after "+this.g+"ms, aborting",this.dispatchEvent("timeout"),this.M&&this.a&&(this.a=!1,this.c=!0,this.M.abort(),this.c=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),gx(this)))};function dx(a,b){a.a=!1;a.M&&(a.c=!0,a.M.abort(),a.c=!1);a.e=b;hx(a);gx(a)}function hx(a){a.k||(a.k=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
Zw.prototype.I=function(){this.M&&(this.a&&(this.a=!1,this.c=!0,this.M.abort(),this.c=!1),gx(this,!0));Zw.K.I.call(this)};Zw.prototype.r=function(){this.qb||(this.p||this.d||this.c?ix(this):this.F())};Zw.prototype.F=function(){ix(this)};
function ix(a){if(a.a&&"undefined"!=typeof aa&&(!a.i[1]||4!=jx(a)||2!=kx(a)))if(a.d&&4==jx(a))Sw(a.r,0,a);else if(a.dispatchEvent("readystatechange"),4==jx(a)){a.a=!1;try{if(lx(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<jx(a)?a.M.statusText:""}catch(c){b=""}a.e=b+" ["+kx(a)+"]";hx(a)}}finally{gx(a)}}}function gx(a,b){if(a.M){ex(a);var c=a.M,d=a.i[0]?ca:null;a.M=null;a.i=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function ex(a){a.M&&a.q&&(a.M.ontimeout=null);ka(a.b)&&(ba.clearTimeout(a.b),a.b=null)}function lx(a){var b=kx(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=sn(String(a.o))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!ax.test(a?a.toLowerCase():"");c=b}return c}function jx(a){return a.M?a.M.readyState:0}function kx(a){try{return 2<jx(a)?a.M.status:-1}catch(b){return-1}}
function mx(a){try{return a.M?a.M.responseText:""}catch(b){return""}}function nx(a){try{if(!a.M)return null;if("response"in a.M)return a.M.response;switch(a.f){case $w:case "text":return a.M.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.M)return a.M.mozResponseArrayBuffer}return null}catch(b){return null}};function ox(a){Qu.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection});this.format=a.format}t(ox,Qu);
function px(a,b,c,d){var e=new Zw;e.f="binary"==a.format.G()&&tg?"arraybuffer":"text";y(e,"complete",function(a){a=a.target;if(lx(a)){var b=this.format.G(),e;if("binary"==b&&tg)e=nx(a);else if("json"==b)e=mx(a);else if("text"==b)e=mx(a);else if("xml"==b){if(!ub)try{e=a.M?a.M.responseXML:null}catch(m){e=null}null!=e||(e=Sk(mx(a)))}null!=e?c.call(d,this.a(e)):Ts(this,"error")}else Ts(this,"error");ec(a)},!1,a);cx(e,b)}ox.prototype.a=function(a){return this.format.la(a,{featureProjection:this.i})};function $(a){ox.call(this,{attributions:a.attributions,format:a.format,logo:a.logo,projection:a.projection});l(a.arrayBuffer)&&this.Pa(this.a(a.arrayBuffer));l(a.doc)&&this.Pa(this.a(a.doc));l(a.node)&&this.Pa(this.a(a.node));l(a.object)&&this.Pa(this.a(a.object));l(a.text)&&this.Pa(this.a(a.text));if(l(a.url)||l(a.urls))if(Ts(this,"loading"),l(a.url)&&px(this,a.url,this.k,this),l(a.urls)){a=a.urls;var b,c;b=0;for(c=a.length;b<c;++b)px(this,a[b],this.k,this)}}t($,ox);
$.prototype.k=function(a){this.Pa(a);Ts(this,"ready")};function qx(a){a=l(a)?a:{};$.call(this,{attributions:a.attributions,extent:a.extent,format:new nk({defaultDataProjection:a.defaultProjection}),logo:a.logo,object:a.object,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}t(qx,$);function rx(a){a=l(a)?a:{};$.call(this,{attributions:a.attributions,doc:a.doc,extent:a.extent,format:new zm,logo:a.logo,node:a.node,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}t(rx,$);function sx(a){a=l(a)?a:{};$.call(this,{format:new kn({altitudeMode:a.altitudeMode}),projection:a.projection,text:a.text,url:a.url,urls:a.urls})}t(sx,$);function tx(a){xu.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions,state:l(a.state)?a.state:void 0});this.o=a.canvasFunction;this.g=null;this.p=0;this.r=l(a.ratio)?a.ratio:1.5}t(tx,xu);tx.prototype.Vb=function(a,b,c,d){b=yu(this,b);var e=this.g;if(null!==e&&this.p==this.c&&e.b==b&&e.f==c&&Yd(e.s(),a))return e;a=a.slice();re(a,this.r);d=this.o(a,b,c,[fe(a)/b*c,ge(a)/b*c],d);null===d||(e=new er(a,b,c,this.f,d));this.g=e;this.p=this.c;return e};function ux(a){xu.call(this,{projection:a.projection,resolutions:a.resolutions});this.r=l(a.crossOrigin)?a.crossOrigin:null;this.b=l(a.displayDpi)?a.displayDpi:96;this.a=l(a.params)?a.params:{};var b;l(a.url)?b=hr(a.url,this.a,sa(this.F,this)):b=ir;this.p=b;this.u=l(a.hidpi)?a.hidpi:!0;this.o=l(a.metersPerUnit)?a.metersPerUnit:1;this.e=l(a.ratio)?a.ratio:1;this.X=l(a.useOverlay)?a.useOverlay:!1;this.d=null;this.g=0}t(ux,xu);ux.prototype.D=function(){return this.a};
ux.prototype.Vb=function(a,b,c,d){b=yu(this,b);c=this.u?c:1;var e=this.d;if(null!==e&&this.g==this.c&&e.b==b&&e.f==c&&Yd(e.s(),a))return e;1!=this.e&&(a=a.slice(),re(a,this.e));d=this.p(a,[fe(a)/b*c,ge(a)/b*c],d);l(d)?e=new cr(a,b,c,this.f,d,this.r):e=null;this.d=e;this.g=this.c;return e};ux.prototype.Q=function(a){Hc(this.a,a);this.n()};
ux.prototype.F=function(a,b,c,d){var e;e=this.o;var f=fe(c),g=ge(c),h=d[0],m=d[1],n=.0254/this.b;e=m*f>h*g?f*e/(h*n):g*e/(m*n);c=je(c);d={OPERATION:this.X?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.b,SETDISPLAYWIDTH:Math.round(d[0]),SETDISPLAYHEIGHT:Math.round(d[1]),SETVIEWSCALE:e,SETVIEWCENTERX:c[0],SETVIEWCENTERY:c[1]};Hc(d,b);return un(wn([a],d))};function vx(a){var b=l(a.attributions)?a.attributions:null,c=l(a.crossOrigin)?a.crossOrigin:null,d=a.imageExtent,e=(d[3]-d[1])/a.imageSize[1],f=a.url,g=Be(a.projection);xu.call(this,{attributions:b,logo:a.logo,projection:g,resolutions:[e]});this.a=new cr(d,e,1,b,f,c)}t(vx,xu);vx.prototype.Vb=function(a){return pe(a,this.a.s())?this.a:null};function wx(a){this.b=a.source;this.u=null!=a.style?Mi(a.style):Ni;this.D=Id();this.a=lg();this.d=[0,0];this.e=null;tx.call(this,{attributions:a.attributions,canvasFunction:sa(this.ef,this),logo:a.logo,projection:a.projection,ratio:a.ratio,resolutions:a.resolutions,state:this.b.l});y(this.b,"change",this.lh,void 0,this)}t(wx,tx);k=wx.prototype;
k.ef=function(a,b,c,d){var e=new ou(.5*b/c,a,b),f=!1;this.b.Kc(a,b,function(a){var d;if(!(d=f))if(d=this.u(a,b),null!=d){var m,n,p=!1;m=0;for(n=d.length;m<n;++m)p=Xj(e,a,d[m],Wj(b,c),a,this.kh,this)||p;d=p}else d=!1;f=d},this);ru(e);if(f)return null;this.d[0]!=d[0]||this.d[1]!=d[1]?(this.a.canvas.width=d[0],this.a.canvas.height=d[1],this.d[0]=d[0],this.d[1]=d[1]):this.a.clearRect(0,0,d[0],d[1]);d=xx(this,je(a),b,c,d);pu(e,this.a,a,c,d,0,{});this.e=e;return this.a.canvas};
k.ed=function(a,b,c,d,e,f){if(null!==this.e){var g={};return wt(this.e,a,b,0,d,e,function(a,b){var c=na(b).toString();if(!(c in g))return g[c]=!0,f(b)})}};k.jh=function(){return this.b};function xx(a,b,c,d,e){return pt(a.D,e[0]/2,e[1]/2,d/c,-d/c,0,-b[0],-b[1])}k.kh=function(){this.n()};k.lh=function(){Ts(this,this.b.l)};function yx(a){a=l(a)?a:{};xu.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.u=l(a.crossOrigin)?a.crossOrigin:null;this.b=a.url;this.a=a.params;this.e=!0;zx(this);this.r=a.serverType;this.D=l(a.hidpi)?a.hidpi:!0;this.d=null;this.g=[0,0];this.o=0;this.p=l(a.ratio)?a.ratio:1.5}t(yx,xu);var Ax=[101,101];k=yx.prototype;
k.mh=function(a,b,c,d){if(l(this.b)){var e=ne(a,b,0,Ax),f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:v(this.a,"LAYERS")};Hc(f,this.a,d);d=Math.floor((e[3]-a[1])/b);f[this.e?"I":"X"]=Math.floor((a[0]-e[0])/b);f[this.e?"J":"Y"]=d;return Bx(this,e,Ax,1,Be(c),f)}};k.nh=function(){return this.a};
k.Vb=function(a,b,c,d){if(!l(this.b))return null;b=yu(this,b);1==c||this.D&&l(this.r)||(c=1);var e=this.d;if(null!==e&&this.o==this.c&&e.b==b&&e.f==c&&Yd(e.s(),a))return e;e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Hc(e,this.a);a=a.slice();var f=(a[0]+a[2])/2,g=(a[1]+a[3])/2;if(1!=this.p){var h=this.p*fe(a)/2,m=this.p*ge(a)/2;a[0]=f-h;a[1]=g-m;a[2]=f+h;a[3]=g+m}var h=b/c,m=Math.ceil(fe(a)/h),n=Math.ceil(ge(a)/h);a[0]=f-h*m/2;a[2]=f+h*m/2;a[1]=g-h*n/2;a[3]=
g+h*n/2;this.g[0]=m;this.g[1]=n;d=Bx(this,a,this.g,c,d,e);this.d=new cr(a,b,c,this.f,d,this.u);this.o=this.c;return this.d};
function Bx(a,b,c,d,e,f){f[a.e?"CRS":"SRS"]=e.a;"STYLES"in a.a||(f.STYLES=new String(""));if(1!=d)switch(a.r){case "geoserver":f.FORMAT_OPTIONS="dpi:"+(90*d+.5|0);break;case "mapserver":f.MAP_RESOLUTION=90*d;break;case "carmentaserver":case "qgis":f.DPI=90*d}f.WIDTH=c[0];f.HEIGHT=c[1];c=e.b;var g;a.e&&"ne"==c.substr(0,2)?g=[b[1],b[0],b[3],b[2]]:g=b;f.BBOX=g.join(",");return un(wn([a.b],f))}k.oh=function(){return this.b};k.ph=function(a){a!=this.b&&(this.b=a,this.d=null,this.n())};
k.qh=function(a){Hc(this.a,a);zx(this);this.d=null;this.n()};function zx(a){a.e=0<=Na(v(a.a,"VERSION","1.3.0"),"1.3")};function Cx(a){a=l(a)?a:{};$.call(this,{attributions:a.attributions,doc:a.doc,format:new Vn({extractStyles:a.extractStyles,defaultStyle:a.defaultStyle}),logo:a.logo,node:a.node,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}t(Cx,$);function Dx(a){var b=l(a.projection)?a.projection:"EPSG:3857",c=new Mw({extent:ct(b),maxZoom:a.maxZoom});Kw.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,logo:a.logo,projection:b,tileGrid:c,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:Ew});this.d=c.c({wrapX:a.wrapX});l(a.tileUrlFunction)?this.ha(a.tileUrlFunction):l(a.urls)?this.ha(Cw(a.urls)):l(a.url)&&this.a(a.url)}t(Dx,Kw);Dx.prototype.ha=function(a){Dx.K.ha.call(this,Fw(this.d,a))};
Dx.prototype.a=function(a){this.ha(Cw(Gw(a)))};function Ex(a){a=l(a)?a:{};var b=Hb?"https:":"http:";Dx.call(this,{attributions:l(a.attributions)?a.attributions:Fx,crossOrigin:l(a.crossOrigin)?a.crossOrigin:"anonymous",opaque:!0,maxZoom:l(a.maxZoom)?a.maxZoom:19,tileLoadFunction:a.tileLoadFunction,url:l(a.url)?a.url:b+"//{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}t(Ex,Dx);
var Gx=new qf({html:'Data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'}),Hx=new qf({html:'Tiles &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA</a>'}),Fx=[Hx,Gx];function Ix(a){a=l(a)?a:{};var b=Jx[a.layer];Dx.call(this,{attributions:b.attributions,crossOrigin:"anonymous",logo:"//developer.mapquest.com/content/osm/mq_logo.png",maxZoom:b.maxZoom,opaque:!0,tileLoadFunction:a.tileLoadFunction,url:(Hb?"https:":"http:")+"//otile{1-4}-s.mqcdn.com/tiles/1.0.0/"+a.layer+"/{z}/{x}/{y}.jpg"})}t(Ix,Dx);
var Kx=new qf({html:'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>'}),Jx={osm:{maxZoom:28,attributions:[Kx,Gx]},sat:{maxZoom:18,attributions:[Kx,new qf({html:"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]},hyb:{maxZoom:18,attributions:[Kx,Gx]}};function Lx(a){a=l(a)?a:{};$.call(this,{attributions:a.attributions,doc:a.doc,format:new xp,logo:a.logo,node:a.node,projection:a.projection,reprojectTo:a.reprojectTo,text:a.text,url:a.url,urls:a.urls})}t(Lx,$);function Mx(a){ox.call(this,{attributions:a.attributions,format:a.format,logo:a.logo,projection:a.projection});this.p=new Gu;this.r=a.loader;this.u=l(a.strategy)?a.strategy:mw;this.k={}}t(Mx,ox);Mx.prototype.Pa=function(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c){var e=a[c],f=e.T;l(f)?f in this.k||(b.push(e),this.k[f]=!0):b.push(e)}Mx.K.Pa.call(this,b)};Mx.prototype.clear=function(){Cc(this.k);this.p.clear();Mx.K.clear.call(this)};
Mx.prototype.bd=function(a,b,c){var d=this.p;a=this.u(a,b);var e,f;e=0;for(f=a.length;e<f;++e){var g=a[e];Ju(d,g,function(a){return Yd(a.extent,g)})||(this.r.call(this,g,b,c),Nu(d,g,{extent:g.slice()}))}};var Nx={terrain:{Ga:"jpg",opaque:!0},"terrain-background":{Ga:"jpg",opaque:!0},"terrain-labels":{Ga:"png",opaque:!1},"terrain-lines":{Ga:"png",opaque:!1},"toner-background":{Ga:"png",opaque:!0},toner:{Ga:"png",opaque:!0},"toner-hybrid":{Ga:"png",opaque:!1},"toner-labels":{Ga:"png",opaque:!1},"toner-lines":{Ga:"png",opaque:!1},"toner-lite":{Ga:"png",opaque:!0},watercolor:{Ga:"jpg",opaque:!0}},Ox={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:3,maxZoom:16}};
function Px(a){var b=a.layer.indexOf("-"),c=Nx[a.layer],d=Hb?"https:":"http:";Dx.call(this,{attributions:Qx,crossOrigin:"anonymous",maxZoom:Ox[-1==b?a.layer:a.layer.slice(0,b)].maxZoom,opaque:c.opaque,tileLoadFunction:a.tileLoadFunction,url:l(a.url)?a.url:d+"//{a-d}.tile.stamen.com/"+a.layer+"/{z}/{x}/{y}."+c.Ga})}t(Px,Dx);var Qx=[new qf({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),Gx];function Rx(a,b){fr.call(this,a,2);this.e=b.ia(a[0]);this.c={}}t(Rx,fr);Rx.prototype.b=function(a){a=l(a)?na(a):-1;if(a in this.c)return this.c[a];var b=this.e,c=lg(b,b);c.strokeStyle="black";c.strokeRect(.5,.5,b+.5,b+.5);c.fillStyle="black";c.textAlign="center";c.textBaseline="middle";c.font="24px sans-serif";c.fillText(kf(this.a),b/2,b/2);return this.c[a]=c.canvas};function Sx(a){dt.call(this,{opaque:!1,projection:a.projection,tileGrid:a.tileGrid});this.a=new Hw}t(Sx,dt);Sx.prototype.Ed=function(){return Iw(this.a)};
Sx.prototype.se=function(a){Jw(this.a,a)};Sx.prototype.Rb=function(a,b,c){var d=this.hb(a,b,c);if(Jv(this.a,d))return this.a.get(d);a=new Rx([a,b,c],this.tileGrid);this.a.set(d,a);return a};function Tx(a){Kw.call(this,{crossOrigin:a.crossOrigin,projection:Be("EPSG:3857"),state:"loading",tileLoadFunction:a.tileLoadFunction});xw(new vw(a.url),void 0,sa(this.a,this))}t(Tx,Kw);
Tx.prototype.a=function(a){var b=Be("EPSG:4326"),c=this.i,d;l(a.bounds)&&(d=te(a.bounds,Ae(b,c)));var e=a.minzoom||0,f=a.maxzoom||22;this.tileGrid=c=new Mw({extent:ct(c),maxZoom:f,minZoom:e});this.tileUrlFunction=Fw(c.c({extent:d}),Cw(a.tiles));if(l(a.attribution)){b=l(d)?d:b.s();d={};for(var g;e<=f;++e)g=e.toString(),d[g]=[Ys(c,b,e)];this.f=[new qf({html:a.attribution,tileRanges:d})]}Ts(this,"ready")};function Ux(a){ox.call(this,{attributions:a.attributions,format:a.format,logo:a.logo,projection:a.projection});this.r=a.tileGrid;this.k=Ew;this.u=this.r.c();this.p={};l(a.tileUrlFunction)?(this.k=a.tileUrlFunction,this.n()):l(a.urls)?(this.k=Cw(a.urls),this.n()):l(a.url)&&(this.k=Cw(Gw(a.url)),this.n())}t(Ux,ox);Ux.prototype.clear=function(){Cc(this.p)};
Ux.prototype.Kc=function(a,b,c,d){var e=this.r,f=this.p;b=Qb(e.a,b,0);a=Ys(e,a,b);for(var g,e=a.a;e<=a.d;++e)for(g=a.b;g<=a.c;++g){var h=f[b+"/"+e+"/"+g];if(l(h)){var m,n;m=0;for(n=h.length;m<n;++m){var p=c.call(d,h[m]);if(p)return p}}}};Ux.prototype.qa=function(){var a=this.p,b=[],c;for(c in a)db(b,a[c]);return b};
Ux.prototype.bd=function(a,b,c){var d=this.u,e=this.r,f=this.k,g=this.p;b=Qb(e.a,b,0);a=Ys(e,a,b);var e=[b,0,0],h,m;for(h=a.a;h<=a.d;++h)for(m=a.b;m<=a.c;++m){var n=b+"/"+h+"/"+m;if(!(n in g)){e[0]=b;e[1]=h;e[2]=m;d(e,c,e);var p=f(e,1,c);l(p)&&(g[n]=[],px(this,p,ta(function(a,b){g[a]=b;Ts(this,"ready")},n),this))}}};function Vx(a){a=l(a)?a:{};var b=l(a.params)?a.params:{};Kw.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,logo:a.logo,opaque:!v(b,"TRANSPARENT",!0),projection:a.projection,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,tileUrlFunction:sa(this.uh,this)});var c=a.urls;!l(c)&&l(a.url)&&(c=Gw(a.url));this.e=null!=c?c:[];this.g=l(a.gutter)?a.gutter:0;this.a=b;this.d=!0;this.k=a.serverType;this.o=l(a.hidpi)?a.hidpi:!0;this.p="";Wx(this);this.r=Sd();Xx(this)}t(Vx,Kw);k=Vx.prototype;
k.rh=function(a,b,c,d){c=Be(c);var e=this.tileGrid;null===e&&(e=et(this,c));b=$s(e,a[0],a[1],b,!1,void 0);if(!(e.a.length<=b[0])){var f=e.fa(b[0]),g=Xs(e,b,this.r),e=e.ia(b[0]),h=this.g;0!==h&&(e+=2*h,g=Vd(g,f*h,g));h={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:v(this.a,"LAYERS")};Hc(h,this.a,d);d=Math.floor((g[3]-a[1])/f);h[this.d?"I":"X"]=Math.floor((a[0]-g[0])/f);h[this.d?"J":"Y"]=d;return Yx(this,b,e,g,1,c,h)}};k.Mc=function(){return this.g};
k.hb=function(a,b,c){return this.p+Vx.K.hb.call(this,a,b,c)};k.sh=function(){return this.a};
function Yx(a,b,c,d,e,f,g){var h=a.e;if(0!=h.length){g.WIDTH=c;g.HEIGHT=c;g[a.d?"CRS":"SRS"]=f.a;"STYLES"in a.a||(g.STYLES=new String(""));if(1!=e)switch(a.k){case "geoserver":g.FORMAT_OPTIONS="dpi:"+(90*e+.5|0);break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e}c=f.b;a.d&&"ne"==c.substr(0,2)&&(a=d[0],d[0]=d[1],d[1]=a,a=d[2],d[2]=d[3],d[3]=a);g.BBOX=d.join(",");return un(wn([1==h.length?h[0]:h[Kb((b[1]<<b[0])+b[2],h.length)]],g))}}
k.pc=function(a,b,c){a=Vx.K.pc.call(this,a,b,c);return 1!=b&&this.o&&l(this.k)?a*b+.5|0:a};k.Kf=function(){return this.e};function Wx(a){var b=0,c=[],d,e;d=0;for(e=a.e.length;d<e;++d)c[b++]=a.e[d];for(var f in a.a)c[b++]=f+"-"+a.a[f];a.p=c.join("#")}k.th=function(a){a=l(a)?Gw(a):null;this.re(a)};k.re=function(a){this.e=null!=a?a:[];Wx(this);this.n()};
k.uh=function(a,b,c){var d=this.tileGrid;null===d&&(d=et(this,c));if(!(d.a.length<=a[0])){1==b||this.o&&l(this.k)||(b=1);var e=d.fa(a[0]),f=Xs(d,a,this.r),d=d.ia(a[0]),g=this.g;0!==g&&(d+=2*g,f=Vd(f,e*g,f));1!=b&&(d=d*b+.5|0);e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Hc(e,this.a);return Yx(this,a,d,f,b,c,e)}};k.vh=function(a){Hc(this.a,a);Wx(this);Xx(this);this.n()};function Xx(a){a.d=0<=Na(v(a.a,"VERSION","1.3.0"),"1.3")};function Zx(a){a=l(a)?a:{};$.call(this,{attributions:a.attributions,extent:a.extent,format:new Mp({defaultDataProjection:a.defaultProjection}),logo:a.logo,object:a.object,projection:a.projection,text:a.text,url:a.url})}t(Zx,$);function $x(a){this.d=a.matrixIds;Vs.call(this,{origin:a.origin,origins:a.origins,resolutions:a.resolutions,tileSize:a.tileSize,tileSizes:a.tileSizes})}t($x,Vs);$x.prototype.i=function(){return this.d};function ay(a){function b(a){a="KVP"==e?un(wn([a],g)):a.replace(/\{(\w+?)\}/g,function(a,b){return b in g?g[b]:a});return function(b){if(null!==b){var c={TileMatrix:f.d[b[0]],TileCol:b[1],TileRow:b[2]};Hc(c,h);b=a;return b="KVP"==e?un(wn([b],c)):b.replace(/\{(\w+?)\}/g,function(a,b){return c[b]})}}}var c=l(a.version)?a.version:"1.0.0",d=l(a.format)?a.format:"image/jpeg";this.a=l(a.dimensions)?a.dimensions:{};this.d="";by(this);var e=l(a.requestEncoding)?a.requestEncoding:"KVP",f=a.tileGrid,g={Layer:a.layer,
style:a.style,Style:a.style,TileMatrixSet:a.matrixSet};"KVP"==e&&Hc(g,{Service:"WMTS",Request:"GetTile",Version:c,Format:d});var h=this.a,c=Ew,d=a.urls;!l(d)&&l(a.url)&&(d=Gw(a.url));l(d)&&(c=Dw(Va(d,b)));var m=Sd(),n=[0,0,0],c=Fw(function(a,b,c){if(f.a.length<=a[0])return null;var d=a[1],e=-a[2]-1,g=Xs(f,a,m),h=b.s();null!==h&&b.f&&(b=Math.ceil(fe(h)/fe(g)),d=Kb(d,b),n[0]=a[0],n[1]=d,n[2]=a[2],g=Xs(f,n,m));return!pe(g,h)||pe(g,h)&&(g[0]==h[2]||g[2]==h[0]||g[1]==h[3]||g[3]==h[1])?null:gf(a[0],d,e,
c)},c);Kw.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,tileGrid:f,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:c})}t(ay,Kw);ay.prototype.e=function(){return this.a};ay.prototype.hb=function(a,b,c){return this.d+ay.K.hb.call(this,a,b,c)};function by(a){var b=0,c=[],d;for(d in a.a)c[b++]=d+"-"+a.a[d];a.d=c.join("/")}ay.prototype.g=function(a){Hc(this.a,a);by(this);this.n()};function cy(a){var b=l(a)?a:b;Vs.call(this,{origin:[0,0],resolutions:b.resolutions})}t(cy,Vs);cy.prototype.c=function(a){a=l(a)?a:{};var b=this.minZoom,c=this.maxZoom,d=null;if(l(a.extent)){var d=Array(c+1),e;for(e=0;e<=c;++e)d[e]=e<b?null:Ys(this,a.extent,e)}return function(a,e,h){e=a[0];if(e<b||c<e)return null;var m=Math.pow(2,e),n=a[1];if(0>n||m<=n)return null;a=a[2];return a<-m||-1<a||null!==d&&!nf(d[e],n,-a-1)?null:gf(e,n,-a-1,h)}};function dy(a){a=l(a)?a:{};var b=a.size,c=b[0],d=b[1],e=[],f=256;switch(l(a.tierSizeCalculation)?a.tierSizeCalculation:"default"){case "default":for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),f+=f;break;case "truncated":for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),c>>=1,d>>=1}e.push([1,1]);e.reverse();for(var f=[1],g=[0],d=1,c=e.length;d<c;d++)f.push(1<<d),g.push(e[d-1][0]*e[d-1][1]+g[d-1]);f.reverse();var f=new cy({resolutions:f}),h=a.url,b=Fw(f.c({extent:[0,0,b[0],b[1]]}),function(a){if(null!==
a){var b=a[0],c=a[1];a=a[2];return h+"TileGroup"+((c+a*e[b][0]+g[b])/256|0)+"/"+b+"-"+c+"-"+a+".jpg"}});Kw.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,logo:a.logo,tileClass:ey,tileGrid:f,tileUrlFunction:b})}t(dy,Kw);function ey(a,b,c,d,e){gr.call(this,a,b,c,d,e);this.g={}}t(ey,gr);
ey.prototype.b=function(a){var b=l(a)?na(a).toString():"";if(b in this.g)return this.g[b];a=ey.K.b.call(this,a);if(2==this.state){if(256==a.width&&256==a.height)return this.g[b]=a;var c=lg(256,256);c.drawImage(a,0,0);return this.g[b]=c.canvas}return a};s("ol.animation.bounce",function(a){var b=a.resolution,c=l(a.start)?a.start:ua(),d=l(a.duration)?a.duration:1E3,e=l(a.easing)?a.easing:cf;return function(a,g){if(g.time<c)return g.animate=!0,g.viewHints[0]+=1,!0;if(g.time<c+d){var h=e((g.time-c)/d),m=b-g.viewState.resolution;g.animate=!0;g.viewState.resolution+=h*m;g.viewHints[0]+=1;return!0}return!1}});s("ol.animation.pan",df);s("ol.animation.rotate",ef);s("ol.animation.zoom",ff);s("ol.Attribution",qf);qf.prototype.getHTML=qf.prototype.b;
Cg.prototype.element=Cg.prototype.element;s("ol.Collection",A);A.prototype.clear=A.prototype.clear;A.prototype.extend=A.prototype.je;A.prototype.forEach=A.prototype.forEach;A.prototype.getArray=A.prototype.Hg;A.prototype.item=A.prototype.item;A.prototype.getLength=A.prototype.xb;A.prototype.insertAt=A.prototype.Xc;A.prototype.pop=A.prototype.pop;A.prototype.push=A.prototype.push;A.prototype.remove=A.prototype.remove;A.prototype.removeAt=A.prototype.gd;A.prototype.setAt=A.prototype.si;
s("ol.coordinate.add",vd);s("ol.coordinate.createStringXY",function(a){return function(b){return Dd(b,a)}});s("ol.coordinate.format",zd);s("ol.coordinate.rotate",Bd);s("ol.coordinate.toStringHDMS",function(a){return l(a)?xd(a[1],"NS")+" "+xd(a[0],"EW"):""});s("ol.coordinate.toStringXY",Dd);s("ol.DeviceOrientation",D);D.prototype.getAlpha=D.prototype.e;D.prototype.getBeta=D.prototype.f;D.prototype.getGamma=D.prototype.g;D.prototype.getHeading=D.prototype.i;D.prototype.getTracking=D.prototype.d;
D.prototype.setTracking=D.prototype.b;s("ol.easing.easeIn",function(a){return Math.pow(a,3)});s("ol.easing.easeOut",$e);s("ol.easing.inAndOut",af);s("ol.easing.linear",bf);s("ol.easing.upAndDown",cf);s("ol.extent.boundingExtent",Rd);s("ol.extent.buffer",Vd);s("ol.extent.containsCoordinate",function(a,b){return a[0]<=b[0]&&b[0]<=a[2]&&a[1]<=b[1]&&b[1]<=a[3]});s("ol.extent.containsExtent",Yd);s("ol.extent.createEmpty",Sd);s("ol.extent.equals",ae);s("ol.extent.extend",be);
s("ol.extent.getBottomLeft",he);s("ol.extent.getBottomRight",ie);s("ol.extent.getCenter",je);s("ol.extent.getHeight",ge);s("ol.extent.getSize",function(a){return[a[2]-a[0],a[3]-a[1]]});s("ol.extent.getTopLeft",le);s("ol.extent.getTopRight",me);s("ol.extent.getWidth",fe);s("ol.extent.intersects",pe);s("ol.extent.isEmpty",ee);s("ol.extent.applyTransform",te);s("ol.Feature",G);G.prototype.clone=G.prototype.clone;G.prototype.getGeometry=G.prototype.J;G.prototype.getId=G.prototype.tf;
G.prototype.getGeometryName=G.prototype.sf;G.prototype.getStyle=G.prototype.Ng;G.prototype.getStyleFunction=G.prototype.Og;G.prototype.setGeometry=G.prototype.Ba;G.prototype.setStyle=G.prototype.i;G.prototype.setId=G.prototype.b;G.prototype.setGeometryName=G.prototype.e;s("ol.FeatureOverlay",bk);bk.prototype.addFeature=bk.prototype.ke;bk.prototype.getFeatures=bk.prototype.Ig;bk.prototype.removeFeature=bk.prototype.cd;bk.prototype.setFeatures=bk.prototype.xc;bk.prototype.setMap=bk.prototype.setMap;
bk.prototype.setStyle=bk.prototype.me;bk.prototype.getStyle=bk.prototype.Jg;bk.prototype.getStyleFunction=bk.prototype.Kg;s("ol.Geolocation",N);N.prototype.getAccuracy=N.prototype.Zd;N.prototype.getAccuracyGeometry=N.prototype.o;N.prototype.getAltitude=N.prototype.q;N.prototype.getAltitudeAccuracy=N.prototype.r;N.prototype.getHeading=N.prototype.D;N.prototype.getPosition=N.prototype.F;N.prototype.getProjection=N.prototype.g;N.prototype.getSpeed=N.prototype.u;N.prototype.getTracking=N.prototype.i;
N.prototype.getTrackingOptions=N.prototype.f;N.prototype.setProjection=N.prototype.l;N.prototype.setTracking=N.prototype.e;N.prototype.setTrackingOptions=N.prototype.k;s("ol.Graticule",Xq);Xq.prototype.getMap=Xq.prototype.Rg;Xq.prototype.getMeridians=Xq.prototype.Bf;Xq.prototype.getParallels=Xq.prototype.Ef;Xq.prototype.setMap=Xq.prototype.setMap;s("ol.has.DEVICE_PIXEL_RATIO",sg);s("ol.has.CANVAS",vg);s("ol.has.DEVICE_ORIENTATION",wg);s("ol.has.GEOLOCATION",xg);s("ol.has.TOUCH",yg);
s("ol.has.WEBGL",Bg);gr.prototype.getImage=gr.prototype.b;s("ol.Kinetic",ps);s("ol.loadingstrategy.all",function(){return[[-Infinity,-Infinity,Infinity,Infinity]]});s("ol.loadingstrategy.bbox",mw);s("ol.loadingstrategy.createTile",function(a){return function(b,c){var d=Qb(a.a,c,0),e=Ys(a,b,d),f=[],d=[d,0,0];for(d[1]=e.a;d[1]<=e.d;++d[1])for(d[2]=e.b;d[2]<=e.c;++d[2])f.push(Xs(a,d));return f}});s("ol.Map",W);W.prototype.addControl=W.prototype.We;W.prototype.addInteraction=W.prototype.Xe;
W.prototype.addLayer=W.prototype.Ye;W.prototype.addOverlay=W.prototype.Ze;W.prototype.beforeRender=W.prototype.Ea;W.prototype.forEachFeatureAtPixel=W.prototype.Cd;W.prototype.getEventCoordinate=W.prototype.qf;W.prototype.getEventPixel=W.prototype.xd;W.prototype.getTarget=W.prototype.rc;W.prototype.getCoordinateFromPixel=W.prototype.ta;W.prototype.getControls=W.prototype.pf;W.prototype.getOverlays=W.prototype.Df;W.prototype.getInteractions=W.prototype.uf;W.prototype.getLayerGroup=W.prototype.ib;
W.prototype.getLayers=W.prototype.Ue;W.prototype.getPixelFromCoordinate=W.prototype.f;W.prototype.getSize=W.prototype.e;W.prototype.getView=W.prototype.a;W.prototype.getViewport=W.prototype.Lf;W.prototype.renderSync=W.prototype.pi;W.prototype.render=W.prototype.O;W.prototype.removeControl=W.prototype.ji;W.prototype.removeInteraction=W.prototype.li;W.prototype.removeLayer=W.prototype.mi;W.prototype.removeOverlay=W.prototype.ni;W.prototype.setLayerGroup=W.prototype.Je;W.prototype.setSize=W.prototype.D;
W.prototype.setTarget=W.prototype.sa;W.prototype.setView=W.prototype.Va;W.prototype.updateSize=W.prototype.F;ji.prototype.originalEvent=ji.prototype.originalEvent;ji.prototype.pixel=ji.prototype.pixel;ji.prototype.coordinate=ji.prototype.coordinate;ji.prototype.preventDefault=ji.prototype.preventDefault;ji.prototype.stopPropagation=ji.prototype.d;Rg.prototype.map=Rg.prototype.map;Rg.prototype.frameState=Rg.prototype.frameState;md.prototype.key=md.prototype.key;nd.prototype.transform=nd.prototype.d;
s("ol.Object",pd);pd.prototype.bindTo=pd.prototype.Z;pd.prototype.get=pd.prototype.get;pd.prototype.getKeys=pd.prototype.N;pd.prototype.getProperties=pd.prototype.R;pd.prototype.set=pd.prototype.set;pd.prototype.setProperties=pd.prototype.L;pd.prototype.unbind=pd.prototype.Y;pd.prototype.unbindAll=pd.prototype.$;s("ol.Observable",ld);ld.prototype.dispatchChangeEvent=ld.prototype.n;ld.prototype.getRevision=ld.prototype.A;ld.prototype.on=ld.prototype.t;ld.prototype.once=ld.prototype.B;
ld.prototype.un=ld.prototype.v;ld.prototype.unByKey=ld.prototype.C;s("ol.inherits",t);s("ol.Overlay",Z);Z.prototype.getElement=Z.prototype.i;Z.prototype.getMap=Z.prototype.e;Z.prototype.getOffset=Z.prototype.f;Z.prototype.getPosition=Z.prototype.l;Z.prototype.getPositioning=Z.prototype.g;Z.prototype.setElement=Z.prototype.Nd;Z.prototype.setMap=Z.prototype.setMap;Z.prototype.setOffset=Z.prototype.k;Z.prototype.setPosition=Z.prototype.o;Z.prototype.setPositioning=Z.prototype.q;
fr.prototype.getTileCoord=fr.prototype.i;s("ol.View",z);z.prototype.constrainCenter=z.prototype.g;z.prototype.constrainResolution=z.prototype.constrainResolution;z.prototype.constrainRotation=z.prototype.constrainRotation;z.prototype.getCenter=z.prototype.a;z.prototype.calculateExtent=z.prototype.D;z.prototype.getProjection=z.prototype.F;z.prototype.getResolution=z.prototype.b;z.prototype.getResolutionForExtent=z.prototype.i;z.prototype.getRotation=z.prototype.e;z.prototype.getZoom=z.prototype.Of;
z.prototype.fitExtent=z.prototype.Yd;z.prototype.fitGeometry=z.prototype.lf;z.prototype.centerOn=z.prototype.ff;z.prototype.rotate=z.prototype.rotate;z.prototype.setCenter=z.prototype.Ka;z.prototype.setResolution=z.prototype.d;z.prototype.setRotation=z.prototype.q;z.prototype.setZoom=z.prototype.Q;s("ol.webgl.Context",Mv);Mv.prototype.getGL=Mv.prototype.Mh;Mv.prototype.useProgram=Mv.prototype.Fd;s("ol.tilegrid.TileGrid",Vs);Vs.prototype.getMaxZoom=Vs.prototype.Oc;Vs.prototype.getMinZoom=Vs.prototype.Pc;
Vs.prototype.getOrigin=Vs.prototype.mb;Vs.prototype.getResolution=Vs.prototype.fa;Vs.prototype.getResolutions=Vs.prototype.fd;Vs.prototype.getTileSize=Vs.prototype.ia;s("ol.tilegrid.WMTS",$x);$x.prototype.getMatrixIds=$x.prototype.i;s("ol.tilegrid.XYZ",Mw);s("ol.tilegrid.Zoomify",cy);s("ol.style.Circle",Ki);Ki.prototype.getAnchor=Ki.prototype.Pb;Ki.prototype.getFill=Ki.prototype.wh;Ki.prototype.getImage=Ki.prototype.sc;Ki.prototype.getOrigin=Ki.prototype.Wb;Ki.prototype.getRadius=Ki.prototype.xh;
Ki.prototype.getSize=Ki.prototype.lb;Ki.prototype.getStroke=Ki.prototype.yh;s("ol.style.Fill",Hi);Hi.prototype.getColor=Hi.prototype.c;s("ol.style.Icon",Rn);Rn.prototype.getAnchor=Rn.prototype.Pb;Rn.prototype.getImage=Rn.prototype.sc;Rn.prototype.getOrigin=Rn.prototype.Wb;Rn.prototype.getSrc=Rn.prototype.zh;Rn.prototype.getSize=Rn.prototype.lb;Ii.prototype.getRotation=Ii.prototype.l;Ii.prototype.getScale=Ii.prototype.k;s("ol.style.Stroke",Ji);Ji.prototype.getColor=Ji.prototype.Ah;
Ji.prototype.getLineCap=Ji.prototype.xf;Ji.prototype.getLineDash=Ji.prototype.Bh;Ji.prototype.getLineJoin=Ji.prototype.yf;Ji.prototype.getMiterLimit=Ji.prototype.Cf;Ji.prototype.getWidth=Ji.prototype.Ch;s("ol.style.Style",Li);Li.prototype.getFill=Li.prototype.Dh;Li.prototype.getImage=Li.prototype.Eh;Li.prototype.getStroke=Li.prototype.Fh;Li.prototype.getText=Li.prototype.Gh;Li.prototype.getZIndex=Li.prototype.Nf;s("ol.style.Text",Un);Un.prototype.getFont=Un.prototype.rf;Un.prototype.getFill=Un.prototype.Hh;
Un.prototype.getRotation=Un.prototype.Ih;Un.prototype.getScale=Un.prototype.Jh;Un.prototype.getStroke=Un.prototype.Kh;Un.prototype.getText=Un.prototype.Lh;Un.prototype.getTextAlign=Un.prototype.Hf;Un.prototype.getTextBaseline=Un.prototype.If;s("ol.Sphere",ue);s("ol.source.BingMaps",Nw);s("ol.source.BingMaps.TOS_ATTRIBUTION",Ow);s("ol.source.Cluster",Pw);ox.prototype.readFeatures=ox.prototype.a;s("ol.source.GeoJSON",qx);s("ol.source.GPX",rx);s("ol.source.IGC",sx);s("ol.source.ImageCanvas",tx);
s("ol.source.ImageMapGuide",ux);ux.prototype.getParams=ux.prototype.D;ux.prototype.updateParams=ux.prototype.Q;s("ol.source.ImageStatic",vx);s("ol.source.ImageVector",wx);wx.prototype.getSource=wx.prototype.jh;s("ol.source.ImageWMS",yx);yx.prototype.getGetFeatureInfoUrl=yx.prototype.mh;yx.prototype.getParams=yx.prototype.nh;yx.prototype.getUrl=yx.prototype.oh;yx.prototype.setUrl=yx.prototype.ph;yx.prototype.updateParams=yx.prototype.qh;s("ol.source.KML",Cx);s("ol.source.MapQuest",Ix);
s("ol.source.OSM",Ex);s("ol.source.OSM.DATA_ATTRIBUTION",Gx);s("ol.source.OSM.TILE_ATTRIBUTION",Hx);s("ol.source.OSMXML",Lx);s("ol.source.ServerVector",Mx);Mx.prototype.readFeatures=Mx.prototype.a;Ss.prototype.getAttributions=Ss.prototype.U;Ss.prototype.getLogo=Ss.prototype.S;Ss.prototype.getProjection=Ss.prototype.V;Ss.prototype.getState=Ss.prototype.W;s("ol.source.Stamen",Px);s("ol.source.StaticVector",$);s("ol.source.TileDebug",Sx);s("ol.source.TileImage",Kw);Kw.prototype.getTileLoadFunction=Kw.prototype.Ra;
Kw.prototype.getTileUrlFunction=Kw.prototype.Sa;Kw.prototype.setTileLoadFunction=Kw.prototype.Ua;Kw.prototype.setTileUrlFunction=Kw.prototype.ha;s("ol.source.TileJSON",Tx);dt.prototype.getTileGrid=dt.prototype.wa;s("ol.source.TileVector",Ux);s("ol.source.TileWMS",Vx);Vx.prototype.getGetFeatureInfoUrl=Vx.prototype.rh;Vx.prototype.getParams=Vx.prototype.sh;Vx.prototype.getUrls=Vx.prototype.Kf;Vx.prototype.setUrl=Vx.prototype.th;Vx.prototype.setUrls=Vx.prototype.re;Vx.prototype.updateParams=Vx.prototype.vh;
s("ol.source.TopoJSON",Zx);s("ol.source.Vector",Qu);Qu.prototype.addFeature=Qu.prototype.za;Qu.prototype.addFeatures=Qu.prototype.oa;Qu.prototype.clear=Qu.prototype.clear;Qu.prototype.forEachFeature=Qu.prototype.Ha;Qu.prototype.forEachFeatureInExtent=Qu.prototype.pa;Qu.prototype.getFeatures=Qu.prototype.qa;Qu.prototype.getFeaturesAtCoordinate=Qu.prototype.va;Qu.prototype.getClosestFeatureToCoordinate=Qu.prototype.Ia;Qu.prototype.getExtent=Qu.prototype.s;Qu.prototype.getFeatureById=Qu.prototype.ua;
Qu.prototype.removeFeature=Qu.prototype.Ma;Su.prototype.feature=Su.prototype.feature;s("ol.source.WMTS",ay);ay.prototype.getDimensions=ay.prototype.e;ay.prototype.updateDimensions=ay.prototype.g;s("ol.source.XYZ",Dx);Dx.prototype.setTileUrlFunction=Dx.prototype.ha;Dx.prototype.setUrl=Dx.prototype.a;s("ol.source.Zoomify",dy);Pi.prototype.vectorContext=Pi.prototype.vectorContext;Pi.prototype.frameState=Pi.prototype.frameState;Pi.prototype.context=Pi.prototype.context;Pi.prototype.glContext=Pi.prototype.glContext;
St.prototype.drawAsync=St.prototype.Ic;St.prototype.drawCircleGeometry=St.prototype.jc;St.prototype.drawFeature=St.prototype.Wd;St.prototype.drawPointGeometry=St.prototype.nc;St.prototype.drawMultiPointGeometry=St.prototype.lc;St.prototype.drawLineStringGeometry=St.prototype.sb;St.prototype.drawMultiLineStringGeometry=St.prototype.kc;St.prototype.drawPolygonGeometry=St.prototype.Ob;St.prototype.drawMultiPolygonGeometry=St.prototype.mc;St.prototype.setFillStrokeStyle=St.prototype.Aa;
St.prototype.setImageStyle=St.prototype.$b;St.prototype.setTextStyle=St.prototype.Ca;s("ol.proj.common.add",Rt);s("ol.proj.METERS_PER_UNIT",xe);s("ol.proj.Projection",ye);ye.prototype.getCode=ye.prototype.mf;ye.prototype.getExtent=ye.prototype.s;ye.prototype.getUnits=ye.prototype.fh;ye.prototype.getMetersPerUnit=ye.prototype.ae;ye.prototype.getWorldExtent=ye.prototype.Mf;ye.prototype.isGlobal=ye.prototype.rg;ye.prototype.setExtent=ye.prototype.gh;ye.prototype.setWorldExtent=ye.prototype.wi;
s("ol.proj.addEquivalentProjections",Ee);s("ol.proj.addProjection",Ne);s("ol.proj.addCoordinateTransforms",Pe);s("ol.proj.get",Be);s("ol.proj.getTransform",Se);s("ol.proj.transform",function(a,b,c){return Se(b,c)(a)});s("ol.proj.transformExtent",Ue);s("ol.layer.Heatmap",X);X.prototype.getGradient=X.prototype.sa;X.prototype.setGradient=X.prototype.Kb;s("ol.layer.Image",S);s("ol.layer.Layer",P);P.prototype.getSource=P.prototype.ma;O.prototype.getBrightness=O.prototype.d;O.prototype.getContrast=O.prototype.e;
O.prototype.getHue=O.prototype.f;O.prototype.getExtent=O.prototype.s;O.prototype.getMaxResolution=O.prototype.g;O.prototype.getMinResolution=O.prototype.i;O.prototype.getOpacity=O.prototype.k;O.prototype.getSaturation=O.prototype.l;O.prototype.getVisible=O.prototype.b;O.prototype.setBrightness=O.prototype.q;O.prototype.setContrast=O.prototype.r;O.prototype.setHue=O.prototype.u;O.prototype.setExtent=O.prototype.o;O.prototype.setMaxResolution=O.prototype.D;O.prototype.setMinResolution=O.prototype.F;
O.prototype.setOpacity=O.prototype.Q;O.prototype.setSaturation=O.prototype.X;O.prototype.setVisible=O.prototype.ba;s("ol.layer.Group",R);R.prototype.getLayers=R.prototype.Ab;R.prototype.setLayers=R.prototype.aa;s("ol.layer.Tile",T);T.prototype.getPreload=T.prototype.aa;T.prototype.setPreload=T.prototype.na;T.prototype.getUseInterimTilesOnError=T.prototype.ea;T.prototype.setUseInterimTilesOnError=T.prototype.sa;s("ol.layer.Vector",V);V.prototype.getStyle=V.prototype.ac;
V.prototype.getStyleFunction=V.prototype.Cc;V.prototype.setStyle=V.prototype.na;s("ol.interaction.DoubleClickZoom",nr);s("ol.interaction.DragAndDrop",fs);gs.prototype.features=gs.prototype.features;gs.prototype.file=gs.prototype.file;gs.prototype.projection=gs.prototype.projection;ns.prototype.coordinate=ns.prototype.coordinate;s("ol.interaction.DragBox",os);os.prototype.getGeometry=os.prototype.J;s("ol.interaction.DragPan",ss);s("ol.interaction.DragRotateAndZoom",us);
s("ol.interaction.DragRotate",vs);s("ol.interaction.DragZoom",ws);Tv.prototype.feature=Tv.prototype.feature;s("ol.interaction.Draw",Uv);s("ol.interaction.defaults",Kt);s("ol.interaction.KeyboardPan",Ft);s("ol.interaction.KeyboardZoom",Gt);s("ol.interaction.Modify",dw);s("ol.interaction.MouseWheelZoom",Ht);s("ol.interaction.PinchRotate",It);s("ol.interaction.PinchZoom",Jt);s("ol.interaction.Select",iw);iw.prototype.getFeatures=iw.prototype.eh;iw.prototype.setMap=iw.prototype.setMap;
s("ol.geom.Circle",Zi);Zi.prototype.clone=Zi.prototype.clone;Zi.prototype.getCenter=Zi.prototype.Dd;Zi.prototype.getExtent=Zi.prototype.s;Zi.prototype.getRadius=Zi.prototype.pe;Zi.prototype.getType=Zi.prototype.G;Zi.prototype.setCenter=Zi.prototype.Wg;Zi.prototype.setCenterAndRadius=Zi.prototype.He;Zi.prototype.setRadius=Zi.prototype.vi;s("ol.geom.Geometry",Di);Di.prototype.clone=Di.prototype.clone;Di.prototype.getClosestPoint=Di.prototype.g;Di.prototype.getExtent=Di.prototype.s;
Di.prototype.getType=Di.prototype.G;Di.prototype.applyTransform=Di.prototype.Mb;Di.prototype.transform=Di.prototype.f;s("ol.geom.GeometryCollection",aj);aj.prototype.clone=aj.prototype.clone;aj.prototype.getExtent=aj.prototype.s;aj.prototype.getGeometries=aj.prototype.$d;aj.prototype.getType=aj.prototype.G;aj.prototype.setGeometries=aj.prototype.Ie;s("ol.geom.LinearRing",Dj);Dj.prototype.clone=Dj.prototype.clone;Dj.prototype.getArea=Dj.prototype.Zg;Dj.prototype.getCoordinates=Dj.prototype.H;
Dj.prototype.getType=Dj.prototype.G;Dj.prototype.setCoordinates=Dj.prototype.P;s("ol.geom.LineString",H);H.prototype.appendCoordinate=H.prototype.$e;H.prototype.clone=H.prototype.clone;H.prototype.getCoordinateAtM=H.prototype.Xg;H.prototype.getCoordinates=H.prototype.H;H.prototype.getLength=H.prototype.Yg;H.prototype.getType=H.prototype.G;H.prototype.setCoordinates=H.prototype.P;s("ol.geom.MultiLineString",uj);uj.prototype.appendLineString=uj.prototype.af;uj.prototype.clone=uj.prototype.clone;
uj.prototype.getCoordinateAtM=uj.prototype.$g;uj.prototype.getCoordinates=uj.prototype.H;uj.prototype.getLineString=uj.prototype.zf;uj.prototype.getLineStrings=uj.prototype.oc;uj.prototype.getType=uj.prototype.G;uj.prototype.setCoordinates=uj.prototype.P;s("ol.geom.MultiPoint",Aj);Aj.prototype.appendPoint=Aj.prototype.cf;Aj.prototype.clone=Aj.prototype.clone;Aj.prototype.getCoordinates=Aj.prototype.H;Aj.prototype.getPoint=Aj.prototype.Ff;Aj.prototype.getPoints=Aj.prototype.Qc;
Aj.prototype.getType=Aj.prototype.G;Aj.prototype.setCoordinates=Aj.prototype.P;s("ol.geom.MultiPolygon",Pj);Pj.prototype.appendPolygon=Pj.prototype.df;Pj.prototype.clone=Pj.prototype.clone;Pj.prototype.getArea=Pj.prototype.ah;Pj.prototype.getCoordinates=Pj.prototype.H;Pj.prototype.getInteriorPoints=Pj.prototype.wf;Pj.prototype.getPolygon=Pj.prototype.Gf;Pj.prototype.getPolygons=Pj.prototype.Rc;Pj.prototype.getType=Pj.prototype.G;Pj.prototype.setCoordinates=Pj.prototype.P;s("ol.geom.Point",yj);
yj.prototype.clone=yj.prototype.clone;yj.prototype.getCoordinates=yj.prototype.H;yj.prototype.getType=yj.prototype.G;yj.prototype.setCoordinates=yj.prototype.P;s("ol.geom.Polygon",I);I.prototype.appendLinearRing=I.prototype.bf;I.prototype.clone=I.prototype.clone;I.prototype.getArea=I.prototype.bh;I.prototype.getCoordinates=I.prototype.H;I.prototype.getInteriorPoint=I.prototype.vf;I.prototype.getLinearRing=I.prototype.Af;I.prototype.getLinearRings=I.prototype.Nc;I.prototype.getType=I.prototype.G;
I.prototype.setCoordinates=I.prototype.P;s("ol.geom.Polygon.circular",Oj);s("ol.geom.SimpleGeometry",Ri);Ri.prototype.getExtent=Ri.prototype.s;Ri.prototype.getFirstCoordinate=Ri.prototype.Xa;Ri.prototype.getLastCoordinate=Ri.prototype.Ya;Ri.prototype.getLayout=Ri.prototype.Za;s("ol.format.Feature",dk);s("ol.format.GeoJSON",nk);nk.prototype.readFeature=nk.prototype.ob;nk.prototype.readFeatures=nk.prototype.la;nk.prototype.readGeometry=nk.prototype.uc;nk.prototype.readProjection=nk.prototype.ra;
nk.prototype.writeFeature=nk.prototype.md;nk.prototype.writeFeatures=nk.prototype.Hb;nk.prototype.writeGeometry=nk.prototype.Ac;s("ol.format.GML",wl);wl.prototype.readFeatures=wl.prototype.la;wl.prototype.writeFeatures=wl.prototype.Hb;s("ol.format.GPX",zm);zm.prototype.readFeature=zm.prototype.ob;zm.prototype.readFeatures=zm.prototype.la;zm.prototype.readProjection=zm.prototype.ra;zm.prototype.writeFeatures=zm.prototype.Hb;s("ol.format.IGC",kn);kn.prototype.readFeature=kn.prototype.ob;
kn.prototype.readFeatures=kn.prototype.la;kn.prototype.readProjection=kn.prototype.ra;s("ol.format.KML",Vn);Vn.prototype.readFeature=Vn.prototype.ob;Vn.prototype.readFeatures=Vn.prototype.la;Vn.prototype.readName=Vn.prototype.fi;Vn.prototype.readProjection=Vn.prototype.ra;Vn.prototype.writeFeatures=Vn.prototype.Hb;s("ol.format.OSMXML",xp);xp.prototype.readFeatures=xp.prototype.la;xp.prototype.readProjection=xp.prototype.ra;s("ol.format.Polyline",Hp);s("ol.format.Polyline.encodeDeltas",Ip);
s("ol.format.Polyline.decodeDeltas",Kp);s("ol.format.Polyline.encodeFloats",Jp);s("ol.format.Polyline.decodeFloats",Lp);Hp.prototype.readFeature=Hp.prototype.ob;Hp.prototype.readFeatures=Hp.prototype.la;Hp.prototype.readGeometry=Hp.prototype.uc;Hp.prototype.readProjection=Hp.prototype.ra;Hp.prototype.writeGeometry=Hp.prototype.Ac;s("ol.format.TopoJSON",Mp);Mp.prototype.readFeatures=Mp.prototype.la;Mp.prototype.readProjection=Mp.prototype.ra;s("ol.format.WFS",Sp);Sp.prototype.readFeatures=Sp.prototype.la;
Sp.prototype.readTransactionResponse=Sp.prototype.o;Sp.prototype.readFeatureCollectionMetadata=Sp.prototype.k;Sp.prototype.writeGetFeature=Sp.prototype.q;Sp.prototype.writeTransaction=Sp.prototype.r;Sp.prototype.readProjection=Sp.prototype.ra;s("ol.format.WKT",eq);eq.prototype.readFeature=eq.prototype.ob;eq.prototype.readFeatures=eq.prototype.la;eq.prototype.readGeometry=eq.prototype.uc;eq.prototype.writeFeature=eq.prototype.md;eq.prototype.writeFeatures=eq.prototype.Hb;
eq.prototype.writeGeometry=eq.prototype.Ac;s("ol.format.WMSCapabilities",wq);wq.prototype.read=wq.prototype.a;s("ol.events.condition.altKeyOnly",function(a){a=a.a;return a.c&&!a.i&&!a.e});s("ol.events.condition.altShiftKeysOnly",xi);s("ol.events.condition.always",dd);s("ol.events.condition.click",function(a){return a.type==ni});s("ol.events.condition.mouseMove",function(a){return"mousemove"==a.originalEvent.type});s("ol.events.condition.never",cd);s("ol.events.condition.singleClick",yi);
s("ol.events.condition.noModifierKeys",zi);s("ol.events.condition.platformModifierKeyOnly",function(a){a=a.a;return!a.c&&a.i&&!a.e});s("ol.events.condition.shiftKeyOnly",Ai);s("ol.events.condition.targetNotEditable",Bi);s("ol.events.condition.mouseOnly",Ci);s("ol.dom.Input",ii);ii.prototype.getChecked=ii.prototype.b;ii.prototype.getValue=ii.prototype.d;ii.prototype.setValue=ii.prototype.f;ii.prototype.setChecked=ii.prototype.e;s("ol.control.Attribution",Bh);Bh.prototype.getCollapsible=Bh.prototype.of;
Bh.prototype.setCollapsible=Bh.prototype.ui;Bh.prototype.setCollapsed=Bh.prototype.ti;Bh.prototype.getCollapsed=Bh.prototype.nf;s("ol.control.Control",Sg);Sg.prototype.getMap=Sg.prototype.d;Sg.prototype.setMap=Sg.prototype.setMap;s("ol.control.defaults",Hh);s("ol.control.FullScreen",Mh);s("ol.control.MousePosition",C);C.prototype.getCoordinateFormat=C.prototype.g;C.prototype.getProjection=C.prototype.k;C.prototype.setMap=C.prototype.setMap;C.prototype.setCoordinateFormat=C.prototype.q;
C.prototype.setProjection=C.prototype.o;s("ol.control.Rotate",Dh);s("ol.control.ScaleLine",Ph);Ph.prototype.getUnits=Ph.prototype.k;Ph.prototype.setUnits=Ph.prototype.o;s("ol.control.Zoom",Fh);s("ol.control.ZoomSlider",ci);s("ol.control.ZoomToExtent",gi);s("ol.color.asArray",Hg);s("ol.color.asString",Jg);pd.prototype.dispatchChangeEvent=pd.prototype.n;pd.prototype.getRevision=pd.prototype.A;pd.prototype.on=pd.prototype.t;pd.prototype.once=pd.prototype.B;pd.prototype.un=pd.prototype.v;
pd.prototype.unByKey=pd.prototype.C;A.prototype.bindTo=A.prototype.Z;A.prototype.get=A.prototype.get;A.prototype.getKeys=A.prototype.N;A.prototype.getProperties=A.prototype.R;A.prototype.set=A.prototype.set;A.prototype.setProperties=A.prototype.L;A.prototype.unbind=A.prototype.Y;A.prototype.unbindAll=A.prototype.$;A.prototype.dispatchChangeEvent=A.prototype.n;A.prototype.getRevision=A.prototype.A;A.prototype.on=A.prototype.t;A.prototype.once=A.prototype.B;A.prototype.un=A.prototype.v;
A.prototype.unByKey=A.prototype.C;D.prototype.bindTo=D.prototype.Z;D.prototype.get=D.prototype.get;D.prototype.getKeys=D.prototype.N;D.prototype.getProperties=D.prototype.R;D.prototype.set=D.prototype.set;D.prototype.setProperties=D.prototype.L;D.prototype.unbind=D.prototype.Y;D.prototype.unbindAll=D.prototype.$;D.prototype.dispatchChangeEvent=D.prototype.n;D.prototype.getRevision=D.prototype.A;D.prototype.on=D.prototype.t;D.prototype.once=D.prototype.B;D.prototype.un=D.prototype.v;
D.prototype.unByKey=D.prototype.C;G.prototype.bindTo=G.prototype.Z;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.N;G.prototype.getProperties=G.prototype.R;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.L;G.prototype.unbind=G.prototype.Y;G.prototype.unbindAll=G.prototype.$;G.prototype.dispatchChangeEvent=G.prototype.n;G.prototype.getRevision=G.prototype.A;G.prototype.on=G.prototype.t;G.prototype.once=G.prototype.B;G.prototype.un=G.prototype.v;
G.prototype.unByKey=G.prototype.C;N.prototype.bindTo=N.prototype.Z;N.prototype.get=N.prototype.get;N.prototype.getKeys=N.prototype.N;N.prototype.getProperties=N.prototype.R;N.prototype.set=N.prototype.set;N.prototype.setProperties=N.prototype.L;N.prototype.unbind=N.prototype.Y;N.prototype.unbindAll=N.prototype.$;N.prototype.dispatchChangeEvent=N.prototype.n;N.prototype.getRevision=N.prototype.A;N.prototype.on=N.prototype.t;N.prototype.once=N.prototype.B;N.prototype.un=N.prototype.v;
N.prototype.unByKey=N.prototype.C;gr.prototype.getTileCoord=gr.prototype.i;W.prototype.bindTo=W.prototype.Z;W.prototype.get=W.prototype.get;W.prototype.getKeys=W.prototype.N;W.prototype.getProperties=W.prototype.R;W.prototype.set=W.prototype.set;W.prototype.setProperties=W.prototype.L;W.prototype.unbind=W.prototype.Y;W.prototype.unbindAll=W.prototype.$;W.prototype.dispatchChangeEvent=W.prototype.n;W.prototype.getRevision=W.prototype.A;W.prototype.on=W.prototype.t;W.prototype.once=W.prototype.B;
W.prototype.un=W.prototype.v;W.prototype.unByKey=W.prototype.C;ji.prototype.map=ji.prototype.map;ji.prototype.frameState=ji.prototype.frameState;ki.prototype.originalEvent=ki.prototype.originalEvent;ki.prototype.pixel=ki.prototype.pixel;ki.prototype.coordinate=ki.prototype.coordinate;ki.prototype.preventDefault=ki.prototype.preventDefault;ki.prototype.stopPropagation=ki.prototype.d;ki.prototype.map=ki.prototype.map;ki.prototype.frameState=ki.prototype.frameState;Z.prototype.bindTo=Z.prototype.Z;
Z.prototype.get=Z.prototype.get;Z.prototype.getKeys=Z.prototype.N;Z.prototype.getProperties=Z.prototype.R;Z.prototype.set=Z.prototype.set;Z.prototype.setProperties=Z.prototype.L;Z.prototype.unbind=Z.prototype.Y;Z.prototype.unbindAll=Z.prototype.$;Z.prototype.dispatchChangeEvent=Z.prototype.n;Z.prototype.getRevision=Z.prototype.A;Z.prototype.on=Z.prototype.t;Z.prototype.once=Z.prototype.B;Z.prototype.un=Z.prototype.v;Z.prototype.unByKey=Z.prototype.C;z.prototype.bindTo=z.prototype.Z;
z.prototype.get=z.prototype.get;z.prototype.getKeys=z.prototype.N;z.prototype.getProperties=z.prototype.R;z.prototype.set=z.prototype.set;z.prototype.setProperties=z.prototype.L;z.prototype.unbind=z.prototype.Y;z.prototype.unbindAll=z.prototype.$;z.prototype.dispatchChangeEvent=z.prototype.n;z.prototype.getRevision=z.prototype.A;z.prototype.on=z.prototype.t;z.prototype.once=z.prototype.B;z.prototype.un=z.prototype.v;z.prototype.unByKey=z.prototype.C;$x.prototype.getMaxZoom=$x.prototype.Oc;
$x.prototype.getMinZoom=$x.prototype.Pc;$x.prototype.getOrigin=$x.prototype.mb;$x.prototype.getResolution=$x.prototype.fa;$x.prototype.getResolutions=$x.prototype.fd;$x.prototype.getTileSize=$x.prototype.ia;Mw.prototype.getMaxZoom=Mw.prototype.Oc;Mw.prototype.getMinZoom=Mw.prototype.Pc;Mw.prototype.getOrigin=Mw.prototype.mb;Mw.prototype.getResolution=Mw.prototype.fa;Mw.prototype.getResolutions=Mw.prototype.fd;Mw.prototype.getTileSize=Mw.prototype.ia;cy.prototype.getMaxZoom=cy.prototype.Oc;
cy.prototype.getMinZoom=cy.prototype.Pc;cy.prototype.getOrigin=cy.prototype.mb;cy.prototype.getResolution=cy.prototype.fa;cy.prototype.getResolutions=cy.prototype.fd;cy.prototype.getTileSize=cy.prototype.ia;Ki.prototype.getRotation=Ki.prototype.l;Ki.prototype.getScale=Ki.prototype.k;Rn.prototype.getRotation=Rn.prototype.l;Rn.prototype.getScale=Rn.prototype.k;Ss.prototype.dispatchChangeEvent=Ss.prototype.n;Ss.prototype.getRevision=Ss.prototype.A;Ss.prototype.on=Ss.prototype.t;Ss.prototype.once=Ss.prototype.B;
Ss.prototype.un=Ss.prototype.v;Ss.prototype.unByKey=Ss.prototype.C;dt.prototype.getAttributions=dt.prototype.U;dt.prototype.getLogo=dt.prototype.S;dt.prototype.getProjection=dt.prototype.V;dt.prototype.getState=dt.prototype.W;dt.prototype.dispatchChangeEvent=dt.prototype.n;dt.prototype.getRevision=dt.prototype.A;dt.prototype.on=dt.prototype.t;dt.prototype.once=dt.prototype.B;dt.prototype.un=dt.prototype.v;dt.prototype.unByKey=dt.prototype.C;Kw.prototype.getTileGrid=Kw.prototype.wa;
Kw.prototype.getAttributions=Kw.prototype.U;Kw.prototype.getLogo=Kw.prototype.S;Kw.prototype.getProjection=Kw.prototype.V;Kw.prototype.getState=Kw.prototype.W;Kw.prototype.dispatchChangeEvent=Kw.prototype.n;Kw.prototype.getRevision=Kw.prototype.A;Kw.prototype.on=Kw.prototype.t;Kw.prototype.once=Kw.prototype.B;Kw.prototype.un=Kw.prototype.v;Kw.prototype.unByKey=Kw.prototype.C;Nw.prototype.getTileLoadFunction=Nw.prototype.Ra;Nw.prototype.getTileUrlFunction=Nw.prototype.Sa;
Nw.prototype.setTileLoadFunction=Nw.prototype.Ua;Nw.prototype.setTileUrlFunction=Nw.prototype.ha;Nw.prototype.getTileGrid=Nw.prototype.wa;Nw.prototype.getAttributions=Nw.prototype.U;Nw.prototype.getLogo=Nw.prototype.S;Nw.prototype.getProjection=Nw.prototype.V;Nw.prototype.getState=Nw.prototype.W;Nw.prototype.dispatchChangeEvent=Nw.prototype.n;Nw.prototype.getRevision=Nw.prototype.A;Nw.prototype.on=Nw.prototype.t;Nw.prototype.once=Nw.prototype.B;Nw.prototype.un=Nw.prototype.v;
Nw.prototype.unByKey=Nw.prototype.C;Qu.prototype.getAttributions=Qu.prototype.U;Qu.prototype.getLogo=Qu.prototype.S;Qu.prototype.getProjection=Qu.prototype.V;Qu.prototype.getState=Qu.prototype.W;Qu.prototype.dispatchChangeEvent=Qu.prototype.n;Qu.prototype.getRevision=Qu.prototype.A;Qu.prototype.on=Qu.prototype.t;Qu.prototype.once=Qu.prototype.B;Qu.prototype.un=Qu.prototype.v;Qu.prototype.unByKey=Qu.prototype.C;Pw.prototype.addFeature=Pw.prototype.za;Pw.prototype.addFeatures=Pw.prototype.oa;
Pw.prototype.clear=Pw.prototype.clear;Pw.prototype.forEachFeature=Pw.prototype.Ha;Pw.prototype.forEachFeatureInExtent=Pw.prototype.pa;Pw.prototype.getFeatures=Pw.prototype.qa;Pw.prototype.getFeaturesAtCoordinate=Pw.prototype.va;Pw.prototype.getClosestFeatureToCoordinate=Pw.prototype.Ia;Pw.prototype.getExtent=Pw.prototype.s;Pw.prototype.getFeatureById=Pw.prototype.ua;Pw.prototype.removeFeature=Pw.prototype.Ma;Pw.prototype.getAttributions=Pw.prototype.U;Pw.prototype.getLogo=Pw.prototype.S;
Pw.prototype.getProjection=Pw.prototype.V;Pw.prototype.getState=Pw.prototype.W;Pw.prototype.dispatchChangeEvent=Pw.prototype.n;Pw.prototype.getRevision=Pw.prototype.A;Pw.prototype.on=Pw.prototype.t;Pw.prototype.once=Pw.prototype.B;Pw.prototype.un=Pw.prototype.v;Pw.prototype.unByKey=Pw.prototype.C;ox.prototype.addFeature=ox.prototype.za;ox.prototype.addFeatures=ox.prototype.oa;ox.prototype.clear=ox.prototype.clear;ox.prototype.forEachFeature=ox.prototype.Ha;ox.prototype.forEachFeatureInExtent=ox.prototype.pa;
ox.prototype.getFeatures=ox.prototype.qa;ox.prototype.getFeaturesAtCoordinate=ox.prototype.va;ox.prototype.getClosestFeatureToCoordinate=ox.prototype.Ia;ox.prototype.getExtent=ox.prototype.s;ox.prototype.getFeatureById=ox.prototype.ua;ox.prototype.removeFeature=ox.prototype.Ma;ox.prototype.getAttributions=ox.prototype.U;ox.prototype.getLogo=ox.prototype.S;ox.prototype.getProjection=ox.prototype.V;ox.prototype.getState=ox.prototype.W;ox.prototype.dispatchChangeEvent=ox.prototype.n;
ox.prototype.getRevision=ox.prototype.A;ox.prototype.on=ox.prototype.t;ox.prototype.once=ox.prototype.B;ox.prototype.un=ox.prototype.v;ox.prototype.unByKey=ox.prototype.C;$.prototype.readFeatures=$.prototype.a;$.prototype.addFeature=$.prototype.za;$.prototype.addFeatures=$.prototype.oa;$.prototype.clear=$.prototype.clear;$.prototype.forEachFeature=$.prototype.Ha;$.prototype.forEachFeatureInExtent=$.prototype.pa;$.prototype.getFeatures=$.prototype.qa;$.prototype.getFeaturesAtCoordinate=$.prototype.va;
$.prototype.getClosestFeatureToCoordinate=$.prototype.Ia;$.prototype.getExtent=$.prototype.s;$.prototype.getFeatureById=$.prototype.ua;$.prototype.removeFeature=$.prototype.Ma;$.prototype.getAttributions=$.prototype.U;$.prototype.getLogo=$.prototype.S;$.prototype.getProjection=$.prototype.V;$.prototype.getState=$.prototype.W;$.prototype.dispatchChangeEvent=$.prototype.n;$.prototype.getRevision=$.prototype.A;$.prototype.on=$.prototype.t;$.prototype.once=$.prototype.B;$.prototype.un=$.prototype.v;
$.prototype.unByKey=$.prototype.C;qx.prototype.readFeatures=qx.prototype.a;qx.prototype.addFeature=qx.prototype.za;qx.prototype.addFeatures=qx.prototype.oa;qx.prototype.clear=qx.prototype.clear;qx.prototype.forEachFeature=qx.prototype.Ha;qx.prototype.forEachFeatureInExtent=qx.prototype.pa;qx.prototype.getFeatures=qx.prototype.qa;qx.prototype.getFeaturesAtCoordinate=qx.prototype.va;qx.prototype.getClosestFeatureToCoordinate=qx.prototype.Ia;qx.prototype.getExtent=qx.prototype.s;
qx.prototype.getFeatureById=qx.prototype.ua;qx.prototype.removeFeature=qx.prototype.Ma;qx.prototype.getAttributions=qx.prototype.U;qx.prototype.getLogo=qx.prototype.S;qx.prototype.getProjection=qx.prototype.V;qx.prototype.getState=qx.prototype.W;qx.prototype.dispatchChangeEvent=qx.prototype.n;qx.prototype.getRevision=qx.prototype.A;qx.prototype.on=qx.prototype.t;qx.prototype.once=qx.prototype.B;qx.prototype.un=qx.prototype.v;qx.prototype.unByKey=qx.prototype.C;rx.prototype.readFeatures=rx.prototype.a;
rx.prototype.addFeature=rx.prototype.za;rx.prototype.addFeatures=rx.prototype.oa;rx.prototype.clear=rx.prototype.clear;rx.prototype.forEachFeature=rx.prototype.Ha;rx.prototype.forEachFeatureInExtent=rx.prototype.pa;rx.prototype.getFeatures=rx.prototype.qa;rx.prototype.getFeaturesAtCoordinate=rx.prototype.va;rx.prototype.getClosestFeatureToCoordinate=rx.prototype.Ia;rx.prototype.getExtent=rx.prototype.s;rx.prototype.getFeatureById=rx.prototype.ua;rx.prototype.removeFeature=rx.prototype.Ma;
rx.prototype.getAttributions=rx.prototype.U;rx.prototype.getLogo=rx.prototype.S;rx.prototype.getProjection=rx.prototype.V;rx.prototype.getState=rx.prototype.W;rx.prototype.dispatchChangeEvent=rx.prototype.n;rx.prototype.getRevision=rx.prototype.A;rx.prototype.on=rx.prototype.t;rx.prototype.once=rx.prototype.B;rx.prototype.un=rx.prototype.v;rx.prototype.unByKey=rx.prototype.C;sx.prototype.readFeatures=sx.prototype.a;sx.prototype.addFeature=sx.prototype.za;sx.prototype.addFeatures=sx.prototype.oa;
sx.prototype.clear=sx.prototype.clear;sx.prototype.forEachFeature=sx.prototype.Ha;sx.prototype.forEachFeatureInExtent=sx.prototype.pa;sx.prototype.getFeatures=sx.prototype.qa;sx.prototype.getFeaturesAtCoordinate=sx.prototype.va;sx.prototype.getClosestFeatureToCoordinate=sx.prototype.Ia;sx.prototype.getExtent=sx.prototype.s;sx.prototype.getFeatureById=sx.prototype.ua;sx.prototype.removeFeature=sx.prototype.Ma;sx.prototype.getAttributions=sx.prototype.U;sx.prototype.getLogo=sx.prototype.S;
sx.prototype.getProjection=sx.prototype.V;sx.prototype.getState=sx.prototype.W;sx.prototype.dispatchChangeEvent=sx.prototype.n;sx.prototype.getRevision=sx.prototype.A;sx.prototype.on=sx.prototype.t;sx.prototype.once=sx.prototype.B;sx.prototype.un=sx.prototype.v;sx.prototype.unByKey=sx.prototype.C;xu.prototype.getAttributions=xu.prototype.U;xu.prototype.getLogo=xu.prototype.S;xu.prototype.getProjection=xu.prototype.V;xu.prototype.getState=xu.prototype.W;xu.prototype.dispatchChangeEvent=xu.prototype.n;
xu.prototype.getRevision=xu.prototype.A;xu.prototype.on=xu.prototype.t;xu.prototype.once=xu.prototype.B;xu.prototype.un=xu.prototype.v;xu.prototype.unByKey=xu.prototype.C;tx.prototype.getAttributions=tx.prototype.U;tx.prototype.getLogo=tx.prototype.S;tx.prototype.getProjection=tx.prototype.V;tx.prototype.getState=tx.prototype.W;tx.prototype.dispatchChangeEvent=tx.prototype.n;tx.prototype.getRevision=tx.prototype.A;tx.prototype.on=tx.prototype.t;tx.prototype.once=tx.prototype.B;tx.prototype.un=tx.prototype.v;
tx.prototype.unByKey=tx.prototype.C;ux.prototype.getAttributions=ux.prototype.U;ux.prototype.getLogo=ux.prototype.S;ux.prototype.getProjection=ux.prototype.V;ux.prototype.getState=ux.prototype.W;ux.prototype.dispatchChangeEvent=ux.prototype.n;ux.prototype.getRevision=ux.prototype.A;ux.prototype.on=ux.prototype.t;ux.prototype.once=ux.prototype.B;ux.prototype.un=ux.prototype.v;ux.prototype.unByKey=ux.prototype.C;vx.prototype.getAttributions=vx.prototype.U;vx.prototype.getLogo=vx.prototype.S;
vx.prototype.getProjection=vx.prototype.V;vx.prototype.getState=vx.prototype.W;vx.prototype.dispatchChangeEvent=vx.prototype.n;vx.prototype.getRevision=vx.prototype.A;vx.prototype.on=vx.prototype.t;vx.prototype.once=vx.prototype.B;vx.prototype.un=vx.prototype.v;vx.prototype.unByKey=vx.prototype.C;wx.prototype.getAttributions=wx.prototype.U;wx.prototype.getLogo=wx.prototype.S;wx.prototype.getProjection=wx.prototype.V;wx.prototype.getState=wx.prototype.W;wx.prototype.dispatchChangeEvent=wx.prototype.n;
wx.prototype.getRevision=wx.prototype.A;wx.prototype.on=wx.prototype.t;wx.prototype.once=wx.prototype.B;wx.prototype.un=wx.prototype.v;wx.prototype.unByKey=wx.prototype.C;yx.prototype.getAttributions=yx.prototype.U;yx.prototype.getLogo=yx.prototype.S;yx.prototype.getProjection=yx.prototype.V;yx.prototype.getState=yx.prototype.W;yx.prototype.dispatchChangeEvent=yx.prototype.n;yx.prototype.getRevision=yx.prototype.A;yx.prototype.on=yx.prototype.t;yx.prototype.once=yx.prototype.B;yx.prototype.un=yx.prototype.v;
yx.prototype.unByKey=yx.prototype.C;Cx.prototype.readFeatures=Cx.prototype.a;Cx.prototype.addFeature=Cx.prototype.za;Cx.prototype.addFeatures=Cx.prototype.oa;Cx.prototype.clear=Cx.prototype.clear;Cx.prototype.forEachFeature=Cx.prototype.Ha;Cx.prototype.forEachFeatureInExtent=Cx.prototype.pa;Cx.prototype.getFeatures=Cx.prototype.qa;Cx.prototype.getFeaturesAtCoordinate=Cx.prototype.va;Cx.prototype.getClosestFeatureToCoordinate=Cx.prototype.Ia;Cx.prototype.getExtent=Cx.prototype.s;
Cx.prototype.getFeatureById=Cx.prototype.ua;Cx.prototype.removeFeature=Cx.prototype.Ma;Cx.prototype.getAttributions=Cx.prototype.U;Cx.prototype.getLogo=Cx.prototype.S;Cx.prototype.getProjection=Cx.prototype.V;Cx.prototype.getState=Cx.prototype.W;Cx.prototype.dispatchChangeEvent=Cx.prototype.n;Cx.prototype.getRevision=Cx.prototype.A;Cx.prototype.on=Cx.prototype.t;Cx.prototype.once=Cx.prototype.B;Cx.prototype.un=Cx.prototype.v;Cx.prototype.unByKey=Cx.prototype.C;Dx.prototype.getTileLoadFunction=Dx.prototype.Ra;
Dx.prototype.getTileUrlFunction=Dx.prototype.Sa;Dx.prototype.setTileLoadFunction=Dx.prototype.Ua;Dx.prototype.getTileGrid=Dx.prototype.wa;Dx.prototype.getAttributions=Dx.prototype.U;Dx.prototype.getLogo=Dx.prototype.S;Dx.prototype.getProjection=Dx.prototype.V;Dx.prototype.getState=Dx.prototype.W;Dx.prototype.dispatchChangeEvent=Dx.prototype.n;Dx.prototype.getRevision=Dx.prototype.A;Dx.prototype.on=Dx.prototype.t;Dx.prototype.once=Dx.prototype.B;Dx.prototype.un=Dx.prototype.v;
Dx.prototype.unByKey=Dx.prototype.C;Ix.prototype.setTileUrlFunction=Ix.prototype.ha;Ix.prototype.setUrl=Ix.prototype.a;Ix.prototype.getTileLoadFunction=Ix.prototype.Ra;Ix.prototype.getTileUrlFunction=Ix.prototype.Sa;Ix.prototype.setTileLoadFunction=Ix.prototype.Ua;Ix.prototype.getTileGrid=Ix.prototype.wa;Ix.prototype.getAttributions=Ix.prototype.U;Ix.prototype.getLogo=Ix.prototype.S;Ix.prototype.getProjection=Ix.prototype.V;Ix.prototype.getState=Ix.prototype.W;Ix.prototype.dispatchChangeEvent=Ix.prototype.n;
Ix.prototype.getRevision=Ix.prototype.A;Ix.prototype.on=Ix.prototype.t;Ix.prototype.once=Ix.prototype.B;Ix.prototype.un=Ix.prototype.v;Ix.prototype.unByKey=Ix.prototype.C;Ex.prototype.setTileUrlFunction=Ex.prototype.ha;Ex.prototype.setUrl=Ex.prototype.a;Ex.prototype.getTileLoadFunction=Ex.prototype.Ra;Ex.prototype.getTileUrlFunction=Ex.prototype.Sa;Ex.prototype.setTileLoadFunction=Ex.prototype.Ua;Ex.prototype.getTileGrid=Ex.prototype.wa;Ex.prototype.getAttributions=Ex.prototype.U;
Ex.prototype.getLogo=Ex.prototype.S;Ex.prototype.getProjection=Ex.prototype.V;Ex.prototype.getState=Ex.prototype.W;Ex.prototype.dispatchChangeEvent=Ex.prototype.n;Ex.prototype.getRevision=Ex.prototype.A;Ex.prototype.on=Ex.prototype.t;Ex.prototype.once=Ex.prototype.B;Ex.prototype.un=Ex.prototype.v;Ex.prototype.unByKey=Ex.prototype.C;Lx.prototype.readFeatures=Lx.prototype.a;Lx.prototype.addFeature=Lx.prototype.za;Lx.prototype.addFeatures=Lx.prototype.oa;Lx.prototype.clear=Lx.prototype.clear;
Lx.prototype.forEachFeature=Lx.prototype.Ha;Lx.prototype.forEachFeatureInExtent=Lx.prototype.pa;Lx.prototype.getFeatures=Lx.prototype.qa;Lx.prototype.getFeaturesAtCoordinate=Lx.prototype.va;Lx.prototype.getClosestFeatureToCoordinate=Lx.prototype.Ia;Lx.prototype.getExtent=Lx.prototype.s;Lx.prototype.getFeatureById=Lx.prototype.ua;Lx.prototype.removeFeature=Lx.prototype.Ma;Lx.prototype.getAttributions=Lx.prototype.U;Lx.prototype.getLogo=Lx.prototype.S;Lx.prototype.getProjection=Lx.prototype.V;
Lx.prototype.getState=Lx.prototype.W;Lx.prototype.dispatchChangeEvent=Lx.prototype.n;Lx.prototype.getRevision=Lx.prototype.A;Lx.prototype.on=Lx.prototype.t;Lx.prototype.once=Lx.prototype.B;Lx.prototype.un=Lx.prototype.v;Lx.prototype.unByKey=Lx.prototype.C;Mx.prototype.addFeature=Mx.prototype.za;Mx.prototype.addFeatures=Mx.prototype.oa;Mx.prototype.forEachFeature=Mx.prototype.Ha;Mx.prototype.forEachFeatureInExtent=Mx.prototype.pa;Mx.prototype.getFeatures=Mx.prototype.qa;
Mx.prototype.getFeaturesAtCoordinate=Mx.prototype.va;Mx.prototype.getClosestFeatureToCoordinate=Mx.prototype.Ia;Mx.prototype.getExtent=Mx.prototype.s;Mx.prototype.getFeatureById=Mx.prototype.ua;Mx.prototype.removeFeature=Mx.prototype.Ma;Mx.prototype.getAttributions=Mx.prototype.U;Mx.prototype.getLogo=Mx.prototype.S;Mx.prototype.getProjection=Mx.prototype.V;Mx.prototype.getState=Mx.prototype.W;Mx.prototype.dispatchChangeEvent=Mx.prototype.n;Mx.prototype.getRevision=Mx.prototype.A;Mx.prototype.on=Mx.prototype.t;
Mx.prototype.once=Mx.prototype.B;Mx.prototype.un=Mx.prototype.v;Mx.prototype.unByKey=Mx.prototype.C;Px.prototype.setTileUrlFunction=Px.prototype.ha;Px.prototype.setUrl=Px.prototype.a;Px.prototype.getTileLoadFunction=Px.prototype.Ra;Px.prototype.getTileUrlFunction=Px.prototype.Sa;Px.prototype.setTileLoadFunction=Px.prototype.Ua;Px.prototype.getTileGrid=Px.prototype.wa;Px.prototype.getAttributions=Px.prototype.U;Px.prototype.getLogo=Px.prototype.S;Px.prototype.getProjection=Px.prototype.V;
Px.prototype.getState=Px.prototype.W;Px.prototype.dispatchChangeEvent=Px.prototype.n;Px.prototype.getRevision=Px.prototype.A;Px.prototype.on=Px.prototype.t;Px.prototype.once=Px.prototype.B;Px.prototype.un=Px.prototype.v;Px.prototype.unByKey=Px.prototype.C;Sx.prototype.getTileGrid=Sx.prototype.wa;Sx.prototype.getAttributions=Sx.prototype.U;Sx.prototype.getLogo=Sx.prototype.S;Sx.prototype.getProjection=Sx.prototype.V;Sx.prototype.getState=Sx.prototype.W;Sx.prototype.dispatchChangeEvent=Sx.prototype.n;
Sx.prototype.getRevision=Sx.prototype.A;Sx.prototype.on=Sx.prototype.t;Sx.prototype.once=Sx.prototype.B;Sx.prototype.un=Sx.prototype.v;Sx.prototype.unByKey=Sx.prototype.C;Tx.prototype.getTileLoadFunction=Tx.prototype.Ra;Tx.prototype.getTileUrlFunction=Tx.prototype.Sa;Tx.prototype.setTileLoadFunction=Tx.prototype.Ua;Tx.prototype.setTileUrlFunction=Tx.prototype.ha;Tx.prototype.getTileGrid=Tx.prototype.wa;Tx.prototype.getAttributions=Tx.prototype.U;Tx.prototype.getLogo=Tx.prototype.S;
Tx.prototype.getProjection=Tx.prototype.V;Tx.prototype.getState=Tx.prototype.W;Tx.prototype.dispatchChangeEvent=Tx.prototype.n;Tx.prototype.getRevision=Tx.prototype.A;Tx.prototype.on=Tx.prototype.t;Tx.prototype.once=Tx.prototype.B;Tx.prototype.un=Tx.prototype.v;Tx.prototype.unByKey=Tx.prototype.C;Ux.prototype.readFeatures=Ux.prototype.a;Ux.prototype.getFeaturesAtCoordinate=Ux.prototype.va;Ux.prototype.getFeatureById=Ux.prototype.ua;Ux.prototype.getAttributions=Ux.prototype.U;
Ux.prototype.getLogo=Ux.prototype.S;Ux.prototype.getProjection=Ux.prototype.V;Ux.prototype.getState=Ux.prototype.W;Ux.prototype.dispatchChangeEvent=Ux.prototype.n;Ux.prototype.getRevision=Ux.prototype.A;Ux.prototype.on=Ux.prototype.t;Ux.prototype.once=Ux.prototype.B;Ux.prototype.un=Ux.prototype.v;Ux.prototype.unByKey=Ux.prototype.C;Vx.prototype.getTileLoadFunction=Vx.prototype.Ra;Vx.prototype.getTileUrlFunction=Vx.prototype.Sa;Vx.prototype.setTileLoadFunction=Vx.prototype.Ua;
Vx.prototype.setTileUrlFunction=Vx.prototype.ha;Vx.prototype.getTileGrid=Vx.prototype.wa;Vx.prototype.getAttributions=Vx.prototype.U;Vx.prototype.getLogo=Vx.prototype.S;Vx.prototype.getProjection=Vx.prototype.V;Vx.prototype.getState=Vx.prototype.W;Vx.prototype.dispatchChangeEvent=Vx.prototype.n;Vx.prototype.getRevision=Vx.prototype.A;Vx.prototype.on=Vx.prototype.t;Vx.prototype.once=Vx.prototype.B;Vx.prototype.un=Vx.prototype.v;Vx.prototype.unByKey=Vx.prototype.C;Zx.prototype.readFeatures=Zx.prototype.a;
Zx.prototype.addFeature=Zx.prototype.za;Zx.prototype.addFeatures=Zx.prototype.oa;Zx.prototype.clear=Zx.prototype.clear;Zx.prototype.forEachFeature=Zx.prototype.Ha;Zx.prototype.forEachFeatureInExtent=Zx.prototype.pa;Zx.prototype.getFeatures=Zx.prototype.qa;Zx.prototype.getFeaturesAtCoordinate=Zx.prototype.va;Zx.prototype.getClosestFeatureToCoordinate=Zx.prototype.Ia;Zx.prototype.getExtent=Zx.prototype.s;Zx.prototype.getFeatureById=Zx.prototype.ua;Zx.prototype.removeFeature=Zx.prototype.Ma;
Zx.prototype.getAttributions=Zx.prototype.U;Zx.prototype.getLogo=Zx.prototype.S;Zx.prototype.getProjection=Zx.prototype.V;Zx.prototype.getState=Zx.prototype.W;Zx.prototype.dispatchChangeEvent=Zx.prototype.n;Zx.prototype.getRevision=Zx.prototype.A;Zx.prototype.on=Zx.prototype.t;Zx.prototype.once=Zx.prototype.B;Zx.prototype.un=Zx.prototype.v;Zx.prototype.unByKey=Zx.prototype.C;ay.prototype.getTileLoadFunction=ay.prototype.Ra;ay.prototype.getTileUrlFunction=ay.prototype.Sa;
ay.prototype.setTileLoadFunction=ay.prototype.Ua;ay.prototype.setTileUrlFunction=ay.prototype.ha;ay.prototype.getTileGrid=ay.prototype.wa;ay.prototype.getAttributions=ay.prototype.U;ay.prototype.getLogo=ay.prototype.S;ay.prototype.getProjection=ay.prototype.V;ay.prototype.getState=ay.prototype.W;ay.prototype.dispatchChangeEvent=ay.prototype.n;ay.prototype.getRevision=ay.prototype.A;ay.prototype.on=ay.prototype.t;ay.prototype.once=ay.prototype.B;ay.prototype.un=ay.prototype.v;
ay.prototype.unByKey=ay.prototype.C;dy.prototype.getTileLoadFunction=dy.prototype.Ra;dy.prototype.getTileUrlFunction=dy.prototype.Sa;dy.prototype.setTileLoadFunction=dy.prototype.Ua;dy.prototype.setTileUrlFunction=dy.prototype.ha;dy.prototype.getTileGrid=dy.prototype.wa;dy.prototype.getAttributions=dy.prototype.U;dy.prototype.getLogo=dy.prototype.S;dy.prototype.getProjection=dy.prototype.V;dy.prototype.getState=dy.prototype.W;dy.prototype.dispatchChangeEvent=dy.prototype.n;
dy.prototype.getRevision=dy.prototype.A;dy.prototype.on=dy.prototype.t;dy.prototype.once=dy.prototype.B;dy.prototype.un=dy.prototype.v;dy.prototype.unByKey=dy.prototype.C;O.prototype.bindTo=O.prototype.Z;O.prototype.get=O.prototype.get;O.prototype.getKeys=O.prototype.N;O.prototype.getProperties=O.prototype.R;O.prototype.set=O.prototype.set;O.prototype.setProperties=O.prototype.L;O.prototype.unbind=O.prototype.Y;O.prototype.unbindAll=O.prototype.$;O.prototype.dispatchChangeEvent=O.prototype.n;
O.prototype.getRevision=O.prototype.A;O.prototype.on=O.prototype.t;O.prototype.once=O.prototype.B;O.prototype.un=O.prototype.v;O.prototype.unByKey=O.prototype.C;P.prototype.getBrightness=P.prototype.d;P.prototype.getContrast=P.prototype.e;P.prototype.getHue=P.prototype.f;P.prototype.getExtent=P.prototype.s;P.prototype.getMaxResolution=P.prototype.g;P.prototype.getMinResolution=P.prototype.i;P.prototype.getOpacity=P.prototype.k;P.prototype.getSaturation=P.prototype.l;P.prototype.getVisible=P.prototype.b;
P.prototype.setBrightness=P.prototype.q;P.prototype.setContrast=P.prototype.r;P.prototype.setHue=P.prototype.u;P.prototype.setExtent=P.prototype.o;P.prototype.setMaxResolution=P.prototype.D;P.prototype.setMinResolution=P.prototype.F;P.prototype.setOpacity=P.prototype.Q;P.prototype.setSaturation=P.prototype.X;P.prototype.setVisible=P.prototype.ba;P.prototype.bindTo=P.prototype.Z;P.prototype.get=P.prototype.get;P.prototype.getKeys=P.prototype.N;P.prototype.getProperties=P.prototype.R;
P.prototype.set=P.prototype.set;P.prototype.setProperties=P.prototype.L;P.prototype.unbind=P.prototype.Y;P.prototype.unbindAll=P.prototype.$;P.prototype.dispatchChangeEvent=P.prototype.n;P.prototype.getRevision=P.prototype.A;P.prototype.on=P.prototype.t;P.prototype.once=P.prototype.B;P.prototype.un=P.prototype.v;P.prototype.unByKey=P.prototype.C;V.prototype.getSource=V.prototype.ma;V.prototype.getBrightness=V.prototype.d;V.prototype.getContrast=V.prototype.e;V.prototype.getHue=V.prototype.f;
V.prototype.getExtent=V.prototype.s;V.prototype.getMaxResolution=V.prototype.g;V.prototype.getMinResolution=V.prototype.i;V.prototype.getOpacity=V.prototype.k;V.prototype.getSaturation=V.prototype.l;V.prototype.getVisible=V.prototype.b;V.prototype.setBrightness=V.prototype.q;V.prototype.setContrast=V.prototype.r;V.prototype.setHue=V.prototype.u;V.prototype.setExtent=V.prototype.o;V.prototype.setMaxResolution=V.prototype.D;V.prototype.setMinResolution=V.prototype.F;V.prototype.setOpacity=V.prototype.Q;
V.prototype.setSaturation=V.prototype.X;V.prototype.setVisible=V.prototype.ba;V.prototype.bindTo=V.prototype.Z;V.prototype.get=V.prototype.get;V.prototype.getKeys=V.prototype.N;V.prototype.getProperties=V.prototype.R;V.prototype.set=V.prototype.set;V.prototype.setProperties=V.prototype.L;V.prototype.unbind=V.prototype.Y;V.prototype.unbindAll=V.prototype.$;V.prototype.dispatchChangeEvent=V.prototype.n;V.prototype.getRevision=V.prototype.A;V.prototype.on=V.prototype.t;V.prototype.once=V.prototype.B;
V.prototype.un=V.prototype.v;V.prototype.unByKey=V.prototype.C;X.prototype.getStyle=X.prototype.ac;X.prototype.getStyleFunction=X.prototype.Cc;X.prototype.setStyle=X.prototype.na;X.prototype.getSource=X.prototype.ma;X.prototype.getBrightness=X.prototype.d;X.prototype.getContrast=X.prototype.e;X.prototype.getHue=X.prototype.f;X.prototype.getExtent=X.prototype.s;X.prototype.getMaxResolution=X.prototype.g;X.prototype.getMinResolution=X.prototype.i;X.prototype.getOpacity=X.prototype.k;
X.prototype.getSaturation=X.prototype.l;X.prototype.getVisible=X.prototype.b;X.prototype.setBrightness=X.prototype.q;X.prototype.setContrast=X.prototype.r;X.prototype.setHue=X.prototype.u;X.prototype.setExtent=X.prototype.o;X.prototype.setMaxResolution=X.prototype.D;X.prototype.setMinResolution=X.prototype.F;X.prototype.setOpacity=X.prototype.Q;X.prototype.setSaturation=X.prototype.X;X.prototype.setVisible=X.prototype.ba;X.prototype.bindTo=X.prototype.Z;X.prototype.get=X.prototype.get;
X.prototype.getKeys=X.prototype.N;X.prototype.getProperties=X.prototype.R;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.L;X.prototype.unbind=X.prototype.Y;X.prototype.unbindAll=X.prototype.$;X.prototype.dispatchChangeEvent=X.prototype.n;X.prototype.getRevision=X.prototype.A;X.prototype.on=X.prototype.t;X.prototype.once=X.prototype.B;X.prototype.un=X.prototype.v;X.prototype.unByKey=X.prototype.C;S.prototype.getSource=S.prototype.ma;S.prototype.getBrightness=S.prototype.d;
S.prototype.getContrast=S.prototype.e;S.prototype.getHue=S.prototype.f;S.prototype.getExtent=S.prototype.s;S.prototype.getMaxResolution=S.prototype.g;S.prototype.getMinResolution=S.prototype.i;S.prototype.getOpacity=S.prototype.k;S.prototype.getSaturation=S.prototype.l;S.prototype.getVisible=S.prototype.b;S.prototype.setBrightness=S.prototype.q;S.prototype.setContrast=S.prototype.r;S.prototype.setHue=S.prototype.u;S.prototype.setExtent=S.prototype.o;S.prototype.setMaxResolution=S.prototype.D;
S.prototype.setMinResolution=S.prototype.F;S.prototype.setOpacity=S.prototype.Q;S.prototype.setSaturation=S.prototype.X;S.prototype.setVisible=S.prototype.ba;S.prototype.bindTo=S.prototype.Z;S.prototype.get=S.prototype.get;S.prototype.getKeys=S.prototype.N;S.prototype.getProperties=S.prototype.R;S.prototype.set=S.prototype.set;S.prototype.setProperties=S.prototype.L;S.prototype.unbind=S.prototype.Y;S.prototype.unbindAll=S.prototype.$;S.prototype.dispatchChangeEvent=S.prototype.n;
S.prototype.getRevision=S.prototype.A;S.prototype.on=S.prototype.t;S.prototype.once=S.prototype.B;S.prototype.un=S.prototype.v;S.prototype.unByKey=S.prototype.C;R.prototype.getBrightness=R.prototype.d;R.prototype.getContrast=R.prototype.e;R.prototype.getHue=R.prototype.f;R.prototype.getExtent=R.prototype.s;R.prototype.getMaxResolution=R.prototype.g;R.prototype.getMinResolution=R.prototype.i;R.prototype.getOpacity=R.prototype.k;R.prototype.getSaturation=R.prototype.l;R.prototype.getVisible=R.prototype.b;
R.prototype.setBrightness=R.prototype.q;R.prototype.setContrast=R.prototype.r;R.prototype.setHue=R.prototype.u;R.prototype.setExtent=R.prototype.o;R.prototype.setMaxResolution=R.prototype.D;R.prototype.setMinResolution=R.prototype.F;R.prototype.setOpacity=R.prototype.Q;R.prototype.setSaturation=R.prototype.X;R.prototype.setVisible=R.prototype.ba;R.prototype.bindTo=R.prototype.Z;R.prototype.get=R.prototype.get;R.prototype.getKeys=R.prototype.N;R.prototype.getProperties=R.prototype.R;
R.prototype.set=R.prototype.set;R.prototype.setProperties=R.prototype.L;R.prototype.unbind=R.prototype.Y;R.prototype.unbindAll=R.prototype.$;R.prototype.dispatchChangeEvent=R.prototype.n;R.prototype.getRevision=R.prototype.A;R.prototype.on=R.prototype.t;R.prototype.once=R.prototype.B;R.prototype.un=R.prototype.v;R.prototype.unByKey=R.prototype.C;T.prototype.getSource=T.prototype.ma;T.prototype.getBrightness=T.prototype.d;T.prototype.getContrast=T.prototype.e;T.prototype.getHue=T.prototype.f;
T.prototype.getExtent=T.prototype.s;T.prototype.getMaxResolution=T.prototype.g;T.prototype.getMinResolution=T.prototype.i;T.prototype.getOpacity=T.prototype.k;T.prototype.getSaturation=T.prototype.l;T.prototype.getVisible=T.prototype.b;T.prototype.setBrightness=T.prototype.q;T.prototype.setContrast=T.prototype.r;T.prototype.setHue=T.prototype.u;T.prototype.setExtent=T.prototype.o;T.prototype.setMaxResolution=T.prototype.D;T.prototype.setMinResolution=T.prototype.F;T.prototype.setOpacity=T.prototype.Q;
T.prototype.setSaturation=T.prototype.X;T.prototype.setVisible=T.prototype.ba;T.prototype.bindTo=T.prototype.Z;T.prototype.get=T.prototype.get;T.prototype.getKeys=T.prototype.N;T.prototype.getProperties=T.prototype.R;T.prototype.set=T.prototype.set;T.prototype.setProperties=T.prototype.L;T.prototype.unbind=T.prototype.Y;T.prototype.unbindAll=T.prototype.$;T.prototype.dispatchChangeEvent=T.prototype.n;T.prototype.getRevision=T.prototype.A;T.prototype.on=T.prototype.t;T.prototype.once=T.prototype.B;
T.prototype.un=T.prototype.v;T.prototype.unByKey=T.prototype.C;jr.prototype.dispatchChangeEvent=jr.prototype.n;jr.prototype.getRevision=jr.prototype.A;jr.prototype.on=jr.prototype.t;jr.prototype.once=jr.prototype.B;jr.prototype.un=jr.prototype.v;jr.prototype.unByKey=jr.prototype.C;nr.prototype.dispatchChangeEvent=nr.prototype.n;nr.prototype.getRevision=nr.prototype.A;nr.prototype.on=nr.prototype.t;nr.prototype.once=nr.prototype.B;nr.prototype.un=nr.prototype.v;nr.prototype.unByKey=nr.prototype.C;
fs.prototype.dispatchChangeEvent=fs.prototype.n;fs.prototype.getRevision=fs.prototype.A;fs.prototype.on=fs.prototype.t;fs.prototype.once=fs.prototype.B;fs.prototype.un=fs.prototype.v;fs.prototype.unByKey=fs.prototype.C;is.prototype.dispatchChangeEvent=is.prototype.n;is.prototype.getRevision=is.prototype.A;is.prototype.on=is.prototype.t;is.prototype.once=is.prototype.B;is.prototype.un=is.prototype.v;is.prototype.unByKey=is.prototype.C;os.prototype.dispatchChangeEvent=os.prototype.n;
os.prototype.getRevision=os.prototype.A;os.prototype.on=os.prototype.t;os.prototype.once=os.prototype.B;os.prototype.un=os.prototype.v;os.prototype.unByKey=os.prototype.C;ss.prototype.dispatchChangeEvent=ss.prototype.n;ss.prototype.getRevision=ss.prototype.A;ss.prototype.on=ss.prototype.t;ss.prototype.once=ss.prototype.B;ss.prototype.un=ss.prototype.v;ss.prototype.unByKey=ss.prototype.C;us.prototype.dispatchChangeEvent=us.prototype.n;us.prototype.getRevision=us.prototype.A;us.prototype.on=us.prototype.t;
us.prototype.once=us.prototype.B;us.prototype.un=us.prototype.v;us.prototype.unByKey=us.prototype.C;vs.prototype.dispatchChangeEvent=vs.prototype.n;vs.prototype.getRevision=vs.prototype.A;vs.prototype.on=vs.prototype.t;vs.prototype.once=vs.prototype.B;vs.prototype.un=vs.prototype.v;vs.prototype.unByKey=vs.prototype.C;ws.prototype.getGeometry=ws.prototype.J;ws.prototype.dispatchChangeEvent=ws.prototype.n;ws.prototype.getRevision=ws.prototype.A;ws.prototype.on=ws.prototype.t;ws.prototype.once=ws.prototype.B;
ws.prototype.un=ws.prototype.v;ws.prototype.unByKey=ws.prototype.C;Uv.prototype.dispatchChangeEvent=Uv.prototype.n;Uv.prototype.getRevision=Uv.prototype.A;Uv.prototype.on=Uv.prototype.t;Uv.prototype.once=Uv.prototype.B;Uv.prototype.un=Uv.prototype.v;Uv.prototype.unByKey=Uv.prototype.C;Ft.prototype.dispatchChangeEvent=Ft.prototype.n;Ft.prototype.getRevision=Ft.prototype.A;Ft.prototype.on=Ft.prototype.t;Ft.prototype.once=Ft.prototype.B;Ft.prototype.un=Ft.prototype.v;Ft.prototype.unByKey=Ft.prototype.C;
Gt.prototype.dispatchChangeEvent=Gt.prototype.n;Gt.prototype.getRevision=Gt.prototype.A;Gt.prototype.on=Gt.prototype.t;Gt.prototype.once=Gt.prototype.B;Gt.prototype.un=Gt.prototype.v;Gt.prototype.unByKey=Gt.prototype.C;dw.prototype.dispatchChangeEvent=dw.prototype.n;dw.prototype.getRevision=dw.prototype.A;dw.prototype.on=dw.prototype.t;dw.prototype.once=dw.prototype.B;dw.prototype.un=dw.prototype.v;dw.prototype.unByKey=dw.prototype.C;Ht.prototype.dispatchChangeEvent=Ht.prototype.n;
Ht.prototype.getRevision=Ht.prototype.A;Ht.prototype.on=Ht.prototype.t;Ht.prototype.once=Ht.prototype.B;Ht.prototype.un=Ht.prototype.v;Ht.prototype.unByKey=Ht.prototype.C;It.prototype.dispatchChangeEvent=It.prototype.n;It.prototype.getRevision=It.prototype.A;It.prototype.on=It.prototype.t;It.prototype.once=It.prototype.B;It.prototype.un=It.prototype.v;It.prototype.unByKey=It.prototype.C;Jt.prototype.dispatchChangeEvent=Jt.prototype.n;Jt.prototype.getRevision=Jt.prototype.A;Jt.prototype.on=Jt.prototype.t;
Jt.prototype.once=Jt.prototype.B;Jt.prototype.un=Jt.prototype.v;Jt.prototype.unByKey=Jt.prototype.C;iw.prototype.dispatchChangeEvent=iw.prototype.n;iw.prototype.getRevision=iw.prototype.A;iw.prototype.on=iw.prototype.t;iw.prototype.once=iw.prototype.B;iw.prototype.un=iw.prototype.v;iw.prototype.unByKey=iw.prototype.C;Di.prototype.dispatchChangeEvent=Di.prototype.n;Di.prototype.getRevision=Di.prototype.A;Di.prototype.on=Di.prototype.t;Di.prototype.once=Di.prototype.B;Di.prototype.un=Di.prototype.v;
Di.prototype.unByKey=Di.prototype.C;Ri.prototype.clone=Ri.prototype.clone;Ri.prototype.getClosestPoint=Ri.prototype.g;Ri.prototype.getType=Ri.prototype.G;Ri.prototype.transform=Ri.prototype.f;Ri.prototype.dispatchChangeEvent=Ri.prototype.n;Ri.prototype.getRevision=Ri.prototype.A;Ri.prototype.on=Ri.prototype.t;Ri.prototype.once=Ri.prototype.B;Ri.prototype.un=Ri.prototype.v;Ri.prototype.unByKey=Ri.prototype.C;Zi.prototype.getFirstCoordinate=Zi.prototype.Xa;Zi.prototype.getLastCoordinate=Zi.prototype.Ya;
Zi.prototype.getLayout=Zi.prototype.Za;Zi.prototype.getClosestPoint=Zi.prototype.g;Zi.prototype.transform=Zi.prototype.f;Zi.prototype.dispatchChangeEvent=Zi.prototype.n;Zi.prototype.getRevision=Zi.prototype.A;Zi.prototype.on=Zi.prototype.t;Zi.prototype.once=Zi.prototype.B;Zi.prototype.un=Zi.prototype.v;Zi.prototype.unByKey=Zi.prototype.C;aj.prototype.getClosestPoint=aj.prototype.g;aj.prototype.transform=aj.prototype.f;aj.prototype.dispatchChangeEvent=aj.prototype.n;aj.prototype.getRevision=aj.prototype.A;
aj.prototype.on=aj.prototype.t;aj.prototype.once=aj.prototype.B;aj.prototype.un=aj.prototype.v;aj.prototype.unByKey=aj.prototype.C;Dj.prototype.getExtent=Dj.prototype.s;Dj.prototype.getFirstCoordinate=Dj.prototype.Xa;Dj.prototype.getLastCoordinate=Dj.prototype.Ya;Dj.prototype.getLayout=Dj.prototype.Za;Dj.prototype.getClosestPoint=Dj.prototype.g;Dj.prototype.transform=Dj.prototype.f;Dj.prototype.dispatchChangeEvent=Dj.prototype.n;Dj.prototype.getRevision=Dj.prototype.A;Dj.prototype.on=Dj.prototype.t;
Dj.prototype.once=Dj.prototype.B;Dj.prototype.un=Dj.prototype.v;Dj.prototype.unByKey=Dj.prototype.C;H.prototype.getExtent=H.prototype.s;H.prototype.getFirstCoordinate=H.prototype.Xa;H.prototype.getLastCoordinate=H.prototype.Ya;H.prototype.getLayout=H.prototype.Za;H.prototype.getClosestPoint=H.prototype.g;H.prototype.transform=H.prototype.f;H.prototype.dispatchChangeEvent=H.prototype.n;H.prototype.getRevision=H.prototype.A;H.prototype.on=H.prototype.t;H.prototype.once=H.prototype.B;
H.prototype.un=H.prototype.v;H.prototype.unByKey=H.prototype.C;uj.prototype.getExtent=uj.prototype.s;uj.prototype.getFirstCoordinate=uj.prototype.Xa;uj.prototype.getLastCoordinate=uj.prototype.Ya;uj.prototype.getLayout=uj.prototype.Za;uj.prototype.getClosestPoint=uj.prototype.g;uj.prototype.transform=uj.prototype.f;uj.prototype.dispatchChangeEvent=uj.prototype.n;uj.prototype.getRevision=uj.prototype.A;uj.prototype.on=uj.prototype.t;uj.prototype.once=uj.prototype.B;uj.prototype.un=uj.prototype.v;
uj.prototype.unByKey=uj.prototype.C;Aj.prototype.getExtent=Aj.prototype.s;Aj.prototype.getFirstCoordinate=Aj.prototype.Xa;Aj.prototype.getLastCoordinate=Aj.prototype.Ya;Aj.prototype.getLayout=Aj.prototype.Za;Aj.prototype.getClosestPoint=Aj.prototype.g;Aj.prototype.transform=Aj.prototype.f;Aj.prototype.dispatchChangeEvent=Aj.prototype.n;Aj.prototype.getRevision=Aj.prototype.A;Aj.prototype.on=Aj.prototype.t;Aj.prototype.once=Aj.prototype.B;Aj.prototype.un=Aj.prototype.v;Aj.prototype.unByKey=Aj.prototype.C;
Pj.prototype.getExtent=Pj.prototype.s;Pj.prototype.getFirstCoordinate=Pj.prototype.Xa;Pj.prototype.getLastCoordinate=Pj.prototype.Ya;Pj.prototype.getLayout=Pj.prototype.Za;Pj.prototype.getClosestPoint=Pj.prototype.g;Pj.prototype.transform=Pj.prototype.f;Pj.prototype.dispatchChangeEvent=Pj.prototype.n;Pj.prototype.getRevision=Pj.prototype.A;Pj.prototype.on=Pj.prototype.t;Pj.prototype.once=Pj.prototype.B;Pj.prototype.un=Pj.prototype.v;Pj.prototype.unByKey=Pj.prototype.C;
yj.prototype.getFirstCoordinate=yj.prototype.Xa;yj.prototype.getLastCoordinate=yj.prototype.Ya;yj.prototype.getLayout=yj.prototype.Za;yj.prototype.getClosestPoint=yj.prototype.g;yj.prototype.transform=yj.prototype.f;yj.prototype.dispatchChangeEvent=yj.prototype.n;yj.prototype.getRevision=yj.prototype.A;yj.prototype.on=yj.prototype.t;yj.prototype.once=yj.prototype.B;yj.prototype.un=yj.prototype.v;yj.prototype.unByKey=yj.prototype.C;I.prototype.getExtent=I.prototype.s;
I.prototype.getFirstCoordinate=I.prototype.Xa;I.prototype.getLastCoordinate=I.prototype.Ya;I.prototype.getLayout=I.prototype.Za;I.prototype.getClosestPoint=I.prototype.g;I.prototype.transform=I.prototype.f;I.prototype.dispatchChangeEvent=I.prototype.n;I.prototype.getRevision=I.prototype.A;I.prototype.on=I.prototype.t;I.prototype.once=I.prototype.B;I.prototype.un=I.prototype.v;I.prototype.unByKey=I.prototype.C;ii.prototype.bindTo=ii.prototype.Z;ii.prototype.get=ii.prototype.get;
ii.prototype.getKeys=ii.prototype.N;ii.prototype.getProperties=ii.prototype.R;ii.prototype.set=ii.prototype.set;ii.prototype.setProperties=ii.prototype.L;ii.prototype.unbind=ii.prototype.Y;ii.prototype.unbindAll=ii.prototype.$;ii.prototype.dispatchChangeEvent=ii.prototype.n;ii.prototype.getRevision=ii.prototype.A;ii.prototype.on=ii.prototype.t;ii.prototype.once=ii.prototype.B;ii.prototype.un=ii.prototype.v;ii.prototype.unByKey=ii.prototype.C;Sg.prototype.bindTo=Sg.prototype.Z;Sg.prototype.get=Sg.prototype.get;
Sg.prototype.getKeys=Sg.prototype.N;Sg.prototype.getProperties=Sg.prototype.R;Sg.prototype.set=Sg.prototype.set;Sg.prototype.setProperties=Sg.prototype.L;Sg.prototype.unbind=Sg.prototype.Y;Sg.prototype.unbindAll=Sg.prototype.$;Sg.prototype.dispatchChangeEvent=Sg.prototype.n;Sg.prototype.getRevision=Sg.prototype.A;Sg.prototype.on=Sg.prototype.t;Sg.prototype.once=Sg.prototype.B;Sg.prototype.un=Sg.prototype.v;Sg.prototype.unByKey=Sg.prototype.C;Bh.prototype.getMap=Bh.prototype.d;
Bh.prototype.setMap=Bh.prototype.setMap;Bh.prototype.bindTo=Bh.prototype.Z;Bh.prototype.get=Bh.prototype.get;Bh.prototype.getKeys=Bh.prototype.N;Bh.prototype.getProperties=Bh.prototype.R;Bh.prototype.set=Bh.prototype.set;Bh.prototype.setProperties=Bh.prototype.L;Bh.prototype.unbind=Bh.prototype.Y;Bh.prototype.unbindAll=Bh.prototype.$;Bh.prototype.dispatchChangeEvent=Bh.prototype.n;Bh.prototype.getRevision=Bh.prototype.A;Bh.prototype.on=Bh.prototype.t;Bh.prototype.once=Bh.prototype.B;
Bh.prototype.un=Bh.prototype.v;Bh.prototype.unByKey=Bh.prototype.C;Mh.prototype.getMap=Mh.prototype.d;Mh.prototype.setMap=Mh.prototype.setMap;Mh.prototype.bindTo=Mh.prototype.Z;Mh.prototype.get=Mh.prototype.get;Mh.prototype.getKeys=Mh.prototype.N;Mh.prototype.getProperties=Mh.prototype.R;Mh.prototype.set=Mh.prototype.set;Mh.prototype.setProperties=Mh.prototype.L;Mh.prototype.unbind=Mh.prototype.Y;Mh.prototype.unbindAll=Mh.prototype.$;Mh.prototype.dispatchChangeEvent=Mh.prototype.n;
Mh.prototype.getRevision=Mh.prototype.A;Mh.prototype.on=Mh.prototype.t;Mh.prototype.once=Mh.prototype.B;Mh.prototype.un=Mh.prototype.v;Mh.prototype.unByKey=Mh.prototype.C;C.prototype.getMap=C.prototype.d;C.prototype.bindTo=C.prototype.Z;C.prototype.get=C.prototype.get;C.prototype.getKeys=C.prototype.N;C.prototype.getProperties=C.prototype.R;C.prototype.set=C.prototype.set;C.prototype.setProperties=C.prototype.L;C.prototype.unbind=C.prototype.Y;C.prototype.unbindAll=C.prototype.$;
C.prototype.dispatchChangeEvent=C.prototype.n;C.prototype.getRevision=C.prototype.A;C.prototype.on=C.prototype.t;C.prototype.once=C.prototype.B;C.prototype.un=C.prototype.v;C.prototype.unByKey=C.prototype.C;Dh.prototype.getMap=Dh.prototype.d;Dh.prototype.setMap=Dh.prototype.setMap;Dh.prototype.bindTo=Dh.prototype.Z;Dh.prototype.get=Dh.prototype.get;Dh.prototype.getKeys=Dh.prototype.N;Dh.prototype.getProperties=Dh.prototype.R;Dh.prototype.set=Dh.prototype.set;Dh.prototype.setProperties=Dh.prototype.L;
Dh.prototype.unbind=Dh.prototype.Y;Dh.prototype.unbindAll=Dh.prototype.$;Dh.prototype.dispatchChangeEvent=Dh.prototype.n;Dh.prototype.getRevision=Dh.prototype.A;Dh.prototype.on=Dh.prototype.t;Dh.prototype.once=Dh.prototype.B;Dh.prototype.un=Dh.prototype.v;Dh.prototype.unByKey=Dh.prototype.C;Ph.prototype.getMap=Ph.prototype.d;Ph.prototype.setMap=Ph.prototype.setMap;Ph.prototype.bindTo=Ph.prototype.Z;Ph.prototype.get=Ph.prototype.get;Ph.prototype.getKeys=Ph.prototype.N;Ph.prototype.getProperties=Ph.prototype.R;
Ph.prototype.set=Ph.prototype.set;Ph.prototype.setProperties=Ph.prototype.L;Ph.prototype.unbind=Ph.prototype.Y;Ph.prototype.unbindAll=Ph.prototype.$;Ph.prototype.dispatchChangeEvent=Ph.prototype.n;Ph.prototype.getRevision=Ph.prototype.A;Ph.prototype.on=Ph.prototype.t;Ph.prototype.once=Ph.prototype.B;Ph.prototype.un=Ph.prototype.v;Ph.prototype.unByKey=Ph.prototype.C;Fh.prototype.getMap=Fh.prototype.d;Fh.prototype.setMap=Fh.prototype.setMap;Fh.prototype.bindTo=Fh.prototype.Z;Fh.prototype.get=Fh.prototype.get;
Fh.prototype.getKeys=Fh.prototype.N;Fh.prototype.getProperties=Fh.prototype.R;Fh.prototype.set=Fh.prototype.set;Fh.prototype.setProperties=Fh.prototype.L;Fh.prototype.unbind=Fh.prototype.Y;Fh.prototype.unbindAll=Fh.prototype.$;Fh.prototype.dispatchChangeEvent=Fh.prototype.n;Fh.prototype.getRevision=Fh.prototype.A;Fh.prototype.on=Fh.prototype.t;Fh.prototype.once=Fh.prototype.B;Fh.prototype.un=Fh.prototype.v;Fh.prototype.unByKey=Fh.prototype.C;ci.prototype.getMap=ci.prototype.d;
ci.prototype.bindTo=ci.prototype.Z;ci.prototype.get=ci.prototype.get;ci.prototype.getKeys=ci.prototype.N;ci.prototype.getProperties=ci.prototype.R;ci.prototype.set=ci.prototype.set;ci.prototype.setProperties=ci.prototype.L;ci.prototype.unbind=ci.prototype.Y;ci.prototype.unbindAll=ci.prototype.$;ci.prototype.dispatchChangeEvent=ci.prototype.n;ci.prototype.getRevision=ci.prototype.A;ci.prototype.on=ci.prototype.t;ci.prototype.once=ci.prototype.B;ci.prototype.un=ci.prototype.v;ci.prototype.unByKey=ci.prototype.C;
gi.prototype.getMap=gi.prototype.d;gi.prototype.setMap=gi.prototype.setMap;gi.prototype.bindTo=gi.prototype.Z;gi.prototype.get=gi.prototype.get;gi.prototype.getKeys=gi.prototype.N;gi.prototype.getProperties=gi.prototype.R;gi.prototype.set=gi.prototype.set;gi.prototype.setProperties=gi.prototype.L;gi.prototype.unbind=gi.prototype.Y;gi.prototype.unbindAll=gi.prototype.$;gi.prototype.dispatchChangeEvent=gi.prototype.n;gi.prototype.getRevision=gi.prototype.A;gi.prototype.on=gi.prototype.t;
gi.prototype.once=gi.prototype.B;gi.prototype.un=gi.prototype.v;gi.prototype.unByKey=gi.prototype.C;})();
/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */


(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));
;(function(undefined) {
  "use strict";

  // Shortcut to check, that `variable` is not `undefined` or `null`.
  var defined = function (variable) {
    return (variable != null || variable != undefined);
  };

  // Fire `type` callbacks with `args`.
  var fire = function (type, args) {
    var callbacks = self._callbacks[type];
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i].apply(window, args);
    }
  };

  // Calculate average value for last 5 `array` items;
  var average5 = function (array) {
    var sum = 0;
    for (var i = array.length - 1; i > array.length - 6; i--) {
      sum += array[i];
    }
    return sum / 5;
  };

  // Compass.js allow you to get compass heading in JavaScript.
  // We can get compass data by two proprietary APIs and one hack:
  // * PhoneGap have `navigator.compass` API.
  // * iOS Safari add `webkitCompassHeading` to `deviceorientation` event.
  // * We can enable GPS and ask user to go forward. GPS will send
  //   current heading, so we can calculate difference between real North
  //   and zero in `deviceorientation` event. Next we use this difference
  //   to get compass heading only by device orientation.
  //
  // Hide compass, when there isn’t any method:
  //
  //   Compass.noSupport(function () {
  //     $('.compass').hide();
  //   });
  //
  // Show instructions for GPS hack:
  //
  //   Compass.needGPS(function () {
  //     $('.go-outside-message').show();
  //   }).needMove(function () {
  //     $('.go-outside-message').hide()
  //     $('.move-and-hold-ahead-message').show();
  //   }).init(function () {
  //     $('.move-and-hold-ahead-message').hide();
  //   });
  var self = window.Compass = {

    // Name of method to get compass heading. It will have value only after
    // library initialization from `init` method. So better way to get
    // method name is to use `init`:
    //
    //   Compass.init(function (method) {
    //     console.log('Compass by ' + method);
    //   });
    //
    // Available methods:
    // * `phonegap` take from PhoneGap’s `navigator.compass`.
    // * `webkitOrientation` take from iPhone’s proprietary
    //   `webkitCompassHeading` proprerty in `DeviceOrientationEvent`.
    // * `orientationAndGPS` take from device orientation with GPS hack.
    //
    // If browser hasn’t access to compass, `method` will be `false`.
    method: undefined,

    // Watch for compass heading changes and execute `callback` with degrees
    // relative to magnetic north (from 0 to 360).
    //
    // Method return watcher ID to use it in `unwatch`.
    //
    //   var watchID = Compass.watch(function (heading) {
    //     $('.degrees').text(heading);
    //     // Don’t forget to change degree sign, when rotate compass.
    //     $('.compass').css({ transform: 'rotate(' + (-heading) + 'deg)' });
    //   });
    //
    //   someApp.close(function () {
    //     Compass.unwatch(watchID);
    //   });
    watch: function (callback) {
      var id = ++self._lastId;

      self.init(function (method) {

        if ( method == 'phonegap' ) {
          self._watchers[id] = self._nav.compass.watchHeading(callback);

        } else if ( method == 'webkitOrientation' ) {
          var watcher = function (e) {
            callback(e.webkitCompassHeading);
          };
          self._win.addEventListener('deviceorientation', watcher);
          self._watchers[id] = watcher;

        } else if ( method == 'orientationAndGPS' ) {
          var degrees;
          var watcher = function (e) {
            degrees = -e.alpha + self._gpsDiff;
            if ( degrees < 0 ) {
              degrees += 360;
            } else if ( degrees > 360 ) {
              degrees -= 360;
            }
            callback(degrees);
          };
          self._win.addEventListener('deviceorientation', watcher);
          self._watchers[id] = watcher;

        }
      });

      return id;
    },

    // Remove watcher by watcher ID from `watch`.
    //
    //   Compass.unwatch(watchID)
    unwatch: function (id) {
      self.init(function (m) {

        if ( m == 'phonegap' ) {
          self._nav.compass.clearWatch(self._watchers[id]);

        } else if ( m == 'webkitOrientation' || m == 'orientationAndGPS' ) {
          self._win.removeEventListener(
            'deviceorientation', self._watchers[id]);

        }
        delete self._watchers[id];
      });
      return self;
    },

    // Execute `callback`, when GPS hack activated to detect difference between
    // device orientation and real North from GPS.
    //
    // You need to show to user some message, that he must go outside to be able
    // to receive GPS signal.
    //
    // Callback must be set before `init` or `watch` executing.
    //
    //   Compass.needGPS(function () {
    //     $('.go-outside-message').show();
    //   });
    //
    // Don’t forget to hide message by `needMove` callback in second step.
    needGPS: function (callback) {
      self._callbacks.needGPS.push(callback);
      return self;
    },

    // Execute `callback` on second GPS hack step, when library has GPS signal,
    // but user must move and hold the device straight ahead. Library will use
    // `heading` from GPS movement tracking to detect difference between
    // device orientation and real North.
    //
    // Callback must be set before `init` or `watch` executing.
    //
    //   Compass.needMove(function () {
    //     $('.go-outside-message').hide()
    //     $('.move-and-hold-ahead-message').show();
    //   });
    //
    // Don’t forget to hide message in `init` callback:
    //
    //   Compass.init(function () {
    //     $('.move-and-hold-ahead-message').hide();
    //   });
    needMove: function (callback) {
      self._callbacks.needMove.push(callback);
      return self;
    },

    // Execute `callback` if browser hasn’t any way to get compass heading.
    //
    //   Compass.noSupport(function () {
    //     $('.compass').hide();
    //   });
    //
    // On Firefox detecting can take about 0.5 second. So, it will be better
    // to show compass in `init`, than to hide it in `noSupport`.
    noSupport: function (callback) {
      if ( self.method === false ) {
        callback();
      } else if ( !defined(self.method) ) {
        self._callbacks.noSupport.push(callback);
      }
      return self;
    },

    // Detect compass method and execute `callback`, when library will be
    // initialized. Callback will get method name (or `false` if library can’t
    // detect compass) in first argument.
    //
    // It is best way to check `method` property.
    //
    //   Compass.init(function (method) {
    //     console.log('Compass by ' + method);
    //   });
    init: function (callback) {
      if ( defined(self.method) ) {
        callback(self.method);
        return;
      }
      self._callbacks.init.push(callback);

      if ( self._initing ) {
        return;
      }
      self._initing = true;

      if ( self._nav.compass ) {
        self._start('phonegap');

      } else if ( self._win.DeviceOrientationEvent ) {
        self._checking = 0;
        self._win.addEventListener('deviceorientation', self._checkEvent);
        setTimeout(function () {
          if ( self._checking !== false ) {
            self._start(false);
          }
        }, 500);

      } else {
        self._start(false);
      }
      return self;
    },

    // Last watch ID.
    _lastId: 0,

    // Hash of internal ID to watcher to use it in `unwatch`.
    _watchers: { },

    // Window object for testing.
    _win: window,

    // Navigator object for testing.
    _nav: navigator,

    // List of callbacks.
    _callbacks: {

      // Callbacks from `init` method.
      init: [],

      // Callbacks from `noSupport` method.
      noSupport: [],

      // Callbacks from `needGPS` method.
      needGPS: [],

      // Callbacks from `needMove` method.
      needMove: []

    },

    // Is library now try to detect compass method.
    _initing: false,

    // Difference between `alpha` orientation and real North from GPS.
    _gpsDiff: undefined,

    // Finish library initialization and use `method` to get compass heading.
    _start: function (method) {
      self.method   = method;
      self._initing = false;

      fire('init', [method]);
      self._callbacks.init = [];

      if ( method === false ) {
        fire('noSupport', []);
      }
      self._callbacks.noSupport = [];
    },

    // Tell, that we wait for `DeviceOrientationEvent`.
    _checking: false,

    // Check `DeviceOrientationEvent` to detect compass method.
    _checkEvent: function (e) {
      self._checking += 1;
      var wait = false;

      if ( defined(e.webkitCompassHeading) ) {
        self._start('webkitOrientation');

      } else if ( defined(e.alpha) && self._nav.geolocation ) {
        self._gpsHack();

      } else if ( self._checking > 1 ) {
        self._start(false);

      } else {
        wait = true;
      }

      if ( !wait ) {
        self._checking = false;
        self._win.removeEventListener('deviceorientation', self._checkEvent);
      }
    },

    // Use GPS to detect difference  between `alpha` orientation and real North.
    _gpsHack: function () {
      var first    = true;
      var alphas   = [];
      var headings = [];

      fire('needGPS');

      var saveAlpha = function (e) {
        alphas.push(e.alpha);
      }
      self._win.addEventListener('deviceorientation', saveAlpha);

      var success = function (position) {
        var coords = position.coords
        if ( !defined(coords.heading) ) {
          return; // Position not from GPS
        }

        if ( first ) {
          first = false;
          fire('needMove');
        }

        if ( coords.speed > 1 ) {
          headings.push(coords.heading);
          if ( headings.length >= 5 && alphas.length >= 5 ) {
            self._win.removeEventListener('deviceorientation', saveAlpha);
            self._nav.geolocation.clearWatch(watcher);

            self._gpsDiff = average5(headings) + average5(alphas);
            self._start('orientationAndGPS');
          }
        } else {
          headings = [];
        }
      };
      var error = function () {
        self._win.removeEventListener('deviceorientation', saveAlpha);
        self._start(false);
      };

      var watcher = self._nav.geolocation.
        watchPosition(success, error, { enableHighAccuracy: true });
    }

  };

})();
(function() {
  var defaultZoomLevel, degToRad, el, geolocateBtn, geolocation, getCenterWithHeading, map, markerEl, mk, mod, radToDeg, render, user, view, zoomIsDefault;

  zoomIsDefault = true;

  defaultZoomLevel = 11;

  view = new ol.View({
    center: ol.proj.transform([30.3620696, 59.9514953], 'EPSG:4326', 'EPSG:3857'),
    zoom: defaultZoomLevel
  });

  window.view = view;

  map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: false
      }
    }),
    view: view
  });

  window.map = map;

  markerEl = document.getElementById('user-marker');

  user = {};

  user.marker = new ol.Overlay({
    positioning: 'center-center',
    element: markerEl,
    stopEvent: false
  });

  map.addOverlay(user.marker);

  window.user = user;

  $.getJSON('/data.geojson', function(data) {
    var el, obj, overlay, _i, _len, _ref, _results;
    _ref = data.features;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      obj = _ref[_i];
      el = $('<div class="object-marker"></div>').appendTo('body')[0];
      overlay = new ol.Overlay({
        positioning: 'center-center',
        element: el,
        stopEvent: false
      });
      map.addOverlay(overlay);
      _results.push(overlay.setPosition(ol.proj.transform(obj.geometry.coordinates, 'EPSG:4326', 'EPSG:3857')));
    }
    return _results;
  });

  el = $('<div class="object-marker"></div>').appendTo('body')[0];

  mk = new ol.Overlay({
    positioning: 'center-center',
    element: el,
    stopEvent: false
  });

  map.addOverlay(mk);

  window.mk = mk;

  geolocation = new ol.Geolocation({
    projection: view.getProjection(),
    trackingOptions: {
      maximumAge: 10000,
      enableHighAccuracy: true,
      timeout: 600000
    }
  });

  window.geolocation = geolocation;

  geolocation.on('change', function(evt) {
    var accuracy, heading, m, position, speed;
    position = geolocation.getPosition();
    accuracy = geolocation.getAccuracy();
    heading = geolocation.getHeading() || 0;
    speed = geolocation.getSpeed() || 0;
    m = Date.now();
    user.position = position;
    user.accuracy = accuracy;
    user.heading = heading;
    user.speed = speed;
    if (zoomIsDefault && view.getZoom() === defaultZoomLevel) {
      view.setZoom(14);
      return view.zoomIsDefault = false;
    }
  });

  radToDeg = function(rad) {
    return rad * 360 / (Math.PI * 2);
  };

  degToRad = function(deg) {
    return deg * Math.PI * 2 / 360;
  };

  mod = function(n) {
    return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
  };

  map.beforeRender(function(map, frameState) {
    var viewState;
    if (frameState !== null) {
      viewState = frameState.viewState;
      if (user.position) {
        viewState.center = user.position;
        user.marker.setPosition(user.position);
      }
    }
    return true;
  });

  getCenterWithHeading = function(position, rotation, resolution) {
    var height, size;
    size = map.getSize();
    height = size[1];
    return [position[0] - Math.sin(rotation) * height * resolution * 1 / 4, position[1] + Math.cos(rotation) * height * resolution * 1 / 4];
  };

  render = function() {
    return map.render();
  };

  geolocateBtn = document.getElementById('geolocate');

  geolocateBtn.addEventListener('click', function() {
    geolocation.setTracking(true);
    map.on('postcompose', render);
    map.render();
    return geolocateBtn.style.display = 'none';
  });

  Compass.init(function(heading) {
    if (heading !== false) {
      return user.rotation = heading;
    }
  });

}).call(this);
