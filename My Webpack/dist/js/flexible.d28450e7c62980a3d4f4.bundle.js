!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){!function(e,t){function r(){var t=a.getBoundingClientRect().width;t/s>540&&(t=540*s);var r=t/10;a.style.fontSize=r+"px",m.rem=e.rem=r}var n,i=e.document,a=i.documentElement,o=i.querySelector('meta[name="viewport"]'),l=i.querySelector('meta[name="flexible"]'),s=0,c=0,m=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(c=parseFloat(p[1]),s=parseInt(1/c))}else if(l){var d=l.getAttribute("content");if(d){var u=d.match(/initial\-dpr=([\d\.]+)/),f=d.match(/maximum\-dpr=([\d\.]+)/);u&&(s=parseFloat(u[1]),c=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){e.navigator.appVersion.match(/android/gi);var v=e.navigator.appVersion.match(/iphone/gi),x=e.devicePixelRatio;c=1/(s=v?x>=3&&(!s||s>=3)?3:x>=2&&(!s||s>=2)?2:1:1)}if(a.setAttribute("data-dpr",s),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(o);else{var h=i.createElement("div");h.appendChild(o),i.write(h.innerHTML)}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(r,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(r,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",function(e){i.body.style.fontSize=12*s+"px"},!1),r(),m.dpr=e.dpr=s,m.refreshRem=r,m.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},m.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}]);
//# sourceMappingURL=flexible.d28450e7c62980a3d4f4.bundle.js.map