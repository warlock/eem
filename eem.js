!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.eem=n():t.eem=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";(function(n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=e(2),i={event_stack:{},on:function(t,n){if(o.isEmpty(t))throw new Error("Need event key!");if(!o.isFunction(n))throw new Error("Event needs a function!");if(o.isArray(t))for(var e=0;e<t.length;e++)(void 0).event_stack[t[e]]=n;else(void 0).event_stack[t]=n},emit:function(t,n){if(o.isEmpty(t))throw new Error("No event selected.");if(o.isArray(t))for(var e=0;e<t.length;e++)o.isFunction((void 0).event_stack[t[e]])&&(void 0).event_stack[t[e]](n);else o.isFunction((void 0).event_stack[t])&&(void 0).event_stack[t](n)},delete:function(t){o.isEmpty((void 0).event_stack[t])||delete(void 0).event_stack[t]}};"object"===(void 0===n?"undefined":r(n))&&(t.exports=i)}).call(n,e(1))},function(t,n,e){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(a===setTimeout)return setTimeout(t,0);if((a===r||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(n){try{return a.call(null,t,0)}catch(n){return a.call(this,t,0)}}}function u(t){if(p===clearTimeout)return clearTimeout(t);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(n){try{return p.call(null,t)}catch(n){return p.call(this,t)}}}function c(){v&&d&&(v=!1,d.length?m=d.concat(m):h=-1,m.length&&f())}function f(){if(!v){var t=i(c);v=!0;for(var n=m.length;n;){for(d=m,m=[];++h<n;)d&&d[h].run();h=-1,n=m.length}d=null,v=!1,u(t)}}function s(t,n){this.fun=t,this.array=n}function l(){}var a,p,y=t.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:r}catch(t){a=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(t){p=o}}();var d,m=[],v=!1,h=-1;y.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];m.push(new s(t,n)),1!==m.length||v||i(f)},s.prototype.run=function(){this.fun.apply(null,this.array)},y.title="browser",y.browser=!0,y.env={},y.argv=[],y.version="",y.versions={},y.on=l,y.addListener=l,y.once=l,y.off=l,y.removeListener=l,y.removeAllListeners=l,y.emit=l,y.prependListener=l,y.prependOnceListener=l,y.listeners=function(t){return[]},y.binding=function(t){throw new Error("process.binding is not supported")},y.cwd=function(){return"/"},y.chdir=function(t){throw new Error("process.chdir is not supported")},y.umask=function(){return 0}},function(t,n,e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"object"===(void 0===t?"undefined":r(t))&&t instanceof Array},isObject:function(t){return"object"===(void 0===t?"undefined":r(t))&&!(t instanceof Array)&&null!==t},isNumber:function(t){return"number"==typeof t||t instanceof Number},isInteger:function(t){return!!o.isNumber(t)&&t%1==0},isString:function(t){return"string"==typeof t||t instanceof String},isBoolean:function(t){return"boolean"==typeof t},isEmpty:function(t){return o.isUndefined(t)||o.isNull(t)||""===t},isNull:function(t){return null===t},isNaN:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(t){return isNaN(t)}),isUndefined:function(t){return void 0===t}};t.exports=o}])});