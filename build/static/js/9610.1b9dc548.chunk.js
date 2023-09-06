"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[9610],{99610:function(e,n,r){r.r(n);var s=r(72791),t=r(78983),a=r(7692),i=r(56355),o=r(59434),c=r(43774),l=r(16856),u=r(79985),d=r(16871),p=r(80184);n.default=function(){var e=(0,o.v9)((function(e){return e.route.route})),n=(0,o.I0)(),r=(0,d.s0)();(0,s.useEffect)((function(){n((0,c.sQ)("pending")),n((0,c.PD)("pending")),n((0,c.D4)("pending"))}),[]);var h=(0,s.useMemo)((function(){return[{Header:"Order Number",accessor:"orderNumber"},{Header:"Customer Name",accessor:function(e){return(0,p.jsx)("span",{children:""===e.user.first_name?"--":(0,p.jsxs)("span",{children:[e.user.first_name," ",e.user.last_name]})})}},{Header:"Phone",accessor:function(e){return(0,p.jsx)("span",{children:""===e.user.mobile?"--":(0,p.jsx)("span",{children:e.user.mobile})})}},{Header:"Driver",accessor:function(e){return(0,p.jsx)("span",{children:null===e.driver?"--":(0,p.jsx)("span",{children:e.driver})})}},{Header:"Due time",accessor:function(e){return(0,p.jsx)("span",{children:null===e.pickupDate?"--":(0,p.jsx)("span",{children:e.pickupDate})})}},{Header:"Amount",accessor:function(e){return(0,p.jsxs)("span",{children:[(0,p.jsx)(a.lQC,{}),null===e||void 0===e?void 0:e.price.toLocaleString("en-US")]})}},{Header:"Action",disableSortBy:!0,accessor:function(e){return(0,p.jsxs)(t.sl,{className:"d-flex justify-content-start align-items-center ps-0 gap-2",children:[(0,p.jsx)(i.fmQ,{className:"cursor",title:"Assign Driver",onClick:function(){return r=e.orderNumber,n((0,c.xY)()),void n((0,c.aT)(r));var r}}),(0,p.jsx)(l.WCS,{className:"cursor fs-6",title:"Preview Pending Route",onClick:function(){return n=e.id,void r("/dispatcher/viewRoute/".concat(n));var n}})]})}}]}),[]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(t.xH,{className:"mt-4",children:(0,p.jsx)(u.Z,{data:(null===e||void 0===e?void 0:e.orderDetails)||[],columns:h})})})}},79985:function(e,n,r){var s=r(1413),t=r(72791),a=r(71358),i=r(39126),o=r(59434),c=r(80184);n.Z=function(e){var n=e.data,r=e.columns,l=(0,o.v9)((function(e){return e.users})),u=l.searchField,d=(0,a.useTable)({columns:r,data:n,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination),p=d.getTableProps,h=d.getTableBodyProps,f=d.headerGroups,g=d.page,x=d.prepareRow,m=(d.state,d.canPreviousPage),j=d.canNextPage,v=d.pageOptions,b=d.gotoPage,N=d.nextPage,P=d.previousPage,C=d.pageCount,y=d.state,S=y.pageIndex;y.pageSize;return(0,t.useEffect)((function(){b(0)}),[u]),(0,t.useEffect)((function(){(null===n||void 0===n?void 0:n.length)%10===0&&P()}),[n]),(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[S]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{children:(0,c.jsxs)("table",(0,s.Z)((0,s.Z)({},p()),{},{className:"category-table",children:[(0,c.jsx)("thead",{className:"category-table-head",children:f.map((function(e,n){return(0,t.createElement)("tr",(0,s.Z)((0,s.Z)({},e.getHeaderGroupProps()),{},{key:n}),e.headers.map((function(e,n){return(0,c.jsxs)("th",{children:[e.render("Header"),(0,c.jsx)("span",(0,s.Z)((0,s.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.CSs,{className:"arrow-down"}),(0,c.jsx)(i.HTv,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.CSs,{}),(0,c.jsx)(i.HTv,{className:"arrow-down"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.HTv,{}),(0,c.jsx)(i.CSs,{})]}))}))]},n)})))}))}),(0,c.jsx)("tbody",(0,s.Z)((0,s.Z)({},h()),{},{className:"category-table-body",children:0!==n.length?g.map((function(e,n){return x(e),(0,t.createElement)("tr",(0,s.Z)((0,s.Z)({className:"th-table"},e.getRowProps()),{},{key:n}),e.cells.map((function(e,n){return(0,t.createElement)("th",(0,s.Z)((0,s.Z)({className:"th-table-data"},e.getCellProps()),{},{key:n}),e.render("Cell"))})))})):(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:r.length,children:" No record found"})})}))]}))}),(null===n||void 0===n?void 0:n.length)>10?(0,c.jsxs)("div",{className:"pagination-button",children:[(0,c.jsx)("button",{onClick:function(){return b(0)},disabled:0===S,children:"<<"})," ",(0,c.jsx)("button",{onClick:function(){return P()},disabled:!m,children:"<"}),(0,c.jsxs)("strong",{className:"me-2",children:[S+1," of ",v.length]})," ",(0,c.jsx)("button",{onClick:function(){return N()},disabled:!j,children:">"}),(0,c.jsx)("button",{onClick:function(){return b(C-1)},disabled:S===C-1,children:">>"})," "]}):""]})}}}]);
//# sourceMappingURL=9610.1b9dc548.chunk.js.map