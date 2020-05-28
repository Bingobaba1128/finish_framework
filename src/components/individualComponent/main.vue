<template>
    <div class="main">
        <div @click="openMask">打开弹窗</div>
        <dialog-bar v-show="sendVal"
            value="sendVal" 
            type="danger" 
            title="我是标题" 
            content="审批信息" 
            @cancel="clickCancel()"
            @danger="clickDanger()" 
            @confirm="clickConfirm()" 
            dangerText="Delete">
        </dialog-bar>
    </div>
</template>
<script>
import dialogBar from './dialog.vue'
export default {
   components:{
        dialogBar,
    },
    data(){
        return{
            sendVal: false,
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            this.$message({
                message: '操作已取消',
                type: 'warning'
            });
        },
        clickDanger(){
            this.$message({
                message: '审批已被驳回',
                type: 'error'
            });
        },
        clickConfirm(){
            this.$message({
                message: '审批已通过',
                type: 'success'
            });
        }
    }
}
</script>
<style lang="less" scoped>

</style>

