<template>
    <div class="">
        
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`待审批(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="true" style="width: 100%">
                        <el-table-column prop="date" width="180" label="发送日期"></el-table-column>
                        <el-table-column label="标题">
                            <template v-slot="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="author" width="180" label="发送人"></el-table-column>
                    </el-table>
                </el-tab-pane>

                <el-tab-pane :label="`已审批(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" style="width: 100%">
                            <el-table-column prop="date" width="180" label="发送日期"></el-table-column>
                            <el-table-column label="标题">
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="author" width="180" label="发送人"></el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>

                <el-tab-pane :label="`发起审批`" name="third">
                    <template v-if="message === 'third'">
                            <el-table-column prop="date" width="180" label="发送日期"></el-table-column>
                            <el-table-column label="标题">
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="author" width="180" label="发送人"></el-table-column>
                    </template>
                </el-tab-pane>

                <el-tab-pane :label="`抄送`" name="forth">
                    <template v-if="message === 'forth'">
                            <el-table-column prop="date" width="180" label="发送日期"></el-table-column>
                            <el-table-column label="标题">
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="author" width="180" label="发送人"></el-table-column>
                    </template>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: true,
                unread: [{
                    date: '2020-05-09 20:00:00',
                    title: '【审批】韶关市北江制造 销售部-业务员 好优秀 的内销合同已提交，请您审批',
                    author: '财务部业务主管-郑智'
                },{
                    date: '2020-05-08 22:00:00',
                    title: '【审批】越南纺织成衣 战略销售部-总监 白云 的调版单已提交，请您审批',
                    author: '财务部业务主管-郑智'
                }],
                read: [{
                    date: '2020-05-09 19:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
</style>