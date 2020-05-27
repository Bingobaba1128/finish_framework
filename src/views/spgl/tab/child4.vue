<template>
  <div class="child4">
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
      <el-table-column property="approveNo" label="审批单号" align="center"></el-table-column>
      <el-table-column property="relateNo" label="审批单号" align="center"></el-table-column>
      <el-table-column property="approveStyle" label="标题" align="center"></el-table-column>
      <el-table-column property="applyPerson" label="申请人" align="center"></el-table-column>
      <el-table-column property="startTime" label="申请时间" align="center" width="180"></el-table-column>
      <el-table-column property="state" label="状态" align="center">
          <template slot-scope="scope">
              <span>
                  {{scope.row.state ==4?"已抄送":""}}
              </span>
          </template>
      </el-table-column>
      <el-table-column property="address" label="操作" align="center" width="180">
        <template slot-scope="scope">
          <el-button @click.native="editorClick(scope.row)" type="warning" size="mini" style="margin:2px;">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as spApi from "@/api/approvalApi.js";
import querystring from "querystring";

export default {
  name: "child4",
  data() {
    return {
      approveContentlist: []
    };
  },
  methods: {
    // 查看审批内容（按照条件）
    approveContent() {
      let id = sessionStorage.getItem("id")
      let _data = {
          condition:"where approvePersonId='"+id+"' and state=4 and orderNo!=1 order by startTime desc"
          // condition:"where approvePersonId='1129118' and state=4 and orderNo!=1 order by startTime desc"
      };
      spApi
        .getApproveContent(querystring.stringify(_data))
        .then(res => {
          this.approveContentlist = res.data;
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  mounted() {
    let id = JSON.parse(sessionStorage.getItem('id'));
    this.id = id;
    this.approveContent();
  }
};
</script>