(this.webpackJsonpreact_antd_admin=this.webpackJsonpreact_antd_admin||[]).push([[17],{1451:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"},i=a(9),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="FileOutlined";t.a=n.forwardRef(o)},1463:function(e,t,a){"use strict";a.r(t);a(602);var n=a(603),l=a.n(n),i=(a(89),a(67)),o=a.n(i),r=(a(620),a(604)),c=a.n(r),d=(a(826),a(719)),s=a.n(d),u=(a(239),a(95)),h=a.n(u),m=(a(240),a(133)),f=a.n(m),g=(a(130),a(51)),y=a.n(g),p=a(53),v=a(54),w=a(66),E=a(65),b=(a(241),a(171)),x=a.n(b),k=(a(678),a(679)),C=a.n(k),I=a(0),R=a.n(I),O=a(1451),S=a(528),_=a(736),j=C.a.Panel,D=[{title:"Id",dataIndex:"id",key:"id",width:200,align:"center"},{title:"Title",dataIndex:"title",key:"title",width:200,align:"center"},{title:"Author",key:"author",dataIndex:"author",width:100,align:"center",render:function(e){return R.a.createElement(x.a,{key:e},e)}},{title:"Readings",dataIndex:"readings",key:"readings",width:195,align:"center"},{title:"Date",dataIndex:"date",key:"date",width:195,align:"center"}],K=function(e){Object(w.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(p.a)(this,n);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i)))._isMounted=!1,e.state={list:[],filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[]},e.fetchData=function(){Object(_.a)().then((function(t){var a=t.data.data.items;e._isMounted&&e.setState({list:a})}))},e.onSelectChange=function(t,a){e.setState({selectedRows:a,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([a.e(4),a.e(6),a.e(37)]).then(a.bind(null,1439)).then((function(a){var n="all"===t?e.state.list:e.state.selectedRows,l=e.formatJson(["id","title","author","readings","date"],n);a.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:l,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):y.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return R.a.createElement("div",{className:"app-container"},R.a.createElement(C.a,{defaultActiveKey:["1"]},R.a.createElement(j,{header:"\u5bfc\u51fa\u9009\u9879",key:"1"},R.a.createElement(h.a,{layout:"inline"},R.a.createElement(h.a.Item,{label:"\u6587\u4ef6\u540d:"},R.a.createElement(f.a,{style:{width:"250px"},prefix:R.a.createElement(O.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})),R.a.createElement(h.a.Item,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:"},R.a.createElement(s.a.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth},R.a.createElement(s.a,{value:!0},"\u662f"),R.a.createElement(s.a,{value:!1},"\u5426"))),R.a.createElement(h.a.Item,{label:"\u6587\u4ef6\u7c7b\u578b:"},R.a.createElement(c.a,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange},R.a.createElement(c.a.Option,{value:"xlsx"},"xlsx"),R.a.createElement(c.a.Option,{value:"csv"},"csv"),R.a.createElement(c.a.Option,{value:"txt"},"txt"))),R.a.createElement(h.a.Item,null,R.a.createElement(o.a,{type:"primary",icon:R.a.createElement(S.a,null),onClick:this.handleDownload.bind(null,"all")},"\u5168\u90e8\u5bfc\u51fa")),R.a.createElement(h.a.Item,null,R.a.createElement(o.a,{type:"primary",icon:R.a.createElement(S.a,null),onClick:this.handleDownload.bind(null,"selected")},"\u5bfc\u51fa\u5df2\u9009\u62e9\u9879"))))),R.a.createElement("br",null),R.a.createElement(l.a,{bordered:!0,columns:D,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!1,rowSelection:e,loading:this.state.downloadLoading}))}}]),n}(I.Component);t.default=K},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(48);function l(){return Object(n.a)({url:"/excel/list",method:"get"})}}}]);