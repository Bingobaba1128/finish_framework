<template>
  <div class="child1">
    <el-table
      :data="approveContentlist"
      :border="true"
      highlight-current-row
      max-height="500"
      style="width: 100%"
      :row-style="{height:'20px'}"
      :cell-style="{padding:'0px'}"
    >
      <el-table-column type="index" label="序号" align="center"></el-table-column>
      <el-table-column property="approveNo" label="审批单号" align="center" width="180"></el-table-column>
      <el-table-column property="relateNo" label="待审批单号" align="center" width="120"></el-table-column>
      <el-table-column property="approveStyle" label="标题" align="center" width="120"></el-table-column>
      <el-table-column property="applyPerson" label="申请人" align="center" width="120"></el-table-column>
      <el-table-column property="startTime" label="申请时间" align="center" width="160"></el-table-column>
      <el-table-column property="state" label="状态" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.state==0?"待审批":""}}</span>
        </template>
      </el-table-column>
      <el-table-column label="驳回原因" align="center" width="180">
        <template slot-scope="scope">
          <span>
            <el-input autocomplete="off" v-model="scope.row.reason" type="text" min="0"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column property="address" label="操作" align="center" width="260">
        <template slot-scope="scope">
          <el-button @click.native="editorClick(scope.row)" type="warning" size="mini" style="margin:2px;">查看详情</el-button>
          <el-button @click.native="approvalClick(scope.row)" type="primary" size="mini">通过</el-button>
          <el-button @click.native="rejectClick(scope.row)" type="danger" size="mini">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import * as spApi from "@/api/approvalApi.js";
// import querystring from "querystring";

export default {
  name: "child1",
  data() {
    return {
      approveContentlist: [],
    };
  },
  // methods: {
  //   // 查看审批内容（按照条件）
  //   approveContent() {
  //     let id = sessionStorage.getItem("id")
  //     let _data = {
  //       condition:
  //         "where approvePersonId='"+id+"' and state=0 and orderNo!=1 order by startTime desc"
  //         // "where approvePersonId='10003' and state=0 and orderNo!=1 order by startTime desc"
  //         // "where approvePersonId='1129118' and state=0 and orderNo!=1 order by startTime desc"
  //     };
  //     spApi
  //       .getApproveContent(querystring.stringify(_data))
  //       .then(res => {
  //         this.approveContentlist = res.data;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   },
  //   // 审批通过
  //   approvalClick(row) {
  //     // console.log(row)
  //     let _data = {
  //       approveNo: row.approveNo,
  //       personId: row.approvePersonId,
  //       no: row.no,
  //     };
  //     spApi
  //       .getApprovePass(querystring.stringify(_data))
  //       .then(res => {
  //         this.$message({ message: res.msg, duration: 1500 });
  //         this.approveContent();
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   },
  //   // 审批驳回 getApproveReject
  //   rejectClick(row) {
  //     // console.log(row.reason);
  //     if (row.reason !== "") {
  //       let _data = {
  //         approveNo: row.approveNo,
  //         personId: row.approvePersonId,
  //         reason: row.reason,
  //         no:row.no,
  //       };
  //       spApi
  //         .getApproveReject(querystring.stringify(_data))
  //         .then(res => {
  //           // console.log(res);
  //           this.$message({ message: res.data, duration: 1500 });
  //           this.approveContent();
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     } else {
  //       this.$message({ message: "请填写驳回原因", duration: 1500 });
  //     }
  //   }
  // },
  // mounted() {
  //   // let id = JSON.parse(sessionStorage.getItem('id'));
  //   // this.id = id;
  //   this.approveContent();
  // }
};
</script>