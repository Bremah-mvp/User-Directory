(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a.n(r),s=a(9),o=a.n(s),l=(a(61),a(133)),i=a(14),d=a(28),u=a(19),h=a(48),j=a(47),m=a(121),b=a(125);a(62);var f,p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(m.a,{className:"Header-heading",container:!0,justify:"center",children:[Object(n.jsxs)(b.a,{variant:"h2",align:"center",children:[Object(n.jsx)("i",{className:"fas fa-user-friends"}),"COMPANY DIRECTORY"]}),Object(n.jsx)(m.a,{className:"Header-instructions",container:!0,justify:"center",children:Object(n.jsx)(b.a,{align:"center",children:"Search by first or last name or select a column heading to sort. "})})]})})},y=a(134),O=function(e){var t=e.handleInputChange;return Object(n.jsx)(y.a,{id:"standard-search",label:"search",type:"search",name:"search",variant:"outlined",onChange:t})},g=a(46),x=a.n(g),C=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},N=function(e,t){return t.filter((function(t){return t.firstName.toLowerCase().includes(e.toLowerCase())||t.lastName.toLowerCase().includes(e.toLowerCase())||t.email.toLowerCase().includes(e.toLowerCase())||t.phone.toLowerCase().includes(e.toLowerCase())||t.city.toLowerCase().includes(e.toLowerCase())||t.state.toLowerCase().includes(e.toLowerCase())}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],c="string"===typeof n[e]?n[e].toUpperCase():n[e],s=0;return r>c?s=1:r<c&&(s=-1),"desc"===t?-1*s:s}},L=a(128),S=a(132),w=a(131),E=a(127),B=a(129),I=a(130),P=a(135),k=a(126),A=function(e){var t=e.employees,a=e.orderBy,r=e.order,c=e.handleSort;return Object(n.jsx)(E.a,{component:k.a,children:Object(n.jsxs)(L.a,{stickyHeader:!0,"aria-label":"Employee Table",children:[Object(n.jsx)(B.a,{children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)(w.a,{children:"Picture"}),[{colName:"First Name",colLabel:"firstName"},{colName:"Last Name",colLabel:"lastName"},{colName:"Gender",colLabel:"gender"},{colName:"Email",colLabel:"email"},{colName:"Phone Number",colLabel:"phone"},{colName:"City",colLabel:"city"},{colName:"State",colLabel:"state"}].map((function(e){return Object(n.jsxs)(w.a,{children:[e.colName,Object(n.jsx)(P.a,{active:a===e.colLabel,direction:r,onClick:function(){return c(e.colLabel,r)}})]})}))]})}),Object(n.jsx)(S.a,{children:t.map((function(e){return Object(n.jsxs)(I.a,{hover:!0,children:[Object(n.jsx)(w.a,{align:"left",children:Object(n.jsx)("img",{alt:"".concat(e.firstName," ").concat(e.lastName),src:e.picture})}),Object(n.jsx)(w.a,{align:"left",children:e.firstName}),Object(n.jsx)(w.a,{align:"left",children:e.lastName}),Object(n.jsx)(w.a,{align:"left",children:e.gender}),Object(n.jsx)(w.a,{align:"left",children:e.email}),Object(n.jsx)(w.a,{align:"left",children:e.phone}),Object(n.jsx)(w.a,{align:"left",children:e.city}),Object(n.jsx)(w.a,{align:"left",children:e.state})]},e.id)}))})]})})};!function(e){e.ASC="asc",e.DESC="desc"}(f||(f={}));a(83);var F=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],loadedEmployees:[],search:"",orderBy:"",order:f.ASC},e.handleSort=function(t,a){var n=Object(i.a)(e.state.employees).sort(v(t,a)),r=a===f.ASC?f.DESC:f.ASC;e.setState({employees:n,orderBy:t,order:r})},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({search:a},(function(){if(e.state.search){var t=N(e.state.search,e.state.loadedEmployees);e.setState({employees:t,orderBy:""})}else e.setState({employees:e.state.loadedEmployees,orderBy:""})}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){var a=t.data.results.map((function(e){return{id:e.id.value,picture:e.picture.medium,firstName:e.name.first,lastName:e.name.last,gender:e.gender,email:e.email,phone:e.phone,city:e.location.city,state:e.location.state}}));e.setState({employees:a,loadedEmployees:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Employeesd-container",children:[Object(n.jsx)(p,{}),Object(n.jsx)(m.a,{className:"Employeesd-search",container:!0,justify:"center",children:Object(n.jsx)(O,{handleInputChange:this.handleInputChange})}),Object(n.jsx)(m.a,{className:"Employeesd-table",children:Object(n.jsx)(A,{employees:this.state.employees,handleSort:this.handleSort,orderBy:this.state.orderBy,order:this.state.order})})]})}}]),a}(r.Component);var D=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)(F,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),T()}},[[84,1,2]]]);
//# sourceMappingURL=main.0315f0b3.chunk.js.map