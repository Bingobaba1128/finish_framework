(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e5d150a"],{"26c5":function(t,e,a){},"7cde":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warehouse"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"入库细码单"}},[a("el-input",{attrs:{placeholder:"请输入单号"},model:{value:t.XMD,callback:function(e){t.XMD=e},expression:"XMD"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.yardSingleSearch(e)}}},[t._v("查询")])],1)],1),a("el-form",{staticClass:"demo-ruleForm",attrs:{inline:!0,"label-width":"82px",model:t.fourList}},[a("el-form-item",{attrs:{label:"合同单号:"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fourList.contractNo,callback:function(e){t.$set(t.fourList,"contractNo",e)},expression:"fourList.contractNo"}})],1),a("el-form-item",{attrs:{label:"生产单号:"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fourList.produceNo,callback:function(e){t.$set(t.fourList,"produceNo",e)},expression:"fourList.produceNo"}})],1),a("el-form-item",{attrs:{label:"布编号:"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fourList.clothId,callback:function(e){t.$set(t.fourList,"clothId",e)},expression:"fourList.clothId"}})],1),a("el-form-item",{attrs:{label:"缸号:"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fourList.gangHao,callback:function(e){t.$set(t.fourList,"gangHao",e)},expression:"fourList.gangHao"}})],1)],1),a("el-form",{staticClass:"demo-ruleForm",attrs:{inline:!0}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"匹条存放位置:"}},[a("el-select",{attrs:{disabled:t.disabled1},on:{change:t.depositClick1},model:{value:t.factList1.fact,callback:function(e){t.$set(t.factList1,"fact",e)},expression:"factList1.fact"}},t._l(t.factList1,(function(e){return a("el-option",{key:e.value,attrs:{value:e.fact}},[t._v(t._s(e.fact))])})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"布存放位置:"}},[a("el-select",{attrs:{disabled:t.disabled1},on:{change:t.depositClick2},model:{value:t.factList2.fact,callback:function(e){t.$set(t.factList2,"fact",e)},expression:"factList2.fact"}},t._l(t.factList2,(function(e){return a("el-option",{key:e.value,attrs:{value:e.fact}},[t._v(t._s(e.fact))])})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"备注:"}},[a("el-input",{attrs:{type:"textarea",resize:"none",disabled:t.disabled1},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("div",[a("el-button",{attrs:{type:"primary",disabled:t.disabled2},nativeOn:{click:function(e){return t.yardSingleSubmit(e)}}},[t._v("提交")]),a("el-button",{attrs:{type:"success"},nativeOn:{click:function(e){return t.yardSingleReset(e)}}},[t._v("重置")])],1)]),a("el-table",{staticClass:"grnTable",staticStyle:{width:"100%"},attrs:{border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"},"max-height":"300",data:t.singleCodeList}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{property:"jNo",label:"卷号",align:"center"}}),a("el-table-column",{attrs:{property:"maQuanity",label:"码数",align:"center"}}),a("el-table-column",{attrs:{property:"lot",label:"LOT",align:"center"}}),a("el-table-column",{attrs:{property:"cangku",label:"卡位",align:"center"}}),a("el-table-column",{attrs:{property:"ptcangku",label:"匹条",align:"center"}})],1)],1)},n=[],i=a("ff5c"),o=(a("5ee4"),{data:function(){return{XMD:"",fourList:{},singleCodeList:[],factList1:{},factList2:{},disabled1:!1,disabled2:!1,remarks:"",pending:"",stateSelect:"",value1:"",value2:"",value3:"",value4:""}},methods:{depositClick1:function(t){for(var e=t,a=0;a<this.singleCodeList.length;a++)Object.assign(this.singleCodeList[a],{cangku:e})},depositClick2:function(t){for(var e=t,a=0;a<this.singleCodeList.length;a++)Object.assign(this.singleCodeList[a],{ptcangku:e})},p:function(t){return t<10?"0"+t:t},yardSingleSubmit:function(){for(var t=this,e=new Date,a=e.getFullYear()+"-"+this.p(e.getMonth()+1)+"-"+this.p(e.getDate()),s=this.p(e.getHours())+":"+this.p(e.getMinutes())+":"+this.p(e.getSeconds()),n=a+"-"+s,o=0;o<this.singleCodeList.length;o++)Object.assign(this.singleCodeList[o],{inDate:n,inPerson:"10001",no:o+1,remarks:this.remarks});var r=this.singleCodeList;"1"==this.pending?i["f"](r).then((function(e){200==e.code?(t.$message({message:"入库成功",duration:2e3}),t.pending="1",t.yardSingleSearch()):t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)})):(console.log("编辑"),i["e"](r).then((function(e){200==e.code?(t.$message({message:"提交成功",duration:2e3}),t.yardSingleSearch()):t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)})))},yardSingleReset:function(){this.singleCodeList=JSON.parse(JSON.stringify(this.defaultList1)),this.fourList=JSON.parse(JSON.stringify(this.defaultList2)),this.$set(this.factList1,"fact",""),this.$set(this.factList2,"fact",""),this.remarks="",xmdList.XMD=""},yardSingleSearch:function(){var t=this;this.pending="",this.disabled1=!1;var e={XMD:this.XMD};i["a"](e).then((function(e){if(200==e.code){t.warehouseScreens1(),t.warehouseScreens2();var a=e.data[0],s=a.contractNo,n=a.gangHao,i=a.clothId,o=a.produceNo,r=(a.cangku,a.state);t.$set(t.fourList,"contractNo",s),t.$set(t.fourList,"gangHao",n),t.$set(t.fourList,"clothId",i),t.$set(t.fourList,"produceNo",o),"2"==r?(t.disabled1=!0,t.disabled2=!0):"0"==r?(t.pending="1",t.disabled1=!1,t.disabled2=!1):"1"==r&&(t.disabled1=!1,t.disabled2=!1),t.stateSelect=r,t.singleCodeList=e.data}else t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)}))},warehouseScreens1:function(){var t=this,e={condition:"1=1",symbol:"1"};i["b"](e).then((function(e){t.factList1=e.data})).catch((function(t){console.log(t)}))},warehouseScreens2:function(){var t=this,e={condition:"1=1",symbol:"0"};i["b"](e).then((function(e){t.factList2=e.data})).catch((function(t){console.log(t)}))}},created:function(){this.defaultList1=JSON.parse(JSON.stringify(this.singleCodeList)),this.defaultList2=JSON.parse(JSON.stringify(this.fourList))},mounted:function(){this.XMD=sessionStorage.getItem("XMD")}}),r=o,l=(a("ab11"),a("4023")),c=Object(l["a"])(r,s,n,!1,null,"709ededd",null);e["default"]=c.exports},ab11:function(t,e,a){"use strict";var s=a("26c5"),n=a.n(s);n.a},ff5c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"g",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"i",(function(){return u})),a.d(e,"j",(function(){return d})),a.d(e,"h",(function(){return f})),a.d(e,"c",(function(){return g}));var s=a("751a"),n=function(t){return Object(s["a"])({url:"/ERP/selectruKuXMD",method:"get",params:t})},i=function(t){return Object(s["a"])({url:"/ERP/selectkeyong",method:"get",params:t})},o=function(t){return Object(s["a"])({url:"/ERP/addstorageInn",method:"post",data:t})},r=function(t){return Object(s["a"])({url:"/ERP/editstorageInn",method:"post",data:t})},l=function(t){return Object(s["a"])({url:"/ERP/loadChukuQueRen",method:"post",data:t})},c=function(t){return Object(s["a"])({url:"/ERP/chukuStorageOut",method:"post",data:t})},u=function(t){return Object(s["a"])({url:"/ERP/chuku",method:"post",data:t})},d=function(t){return Object(s["a"])({url:"/ERP/editstorageOutState",method:"post",data:t})},f=function(t){return Object(s["a"])({url:"/ERP/selStorageShow",method:"post",data:t})},g=function(t){return Object(s["a"])({url:"/ERP/shishishow",method:"get",params:t})}}}]);