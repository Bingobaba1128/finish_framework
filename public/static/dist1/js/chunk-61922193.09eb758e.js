(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61922193"],{"73e3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"ht_left"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"母合同编号"}},[a("el-input",{model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),a("el-form-item",{attrs:{label:"品牌"}},[a("el-input",{model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData1,height:"500"},on:{"row-click":t.zht}},[a("el-table-column",{attrs:{type:"index",width:"50",fixed:""}}),a("el-table-column",{attrs:{fixed:"",prop:"date",label:"母合同编号",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"品牌",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"合同主体",width:"120"}}),a("el-table-column",{attrs:{property:"address",label:"操作",width:"150",align:"center"}},[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.editorClick(e)}}},[t._v("查看")])],1)],1)],1),a("div",{staticClass:"ht_right",attrs:{id:"ht_right"}},[a("div",{staticClass:"zheader"},[t._v("子合同")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,height:"500",border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"date",label:"子合同编号",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"布编",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"数量",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"状态",width:"120"}}),a("el-table-column",{attrs:{property:"address",label:"操作",width:"150",align:"center"}},[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.editorClick(e)}}},[t._v("拆分")]),a("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.editorClick(e)}}},[t._v("修改")]),a("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.editorClick(e)}}},[t._v("删除")])],1)],1)],1)])},n=[],l={name:"htcf",data:function(){return{formInline:{user:"",region:""},tableData1:[{date:"2016-05-03",name:"王小2222222222222222222虎",province:"上海市普陀区金沙江路 1518 弄",id:"1"},{date:"2016-05-02",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"2"},{date:"2016-05-04",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"3"},{date:"2016-05-01",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"4"},{date:"2016-05-08",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"5"},{date:"2016-05-06",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"6"},{date:"2016-05-07",name:"王小虎",province:"上海市普陀区金沙江路 1518 弄",id:"7"}],tableData2:[{date:"2016-05-03",name:"王小222222222222222222虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}},methods:{onSubmit:function(){alert("submit!")},zht:function(t){document.getElementById("ht_right").innerHTML=t.id}}},r=l,d=(a("8cd7"),a("2877")),o=Object(d["a"])(r,i,n,!1,null,null,null);e["default"]=o.exports},"8cd7":function(t,e,a){"use strict";var i=a("dfd4"),n=a.n(i);n.a},dfd4:function(t,e,a){}}]);