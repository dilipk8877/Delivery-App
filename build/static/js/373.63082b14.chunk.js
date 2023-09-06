"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[373],{40373:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var s=t(78983),r=t(72791),o=t(39126),a=t(56355),l=t(59434),i=t(16871),c=t(73886),d=t(17209),u=t(79985),h=t(7993),f=t(80184),m=function(){var e,n,t,s,r,o=(0,l.v9)((function(e){return e.geoFen.coordinatById})),a=null===o||void 0===o||null===(e=o.theGeoFence)||void 0===e||null===(n=e.coordinates)||void 0===n?void 0:n.map((function(e){return e.lat})),i=null===o||void 0===o||null===(t=o.theGeoFence)||void 0===t||null===(s=t.coordinates)||void 0===s?void 0:s.map((function(e){return e.lng})),c={lat:a&&a[0]?a[0]:30.682421,lng:i&&i[0]?i[0]:76.727631},d=null===o||void 0===o||null===(r=o.theGeoFence)||void 0===r?void 0:r.coordinates;return(0,f.jsx)(h.b6,{id:"marker-example",mapContainerStyle:{height:"550px",width:"100%"},zoom:12,center:c,children:(0,f.jsx)(h.mg,{paths:d,options:{fillColor:"lightblue",fillOpacity:.3,strokeColor:"red",strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1}})})},x=t(70828),g=function(){var e=(0,l.I0)(),n=(0,l.v9)((function(e){return e.geoFen})),t=n.confirmationMesaage,r=n.deleteId,o=function(){e((0,c.oz)()),e((0,c.De)(null))};return(0,f.jsxs)(s.Tk,{alignment:"center",visible:t,children:[(0,f.jsxs)(s.PO,{className:"rounded-top",children:[(0,f.jsx)(s.fl,{}),(0,f.jsx)(x.sQZ,{className:"text-danger cursor fs-5 me-2",onClick:o})]}),(0,f.jsx)(s.sD,{className:"confirmCardText fs-6 w-100 d-flex justify-content-center",children:"Do you really want to delete this record?"}),(0,f.jsxs)(s.Ym,{children:[(0,f.jsx)(s.u5,{color:"secondary",onClick:o,children:"No"}),(0,f.jsx)(s.u5,{color:"info",className:"text-white",type:"submit",onClick:function(){e((0,c.Hd)(r)),e((0,c.oz)()),location.reload()},children:"Yes"})]})]})},p=function(){var e=(0,l.v9)((function(e){return e.geoFen})),n=e.geoFence,t=e.isLoader,h=(0,l.I0)(),x=(0,i.s0)();(0,r.useEffect)((function(){h((0,c.XL)())}),[]);var p=(0,r.useMemo)((function(){return[{Header:"Name",accessor:function(e){var n,t;return(0,f.jsx)("span",{onClick:function(){return h((0,c.a8)(e.id))},className:"cursor",children:(null===(n=e.geofencing_name)||void 0===n?void 0:n.charAt(0).toUpperCase())+(null===(t=e.geofencing_name)||void 0===t?void 0:t.slice(1))})}},{Header:"Team",accessor:"teamName"},{Header:"Action",disableSortBy:!0,accessor:function(e){return(0,f.jsxs)(s.sl,{className:"d-flex justify-content-start align-items-center ps-0 gap-2",children:[(0,f.jsx)(a.fmQ,{className:"cursor",title:"Update geoFence",onClick:function(){return n=e.id,void x("/dispatcher/geoFence/updateGeoFence/".concat(n));var n}}),(0,f.jsx)(a.Xm5,{className:"cursor",title:"Delete geoFence",onClick:function(){return n=e.id,h((0,c.De)(n)),void h((0,c.J7)());var n}})]})}}]}),[]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(s.xH,{className:"mb-4",children:[t?(0,f.jsx)(d.Z,{className:"modal-spinner"}):null,(0,f.jsx)(s.sl,{children:(0,f.jsxs)(s.rb,{children:[(0,f.jsxs)(s.b7,{md:4,children:[(0,f.jsx)(s.KB,{className:"d-flex justify-content-start gap-3 mb-4",children:(0,f.jsxs)(s.u5,{color:"info",className:"button-size text-white d-flex justify-content-center align-items-center",onClick:function(){x("/dispatcher/geoFence/addGeoFence")},children:[(0,f.jsx)(o.Y_C,{className:"me-1 button-icon"}),"Add"]})}),(0,f.jsx)(s.xH,{children:(0,f.jsx)(u.Z,{data:(null===n||void 0===n?void 0:n.GeoFence_Details)||[],columns:p})})]}),(0,f.jsx)(s.b7,{md:8,children:(0,f.jsx)(m,{})})]})}),(0,f.jsx)(g,{})]})})}},79985:function(e,n,t){var s=t(1413),r=t(72791),o=t(71358),a=t(39126),l=t(59434),i=t(80184);n.Z=function(e){var n=e.data,t=e.columns,c=(0,l.v9)((function(e){return e.users})),d=c.searchField,u=(0,o.useTable)({columns:t,data:n,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},o.useGlobalFilter,o.useSortBy,o.usePagination),h=u.getTableProps,f=u.getTableBodyProps,m=u.headerGroups,x=u.page,g=u.prepareRow,p=(u.state,u.canPreviousPage),j=u.canNextPage,v=u.pageOptions,b=u.gotoPage,y=u.nextPage,N=u.previousPage,C=u.pageCount,k=u.state,F=k.pageIndex;k.pageSize;return(0,r.useEffect)((function(){b(0)}),[d]),(0,r.useEffect)((function(){(null===n||void 0===n?void 0:n.length)%10===0&&N()}),[n]),(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[F]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)("table",(0,s.Z)((0,s.Z)({},h()),{},{className:"category-table",children:[(0,i.jsx)("thead",{className:"category-table-head",children:m.map((function(e,n){return(0,r.createElement)("tr",(0,s.Z)((0,s.Z)({},e.getHeaderGroupProps()),{},{key:n}),e.headers.map((function(e,n){return(0,i.jsxs)("th",{children:[e.render("Header"),(0,i.jsx)("span",(0,s.Z)((0,s.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.CSs,{className:"arrow-down"}),(0,i.jsx)(a.HTv,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.CSs,{}),(0,i.jsx)(a.HTv,{className:"arrow-down"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.HTv,{}),(0,i.jsx)(a.CSs,{})]}))}))]},n)})))}))}),(0,i.jsx)("tbody",(0,s.Z)((0,s.Z)({},f()),{},{className:"category-table-body",children:0!==n.length?x.map((function(e,n){return g(e),(0,r.createElement)("tr",(0,s.Z)((0,s.Z)({className:"th-table"},e.getRowProps()),{},{key:n}),e.cells.map((function(e,n){return(0,r.createElement)("th",(0,s.Z)((0,s.Z)({className:"th-table-data"},e.getCellProps()),{},{key:n}),e.render("Cell"))})))})):(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:t.length,children:" No record found"})})}))]}))}),(null===n||void 0===n?void 0:n.length)>10?(0,i.jsxs)("div",{className:"pagination-button",children:[(0,i.jsx)("button",{onClick:function(){return b(0)},disabled:0===F,children:"<<"})," ",(0,i.jsx)("button",{onClick:function(){return N()},disabled:!p,children:"<"}),(0,i.jsxs)("strong",{className:"me-2",children:[F+1," of ",v.length]})," ",(0,i.jsx)("button",{onClick:function(){return y()},disabled:!j,children:">"}),(0,i.jsx)("button",{onClick:function(){return b(C-1)},disabled:F===C-1,children:">>"})," "]}):""]})}}}]);
//# sourceMappingURL=373.63082b14.chunk.js.map