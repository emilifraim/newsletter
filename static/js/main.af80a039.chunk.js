(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),s=a.n(l),m=(a(16),a(1)),o=a(2),c=a(4),i=a(3),d=a(5),u=function(){return n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-expand-md headerBG bg-dark"},n.a.createElement("div",{className:"custom-h-title"},"NEWSLETTER")))},h=a(9),N=a(6),E=a.n(N),v=function(e){var t=e.name,a=e.placeholder,r=e.value,l=(e.label,e.error),s=e.error2,m=e.info,o=e.type,c=e.onChange,i=e.disabled;return n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:o,className:E()("form-control",{"is-invalid":l||s}),placeholder:a,name:t,value:r,onChange:c,disabled:i}),m&&n.a.createElement("small",{className:"form-text text-muted"},m),l&&n.a.createElement("div",{className:"invalid-feedback"},l))};v.defaultProps={type:"text"};var f=v,p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.errorEmail,r=e.handleNext,l=e.onChange,s=e.checked,m=e.errorChecked,o=e.handleCheck;return n.a.createElement("div",{className:"container mt-4 offset-md-3 fade-in"},n.a.createElement("form",{className:"",onSubmit:r},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-sm-12 "},n.a.createElement("div",{className:"custom-h-title mb-3"},"SIGN UP FOR THE TLC NEWSLETTER.")),n.a.createElement("div",{className:"col-md-6 col-sm-8 "},n.a.createElement(f,{placeholder:"enter email address",name:"email",type:"text",value:t,onChange:l,error:a})),n.a.createElement("div",{className:"col-md-6 col-sm-2 "},n.a.createElement("input",{className:"btn custom-btn mb-4  btn-sm-block",type:"submit",value:"NEXT"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 col-sm-10 mb-4"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:E()("form-check-input",{"is-invalid":m}),type:"checkbox",onChange:o,defaultChecked:s}),n.a.createElement("div",{className:"custom-privacy-policy"},"I agree to receive information from discovery Communication in accordance with the following Privacy Policy"),m&&n.a.createElement("div",{className:"invalid-feedback"},m))))))}}]),t}(r.Component),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.firstName,a=e.errorFirstName,r=e.lastName,l=e.errorLastName,s=e.handleSubmit,m=e.onChange;return n.a.createElement("div",{className:"container mt-4 offset-md-3 fade-in"},n.a.createElement("form",{className:"",onSubmit:s},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-sm-12 "},n.a.createElement("div",{className:"custom-h-title-2 mb-3"},"ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.")),n.a.createElement("div",{className:"col-md-3 col-sm-4 "},n.a.createElement(f,{placeholder:"First Name",name:"firstName",type:"text",value:t,onChange:m,error:a})),n.a.createElement("div",{className:"col-md-3 col-sm-4 "},n.a.createElement(f,{placeholder:"Last Name",name:"lastName",type:"text",value:r,onChange:m,error:l})),n.a.createElement("div",{className:"col-md-4 col-sm-2 "},n.a.createElement("input",{className:"btn custom-btn mb-4  btn-sm-block",type:"submit",value:"SIGN UP"})))))}}]),t}(r.Component),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container mb-3 mt-3 offset-md-3 fade-in"},n.a.createElement("div",{className:"col-md-12 mb-4"},n.a.createElement("div",{className:"custom-h-title"},"Thank You For Signing up!")),n.a.createElement("div",{className:"col-md-12 mb-4"},n.a.createElement("div",{className:"custom-h-title-2"},"Look out for the latest news on your favorite shows")))}}]),t}(r.Component),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleCheck=function(e){a.setState({checked:!a.state.checked})},a.handleNext=function(e){e.preventDefault(),a.setState({errorEmail:"",errorChecked:""}),!a.isEmpty(a.state.email)&&a.ValidateEmail(a.state.email)&&a.state.checked?a.setState({toggleEmailComponent:!1,toggleFirstLastNameComponent:!0,toggleCongratulationComponent:!1,errorEmail:""}):(a.isEmpty(a.state.email)?a.setState({errorEmail:"* Please enter your email"}):a.ValidateEmail(a.state.email)||a.setState({errorEmail:"* You have entered an invalid email address!"}),!1===a.state.checked&&a.setState({errorChecked:"* Please check Privacy Policy"}))},a.handleSubmit=function(e){if(e.preventDefault(),a.setState({errorFirstName:"",errorLastName:""}),a.isEmpty(a.state.firstName)||a.isEmpty(a.state.lastName))a.isEmpty(a.state.firstName)&&a.setState({errorFirstName:"* Please enter your First name"}),a.isEmpty(a.state.lastName)&&a.setState({errorLastName:"* Please enter your Last name"});else{var t={email:a.state.email,firstName:a.state.firstName,lastName:a.state.lastName};console.log("newUser: ",t),a.setState({toggleEmailComponent:!1,toggleFirstLastNameComponent:!1,toggleCongratulationComponent:!0,errorFirstName:"",errorLastName:""})}},a.isEmpty=function(e){return!e.match(/\S/)},a.ValidateEmail=function(e){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},a.state={email:"",errorEmail:"",checked:!1,errorChecked:"",firstName:"",errorFirstName:"",lastName:"",errorLastName:"",toggleEmailComponent:!0,toggleFirstLastNameComponent:!1,toggleCongratulationComponent:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;return e=this.state.toggleEmailComponent?n.a.createElement(p,{email:this.state.email,errorEmail:this.state.errorEmail,onChange:this.onChange,checked:this.state.checked,errorChecked:this.state.errorChecked,handleCheck:this.handleCheck,handleNext:this.handleNext}):this.state.toggleFirstLastNameComponent?n.a.createElement(b,{firstName:this.state.firstName,errorFirstName:this.state.errorFirstName,lastName:this.state.lastName,errorLastName:this.state.errorLastName,onChange:this.onChange,handleSubmit:this.handleSubmit}):this.state.toggleCongratulationComponent?n.a.createElement(g,null):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 mb-4"}),n.a.createElement("h2",null,"An error occured, please refresh the page and try again ")),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container-fluid"},e),n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright"))}}]),t}(r.Component),k=(a(18),function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(C,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.af80a039.chunk.js.map