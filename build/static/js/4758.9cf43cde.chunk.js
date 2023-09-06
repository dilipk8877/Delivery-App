"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[4758],{84758:function(s,l,e){e.r(l),e.d(l,{default:function(){return x}});var a=e(72791),n=e(78983),i=e(93076),r=e(15005),c=e(8379),d=e(72672),o=e(59434),t="Week",v="Month",u="Year",m=e(17209),h=e(80184),x=function(){var s=(0,o.v9)((function(s){return s.dashboard})),l=s.salesData,e=s.chartLabels,x=s.isLoader,j=(0,o.I0)();(0,a.useEffect)((function(){j((0,d.Gt)(t)),j((0,d.rk)())}),[]);return(0,h.jsxs)(h.Fragment,{children:[x?(0,h.jsx)(m.Z,{color:"primary",className:"modal-spinner"}):null,(0,h.jsx)(c.Z,{}),(0,h.jsx)(n.rb,{}),(0,h.jsx)(n.xH,{className:"mb-4",children:(0,h.jsx)(n.sl,{children:(0,h.jsxs)(n.rb,{children:[(0,h.jsx)(n.b7,{sm:5,children:(0,h.jsx)("h5",{id:"traffic",className:"card-title mb-0",children:"Sales Analytics"})}),(0,h.jsx)(n.b7,{sm:7,className:"d-none d-md-block",children:(0,h.jsx)(n.Z0,{className:"float-end me-3",children:["Year","Week","Month"].map((function(s,l){return(0,h.jsx)(n.u5,{color:"outline-secondary",id:"btngraph",onClick:function(){return l=s,j((0,d.Gt)(l)),l===t&&j((0,d.rk)()),l===u&&j((0,d.iE)()),void(l===v&&j((0,d.Ch)()));var l},className:"mx-0",children:s},l)}))})}),(0,h.jsx)(i.FR,{type:"bar",data:{labels:e,datasets:[{label:"deliveries",backgroundColor:(0,r.hexToRgba)((0,r.getStyle)("--cui-info"),10),borderColor:(0,r.getStyle)("--cui-info"),pointHoverBackgroundColor:(0,r.getStyle)("--cui-info"),borderWidth:2,data:l,fill:!0}]},labels:"months"})]})})})]})}},8379:function(s,l,e){var a=e(72791),n=e(78983),i=e(59434),r=e(72672),c=e(80184);l.Z=function(){var s,l,e,d,o,t,v,u,m,h,x,j,b,f,p,N,g,k,O=(0,i.v9)((function(s){return s.dashboard})).stats,y=(0,i.I0)(),A=(0,i.v9)((function(s){return s.user}));return(0,a.useEffect)((function(){y((0,r.Ll)(A))}),[]),(0,c.jsxs)(n.rb,{children:[(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"success",title:"Delivered Order",value:null!==O&&void 0!==O&&null!==(s=O.deliveries)&&void 0!==s&&s.deliveredOrders?(0,c.jsx)("span",{className:"fs-4",children:null===(l=O.deliveries)||void 0===l?void 0:l.deliveredOrders}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"info",title:"Active Order",value:null!==O&&void 0!==O&&null!==(e=O.deliveries)&&void 0!==e&&e.activeOrders?(0,c.jsx)("span",{className:"fs-4",children:null===(d=O.deliveries)||void 0===d?void 0:d.activeOrders}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"warning",title:"Pending Order",value:null!==O&&void 0!==O&&null!==(o=O.deliveries)&&void 0!==o&&o.pendingOrders?(0,c.jsx)("span",{className:"fs-4",children:null===(t=O.deliveries)||void 0===t?void 0:t.pendingOrders}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"danger",title:"Cancelled Order",value:null!==O&&void 0!==O&&null!==(v=O.deliveries)&&void 0!==v&&v.cancelledOrders?(0,c.jsx)("span",{className:"fs-4",children:null===(u=O.deliveries)||void 0===u?void 0:u.cancelledOrders}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"info",title:"Total Merchant",value:null!==O&&void 0!==O&&null!==(m=O.vendors)&&void 0!==m&&m.totalMerchants?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O||null===(h=O.vendors)||void 0===h?void 0:h.totalMerchants}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"success",title:"Active Merchant",value:null!==O&&void 0!==O&&null!==(x=O.vendors)&&void 0!==x&&x.active?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O?void 0:O.vendors.active}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"danger",title:"Blocked Merchant",value:null!==O&&void 0!==O&&null!==(j=O.vendors)&&void 0!==j&&j.blocked?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O?void 0:O.vendors.blocked}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"warning",title:"Awaiting Merchant",value:null!==O&&void 0!==O&&null!==(b=O.vendors)&&void 0!==b&&b.awaiting?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O?void 0:O.vendors.awaiting}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"dark",title:"Customers",value:null!==O&&void 0!==O&&null!==(f=O.misc)&&void 0!==f&&f.customers?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O?void 0:O.misc.customers}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"dark",title:"Agents",value:null!==O&&void 0!==O&&null!==(p=O.agents)&&void 0!==p&&p.totalAgents?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O||null===(N=O.agents)||void 0===N?void 0:N.totalAgents}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})}),(0,c.jsx)(n.b7,{sm:6,lg:3,children:(0,c.jsx)(n.co,{className:"pb-2 mb-4",color:"primary",title:"Teams",value:null!==O&&void 0!==O&&null!==(g=O.teams)&&void 0!==g&&g.totalTeams?(0,c.jsx)("span",{className:"fs-4",children:null===O||void 0===O||null===(k=O.teams)||void 0===k?void 0:k.totalTeams}):(0,c.jsx)("span",{className:"fs-4",children:"0"})})})]})}}}]);
//# sourceMappingURL=4758.9cf43cde.chunk.js.map