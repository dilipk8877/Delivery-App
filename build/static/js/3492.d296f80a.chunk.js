"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[3492],{43492:function(e,n,t){t.r(n);var r=t(78983),s=t(72791),a=t(59434),o=t(90651),l=t(79985),c=t(80184);n.default=function(){var e=(0,a.v9)((function(e){return e.payout.payoutList})),n=(0,a.I0)();(0,s.useEffect)((function(){n((0,o.nA)("2"))}),[]);var t=(0,s.useMemo)((function(){return[{Header:"Date",accessor:function(e){return(0,c.jsx)("span",{children:null===e.requestedBy?"--":(0,c.jsx)("span",{children:e.requestedBy})})}},{Header:"Agent",accessor:function(e){return(0,c.jsx)("span",{children:""===e.requestedBy?"--":(0,c.jsx)("span",{children:e.agentName})})}},{Header:"Amount",accessor:function(e){return(0,c.jsx)("span",{children:null===e.requestedBy?"--":(0,c.jsx)("span",{children:e.amount})})}},{Header:"Payout Type",accessor:function(e){return(0,c.jsx)("span",{children:""===e.requestedBy?"--":(0,c.jsx)("span",{children:e.payoutType})})}},{Header:"Bank Details",disableSortBy:!0,accessor:function(e){return(0,c.jsx)("span",{children:null===e.requestedBy?"--":(0,c.jsx)("span",{children:e.bankDetails})})}},{Header:"Action",disableSortBy:!0,accessor:function(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.u5,{color:"info",className:"text-white",children:"Payout"})})}}]}),[]);return(0,c.jsx)(r.xH,{children:(0,c.jsx)(l.Z,{data:(null===e||void 0===e?void 0:e.detailsPayout)||[],columns:t})})}},79985:function(e,n,t){var r=t(1413),s=t(72791),a=t(71358),o=t(39126),l=t(59434),c=t(80184);n.Z=function(e){var n=e.data,t=e.columns,i=(0,l.v9)((function(e){return e.users})),u=i.searchField,d=(0,a.useTable)({columns:t,data:n,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination),h=d.getTableProps,p=d.getTableBodyProps,x=d.headerGroups,g=d.page,f=d.prepareRow,j=(d.state,d.canPreviousPage),m=d.canNextPage,y=d.pageOptions,b=d.gotoPage,v=d.nextPage,P=d.previousPage,S=d.pageCount,Z=d.state,k=Z.pageIndex;Z.pageSize;return(0,s.useEffect)((function(){b(0)}),[u]),(0,s.useEffect)((function(){(null===n||void 0===n?void 0:n.length)%10===0&&P()}),[n]),(0,s.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[k]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{children:(0,c.jsxs)("table",(0,r.Z)((0,r.Z)({},h()),{},{className:"category-table",children:[(0,c.jsx)("thead",{className:"category-table-head",children:x.map((function(e,n){return(0,s.createElement)("tr",(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{key:n}),e.headers.map((function(e,n){return(0,c.jsxs)("th",{children:[e.render("Header"),(0,c.jsx)("span",(0,r.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.CSs,{className:"arrow-down"}),(0,c.jsx)(o.HTv,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.CSs,{}),(0,c.jsx)(o.HTv,{className:"arrow-down"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.HTv,{}),(0,c.jsx)(o.CSs,{})]}))}))]},n)})))}))}),(0,c.jsx)("tbody",(0,r.Z)((0,r.Z)({},p()),{},{className:"category-table-body",children:0!==n.length?g.map((function(e,n){return f(e),(0,s.createElement)("tr",(0,r.Z)((0,r.Z)({className:"th-table"},e.getRowProps()),{},{key:n}),e.cells.map((function(e,n){return(0,s.createElement)("th",(0,r.Z)((0,r.Z)({className:"th-table-data"},e.getCellProps()),{},{key:n}),e.render("Cell"))})))})):(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:t.length,children:" No record found"})})}))]}))}),(null===n||void 0===n?void 0:n.length)>10?(0,c.jsxs)("div",{className:"pagination-button",children:[(0,c.jsx)("button",{onClick:function(){return b(0)},disabled:0===k,children:"<<"})," ",(0,c.jsx)("button",{onClick:function(){return P()},disabled:!j,children:"<"}),(0,c.jsxs)("strong",{className:"me-2",children:[k+1," of ",y.length]})," ",(0,c.jsx)("button",{onClick:function(){return v()},disabled:!m,children:">"}),(0,c.jsx)("button",{onClick:function(){return b(S-1)},disabled:k===S-1,children:">>"})," "]}):""]})}}}]);
//# sourceMappingURL=3492.d296f80a.chunk.js.map