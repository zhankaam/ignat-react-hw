(this["webpackJsonpignat-react-hw"]=this["webpackJsonpignat-react-hw"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={container:"HW5_container__2OcOv",header:"HW5_header__3Cc_a",containerMenu:"HW5_containerMenu__3dQOp",active:"HW5_active__3PAH_",activeMenu:"HW5_activeMenu__hwo_R",menuLinks:"HW5_menuLinks__GCQ8N"}},,,function(e,t,n){e.exports={Message:"Message_Message__ExZBj",avatar:"Message_avatar__DNbqo",textbox:"Message_textbox__2-bvq",text:"Message_text__-THBp",name:"Message_name__1PH6c",time:"Message_time__20p7C"}},,,function(e,t,n){e.exports={fullBlock:"Affairs_fullBlock__1lCJf",button:"Affairs_button__hZbVP"}},function(e,t,n){e.exports={wrapper:"Error_wrapper__3qVMZ",container:"Error_container__3DCNy",fonts:"Error_fonts__3-3iQ",title:"Error_title__21yMk",style:"Error_style__3hjlI"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__i1g2-",error:"Greeting_error__2_KoG",state:"Greeting_state__hbdgQ",users:"Greeting_users__1PBND",button:"Greeting_button__3n3lT"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__18E8C",errorInput:"SuperInputText_errorInput__16g6L",error:"SuperInputText_error__31izG"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__3ruRn",column:"HW4_column__2wAl1"}},function(e,t,n){e.exports={default:"SuperButton_default__2QE2a",red:"SuperButton_red__3VB65"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2NZVx",spanClassName:"SuperCheckbox_spanClassName__2qXul"}},,,,,function(e,t,n){e.exports={App:"App_App__tJX_3"}},function(e,t,n){e.exports={deleteButton:"Affair_deleteButton__1xUtc"}},function(e,t,n){e.exports={content:"GreetingContainer_content__ftjBc"}},,,,,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(29),i=n.n(s),o=(n(40),n(30)),l=n.n(o),u=n(4),j=n(8),b=n.n(j),d=n(9),h=n(2),x=n(11),_=n.n(x);var O=function(e){return Object(a.jsxs)("div",{className:_.a.Message,children:[Object(a.jsx)("img",{src:e.avatar,alt:"Avatar",className:_.a.avatar}),Object(a.jsxs)("div",{className:_.a.textbox,children:[Object(a.jsxs)("h2",{className:_.a.name,children:[" ",e.name]}),Object(a.jsx)("p",{className:_.a.text,children:e.message}),Object(a.jsx)("span",{className:_.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Artem",p="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",v="20:00";var N=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),"homeworks 1",Object(a.jsx)(O,{avatar:m,name:f,message:p,time:v}),Object(a.jsx)("hr",{})]})},g=n(31),C=n.n(g);var k=function(e){return Object(a.jsxs)("div",{children:["".concat(e.affair.name," ").concat(e.affair.priority),Object(a.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.deleteButton,children:"x"})]})},w=n(14),y=n.n(w);var S=function(e){var t=e.data.map((function(t){return Object(a.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(a.jsxs)("div",{className:y.a.fullBlock,children:[t,Object(a.jsx)("button",{onClick:function(){e.setFilter("all")},className:y.a.button,children:"All"}),Object(a.jsx)("button",{onClick:function(){e.setFilter("high")},className:y.a.button,children:"High"}),Object(a.jsx)("button",{onClick:function(){e.setFilter("middle")},className:y.a.button,children:"Middle"}),Object(a.jsx)("button",{onClick:function(){e.setFilter("low")},className:y.a.button,children:"Low"})]})},M=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(c.useState)(M),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("all"),i=Object(u.a)(s,2),o=i[0],l=i[1],j=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,o);return Object(a.jsxs)("div",{children:["homeworks 2",Object(a.jsx)(S,{data:j,setFilter:l,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},B=n(34),E=n(18),H=n.n(E),T=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,s=e.totalUsers,i=r?H.a.error:H.a.state;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:t,onChange:n,className:i}),Object(a.jsx)("span",{children:r}),Object(a.jsx)("button",{onClick:c,className:H.a.button,children:"add"}),"Users Count:",Object(a.jsx)("span",{className:H.a.users,children:s})]})},W=n(32),G=n.n(W),I=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(""),j=Object(u.a)(l,2),b=j[0],d=j[1],h=t.length;return Object(a.jsx)("div",{className:G.a.content,children:Object(a.jsx)(T,{name:i,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:function(){""!==i?(alert("Hello ".concat(i," !")),n(i)):d("error"),o("")},error:b,totalUsers:h})})},P=n(48);var F=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),"homeworks 3",Object(a.jsx)(I,{users:n,addUserCallback:function(e){r([].concat(Object(B.a)(n),[{_id:Object(P.a)(),name:e}]))}})]})},J=n(12),U=n(13),L=n(19),q=n.n(L),Q=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,s=e.error,i=(e.className,e.spanClassName),o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(q.a.error," ").concat(i||""),u="".concat(s)?"".concat(q.a.errorInput):"".concat(q.a.superInput);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&r&&r()},className:"".concat(u," ").concat(q.a.input)},o)),s&&Object(a.jsx)("span",{className:l,children:s})]})},Z=n(23),K=n.n(Z),V=n(24),D=n.n(V),R=function(e){var t=e.red,n=(e.className,Object(U.a)(e,["red","className"])),c="".concat(t?D.a.red:D.a.default);return Object(a.jsx)("button",Object(J.a)({className:c},n))},X=n(25),z=n.n(X),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),s=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(z.a.checkbox," ").concat(c||"");return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:i},s)),r&&Object(a.jsx)("span",{className:z.a.spanClassName,children:r})]})};var $=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=n?"":"error",i=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),l=Object(u.a)(o,2),j=l[0],b=l[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),"homeworks 4",Object(a.jsxs)("div",{className:K.a.column,children:[Object(a.jsx)(Q,{value:n,onChangeText:r,onEnter:i,error:s,className:K.a.blue}),Object(a.jsx)(R,{red:!0,onClick:i,children:"delete "}),Object(a.jsx)(Y,{checked:j,onChangeChecked:b,children:"control "}),Object(a.jsx)(Y,{checked:j,onChange:function(e){return b(e.currentTarget.checked)},children:"control 2"})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("hr",{})]})};var ee=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(A,{}),Object(a.jsx)(F,{}),Object(a.jsx)($,{})]})},te=n(15),ne=n.n(te);var ae=function(){return Object(a.jsx)("div",{className:ne.a.wrapper,children:Object(a.jsxs)("div",{className:ne.a.container,children:[Object(a.jsx)("h2",{className:ne.a.fonts,children:"Oops! Page not found!"}),Object(a.jsx)("h1",{className:ne.a.title,children:"404"}),Object(a.jsx)("p",{children:"We can't find the page you're looking for."}),Object(a.jsx)("a",{href:"#",className:ne.a.style,children:"Go back home"})]})})};var ce=function(){return Object(a.jsxs)("div",{className:"size",children:[Object(a.jsx)("div",{className:"title",children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c Junior+"}),Object(a.jsx)(F,{})]})},re="/pre-junior",se="/junior-plus",ie="/pageNotFound";var oe=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(a.jsx)(h.a,{to:re})}}),Object(a.jsx)(h.b,{path:re,render:function(){return Object(a.jsx)(ee,{})}}),Object(a.jsx)(h.b,{path:se,exact:!0,render:function(){return Object(a.jsx)(ce,{})}}),Object(a.jsx)(h.b,{path:ie,exact:!0,render:function(){return Object(a.jsx)(ae,{})}}),"// add routes"]})})};var le=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:b.a.container,children:[Object(a.jsx)("div",{className:b.a.header,onClick:function(){r(!n)},children:"\u2630"}),Object(a.jsxs)("div",{className:"".concat(b.a.containerMenu," ").concat(n&&b.a.activeMenu),children:[Object(a.jsx)(d.b,{to:re,activeClassName:b.a.active,className:b.a.menuLinks,children:" PreJunior"}),Object(a.jsx)(d.b,{to:se,activeClassName:b.a.active,className:b.a.menuLinks,children:" Junior + "}),Object(a.jsx)(d.b,{to:ie,activeClassName:b.a.active,className:b.a.menuLinks,children:" Error  "})]})]})};var ue=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(le,{}),Object(a.jsx)(oe,{})]})})};var je=function(){return Object(a.jsxs)("div",{className:l.a.App,children:[Object(a.jsx)("div",{children:"react homeworks:"}),Object(a.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.f5e43c51.chunk.js.map