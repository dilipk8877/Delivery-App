"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[8340],{46966:function(e,r,a){a.d(r,{ld:function(){return x},M3:function(){return o},tl:function(){return h},BT:function(){return f},Dl:function(){return y},r7:function(){return b},fN:function(){return Z},G3:function(){return g},K7:function(){return m},b6:function(){return c},Cp:function(){return q},X8:function(){return j},pj:function(){return N},$2:function(){return _},Sn:function(){return p},tw:function(){return v}});var t=5e6,i=a(76863),n=/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,s=["","image/jpg","image/jpeg","image/png"],l=["text/csv"],d=/^[a-zA-Z]*$/,u=/^[a-zA-Z0-9_]*$/,m=i.Ry({teamId:i.Z_().required("Please Select Team Id, It is required"),type:i.Z_().required("Please Select Agent Type, It is required"),first_name:i.Z_().required("First Name is required").trim("First Name is required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Last Name is required").trim("Last Name is required").matches(d,"Only alphabets are allowed"),email:i.Z_().email("Email must be a valid email").required("Email is required"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),website:i.Z_().required("Website is required").trim("Website is required").matches(n,"Enter correct website url!"),dob:i.Z_().required("Please Select DOB, It is required"),plate_number:i.Z_().required("Vehicle Number is required").trim("Vehicle Number is required"),vehicle_type:i.Z_().required("Please Select Vehicle Type, It is required"),delivery_area:i.Z_().required("Delievery Area is required").trim("Delievery Area is required")}),c=i.Ry({maxRadius:i.Z_().required("Max Raduis is Required")}),o=i.Ry({geofencing_name:i.Z_().required("Geo Fence Name is Required"),location:i.Z_().required("Location is Required, and Assign Area to Team"),teamName:i.Z_().required("Select Team Name, It is Required"),coordinates:i.IX().required("Assign Area to Team")}),h=i.Ry({first_name:i.Z_().required("First Name is required").trim("First Name is required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Last Name is required").trim("Last Name is required").matches(d,"Only alphabets are allowed"),email:i.Z_().email("Email must be a valid email").required("Email is required").trim("Email is required"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),status:i.Z_().required("Please Select Status, It's required")}),b=i.Ry({name:i.Z_().required("Name is Required").trim("Name is Required"),geoFenceId:i.Z_().required("Please Select Geo Fence").nullable(),teamId:i.Z_().required("Please Select Team Name").nullable(),agentVehicle:i.Z_().required("Please Select Vehicle Type").nullable(),basePrice:i.Z_().required("Base Price is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Price must be only number").min(0,"Base Price must be exactly 0 digits").max(4,"Base Price must be exactly 4 digits"),baseDuration:i.Z_().required("Base Duration is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Duration must be only number").min(0,"Base Duration must be exactly 0 digits").max(4,"Base Duration must be exactly 4 digits"),baseDistance:i.Z_().required("Base Distance is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Distance must be only number").min(0,"Base Distance must be exactly 0 digits").max(4,"Base Distance must be exactly 4 digits"),DurationPrice:i.Z_().required("Duration Price is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Duration Price must be only number").min(0,"Duration Price must be exactly 0 digits").max(4,"Duration Price must be exactly 4 digits"),DistanceFee:i.Z_().required("Distance Fee is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Distance Fee must be only number").min(0,"Distance Fee must be exactly 0 digits").max(4,"Distance Fee must be exactly 4 digits"),agentCommPercnt:i.Z_().required("Agent Commission Percentage is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Agent Commission Percentage must be only number").min(0,"Agent Commission Percentage must be exactly 0 digits").max(4,"Agent Commission Percentage must be exactly 4 digits")}),g=i.Ry({team_name:i.Z_().required("Team Name is required").trim("Team Name is required"),team_tag:i.Z_().required("Team tag is required").trim("Team tag is required")}),x=i.Ry({first_name:i.Z_().required("First Name is required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Last Name is required").matches(d,"Only alphabets are allowed"),email:i.Z_().email("Email must be a valid email").required("Email is required"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number Must be exactly 10 digits").max(13,"Phone number Must be exactly 10 digits")}),p=i.Ry({first_name:i.Z_().required("First Name is required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Last Name is required").matches(d,"Only alphabets are allowed"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits").required("Phone number is required")}),q=i.Ry({file:i.nK().required(" File is required").test("type","You can upload only CSV file",(function(e){return e&&l.includes(e.type)}))}),f=i.Ry({first_name:i.Z_().required("First Name is required").trim("First Name is required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Last Name is required").trim("Last Name is required").matches(d,"Only alphabets are allowed"),email:i.Z_().email("Email must be a valid email").required("Email is required"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),pincode:i.Z_().required("Pincode is required").matches(/^[0-9]+$/,"Pincode must be only number").min(6,"Pincode must be exactly 6 digits").max(6,"Pincode must be exactly 6 digits"),address:i.Z_().required("Address is required").trim("Address is required"),website:i.Z_().required("Website is required").trim("Website is required").matches(n,"Enter correct website url!"),state:i.Z_().required("State is required"),district:i.Z_().required("District is required"),country:i.Z_().required("Country is required")}),j=i.Ry({file:i.nK().required("File is required").test("type","You can upload only CSV file",(function(e){return e&&l.includes(e.type)}))}),y=i.Ry({name:i.Z_().required("Banner Name is Required").trim("Banner Name is Required"),startDate:i.Z_().required("Start Date is Required"),endDate:i.Z_().required("End Date is Required"),bannerImages:i.nK().required(" File is required").test("file_size","File Size is too large",(function(e){return e&&e.size<=t})).test("fileFormat","You can upload only jpg,png,jpeg file",(function(e){return e&&s.includes(e.type)}))}),v=i.Ry({name:i.Z_().required("Banner Name is Required").trim("Banner Name is Required"),startDate:i.Z_().required("Start Date is Required"),endDate:i.Z_().required("End Date is Required")}),N=i.Ry({email:i.Z_().required("Email is required"),password:i.Z_().required("Password is required")}),_=i.Ry({profileImage:i.nK().test("file_size","File Size is too large",(function(e){return!e||e.size<=t})).test("fileType","You can upload only jpg,png,jpeg file",(function(e){return!e||["image/jpg","image/jpeg","image/png"].includes(e.type)})),first_name:i.Z_().required("Name is Required").matches(d,"Only alphabets are allowed"),last_name:i.Z_().required("Name is Required").matches(d,"Only alphabets are allowed"),mobile:i.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),company_address:i.Z_().required("Company Address is Required").trim("Company Address is Required"),company_name:i.Z_().required("Company Name is Required").trim("Company Name is Required").matches(d,"Only alphabets are allowed"),short_code:i.Z_().required("Short Code is Required").min(6,"Must be exactly 6 digits").max(6,"Must be exactly 6 digits").matches(u,"Special Characters not allowed").trim("Short Code is Required"),country:i.Z_().required("Country is Required").trim("Country is Required").matches(d,"Only alphabets are allowed")}),Z=i.Ry({Title:i.Z_().required("Title is required").matches(u,"Special Characters not allowed"),Description:i.Z_().required("Short Description is required"),promo_code:i.Z_().required("Promocode is required").matches(u,"Special Characters not allowed"),Promo_Type:i.Z_().required("Promo type is required"),discount:i.Z_().required("Discount is required").matches(/^[0-9]+$/,"Must be only number").max(2,"Amount should be less than 100"),ExpiryDate:i.Z_().required("Expire Date is required")})},79985:function(e,r,a){var t=a(1413),i=a(72791),n=a(71358),s=a(39126),l=a(59434),d=a(80184);r.Z=function(e){var r=e.data,a=e.columns,u=(0,l.v9)((function(e){return e.users})),m=u.searchField,c=(0,n.useTable)({columns:a,data:r,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},n.useGlobalFilter,n.useSortBy,n.usePagination),o=c.getTableProps,h=c.getTableBodyProps,b=c.headerGroups,g=c.page,x=c.prepareRow,p=(c.state,c.canPreviousPage),q=c.canNextPage,f=c.pageOptions,j=c.gotoPage,y=c.nextPage,v=c.previousPage,N=c.pageCount,_=c.state,Z=_.pageIndex;_.pageSize;return(0,i.useEffect)((function(){j(0)}),[m]),(0,i.useEffect)((function(){(null===r||void 0===r?void 0:r.length)%10===0&&v()}),[r]),(0,i.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}),[Z]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("table",(0,t.Z)((0,t.Z)({},o()),{},{className:"category-table",children:[(0,d.jsx)("thead",{className:"category-table-head",children:b.map((function(e,r){return(0,i.createElement)("tr",(0,t.Z)((0,t.Z)({},e.getHeaderGroupProps()),{},{key:r}),e.headers.map((function(e,r){return(0,d.jsxs)("th",{children:[e.render("Header"),(0,d.jsx)("span",(0,t.Z)((0,t.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:!e.disableSortBy&&(e.isSorted?e.isSortedDesc?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.CSs,{className:"arrow-down"}),(0,d.jsx)(s.HTv,{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.CSs,{}),(0,d.jsx)(s.HTv,{className:"arrow-down"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.HTv,{}),(0,d.jsx)(s.CSs,{})]}))}))]},r)})))}))}),(0,d.jsx)("tbody",(0,t.Z)((0,t.Z)({},h()),{},{className:"category-table-body",children:0!==r.length?g.map((function(e,r){return x(e),(0,i.createElement)("tr",(0,t.Z)((0,t.Z)({className:"th-table"},e.getRowProps()),{},{key:r}),e.cells.map((function(e,r){return(0,i.createElement)("th",(0,t.Z)((0,t.Z)({className:"th-table-data"},e.getCellProps()),{},{key:r}),e.render("Cell"))})))})):(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:a.length,children:" No record found"})})}))]}))}),(null===r||void 0===r?void 0:r.length)>10?(0,d.jsxs)("div",{className:"pagination-button",children:[(0,d.jsx)("button",{onClick:function(){return j(0)},disabled:0===Z,children:"<<"})," ",(0,d.jsx)("button",{onClick:function(){return v()},disabled:!p,children:"<"}),(0,d.jsxs)("strong",{className:"me-2",children:[Z+1," of ",f.length]})," ",(0,d.jsx)("button",{onClick:function(){return y()},disabled:!q,children:">"}),(0,d.jsx)("button",{onClick:function(){return j(N-1)},disabled:Z===N-1,children:">>"})," "]}):""]})}},98340:function(e,r,a){a.r(r),a.d(r,{default:function(){return y}});var t=a(72791),i=a(78983),n=a(56355),s=a(17209),l=a(79985),d=a(39126),u=a(59434),m=a(75021),c=a(70885),o=a(55705),h=(a(76863),a(70828)),b=a(46966),g=a(80184),x=function(){var e=(0,u.v9)((function(e){return e.mobileBanner})),r=e.addModal,a=e.isLoader,n=e.toggleStatus,l=(e.prefieldValue,(0,t.useState)("")),d=(0,c.Z)(l,2),x=d[0],p=d[1],q=(0,u.I0)(),f=(0,o.TA)({initialValues:{name:"",startDate:"",endDate:"",bannerImages:"",assignTo:"abcd"},enableReinitialize:!0,validationSchema:b.Dl,onSubmit:function(e,r){q((0,m.ZX)({data:e,action:r}))}}),j=f.values,y=f.handleBlur,v=f.handleChange,N=f.handleSubmit,_=f.setFieldValue,Z=f.touched,D=f.errors,S=f.resetForm,P=x.split("-");return(0,g.jsxs)(i.Tk,{size:"lg",scrollable:!0,alignment:"center",visible:r,children:[a?(0,g.jsx)(s.Z,{color:"primary",className:"modal-spinner"}):null,(0,g.jsxs)(i.PO,{className:"rounded-top",children:[(0,g.jsx)(i.fl,{children:"Add Mobile Banner"}),(0,g.jsx)(h.sQZ,{className:"text-danger cursor fs-5 me-2",onClick:function(){q((0,m.Rb)()),S()}})]}),(0,g.jsx)(i.sD,{className:"",children:(0,g.jsx)(i.lx,{className:"mt-2",onSubmit:N,children:(0,g.jsxs)(i.rb,{children:[(0,g.jsx)(i.b7,{md:6,children:(0,g.jsxs)(i.b7,{md:12,className:"mt-2 p-0 ",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Upload Mobile Banner Image",n?(0,g.jsx)("span",{className:"text-danger",children:"*"}):null]}),(0,g.jsx)(i.jO,{type:"file",accept:".png, .jpg, .jpeg",name:"bannerImages",onBlur:y,onChange:function(e){_("bannerImages",e.currentTarget.files[0])}}),(0,g.jsx)("div",{className:"error-container",children:Z.bannerImages&&D.bannerImages?(0,g.jsx)("span",{className:"validtion-error",children:D.bannerImages}):null})]})}),(0,g.jsxs)(i.b7,{md:6,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Name",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"text",name:"name",maxLength:70,value:j.name,onBlur:y,onChange:v}),(0,g.jsx)("div",{className:"error-container",children:Z.name&&D.name?(0,g.jsx)("span",{className:"validtion-error",children:D.name}):null})]}),(0,g.jsxs)(i.b7,{md:6,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Start Date",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"date",name:"startDate",min:function(){var e=new Date,r=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+r}(),value:j.startDate,onChange:function(e){_("startDate",e.target.value),p(e.target.value)},onBlur:y}),(0,g.jsx)("div",{className:"error-container",children:Z.startDate&&D.startDate?(0,g.jsx)("span",{className:"validtion-error",children:D.startDate}):null})]}),(0,g.jsxs)(i.b7,{md:6,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["End Date",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"date",name:"endDate",min:function(){var e=new Date,r=String(P[2]).padStart(2,"0"),a=String(P[1]).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+r}(),value:j.endDate,onChange:v,onBlur:y}),(0,g.jsx)("div",{className:"error-container",children:Z.endDate&&D.endDate?(0,g.jsx)("span",{className:"validtion-error",children:D.endDate}):null})]}),(0,g.jsx)(i.b7,{md:12,className:"d-flex justify-content-center",children:(0,g.jsx)(i.u5,{type:"submit",color:"info",className:"w-25 mt-3 text-white",children:"Submit"})})]})})})]})},p=function(){var e=(0,u.I0)(),r=(0,u.v9)((function(e){return e.mobileBanner})),a=r.confirmMessage,t=r.deleteId,n=function(){e((0,m.A_)()),e((0,m.Nr)(null))};return(0,g.jsxs)(i.Tk,{alignment:"center",visible:a,children:[(0,g.jsxs)(i.PO,{className:"rounded-top",children:[(0,g.jsx)(i.fl,{}),(0,g.jsx)(h.sQZ,{className:"text-danger cursor fs-5 me-2",onClick:n})]}),(0,g.jsx)(i.sD,{className:"confirmCardText fs-6 w-100 d-flex justify-content-center",children:"Do you really want to delete this record?"}),(0,g.jsxs)(i.Ym,{children:[(0,g.jsx)(i.u5,{color:"secondary",onClick:n,children:"No"}),(0,g.jsx)(i.u5,{color:"info",className:"text-white",type:"submit",onClick:function(){e((0,m.hq)(t)),e((0,m.A_)())},children:"Yes"})]})]})},q=a(72426),f=a.n(q),j=function(){var e,r=(0,u.v9)((function(e){return e.mobileBanner})),a=r.updateModal,n=r.isLoader,l=r.prefieldValue,d=(0,t.useState)(""),x=(0,c.Z)(d,2),p=x[0],q=x[1],f=(0,t.useState)(""),j=(0,c.Z)(f,2),y=j[0],v=j[1],N=(0,t.useState)(),_=(0,c.Z)(N,2),Z=_[0],D=_[1],S=(0,u.I0)(),P=(0,o.TA)({initialValues:{name:null!==l&&void 0!==l&&l.name?null===l||void 0===l?void 0:l.name:"",startDate:null!==l&&void 0!==l&&l.startDate?null===l||void 0===l?void 0:l.startDate:"",endDate:null!==l&&void 0!==l&&l.endDate?null===l||void 0===l?void 0:l.endDate:"",bannerImages:"",assignTo:"abcd"},enableReinitialize:!0,validationSchema:b.tw,onSubmit:function(e){S((0,m.Ry)({data:e,id:null===l||void 0===l?void 0:l.id}))}}),R=P.values,w=P.handleBlur,C=P.handleChange,F=P.handleSubmit,B=P.setFieldValue,I=P.touched,T=P.errors,A=P.resetForm;return(0,g.jsxs)(i.Tk,{size:"lg",scrollable:!0,alignment:"center",visible:a,children:[n?(0,g.jsx)(s.Z,{color:"primary",className:"modal-spinner"}):null,(0,g.jsxs)(i.PO,{className:"rounded-top",children:[(0,g.jsx)(i.fl,{children:"Update Mobile Banner"}),(0,g.jsx)(h.sQZ,{className:"text-danger fs-5 me-2",onClick:function(){S((0,m.lz)()),A()}})]}),(0,g.jsx)(i.sD,{className:"",children:(0,g.jsx)(i.lx,{className:"mt-2",onSubmit:F,children:(0,g.jsxs)(i.rb,{children:[(0,g.jsx)(i.b7,{md:6,children:l&&(0,g.jsx)(i.DW,{src:Z||"https://delivery-app.softprodigyphp.in/upload/".concat(null===l||void 0===l||null===(e=l.bannerImages[0])||void 0===e?void 0:e.filename),alt:"bannerImage",width:350,height:280,className:"ms-4 mt-2"})}),(0,g.jsxs)(i.b7,{md:6,children:[(0,g.jsx)(i.b7,{md:12,children:(0,g.jsxs)(i.b7,{md:12,className:"p-0 ",children:[(0,g.jsx)("label",{className:"",htmlFor:"validationServer01",children:"Upload Mobile Banner Image"}),(0,g.jsx)(i.jO,{type:"file",accept:".png, .jpg, .jpeg",name:"bannerImages",onBlur:w,onChange:function(e){D(URL.createObjectURL(e.target.files[0])),B("bannerImages",e.currentTarget.files[0])}})," ",(0,g.jsx)("div",{className:"error-container",children:I.bannerImages&&T.bannerImages?(0,g.jsx)("span",{className:"validtion-error",children:T.bannerImages}):null})]})}),(0,g.jsxs)(i.b7,{md:12,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Name",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"text",name:"name",maxLength:70,value:R.name,onBlur:w,onChange:C})," ",(0,g.jsx)("div",{className:"error-container",children:I.name&&T.name?(0,g.jsx)("span",{className:"validtion-error",children:T.name}):null})]}),(0,g.jsxs)(i.b7,{md:12,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Start Date",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"date",id:"start-date",value:p||R.startDate,onChange:function(e){q(e.target.value),B("startDate",e.target.value)},min:function(){var e=new Date,r=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+r}()})," ",(0,g.jsx)("div",{className:"error-container",children:I.startDate&&T.startDate?(0,g.jsx)("span",{className:"validtion-error",children:T.startDate}):null})]}),(0,g.jsxs)(i.b7,{md:12,className:"mt-2",children:[(0,g.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["End Date",(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)(i.jO,{type:"date",id:"end-date",value:y||R.endDate,onChange:function(e){v(e.target.value),B("endDate",e.target.value)},min:p})," ",(0,g.jsx)("div",{className:"error-container",children:I.endDate&&T.endDate?(0,g.jsx)("span",{className:"validtion-error",children:T.endDate}):null})]})]}),(0,g.jsx)(i.b7,{md:12,className:"d-flex justify-content-center",children:(0,g.jsx)(i.u5,{type:"submit",color:"info",className:"w-25 mt-3 text-white",children:"Update"})})]})})})]})},y=function(){var e=(0,u.v9)((function(e){return e.mobileBanner})),r=e.mobileBannerList,a=e.isLoader,c=(0,u.I0)();(0,t.useEffect)((function(){c((0,m.v4)())}),[]);var o=(0,t.useMemo)((function(){return[{Header:"Image",disableSortBy:!0,accessor:function(e){return(0,g.jsx)("img",{src:"https://delivery-app.softprodigyphp.in/upload/".concat(e.bannerImages[0].filename),alt:"bannerImg",width:200,height:120,className:"mobileBannerImage"})}},{Header:"Name",accessor:"name"},{Header:"Duration",accessor:function(e){return(0,g.jsx)(g.Fragment,{children:"Default"===e.name?null:(0,g.jsxs)("span",{children:[f()(e.startDate).local().format("DD-MM-YYYY")," -"," ",f()(e.endDate).local().format("DD-MM-YYYY")]})})}},{Header:"Status",disableSortBy:!0,accessor:function(e){return(0,g.jsx)(g.Fragment,{children:"Default"===e.name?null:(0,g.jsx)("span",{children:(0,g.jsx)(n.gbA,{className:!0===e.status?"driver-online":"driver-offline"})})})}},{Header:"Action",disableSortBy:!0,accessor:function(e){return(0,g.jsx)(g.Fragment,{children:"Default"===e.name?null:(0,g.jsxs)(i.KB,{className:"d-flex justify-content-start align-items-center ps-0 gap-2",children:[(0,g.jsx)(n.fmQ,{className:"cursor",title:"Update Banner",onClick:function(){return function(e){c((0,m.sw)()),c((0,m.fL)(e)),c((0,m.Fb)(!1))}(e)}}),(0,g.jsx)(n.Xm5,{className:"cursor",title:"Delete Banner",onClick:function(){return r=e.id,c((0,m.Q)()),void c((0,m.Nr)(r));var r}})]})})}}]}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.xH,{className:"mb-4",children:[a?(0,g.jsx)(s.Z,{color:"primary",className:"modal-spinner"}):null,(0,g.jsxs)(i.sl,{children:[(0,g.jsx)(i.KB,{className:"d-flex justify-content-end gap-3 mb-4",children:(0,g.jsxs)(i.u5,{className:"button-size d-flex justify-content-center align-items-center text-white",color:"info",onClick:function(){return c((0,m.$e)()),c((0,m.Fb)(!0)),void c((0,m.fL)(null))},children:[(0,g.jsx)(d.Y_C,{className:"me-1 button-icon"}),"Add"]})}),(0,g.jsx)(i.xH,{className:"mt-3",children:(0,g.jsx)(l.Z,{data:(null===r||void 0===r?void 0:r.allBanners)||[],columns:o})})]})]}),(0,g.jsx)(x,{}),(0,g.jsx)(j,{}),(0,g.jsx)(p,{})]})}}}]);
//# sourceMappingURL=8340.0b566206.chunk.js.map