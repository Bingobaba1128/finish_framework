<template>

    <div class="sidebar" v-show="!collapse">
        <div class="logo"> 
            <img src="" alt="">
        </div>

        <div class="sidebarTitle">
            <p>韶关面料</p>
        </div>
        

        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color= '#fffff'
            text-color="#8B8B8C"
            active-text-color="#5476DA"
            unique-opened
            router
        >


            <template v-for="item in items">

                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>

                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >

                                <template slot="title">{{ subItem.title }}</template>

                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>


                            </el-submenu>

                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>

                        </template>
                    </el-submenu>
                </template>

                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item> 
                </template>


            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../../utils/bus';

    export default {
        data() {
            return {
                saleMenu:[
                    {
                        icon: 'el-icon-rank',
                        index: 'saleManagement',
                        title: '销售管理',
                        role: ['erp_v:jczl'],
                        subs: [
                            {
                                index: 'orderInform',
                                title: '预期订单通知'
                            },
                            {
                                index: 'applyForm',
                                title: '计板移仓申请单'
                            },
                            {
                                index: 'saleStats',
                                title: '销售统计'
                            }
                        ]
                    }
                ],
                productMenu:[
                    {
                        icon: 'el-icon-folder',
                        index: 'productManege',
                        title: '产品管理',
                        role: ['erp_v:yw'],
                        subs: [
                            {
                                index: 'productList',
                                title: '产品目录'
                            },
                            {
                                index: 'quotation',
                                title: '报价单'
                            }
                        ]
                    }
                ],
                publicMenu:[
                    {
                        icon: 'el-icon-lx-home',
                        index: 'console',
                        title: '工作台'
                    }
                ],
                collapse: false,
                items:[]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            },
            selectMenu() {
                return true
            }
        },
        created() {
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });     
        }
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom: 0;
        overflow-y: scroll;
    }
    
    .sidebar .logo {
        background-color:#5476DA;
        height: 140px;
        width: 250px;
    }

    .sidebarTitle {
        background-color: #ffffff;
        height: 70px;
        position:relative;
    }

    .sidebarTitle > p {
        color:#B8B8B8;
        position: absolute;
        bottom: 0;
        margin-left: 20px;
        left: 0;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }

    .el-menu .el-menu--inline {
        background-color: red
    }

</style>