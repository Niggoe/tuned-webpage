(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[169],{113:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n(653)}])},653:function(e,s,n){"use strict";n.r(s);var t=n(4111),i=n(1438),a=n(2951),o=n(4924),r=n(8029),c=n(460),d=n(5893),l=function(e){(0,r.Z)(n,e);var s=(0,c.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=s.apply(this,arguments),(0,o.Z)((0,t.Z)(e),"state",{days:"",hours:"",minutes:"",seconds:""}),(0,o.Z)((0,t.Z)(e),"commingSoonTime",(function(){var s=new Date("August 23, 2022 17:00:00 PDT"),n=Date.parse(s)/1e3,t=new Date,i=n-Date.parse(t)/1e3,a=Math.floor(i/86400),o=Math.floor((i-86400*a)/3600),r=Math.floor((i-86400*a-3600*o)/60),c=Math.floor(i-86400*a-3600*o-60*r);o<"10"&&(o="0"+o),r<"10"&&(r="0"+r),c<"10"&&(c="0"+c),e.setState({days:a,hours:o,minutes:r,seconds:c})})),(0,o.Z)((0,t.Z)(e),"onSubmit",(function(e){e.preventDefault()})),e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return(0,d.jsx)("div",{className:"coming-soon-area",children:(0,d.jsx)("div",{className:"d-table",children:(0,d.jsx)("div",{className:"d-table-cell",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"coming-soon-content",children:[(0,d.jsx)("h1",{children:"Coming Soon"}),(0,d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."}),(0,d.jsxs)("div",{id:"timer",children:[(0,d.jsxs)("div",{id:"days",children:[this.state.days," ",(0,d.jsx)("span",{children:"Days"})]}),(0,d.jsxs)("div",{id:"hours",children:[this.state.hours," ",(0,d.jsx)("span",{children:"Hours"})]}),(0,d.jsxs)("div",{id:"minutes",children:[this.state.minutes," ",(0,d.jsx)("span",{children:"Minutes"})]}),(0,d.jsxs)("div",{id:"seconds",children:[this.state.seconds," ",(0,d.jsx)("span",{children:"Seconds"})]})]}),(0,d.jsxs)("form",{className:"newsletter-form",children:[(0,d.jsx)("input",{type:"email",className:"input-newsletter",placeholder:"Enter email address",name:"email",required:!0}),(0,d.jsx)("button",{type:"submit",className:"default-btn",children:"Notify Me"})]})]})})})})})}}]),n}(n(7294).Component);s.default=l}},function(e){e.O(0,[774,888,179],(function(){return s=113,e(e.s=s);var s}));var s=e.O();_N_E=s}]);