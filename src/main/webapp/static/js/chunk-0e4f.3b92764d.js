(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e4f"],{"8gwX":function(e,t,a){"use strict";var i=a("YrMO"),n=a("Ew9n"),l=a("F03V"),r=a("U05J"),s=a("C+sD"),o=a("8DbX"),c=a("EgJF"),d=a("4+0Q"),u={name:"product-detail",components:{SlideView:n.a,CRMDetailHead:l.a,CRMBaseInfo:r.a,RelativeFiles:s.a,RelativeHandle:o.a,CRMCreateView:c.default},mixins:[d.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"product",detailData:{},headDetails:[{title:"产品类别",value:""},{title:"产品单位",value:""},{title:"产品价格",value:""},{title:"产品编码",value:""}],tabnames:[{label:"基本信息",name:"basicinfo"},{label:"附件",name:"file"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"basicinfo",isCreate:!1}},computed:{tabName:function(){return"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"file"==this.tabCurrentName?"relative-files":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.e)({productId:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.categoryName,e.headDetails[1].value=t.data.单位,e.headDetails[2].value=t.data.price,e.headDetails[3].value=t.data.num}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},p=(a("u+aT"),a("ZrdR")),m=Object(p.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"product",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content"},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"product",detail:e.detailData,id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"product",action:{type:"update",id:this.id,batchId:e.detailData.batchId}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"5d67a742",null);m.options.__file="ProductDetail.vue";t.a=m.exports},"h/q1":function(e,t,a){"use strict";var i=a("z47J");a.n(i).a},kXra:function(e,t,a){},"u+aT":function(e,t,a){"use strict";var i=a("kXra");a.n(i).a},z47J:function(e,t,a){},zmAU:function(e,t,a){"use strict";a.r(t);var i=a("8gwX"),n=a("kegP"),l={name:"productIndex",components:{ProductDetail:i.a},mixins:[n.a],data:function(){return{crmType:"product"}},computed:{},mounted:function(){},methods:{cellStyle:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"name"===t.property?{color:"#3E84E9",cursor:"pointer"}:""}}},r=(a("h/q1"),a("ZrdR")),s=Object(r.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("c-r-m-list-head",{attrs:{title:"产品管理",placeholder:"请输入产品名称","main-title":"新建产品","crm-type":e.crmType},on:{"on-handle":e.listHeadHandle,"on-search":e.crmSearch,"on-export":e.exportInfos}}),e._v(" "),i("div",{directives:[{name:"empty",rawName:"v-empty",value:!e.crm.product.index,expression:"!crm.product.index"}],staticClass:"crm-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[i("c-r-m-table-head",{ref:"crmTableHead",attrs:{"crm-type":e.crmType},on:{filter:e.handleFilter,handle:e.handleHandle,scene:e.handleScene}}),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:e.list,height:e.tableHeight,stripe:"",border:"","highlight-current-row":"","cell-style":e.cellStyle},on:{"row-click":e.handleRowClick,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",align:"center",width:"55"}}),e._v(" "),e._l(e.fieldList,function(t,a){return i("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",fixed:0==a,prop:t.prop,label:t.label,width:t.width,formatter:e.fieldFormatter},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),i("el-table-column"),e._v(" "),i("el-table-column",{attrs:{fixed:"right",width:"36"},scopedSlots:e._u([{key:"header",fn:function(t){return[i("img",{staticClass:"table-set",attrs:{src:a("zbTZ")},on:{click:e.handleTableSet}})]}}])})],2),e._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t}}})],1)],1),e._v(" "),e.showDview?i("product-detail",{staticClass:"d-view",attrs:{id:e.rowID},on:{handle:e.handleHandle,"hide-view":function(t){e.showDview=!1}}}):e._e(),e._v(" "),i("fields-set",{attrs:{crmType:e.crmType,dialogVisible:e.showFieldSet},on:{"set-success":e.setSave,"update:dialogVisible":function(t){e.showFieldSet=t}}})],1)},[],!1,null,"17e57949",null);s.options.__file="ProductIndex.vue";t.default=s.exports}}]);