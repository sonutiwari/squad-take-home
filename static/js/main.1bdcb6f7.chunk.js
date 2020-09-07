(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),i=(a(46),a(47),a(19)),c=a(20),s=a(25),u=a(21),d=a(26),m=a(10),f=a(7),h=(a(48),{display:"flex",justifyContent:"center",transition:"all 0.1s",cursor:"pointer",width:"100%",padding:"1rem",fontWeight:500,fontSize:"1.1rem"}),p=function(e){return r.a.createElement("button",{"data-testid":e["data-testid"],style:Object(f.a)({},h,e.style),className:"".concat(function(){var t="orangeTheme";return e.solid&&(t+=" solid"),t}()," mb-5"),onClick:e.click},e.children)},E=a(60),g=a(59),b=a(22),y=a(61),v=a(58),w=a(35),O=a(34),j=a(33),C=a(27),k=a(36);function S(e){var t=e.as,a=(e.title,Object(C.a)(e,["as","title"]));return r.a.createElement(j.a,{as:t},r.a.createElement(O.a,{htmlFor:e.id},e.title,e.required?r.a.createElement("span",{class:"text-danger"},"*"):""),r.a.createElement(k.a,Object.assign({},a,{placeholder:x(a.name)})))}var x=function(e){return e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")};function N(e){var t=e.title,a=e.as,n=e.id,o=e.options,l=Object(C.a)(e,["title","as","id","options"]);return r.a.createElement(j.a,{as:a},r.a.createElement(y.a.Label,{htmlFor:n},t,e.required?"*":""),r.a.createElement(k.a,Object.assign({as:"select"},l),o.map(function(e,t){return r.a.createElement("option",{key:t},e)})))}function T(e){return r.a.createElement(y.a.Check,Object.assign({inline:!0},e,{type:"checkbox"}))}var P=function(e){var t="";for(var a in e)e[a]&&(t+="".concat(a," "));return t},R={email:"",name:"",phoneno:"",noOfLeads:0,totalLeads:0,crm:"",noOfAgents:0},L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).leadSources={zillow:!1,realtor:!1,ylopo:!1,others:!1},a.howTheyKnowUs={google:!1,facebook:!1,email:!1,friends:!1,realClosers:!1},a.handleLeadSourceChange=function(e){a.leadSources[e]=!a.leadSources[e]},a.handleHowTheyKnowUsCB=function(e){a.howTheyKnowUs[e]=!a.howTheyKnowUs[e]},a.handleInputChnage=function(e){a.setState(Object(f.a)({},a.state,Object(b.a)({},e.target.name,e.target.value)))},a.handleFormSubmit=function(e){e.preventDefault();for(var t="",n=0,r=Object.entries(a.state);n<r.length;n++){var o=r[n],l=Object(m.a)(o,2),i=l[0],c=l[1];t+="".concat(i,": ").concat(c,"\n")}t+="Lead Sources: "+P(a.leadSources)+"\n",t+="How they know about us: "+P(a.howTheyKnowUs),alert(t),a.setState(Object(f.a)({},R)),a.props.onHide()},a.state=R,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{onSubmit:this.handleFormSubmit},r.a.createElement(v.a,null,r.a.createElement("h5",null,"Plan Selected: "),r.a.createElement("p",{className:"ml-1"},this.props.planName)),r.a.createElement(S,{title:"Name",type:"text",onChange:this.handleInputChnage,required:!0,name:"name",id:"name",value:this.state.name}),r.a.createElement(y.a.Row,null,r.a.createElement(S,{title:"E-mail Address",type:"email",value:this.state.email,name:"email",id:"email",onChange:this.handleInputChnage,pattern:"(.+)@(.+){2,}\\.(.+){2,}",required:!0,as:w.a}),r.a.createElement(S,{type:"tel",title:"Phone No.",value:this.state.phoneno,name:"phoneno",id:"phone",onChange:this.handleInputChnage,pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",required:!0,as:w.a})),r.a.createElement(y.a.Row,null,r.a.createElement(N,{value:this.state.noOfLeads,name:"noOfLeads",id:"noOfLeads",onChange:this.handleInputChnage,options:["-",10,20,30,40,50],as:w.a,title:"Number of leads you generate in a month"}),r.a.createElement(N,{id:"totalLeads",name:"totalLeads",value:this.state.totalLeads,onChange:this.handleInputChnage,title:"Total leads in your CRM",options:["-","0-10","10-20","20-30","30-40"],as:w.a})),r.a.createElement(y.a.Row,null,r.a.createElement(N,{title:"Which CRM Do you use?",as:w.a,id:"crm",name:"crm",value:this.state.crm,onChange:this.handleInputChnage,options:["-","Squad","Insigthly","Salesforce"]}),r.a.createElement(N,{title:"No. of Agents",as:w.a,id:"noOfAgents",name:"noOfAgents",value:this.state.noOfAgents,onChange:this.handleInputChnage,options:["-",1,2,3,4,5]})),r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,"What are your biggest lead sources?")),r.a.createElement(y.a.Row,null,r.a.createElement(j.a,null,[{zillow:"Zillow"},{realtor:"Realtor"},{ylopo:"Ylopo"},{others:"Others"}].map(function(t,a){var n=Object.keys(t),o=Object(m.a)(n,1)[0];return r.a.createElement(T,{key:a,id:o,label:t[o],onChange:function(){return e.handleLeadSourceChange(o)}})}))),r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,"How did you hear about us")),r.a.createElement(y.a.Row,null,[{google:"Google"},{facebook:"Facebook"},{email:"Email"},{friends:"Friends"},{realClosers:"Real Closers"}].map(function(t,a){var n=Object.keys(t),o=Object(m.a)(n,1)[0];return r.a.createElement(T,{key:a,id:o,label:t[o],onChange:function(){return e.handleHowTheyKnowUsCB(o)}})})),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Control,{type:"submit",className:"btn mt-5",style:{width:"fit-content",margin:"auto",backgroundColor:"#ef5a35",color:"#fff"}})))}}]),t}(n.Component);a(52);function I(e){return r.a.createElement(E.a,Object.assign({},e,{"aria-labelledby":"contained-modal-title-vcenter",backdrop:"static",keyboard:!1,size:"lg"}),r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,{id:"contained-modal-title-vcenter",className:"text-centered"},r.a.createElement("h4",null,"Get started with SquadVoice"))),r.a.createElement(E.a.Body,{className:"show-grid"},r.a.createElement(g.a,null,r.a.createElement(L,e))))}var F={backgroundColor:"#5A6F90",padding:"1rem",color:"white",textTransform:"capitalize",marginBottom:"0.5rem",display:"flex",justifyContent:"center"},A=Object(f.a)({},F),D={fontSize:"2rem",fontWeight:"600",letterSpacing:"1px"},q={fontSize:"1.2rem",fontWeight:"500",marginTop:"-5px",marginBottom:"0.5rem"},B={fontSize:"0.9rem",margin:"15px 0 15px 0"},M={borderBottom:"2px dashed lightgrey",margin:"0 5px 0 5px"},W={backgroundColor:"rgb(222, 99, 67)",color:"#FFF",display:"flex",justifyContent:"center",padding:"1rem"},H={FILTER_PLAN_NAME:"Qualified 60",ENTERPRISE:"Enterprise",SELECTED_INDEX:2},z=(a(53),{data:{planName:"",qualifiedLeadsPerMonth:0,pricePerLiveTransfer:"",totalQualifiedLeadPrice:"",totalPlatformPrice:"",finalPackagePrice:"",popular:!1}}),U=function(e){var t=Object(f.a)({},z,e),a=Object(n.useState)(!1),o=Object(m.a)(a,2),l=o[0],i=o[1],c=t.style,s=t.data.planName,u=t.data.popular||s===H.ENTERPRISE?"rgb(242, 242, 242":"fff";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:c,className:"col-xs-12 col-md-3"},r.a.createElement(I,{planName:s,show:l,onHide:function(){return i(!1)}}),r.a.createElement("div",{style:function(e){var t=Object(f.a)({},W);return e||(t=Object(f.a)({},t,{visibility:"hidden"})),t}(t.data.popular)},"Most Popular!"),r.a.createElement("div",{style:F,"data-testid":"plan-name"},s),r.a.createElement("div",{className:"body-container",style:{backgroundColor:u}},r.a.createElement("div",{style:{marginTop:"30px",marginBottom:"-7px",display:s===H.ENTERPRISE?"block":"none",height:"7em"}},r.a.createElement("p",{className:"enterprise-box text-center",style:{backgroundColor:u}},"Want more than 80 qualified leads each month?")),r.a.createElement("div",{className:"container",style:{visibility:s===H.ENTERPRISE?"hidden":"visible",backgroundColor:u}},r.a.createElement("center",null,r.a.createElement("div",{style:Object(f.a)({},D,{marginTop:"30px"}),"data-testid":"price-per-live-transfer"},t.data.pricePerLiveTransfer),r.a.createElement("div",{style:B},"Per Qualified lead"),r.a.createElement("div",{style:M}),r.a.createElement("div",{style:B}," Qualified Leads Per Month"),r.a.createElement("div",{style:q,"data-testid":"qualified-leads-per-month"},t.data.qualifiedLeadsPerMonth),r.a.createElement("div",{style:M}),r.a.createElement("div",{style:B},"Platform Fee Per Month"),r.a.createElement("div",{style:Object(f.a)({},q,{marginBottom:"15px"}),"data-testid":"total-platform-price"},t.data.totalPlatformPrice),r.a.createElement("div",{style:Object(f.a)({},A,q,{fontWeight:600,marginLeft:"-15px",marginRight:"-15px"}),"data-testid":"final-package-price"},t.data.finalPackagePrice,"/mo"))),r.a.createElement(p,{solid:!!t.data.popular,click:function(){return i(!0)}},s===H.ENTERPRISE?"Get In Touch":"Start Your Trial"))))},K={padding:"1rem",fontWeight:600,flex:1,display:"flex",justifyContent:"center",cursor:"pointer"},_={borderRight:"2px solid #D1D1D1"},Q={backgroundColor:"#5A6F90",color:"#FFF"},G={display:"flex",border:"1px solid transparent",borderRadius:"0.5rem",backgroundColor:"#F8F8F8",flexWrap:"wrap",marginBottom:"2rem",overflow:"hidden",margin:"80px 10px"},J={display:"flex",flexWrap:"wrap"},X=(a(54),function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(e.children),c=Object(m.a)(i,2),s=c[0],u=c[1];Object(n.useEffect)(function(){!function(e){var t=e.map(function(e){return r.a.cloneElement(e,{insideTabs:!0})});u(t)}(e.children);var t,a=(t=e.children,r.a.Children.toArray(t).findIndex(function(e){return e.props.selected}));a>-1&&l(a)},[e.children]);var d=function(e,t){return o===t?r.a.cloneElement(e,{selected:!0,key:t}):r.a.cloneElement(e,{selected:!1,key:t})},h=function(e,t){var a=Object(f.a)({},K);return t!==e.length-1&&(a=Object(f.a)({},a,_)),t===o&&(a=Object(f.a)({},a,Q)),a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(f.a)({},G)},s.map(function(e,t){return r.a.createElement("span",{className:"tab",style:h(s,t),key:t,onClick:function(){return l(t)}},e.props.name)})),function(e){return e.map(d)}(s).map(function(e){return e}))}),Y={name:"",selected:!0,insideTabs:!1},$=function(e){var t=Object(f.a)({},Y,e);return r.a.createElement(r.a.Fragment,null,!t.insideTabs&&r.a.createElement("span",null,t.name),r.a.createElement("div",{style:J},t.selected&&t.children))};a(55);function V(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return Z(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Z(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw o}}}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ee=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getTabHeaders=function(){var t,a=new Set,n=V(e.state.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.add(r.averageHomePricePoint)}}catch(o){n.e(o)}finally{n.f()}return Array.from(a)},e.getTabData=function(t){return e.state.data.filter(function(e){return e.averageHomePricePoint===t})},e.state={data:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/sonutiwari/squad-take-home/master/src/mockdata/data.json").then(function(e){return e.json()}).then(function(t){e.setState({data:t})}).catch(function(e){console.error(e.message)})}},{key:"render",value:function(){var e=this,t=this.getTabHeaders();return r.a.createElement(X,null,t.map(function(a,n){return r.a.createElement($,{key:n,name:a,selected:n===H.SELECTED_INDEX,className:0===n||n===t.length-1?"rounded-border":""},e.getTabData(a).filter(function(e){return e.planDetails.planName!==H.FILTER_PLAN_NAME}).map(function(e,t){return r.a.createElement(U,{key:t,data:e.planDetails})}),r.a.createElement(U,{data:{planName:"Enterprise"},className:"price-card"}))}))}}]),t}(n.Component);var te=function(){return r.a.createElement("div",{style:{margin:"50px"}},r.a.createElement(ee,{className:"main-box"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[41,1,2]]]);
//# sourceMappingURL=main.1bdcb6f7.chunk.js.map