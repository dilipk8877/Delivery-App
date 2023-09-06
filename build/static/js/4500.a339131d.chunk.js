"use strict";(self.webpackChunkDelivery_App=self.webpackChunkDelivery_App||[]).push([[4500],{94500:function(e,i,r){r.r(i),r.d(i,{default:function(){return k}});var a=r(70885),s=r(72791),t=r(78983),n=r(16856),l=r(17425),c=r(58617),d=r(56355),m=r(36036),o=r(16871),u=r(43504),h=r(39126),x=r(7692),p=r(59434),b=r(39499),v=r(4942),j=r(70828),f=r(55705),g=(r(76863),r(48639)),y=r(79172),q=r(86986),N=r(17209),_=r(63700),Z=r(46966),S=r(80184),w=function(){var e=(0,p.v9)((function(e){return e.pricingRule})).vehicleType,i=(0,p.v9)((function(e){return e.agent})),r=i.agentAddModal,n=i.isLoader,l=i.currentSTs,c=(0,p.v9)((function(e){return e.team.teamsList})),d=(0,s.useState)(),m=(0,a.Z)(d,2),u=(m[0],m[1]),h=(0,s.useState)(null),x=(0,a.Z)(h,2),w=x[0],P=x[1],D=(0,p.I0)(),A=null===w||void 0===w?void 0:w.value,F=[],k=null===c||void 0===c?void 0:c.teamList;null===k||void 0===k||k.forEach((function(e){F.push((0,v.Z)({value:"".concat(e.team_name),label:"".concat(e.team_name)},"value",e.id))}));var C=[],R=null===e||void 0===e?void 0:e.theVehicleType;null===R||void 0===R||R.forEach((function(e){C.push({value:"".concat(e.driverVehicleType),label:"".concat(e.driverVehicleType)})})),(0,s.useEffect)((function(){D((0,y.LK)()),D((0,q.wc)())}),[]);var T=(0,o.TH)().pathname;(0,s.useEffect)((function(){var e=null===T||void 0===T?void 0:T.split("/");"active"===e[2]?u("isActive=1"):"awaiting"===e[2]?u("isAwaiting=0"):"blocked"===e[1]&&u("isBlocked=1")}),[T]);var B=(0,f.TA)({initialValues:{teamId:A,type:"",first_name:"",last_name:"",email:"",mobile:"",website:"",dob:"",plate_number:"",vehicle_type:"",delivery_area:""},enableReinitialize:!0,validationSchema:Z.K7,onSubmit:function(e,i){D((0,b.TF)({data:e,action:i,status:l}))}}),I=B.values,L=B.handleBlur,E=B.handleChange,O=B.touched,K=B.errors,z=B.handleSubmit,M=B.setFieldValue,V=B.resetForm,$=new Date,Y=new Date($.getFullYear()-18,$.getMonth(),$.getDate()).toISOString().slice(0,10),W=new Date($.getFullYear()-100,$.getMonth(),$.getDate()).toISOString().slice(0,10);return(0,S.jsxs)(t.Tk,{size:"lg",visible:r,children:[n?(0,S.jsx)(N.Z,{color:"primary",className:"modal-spinner"}):null,(0,S.jsxs)(t.PO,{className:"rounded-top",children:[(0,S.jsx)(t.fl,{children:"Add Agents"}),(0,S.jsx)(j.sQZ,{onClick:function(){D((0,b.aM)()),V()},className:"text-danger cursor fs-5 me-2"})]}),(0,S.jsx)(t.sD,{className:"d-flex w-100",children:(0,S.jsxs)(t.lx,{className:"row g-3",onSubmit:z,children:[(0,S.jsxs)(t.b7,{className:"me-4",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["Select Team",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(g.ZP,{className:"assignDriver-dropdown",classNamePrefix:"Select",isClearable:!0,name:"color",onChange:P,options:F}),(0,S.jsx)("div",{className:"error-container",children:O.teamId&&K.teamId?(0,S.jsx)("span",{className:"validtion-error",children:K.teamId}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer01",children:["First Name",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer01",name:"first_name",maxLength:30,value:I.first_name,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.first_name&&K.first_name?(0,S.jsx)("span",{className:"validtion-error",children:K.first_name}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer02",children:["Last Name",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer02",name:"last_name",maxLength:30,value:I.last_name,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.last_name&&K.last_name?(0,S.jsx)("span",{className:"validtion-error",children:K.last_name}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer02",children:["Email",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer02",name:"email",maxLength:30,value:I.email,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.email&&K.email?(0,S.jsx)("span",{className:"validtion-error",children:K.email}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer03",children:["Phone Number",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(_.ZP,{international:!0,defaultCountry:"IN",id:"validationServer03",name:"mobile",value:I.mobile,onChange:function(e){return M("mobile",e)},onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.mobile&&K.mobile?(0,S.jsx)("span",{className:"validtion-error",children:K.mobile}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Website",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer05",name:"website",maxLength:70,value:I.website,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.website&&K.website?(0,S.jsx)("span",{className:"validtion-error",children:K.website}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Date of Birth",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"date",id:"validationServer05",name:"dob",value:I.dob,max:Y,min:W,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.dob&&K.dob?(0,S.jsx)("span",{className:"validtion-error",children:K.dob}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Vehicle Reg. number",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer05",name:"plate_number",maxLength:20,value:I.plate_number,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.plate_number&&K.plate_number?(0,S.jsx)("span",{className:"validtion-error",children:K.plate_number}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Delivery Area",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(t.jO,{type:"text",id:"validationServer05",name:"delivery_area",maxLength:150,value:I.delivery_area,onChange:E,onBlur:L}),(0,S.jsx)("div",{className:"error-container",children:O.delivery_area&&K.delivery_area?(0,S.jsx)("span",{className:"validtion-error",children:K.delivery_area}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Agent Type",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsxs)(t.LX,{feedbackInvalid:"Example invalid select feedback",onChange:E,value:I.type,onBlur:L,name:"type",children:[(0,S.jsx)("option",{children:"Select Agent Type"}),(0,S.jsx)("option",{value:"Freelancer",children:"Freelancer"}),(0,S.jsx)("option",{value:"Employee",children:"Employee"})]}),(0,S.jsx)("div",{className:"error-container",children:O.type&&K.type?(0,S.jsx)("span",{className:"validtion-error",children:K.type}):null})]}),(0,S.jsxs)(t.b7,{md:6,className:"position-relative",children:[(0,S.jsxs)("label",{className:"",htmlFor:"validationServer05",children:["Vehicle Type",(0,S.jsx)("span",{className:"text-danger",children:"*"})]}),(0,S.jsx)(g.ZP,{options:C,name:"vehicle_type",value:C.find((function(e){return e.value===I.vehicle_type})),onChange:function(e){M("vehicle_type",e.value)}}),(0,S.jsx)("div",{className:"error-container",children:O.vehicle_type&&K.vehicle_type?(0,S.jsx)("span",{className:"validtion-error",children:K.vehicle_type}):null})]}),(0,S.jsx)(t.b7,{sm:12,className:"d-flex justify-content-center",children:(0,S.jsx)(t.u5,{type:"submit",color:"info",className:"w-25 text-white",children:"Submit"})})]})})]})},P=function(){var e=(0,p.I0)(),i=(0,p.v9)((function(e){return e.agent})),r=i.confirmMessage,a=i.deleteId,s=i.currentSTs,n=function(){e((0,b.Dt)()),e((0,b.De)(null))};return(0,S.jsxs)(t.Tk,{alignment:"center",visible:r,children:[(0,S.jsxs)(t.PO,{className:"rounded-top",children:[(0,S.jsx)(t.fl,{}),(0,S.jsx)(j.sQZ,{className:"text-danger cursor fs-5 me-2",onClick:n})]}),(0,S.jsx)(t.sD,{className:"confirmCardText fs-6 w-100 d-flex justify-content-center",children:"Do you really want to delete this record?"}),(0,S.jsxs)(t.Ym,{children:[(0,S.jsx)(t.u5,{color:"secondary",onClick:n,children:"No"}),(0,S.jsx)(t.u5,{color:"info",className:"text-white",type:"submit",onClick:function(){e((0,b.k5)({deleteId:a,currentSTs:s})),e((0,b.Dt)())},children:"Yes"})]})]})},D=r(43774),A=function(){var e=(0,p.I0)(),i=(0,p.v9)((function(e){return e.agent})),r=i.assignDriverModel,n=i.driverId,l=(0,p.v9)((function(e){return e.team.teamsList})),c=(0,s.useState)(null),d=(0,a.Z)(c,2),m=d[0],o=d[1],u=null===m||void 0===m?void 0:m.value,h=[],x=null===l||void 0===l?void 0:l.teamList;null===x||void 0===x||x.forEach((function(e){h.push((0,v.Z)({value:"".concat(e.team_name),label:"".concat(e.team_name)},"value",e.id))})),(0,s.useEffect)((function(){e((0,D.mu)())}),[]);var f=function(){e((0,b.ec)())};return(0,S.jsxs)(t.Tk,{alignment:"center",visible:r,children:[(0,S.jsxs)(t.PO,{className:"rounded-top",children:[(0,S.jsx)(t.fl,{children:"Select Team"}),(0,S.jsx)(j.sQZ,{className:"text-danger cursor fs-5 me-2",onClick:f})]}),(0,S.jsx)(t.sD,{className:"confirmCardText fs-6 w-100 d-flex justify-content-center",children:(0,S.jsx)(g.ZP,{className:"assignDriver-dropdown",classNamePrefix:"Select",isClearable:!0,name:"color",onChange:o,options:h})}),(0,S.jsxs)(t.Ym,{children:[(0,S.jsx)(t.u5,{color:"secondary",onClick:f,children:"No"}),(0,S.jsx)(t.u5,{color:"info",className:"text-white",type:"submit",onClick:function(){e((0,b.cF)({driverId:n,teamId:u})),u&&e((0,b.ec)())},children:"Assign"})]})]})},F=r(75985),k=function(){var e,i=(0,p.v9)((function(e){return e.agent})),r=i.agentList,v=i.isLoader,j=i.currentSTs,f=i.currentPage,g=(0,s.useState)(""),y=(0,a.Z)(g,2),q=y[0],_=y[1],Z=(0,p.I0)(),D=(0,o.TH)().pathname;return(0,s.useEffect)((function(){_("")}),[D]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(t.xH,{className:"mb-4",children:[v?(0,S.jsx)(N.Z,{className:"modal-spinner"}):null,(0,S.jsxs)(t.sl,{children:[(0,S.jsxs)(t.KB,{className:"d-flex justify-content-end gap-3 mb-4",children:[(null===r||void 0===r||null===(e=r.agents)||void 0===e?void 0:e.length)>0?(0,S.jsx)(t.u5,{color:"info",className:"button-size ms-3 d-flex justify-content-center align-items-center",children:(0,S.jsxs)(t.h7,{className:"text-decoration-none text-white",href:"https://delivery-app.softprodigyphp.in/export_agent/".concat(f),download:"filename.csv",children:[(0,S.jsx)(x.MUM,{className:"me-1 button-icon"}),"Export"]})}):(0,S.jsx)(t.u5,{color:"info",className:"button-size ms-3 d-flex justify-content-center align-items-center",onClick:function(){return F.Am.error("No Agent found in ".concat(f," "))},children:(0,S.jsxs)(t.h7,{className:"text-decoration-none text-white",children:[(0,S.jsx)(x.MUM,{className:"me-1 button-icon"}),"Export"]})}),(0,S.jsxs)(t.u5,{className:"button-size text-white d-flex justify-content-center align-items-center",color:"info",onClick:function(){return Z((0,b.i8)())},children:[(0,S.jsx)(h.Y_C,{className:"me-1 button-icon"}),"Add"]})]}),(0,S.jsxs)(t.KB,{className:"d-flex justify-content-between align-items-center w-100 text-center fs-6",children:[(0,S.jsx)(t.KB,{className:"agent-conatainer ",children:r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(n.XVK,{className:"text-dark fs-5 me-2"}),null===r||void 0===r?void 0:r.totalAgents]}),(0,S.jsx)("p",{children:"Total Agents"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(n.XVK,{className:"text-dark fs-5 me-2"}),"0"]}),(0,S.jsx)("p",{children:"Total Agents"})]})}),(0,S.jsx)(t.KB,{className:"agent-conatainer ",children:r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(l.un,{className:"text-dark fs-5 me-2"}),null===r||void 0===r?void 0:r.freelancer]}),(0,S.jsx)("p",{children:"Freelancer"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(l.un,{className:"text-dark fs-5 me-2"}),"0"]}),(0,S.jsx)("p",{children:"Freelancer"})]})}),(0,S.jsx)(t.KB,{className:"agent-conatainer ",children:r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(c._K$,{className:"text-dark fs-5 me-2"}),null===r||void 0===r?void 0:r.employees]}),(0,S.jsx)("p",{children:"Employees"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(c._K$,{className:"text-dark fs-5 me-2"}),"0"]}),(0,S.jsx)("p",{children:"Employees"})]})}),(0,S.jsx)(t.KB,{className:"agent-conatainer ",children:r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(m.lKj,{className:"text-dark fs-5 me-2"}),null===r||void 0===r?void 0:r.approvedAgents]}),(0,S.jsx)("p",{children:"Approved Agents"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(m.lKj,{className:"text-dark fs-5 me-2"}),"0"]}),(0,S.jsx)("p",{children:"Approved Agents"})]})}),(0,S.jsx)(t.KB,{className:"agent-conatainer ",children:r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(d.m3W,{className:"text-dark fs-5 me-2"}),null===r||void 0===r?void 0:r.unApprovedAgents]}),(0,S.jsx)("p",{children:"Unapproved Agents"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{className:"text-dark fs-6 ms-1 d-flex align-items-center justify-content-center",children:[(0,S.jsx)(d.m3W,{className:"text-dark fs-5 me-2"}),"0"]}),(0,S.jsx)("p",{children:"Unapproved Agents"})]})})]}),(0,S.jsxs)(t.KB,{className:"d-flex mt-5 justify-content-between align-items-center",children:[(0,S.jsxs)(t.KB,{children:[(0,S.jsx)(u.OL,{className:function(e){return e.isActive?"activeLink  me-4 fs-6 text-decoration-none text-black font-weight-bold":"normalLink  me-4 fs-6"},to:"/dispatcher/agent/active",children:"Active"}),(0,S.jsx)(u.OL,{className:function(e){return e.isActive?"activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold":"normalLink ms-4 fs-6"},to:"/dispatcher/agent/awaiting",children:"Awaiting Approval"}),(0,S.jsx)(u.OL,{className:function(e){return e.isActive?"activeLink ms-4 me-4 fs-6 text-decoration-none text-black font-weight-bold":"normalLink ms-4 me-4 fs-6"},to:"/dispatcher/agent/blocked",children:"Blocked"})]}),(0,S.jsx)(t.jO,{type:"search",className:"w-50 mb-3 border border-dark",placeholder:"Search by Agent Name...",maxLength:100,value:q,onChange:function(e){Z((0,b.QD)({currentSTs:j,search:e.target.value.trim()})),_(e.target.value)}})]}),(0,S.jsx)(o.j3,{})]}),(0,S.jsx)(w,{}),(0,S.jsx)(P,{}),(0,S.jsx)(A,{})]})})}},46966:function(e,i,r){r.d(i,{ld:function(){return b},M3:function(){return u},tl:function(){return h},BT:function(){return f},Dl:function(){return y},r7:function(){return x},fN:function(){return Z},G3:function(){return p},K7:function(){return m},b6:function(){return o},Cp:function(){return j},X8:function(){return g},pj:function(){return N},$2:function(){return _},Sn:function(){return v},tw:function(){return q}});var a=5e6,s=r(76863),t=/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,n=["","image/jpg","image/jpeg","image/png"],l=["text/csv"],c=/^[a-zA-Z]*$/,d=/^[a-zA-Z0-9_]*$/,m=s.Ry({teamId:s.Z_().required("Please Select Team Id, It is required"),type:s.Z_().required("Please Select Agent Type, It is required"),first_name:s.Z_().required("First Name is required").trim("First Name is required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Last Name is required").trim("Last Name is required").matches(c,"Only alphabets are allowed"),email:s.Z_().email("Email must be a valid email").required("Email is required"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),website:s.Z_().required("Website is required").trim("Website is required").matches(t,"Enter correct website url!"),dob:s.Z_().required("Please Select DOB, It is required"),plate_number:s.Z_().required("Vehicle Number is required").trim("Vehicle Number is required"),vehicle_type:s.Z_().required("Please Select Vehicle Type, It is required"),delivery_area:s.Z_().required("Delievery Area is required").trim("Delievery Area is required")}),o=s.Ry({maxRadius:s.Z_().required("Max Raduis is Required")}),u=s.Ry({geofencing_name:s.Z_().required("Geo Fence Name is Required"),location:s.Z_().required("Location is Required, and Assign Area to Team"),teamName:s.Z_().required("Select Team Name, It is Required"),coordinates:s.IX().required("Assign Area to Team")}),h=s.Ry({first_name:s.Z_().required("First Name is required").trim("First Name is required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Last Name is required").trim("Last Name is required").matches(c,"Only alphabets are allowed"),email:s.Z_().email("Email must be a valid email").required("Email is required").trim("Email is required"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),status:s.Z_().required("Please Select Status, It's required")}),x=s.Ry({name:s.Z_().required("Name is Required").trim("Name is Required"),geoFenceId:s.Z_().required("Please Select Geo Fence").nullable(),teamId:s.Z_().required("Please Select Team Name").nullable(),agentVehicle:s.Z_().required("Please Select Vehicle Type").nullable(),basePrice:s.Z_().required("Base Price is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Price must be only number").min(0,"Base Price must be exactly 0 digits").max(4,"Base Price must be exactly 4 digits"),baseDuration:s.Z_().required("Base Duration is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Duration must be only number").min(0,"Base Duration must be exactly 0 digits").max(4,"Base Duration must be exactly 4 digits"),baseDistance:s.Z_().required("Base Distance is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Base Distance must be only number").min(0,"Base Distance must be exactly 0 digits").max(4,"Base Distance must be exactly 4 digits"),DurationPrice:s.Z_().required("Duration Price is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Duration Price must be only number").min(0,"Duration Price must be exactly 0 digits").max(4,"Duration Price must be exactly 4 digits"),DistanceFee:s.Z_().required("Distance Fee is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Distance Fee must be only number").min(0,"Distance Fee must be exactly 0 digits").max(4,"Distance Fee must be exactly 4 digits"),agentCommPercnt:s.Z_().required("Agent Commission Percentage is Required").test("Is positive?","The number must be greater than 0!",(function(e){return e>0})).matches(/^[0-9]+$/,"Agent Commission Percentage must be only number").min(0,"Agent Commission Percentage must be exactly 0 digits").max(4,"Agent Commission Percentage must be exactly 4 digits")}),p=s.Ry({team_name:s.Z_().required("Team Name is required").trim("Team Name is required"),team_tag:s.Z_().required("Team tag is required").trim("Team tag is required")}),b=s.Ry({first_name:s.Z_().required("First Name is required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Last Name is required").matches(c,"Only alphabets are allowed"),email:s.Z_().email("Email must be a valid email").required("Email is required"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number Must be exactly 10 digits").max(13,"Phone number Must be exactly 10 digits")}),v=s.Ry({first_name:s.Z_().required("First Name is required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Last Name is required").matches(c,"Only alphabets are allowed"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits").required("Phone number is required")}),j=s.Ry({file:s.nK().required(" File is required").test("type","You can upload only CSV file",(function(e){return e&&l.includes(e.type)}))}),f=s.Ry({first_name:s.Z_().required("First Name is required").trim("First Name is required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Last Name is required").trim("Last Name is required").matches(c,"Only alphabets are allowed"),email:s.Z_().email("Email must be a valid email").required("Email is required"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),pincode:s.Z_().required("Pincode is required").matches(/^[0-9]+$/,"Pincode must be only number").min(6,"Pincode must be exactly 6 digits").max(6,"Pincode must be exactly 6 digits"),address:s.Z_().required("Address is required").trim("Address is required"),website:s.Z_().required("Website is required").trim("Website is required").matches(t,"Enter correct website url!"),state:s.Z_().required("State is required"),district:s.Z_().required("District is required"),country:s.Z_().required("Country is required")}),g=s.Ry({file:s.nK().required("File is required").test("type","You can upload only CSV file",(function(e){return e&&l.includes(e.type)}))}),y=s.Ry({name:s.Z_().required("Banner Name is Required").trim("Banner Name is Required"),startDate:s.Z_().required("Start Date is Required"),endDate:s.Z_().required("End Date is Required"),bannerImages:s.nK().required(" File is required").test("file_size","File Size is too large",(function(e){return e&&e.size<=a})).test("fileFormat","You can upload only jpg,png,jpeg file",(function(e){return e&&n.includes(e.type)}))}),q=s.Ry({name:s.Z_().required("Banner Name is Required").trim("Banner Name is Required"),startDate:s.Z_().required("Start Date is Required"),endDate:s.Z_().required("End Date is Required")}),N=s.Ry({email:s.Z_().required("Email is required"),password:s.Z_().required("Password is required")}),_=s.Ry({profileImage:s.nK().test("file_size","File Size is too large",(function(e){return!e||e.size<=a})).test("fileType","You can upload only jpg,png,jpeg file",(function(e){return!e||["image/jpg","image/jpeg","image/png"].includes(e.type)})),first_name:s.Z_().required("Name is Required").matches(c,"Only alphabets are allowed"),last_name:s.Z_().required("Name is Required").matches(c,"Only alphabets are allowed"),mobile:s.Z_().required("Phone number is required").min(13,"Phone number must be exactly 10 digits").max(13,"Phone number must be exactly 10 digits"),company_address:s.Z_().required("Company Address is Required").trim("Company Address is Required"),company_name:s.Z_().required("Company Name is Required").trim("Company Name is Required").matches(c,"Only alphabets are allowed"),short_code:s.Z_().required("Short Code is Required").min(6,"Must be exactly 6 digits").max(6,"Must be exactly 6 digits").matches(d,"Special Characters not allowed").trim("Short Code is Required"),country:s.Z_().required("Country is Required").trim("Country is Required").matches(c,"Only alphabets are allowed")}),Z=s.Ry({Title:s.Z_().required("Title is required").matches(d,"Special Characters not allowed"),Description:s.Z_().required("Short Description is required"),promo_code:s.Z_().required("Promocode is required").matches(d,"Special Characters not allowed"),Promo_Type:s.Z_().required("Promo type is required"),discount:s.Z_().required("Discount is required").matches(/^[0-9]+$/,"Must be only number").max(2,"Amount should be less than 100"),ExpiryDate:s.Z_().required("Expire Date is required")})}}]);
//# sourceMappingURL=4500.a339131d.chunk.js.map