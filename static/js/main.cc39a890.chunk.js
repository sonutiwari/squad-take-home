(this["webpackJsonpsquad-assignment"]=this["webpackJsonpsquad-assignment"]||[]).push([[0],{42:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),i=(a(47),a(48),a(33)),c=a(19),s=a(20),u=a(25),d=a(24),m=a(10),h=a(6),f=(a(49),{display:"flex",justifyContent:"center",transition:"all 0.1s",cursor:"pointer",width:"100%",padding:"1rem",fontWeight:500,fontSize:"1.1rem"}),p=function(e){return r.a.createElement("button",{"data-testid":e["data-testid"],style:Object(h.a)(Object(h.a)({},f),e.style),className:"".concat(function(){var t="orangeTheme";return e.solid&&(t+=" solid"),t}()," mb-5"),onClick:e.click},e.children)},E=a(61),b=a(60),g=a(21),y=a(62),v=a(59),O=a(36),j=a(35),C=a(34),w=a(27),k=a(37);function x(e){var t=e.as,a=(e.title,Object(w.a)(e,["as","title"]));return r.a.createElement(C.a,{as:t},r.a.createElement(j.a,{htmlFor:e.id},e.title,e.required?r.a.createElement("span",{class:"text-danger"},"*"):""),r.a.createElement(k.a,Object.assign({},a,{placeholder:N(a.name)})))}var N=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")};function S(e){var t=e.title,a=e.as,n=e.id,l=e.options,o=Object(w.a)(e,["title","as","id","options"]);return r.a.createElement(C.a,{as:a},r.a.createElement(y.a.Label,{htmlFor:n},t,e.required?"*":""),r.a.createElement(k.a,Object.assign({as:"select"},o),l.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))}function P(e){return r.a.createElement(y.a.Check,Object.assign({inline:!0},e,{type:"checkbox"}))}var T=function(e){var t="";for(var a in e)e[a]&&(t+="".concat(a," "));return t},R={email:"",name:"",phoneno:"",noOfLeads:0,totalLeads:0,crm:"",noOfAgents:0},L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).leadSources={zillow:!1,realtor:!1,ylopo:!1,others:!1},n.howTheyKnowUs={google:!1,facebook:!1,email:!1,friends:!1,realClosers:!1},n.handleLeadSourceChange=function(e){n.leadSources[e]=!n.leadSources[e]},n.handleHowTheyKnowUsCB=function(e){n.howTheyKnowUs[e]=!n.howTheyKnowUs[e]},n.handleInputChnage=function(e){n.setState(Object(h.a)(Object(h.a)({},n.state),{},Object(g.a)({},e.target.name,e.target.value)))},n.handleFormSubmit=function(e){e.preventDefault();for(var t="",a=0,r=Object.entries(n.state);a<r.length;a++){var l=Object(m.a)(r[a],2),o=l[0],i=l[1];t+="".concat(o,": ").concat(i,"\n")}t+="Lead Sources: "+T(n.leadSources)+"\n",t+="How they know about us: "+T(n.howTheyKnowUs),alert(t),n.setState(Object(h.a)({},R)),n.props.onHide()},n.state=R,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{onSubmit:this.handleFormSubmit},r.a.createElement(v.a,null,r.a.createElement("h5",null,"Plan Selected: "),r.a.createElement("p",{className:"ml-1"},this.props.planName)),r.a.createElement(x,{title:"Name",type:"text",onChange:this.handleInputChnage,required:!0,name:"name",id:"name",value:this.state.name}),r.a.createElement(y.a.Row,null,r.a.createElement(x,{title:"E-mail Address",type:"email",value:this.state.email,name:"email",id:"email",onChange:this.handleInputChnage,pattern:"(.+)@(.+){2,}\\.(.+){2,}",required:!0,as:O.a}),r.a.createElement(x,{type:"tel",title:"Phone No.",value:this.state.phoneno,name:"phoneno",id:"phone",onChange:this.handleInputChnage,pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",required:!0,as:O.a})),r.a.createElement(y.a.Row,null,r.a.createElement(S,{value:this.state.noOfLeads,name:"noOfLeads",id:"noOfLeads",onChange:this.handleInputChnage,options:["-",10,20,30,40,50],as:O.a,title:"Number of leads you generate in a month"}),r.a.createElement(S,{id:"totalLeads",name:"totalLeads",value:this.state.totalLeads,onChange:this.handleInputChnage,title:"Total leads in your CRM",options:["-","0-10","10-20","20-30","30-40"],as:O.a})),r.a.createElement(y.a.Row,null,r.a.createElement(S,{title:"Which CRM Do you use?",as:O.a,id:"crm",name:"crm",value:this.state.crm,onChange:this.handleInputChnage,options:["-","Squad","Insigthly","Salesforce"]}),r.a.createElement(S,{title:"No. of Agents",as:O.a,id:"noOfAgents",name:"noOfAgents",value:this.state.noOfAgents,onChange:this.handleInputChnage,options:["-",1,2,3,4,5]})),r.a.createElement(y.a.Row,null,r.a.createElement(j.a,null,"What are your biggest lead sources?")),r.a.createElement(y.a.Row,null,r.a.createElement(C.a,null,[{zillow:"Zillow"},{realtor:"Realtor"},{ylopo:"Ylopo"},{others:"Others"}].map((function(t,a){var n=Object.keys(t),l=Object(m.a)(n,1)[0];return r.a.createElement(P,{key:a,id:l,label:t[l],onChange:function(){return e.handleLeadSourceChange(t)}})})))),r.a.createElement(y.a.Row,null,r.a.createElement(j.a,null,"How did you hear about us")),r.a.createElement(y.a.Row,null,[{google:"Google"},{facebook:"Facebook"},{email:"Email"},{friends:"Friends"},{realClosers:"Real Closers"}].map((function(t,a){var n=Object.keys(t),l=Object(m.a)(n,1)[0];return r.a.createElement(P,{key:a,id:l,label:t[l],onChange:function(){return e.handleHowTheyKnowUsCB(t)}})}))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Control,{type:"submit",className:"btn mt-5",style:{width:"fit-content",margin:"auto",backgroundColor:"#ef5a35",color:"#fff"}})))}}]),a}(n.Component);a(53);function F(e){return r.a.createElement(E.a,Object.assign({},e,{"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",keyboard:!1,size:"lg"}),r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,{id:"contained-modal-title-vcenter",className:"text-center"},r.a.createElement("h4",null,"Get started with SquadVoice"))),r.a.createElement(E.a.Body,{className:"show-grid"},r.a.createElement(b.a,null,r.a.createElement(L,e))))}var I={backgroundColor:"#5A6F90",padding:"1rem",color:"white",textTransform:"capitalize",marginBottom:"0.5rem",display:"flex",justifyContent:"center"},A=Object(h.a)({},I),q={fontSize:"2rem",fontWeight:"600",letterSpacing:"1px"},D={fontSize:"1.2rem",fontWeight:"500",marginTop:"-5px",marginBottom:"0.5rem"},W={fontSize:"0.9rem",margin:"15px 0 15px 0"},B={borderBottom:"2px dashed lightgrey",margin:"0 5px 0 5px"},H={backgroundColor:"rgb(222, 99, 67)",color:"#FFF",display:"flex",justifyContent:"center",padding:"1rem"},M={FILTER_PLAN_NAME:"Qualified 60",ENTERPRISE:"Enterprise",SELECTED_INDEX:2},z=(a(54),{data:{planName:"",qualifiedLeadsPerMonth:0,pricePerLiveTransfer:"",totalQualifiedLeadPrice:"",totalPlatformPrice:"",finalPackagePrice:"",popular:!1}}),U=function(e){var t=Object(h.a)(Object(h.a)({},z),e),a=Object(n.useState)(!1),l=Object(m.a)(a,2),o=l[0],i=l[1],c=t.style,s=t.data.planName,u=t.data.popular||s===M.ENTERPRISE?"rgb(242, 242, 242":"fff";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:c,className:"col-xs-12 col-md-3"},r.a.createElement(F,{planName:s,show:o,onClose:function(){return i(!1)}}),r.a.createElement("div",{style:function(e){var t=Object(h.a)({},H);return e||(t=Object(h.a)(Object(h.a)({},t),{},{visibility:"hidden"})),t}(t.data.popular)},"Most Popular!"),r.a.createElement("div",{style:I,"data-testid":"plan-name"},s),r.a.createElement("div",{className:"body-container",style:{backgroundColor:u}},r.a.createElement("div",{style:{display:s===M.ENTERPRISE?"block":"none",height:"7em"}},r.a.createElement("p",{className:"enterprise-box text-center",style:{backgroundColor:u}},"Want more than 80 qualified leads each month?")),r.a.createElement("div",{className:"container",style:{visibility:s===M.ENTERPRISE?"hidden":"visible",backgroundColor:u}},r.a.createElement("center",null,r.a.createElement("div",{style:Object(h.a)({},q),"data-testid":"price-per-live-transfer"},t.data.pricePerLiveTransfer),r.a.createElement("div",{style:W},"Per Qualified lead"),r.a.createElement("div",{style:B}),r.a.createElement("div",{style:W}," Qualified Leads Per Month"),r.a.createElement("div",{style:D,"data-testid":"qualified-leads-per-month"},t.data.qualifiedLeadsPerMonth),r.a.createElement("div",{style:B}),r.a.createElement("div",{style:W},"Platform Fee Per Month"),r.a.createElement("div",{style:Object(h.a)(Object(h.a)({},D),{},{marginBottom:"15px"}),"data-testid":"total-platform-price"},t.data.totalPlatformPrice),r.a.createElement("div",{style:Object(h.a)(Object(h.a)(Object(h.a)({},A),D),{},{fontWeight:600,marginLeft:"-15px",marginRight:"-15px"}),"data-testid":"final-package-price"},t.data.finalPackagePrice,"/mo"))),r.a.createElement(p,{solid:!!t.data.popular,click:function(){return i(!0)}},s===M.ENTERPRISE?"Get In Touch":"Start Your Trial"))),r.a.createElement(F,{planName:s,show:o,onHide:function(){return i(!1)}}))},K={padding:"1rem",fontWeight:600,flex:1,display:"flex",justifyContent:"center",cursor:"pointer"},_={borderRight:"2px solid #D1D1D1"},Q={backgroundColor:"#5A6F90",color:"#FFF"},G={display:"flex",border:"1px solid transparent",borderRadius:"0.5rem",backgroundColor:"#F8F8F8",flexWrap:"wrap",marginBottom:"2rem",overflow:"hidden",margin:"80px 10px"},J={display:"flex",flexWrap:"wrap"},X=(a(55),function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(e.children),c=Object(m.a)(i,2),s=c[0],u=c[1];Object(n.useEffect)((function(){!function(e){var t=e.map((function(e){return r.a.cloneElement(e,{insideTabs:!0})}));u(t)}(e.children);var t=function(e){return r.a.Children.toArray(e).findIndex((function(e){return e.props.selected}))}(e.children);t>-1&&o(t)}),[e.children]);var d=function(e,t){return l===t?r.a.cloneElement(e,{selected:!0,key:t}):r.a.cloneElement(e,{selected:!1,key:t})},f=function(e,t){var a=Object(h.a)({},K);return t!==e.length-1&&(a=Object(h.a)(Object(h.a)({},a),_)),t===l&&(a=Object(h.a)(Object(h.a)({},a),Q)),a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(h.a)({},G)},s.map((function(e,t){return r.a.createElement("span",{className:"tab",style:f(s,t),key:t,onClick:function(){return o(t)}},e.props.name)}))),function(e){return e.map(d)}(s).map((function(e){return e})))}),Y={name:"",selected:!0,insideTabs:!1},V=function(e){var t=Object(h.a)(Object(h.a)({},Y),e);return r.a.createElement(r.a.Fragment,null,!t.insideTabs&&r.a.createElement("span",null,t.name),r.a.createElement("div",{style:J},t.selected&&t.children))},Z=(a(56),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getTabHeaders=function(){var t,a=new Set,n=Object(i.a)(e.state.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.add(r.averageHomePricePoint)}}catch(l){n.e(l)}finally{n.f()}return Array.from(a)},e.getTabData=function(t){return e.state.data.filter((function(e){return e.averageHomePricePoint===t}))},e.state={data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/sonutiwari/squad-take-home/master/src/mockdata/data.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){var e=this,t=this.getTabHeaders();return r.a.createElement(X,null,t.map((function(a,n){return r.a.createElement(V,{key:n,name:a,selected:n===M.SELECTED_INDEX,className:0===n||n===t.length-1?"rounded-border":""},e.getTabData(a).filter((function(e){return e.planDetails.planName!==M.FILTER_PLAN_NAME})).map((function(e,t){return r.a.createElement(U,{key:t,data:e.planDetails})})),r.a.createElement(U,{data:{planName:"Enterprise"},className:"price-card"}))})))}}]),a}(n.Component));var $=function(){return r.a.createElement("div",{style:{margin:"50px"}},r.a.createElement(Z,{className:"main-box"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.cc39a890.chunk.js.map