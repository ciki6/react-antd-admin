(this.webpackJsonpreact_antd_admin=this.webpackJsonpreact_antd_admin||[]).push([[29],{1446:function(e,t,a){"use strict";a.r(t);a(541);var n=a(542),r=a.n(n),i=(a(241),a(117)),l=a.n(i),s=(a(89),a(67)),o=a.n(s),c=(a(130),a(51)),d=a.n(c),u=a(874),m=a.n(u);function p(e,t,a,n,r,i,l){try{var s=e[i](l),o=s.value}catch(c){return void a(c)}s.done?t(o):Promise.resolve(o).then(n,r)}function h(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function l(e){p(i,n,r,l,s,"next",e)}function s(e){p(i,n,r,l,s,"throw",e)}l(void 0)}))}}var f=a(53),v=a(54),b=a(66),E=a(65),y=(a(581),a(582)),g=a.n(y),U=a(0),O=a.n(U),k=a(175),w=a(535),C=(a(170),a(106)),j=a.n(C),I=(a(599),a(583)),M=a.n(I),D=(a(237),a(95)),V=a.n(D),x=(a(238),a(133)),L=a.n(x),R=L.a.TextArea,F=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onOk,r=e.form,i=e.confirmLoading,l=e.currentRowData,s=r.getFieldDecorator,o=l.id,c=l.name,d=l.role,u=l.description,m={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return O.a.createElement(j.a,{title:"\u7f16\u8f91",visible:t,onCancel:a,onOk:n,confirmLoading:i},O.a.createElement(V.a,m,O.a.createElement(V.a.Item,{label:"\u7528\u6237ID:"},s("id",{initialValue:o})(O.a.createElement(L.a,{disabled:!0}))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},s("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}],initialValue:c})(O.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},s("role",{initialValue:d})(O.a.createElement(M.a,{style:{width:120},disabled:"admin"===o},O.a.createElement(M.a.Option,{value:"admin"},"admin"),O.a.createElement(M.a.Option,{value:"editor"},"editor"),O.a.createElement(M.a.Option,{value:"guest"},"guest")))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},s("description",{initialValue:u})(O.a.createElement(R,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),a}(U.Component),A=V.a.create({name:"EditUserForm"})(F),S=L.a.TextArea,T=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).validatUserID=function(){var e=h(m.a.mark((function e(t,a,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return/^[a-zA-Z0-9]{1,6}$/.test(a)||n("\u7528\u6237ID\u5fc5\u987b\u4e3a1-6\u4f4d\u6570\u5b57\u6216\u5b57\u6bcd\u7ec4\u5408"),e.next=4,Object(k.f)(a);case 4:r=e.sent,r.data.status&&n("\u8be5\u7528\u6237ID\u5df2\u5b58\u5728"),e.next=10;break;case 9:n("\u8bf7\u8f93\u5165\u7528\u6237ID");case 10:n();case 11:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onOk,r=e.form,i=e.confirmLoading,l=r.getFieldDecorator,s={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return O.a.createElement(j.a,{title:"\u7f16\u8f91",visible:t,onCancel:a,onOk:n,confirmLoading:i},O.a.createElement(V.a,s,O.a.createElement(V.a.Item,{label:"\u7528\u6237ID:"},l("id",{rules:[{required:!0,validator:this.validatUserID}]})(O.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237ID"}))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},l("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}]})(O.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},l("role",{initialValue:"admin"})(O.a.createElement(M.a,{style:{width:120}},O.a.createElement(M.a.Option,{value:"admin"},"admin"),O.a.createElement(M.a.Option,{value:"guest"},"guest")))),O.a.createElement(V.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},l("description",{})(O.a.createElement(S,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),a}(U.Component),_=V.a.create({name:"AddUserForm"})(T),N=g.a.Column,q=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={users:[],editUserModalVisible:!1,editUserModalLoading:!1,currentRowData:{},addUserModalVisible:!1,addUserModalLoading:!1},e.getUsers=h(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.d)();case 2:a=t.sent,n=a.data,r=n.users,0===n.status&&e.setState({users:r});case 5:case"end":return t.stop()}}),t)}))),e.handleEditUser=function(t){e.setState({currentRowData:Object.assign({},t),editUserModalVisible:!0})},e.handleDeleteUser=function(t){var a=t.id;"admin"!==a?Object(k.b)({id:a}).then((function(t){d.a.success("\u5220\u9664\u6210\u529f"),e.getUsers()})):d.a.error("\u4e0d\u80fd\u5220\u9664\u7ba1\u7406\u5458\u7528\u6237\uff01")},e.handleEditUserOk=function(t){var a=e.editUserFormRef.props.form;a.validateFields((function(t,n){t||(e.setState({editModalLoading:!0}),Object(k.c)(n).then((function(t){a.resetFields(),e.setState({editUserModalVisible:!1,editUserModalLoading:!1}),d.a.success("\u7f16\u8f91\u6210\u529f!"),e.getUsers()})).catch((function(e){d.a.success("\u7f16\u8f91\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e.handleCancel=function(t){e.setState({editUserModalVisible:!1,addUserModalVisible:!1})},e.handleAddUser=function(t){e.setState({addUserModalVisible:!0})},e.handleAddUserOk=function(t){var a=e.addUserFormRef.props.form;a.validateFields((function(t,n){t||(e.setState({addUserModalLoading:!0}),Object(k.a)(n).then((function(t){a.resetFields(),e.setState({addUserModalVisible:!1,addUserModalLoading:!1}),d.a.success("\u6dfb\u52a0\u6210\u529f!"),e.getUsers()})).catch((function(e){d.a.success("\u6dfb\u52a0\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state.users,a=O.a.createElement("span",null,O.a.createElement(o.a,{type:"primary",onClick:this.handleAddUser},"\u6dfb\u52a0\u7528\u6237"));return O.a.createElement("div",{className:"app-container"},O.a.createElement(w.a,{title:"\u7528\u6237\u7ba1\u7406",source:"\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u8fdb\u884c\u7ba1\u7406\uff0c\u4f8b\u5982\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7528\u6237\uff0c\u6216\u8005\u4fee\u6539\u7cfb\u7edf\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\u3002"}),O.a.createElement("br",null),O.a.createElement(r.a,{title:a},O.a.createElement(g.a,{bordered:!0,rowKey:"id",dataSource:t,pagination:!1},O.a.createElement(N,{title:"\u7528\u6237ID",dataIndex:"id",key:"id",align:"center"}),O.a.createElement(N,{title:"\u7528\u6237\u540d\u79f0",dataIndex:"name",key:"name",align:"center"}),O.a.createElement(N,{title:"\u7528\u6237\u89d2\u8272",dataIndex:"role",key:"role",align:"center"}),O.a.createElement(N,{title:"\u7528\u6237\u63cf\u8ff0",dataIndex:"description",key:"description",align:"center"}),O.a.createElement(N,{title:"\u64cd\u4f5c",key:"action",width:195,align:"center",render:function(t,a){return O.a.createElement("span",null,O.a.createElement(o.a,{type:"primary",shape:"circle",icon:"edit",title:"\u7f16\u8f91",onClick:e.handleEditUser.bind(null,a)}),O.a.createElement(l.a,{type:"vertical"}),O.a.createElement(o.a,{type:"primary",shape:"circle",icon:"delete",title:"\u5220\u9664",onClick:e.handleDeleteUser.bind(null,a)}))}}))),O.a.createElement(A,{currentRowData:this.state.currentRowData,wrappedComponentRef:function(t){return e.editUserFormRef=t},visible:this.state.editUserModalVisible,confirmLoading:this.state.editUserModalLoading,onCancel:this.handleCancel,onOk:this.handleEditUserOk}),O.a.createElement(_,{wrappedComponentRef:function(t){return e.addUserFormRef=t},visible:this.state.addUserModalVisible,confirmLoading:this.state.addUserModalLoading,onCancel:this.handleCancel,onOk:this.handleAddUserOk}))}}]),a}(U.Component);t.default=q},535:function(e,t,a){"use strict";a(541);var n=a(542),r=a.n(n),i=a(0),l=a.n(i),s=a(53),o=a(54),c=function(){function e(t){Object(s.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var a=Array.from(e.childNodes),n=0;n<a.length;n++){var r=a[n];if(3===r.nodeType)t=t.concat(r.nodeValue.split(""));else if(1===r.nodeType){var i=[];i=this.convert(r,i),t.push({dom:r,val:i})}}return t}},{key:"print",value:function(e,t,a){setTimeout((function(){e.appendChild(document.createTextNode(t)),a()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var a=e.val.shift();if("string"===typeof a)this.print(e.dom,a,(function(){t.play(e)}));else{var n=a.dom.cloneNode();e.dom.appendChild(n),this.play({parent:e,dom:n,val:a.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),d=function(e){var t=e.title,a=e.source,n=Object(i.useRef)(),s=Object(i.useRef)();return Object(i.useEffect)((function(){new c({source:n.current,output:s.current,delay:30}).start()}),[]),l.a.createElement(r.a,{bordered:!1,className:"card-item",title:t},l.a.createElement("div",{style:{display:"none"},ref:n,dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("div",{ref:s}))};d.defaultProps={title:"",source:""};t.a=d},874:function(e,t,a){e.exports=a(249)}}]);