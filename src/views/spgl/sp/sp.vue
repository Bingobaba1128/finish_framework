<template>
  <div class="tab">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="待我审批" name="child1">
      </el-tab-pane>
      <el-tab-pane label="我已审批" name="child2">
      </el-tab-pane>
      <el-tab-pane label="我发起的" name="child3">
      </el-tab-pane>
      <el-tab-pane label="抄送我的" name="child4">
      </el-tab-pane>
    </el-tabs>
    <!-- <keep-alive> -->
      <component v-bind:is="currentTabComponent"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import child1 from "../tab/child1";
import child2 from "../tab/child2";
import child3 from "../tab/child3";
import child4 from "../tab/child4";

export default {
  components: {
    child1: child1,
    child2: child2,
    child3: child3,
    child4: child4,
  },
  name: "sp",
  data() {
    return {
      activeName: "child1",
      currentTabComponent: child1
    };
  },
  methods: {
    handleClick(){
      this.currentTabComponent = this.activeName;
    }
  }
};
</script>

<style scoped>
.tab .el-tabs .el-tab-pane{
  color: #fff;
}
</style>