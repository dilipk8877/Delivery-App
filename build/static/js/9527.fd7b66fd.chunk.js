"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[9527],{59527:function(e,t,s){s.r(t);var r=s(78983),n=s(59434),a=s(56355),c=s(86406),i=s(72791),o=s(79985),l=s(85880),d=s(80184);t.default=function(){var e=(0,n.v9)((function(e){return e.merchants})),t=e.merchant,s=e.searchInput,u=(0,n.I0)();(0,i.useEffect)((function(){u((0,c.Z_)({status:"isActive=1",searchInput:s})),u((0,c.PD)({status:"isActive=1"})),u((0,c.WM)("active"))}),[s]);var h=(0,i.useMemo)((function(){return[{Header:"Merchant Name",accessor:function(e){var t,s;return(0,d.jsxs)("span",{children:[null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.first_name," ",null===e||void 0===e||null===(s=e.user)||void 0===s?void 0:s.last_name]})}},{Header:"Mobile",accessor:"user.mobile"},{Header:"Email",accessor:"user.email"},{Header:"Address",accessor:"address"},{Header:"State",accessor:"state"},{Header:"District",accessor:"district"},{Header:"Pincode",accessor:"pincode"},{Header:"Action",disableSortBy:!0,accessor:function(e){return(0,d.jsxs)(r.KB,{className:"d-flex justify-content-start align-items-center ps-0 gap-2",children:[(0,d.jsx)(a.Xm5,{className:"cursor",title:"Delete Merchant",onClick:function(){return t=e.userId,u((0,c.PD)("isActive=1")),u((0,c.FX)(t)),void u((0,c._5)());var t}}),(0,d.jsx)(l.mqM,{title:"Block",className:"fs-5 text-danger cursor",onClick:function(){return t=e.userId,void u((0,c.Nx)({id:t,status:"isActive=1"}));var t}})]})}}]}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.xH,{className:"mb-4",children:(0,d.jsx)(o.Z,{data:(null===t||void 0===t?void 0:t.merchants)||[],columns:h})})})}},79985:function(e,t,s){var r=s(1413),n=s(72791),a=s(71358),c=s(39126),i=s(59434),o=s(80184);t.Z=function(e){var t=e.data,s=e.columns,l=(0,i.v9)((function(e){return e.users})),d=l.searchField,u=(0,a.useTable)({columns:s,data:t,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination),h=u.getTableProps,m=u.getTableBodyProps,g=u.headerGroups,f=u.page,p=u.prepareRow,v=(u.state,u.canPreviousPage),x=u.canNextPage,j=u.pageOptions,b=u.gotoPage,P=u.nextPage,N=u.previousPage,y=u.pageCount,H=u.state,Z=H.pageIndex;H.pageSize;return(0,n.useEffect)((function(){b(0)}),[d]),(0,n.useEffect)((function(){(null===t||void 0===t?void 0:t.length)%10===0&&N()}),[t]),(0,n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[Z]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)("table",(0,r.Z)((0,r.Z)({},h()),{},{className:"category-table",children:[(0,o.jsx)("thead",{className:"category-table-head",children:g.map((function(e,t){return(0,n.createElement)("tr",(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map((function(e,t){return(0,o.jsxs)("th",{children:[e.render("Header"),(0,o.jsx)("span",(0,r.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.CSs,{className:"arrow-down"}),(0,o.jsx)(c.HTv,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.CSs,{}),(0,o.jsx)(c.HTv,{className:"arrow-down"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.HTv,{}),(0,o.jsx)(c.CSs,{})]}))}))]},t)})))}))}),(0,o.jsx)("tbody",(0,r.Z)((0,r.Z)({},m()),{},{className:"category-table-body",children:0!==t.length?f.map((function(e,t){return p(e),(0,n.createElement)("tr",(0,r.Z)((0,r.Z)({className:"th-table"},e.getRowProps()),{},{key:t}),e.cells.map((function(e,t){return(0,n.createElement)("th",(0,r.Z)((0,r.Z)({className:"th-table-data"},e.getCellProps()),{},{key:t}),e.render("Cell"))})))})):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:s.length,children:" No record found"})})}))]}))}),(null===t||void 0===t?void 0:t.length)>10?(0,o.jsxs)("div",{className:"pagination-button",children:[(0,o.jsx)("button",{onClick:function(){return b(0)},disabled:0===Z,children:"<<"})," ",(0,o.jsx)("button",{onClick:function(){return N()},disabled:!v,children:"<"}),(0,o.jsxs)("strong",{className:"me-2",children:[Z+1," of ",j.length]})," ",(0,o.jsx)("button",{onClick:function(){return P()},disabled:!x,children:">"}),(0,o.jsx)("button",{onClick:function(){return b(y-1)},disabled:Z===y-1,children:">>"})," "]}):""]})}}}]);
//# sourceMappingURL=9527.fd7b66fd.chunk.js.map