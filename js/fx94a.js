!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";
function i(){return"undefined"!=typeof window}function j(){return t||i()&&(t=window.gsap)&&t.registerPlugin&&t}function m(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e||0)}function o(e,t){return n(e.getAttribute(t))}function q(e,t,s,r,i,o){return P(Math.pow((n(s)-n(e))*i,2)+Math.pow((n(r)-n(t))*o,2))}function r(e){return console.warn(e)}function s(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function v(e){if(!(e=k(e)[0]))return 0;var t,n,i,a,f,h,d,l=e.tagName.toLowerCase(),u=e.style,c=1,g=1;s(e)&&(g=e.getScreenCTM(),c=P(g.a*g.a+g.b*g.b),g=P(g.d*g.d+g.c*g.c));try{n=e.getBBox()}catch(e){r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=n||{x:0,y:0,width:0,height:0},p=_.x,x=_.y,y=_.width,m=_.height;if(n&&(y||m)||!M[l]||(y=o(e,M[l][0]),m=o(e,M[l][1]),"rect"!==l&&"line"!==l&&(y*=2,m*=2),"line"===l&&(p=o(e,"x1"),x=o(e,"y1"),y=Math.abs(y-p),m=Math.abs(m-x))),"path"===l)a=u.strokeDasharray,u.strokeDasharray="none",t=e.getTotalLength()||0,c!==g&&r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(c+g)/2,u.strokeDasharray=a;else if("rect"===l)t=2*y*c+2*m*g;else if("line"===l)t=q(p,x,p+y,x+m,c,g);else if("polyline"===l||"polygon"===l)for(i=e.getAttribute("points").match(b)||[],"polygon"===l&&i.push(i[0],i[1]),t=0,f=2;f<i.length;f+=2)t+=q(i[f-2],i[f-1],i[f],i[f+1],c,g)||0;else"circle"!==l&&"ellipse"!==l||(h=y/2*c,d=m/2*g,t=Math.PI*(3*(h+d)-P((3*h+d)*(h+3*d))));return t||0}function w(e,t){if(!(e=k(e)[0]))return[0,0];t=t||v(e)+1;var s=h.getComputedStyle(e),r=s.strokeDasharray||"",i=n(s.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),t<(r=o<0?t:n(r.substr(0,o))||1e-5)&&(r=t),[Math.max(0,-i),Math.max(0,r-i)]}function x(){i()&&(h=window,l=t=j(),k=t.utils.toArray,d=-1!==((h.navigator||{}).userAgent||"").indexOf("Edge"))}var t,k,h,d,l,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,M={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},P=Math.sqrt,a={version:"3.0.0",name:"drawSVG",register:function register(e){t=e,x()},init:function init(e,t){if(!e.getBBox)return!1;l||x();var r,i,o,a,f=v(e)+1;return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,s){var r,i,o=e.indexOf(" ");return i=o<0?(r=void 0!==s?s+"":e,e):(r=e.substr(0,o),e.substr(o+1)),r=~r.indexOf("%")?n(r)/100*t:n(r),(i=~i.indexOf("%")?n(i)/100*t:n(i))<r?[i,r]:[r,i]}(t,f,(r=w(e,f))[0]),this._length=m(f+10),0===r[0]&&0===i[0]?(o=Math.max(1e-5,i[1]-f),this._dash=m(f+o),this._offset=m(f-r[1]+o),this._offsetPT=this.add(this,"_offset",this._offset,m(f-i[1]+o))):(this._dash=m(r[1]-r[0])||1e-6,this._offset=m(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,m(i[1]-i[0])||1e-5),this._offsetPT=this.add(this,"_offset",this._offset,m(-i[0]))),d&&(a=h.getComputedStyle(e)).strokeLinecap!==a.strokeLinejoin&&(i=n(a.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=s(e)||~(t+"").indexOf("live"),this._props.push("drawSVG"),1},render:function render(e,t){var n,s,r,i,o=t._pt,a=t._style;if(o){for(t._live&&(n=v(t._target)+11)!==t._length&&(s=n/t._length,t._length=n,t._offsetPT.s*=s,t._offsetPT.c*=s,t._dashPT?(t._dashPT.s*=s,t._dashPT.c*=s):t._dash*=s);o;)o.r(e,o.d),o=o._next;r=t._dash,i=t._offset,n=t._length,a.strokeDashoffset=t._offset,1!==e&&e?a.strokeDasharray=r+"px,"+n+"px":(r-i<.001&&n-r<=10&&(a.strokeDashoffset=i+1),a.strokeDasharray=i<.001&&n-r<=10?"none":i===r?"0px, 999999px":r+"px,"+n+"px")}},getLength:v,getPosition:w};j()&&t.registerPlugin(a),e.DrawSVGPlugin=a,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TypeIt=e():t.TypeIt=e()}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,waitUntilVisible:!1,beforeString:function(){},afterString:function(){},beforeStep:function(){},afterStep:function(){},afterComplete:function(){}},r=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.insert=function(e,n){t.waiting.splice(e,0,n)},this.add=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.isArray(e[0])?(t.waiting=t.waiting.concat(e),t):(t.waiting[n?"unshift":"push"](e),t)},this.delete=function(e){return t.waiting.splice(e,1),t},this.reset=function(){return t.waiting=t.executed.concat(t.waiting),t.executed=[],t},this.executed=[],this.waiting=e,!e.length&&n&&this.add(n)},o=function(t){return document.createElement(t)};function u(t,e){return Math.abs(Math.random()*(t+e-(t-e))+(t-e))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=o("style");n.id=e,n.appendChild(document.createTextNode(t)),document.head.appendChild(n)}var a=function(t){return["textarea","input"].indexOf(t.tagName.toLowerCase())>-1},c=function(t){return Array.isArray(t)?t:[t]},f=function(t){return[].slice.call(t)},l=function(t,e){var n=t.nextSibling;return!!n&&!n.isEqualNode(e)};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h=function(t,e){var n=e;if(a(t))t.value="".concat(t.value).concat(n);else{var i=f(t.childNodes).filter((function(t){return t.classList&&t.classList.contains("ti-cursor")}));if(i=i.length?i[0]:null,"object"===p(e)&&!(e instanceof HTMLElement)){var r=e.ancestorTree.slice(0).reverse().join(" "),u=f(t.querySelectorAll("".concat(r))),s=u[u.length-1];if(s&&function(t,e){if(!t)return!1;for(var n=!1,i=[],r=t;!n;)i.push(l(r,e)),(r=r.parentNode)&&!r.hasAttribute("data-typeit-id")||(n=!0);return!i.some((function(t){return t}))}(s,i))t=s,n=e.content;else if(n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=o(t);return e.forEach((function(t){i.setAttribute(t.name,t.value)})),i.innerHTML=n,i}(e.ancestorTree[0],e.attributes,e.content),e.ancestorTree.length>1){var c=f(t.querySelectorAll(e.ancestorTree[1]));t=c[c.length-1]}}n="object"===p(n)?n:document.createTextNode(n),t.insertBefore(n,i&&t.hasAttribute("data-typeit-id")?i:null)}},d=function(t){var e=[];return e.concat.apply(e,t)},y=function(t){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body},v=function(t){return f(t.childNodes).map((function(t){return 3===t.nodeType?t.nodeValue.split(""):t}))},m=function(t,e,n){return{ancestorTree:e,attributes:(i=t,f(i.attributes).map((function(t){return{name:t.name,value:t.nodeValue}}))),content:n};var i},g=function(t,e){var n=m(t,e,""),i=v(t).map((function(n,i){return Array.isArray(n)?n.map((function(n,i){return m(t,e,n)})):n}));return i.unshift(n),d(i)},b=function(t){return t instanceof HTMLElement&&"BR"!==t.tagName},S=function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e.map((function(t){if(b(t)){if(!n)return f(t.childNodes);for(var e=t.parentNode,i=[t.tagName];["BODY","HTML"].indexOf(e.tagName)<0;)i.push(e.tagName),e=e.parentNode;return g(t,i)}return t}));return(i=d(i)).some((function(t){return b(t)}))?t(i,n):i};function w(t){var e=y(t),n=v(e);return S(n)}function q(t){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?w(t):t.split("")}var x=function(t,e){e?t.value="":t.querySelector(".ti-cursor")&&(t.innerHTML="")},T=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!Array.isArray(t),r=t.length;return(t=i?new Array(t).fill(0):t).map((function(t,o){if(i)return e;var u=[e,t];return n&&(0===o&&u.push({isFirst:!0}),o+1===r&&u.push({isLast:!0})),u}))},A=function(t){t.parentNode.removeChild(t)},N=function(t){return 3!==t.nodeType&&"BR"!==t.tagName&&!t.firstChild},L=function(t){return t.some((function(t){return N(t)}))},M=function(t){for(var e=f(t.querySelectorAll("*")),n=L(e);e.length&&n;){var i=!1;e.forEach((function(t){N(t)&&(A(t),i=!0)})),i&&(e=f(t.querySelectorAll("*"))),n=L(e)}return e},D=function(t){return Array.isArray(t)||(t=[t/2,t/2]),{before:t[0],after:t[1],total:t[0]+t[1]}},$=function(t,e,n){var i=(e=null!==e?e:t/3)/2;return n?[u(t,t/2),u(e,i)]:[t,e]};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.typeIt,u=e.element,l=e.id,p=e.options,d=e.queue,v=void 0===d?[]:d,m=e.isAReset,g=void 0!==m&&m,b=function(){var e=f(t.$e.childNodes).filter((function(t){return!t.isEqualNode(L)}));return S(e,!1)},N=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=t.opts.nextStringDelay;t.queue.insert(e,[t.pause,i.before]),t.queue.insert(e+n+1,[t.pause,i.after])};this.wait=function(t,e){this.timeouts.push(setTimeout(t,e))};this.pause=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n,i){t.wait((function(){return n()}),e||t.opts.nextStringDelay.total)}))},this.reset=function(){return this.queue.reset(),new E({typeIt:n,element:this.$e,id:l,options:this.opts,queue:this.queue.waiting,isAReset:!0})},this.init=function(){var e=this;if(!this.status.started){if(!O&&t.opts.cursor&&(s("@keyframes blink-".concat(l," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1}}[data-typeit-id='").concat(l,"'] .ti-cursor { animation: blink-").concat(l," ").concat(t.opts.cursorSpeed/1e3,"s infinite; }"),l),(L=o("span")).innerHTML=y(t.opts.cursorChar).innerHTML,L.className="ti-cursor",L.setAttribute("style","display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;"),t.$e.appendChild(L)),!this.opts.waitUntilVisible)return this.status.started=!0,this.fire();new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(e.fire(),n.unobserve(e.$e))}))}),{threshold:1}).observe(this.$e)}},this.fire=function(){for(var e=this,i=this.queue.waiting.slice(),r=Promise.resolve(),o=function(t){var o=i[t],u=[o,e.queue,n];r=r.then((function(){return new Promise((function(t,n){var i,r;if(e.status.frozen)return n();(e.pace=$(e.opts.speed,e.opts.deleteSpeed,e.opts.lifeLike),o[2]&&o[2].isFirst)&&(r=e.opts).beforeString.apply(r,u);(i=e.opts).beforeStep.apply(i,u),o[0].call(e,o[1],o[2]).then((function(){var n,i,r=e.queue.waiting.shift();if(o[2]&&o[2].isPhantom)return t();o[2]&&o[2].isLast&&(i=e.opts).afterString.apply(i,u);return(n=e.opts).afterStep.apply(n,u),e.queue.executed.push(r),t()}))}))}))},u=0;u<i.length;u++)o(u);r.then((function(){if(e.opts.loop){var i=e.opts.loopDelay?e.opts.loopDelay:e.opts.nextStringDelay;e.wait((function(){!function(e){t.queue.reset().delete(0).add([t.pause,e.before],!0);for(var n=0;n<b().length;n++)t.queue.add([t.delete,null,{isPhantom:!0}],!0)}(i),e.fire()}),i.after)}e.status.completed=!0,e.opts.afterComplete(n)})).catch((function(){}))},this.type=function(t){var e=this;return"object"!==j(t)||t.content?new Promise((function(n){e.wait((function(){return h(e.$e,t),n()}),e.pace[0])})):(h(this.$e,t),Promise.resolve())},this.empty=function(){var t=this;return new Promise((function(e){return O?t.$e.value="":f(t.$e.childNodes).forEach((function(t){L.isEqualNode(t)||A(t)})),e()}))},this.delete=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n){t.wait((function(){var i=b();return i.length&&A(i[i.length-1]),M(t.$e),e&&i.length-1>0?t.delete(!0).then((function(){return n()})):n()}),t.pace[1])}))},this.setOptions=function(t){var e=this;return new Promise((function(n){return e.opts=Object.assign({},e.opts,t),n()}))};var L=null,O=a(u);this.status={started:!1,complete:!1,frozen:!1,destroyed:!1},this.$e=u,this.timeouts=[],this.opts=Object.assign({},i,p),this.opts.html=!O&&this.opts.html,this.opts.nextStringDelay=D(this.opts.nextStringDelay),this.opts.loopDelay=D(this.opts.loopDelay),this.queue=new r(v,[this.pause,this.opts.startDelay]),this.$e.setAttribute("data-typeit-id",l),s("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}"),x(u,O);var P=c(this.opts.strings);P=function(e){var n=t.$e.innerHTML;return n?(t.$e.innerHTML="",t.opts.startDelete?(w(n).forEach((function(e){h(t.$e,e)})),t.queue.add([t.delete,!0]),N(1),e):[n.trim()].concat(e)):e}(P),this.opts.strings=P.map((function(t){return t.replace(/<\!--.*?-->/g,"")})),this.opts.strings.length&&!g&&t.opts.strings.forEach((function(e,n){var i=q(e,t.opts.html);t.queue.add(T(i,t.type,!0));var r=t.queue.waiting.length;if(n+1!==t.opts.strings.length){if(t.opts.breakLines)return t.queue.add([t.type,o("BR")]),void N(r);t.queue.add(T(i,t.delete)),N(r,e.length)}}))}var O=function(t,e,n){return!!t.length&&!t.some((function(t){return t.status[e]!==n}))},P=function(t){return"string"==typeof t?t=document.querySelectorAll(t):t.forEach||(t=[t]),f(t)};function C(t,e){var n=this;this.instances=P(t).map((function(t){return new E({typeIt:n,element:t,id:Math.random().toString(36).substring(2,15),options:e,queue:[],isAReset:!1})}));var i=function(t){n.instances.forEach((function(e){t.call(n,e)}))},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;i((function(i){var o="string"!=typeof t,u=o?t:i[t],s=T(r,[u,o?n:e]);i.queue.add(s)}))};this.is=function(t){return O(this.instances,t,!0)},this.freeze=function(){i((function(t){t.status.frozen=!0}))},this.unfreeze=function(){i((function(t){t.status.frozen&&(t.status.frozen=!1,t.fire())}))},this.type=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i((function(e){var n=q(t,e.opts.html);e.queue.add(T(n,e.type,!0))})),this},this.delete=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r("delete",null===t,null===t?1:t),this},this.pause=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r("pause",t),this},this.break=function(){return r("type",o("BR")),this},this.options=function(t){return r("setOptions",t),this},this.exec=function(t){return r(t),this},this.destroy=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.instances=this.instances.map((function(e){if(e.timeouts.forEach((function(t){clearTimeout(t)})),e.timeouts=[],t){var n=e.isInput?null:e.$e.querySelector(".ti-cursor");n&&e.$e.removeChild(n)}return e.status.destroyed=!0,e}))},this.empty=function(){return r("empty"),this},this.reset=function(){return this.destroy(),this.instances=this.instances.map((function(t){return t.reset()})),this},this.go=function(){return i((function(t){t.init()})),this}}n.d(e,"default",(function(){return C}))}]).default}));
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"鈷�":"A","锛�":"A","脌":"A","脕":"A","脗":"A","岷�":"A","岷�":"A","岷�":"A","岷�":"A","脙":"A","膧":"A","膫":"A","岷�":"A","岷�":"A","岷�":"A","岷�":"A","圈":"A","菭":"A","脛":"A","菫":"A","岷�":"A","脜":"A","呛":"A","菎":"A","葊":"A","葌":"A","岷�":"A","岷�":"A","岷�":"A","岣€":"A","膭":"A","群":"A","獗�":"A","隃�":"AA","脝":"AE","羌":"AE","洽":"AE","隃�":"AO","隃�":"AU","隃�":"AV","隃�":"AV","隃�":"AY","鈷�":"B","锛�":"B","岣�":"B","岣�":"B","岣�":"B","蓛":"B","苽":"B","苼":"B","鈷�":"C","锛�":"C","膯":"C","膱":"C","膴":"C","膶":"C","脟":"C","岣�":"C","茋":"C","然":"C","隃�":"C","鈷�":"D","锛�":"D","岣�":"D","膸":"D","岣�":"D","岣�":"D","岣�":"D","岣�":"D","膼":"D","茓":"D","茒":"D","茐":"D","隄�":"D","潜":"DZ","莿":"DZ","遣":"Dz","菂":"Dz","鈷�":"E","锛�":"E","脠":"E","脡":"E","脢":"E","峄€":"E","岷�":"E","峄�":"E","峄�":"E","岷�":"E","膾":"E","岣�":"E","岣�":"E","臄":"E","臇":"E","脣":"E","岷�":"E","臍":"E","葎":"E","葐":"E","岷�":"E","峄�":"E","权":"E","岣�":"E","臉":"E","岣�":"E","岣�":"E","茞":"E","茙":"E","鈷�":"F","锛�":"F","岣�":"F","茟":"F","隄�":"F","鈷�":"G","锛�":"G","谴":"G","臏":"G","岣�":"G","臑":"G","臓":"G","铅":"G","蘑":"G","扦":"G","茡":"G","隇�":"G","隄�":"G","隄�":"G","鈷�":"H","锛�":"H","膜":"H","岣�":"H","岣�":"H","葹":"H","岣�":"H","岣�":"H","岣�":"H","摩":"H","獗�":"H","獗�":"H","隇�":"H","鈷�":"I","锛�":"I","脤":"I","脥":"I","脦":"I","抹":"I","莫":"I","默":"I","陌":"I","脧":"I","岣�":"I","峄�":"I","菑":"I","葓":"I","葕":"I","峄�":"I","漠":"I","岣�":"I","茥":"I","鈷�":"J","锛�":"J","拇":"J","蓤":"J","鈸€":"K","锛�":"K","岣�":"K","迁":"K","岣�":"K","亩":"K","岣�":"K","茦":"K","獗�":"K","隄€":"K","隄�":"K","隄�":"K","隇�":"K","鈸�":"L","锛�":"L","目":"L","墓":"L","慕":"L","岣�":"L","岣�":"L","幕":"L","岣�":"L","岣�":"L","艁":"L","冉":"L","獗�":"L","獗�":"L","隄�":"L","隄�":"L","隇€":"L","菄":"LJ","菆":"Lj","鈸�":"M","锛�":"M","岣�":"M","峁€":"M","峁�":"M","獗�":"M","茰":"M","鈸�":"N","锛�":"N","歉":"N","艃":"N","脩":"N","峁�":"N","艊":"N","峁�":"N","艆":"N","峁�":"N","峁�":"N","葼":"N","茲":"N","隇�":"N","隇�":"N","菉":"NJ","菋":"Nj","鈸�":"O","锛�":"O","脪":"O","脫":"O","脭":"O","峄�":"O","峄�":"O","峄�":"O","峄�":"O","脮":"O","峁�":"O","痊":"O","峁�":"O","艑":"O","峁�":"O","峁�":"O","艓":"O","犬":"O","劝":"O","脰":"O","泉":"O","峄�":"O","艕":"O","菓":"O","葘":"O","葞":"O","茽":"O","峄�":"O","峄�":"O","峄�":"O","峄�":"O","峄�":"O","峄�":"O","峄�":"O","仟":"O","乾":"O","脴":"O","蔷":"O","茊":"O","茻":"O","隄�":"O","隄�":"O","脾":"OI","隄�":"OO","娶":"OU","鈸�":"P","锛�":"P","峁�":"P","峁�":"P","皮":"P","獗�":"P","隄�":"P","隄�":"P","隄�":"P","鈸�":"Q","锛�":"Q","隄�":"Q","隄�":"Q","蓨":"Q","鈸�":"R","锛�":"R","艛":"R","峁�":"R","艠":"R","葠":"R","葤":"R","峁�":"R","峁�":"R","艝":"R","峁�":"R","蓪":"R","獗�":"R","隄�":"R","隇�":"R","隇�":"R","鈸�":"S","锛�":"S","岷�":"S","艢":"S","峁�":"S","艤":"S","峁�":"S","艩":"S","峁�":"S","峁�":"S","峁�":"S","葮":"S","艦":"S","獗�":"S","隇�":"S","隇�":"S","鈸�":"T","锛�":"T","峁�":"T","扭":"T","峁�":"T","葰":"T","泞":"T","峁�":"T","峁�":"T","纽":"T","片":"T","飘":"T","染":"T","隇�":"T","隃�":"TZ","鈸�":"U","锛�":"U","脵":"U","脷":"U","脹":"U","浓":"U","峁�":"U","弄":"U","峁�":"U","努":"U","脺":"U","菦":"U","菞":"U","菚":"U","菣":"U","峄�":"U","女":"U","虐":"U","菗":"U","葦":"U","葨":"U","漂":"U","峄�":"U","峄�":"U","峄�":"U","峄�":"U","峄�":"U","峄�":"U","峁�":"U","挪":"U","峁�":"U","峁�":"U","蓜":"U","鈸�":"V","锛�":"V","峁�":"V","峁�":"V","撇":"V","隄�":"V","蓞":"V","隄�":"VY","鈸�":"W","锛�":"W","岷€":"W","岷�":"W","糯":"W","岷�":"W","岷�":"W","岷�":"W","獗�":"W","鈸�":"X","锛�":"X","岷�":"X","岷�":"X","鈸�":"Y","锛�":"Y","峄�":"Y","脻":"Y","哦":"Y","峄�":"Y","炔":"Y","岷�":"Y","鸥":"Y","峄�":"Y","峄�":"Y","瞥":"Y","蓭":"Y","峄�":"Y","鈸�":"Z","锛�":"Z","殴":"Z","岷�":"Z","呕":"Z","沤":"Z","岷�":"Z","岷�":"Z","频":"Z","趣":"Z","獗�":"Z","獗�":"Z","隄�":"Z","鈸�":"a","锝�":"a","岷�":"a","脿":"a","谩":"a","芒":"a","岷�":"a","岷�":"a","岷�":"a","岷�":"a","茫":"a","膩":"a","膬":"a","岷�":"a","岷�":"a","岷�":"a","岷�":"a","颧":"a","恰":"a","盲":"a","菬":"a","岷�":"a","氓":"a","腔":"a","菐":"a","葋":"a","葍":"a","岷�":"a","岷�":"a","岷�":"a","岣�":"a","膮":"a","獗�":"a","蓯":"a","隃�":"aa","忙":"ae","墙":"ae","牵":"ae","隃�":"ao","隃�":"au","隃�":"av","隃�":"av","隃�":"ay","鈸�":"b","锝�":"b","岣�":"b","岣�":"b","岣�":"b","苺":"b","苾":"b","蓳":"b","鈸�":"c","锝�":"c","膰":"c","膲":"c","膵":"c","膷":"c","莽":"c","岣�":"c","茍":"c","燃":"c","隃�":"c","鈫�":"c","鈸�":"d","锝�":"d","岣�":"d","膹":"d","岣�":"d","岣�":"d","岣�":"d","岣�":"d","膽":"d","茖":"d","蓶":"d","蓷":"d","隄�":"d","浅":"dz","菃":"dz","鈸�":"e","锝�":"e","猫":"e","茅":"e","锚":"e","峄�":"e","岷�":"e","峄�":"e","峄�":"e","岷�":"e","膿":"e","岣�":"e","岣�":"e","臅":"e","臈":"e","毛":"e","岷�":"e","臎":"e","葏":"e","葒":"e","岷�":"e","峄�":"e","醛":"e","岣�":"e","臋":"e","岣�":"e","岣�":"e","蓢":"e","蓻":"e","菨":"e","鈸�":"f","锝�":"f","岣�":"f","茠":"f","隄�":"f","鈸�":"g","锝�":"g","堑":"g","臐":"g","岣�":"g","臒":"g","摹":"g","千":"g","模":"g","钎":"g","蔂":"g","隇�":"g","岬�":"g","隄�":"g","鈸�":"h","锝�":"h","磨":"h","岣�":"h","岣�":"h","葻":"h","岣�":"h","岣�":"h","岣�":"h","岷�":"h","魔":"h","獗�":"h","獗�":"h","丧":"h","茣":"hv","鈸�":"i","锝�":"i","矛":"i","铆":"i","卯":"i","末":"i","墨":"i","沫":"i","茂":"i","岣�":"i","峄�":"i","菒":"i","葔":"i","葖":"i","峄�":"i","寞":"i","岣�":"i","扫":"i","谋":"i","鈸�":"j","锝�":"j","牡":"j","前":"j","蓧":"j","鈸�":"k","锝�":"k","岣�":"k","签":"k","岣�":"k","姆":"k","岣�":"k","茩":"k","獗�":"k","隄�":"k","隄�":"k","隄�":"k","隇�":"k","鈸�":"l","锝�":"l","艀":"l","暮":"l","木":"l","岣�":"l","岣�":"l","募":"l","岣�":"l","岣�":"l","趴":"l","艂":"l","茪":"l","色":"l","獗�":"l","隄�":"l","隇�":"l","隄�":"l","菈":"lj","鈸�":"m","锝�":"m","岣�":"m","峁�":"m","峁�":"m","杀":"m","莎":"m","鈸�":"n","锝�":"n","枪":"n","艅":"n","帽":"n","峁�":"n","艌":"n","峁�":"n","艈":"n","峁�":"n","峁�":"n","茷":"n","刹":"n","艍":"n","隇�":"n","隇�":"n","菍":"nj","鈸�":"o","锝�":"o","貌":"o","贸":"o","么":"o","峄�":"o","峄�":"o","峄�":"o","峄�":"o","玫":"o","峁�":"o","拳":"o","峁�":"o","艒":"o","峁�":"o","峁�":"o","艔":"o","券":"o","缺":"o","枚":"o","全":"o","峄�":"o","艖":"o","菕":"o","葝":"o","葟":"o","啤":"o","峄�":"o","峄�":"o","峄�":"o","峄�":"o","峄�":"o","峄�":"o","峄�":"o","谦":"o","黔":"o","酶":"o","强":"o","蓴":"o","隄�":"o","隄�":"o","傻":"o","疲":"oi","龋":"ou","隄�":"oo","鈸�":"p","锝�":"p","峁�":"p","峁�":"p","匹":"p","岬�":"p","隄�":"p","隄�":"p","隄�":"p","鈸�":"q","锝�":"q","蓩":"q","隄�":"q","隄�":"q","鈸�":"r","锝�":"r","艜":"r","峁�":"r","艡":"r","葢":"r","葥":"r","峁�":"r","峁�":"r","艞":"r","峁�":"r","蓫":"r","山":"r","隄�":"r","隇�":"r","隇�":"r","鈸�":"s","锝�":"s","脽":"s","艣":"s","峁�":"s","艥":"s","峁�":"s","拧":"s","峁�":"s","峁�":"s","峁�":"s","葯":"s","艧":"s","瓤":"s","隇�":"s","隇�":"s","岷�":"s","鈸�":"t","锝�":"t","峁�":"t","岷�":"t","钮":"t","峁�":"t","葲":"t","牛":"t","峁�":"t","峁�":"t","脓":"t","骗":"t","蕡":"t","獗�":"t","隇�":"t","隃�":"tz","鈸�":"u","锝�":"u","霉":"u","煤":"u","没":"u","农":"u","峁�":"u","奴":"u","峁�":"u","怒":"u","眉":"u","菧":"u","菢":"u","菛":"u","菤":"u","峄�":"u","暖":"u","疟":"u","菙":"u","葧":"u","葪":"u","瓢":"u","峄�":"u","峄�":"u","峄�":"u","峄�":"u","峄�":"u","峄�":"u","峁�":"u","懦":"u","峁�":"u","峁�":"u","蕢":"u","鈸�":"v","锝�":"v","峁�":"v","峁�":"v","蕥":"v","隄�":"v","蕦":"v","隄�":"vy","鈸�":"w","锝�":"w","岷�":"w","岷�":"w","诺":"w","岷�":"w","岷�":"w","岷�":"w","岷�":"w","獗�":"w","鈸�":"x","锝�":"x","岷�":"x","岷�":"x","鈸�":"y","锝�":"y","峄�":"y","媒":"y","欧":"y","峄�":"y","瘸":"y","岷�":"y","每":"y","峄�":"y","岷�":"y","峄�":"y","拼":"y","蓮":"y","峄�":"y","鈸�":"z","锝�":"z","藕":"z","岷�":"z","偶":"z","啪":"z","岷�":"z","岷�":"z","贫":"z","去":"z","蓘":"z","獗�":"z","隄�":"z","螁":"螒","螆":"螘","螇":"螚","螉":"螜","为":"螜","螌":"螣","螏":"违","潍":"违","螐":"惟","维":"伪","苇":"蔚","萎":"畏","委":"喂","蠆":"喂","螑":"喂","蠈":"慰","蠉":"蠀","蠇":"蠀","伟":"蠀","蠅":"蠅","蟼":"蟽"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results鈥�"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching鈥�"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var _=function(){};_.version="2.0.7",window.addEventListener("mousewheel",function(){});var P="data-scrollmagic-pin-spacer";_.Controller=function(e){var n,r,i="REVERSE",t="PAUSED",o=z.defaults,s=this,a=R.extend({},o,e),l=[],c=!1,f=0,u=t,d=!0,h=0,p=!0,g=function(){0<a.refreshInterval&&(r=window.setTimeout(E,a.refreshInterval))},v=function(){return a.vertical?R.get.scrollTop(a.container):R.get.scrollLeft(a.container)},m=function(){return a.vertical?R.get.height(a.container):R.get.width(a.container)},w=this._setScrollPos=function(e){a.vertical?d?window.scrollTo(R.get.scrollLeft(),e):a.container.scrollTop=e:d?window.scrollTo(e,R.get.scrollTop()):a.container.scrollLeft=e},y=function(){if(p&&c){var e=R.type.Array(c)?c:l.slice(0);c=!1;var t=f,n=(f=s.scrollPos())-t;0!==n&&(u=0<n?"FORWARD":i),u===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)})}},S=function(){n=R.rAF(y)},b=function(e){"resize"==e.type&&(h=m(),u=t),!0!==c&&(c=!0,S())},E=function(){if(!d&&h!=m()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}a.container.dispatchEvent(t)}l.forEach(function(e,t){e.refresh()}),g()};this._options=a;var x=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==s)e.addTo(s);else if(l.indexOf(e)<0)for(var t in l.push(e),l=x(l),e.on("shift.controller_sort",function(){l=x(l)}),a.globalSceneOptions)e[t]&&e[t].call(e,a.globalSceneOptions[t]);return s},this.removeScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=l.indexOf(e);-1<t&&(e.off("shift.controller_sort"),l.splice(t,1),e.remove())}return s},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){s.updateScene(e,n)}):n?e.update(!0):!0!==c&&e instanceof _.Scene&&(-1==(c=c||[]).indexOf(e)&&c.push(e),c=x(c),S()),s},this.update=function(e){return b({type:"resize"}),e&&y(),s},this.scrollTo=function(e,t){if(R.type.Number(e))w.call(a.container,e,t);else if(e instanceof _.Scene)e.controller()===s&&s.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))w=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=a.vertical?"top":"left",i=R.get.offset(a.container),o=R.get.offset(n);d||(i[r]-=s.scrollPos()),s.scrollTo(o[r]-i[r],t)}}return s},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(v=e),s):v.call(s)},this.info=function(e){var t={size:h,vertical:a.vertical,scrollPos:f,scrollDirection:u,container:a.container,isDocument:d};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return s},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,s.updateScene(l,!0)),s):p},this.destroy=function(e){window.clearTimeout(r);for(var t=l.length;t--;)l[t].destroy(e);return a.container.removeEventListener("resize",b),a.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in a)o.hasOwnProperty(e)||delete a[e];if(a.container=R.get.elements(a.container)[0],!a.container)throw"ScrollMagic.Controller init failed.";(d=a.container===window||a.container===document.body||!document.body.contains(a.container))&&(a.container=window),h=m(),a.container.addEventListener("resize",b),a.container.addEventListener("scroll",b);var t=parseInt(a.refreshInterval,10);a.refreshInterval=R.type.Number(t)?t:o.refreshInterval,g()}(),s};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,i=!0,s={};this.on=function(e,i){return R.type.Function(i)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:i}))}),d},this.off=function(e,o){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],i=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||i!==r.namespace&&"*"!==i||o&&o!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){if(e){var t=e.trim().split("."),r=t[0],i=t[1],o=s[r];o&&o.forEach(function(e,t){i&&i!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})}return d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),o(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(i!=e&&(i=!!e,d.update(!0)),d):i},this.remove=function(){if(l){l.info("container").removeEventListener("resize",S);var e=l;l=void 0,e.removeScene(d),d.trigger("remove")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){if(l)if(e)if(l.enabled()&&i){var t,n=l.info("scrollPos");t=0<h.duration?(n-a.start)/(a.end-a.start):n>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:n}),d.progress(t)}else m&&p===f&&C(!0);else l.updateScene(d,!1);return d},this.refresh=function(){return o(),y(),d},this.progress=function(e){if(arguments.length){var t=!1,n=p,r=l?l.info("scrollDirection"):"PAUSED",i=h.reverse||g<=e;if(0===h.duration?(t=g!=e,p=0===(g=e<1&&i?0:1)?c:f):e<0&&p!==c&&i?(p=c,t=!(g=0)):0<=e&&e<1&&i?(g=e,p=f,t=!0):1<=e&&p!==u?(g=1,p=u,t=!0):p!==f||i||C(),t){var o={progress:g,state:p,scrollDirection:r},s=p!=n,a=function(e){d.trigger(e,o)};s&&n!==f&&(a("enter"),a(n===c?"start":"end")),a("progress"),s&&p!==f&&(a(p===c?"start":"end"),a("leave"))}return d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},o=function(e){if(n){var t="duration";x(t,n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))}},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),i=R.get.offset(r.container),o=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(i[o]-=l.scrollPos()),t=s[o]-i[o]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)){var e=parseFloat(t)/100;t=function(){return l?l.info("size")*e:0}}if(R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n&&(n=void 0),0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),-1<D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&C(),t&&F()}).on("progress.internal",function(e){C()}).on("add.internal",function(e){F()}).on("destroy.internal",function(e){d.removePin(e.reset)});var C=function(e){if(m&&l){var t=l.info(),n=w.spacer.firstChild;if(e||p!==f){var r={position:w.inFlow?"relative":"absolute",top:0,left:0},i=R.css(n,"position")!=r.position;w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))?i=!0:p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom"))&&(i=!0)):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),i&&F()}else{"fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),F());var o=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10;o[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:o.top,left:o.left})}}},F=function(){if(m&&l&&w.inFlow){var e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),i={};w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(i["min-width"]=R.get.width(t?m:n,!0,!0),i.width=e?i["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(i["min-height"]=R.get.height(t?n:m,!0,!r),i.height=e?i["min-height"]:"auto"),w.pushFollowers&&(i["padding"+(t?"Top":"Left")]=h.duration*g,i["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,i)}},L=function(){l&&m&&p===f&&!l.info("isDocument")&&C()},T=function(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&F()},A=function(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var i="absolute"!=R.css(m,"position"),o=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!i&&t.pushFollowers&&(t.pushFollowers=!1);var a=m.parentNode.insertBefore(document.createElement("div"),m),l=R.extend(o,{position:i?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(i||R.extend(l,R.css(m,["width","height"])),R.css(a,l),a.setAttribute(P,""),R.addClass(a,t.spacerClass),w={spacer:a,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&i&&R.isMarginCollapseType(o.display)},pushFollowers:t.pushFollowers,inFlow:i},!m.___origStyle){m.___origStyle={};var c=m.style;r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=c[e]||""})}return w.relSize.width&&R.css(a,{width:s.width}),w.relSize.height&&R.css(a,{height:s.height}),a.appendChild(m),R.css(m,{position:i?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",L),window.addEventListener("resize",L),window.addEventListener("resize",T),m.addEventListener("mousewheel",A),m.addEventListener("DOMMouseScroll",A),C(),d},this.removePin=function(e){if(m){if(p===f&&C(!0),e||!l){var t=w.spacer.firstChild;if(t.hasAttribute(P)){var n=w.spacer.style,r={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)}w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",L),window.removeEventListener("resize",L),window.removeEventListener("resize",T),m.removeEventListener("mousewheel",A),m.removeEventListener("DOMMouseScroll",A),m=void 0}return d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var i in r=r||{})this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){var n,e={},a=function(e){return parseFloat(e)||0},l=function(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)},r=function(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;if(n&&r){var o=l(t);i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)}return i},c=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};e.extend=function(e){for(e=e||{},n=1;n<arguments.length;n++)if(arguments[n])for(var t in arguments[n])arguments[n].hasOwnProperty(t)&&(e[t]=arguments[n][t]);return e},e.isMarginCollapseType=function(e){return-1<["block","flex","list-item","table","-webkit-box"].indexOf(e)};var i=0,t=["ms","moz","webkit","o"],o=s.requestAnimationFrame,f=s.cancelAnimationFrame;for(n=0;!o&&n<4;++n)o=s[t[n]+"RequestAnimationFrame"],f=s[t[n]+"CancelAnimationFrame"]||s[t[n]+"CancelRequestAnimationFrame"];o||(o=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),r=s.setTimeout(function(){e(t+n)},n);return i=t+n,r}),f||(f=function(e){s.clearTimeout(e)}),e.rAF=o.bind(s),e.cAF=f.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var i=e[n];t[n]=u.DomElement(i)?i:d.elements(i)}else(u.DomElement(e)||e===document||e===s)&&(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var i in t){var o=t[i];o==parseFloat(o)&&(o+="px"),e.style[c(i)]=o}},e}(window||{});return _});
!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,s,u){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var i,o=this;o.on("progress.plugin_gsap",function(){a()}),o.on("destroy.plugin_gsap",function(e){o.removeTween(e.reset)});var a=function(){if(i){var e=o.progress(),n=o.state();i.repeat&&-1===i.repeat()?"DURING"===n&&i.paused()?i.play():"DURING"===n||i.paused()||i.pause():e!=i.progress()&&(0===o.duration()?0<e?i.play():i.reverse():o.tweenChanges()&&i.tweenTo?i.tweenTo(e*i.duration()):i.progress(e).pause())}};o.setTween=function(e,n,r){var t;1<arguments.length&&(arguments.length<3&&(r=n,n=1),e=s.to(e,n,r));try{(t=u?new u({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return o}return i&&o.removeTween(),i=t,e.repeat&&-1===e.repeat()&&(i.repeat(-1),i.yoyo(e.yoyo())),a(),o},o.removeTween=function(e){return i&&(e&&i.progress(0).pause(),i.kill(),i=void 0),o}})});
!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var dispatch=$.event.dispatch||$.event.handle,special=$.event.special,uid1="D"+ +new Date,uid2="D"+(+new Date+1);special.scrollstart={setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer?clearTimeout(timer):(evt.type="scrollstart",dispatch.apply(_self,_args)),timer=setTimeout(function(){timer=null},_data.latency)};$(this).bind("scroll",handler).data(uid1,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid1))}},special.scrollstop={latency:250,setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer&&clearTimeout(timer),timer=setTimeout(function(){timer=null,evt.type="scrollstop",dispatch.apply(_self,_args)},_data.latency)};$(this).bind("scroll",handler).data(uid2,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid2))}}});
var mobile=false;
var mobileBreak=768;
var stickyBreak=900;
var menuBreak=1200;
if($(window).width() <=mobileBreak){mobile=true;}
var is_firefox=navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var path;
function freezePage(){$('body').css({'width':'100%','height':'100%','overflow':'hidden'});}
function unfreezePage(){$('body').css({'width':'','height':'','overflow':''});}
function animScroll(sec, speed, offset){
activeOffset=$(sec).offset().top+offset;
TweenMax.to('html,body', speed, {scrollTop:activeOffset, ease:Expo.easeInOut});
}
var pageInactive=false;
$(window).focus(function(){
pageInactive=false;
});
$(window).blur(function(){
pageInactive=true;
});
gsap.config({
nullTargetWarn: false,
});
var winW=$(window).width();
var winH=window.innerHeight;
$(window).resize(function(){
winW=$(window).width();
winH=window.innerHeight;
if(winW<=mobileBreak&&!mobile){
mobile=true;
}
if(winW>mobileBreak&&mobile){
mobile=false;
}
if(winW<=stickyBreak){
if(stickyOpen){
$('#globalHeader').removeClass('sticky');
$('#globalMenu').removeClass('sticky');
stickyOpen=false;
}}
if(winW>stickyBreak){
if(sT>0&&!stickyOpen){
setSticky();
}}
if(winW>menuBreak&&$('#globalMenu').hasClass('open')){
closeMenu();
unfreezePage();
}
if($('.hasScale').length > 0){
updateScales();
}
if($('body').attr('id')=='page-company-vs'){
updateCompareChart()
}
if($('.module-slider-wrap').length>0){updateModSliders();}
if($('.customer-slider').length>0){updateCustomerSlides();}})
function updateScales(){
$('.hasScale').each(function(){
if(winW<Number($(this).attr('data-limit'))){
fullW=Number($(this).attr('data-width'));
trgW=$(this).find('.sizer').width();
scDif=Number(trgW/fullW);
if(scDif > 1){scDif=1;}
if(scDif > 0){
TweenMax.set($(this).find('.willScale'), {scaleX:scDif, scaleY:scDif});
}}else{
$(this).find('.willScale').attr({'style':''});
}})
}
function sizeRetina(){
$('.retina').each(function(){
tmpW=Math.round($(this).find('img').width());
$(this).find('img').css({'width':'100%','height':'auto','max-width':tmpW/2+'px'});
$(this).removeClass('retina');
})
}
c=0;
$('.hasAnim').each(function(){
if($(this).attr('id')==undefined){
$(this).attr('id','anim'+c);
c++;
}})
function capitalizeFirstLetter(string){
return string.charAt(0).toUpperCase() + string.slice(1);
}
$('#s2-country').prepend('<option value=""></option>');
$('.s2-elem').each(function(){
tmpid=$(this).attr('name');
if(tmpid=='ca-province'){tmpid='province';}
ph='*'+capitalizeFirstLetter(tmpid);
$(this).attr('placeholder',ph);
})
if($('body').attr('id')=='page-home'){
$('#globalHeader').find('.logo a').click(function(){
animScroll('#home-hero', .75, 0);
return false;
})
}
$('.hasNobreak').find('br').addClass('nobreak');
$('.hasMobBreak').find('br').addClass('mob');
var quotewrapper1='<div class="quote-wrap"><div class="quote left"><img src="'+path+'images/quotemark@2x.png"></div><div class="quote right"><img src="'+path+'images/quotemark@2x.png"></div><blockquote>';
var quotewrapper2='</blockquote></div>';
$('#blog-article').find('.bodycopy').find('blockquote').each(function(){
if($(this).children('p').html()!=''){
quoteTxt=$(this).children('p').html();
}else{
quoteTxt=$(this).html();
}
quoteData=quotewrapper1+quoteTxt+quotewrapper2;
$(this).replaceWith(quoteData);
})
$('#blog-article').find('.bodycopy').find('p>img').each(function(){
$(this).parents('p').addClass('figure');
})
var subscribeUL='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 8" preserveAspectRatio="none"><path d="M335.07836,4.51137C333.1817,6.94611,320.59278,6.089,314.82981,7.33591l-22.02167-.38439c-3.92512.17629-3.48645-.8173-3.64439-1.6537a14.15219,14.15219,0,0,1-9.1896.36889c-4.87446-.08949-10.485.01768-12.8383-.75339-4.96835,1.13507-17.70413-.11936-25.70554.08061-30.71134,1.71344-77.77049-.26141-104.6595.29034-5.61608-.72216-8.96749.03534-14.66392-1.31235-5.37073-.23709-5.65907,1.09656-11.03113.86384-4.975-.41544-14.5791.41818-16.51045-.81748-8.23278.84872-25.60614,1.69228-34.89011.44738-2.60087,1.80934-6.79468-.17153-11.035.86818L32.12431,5.04555c-9.60086.07721-21.47259,2.254-31.22179.51583-2.84011-1.031,1.44428-3.09324,9.22409-2.48769,3.84668-.7665,12.19273-.15327,16.53436-.76778C38.69979,1.15752,49.25933,2.24164,59.73058,1.293c10.87359.28243,22.85589-.2781,34.89011-.44737C105.632.68942,116.95762.57394,129.5029.923c5.26657.68959,14.313.35789,18.33979,1.37871,2.7255-1.35726,6.84907-.29506,11.02189-.3347,4.84935-.04768,10.427-.9185,20.18682.35237,16.09518-.24616,31.19667-1.01027,44.0626.2376,10.48735-1.94294,20.213-.85794,36.73671-.94664,12.14163.69712,25.44479.81906,42.187,2.32426,10.70451-.34465,25.8595-2.59869,33.04062.57673"></svg>';
$('#subscribe-form').find('.underline').html(subscribeUL);
var arrowBG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" preserveAspectRatio="none"><path d="M27.2,43.1c-0.4-0.1-1-0.4-1.2-0.2c-2.9,2.8-6.1-0.5-9.1,0.5c-0.8,0.3-1.9-0.4-2.8-0.8c-4.3-2-7.9-4.9-10.9-8.6c-0.6-0.8-1.1-1.8-1.3-2.7C1.1,28.1,0.5,25,0,22c-0.1-1,0-2.1,0.4-3c1.5-4.3,2.8-8.7,5.9-12.1c0.5-0.6,1.1-1.3,1.4-2C8.4,3.3,9.2,2.7,11,2.8c1.8,0,2.2-3,4.4-2.7c1.8,0.3,3.8,1.3,5.3,0.9c3.3-1.1,5.2,1.9,7.9,2c1.7,0,2.8,1.4,4.6,1.4c2.1,0,2.2,0.4,2.3,3.1c0,1.3,0.5,2,1.6,2.2c1.8,0.4,2.9,1.3,3,3.3c0,0.2,0.1,0.5,0.2,0.6c5.5,4.8,3.4,11.1,2.6,16.8c-0.6,4.7-4.3,7.9-7.9,10.5C32.5,42.5,29.3,43.1,27.2,43.1"/></svg>';
$('.arrow-btn, .arr-inner').find('.bg').html(arrowBG);
freezePage();
$(window).on('load', function(){
$(window).resize();
if($('.retina').length>0){
sizeRetina();
}
$(window).resize();
initScrollMagic();
setTimeout(function(){$('#globalHeader').find('.underline').addClass('on');}, 400);
TweenMax.to('#loader', .5, {delay:.2, opacity:0, 'display':'none', onComplete:function(){
unfreezePage();
if($('body').attr('id')=='page-home'){
TweenMax.to($('#special-overlay'), .5, {startAt:{'display':'block'}, delay:1, opacity:1});
}}});
})
var menuOpen=false;
$('.menu-btn').click(function(){
if(!menuOpen){
$('#globalMenu').addClass('open expanded');
TweenMax.to('.menu-wrap', .75, {startAt:{'display':'block'}, opacity:1, onComplete:function(){freezePage();}})
menuOpen=true;
}else{
closeMenu();
}})
function closeMenu(){
$('#globalMenu').removeClass('open');
TweenMax.to('.menu-wrap', .5, {opacity:0, 'display':'none', onComplete:function(){
unfreezePage();
$('.menu-wrap').hide();
$('#globalMenu').removeClass('expanded');
}})
menuOpen=false;
}
$('#globalMenu').find('li.hasSub>a').click(function(){
if(winW<=menuBreak){
if($(this).parents('li').hasClass('subOpen')){
TweenMax.to($(this).parents('li').find('.subnav'), .5, {height:0, ease:Power3.easeInOut})
$(this).parents('li').removeClass('subOpen');
return false;
}else{
$('#globalMenu').find('li.hasSub').each(function(){
if($(this).hasClass('subOpen')){
TweenMax.to($(this).find('.subnav'), .5, {height:0, ease:Power3.easeInOut})
$(this).removeClass('subOpen');
}})
subH=$(this).parents('li').find('.subnav').find('ul').outerHeight();
TweenMax.to($(this).parents('li').find('.subnav'), .5, {height:subH, ease:Power3.easeInOut})
$(this).parents('li').addClass('subOpen');
return false;
}}
})
$('#globalHeader').find('li.hasSub').each(function(){
$(this).mouseenter(function(){
if(!mobile){
$(this).addClass('open');
$(this).find('.subnav').show();
TweenMax.killTweensOf($(this).find('.subnav'));
TweenMax.to($(this).find('.subnav'), .75, {startAt:{y:-10, opacity:0}, opacity:1, y:0, ease:Elastic.easeOut.config(3,4)})
}})
})
$('#globalHeader').find('li.hasSub').mouseleave(function(){
closeSubmenu($(this));
})
function closeSubmenu(trg){
trg.removeClass('open');
TweenMax.killTweensOf(trg.find('.subnav'));
TweenMax.to(trg.find('.subnav'), .5, {opacity:0, y:-10, ease:Power3.easeInOut, onCompleteParams:[trg.find('.subnav')], onComplete:function(t){
t.hide();
}})
}
var formSent=false;
var formData;
var formURL;
$('.global-form:not(#search-form)').submit(function(){
if(validateForm($(this))){
sendForm($(this));
}
return false;
});
function sendForm(formObj){
formData=formObj.serialize();
formURL=$(formObj).attr('action');
$(formObj).addClass('sending')
$(formObj).find('input, button').attr('disabled','disabled');
if($(formObj).find('.g-recaptcha').length > 0){
$.ajax({
url: url+'wp-admin/admin-ajax.php',
type: 'POST',
data: {
'action':'validate_captcha',
'captcha': grecaptcha.getResponse()
},
success: function(result){
if(result=='verified'){
sendValidated(formObj);
}
if(result=='not verified'){
$(formObj).parents('.form-wrap, .subscribe-wrap').find('.thank-you p').text('Captcha was not verified. Please try again.');
TweenMax.to($(formObj).parents('.form-wrap, .subscribe-wrap').find('.thank-you'), .5, {autoAlpha:1})
$(formObj).removeClass('sending');
$(formObj).find('input, button').removeAttr('disabled');
}}
});
}else{
sendValidated(formObj);
}}
function sendValidated(formObj){
$.ajax({
url: formURL,
type: 'POST',
data: formData,
success: function(data){
formSent=true;
msg=$(data).find('.wpcf7-response-output').text();
$(formObj).parents('.form-wrap, .subscribe-wrap').find('.thank-you p').text(msg);
TweenMax.to($(formObj).parents('.form-wrap, .subscribe-wrap').find('.thank-you'), .5, {autoAlpha:1})
$(formObj).removeClass('sending')
if(msg!='One or more fields have an error. Please check and try again.'){
$(formObj).trigger('reset');
$(formObj).find('input, button').removeAttr('disabled');
$('.s2-elem').val('').trigger('change');
if($(formObj).find('.g-recaptcha').length > 0){
grecaptcha.reset();
}}
}});
}
function validateForm(formObj){
var vNum=0;
$(formObj).find('.wpcf7-validates-as-required').each(function(){
if($(this).val()==""){
vNum++;
$(this).parents('.field-wrap').addClass('error');
}
if($(this).attr('name')=="email"){
if(!emailIsValid($(this).val())){
vNum++;
$(this).parents('.field-wrap').addClass('error');
}}
});
if(vNum==0){
return true;
}else{
return false;
}}
function emailIsValid(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
$('.wpcf7-validates-as-required').on('focus click',function(){
if($(this).parents('.field-wrap').hasClass('error')){
$(this).parents('.field-wrap').removeClass('error');
}})
$('.global-form input').on('focus click',function(){
TweenMax.to($('.global-form').parents('.form-wrap, .subscribe-wrap').find('.thank-you'), .5, {autoAlpha:0})
})
$(document).ready(function(){
$('.s2-elem').each(function(){
ph=$(this).attr('placeholder');
$(this).select2({
width:'100%',
minimumResultsForSearch: -1,
placeholder: ph,
})
})
.on('select2:open', function(e){
if($(this).parents('.field-wrap').hasClass('error')){
$(this).parents('.field-wrap').removeClass('error')
}})
.on('select2:open', function (e){
$('.select2-dropdown').addClass('on')
})
.on('select2:closing', function (e){
$('.select2-dropdown').removeClass('on')
})
.on('select2:select', function(e){
q=e.params.data._resultId.split('s2-country');
if(q.length>1){
sel=e.params.data.id;
updateFields(sel);
}});
$('.select2-selection__arrow').append('<img src="'+path+'images/icomoon/chevron.svg" class="icon">');
});
function updateFields(id){
$('.toggle').removeClass('on');
$('.toggle').find('input, select').removeClass('wpcf7-validates-as-required');
$('.toggle').find('input').val('');
$('.toggle').find('.s2-elem').val('').trigger('change');
if(id=='United States'){
$('[data-id="us-state"]').addClass('on');
$('[data-id="us-state"]').find('select').addClass('wpcf7-validates-as-required');
}
else if(id=='Canada'){
$('[data-id="ca-province"]').addClass('on');
$('[data-id="ca-province"]').find('select').addClass('wpcf7-validates-as-required');
}else{
$('[data-id="province"]').addClass('on');
$('[data-id="province"]').find('input').addClass('wpcf7-validates-as-required');
}}
$('[data-id="us-state"]').find('select').addClass('wpcf7-validates-as-required');
function openContactOverlay(){
freezePage();
$('#contact-overlay').css({'display':'block'});
TweenMax.to($('#contact-overlay'), .5, {opacity:1});
}
function closeContactOverlay(){
TweenMax.to($('#contact-overlay'), .5, {opacity:0, 'display':'none', onComplete:function(){
unfreezePage();
}});
}
$('a[href="#contact"]').click(function(){
openContactOverlay();
return false;
})
$('#contact-overlay, #contact-overlay .close-btn').click(function(){
closeContactOverlay();
})
$('#contact-overlay, #special-overlay').find('.contact-modal').click(function(e){
e.stopPropagation();
})
$('#special-overlay, #special-overlay .close-btn').click(function(){
closeSpecialOverlay();
})
function closeSpecialOverlay(){
TweenMax.to($('#special-overlay'), .5, {opacity:0, 'display':'none', onComplete:function(){
unfreezePage();
}});
}
function closeCookiesOverlay(){
gsap.to($('#cookies-overlay'), {y:'100%', ease:"power3.inOut", duration:.75, onComplete:function(){
$('#cookies-overlay').hide();
}});
}
$('#cookies-overlay').find('.close-btn, .accept-btn').click(function(){
closeCookiesOverlay();
return false;
})
function createCookie(name, value, days){
var expires="";
if(days){
var date=new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
expires="; expires=" + date.toUTCString();
}
document.cookie=name + "=" + value + expires + "; path=/";
}
function readCookie(name){
var nameEQ=name + "=";
var ca=document.cookie.split(';');
for (var i=0; i < ca.length; i++){
var c=ca[i];
while (c.charAt(0)==' ') c=c.substring(1, c.length);
if(c.indexOf(nameEQ)==0) return c.substring(nameEQ.length, c.length);
}
return null;
}
if(readCookie('revisit')==='true'){
$('#cookies-overlay').hide();
}else{
createCookie('revisit', 'true', 7);
}
var sT;
var stickyOpen=false;
$(window).on("scrollstart",function(){
scroll_interval=setInterval(function(){
sT=$(this).scrollTop();
if(winW>stickyBreak){
setSticky();
}}, 10);
})
$(window).on("scrollstop",function(){
if(scroll_interval){
clearInterval(scroll_interval);
}})
function setSticky(){
if(sT>0){
if(!stickyOpen){
$('#globalHeader').addClass('sticky');
$('#globalMenu').addClass('sticky');
TweenMax.set('.logo-dot', {scaleX:1.4, scaleY:1.4, x:0, opacity:0});
TweenMax.set('.h1-rect', {attr:{height:0}});
TweenMax.set('.h2-rect', {attr:{width:0}});
TweenMax.to('.logo-dot', .75, {delay:.3, x:0, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut.config(2,1)})
TweenMax.to('.h1-rect', .5, {delay:.4, attr:{height:29}, ease:Power3.easeIn});
TweenMax.to('.h2-rect', 1, {delay:.9, attr:{width:17}, ease:Power3.easeOut});
if($('body').attr('id')=='page-developers'){
$('#dev-sidebar').addClass('sticky');
}
stickyOpen=true;
}}else{
if(stickyOpen){
$('#globalHeader').removeClass('sticky');
$('#globalMenu').removeClass('sticky');
if($('body').attr('id')=='page-developers'){
$('#dev-sidebar').removeClass('sticky');
}
stickyOpen=false;
}}
lastSt=sT;
}
var controller=new ScrollMagic.Controller();
function initScrollMagic(){
$('.hasAnim').each(function(){
var currentElem='#'+$(this).attr('id');
var added=0;
var elemOffset=0;
if($(this).attr('data-added')){added=$(this).attr('data-added');};
if($(this).attr('data-offset')){elemOffset=-$(this).attr('data-offset');};
var scene=new ScrollMagic.Scene({triggerElement: currentElem, triggerHook: 2, offset:elemOffset, duration: winH+$(currentElem).outerHeight()+Number(added)})
.on('enter',function(){
activateAnim(currentElem);
})
.on('leave',function(){
resetAnim(currentElem);
})
.addTo(controller);
scene.setClassToggle(currentElem, "on");
});
}
var cusCur=1;
var totCusSlides=$('.customer-slide').length;
var customerBreak=768;
var totMarg=50;
$('.customer-slide').each(function(i){
$(this).attr('data-num',(i+1));
})
$('.customers').find('.arrow-btn').click(function(){
if($(this).hasClass('left')){
dir=-1;
}else{
dir=1;
}
changeCustomerSlider(dir);
})
function changeCustomerSlider(dir){
if(winW<=customerBreak){
cusW=winW;
}else{
cusW=$('.customer-slide').width();
}
TweenMax.to($('.customer-slide[data-num="'+cusCur+'"]'), 1, {x:-dir*cusW, ease:Power3.easeInOut, onCompleteParams:[$('.customer-slide[data-num="'+cusCur+'"]')],  onComplete:function(t){
t.css('display','none');
}});
cusCur +=dir;
TweenMax.to($('.customer-slide[data-num="'+cusCur+'"]'), 1, {startAt:{'display':'block',x:dir*cusW}, x:0, ease:Power3.easeInOut});
if(cusCur==1){
$('.customers').find('.arrow-btn.left').addClass('off');
}else if($('.customers').find('.arrow-btn.left').hasClass('off')){
$('.customers').find('.arrow-btn.left').removeClass('off');
}
if(cusCur==(totCusSlides)){
$('.customers').find('.arrow-btn.right').addClass('off');
}else if($('.customers').find('.arrow-btn.right').hasClass('off')){
$('.customers').find('.arrow-btn.right').removeClass('off');
}
showCur=cusCur;
$('.customers').find('.count-current').text(showCur);
}
function updateCustomerSlides(){
if(winW<=customerBreak){
cusSetW=winW-totMarg;
$('.customer-slide').width(cusSetW);
}else{
$('.customer-slide').css('width','');
}}
var modW=Number($('.module-slider-wrap').attr('data-width'));
var modGap;
var modGapD=Number($('.module-slider-wrap').attr('data-gap'));
var modGapM=Number($('.module-slider-wrap').attr('data-gap-mob'));
var modCur=0;
var nextCur=0;
var totModSlides=$('.module-slide').length;
var totalModW;
var modBreak=650;
function updateModSliders(){
if(winW<=modBreak){
modW=winW-totMarg;
if(modW>380){modW=380;}
$('.module-slide').width(modW);
}else{
modW=Number($('.module-slider-wrap').attr('data-width'))
$('.module-slide').css('width','');
}
if(winW>768){modGap=modGapD;}else{modGap=modGapM;}
$('.module-sliders').find('.count-total').text(totModSlides);
totalModW=(modW*totModSlides)+(modGap*(totModSlides-1));
$('.module-slider').width(totalModW);
newPos=(modW*modCur)+(modGap*modCur);
TweenMax.set($('.module-slider'), {x:-newPos});
}
if($('.module-slider-wrap').length>0){
updateModSliders();
}
$('.module-slide').each(function(i){
$(this).attr('data-num',i);
})
$('.module-sliders').find('.arrow-btn').click(function(){
if($(this).hasClass('left')){
dir=-1;
}else{
dir=1;
}
changeModSlider(dir);
})
function changeModSlider(dir){
modCur +=dir;
nextCur=modCur;
if(winW>768){modGap=modGapD;}else{modGap=modGapM;}
newPos=(modW*modCur)+(modGap*modCur);
if(winW<=650){newPos=(modW*modCur)+(modGap*modCur);}
TweenMax.to($('.module-slider'), 1, {x:-newPos, ease:Power3.easeInOut});
if(modCur==0){
$('.module-sliders').find('.arrow-btn.left').addClass('off');
}else if($('.module-sliders').find('.arrow-btn.left').hasClass('off')){
$('.module-sliders').find('.arrow-btn.left').removeClass('off');
}
if(modCur==(totModSlides-1)){
$('.module-sliders').find('.arrow-btn.right').addClass('off');
}else if($('.module-sliders').find('.arrow-btn.right').hasClass('off')){
$('.module-sliders').find('.arrow-btn.right').removeClass('off');
}
$('.module-sliders').find('.count-current').text((modCur+1));
if($('.module-sliders').find('.slide-title').length>0){
modTitle=$('.module-slide[data-num="'+modCur+'"]').attr('data-title');
TweenMax.to($('.module-sliders').find('.slide-title'), .5, {opacity:0, onComplete:function(){
$('.module-sliders').find('.slide-title').text(modTitle);
TweenMax.to($('.module-sliders').find('.slide-title'), .5, {opacity:1})
}})
}}
var appCur=0;
var appW=283;
var totAppSlides=$('.phone-screen').length;
var appInt=3500;
$('.dot-btn').each(function(i){
$(this).attr('data-num',i);
})
$('.phone-screen').each(function(i){
$(this).attr('data-num',i).css('left',(appW*i)+'px');
})
$('#phone-slider').find('.dot-btn').click(function(){
if(appSliders){
clearInterval(appSliders);
}
$('#phone-slider').find('.dot-btn').removeClass('on');
$(this).addClass('on');
appCur=$(this).attr('data-num');
newX=-(appW*appCur);
TweenMax.to($('.phone-screen-slider'), 1, {x:newX, ease:Power3.easeInOut});
})
function initAppSlideshow(){
appCur=0;
TweenMax.set($('.phone-screen-slider'), {x:0});
$('#phone-slider').find('.dot-btn').removeClass('on');
$('#phone-slider').find('.dot-btn[data-num="0"]').addClass('on');
appSliders=setInterval(function(){
appCur++;
if(appCur==totAppSlides){appCur=0;}
newX=-(appW*appCur);
TweenMax.to($('.phone-screen-slider'), 1, {x:newX, ease:Power3.easeInOut});
$('#phone-slider').find('.dot-btn').removeClass('on');
$('#phone-slider').find('.dot-btn[data-num="'+appCur+'"]').addClass('on');
}, appInt);
}
function resetAppSlideshow(){
clearInterval(appSliders);
}
$('.blog-grid .blog-thumb').mouseenter(function(){
if(winW>1024){
tmpH=$(this).find('.thumb-hover').outerHeight();
if($(this).find('.thumb-hover').css('visibility')=='hidden'){
TweenMax.set($(this).find('.thumb-hover'), {y:tmpH, 'visibility':'visible', opacity:0})
}
TweenMax.killTweensOf($(this).find('.txt, .thumb-hover'));
TweenMax.to($(this).find('.txt'), .5, {y:-(tmpH), ease:Power3.easeOut})
TweenMax.to($(this).find('.thumb-hover'), .5, {y:0, opacity:1, ease:Power3.easeOut})
}}).mouseleave(function(){
if(winW>1024){
tmpH=$(this).find('.thumb-hover').outerHeight();
TweenMax.killTweensOf($(this).find('.txt, .thumb-hover'));
TweenMax.to($(this).find('.txt'), .5, {y:0, ease:Quad.easeInOut})
TweenMax.to($(this).find('.thumb-hover'), .5, {y:tmpH, autoAlpha:0, ease:Quad.easeInOut})
}})
function openSearchOverlay(){
freezePage();
$('#search-overlay').css({'display':'block'});
TweenMax.to($('#search-overlay'), .5, {opacity:1});
$('.searchinput').focus();
}
function closeSearchOverlay(){
TweenMax.to($('#search-overlay'), .5, {opacity:0, 'display':'none', onComplete:function(){
unfreezePage();
}});
}
$('[id^="search-btn"]').click(function(){
openSearchOverlay();
})
$('#search-overlay, #search-overlay .close-btn').click(function(){
closeSearchOverlay();
})
$('#search-overlay').find('.search-modal').click(function(e){
e.stopPropagation();
})
var autoSearchW=0;
$('.searchinput').on('input',function(e){
autoObj=$(this).parents('.search-wrap').find('.search-auto');
if(winW>autoSearchW){
if($(this).val()!=''){
autoObj.addClass('on');
setSearchListener();
}else{
autoObj.removeClass('on');
}}
})
$('.searchinput').on('click',function(e){
autoObj=$(this).parents('.search-wrap').find('.search-auto');
if(winW>autoSearchW){
if($(this).val()!=''){
autoObj.addClass('on');
setSearchListener();
}}
})
function setSearchListener(){
setTimeout(function(){
$('body').bind('click', function(){
$('.search-wrap').removeClass('open');
$('.search-auto').removeClass('on');
$('body').unbind('click');
})
$('.search-wrap').click(function(e){
e.stopPropagation();
})
}, 100)
}
var tmpS='';
var tmpM='';
var tmpSLen=0;
var autoLimit=10;
var auto_matches='';
$('.searchinput').bind('input', function(){
autoObj=$(this).parents('.search-wrap').find('.search-auto');
tmpS=$(this).val();
tmpSLen=tmpS.length;
auto_matches='';
matchNum=0;
if(tmpSLen > 0){
for(i=0;i<post_titles.length;i++){
tmpM=post_titles[i].substr(0, tmpSLen);
if(tmpS.toLowerCase()==tmpM.toLowerCase()){
if(matchNum<autoLimit){
auto_matches +='<li><a href="' + post_urls[i] + '">' + post_titles[i] + '</a></li>';
matchNum++;
}}
}}
if(matchNum > 0){
autoObj.addClass('on');
autoObj.find('ul').html(auto_matches);
}else{
autoObj.removeClass('on');
setTimeout(function(){autoObj.find('ul').html('');}, 300);
}});
$('.faq-question').find('.answer').height(0);
$('.faq-question .question').click(function(){
if(!$(this).parents('.faq-question').hasClass('open')){
resetfaqs($(this).parents('.faq-question'));
$(this).parents('.faq-question').addClass('open');
tmpH=$(this).parents('.faq-question').find('.answer>div').outerHeight();
TweenMax.to($(this).parents('.faq-question').find('.answer'), .5, {startAt:{height:0}, height:tmpH, ease:Power3.easeInOut, onCompleteParams:[$(this).parents('.faq-question').find('.answer')], onComplete:function(t){
t.css('height','');
}})
}else{
$(this).parents('.faq-question').removeClass('open')
$(this).parents('.faq-question').find('.answer').css({'height':$(this).parents('.faq-question').find('.answer>div').outerHeight()})
TweenMax.to($(this).parents('.faq-question').find('.answer'), .5, {height:0, ease:Power3.easeInOut})
}})
function resetfaqs(obj){
$('.faq-question').each(function(){
if($(this).hasClass('open')&&$(this)!=obj){
$(this).removeClass('open');
$(this).find('.answer').css({'height':$(this).find('.answer>div').outerHeight()})
TweenMax.to($(this).find('.answer'), .5, {height:0, ease:Power3.easeInOut})
}})
}
if($('body').attr('id')=='page-company-vs'){
var totCRows=$('.compare-table').find('.col').find('.table-row').length;
$('.compare-table').find('.col').each(function(){
$(this).find('.table-row').each(function(i){
$(this).attr('data-num',i);
})
})
}
function updateCompareChart(){
for(i=0;i<totCRows;i++){
maxH=0;
$('.compare-table').find('.col').each(function(){
$(this).find('.table-row[data-num="'+i+'"]').css({'min-height':'0px'})
tmpH=$(this).find('.table-row[data-num="'+i+'"]').outerHeight();
if(tmpH>maxH){maxH=tmpH;}})
$('.compare-table').find('.col').each(function(){
$(this).find('.table-row[data-num="'+i+'"]').css({'min-height':maxH+'px'})
})
}}
if($('.plane').length > 0){
TweenMax.set($('.hasAnim').find('.plane'), {xPercent:-50, yPercent:-50, 'display':'none'});
}
if($('.bot-pencil').length > 0){
TweenMax.set($('.hasAnim').find('.bot-pencil, .bot-card'), {xPercent:-50, yPercent:-50, 'display':'none'});
if($('body').attr('id')=='page-home'){
$('.bot-card').html('<div class="line" data-num="1"></div><div class="line-wrap"><div class="line" data-num="2"></div><img src="'+ path+ 'images/home/parts/cards-card.svg" class="card"></div>');
}else{
$('.bot-card').html('<div class="line" data-num="1"></div><div class="line" data-num="2"></div><img src="'+ path+ 'images/about/parts/cards-card.svg" class="card">');
}}
if($('.path-dot.bez').length > 0){
TweenMax.set($('.hasAnim').find('.path-dot.bez'), {xPercent:-50, yPercent:-50, 'display':'none'});
}
function activateAnim(obj){
if(obj=='#home-hero'){initHomeHero();}
if(obj=='#home-about'){initHomeAbout();}
if(obj=='#home-about-ul'){initHomeAboutUL();}
if(obj=='#home-cards'){initHomeCards();}
if(obj=='#footer-cta'){initHomeCTA();}
if($(obj).hasClass('business-hero')){initBusinessHero();}
if($(obj).hasClass('int-demo')){initIntDemo(obj);}
if(obj=='#feature1'){initFeature1();}
if(obj=='#feature2'){initFeature2();}
if(obj=='#feature3'){initFeature3();}
if(obj=='#feature4'){initFeature4();}
if(obj=='#feature5'){initFeature5();}
if(obj=='#about-help'){initAboutHelp();}
if(obj=='#phone-slider'){initAppSlideshow();}}
function resetAnim(obj){
if(obj=='#home-hero'){resetHomeHero();}
if(obj=='#home-about'){resetHomeAbout();}
if(obj=='#home-cards'){resetHomeCards();}
if(obj=='#footer-cta'){resetHomeCTA();}
if($(obj).hasClass('business-hero')){resetBusinessHero();}
if($(obj).hasClass('int-demo')){resetIntDemo(obj);}
if(obj=='#feature1'){resetFeature1();}
if(obj=='#feature2'){resetFeature2();}
if(obj=='#feature3'){resetFeature3();}
if(obj=='#feature4'){resetFeature4();}
if(obj=='#feature5'){resetFeature5();}
if(obj=='#about-help'){resetAboutHelp();}
if(obj=='#phone-slider'){resetAppSlideshow();}}
if($('body').attr('id')=='page-home'){
var planeSp=4;
var planeTL1a=gsap.timeline({repeat:-1, repeatDelay:8});
planeTL1a.to($('#home-hero').find('.dline-anim[data-num="1"].dsk').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#hero-path1', start:1, end:0, autoRotate:true},
'display':'block'
})
.to($('#home-hero').find('.dline-anim[data-num="1"].dsk').find('.plane img'), {opacity:0, duration:.1}, planeSp-.1)
.pause();
var planeTL1b=gsap.timeline({repeat:-1, repeatDelay:8});
planeTL1b.to($('#home-hero').find('.dline-anim[data-num="2"].dsk').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#hero-path2', start:1, end:0, autoRotate:true},
'display':'block'
})
.to($('#home-hero').find('.dline-anim[data-num="2"].dsk').find('.plane img'), {opacity:0, duration:.1}, planeSp-.1)
.pause();
var planeTLM1a=gsap.timeline({repeat:-1, repeatDelay:6});
planeTLM1a.to($('#home-hero').find('.dline-anim[data-num="1"].mob').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#hero-path1m', start:0, end:1, autoRotate:true},
'display':'block'
})
.to($('#home-hero').find('.dline-anim[data-num="1"].mob').find('.plane img'), {opacity:0, duration:.1}, planeSp-.1)
.pause();
var planeTLM1b=gsap.timeline({repeat:-1, repeatDelay:6});
planeTLM1b.to($('#home-hero').find('.dline-anim[data-num="2"].mob').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#hero-path2m', start:1, end:0, autoRotate:true},
'display':'block'
})
.to($('#home-hero').find('.dline-anim[data-num="1"].mob').find('.plane img'), {opacity:0, duration:.1}, planeSp-.1)
.pause();
uBot1=$('#home-hero').find('.writer-wrap.side');
var heroUline1=gsap.timeline({delay:.5, repeat:-1, repeatDelay:5})
.set($('#home-hero').find('.writer-wrap .underline'), {width:'0%', opacity:1, y:0, rotation:0})
.to(uBot1.find('.side-arm'), {x:5, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.hand-inner'), {y:-64, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.stretch-arm'), {scaleY:.64, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.side-arm'), {x:61, duration: .5, ease:"quad.inOut"}, 1)
.to(uBot1.find('.hand-inner img'), {rotation:-18, duration: .5, ease:"quad.inOut"}, 1)
.to($('#home-hero').find('.writer-wrap .underline'), {width:'100%', duration: .5, ease:"quad.inOut"}, 1)
.to(uBot1.find('.side-arm'), {x:0, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.hand-inner'), {y:-24, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.hand-inner img'), {rotation:-14, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.stretch-arm'), {scaleY:.24, duration: 1, ease:"power3.inOut"}, 1.5)
.to($('#home-hero').find('.writer-wrap .underline'), {y:100, rotation:60, opacity:0, duration: .5, ease:"expo.in"}, 3.5)
.pause();
var heroUline2=gsap.timeline({delay:0, repeat:-1, repeatDelay:5})
.set($('#home-hero').find('.writer-wrap .underline'), {width:'0%', opacity:1, y:0, rotation:0})
.to(uBot1.find('.side-arm'), {x:-138, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.hand-inner'), {y:-64, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.stretch-arm'), {scaleY:.64, duration: 1, ease:"power3.inOut"}, 0)
.to(uBot1.find('.side-arm'), {x:-91, duration: .5, ease:"quad.inOut"}, 1)
.to(uBot1.find('.hand-inner img'), {rotation:-18, duration: .5, ease:"quad.inOut"}, 1)
.to($('#home-hero').find('.writer-wrap .underline'), {width:'100%', duration: .5, ease:"quad.inOut"}, 1)
.to(uBot1.find('.side-arm'), {x:0, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.hand-inner'), {y:-24, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.hand-inner img'), {rotation:-14, duration: 1, ease:"power3.inOut"}, 1.5)
.to(uBot1.find('.stretch-arm'), {scaleY:.24, duration: 1, ease:"power3.inOut"}, 1.5)
.to($('#home-hero').find('.writer-wrap .underline'), {y:100, rotation:60, opacity:0, duration: .5, ease:"expo.in"}, 3.5)
.pause();
var heroUline3=gsap.timeline({delay:1})
.set($('#home-hero').find('.writer-wrap .underline'), {width:'0%'})
.to($('#home-hero').find('.writer-wrap .underline'), {width:'100%', duration: .5, ease:"quad.inOut"})
.pause();
var dBot=$('#home-hero').find('.arm.doodler');
var dSmiley=$('#home-hero').find('.smiley.drawn');
var dHeart=$('#home-hero').find('.heart.drawn');
var hDel=3;
var doodleWriter=gsap.timeline({delay:1, repeat:-1, repeatDelay:1})
.set(dSmiley, {y:0, rotation:0, opacity:1})
.set(dHeart, {y:0, rotation:0, opacity:1})
.to(dBot, {x:-53, y:-49, duration:1, ease:'power3.inOut'}, 0)
.to(dBot.find('.hand-inner>img'), {rotation:4, duration:.5, ease:'power3.inOut'}, .5)
.to(dBot.find('.hand-inner>img'), {rotation:2, duration:.2, ease:'power3.out'}, 1)
.to(dBot.find('.hand-inner>img'), {rotation:4, duration:.2, ease:'power3.out'}, 1.2)
.to(dSmiley.find('.eye[data-num="1"]'), {startAt:{scaleX:0, scaleY:0}, scaleX:1, scaleY:1, opacity:1, duration:.3}, 1)
.to(dBot, {x:-45, y:-48, duration:.5, ease:'power3.inOut'}, 1)
.to(dBot.find('.hand-inner>img'), {rotation:2, duration:.2, ease:'power3.out'}, 1.5)
.to(dBot.find('.hand-inner>img'), {rotation:4, duration:.2, ease:'power3.out'}, 1.7)
.to(dSmiley.find('.eye[data-num="2"]'), {startAt:{scaleX:0, scaleY:0}, scaleX:1, scaleY:1, opacity:1, duration:.3}, 1.5)
.to(dBot, {x:-64, y:-48, duration:.5, ease:'power3.inOut'}, 1.5)
.to(dBot.find('.hand-inner>img'), {rotation:2, duration:.3, ease:'power3.in'}, 1.7)
.to(dBot, {x:-55, y:-40, duration:.5, ease:'power3.in'}, 2)
.to(dBot.find('.hand-inner>img'), {rotation:-5, duration:.4, ease:'power3.in'}, 2)
.to(dSmiley.find('.mouth[data-num="1"]'), {startAt:{opacity:1}, opacity:1, height:18, duration:.5, ease:'power3.in'}, 1.95)
.to(dBot, {x:-40, y:-41, duration:.5, ease:'none'}, 2.5)
.to(dBot.find('.hand-inner>img'), {rotation:-8, duration:.35, ease:'none'}, 2.5)
.to(dBot.find('.hand-inner>img'), {rotation:-6, duration:.15, ease:'none'}, 2.85)
.to(dSmiley.find('.mouth[data-num="2"]'), {startAt:{opacity:1}, opacity:1, width:17, duration:.5, ease:'none'}, 2.55)
.to(dBot, {x:-35, y:-49, duration:.45, ease:'quad.out'}, 3)
.to(dBot.find('.hand-inner>img'), {rotation:2, duration:.25, ease:'quad.out'}, 3.05)
.to(dSmiley.find('.mouth[data-num="3"] rect'), {startAt:{opacity:1}, opacity:1, y:0, duration:.45, ease:'quad.out'}, 3)
.to(dBot, {x:-11, y:-22, duration:.5, ease:'power3.inOut'}, hDel+.5)
.to(dBot, {x:-20, y:-37, duration:.5, ease:'power3.inOut'}, hDel+1)
.to(dBot.find('.hand-inner>img'), {rotation:3, duration:.25, ease:'quad.in'}, hDel+1)
.to(dBot.find('.hand-inner>img'), {rotation:-2, duration:.25, ease:'quad.out'}, hDel+1.25)
.to(dHeart.find('.heart-piece[data-num="1"] rect'), {startAt:{opacity:1}, opacity:1, x:-4, y:2, rotation:-33, duration:.5, ease:'power3.inOut'}, hDel+1)
.to(dBot, {x:-14, y:-37, duration:.45, ease:'none'}, hDel+1.6)
.to(dBot.find('.hand-inner>img'), {rotation:-25, duration:.4, ease:'none'}, hDel+1.55)
.to(dHeart.find('.heart-piece[data-num="2"]'), {startAt:{opacity:1}, opacity:1, height:27, duration:.5, ease:'none'}, hDel+1.5)
.to(dBot, {x:7, y:-34, duration:.5, ease:'none'}, hDel+2.05)
.to(dBot.find('.hand-inner>img'), {rotation:-6, duration:.5, ease:'none'}, hDel+2.1)
.to(dHeart.find('.heart-piece[data-num="3"] rect'), {startAt:{opacity:1}, opacity:1, x:-7, y:22, rotation:-44, duration:.55, ease:'none'}, hDel+2.05)
.to(dHeart.find('.heart-piece[data-num="3"] rect'), {x:-5, y:17, rotation:-44, duration:.1, ease:'quad.in'}, hDel+2.55)
.to(dBot, {x:7, y:-37, duration:.1, ease:'quad.in'}, hDel+2.55)
.to(dBot, {x:-9, y:-26, duration:.5, ease:'power3.out'}, hDel+2.65)
.to(dBot.find('.hand-inner>img'), {rotation:-2, duration:.4, ease:'power3.out'}, hDel+2.65)
.to(dHeart.find('.heart-piece[data-num="4"] rect'), {startAt:{opacity:1}, opacity:1, x:0, duration:.5, ease:'power3.out'}, hDel+2.65)
.to(dBot, {x:0, y:0, duration:1, ease:'power3.inOut'}, hDel+2.95)
.to(dBot.find('.hand-inner>img'), {rotation:2, duration:.5, ease:'power3.inOut'}, hDel+2.95)
.to(dSmiley, {y:100, rotation:60, opacity:0, duration:.75, ease:"back.inOut(1)"}, hDel+5)
.to(dHeart, {y:100, rotation:-90, opacity:0, duration:.75, ease:"back.inOut(1)"}, hDel+5.15)
.pause();
var pl1;
function initHomeHero(){
clearTimeout(pl1);
if(winW>650){
planeTL1a.seek(0).play();
pl1=setTimeout(function(){planeTL1b.seek(0).play()}, 6000);
}else{
planeTLM1a.seek(0).play();
pl1=setTimeout(function(){planeTLM1b.seek(0).play()}, 6000);
}
if(winW>1024){
heroUline1.seek(0).play();
}else if(winW<=1024&&winW>650){
heroUline2.seek(0).play();
}else{
heroUline3.seek(0).play();
}
doodleWriter.seek(0).play();
}
function resetHomeHero(){
clearTimeout(pl1);
planeTL1a.seek(0).pause();
planeTL1b.seek(0).pause();
planeTLM1a.seek(0).pause();
planeTLM1b.seek(0).pause();
heroUline1.seek(0).pause();
heroUline2.seek(0).pause();
heroUline3.seek(0).pause();
doodleWriter.pause();
}}
var aboutUline=gsap.timeline({delay:.5});
var aboutUL=$('#home-hero').find('.writer');
aboutUline.set($('#home-about').find('.hw-font .underline'), {width:'0%'})
.to(aboutUL.find('.arm-inner'), {x:20, duration: 1, ease:"power3.inOut"}, 0)
.to(aboutUL.find('.hand-inner'), {y:-114, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.hand-inner>img'), {rotation:-20, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.stretch-arm'), {scaleY:1.14, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.arm-inner'), {x:313, duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.hand-inner>img'), {rotation:-24, duration: 1, ease:"power3.inOut"}, 2)
.to($('#home-about').find('.hw-font .underline'), {width:'100%', duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.arm-inner'), {x:275, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.hand-inner'), {y:-24, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.hand-inner>img'), {rotation:-35, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.stretch-arm'), {scaleY:.24, duration: 1, ease:"power3.inOut"}, 3)
.pause();
var aboutUlineMob=gsap.timeline({delay:1});
aboutUlineMob.set($('#home-about').find('.hw-font .underline'), {width:'0%'})
.to(aboutUL.find('.arm-inner'), {x:10, duration: 1, ease:"power3.inOut"}, 0)
.to(aboutUL.find('.hand-inner'), {y:-137, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.hand-inner>img'), {rotation:-20, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.stretch-arm'), {scaleY:1.37, duration: 1, ease:"power3.inOut"}, 1)
.to(aboutUL.find('.arm-inner'), {x:275, duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.hand-inner>img'), {rotation:-64, duration: 1, ease:"power3.inOut"}, 2)
.to($('#home-about').find('.hw-font .underline'), {width:'100%', duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.hand-inner'), {y:-119, duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.stretch-arm'), {scaleY:1.19, duration: 1, ease:"power3.inOut"}, 2)
.to(aboutUL.find('.arm-inner'), {x:275, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.hand-inner'), {y:-24, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.hand-inner>img'), {rotation:-35, duration: 1, ease:"power3.inOut"}, 3)
.to(aboutUL.find('.stretch-arm'), {scaleY:.24, duration: 1, ease:"power3.inOut"}, 3)
.pause();
function initHomeAboutUL(){
if(winW>650){
aboutUline.seek(0).play();
}else{
aboutUlineMob.seek(0).play();
}}
function resetHomeAboutUL(){
aboutUline.seek(0).pause();
aboutUlineMob.seek(0).pause();
}
let aboutText1;
if($('body').attr('id')=='page-home'){
aboutText1=new TypeIt('#tf1', {
strings: $('#tf1').parents('.typer-field').attr('data-text'),
lifeLike:false,
cursor:false,
speed:80,
afterComplete:function(){
aboutPhoneAnim.seek(0).play();
}});
var aboutPhoneAnim=gsap.timeline();
aboutPhoneAnim.to($('#home-about').find('.phone-button'), {opacity:1, duration:.3}, .75)
.to($('#home-about').find('.phone-button'), {opacity:0, duration:.3}, 1.05)
.add(sendDot, .9)
.to($('#tf1').parents('.typer-field'), {opacity:0, duration: .5}, 4)
.add(loopTyper, 5)
.pause();
function loopTyper(){
gsap.set($('#tf1').parents('.typer-field'), {opacity:1})
aboutText1.reset().go();
}
function sendDot(){
gsap.to($('#home-about').find('.path-dot.bez'), {
duration: 2.5,
ease: 'quad.inOut',
motionPath: {path:'#about-path0', start:.08, end:.85},
'display':'block',
onComplete:function(){
drawHeart();
}})
}
var hBot=$('#home-about').find('.robot-hand[data-num="3"]');
var hHeart=$('#home-about').find('.heart.drawn');
var heartWriter=gsap.timeline()
.set(hHeart, {y:0, rotation:0, opacity:1})
.to(hBot.find('.hand-inner'), {y:-25, duration:1, ease:'power3.inOut'}, 0)
.to(hBot.find('.stretch-arm'), {scaleY:.6, duration:1, ease:'power3.inOut'}, 0)
.to(hBot.find('.hand-inner img'), {rotation:108, duration:.5, ease:'power3.inOut'}, 1)
.to(hBot.find('.hand-inner'), {y:-29, duration:.5, ease:'power3.inOut'}, 1)
.to(hHeart.find('.heart-piece.left rect'), {y:0, duration:.5, ease:'power3.inOut'}, 1)
.to(hBot.find('.hand-inner'), {y:-20, duration:.5, ease:'power3.inOut'}, 1.5)
.to(hBot.find('.stretch-arm'), {scaleY:.53, duration:.5, ease:'power3.inOut'}, 1.5)
.to(hBot.find('.hand-inner img'), {rotation:119, duration:.25, ease:'power3.inOut'}, 1.5)
.to(hBot.find('.hand-inner img'), {rotation:108, duration:.25, ease:'power3.inOut'}, 1.75)
.to(hHeart.find('.heart-piece.top'), {width:9, duration:.5, ease:'power3.inOut'}, 1.5)
.to(hBot.find('.hand-inner img'), {rotation:131, duration:.5, ease:'power3.inOut'}, 2)
.to(hBot.find('.hand-inner'), {y:-24, duration:.5, ease:'power3.inOut'}, 2)
.to(hHeart.find('.heart-piece.right'), {height:19, duration:.5, ease:'power3.inOut'}, 2)
.to(hBot.find('.hand-inner'), {y:12, duration:1, ease:'power3.inOut'}, 2.5)
.to(hBot.find('.stretch-arm'), {scaleY:.12, duration:1, ease:'power3.inOut'}, 2.5)
.to(hHeart, {y:100, rotation:60, opacity:0, duration:.75, ease:"back.inOut(1)"}, 5)
.pause();
function drawHeart(){
heartWriter.seek(0).play();
}
var planeTL2=gsap.timeline({repeat:-1, repeatDelay:1});
var planeTL2Sp1=2.5;
var planeTL2Sp2=4;
planeTL2.to($('#home-about').find('.dline-anim[data-num="1"]').find('.plane'), {
duration: planeTL2Sp1,
ease: 'none',
motionPath: {path:'#about-path1', autoRotate:true},
'display':'block'
})
.to($('#home-about').find('.dline-anim[data-num="1"]').find('.plane img'), {opacity:0, duration:.1}, planeTL2Sp1-.1)
.to($('#home-about').find('.dline-anim[data-num="2"]').find('.plane'), {
duration: planeTL2Sp2,
ease: 'none',
motionPath: {path:'#about-path2', start:.2, end:1, autoRotate:true},
'display':'block',
}, planeTL2Sp1+.1)
.to($('#home-about').find('.dline-anim[data-num="2"]').find('.plane img'), {opacity:0, duration:.1}, planeTL2Sp2+planeTL2Sp1)
.pause();
function initHomeAbout(){
aboutText1.reset().go();
planeTL2.seek(0).play();
}
function resetHomeAbout(){
aboutText1.freeze();
aboutPhoneAnim.pause();
planeTL2.seek(0).pause();
gsap.killTweensOf($('#home-about').find('.path-dot.bez'));
$('#home-about').find('.path-dot.bez').hide();
heartWriter.seek(0).pause();
}}
if($('body').attr('id')=='page-home'){
var cardLineSp=20;
var cardChange=cardLineSp*.33;
var cardPencils={};
var pencilStart=[0,8,16];
for(i=0;i<3;i++){
cardPencils['cardLineTL'+i]=gsap.timeline({repeat:-1});
cardPencils['cardLineTL'+i].to($('#home-cards').find('.bot-pencil[data-num="'+(i+1)+'"]'), {
duration: cardLineSp,
ease: 'none',
motionPath: {path:'#cards-path1', start:1, end:.4},
'display':'block'
}).pause();
}
var cardCards={};
var cardStart=[3,12];
for(i=0;i<2;i++){
cardCards['cardLineTL'+i]=gsap.timeline({repeat:-1});
cardCards['cardLineTL'+i].to($('#home-cards').find('.bot-card[data-num="'+(i+1)+'"]'), {
duration: cardLineSp,
ease: 'none',
motionPath: {path:'#cards-path1', start:1, end:.4},
'display':'block'
})
.to($('#home-cards').find('.bot-card[data-num="'+(i+1)+'"]').find('.line[data-num="1"]'), {scaleX:0, duration:1.5, ease:"quad.out"}, cardChange)
.pause();
}
function initHomeCards(){
for(i=0;i<3;i++){
cardPencils['cardLineTL'+i].seek(pencilStart[i]).play();
}
for(i=0;i<2;i++){
cardCards['cardLineTL'+i].seek(cardStart[i]).play();
}}
function resetHomeCards(){
for(i=0;i<3;i++){
cardPencils['cardLineTL'+i].seek(4).pause();
}
for(i=0;i<2;i++){
cardCards['cardLineTL'+i].seek(0).pause();
}}
}
if($('body').attr('id')=='page-home'){
var ctaTrg=$('#footer-cta').find('.robot-wrap');
var ctaRobotDraw=gsap.timeline({repeat:-1, delay:1, repeatDelay:2});
ctaRobotDraw.to(ctaTrg.find('.arm-inner'), {x:-6, duration:1, ease:"power3.inOut"})
.set($('#footer-cta').find('.excla'), {height:0, y:0, rotation:0, opacity:1})
.to(ctaTrg.find('.hand-inner'), {y:-52, duration:.5, ease:"power3.inOut"}, 1)
.to(ctaTrg.find('.stretch-arm'), {scaleY:.52, duration:.5, ease:"power3.inOut"}, 1)
.to(ctaTrg.find('.hand-inner'), {y:-24, duration:.5, ease:"power3.inOut"}, 1.5)
.to(ctaTrg.find('.stretch-arm'), {scaleY:.24, duration:.5, ease:"power3.inOut"}, 1.5)
.to($('#footer-cta').find('.excla'), {height:27, duration:.5, ease:"power3.inOut"}, 1.5)
.to(ctaTrg.find('.arm-inner'), {x:-215, duration:1, ease:"power3.inOut"}, 2)
.to($('#footer-cta').find('.excla'), {y:100, rotation:60, opacity:0, duration:.75, ease:"back.inOut(1)"}, 4)
.pause();
function initHomeCTA(){
ctaRobotDraw.seek(0).play();
}
function resetHomeCTA(){
ctaRobotDraw.seek(0).pause();
}}
if($('body').attr('id')=='page-business'){
var planeSp=10;
var planeTL4=gsap.timeline({repeat:-1});
planeTL4.set($('#tier-hero').find('.dline-anim[data-num="1"]').find('.plane img'), {opacity:1})
.to($('#tier-hero').find('.dline-anim[data-num="1"]').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#hero-path1', start:0, end:1, autoRotate:true},
'display':'block'
})
.to($('#tier-hero').find('.dline-anim[data-num="1"]').find('.plane img'), {opacity:0, duration:.2}, planeSp-.2)
.to($('#tier-hero').find('.flag'), {rotation:0, duration:1.5, ease:"elastic.inOut(2,2)"}, planeSp-1)
.to($('#tier-hero').find('.sent-txt'), {startAt:{y:50, opacity:0}, y:0, opacity:1, duration:.5, ease:Power3.easeOut}, planeSp)
.to($('#tier-hero').find('.flag'), {rotation:90, duration:1, ease:Power3.easeInOut}, planeSp+1.25)
.to($('#tier-hero').find('.sent-txt'), {y:50, opacity:0, duration:.5, ease:Power3.easeInOut}, planeSp+1.6)
.pause();
var totC=4;
var activeGr=4;
var cMoverSp=14;
var grRot=['', -108, -95, -108, -95];
var cRot=11;
var conveyerTLs={}
var cardMovers={}
var startOS=cMoverSp/totC;
for(i=0;i<totC;i++){
conveyerTLs['conveyerTL'+(i+1)]=gsap.timeline()
.set($('#tier-hero').find('.robot-arm'), {x:200})
.set($('#tier-hero').find('.robot-arm').find('.claw[data-num="1"]'), {rotation:cRot})
.set($('#tier-hero').find('.robot-arm').find('.claw[data-num="2"]'), {rotation:-cRot})
.set($('#tier-hero').find('.card-grab[data-num="'+(i+1)+'"]'), {'display':'none'})
.to($('#tier-hero').find('.robot-arm'), {x:0, rotation:-35, duration:1, ease:"power3.inOut"}, 0)
.to($('#tier-hero').find('.robot-arm').find('.arm[data-num="2"]'), {rotation:grRot[(i+1)], duration:1, ease:"power3.inOut"}, 0)
.to($('#tier-hero').find('.robot-arm').find('.claw'), {rotation:0, duration:.5, ease:"power3.out"}, 1)
.set($('#tier-hero').find('.card-grab[data-num="'+(i+1)+'"]'), {'display':'block'}, 1)
.to($('#tier-hero').find('.robot-arm'), {x:200, rotation:0, duration:1, ease:"power3.inOut"}, 1)
.to($('#tier-hero').find('.robot-arm').find('.arm[data-num="2"]'), {rotation:-150, duration:1, ease:"power3.inOut"}, 1)
.set($('#tier-hero').find('.card-grab[data-num="'+(i+1)+'"]'), {'display':'none'}, 2)
.pause();
}
for(i=0;i<totC;i++){
cardMovers['cardTL'+(i+1)]=gsap.timeline({repeat:-1, repeatDelay:.1})
.set($('#tier-hero').find('.card-move[data-num="'+(i+1)+'"]'), {x:20})
.to($('#tier-hero').find('.card-move[data-num="'+(i+1)+'"]'), {x:680, duration: cMoverSp, ease:'none'}, 0)
.add(grabCard, cMoverSp-1)
.pause();
}
function grabCard(id){
conveyerTLs['conveyerTL'+activeGr].seek(0).play();
activeGr--;
if(activeGr==0){activeGr=totC;}}
function initBusinessHero(){
if(winW>768){
planeTL4.seek(0).play();
}
gsap.set($('#tier-hero').find('.robot-arm'), {x:200})
activeGr=4;
for(i=0;i<totC;i++){
startPos=startOS*i;
cardMovers['cardTL'+(i+1)].seek(startPos).play();
}}
function resetBusinessHero(){
planeTL4.seek(0).pause();
for(i=0;i<totC;i++){
cardMovers['cardTL'+(i+1)].seek(0).pause();
conveyerTLs['conveyerTL'+(i+1)].seek(0).pause();
}}
}
if($('body').hasClass('salesforce')){
var box1Trg=$('#int-salesforce1');
var salesforceTL1=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box1Trg.find('.hand'), {x:-130, y:-272})
.set(box1Trg.find('.menu-box'), {opacity:0})
.to(box1Trg.find('.hand'), {x:70, y:-272, duration: 1, ease:'power3.inOut'}, 0)
.to(box1Trg.find('.menu-box'), {opacity:1, duration: .5, ease:'none'}, 1)
.to(box1Trg.find('.hand'), {x:0, y:0, duration: 1, ease:'power3.inOut'}, 2)
.to(box1Trg.find('.txt-item'), {'color':'#ff5037', duration: .5, ease:'none'}, 2.75)
.to(box1Trg.find('.hand'), {x:-130, y:0, duration: .75, ease:'power3.inOut'}, 4.5)
.to(box1Trg.find('.txt-item'), {'color':'#020f14', duration: .3, ease:'none'}, 4.7)
.to(box1Trg.find('.menu-box'), {opacity:0, duration: .5, ease:'none'}, 4.7)
.pause();
var box2Trg=$('#int-salesforce2');
var salesforceTL2=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box2Trg.find('.hand'), {x:-90})
.set(box2Trg.find('.msg-box'), {opacity:0})
.to(box2Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 0)
.to(box2Trg.find('.msg-box'), {opacity:1, duration: .5, ease:'none'}, 1)
.to(box2Trg.find('.hand'), {x:-90, y:0, duration: .75, ease:'power3.inOut'}, 3)
.to(box2Trg.find('.msg-box'), {opacity:0, duration: .5, ease:'none'}, 3.2)
.pause();
var box3Trg=$('#int-salesforce3');
var salesforceTL3=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box3Trg.find('.hand'), {x:0, y:0})
.set(box3Trg.find('.menu-box'), {opacity:0})
.to(box3Trg.find('.hand'), {x:586, duration: 1.5, ease:'power3.inOut'}, 0)
.to(box3Trg.find('.menu-box'), {opacity:1, duration: .5, ease:'none'}, 1.5)
.to(box3Trg.find('.hand'), {x:468, y:112, duration: 1, ease:'power3.inOut'}, 2.5)
.to(box3Trg.find('.txt-item'), {'color':'#ff5037', duration: .5, ease:'none'}, 3.25)
.to(box3Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 5)
.to(box3Trg.find('.txt-item'), {'color':'#020f14', duration: .3, ease:'none'}, 5.2)
.to(box3Trg.find('.menu-box'), {opacity:0, duration: .5, ease:'none'}, 5.2)
.pause();
var box4Trg=$('#int-salesforce4');
var salesforceTL4=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box4Trg.find('.hand'), {x:0, y:0})
.to(box4Trg.find('.hand'), {x:194, duration: 1, ease:'power3.inOut'}, 0)
.to(box4Trg.find('.txt-row[data-num="1"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, .5)
.to(box4Trg.find('.txt-row[data-num="1"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, .5)
.to(box4Trg.find('.txt-row[data-num="1"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 1.5)
.to(box4Trg.find('.txt-row[data-num="1"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 1.5)
.to(box4Trg.find('.hand'), {y:60, duration: .5, ease:'power3.inOut'}, 1.5)
.to(box4Trg.find('.txt-row[data-num="2"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, 1.75)
.to(box4Trg.find('.txt-row[data-num="2"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, 1.75)
.to(box4Trg.find('.txt-row[data-num="2"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 2.75)
.to(box4Trg.find('.txt-row[data-num="2"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 2.75)
.to(box4Trg.find('.hand'), {y:120, duration: .5, ease:'power3.inOut'}, 2.75)
.to(box4Trg.find('.txt-row[data-num="3"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, 3)
.to(box4Trg.find('.txt-row[data-num="3"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, 3)
.to(box4Trg.find('.txt-row[data-num="3"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 4)
.to(box4Trg.find('.txt-row[data-num="3"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 4)
.to(box4Trg.find('.hand'), {y:180, duration: .5, ease:'power3.inOut'}, 4)
.to(box4Trg.find('.txt-row[data-num="4"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, 4.25)
.to(box4Trg.find('.txt-row[data-num="4"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, 4.25)
.to(box4Trg.find('.txt-row[data-num="4"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 5.25)
.to(box4Trg.find('.txt-row[data-num="4"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 5.25)
.to(box4Trg.find('.hand'), {y:240, duration: .5, ease:'power3.inOut'}, 5.25)
.to(box4Trg.find('.txt-row[data-num="5"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, 5.5)
.to(box4Trg.find('.txt-row[data-num="5"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, 5.5)
.to(box4Trg.find('.txt-row[data-num="5"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 6.5)
.to(box4Trg.find('.txt-row[data-num="5"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 6.5)
.to(box4Trg.find('.hand'), {y:300, duration: .5, ease:'power3.inOut'}, 6.5)
.to(box4Trg.find('.txt-row[data-num="6"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ff5037', duration: .5, ease:'none'}, 6.75)
.to(box4Trg.find('.txt-row[data-num="6"]').find('p'), {'color':'#ff5037', duration: .5, ease:'none'}, 6.75)
.to(box4Trg.find('.txt-row[data-num="6"]').find('.oval-fill, .circ-fill'), {'backgroundColor':'#ECEFEF', duration: .5, ease:'none'}, 7.75)
.to(box4Trg.find('.txt-row[data-num="6"]').find('p'), {'color':'#cccccc', duration: .5, ease:'none'}, 7.75)
.to(box4Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 7.75)
.pause();
}
if($('body').hasClass('hubspot')){
var box1Trg=$('#int-hubspot1');
var hubspotTL1=gsap.timeline({repeat:-1, repeatDelay:1.5})
.set(box1Trg.find('.hand'), {x:0})
.set(box1Trg.find('.demo-btn'), {'backgroundColor':'#f7f8f9', 'color':'#020F14'})
.to(box1Trg.find('.hand'), {x:640, duration: 1.5, ease:'power3.inOut'}, 0)
.to(box1Trg.find('.demo-btn[data-num="2"]'), {'backgroundColor':'#ff5037', duration: .3, ease:'none'}, 1)
.to(box1Trg.find('.demo-btn[data-num="2"] p'), {'color':'#ffffff', duration: .3, ease:'none'}, 1)
.to(box1Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 3)
.to(box1Trg.find('.demo-btn'), {'backgroundColor':'#f7f8f9', duration: .3, ease:'none'}, 3.3)
.to(box1Trg.find('.demo-btn[data-num="2"] p'), {'color':'#020F14', duration: .3, ease:'none'}, 3.3)
.pause();
}
if($('body').hasClass('zapier')){
var box1Trg=$('#int-zapier1');
var zapierTL1=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box1Trg.find('.hand'), {x:0, y:0})
.to(box1Trg.find('.hand'), {x:175, duration: 1, ease:'power3.inOut'}, 0)
.to(box1Trg.find('.txt-item[data-num="1"]'), {'color':'#ff5037', duration: .3, ease:'none'}, .5)
.to(box1Trg.find('.hand'), {x:365, y:184, duration: 1, ease:'power3.inOut'}, 1.8)
.to(box1Trg.find('.txt-item[data-num="1"]'), {'color':'#020f14', duration: .3, ease:'none'}, 1.9)
.to(box1Trg.find('.txt-item[data-num="2"]'), {'color':'#ff5037', duration: .3, ease:'none'}, 2.3)
.to(box1Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 4.6)
.to(box1Trg.find('.txt-item[data-num="2"]'), {'color':'#020f14', duration: .3, ease:'none'}, 4.7)
.pause();
var box2Trg=$('#int-zapier2');
var zapierTL2=gsap.timeline({repeat:-1, repeatDelay:1})
.set(box2Trg.find('.hand'), {x:110})
.set(box2Trg.find('.msg-box'), {opacity:0})
.to(box2Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 0)
.to(box2Trg.find('.msg-box'), {opacity:1, duration: .5, ease:'none'}, .8)
.to(box2Trg.find('.hand'), {x:110, duration: .75, ease:'power3.inOut'}, 3)
.to(box2Trg.find('.msg-box'), {opacity:0, duration: .3, ease:'none'}, 3.2)
.pause();
var box3Trg=$('#int-zapier3');
var zapierTL3=gsap.timeline({repeat:-1, repeatDelay:1.5})
.set(box3Trg.find('.hand'), {x:350, y:0})
.to(box3Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 0)
.to(box3Trg.find('.demo-btn'), {'backgroundColor':'#ff5037', duration: .3, ease:'none'}, .7)
.to(box3Trg.find('.demo-btn p'), {'color':'#ffffff', duration: .3, ease:'none'}, .7)
.to(box3Trg.find('.hand'), {x:350, duration: 1, ease:'power3.inOut'}, 3)
.to(box3Trg.find('.demo-btn'), {'backgroundColor':'#f7f8f9', duration: .3, ease:'none'}, 3.2)
.to(box3Trg.find('.demo-btn p'), {'color':'#020F14', duration: .3, ease:'none'}, 3.2)
.pause();
}
if($('body').hasClass('amazon')){
amazonText1=new TypeIt('#tf1', {
strings: $('#tf1').parents('.typer-field').attr('data-text'),
lifeLike:false,
cursor:false,
speed:80,
afterComplete:function(){
amazonTL1.seek(0).play();
}});
function loopTyperA(){
gsap.set($('#tf1').parents('.typer-field'), {opacity:1})
amazonText1.reset().go();
}
var box1Trg=$('#int-amazon1');
var amazonTL1=gsap.timeline()
.set(box1Trg.find('.hand'), {x:-230})
.to(box1Trg.find('.slot'), {opacity:0, duration: .3, ease:'none'}, 0)
.to(box1Trg.find('.app'), {opacity:1, duration: .5, ease:'none'}, .3)
.to(box1Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, .5)
.to(box1Trg.find('.txt-item'), {'color':'#ff5037', duration: .3, ease:'none'}, 1.2)
.to(box1Trg.find('.hand'), {x:-230, duration: 1, ease:'power3.inOut'}, 3)
.to(box1Trg.find('.txt-item'), {'color':'#020f14', duration: .3, ease:'none'}, 3.2)
.to(box1Trg.find('.app'), {opacity:0, duration: .3, ease:'none'}, 3.5)
.to(box1Trg.find('.slot'), {opacity:1, duration: .5, ease:'none'}, 3.8)
.to(box1Trg.find('.typer-field'), {opacity:0, duration: .3, ease:'none'}, 3.5)
.add(loopTyperA, 5)
.pause();
var box2Trg=$('#int-amazon2');
var amazonTL2=gsap.timeline({repeat:-1, repeatDelay:.5})
.set(box2Trg.find('.hand'), {x:590, y:0})
.set(box2Trg.find('.msg-box'), {opacity:0})
.to(box2Trg.find('.msg-box'), {opacity:1, duration: .5, ease:'none'}, 0)
.to(box2Trg.find('.hand'), {x:0, duration: 1, ease:'power3.inOut'}, 1.5)
.to(box2Trg.find('.txt-item'), {'color':'#ff5037', duration: .3, ease:'none'}, 2.2)
.to(box2Trg.find('.msg-box'), {opacity:0, duration: .5, ease:'none'}, 2.2)
.to(box2Trg.find('.hand'), {x:590, duration: 1, ease:'power3.inOut'}, 4)
.to(box2Trg.find('.txt-item'), {'color':'#020F14', duration: .3, ease:'none'}, 4.2)
.pause();
}
function initIntDemo(id){
if(id=='#int-salesforce1'){salesforceTL1.seek(0).play();}
if(id=='#int-salesforce2'){salesforceTL2.seek(0).play();}
if(id=='#int-salesforce3'){salesforceTL3.seek(0).play();}
if(id=='#int-salesforce4'){salesforceTL4.seek(0).play();}
if(id=='#int-hubspot1'){hubspotTL1.seek(0).play();}
if(id=='#int-zapier1'){zapierTL1.seek(0).play();}
if(id=='#int-zapier2'){zapierTL2.seek(0).play();}
if(id=='#int-zapier3'){zapierTL3.seek(0).play();}
if(id=='#int-amazon1'){loopTyper();}
if(id=='#int-amazon2'){amazonTL2.seek(0).play();}}
function resetIntDemo(id){
if(id=='#int-salesforce1'){salesforceTL1.seek(0).pause();}
if(id=='#int-salesforce2'){salesforceTL2.seek(0).pause();}
if(id=='#int-salesforce3'){salesforceTL3.seek(0).pause();}
if(id=='#int-salesforce4'){salesforceTL4.seek(0).pause();}
if(id=='#int-hubspot1'){hubspotTL1.seek(0).pause();}
if(id=='#int-zapier1'){zapierTL1.seek(0).pause();}
if(id=='#int-zapier2'){zapierTL2.seek(0).pause();}
if(id=='#int-zapier3'){zapierTL3.seek(0).pause();}
if(id=='#int-amazon1'){
amazonTL1.seek(0).pause();
amazonText1.freeze();
}
if(id=='#int-amazon2'){amazonTL2.seek(0).pause();}}
if($('body').attr('id')=='page-features'){
var feat1_dline=gsap.timeline({repeat:-1, repeatDelay:2});
feat1_dline.to($('#features').find('.feature-row[data-num="1"]').find('.dline-mask'), {duration:2, startAt:{drawSVG:'0% 0%'}, drawSVG:'0% 100%', ease:Power3.easeInOut})
.to($('#features').find('.feature-row[data-num="1"]').find('.dline-mask'), {duration:1, drawSVG:'100% 100%', ease:Quad.easeOut}, 1.2)
.pause();
function initFeature1(){
feat1_dline.seek(0).play();
}
function resetFeature1(){
TweenMax.set($('#features').find('.feature-row[data-num="1"]').find('.dline-mask'), {drawSVG:'0% 0%'});
feat1_dline.seek(0).pause();
}
resetFeature1();
var feat2_dline=gsap.timeline({repeat:-1, repeatDelay:2});
feat2_dline.to($('#features').find('.feature-row[data-num="2"]').find('.dline-mask'), {duration:2, startAt:{drawSVG:'100% 100%'}, drawSVG:'0% 100%', ease:Power3.easeInOut})
.to($('#features').find('.feature-row[data-num="2"]').find('.dline-mask'), {duration:1, drawSVG:'0% 0%', ease:Quad.easeOut}, 1.2)
.pause();
function initFeature2(){
feat2_dline.seek(0).play();
}
function resetFeature2(){
TweenMax.set($('#features').find('.feature-row[data-num="2"]').find('.dline-mask'), {drawSVG:'100% 100%'});
feat2_dline.seek(0).pause();
}
resetFeature2();
var feat3_dline=gsap.timeline({repeat:-1, repeatDelay:1});
feat3_dline.to($('#features').find('.feature-row[data-num="3"]').find('.d-line[data-num="1"]').find('.dline-mask'), {duration:1.75, startAt:{drawSVG:'-5% -5%'}, drawSVG:'0% 100%', ease:Quad.easeInOut}, 0)
.to($('#features').find('.feature-row[data-num="3"]').find('.d-line[data-num="1"]').find('.dline-mask'), {duration:1, drawSVG:'100% 100%', ease:Quad.easeOut}, 1.2)
.to($('#features').find('.feature-row[data-num="3"]').find('.d-line[data-num="2"]').find('.dline-mask'), {duration:2, startAt:{drawSVG:'0% 0%'}, drawSVG:'100% 0%', ease:Power3.easeInOut}, .8)
.to($('#features').find('.feature-row[data-num="3"]').find('.d-line[data-num="2"]').find('.dline-mask'), {duration:.75, drawSVG:'100% 100%', ease:Quad.easeOut}, 2.2)
.pause();
function initFeature3(){
feat3_dline.seek(0).play();
}
function resetFeature3(){
TweenMax.set($('#features').find('.feature-row[data-num="3"]').find('.dline-mask'), {drawSVG:'100% 100%'});
feat3_dline.seek(0).pause();
}
resetFeature3();
var feat4_dline=gsap.timeline({repeat:-1});
feat4_dline.to($('#features').find('.feature-row[data-num="4"]').find('.dline-mask'), {duration:3, startAt:{drawSVG:'100% 100%'}, drawSVG:'0% 100%', ease:Power3.easeInOut})
.to($('#features').find('.feature-row[data-num="4"]').find('.dline-mask'), {duration:2, drawSVG:'0% 0%', ease:Quad.easeOut}, 2)
.pause();
function initFeature4(){
feat4_dline.seek(0).play();
}
function resetFeature4(){
TweenMax.set($('#features').find('.feature-row[data-num="4"]').find('.dline-mask'), {drawSVG:'100% 100%'});
feat4_dline.seek(0).pause();
}
resetFeature4();
var feat5_dline=gsap.timeline({repeat:-1, repeatDelay:2});
feat5_dline.to($('#features').find('.feature-row[data-num="5"]').find('.dline-mask'), {duration:2, startAt:{drawSVG:'100% 100%'}, drawSVG:'0% 100%', ease:Power3.easeInOut})
.to($('#features').find('.feature-row[data-num="5"]').find('.dline-mask'), {duration:1, drawSVG:'0% -1%', ease:Quad.easeOut}, 1.3)
.pause();
function initFeature5(){
feat5_dline.seek(0).play();
}
function resetFeature5(){
TweenMax.set($('#features').find('.feature-row[data-num="5"]').find('.dline-mask'), {drawSVG:'100% 100%'});
feat5_dline.seek(0).pause();
}
resetFeature5();
}
if($('body').attr('id')=='page-about'){
var planeSp=6;
var planeTL1a=gsap.timeline({repeat:-1});
planeTL1a.to($('#about-help').find('.dline-anim[data-num="1"]').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#help-path1', start:1, end:0, autoRotate:true},
'display':'block'
})
.set($('#about-help').find('.dline-anim[data-num="1"]').find('.plane img'), {opacity:0}, planeSp)
.pause();
var planeTL1b=gsap.timeline({repeat:-1});
planeTL1b.to($('#about-help').find('.dline-anim[data-num="2"]').find('.plane'), {
duration: planeSp,
ease: 'none',
motionPath: {path:'#help-path2', start:0, end:1, autoRotate:true},
'display':'block'
})
.to($('#about-help').find('.dline-anim[data-num="2"]').find('.plane img'), {opacity:0, duration:.1}, planeSp-.1)
.pause();
var cardLineSp=20;
var cardChange=cardLineSp*.47;
var cardPencils={};
var pencilStart=[0,9,16];
for(i=0;i<3;i++){
cardPencils['cardLineTL'+i]=gsap.timeline({repeat:-1});
cardPencils['cardLineTL'+i].to($('#about-help').find('.bot-pencil[data-num="'+(i+1)+'"]'), {
duration: cardLineSp,
ease: 'none',
motionPath: {path:'#cards-path1', start:0, end:1},
'display':'block'
}).pause();
}
var cardCards={};
var cardStart=[4,14];
for(i=0;i<2;i++){
cardCards['cardLineTL'+i]=gsap.timeline({repeat:-1});
cardCards['cardLineTL'+i].to($('#about-help').find('.bot-card[data-num="'+(i+1)+'"]'), {
duration: cardLineSp,
ease: 'none',
motionPath: {path:'#cards-path1', start:0, end:1},
'display':'block'
})
.to($('#about-help').find('.bot-card[data-num="'+(i+1)+'"]').find('.line[data-num="1"]'), {scaleX:0, duration:2, ease:"quad.out"}, cardChange)
.pause();
}
function initAboutHelp(){
for(i=0;i<2;i++){
cardPencils['cardLineTL'+i].seek(pencilStart[i]).play();
}
for(i=0;i<2;i++){
cardCards['cardLineTL'+i].seek(cardStart[i]).play();
}
planeTL1a.seek(2).play();
planeTL1b.seek(2).play();
}
function resetAboutHelp(){
for(i=0;i<2;i++){
cardPencils['cardLineTL'+i].seek(0).pause();
}
for(i=0;i<2;i++){
cardCards['cardLineTL'+i].seek(0).pause();
}
planeTL1a.seek(0).pause();
planeTL1b.seek(0).pause();
}};