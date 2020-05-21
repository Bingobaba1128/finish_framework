<template>
    <div>
        审批模块
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon:'',
                        index:"待审批",
                        count:'250',
                        getRes:''
                    },
                    {
                        icon:'',
                        index:"已审批",
                        count:'120',
                        getRes:''
                    },
                    {
                        icon:'',
                        index:"审批驳回",
                        count:'110',
                        getRes:''
                    }
                ]
            }
        }
    }
</script>

<style>

</style>