<template>
    <div class="header">
        <div class="header-left">
            <div class="collapse-btn" @click="collapseChage">
                <i v-if="!collapse" class="el-icon-s-unfold"></i>         
                <i v-else class="el-icon-s-fold"></i>  
            </div>
            <div class="root">
                系统选择
                
            </div>
            <div class="expanded" v-show="showSublist">
                <div class="system-list" 
                    v-for="(item, index) in nav"
                    :key="index"
                    @click="routerLink(index, item.path,item.redirect)">
                    <p :class="navIndex === index ? 'active' : ''">
                        {{ item.title }}
                    </p>
                </div>
                
            </div>
            
            
        </div>

        <div class="header-right">
            <div class="header-user-con">
            <el-dropdown class="user-name" v-show="this.$store.state.showCompany">
                    <span class="el-dropdown-link">
                        北江股份有限公司
                    </span>
                </el-dropdown>
                            <div class="user-avator">
                    <div class="el-icon-s-custom"></div>
                </div>

                

                <el-dropdown class="user-name">
                    <span class="el-dropdown-link">
                        {{ user.nickname }}
                    </span>
                </el-dropdown>

                <el-dropdown class="user-name" trigger="click">
                    <span class="el-dropdown-link">
                        切换公司
                        <i class="el-icon-caret-bottom"></i>
                        <el-dropdown-menu slot="dropdown" class="user-dropdown">
                            <el-dropdown-item v-for="(company,index) in companyList" :key="index" :command="company" >
                                <span style="display:block;" @click="clickme">{{company.name}}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </span>
                </el-dropdown>

                <div class="btn-message">
                    <el-tooltip>
                        <i class="el-icon-message"></i>
                    </el-tooltip>
                    <span class="btn-message-badge" @click="clickToGet">消息</span>
                </div>

                <div class="btn-logout" @click="userLogout">
                    <i class="el-icon-switch-button"></i>
                    <span>退出</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../../utils/bus';
    import * as api from '../../api/api.js'

    export default {
        data() {
            return {
                collapse: false,
                name: 'Admin',
                showSublist: false,
                companyList: [
                    {name: '北江股份',ID: '110'},
                    {name: '北纺科技',ID: '111'},
                    {name: '越南北江',ID: '112'},
                    {name: '北纺进出口',ID: '113'},
                    {name: '香港北江',ID: '114'},
                ],
                user: {
                    id:'',
                    nickname:'',
                    authorities:''
                },
                nav: [
                    {title:'成衣系统',redirect:'http://120.78.186.60:8081'},
                    {title:'销售系统',path:'/saleSystem'},
                    {title:'人资管理系统',path:'/HrManagement'},
                    {title:'财务系统',redirect:'http://120.78.186.60:8080/caiwu/login'}
                ],
                navIndex: -1
            };
        },

        methods: {
             collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                this.showSublist = !this.showSublist;
            },
            clickme(){
                this.$store.dispatch("showCompanyName")
            },
            userLogout() {
                this.$token.deleteToken();
                var logouturi = "http://127.0.0.1:8080/login";
                
                window.location.href = logouturi;
                this.$router.push('/login')
            },
            routerLink(index, path,redirect) {
                this.navIndex = index;
                if(path){
                   this.$router.push(path) 
                } 
                if (redirect) {
                    window.location.href = redirect
                }
                
            },
            checkRouterLocal(path) {
                this.navIndex = this.nav.findIndex(item => item.path === path);
            },
            clickToGet() {
                this.$store.dispatch("getCompanyList")

            }
        },
        watch: {
            "$route"() {
                let path = this.$route.path;
                this.checkRouterLocal(path);
            }
        },

        mounted: function() {
            api.getUserInfo(this.$token.loadToken(),this.$ajax)
                .then(res => {
                    this.user = res.data;
                    this.$store.dispatch("addUser",this.user)
                    this.nickname = this.user.nickname
                });
            // this.$store.dispatch("getCompanyList")
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .header-left {
        float: left;
        display: flex;
        padding-left:20px;
    }
    .collapse-btn {
        cursor: pointer;
        line-height: 70px;
        order:2
    }
    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }
    .header-right {
        float: right;
    }
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }

    .expanded{
        margin-left: -20px;
        order:3;
        display: flex
    }
    .root {
        order: 1;
                padding:20px 6px;

    }

    .system-list {
        padding:20px 6px;
        cursor: pointer;
    }
    .system-list :hover {
        background-color: #409eff;
        border: 1px solid #dcdfe6;
        transform: translateY(5px)
    }

    .btn-message {
        position: relative;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        margin-left:10px;
        cursor: pointer;
    }
    .btn-message-badge {
        width: 60px;
        height: 8px;
        border-radius: 4px;
        color: #fff;
    }

    .user-name {
        margin-left: 10px;
    }
    .user-avator {
        margin-left: 20px;
    }
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }

    .el-icon-message {
        color:white
    }

    .btn-logout {
        margin: 0 10px;
        cursor: pointer;

    }

    .el-icon-s-fold {
        transform: translateX(500px)
    }

    .active{color:red;}
</style>
