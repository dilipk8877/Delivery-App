"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[8654],{88654:function(e,s,t){t.r(s);var n=t(4942),r=t(72791),a=t(78983),i=t(56355),c=t(59434),o=t(86406),l=t(79985),d=t(84373),u=t(80184);s.default=function(){var e=(0,c.v9)((function(e){return e.merchants})),s=e.merchant,t=(e.page,e.searchInput),g=(0,c.I0)();(0,r.useEffect)((function(){g((0,o.Z_)({status:"isAwaiting=0",searchInput:t})),g((0,o.PD)({status:"isAwaiting=0"})),g((0,o.WM)("awaiting"))}),[g,t]);var h=(0,r.useMemo)((function(){return[{Header:"Merchant Name",accessor:function(e){var s,t;return(0,u.jsxs)("span",{children:[null===e||void 0===e||null===(s=e.user)||void 0===s?void 0:s.first_name," ",null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.last_name]})}},{Header:"Mobile",accessor:"user.mobile"},{Header:"Email",accessor:"user.email"},{Header:"Address",accessor:"address"},{Header:"State",accessor:"state"},{Header:"District",accessor:"district"},{Header:"Pincode",accessor:"pincode"},(0,n.Z)({Header:"Action",disableSortBy:!0,accessor:"price"},"accessor",(function(e){return(0,u.jsxs)(a.KB,{className:"d-flex justify-content-start align-items-center ps-0 gap-2",children:[(0,u.jsx)(i.Xm5,{className:"cursor",title:"Delete Merchant",onClick:function(){return s=e.userId,g((0,o.PD)("isAwaiting=0")),g((0,o.FX)(s)),void g((0,o._5)());var s}}),(0,u.jsx)(d.osu,{title:"Approve",className:"fs-5 text-warning cursor",onClick:function(){return s=e.id,void g((0,o.zy)({id:s,status:"isAwaiting=0"}));var s}})]})}))]}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.xH,{className:"mb-4",children:(0,u.jsx)(l.Z,{data:(null===s||void 0===s?void 0:s.merchants)||[],columns:h})})})}},79985:function(e,s,t){var n=t(1413),r=t(72791),a=t(71358),i=t(39126),c=t(59434),o=t(80184);s.Z=function(e){var s=e.data,t=e.columns,l=(0,c.v9)((function(e){return e.users})),d=l.searchField,u=(0,a.useTable)({columns:t,data:s,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination),g=u.getTableProps,h=u.getTableBodyProps,p=u.headerGroups,m=u.page,f=u.prepareRow,x=(u.state,u.canPreviousPage),v=u.canNextPage,j=u.pageOptions,b=u.gotoPage,P=u.nextPage,y=u.previousPage,w=u.pageCount,N=u.state,Z=N.pageIndex;N.pageSize;return(0,r.useEffect)((function(){b(0)}),[d]),(0,r.useEffect)((function(){(null===s||void 0===s?void 0:s.length)%10===0&&y()}),[s]),(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[Z]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)("table",(0,n.Z)((0,n.Z)({},g()),{},{className:"category-table",children:[(0,o.jsx)("thead",{className:"category-table-head",children:p.map((function(e,s){return(0,r.createElement)("tr",(0,n.Z)((0,n.Z)({},e.getHeaderGroupProps()),{},{key:s}),e.headers.map((function(e,s){return(0,o.jsxs)("th",{children:[e.render("Header"),(0,o.jsx)("span",(0,n.Z)((0,n.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.CSs,{className:"arrow-down"}),(0,o.jsx)(i.HTv,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.CSs,{}),(0,o.jsx)(i.HTv,{className:"arrow-down"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.HTv,{}),(0,o.jsx)(i.CSs,{})]}))}))]},s)})))}))}),(0,o.jsx)("tbody",(0,n.Z)((0,n.Z)({},h()),{},{className:"category-table-body",children:0!==s.length?m.map((function(e,s){return f(e),(0,r.createElement)("tr",(0,n.Z)((0,n.Z)({className:"th-table"},e.getRowProps()),{},{key:s}),e.cells.map((function(e,s){return(0,r.createElement)("th",(0,n.Z)((0,n.Z)({className:"th-table-data"},e.getCellProps()),{},{key:s}),e.render("Cell"))})))})):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:t.length,children:" No record found"})})}))]}))}),(null===s||void 0===s?void 0:s.length)>10?(0,o.jsxs)("div",{className:"pagination-button",children:[(0,o.jsx)("button",{onClick:function(){return b(0)},disabled:0===Z,children:"<<"})," ",(0,o.jsx)("button",{onClick:function(){return y()},disabled:!x,children:"<"}),(0,o.jsxs)("strong",{className:"me-2",children:[Z+1," of ",j.length]})," ",(0,o.jsx)("button",{onClick:function(){return P()},disabled:!v,children:">"}),(0,o.jsx)("button",{onClick:function(){return b(w-1)},disabled:Z===w-1,children:">>"})," "]}):""]})}}}]);
//# sourceMappingURL=8654.85585524.chunk.js.map