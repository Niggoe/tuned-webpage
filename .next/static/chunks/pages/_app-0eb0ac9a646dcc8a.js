(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(t,n,e){t.exports=e(6029)},1118:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(8505)}])},8505:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return y}});var r=e(4111),i=e(1438),o=e(2951),c=e(4924),u=e(8029),s=e(6042),a=e(460),l=e(5893),f=(e(9342),e(3795),e(6267),e(8397),e(7719),e(933),e(2821),e(165),e(109),e(7544)),p=e(9008),d=e.n(p),v=e(7294),h=function(t){(0,u.Z)(e,t);var n=(0,a.Z)(e);function e(){return(0,i.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,l.jsx)("div",{className:"preloader ".concat(this.props.loading?"":"preloader-deactivate"),children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsx)("div",{className:"d-table-cell",children:(0,l.jsxs)("div",{className:"spinner",children:[(0,l.jsx)("div",{className:"rect1"}),(0,l.jsx)("div",{className:"rect2"}),(0,l.jsx)("div",{className:"rect3"}),(0,l.jsx)("div",{className:"rect4"}),(0,l.jsx)("div",{className:"rect5"})]})})})})}}]),e}(v.Component),b=h,m=function(t){(0,u.Z)(e,t);var n=(0,a.Z)(e);function e(t){var r;return(0,i.Z)(this,e),(r=n.call(this,t)).state={is_visible:!1},r}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("scroll",(function(n){t.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var t=this,n=this.state.is_visible;return(0,l.jsx)("div",{className:"scroll-to-top",children:n&&(0,l.jsxs)("div",{className:"top",onClick:function(){return t.scrollToTop()},children:[(0,l.jsx)("i",{className:"bx bx-chevrons-up"}),(0,l.jsx)("i",{className:"bx bx-chevrons-up bx-fade-up"})]})})}}]),e}(v.Component),y=function(t){(0,u.Z)(e,t);var n=(0,a.Z)(e);function e(){var t;return(0,i.Z)(this,e),t=n.apply(this,arguments),(0,c.Z)((0,r.Z)(t),"state",{loading:!0}),t}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerHandle=setTimeout((function(){return t.setState({loading:!1})}),2e3)}},{key:"componentWillUnmount",value:function(){this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(d(),{children:[(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("title",{children:"Jumpx - React Next.js AI & IT Startup Template"})]}),(0,l.jsx)(n,(0,s.Z)({},e)),(0,l.jsx)(b,{loading:this.state.loading}),(0,l.jsx)(m,{scrollStepInPx:"100",delayInMs:"10.50"})]})}}]),e}(f.default)},3795:function(){},7719:function(){},2821:function(){},933:function(){},9342:function(){},6267:function(){},8397:function(){},109:function(){},165:function(){},9008:function(t,n,e){t.exports=e(5443)},4111:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},1438:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},2951:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return i}})},460:function(t,n,e){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(t){return r(t)}e.d(n,{Z:function(){return u}});var o=e(4111);function c(t,n){return!n||"object"!==((e=n)&&e.constructor===Symbol?"symbol":typeof e)&&"function"!==typeof n?(0,o.Z)(t):n;var e}function u(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=i(t);if(n){var o=i(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}},4924:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})},8029:function(t,n,e){"use strict";function r(t,n){return r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(t,n)}function i(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,{Z:function(){return i}})},6042:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(4924);function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),i.forEach((function(n){(0,r.Z)(t,n,e[n])}))}return t}}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,179],(function(){return n(1118),n(387)}));var e=t.O();_N_E=e}]);