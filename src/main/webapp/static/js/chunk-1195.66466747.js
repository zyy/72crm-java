(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1195"],{"/IDh":function(e,t,a){},"/rYp":function(e,t,a){},"2Cmg":function(e,t,a){},Aro5:function(e,t,a){"use strict";var i=a("/IDh");a.n(i).a},EfRf:function(e,t,a){},Ew9n:function(e,t,a){"use strict";var i=a("7Qib"),s={name:"slide-view",components:{},computed:{},watch:{},data:function(){return{zIndex:Object(i.g)()}},props:{bodyStyle:{type:Object,default:{padding:0}},listenerIDs:{type:Array,default:function(){return[]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return[]}},appendToBody:{type:Boolean,default:!1}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this.listenerIDs.forEach(function(t){document.getElementById(t)&&document.getElementById(t).addEventListener("click",e.handleDocumentClick,!1)})},methods:{handleDocumentClick:function(e){var t=!0;this.noListenerIDs.forEach(function(a){document.getElementById(a)&&document.getElementById(a).contains(e.target)&&(t=!1)}),this.noListenerClass.forEach(function(a){var i=document.getElementsByClassName(a);if(i&&t)for(var s=0;s<i.length;s++){if(i[s].contains(e.target)){t=!1;break}}}),document.getElementById("slide")&&document.getElementById("slide").contains(e.target)&&(t=!1),t&&this.$emit("side-close")},afterEnter:function(){this.$emit("afterEnter")}},beforeDestroy:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},n=(a("UY1A"),a("ZrdR")),l=Object(n.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"slide-fade"},on:{"after-enter":this.afterEnter}},[t("el-card",{ref:"slide",staticClass:"slide-detail-card-container",style:{"z-index":this.zIndex},attrs:{id:"slide","body-style":this.bodyStyle}},[this._t("default")],2)],1)},[],!1,null,"93380e46",null);l.options.__file="SlideView.vue";t.a=l.exports},GvZr:function(e,t,a){},"Q/cB":function(e,t,a){"use strict";var i=a("/rYp");a.n(i).a},UY1A:function(e,t,a){"use strict";var i=a("2Cmg");a.n(i).a},iNuc:function(e,t,a){"use strict";a.r(t);var i=a("t3Un");function s(e){return Object(i.a)({url:"OaExamineCategory/deleteExamineCategory",method:"post",data:e})}function n(e){return Object(i.a)({url:"OaExamineCategory/updateStatus",method:"post",data:e})}var l=a("ViDN"),r=a("8GhS"),o=a("mqNB"),c=a.n(o),d={name:"create-examine-category",components:{CreateView:l.a,XhInput:r.g,XhTextarea:r.o,XhSelect:r.l,XhUserCell:r.p,XhStrucUserCell:r.m},computed:{title:function(){return"save"===this.handle.action?"新建审批类型":"update"===this.handle.action?"编辑审批类型":void 0}},data:function(){return{loading:!1,crmRules:{},crmForm:{crmFields:[]},currentPage:1,examineType:1,examineList:[{type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]}]}},filters:{typeToComponentName:function(e){return"text"==e?"XhInput":"textarea"==e?"XhTextarea":"select"==e?"XhSelect":"structure"==e?"XhStrucUserCell":void 0},numberToZh:function(e){return c.a.encodeS(e)}},props:{handle:{type:Object,default:function(){return{type:"examineflow",action:"save",id:"",data:null}}}},mounted:function(){if(document.body.appendChild(this.$el),this.getField(),this.handle.data)if(this.handle.data.examineType&&1===this.handle.data.examineType){this.examineList=[];for(var e=0;e<this.handle.data.stepList.length;e++){var t=this.handle.data.stepList[e],a={};a.type=t.stepType,2===t.stepType||3===t.stepType?(a.show=!0,a.value=t.userList):(a.show=!1,a.value=[]),a.options=0===e?[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}],this.examineList.push(a)}}else this.examineType=2},methods:{fieldValueChange:function(e){this.crmForm.crmFields[e.index].value=e.value},getField:function(){var e=[];e.push({field:"title",formType:"text",isNull:1,name:"审批类型名称",setting:[],inputTips:"",value:this.handle.data?this.handle.data.title:""}),e.push({field:"dept",formType:"structure",isNull:0,name:"可视范围",setting:[],inputTips:"默认全公司",value:{users:this.handle.data?this.handle.data.userIds:[],strucs:this.handle.data?this.handle.data.deptIds:[]}}),e.push({field:"remarks",formType:"textarea",isNull:0,name:"审批类型说明",setting:[],inputTips:"",value:this.handle.data?this.handle.data.remarks:""}),this.getcrmRulesAndModel(e)},getcrmRulesAndModel:function(e){for(var t=0;t<e.length;t++){var a=e[t],i=[];1==a.isNull&&i.push({required:!0,message:a.name+"不能为空",trigger:["blur","change"]}),this.crmRules[a.field]=i;var s={};s.value=a.value,s.key=a.field,s.data=a,"textarea"==a.formType&&(s.showblock=!0),this.crmForm.crmFields.push(s)}},saveField:function(){var e=this;this.$refs.crmForm.validate(function(t){if(!t)return e.$message.error("请完善必填信息"),!1;e.validStepsInfo()&&e.submiteParams(e.crmForm.crmFields)})},validStepsInfo:function(){for(var e=0;e<this.examineList.length;e++){var t=this.examineList[e];if((2===t.type||3===t.type)&&0===t.value.length)return this.$message.error("请添加员工"),!1}return!0},submiteParams:function(e){var t=this;this.loading=!0;var a=this.getSubmiteParams(e);"update"==this.handle.action&&(a.id=this.handle.id),function(e){return Object(i.a)({url:"OaExamineCategory/setExamineCategory",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}(a).then(function(e){t.loading=!1,t.$emit("save"),"save"==t.handle.action?t.$confirm("您将继续完成审批表单的创建","创建成功",{showCancelButton:!1,confirmButtonText:"确定",type:"warning"}).then(function(){t.hidenView(),t.$router.push({name:"handlefield",params:{type:"oa_examine",label:"10",id:e.data.categoryId}})}).catch(function(){}):(t.$message.success("操作成功"),t.hidenView())}).catch(function(){t.loading=!1})},getSubmiteParams:function(e){for(var t={},a=0;a<e.length;a++){var i=e[a];"dept"===i.key?(t.userIds=i.value.users.map(function(e){return e.userId}),t.deptIds=i.value.strucs.map(function(e){return e.id})):t[i.key]=i.value}for(var s=[],n=0;n<this.examineList.length;n++){var l=this.examineList[n];s.push({stepType:l.type,checkUserId:l.value.map(function(e){return e.userId})})}return t.examineType=this.examineType,t.step=s,t},nextPage:function(){var e=this;this.$refs.crmForm.validate(function(t){t&&(e.currentPage=2)})},selectOptionsChange:function(e){2==e.type||3==e.type?e.show=!0:e.show=!1},selectOptionsFocus:function(e,t){if(this.examineList.length>1){var a=t>0?this.examineList[t-1]:null,i=null;if(t<this.examineList.length-1)i=this.examineList[t+1];var s=!1,n=!1,l=!1;!a||2!==a.type&&3!==a.type||(l=!0),i&&4===i.type&&(s=!0,n=!0);var r=[{name:"负责人主管",value:1}];s||r.push({name:"指定用户（任意一人）",value:2}),n||r.push({name:"指定用户（多人会签）",value:3}),l||r.push({name:"上一级审批人主管",value:4}),e.options=r}},examineItemsAdd:function(){this.examineList.push({type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}]})},flowUserSelect:function(e){this.examineList[e.index].value=e.value},deleteExamineItems:function(e){this.examineList.splice(e,1)},hidenView:function(){this.$emit("hiden-view")},getPaddingLeft:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"0":"25px"},getPaddingRight:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"25px":"0"}},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},u=(a("wg5P"),a("ZrdR")),h=Object(u.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[i("flexbox",{staticClass:"crm-create-container",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"crm-create-header"},[i("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333"}},[e._v(e._s(e.title))]),e._v(" "),i("img",{staticClass:"close",attrs:{src:a("cjwK")},on:{click:e.hidenView}})]),e._v(" "),i("flexbox",{staticClass:"crm-create-flex",attrs:{direction:"column",align:"stretch"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentPage,expression:"currentPage == 1"}],staticClass:"crm-create-body"},[i("div",{staticClass:"create-name"},[e._v("基本信息")]),e._v(" "),i("el-form",{ref:"crmForm",staticClass:"crm-create-box",attrs:{model:e.crmForm,"label-position":"top"}},e._l(this.crmForm.crmFields,function(t,a){return i("el-form-item",{key:t.key,class:{"crm-create-block-item":t.showblock,"crm-create-item":!t.showblock},style:{"padding-left":e.getPaddingLeft(t,a),"padding-right":e.getPaddingRight(t,a)},attrs:{prop:"crmFields."+a+".value",rules:e.crmRules[t.key]}},[i("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[i("div",{staticStyle:{margin:"5px 0","font-size":"12px","word-wrap":"break-word","word-break":"break-all"}},[e._v("\n                "+e._s(t.data.name)+"\n                "),i("span",{staticStyle:{color:"#999"}},[e._v("\n                  "+e._s(t.data.inputTips?"（"+t.data.inputTips+"）":"")+"\n                ")])])]),e._v(" "),i(e._f("typeToComponentName")(t.data.formType),{tag:"component",attrs:{value:t.value,index:a,item:t,radio:!1},on:{"value-change":e.fieldValueChange}})],1)}))],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.currentPage,expression:"currentPage == 2"}],staticClass:"crm-create-body"},[i("div",{staticStyle:{padding:"0 20px","font-size":"12px"}},[i("el-radio",{attrs:{label:1},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("固定审批流")]),e._v(" "),i("div",{staticClass:"examine-items"},e._l(e.examineList,function(t,a){return i("flexbox",{key:a,staticClass:"examine-item"},[i("div",{staticClass:"examine-item-name"},[e._v("第"+e._s(e._f("numberToZh")(a+1))+"级")]),e._v(" "),i("el-select",{staticClass:"examine-item-select",attrs:{placeholder:"请选择"},on:{focus:function(i){e.selectOptionsFocus(t,a)},change:function(a){e.selectOptionsChange(t)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}},e._l(t.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),e._v(" "),t.show?i("xh-user-cell",{staticClass:"examine-item-user",attrs:{radio:!1,index:a,value:t.value},on:{"value-change":e.flowUserSelect}}):e._e(),e._v(" "),i("i",{staticClass:"el-icon-remove examine-item-delete",on:{click:function(t){e.deleteExamineItems(a)}}})],1)})),e._v(" "),i("div",{staticClass:"examine-items-add"},[i("span",{on:{click:e.examineItemsAdd}},[e._v("+ 添加审批层级")])]),e._v(" "),i("div",{staticClass:"examine-add-des"},[i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“负责人主管”审批时。系统仅会通知负责人主管，但负责人所有上级（主管、主管的主管）均可审批。")]),e._v(" "),i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择多个“指定用户”审批时。如果指定用户没有权限查看对应的合同，系统不会通知其审批。 ")]),e._v(" "),i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“指定用户（任意一人）”表示指定用户中任意一人审批即可。当选择“指定用户（多人会签）”表示 指定用户中所有人都要审批。")])]),e._v(" "),i("el-radio",{attrs:{label:2},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("授权审批人")])],1)])]),e._v(" "),1==e.currentPage?i("div",{staticClass:"handle-bar"},[i("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.nextPage(t)}}},[e._v("下一页")])],1):e._e(),e._v(" "),2==e.currentPage?i("div",{staticClass:"handle-bar"},[i("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.saveField(t)}}},[e._v("保存")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){e.currentPage=1}}},[e._v("上一页")])],1):e._e()],1)],1)},[],!1,null,"72a4868b",null);h.options.__file="CreateExamineCategory.vue";var m=h.exports,p=a("6ZY3"),v=a.n(p),f=a("Ew9n"),g=a("EP+0"),y=a("oP74"),x={name:"examine-category-detail",components:{SlideView:f.a,CreateSections:g.a,PreviewFieldView:y.a},props:{data:Object},filters:{formatedScopeInfo:function(e){for(var t="",a=e.deptIds?e.deptIds:[],i=0;i<a.length;i++){t=t+a[i].name+"、"}for(var s=e.userIds?e.userIds:[],n=0;n<s.length;n++){t=t+s[n].realname+(n===s.length-1?"":"、")}return t||"全公司"},toRowName:function(e){return"第"+c.a.encodeS(e)+"级"},toRowNameDes:function(e){return 1==e.stepType?"负责人主管":2==e.stepType?e.userList.length+"人或签":3==e.stepType?e.userList.length+"人会签":4==e.stepType?"上一级审批人主管":""}},watch:{data:function(e){this.getShowData()}},data:function(){return{showData:{},examineStatus:!1,tablePreviewData:{types:"",typesId:""},showTablePreview:!1}},computed:{},mounted:function(){this.getShowData()},methods:{handlePreview:function(){this.tablePreviewData.types="oa_examine",this.tablePreviewData.typesId=this.data.categoryId,this.showTablePreview=!0},deleteClick:function(){var e=this;this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s({id:e.data.categoryId}).then(function(t){e.$emit("refresh"),e.hideView(),e.$message({type:"success",message:"操作成功"})}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},getShowData:function(){this.showData=v()({},this.data),this.examineStatus=0!=this.showData.status},examineStatusChange:function(e){var t=this;this.showData.status=e?1:0,this.$confirm("您确定要"+(e?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n({id:t.data.categoryId,status:e?1:0}).then(function(e){t.$emit("refresh"),t.$message({type:"success",message:"操作成功"})}).catch(function(){t.cancelStatusChange()})}).catch(function(){t.cancelStatusChange(),t.$message({type:"info",message:"已取消删除"})})},cancelStatusChange:function(){this.examineStatus=!this.examineStatus,this.showData.status=this.examineStatus?1:0},hideView:function(){this.$emit("hide-view")}}},w=(a("zztR"),Object(u.a)(x,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{staticClass:"d-view",attrs:{listenerIDs:["manager-main-container"],noListenerIDs:["examine-table"],appendToBody:!0,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[i("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[i("div",{staticClass:"header"},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-name"},[e._v(e._s(e.showData.title)),1!=e.showData.isSys?i("i",{staticClass:"el-icon-delete delete",on:{click:e.deleteClick}}):e._e()]),e._v(" "),i("img",{staticClass:"header-close",attrs:{src:a("cjwK")},on:{click:e.hideView}})]),e._v(" "),i("div",{staticClass:"detail-header-des"},[i("div",{staticClass:"status"},[e._v("状态："+e._s(0==e.showData.status?"停用":"启用"))]),e._v(" "),i("div",{staticClass:"status-handle"},[e._v("\n          启用\n          "),i("el-switch",{on:{change:e.examineStatusChange},model:{value:e.examineStatus,callback:function(t){e.examineStatus=t},expression:"examineStatus"}})],1)])],1),e._v(" "),i("div",{staticClass:"detail-body"},[i("create-sections",{staticClass:"create-sections",attrs:{title:"基本信息"}},[i("div",{staticClass:"create-sections-content"},[i("div",{staticClass:"dialog-content"},[i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("审批名称")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.title))])]),e._v(" "),i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("适用范围")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e._f("formatedScopeInfo")(e.showData)))])]),e._v(" "),i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("审批说明")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.remarks))])])],1)])]),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"表单"}},[i("div",{staticClass:"preview-section",attrs:{slot:"header"},slot:"header"},[i("el-button",{attrs:{type:"text"},on:{click:e.handlePreview}},[e._v("预览")])],1)]),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"流程"}},[1==e.showData.examineType?i("div",{staticClass:"create-sections-content"},e._l(e.showData.stepList,function(t,a){return i("flexbox",{key:a,staticClass:"examine-flow",attrs:{align:"stretch"}},[i("div",{staticClass:"examine-flow-header"},[i("div",{staticClass:"mark-circle"}),e._v(" "),0!=a?i("div",{staticClass:"mark-top-line"}):e._e(),e._v(" "),a<e.showData.stepList.length-1?i("div",{staticClass:"mark-bottom-line"}):e._e()]),e._v(" "),i("div",{staticClass:"examine-flow-body"},[i("div",{staticClass:"body-header"},[i("span",{staticClass:"body-header-name"},[e._v(e._s(e._f("toRowName")(a+1)))]),i("span",{staticClass:"body-header-des"},[e._v("（"+e._s(e._f("toRowNameDes")(t))+"）")])]),e._v(" "),t.userList.length>0?i("flexbox",{staticClass:"examine-users"},e._l(t.userList,function(t,a){return i("div",{key:a,staticClass:"examine-users-item"},[i("div",{directives:[{name:"photo",rawName:"v-photo",value:t,expression:"userItem"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(t.img),expression:"$options.filters.filterUserLazyImg(userItem.img)",arg:"background-image"}],staticClass:"div-photo"}),e._v(" "),i("div",{staticClass:"name"},[e._v(e._s(t.realname))])])})):e._e()],1)])})):i("div",{staticClass:"create-sections-content"},[e._v("授权审批人")])])],1)]),e._v(" "),e.showTablePreview?i("preview-field-view",{attrs:{types:e.tablePreviewData.types,label:"10",typesId:e.tablePreviewData.typesId},on:{"hiden-view":function(t){e.showTablePreview=!1}}}):e._e()],1)},[],!1,null,"67254c5e",null));w.options.__file="examineCategoryDetail.vue";var b=w.exports,_=(a("7Qib"),{name:"examine-manager",components:{CreateExamineCategory:m,ExamineCategoryDetail:b},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-240,list:[],fieldList:[{prop:"title",label:"审批名称",width:150},{prop:"examineType",label:"流程类型",width:150},{prop:"userIds",label:"可见范围",width:150},{prop:"remarks",label:"审批说明",width:150},{prop:"updateTime",label:"最后修改时间",width:150},{prop:"status",label:"状态",width:150}],currentPage:1,pageSize:10,pageSizes:[10,20,30,40],total:0,showHandleView:!1,createHandleInfo:{action:"save",type:"examine",id:""},showDetail:!1,detailData:{}}},watch:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-240},this.getList()},methods:{saveSuccess:function(){this.currentPage=1,this.getList()},getList:function(){var e=this;this.loading=!0,function(e){return Object(i.a)({url:"OaExamineCategory/queryExamineCategoryList",method:"post",data:e})}({page:this.currentPage,limit:this.pageSize}).then(function(t){e.list=t.data.list,e.total=t.data.totalRow,e.loading=!1}).catch(function(){e.loading=!1})},fieldFormatter:function(e,t){if("examineType"===t.property)return 1===e[t.property]?"固定审批流":2===e[t.property]?"授权审批人":"";if("userIds"===t.property){var a=(e.deptIds||[]).map(function(e){return e.name}).join("、");a&&(a+="、");var i=a+(e.userIds||[]).map(function(e){return e.realname}).join("、");return i||"全公司"}return"status"===t.property?0===e[t.property]?"停用":"启用":e[t.property]},addExamine:function(){this.createHandleInfo={action:"save",type:"examine",id:""},this.showHandleView=!0},handleRowClick:function(e,t,a){t.property&&(this.detailData=e,this.showDetail=!0)},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleClick:function(e,t){var a=this;"edit-table"===e?this.$router.push({name:"handlefield",params:{type:"oa_examine",label:"10",id:t.row.categoryId}}):"edit"===e?(this.createHandleInfo.action="update",this.createHandleInfo.id=t.row.categoryId,this.createHandleInfo.data=t.row,this.showHandleView=!0):"delete"===e?this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,s({id:t.row.categoryId}).then(function(e){a.list.splice(t.$index,1),a.getList(),a.$message({type:"success",message:"操作成功"}),a.loading=!1}).catch(function(){a.loading=!1})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}):"change"===e&&this.$confirm("您确定要"+(0===t.row.status?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n({id:t.row.categoryId,status:0===t.row.status?1:0}).then(function(e){t.row.status=0===t.row.status?1:0,a.$message({type:"success",message:"操作成功"})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}}),C=(a("Q/cB"),Object(u.a)(_,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"se-table-header"},[a("el-button",{staticClass:"se-table-header-button",attrs:{type:"primary"},on:{click:e.addExamine}},[e._v("添加审批流程")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-table",staticStyle:{width:"100%"},attrs:{id:"examine-table",data:e.list,height:e.tableHeight,stripe:"","highlight-current-row":""},on:{"row-click":e.handleRowClick}},[e._l(e.fieldList,function(t,i){return a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",formatter:e.fieldFormatter,prop:t.prop,width:t.width,label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),a("el-table-column"),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit-table",t)}}},[e._v("编辑表单")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit",t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{disabled:1===t.row.isSys,type:"text",size:"small"},on:{click:function(a){e.handleClick("delete",t)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("change",t)}}},[e._v(e._s(0===t.row.status?"启用":"停用"))])]}}])})],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t}}})],1),e._v(" "),e.showHandleView?a("create-examine-category",{attrs:{handle:e.createHandleInfo},on:{save:e.saveSuccess,"hiden-view":function(t){e.showHandleView=!1}}}):e._e(),e._v(" "),e.showDetail?a("examine-category-detail",{attrs:{data:e.detailData},on:{refresh:e.getList,"hide-view":function(t){e.showDetail=!1}}}):e._e()],1)},[],!1,null,"4e44217d",null));C.options.__file="ExamineManager.vue";var k={components:{ExamineManager:C.exports},data:function(){return{leftType:"ExamineManager",leftSides:[{name:"审批类型管理",type:"ExamineManager"}]}},methods:{},mounted:function(){}},S=(a("ytgf"),Object(u.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticStyle:{height:"100%"},attrs:{direction:"column",align:"stretch"}},[a("div",{staticClass:"sw-header"},[e._v("\n    工作台\n  ")]),e._v(" "),a("div",{staticClass:"sw-body"},[a("flexbox",{staticClass:"sw-box",attrs:{align:"stretch"}},[a("div",{staticClass:"sw-body-side"},e._l(e.leftSides,function(t,i){return a("div",{key:i,staticClass:"side-item",class:e.leftType==t.type?"side-item-select":"side-item-default",on:{click:function(a){e.sideClick(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),e._v(" "),a("div",{staticClass:"sw-body-content"},[a(e.leftType,{tag:"component"})],1)])],1)])},[],!1,null,"0418b0db",null));S.options.__file="index.vue";t.default=S.exports},oP74:function(e,t,a){"use strict";var i=a("ViDN"),s=a("EP+0"),n=a("conU"),l=a("8GhS"),r={name:"preview-field-view",components:{CreateView:i.a,CreateSections:s.a,XhInput:l.g,XhTextarea:l.o,XhSelect:l.l,XhMultipleSelect:l.h,XhDate:l.d,XhDateTime:l.e,XhUserCell:l.p,XhStructureCell:l.n,XhFiles:l.f,CrmRelativeCell:l.a,XhProuctCate:l.j,XhProduct:l.i,XhBusinessStatus:l.b,XhCustomerAddress:l.c,XhReceivablesPlan:l.k},computed:{},watch:{types:function(e){this.crmForm={crmFields:[]},this.getField()}},data:function(){return{title:"预览",loading:!1,crmForm:{crmFields:[]}}},filters:{typeToComponentName:function(e){return"text"==e||"number"==e||"floatnumber"==e||"mobile"==e||"email"==e?"XhInput":"textarea"==e?"XhTextarea":"select"==e||"business_status"==e?"XhSelect":"checkbox"==e?"XhMultipleSelect":"date"==e?"XhDate":"datetime"==e?"XhDateTime":"user"==e?"XhUserCell":"structure"==e?"XhStructureCell":"file"==e?"XhFiles":"contacts"==e||"customer"==e||"contract"==e||"business"==e?"CrmRelativeCell":"category"==e?"XhProuctCate":"business_type"==e?"XhBusinessStatus":"product"==e?"XhProduct":"map_address"==e?"XhCustomerAddress":"receivables_plan"==e?"XhReceivablesPlan":void 0}},props:{types:{type:String,default:""},typesId:{type:[String,Number],default:""},label:{type:String,default:""}},mounted:function(){document.body.appendChild(this.$el),this.getField()},methods:{getField:function(){var e=this;this.loading=!0;var t={};(t={}).label=this.label,"oa_examine"===this.types&&(t.examineId=this.typesId),Object(n.l)(t).then(function(t){e.getcrmRulesAndModel(t.data),e.loading=!1}).catch(function(){e.loading=!1})},getcrmRulesAndModel:function(e){for(var t=0;t<e.length;t++){var a=e[t],i={};i.value=a.value,i.key=a.fieldName,i.data=a,i.disabled=!0,this.crmForm.crmFields.push(i)}},hidenView:function(){this.$emit("hiden-view")},getPaddingLeft:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"0":"25px"},getPaddingRight:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"25px":"0"}},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},o=(a("Aro5"),a("ZrdR")),c=Object(o.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[i("flexbox",{staticClass:"crm-create-container",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"crm-create-header"},[i("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333"}},[e._v(e._s(e.title))]),e._v(" "),i("img",{staticClass:"close",attrs:{src:a("cjwK")},on:{click:e.hidenView}})]),e._v(" "),i("div",{staticClass:"crm-create-flex"},[i("create-sections",{attrs:{title:"基本信息"}},[i("flexbox",{attrs:{direction:"column",align:"stretch"}},[i("div",{staticClass:"crm-create-body"},[i("el-form",{ref:"crmForm",staticClass:"crm-create-box",attrs:{model:e.crmForm,"label-position":"top"}},e._l(this.crmForm.crmFields,function(t,a){return i("el-form-item",{key:t.key,class:{"crm-create-block-item":t.showblock,"crm-create-item":!t.showblock},style:{"padding-left":e.getPaddingLeft(t,a),"padding-right":e.getPaddingRight(t,a)},attrs:{prop:"crmFields."+a+".value"}},[i("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[i("div",{staticStyle:{margin:"5px 0","font-size":"12px","word-wrap":"break-word","word-break":"break-all"}},[e._v("\n                    "+e._s(t.data.name)+"\n                    "),i("span",{staticStyle:{color:"#999"}},[e._v("\n                      "+e._s(t.data.inputTips?"（"+t.data.inputTips+"）":"")+"\n                    ")])])]),e._v(" "),i(e._f("typeToComponentName")(t.data.formType),{tag:"component",attrs:{radio:!1,disabled:t.disabled}})],1)}))],1)])],1)],1)],1)],1)},[],!1,null,"35dd7906",null);c.options.__file="previewFieldView.vue";t.a=c.exports},sIRB:function(e,t,a){},wg5P:function(e,t,a){"use strict";var i=a("sIRB");a.n(i).a},ytgf:function(e,t,a){"use strict";var i=a("GvZr");a.n(i).a},zztR:function(e,t,a){"use strict";var i=a("EfRf");a.n(i).a}}]);