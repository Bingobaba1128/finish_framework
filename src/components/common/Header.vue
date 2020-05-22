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
                    @click="routerLink(index, item)">
                    <p :class="navIndex === index ? 'active' : ''">
                        {{ item.name }}
                    </p>
                </div>
                
            </div>
            
            
        </div>

        <div class="header-right">
            <div class="header-user-con">
            <el-dropdown class="user-name" v-show='true'>
                    <span class="el-dropdown-link">
                        {{showCompanyName}}
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

                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        切换公司
                        <i class="el-icon-caret-bottom"></i>
                        <el-dropdown-menu slot="dropdown" class="user-dropdown" >
                            <el-dropdown-item v-for="(company) in companyList" 
                                :key="company.authority" 
                                :command="{id:company.id,authority:company.authority,name:company.displayName}">
                                <span style="display:block;" >{{company.displayName}}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </span>
                </el-dropdown>

                <div class="btn-message">
                    <el-tooltip>
                        <i class="el-icon-message"></i>
                    </el-tooltip>
                    <span class="btn-message-badge">消息</span>
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
    import * as api from '../../api/api.js';
    import { mapState, mapGetters } from 'vuex';
    import querystring from "querystring";


    export default {
        data() {
            return {
                collapse: false,
                name: 'Admin',
                showSublist: false,
                user: '',
                showCompanyName:'',
                nav: '',
                navIndex: -1,
                companyName:''
            };
        },

        computed:{
            ...mapState({
                companyList: state => state.companyDetail,
                
            }),
            ...mapGetters ([
                
            ]),
        },
        methods: {
            collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                this.showSublist = !this.showSublist;
            },
            userLogout() {
                this.$token.deleteToken();
                    var authorUrl = this.$config.userAuthorizationUri;
                    authorUrl = authorUrl + ('?' + this.$querystring.stringify({
                    client_id:this.$config.clientId,
                    response_type:this.$config.response_type,
                    state:this.$config.code,
                    redirect_uri:this.$config.redirect_uri, 
                    }))
                    window.location.href = authorUrl; 
            },
            routerLink(index, route) {
                this.navIndex = index;
                let key = Object.keys(route)
                if(key[1] == 'path'){
                   this.$router.push(route[key[1]]) 
                }
                if (key[1] == 'redirect') {
                    window.location.href = route[key[1]]
                } 
            },
            checkRouterLocal(path) {
                this.navIndex = this.nav.findIndex(item => item.path === path);
            },
            handleCommand(command) {

                let list = []
                this.showCompanyName = command.name;
                this.$token.saveSelectedCompany(command.authority);
                let companyAuth = this.user.authorities.filter((auth) =>{
                    return auth.parentId == command.id
                })
                companyAuth.map(item => {
                    let obj = {}
                    obj['name'] =item.displayName 
                    if(item.displayName == '销售系统'){
                        let path = '/saleSystem'
                        obj['path'] = path                        
                        list.push(obj) 
                        //知道这个角色有销售系统授权，自动发给后端所选公司信息
                        var tokenInfo = this.$token.loadToken();
                        let data = {
                            employeeId: tokenInfo.employeeId,
                            employeeName: tokenInfo.employeeName,
                            contractBody: tokenInfo.contractBody,
                            gsCode: tokenInfo.gsCode
                        };
                        api
                        .autologin(querystring.stringify(data),this.$ajax)
                        .then(res => {
                            window.console.log(res)
                        if (res.code == 305) {
                            this.$message({ message: res.msg, duration: 2000 });
                        }
                        if (res.code == 200) {
                            window.console.log('passing the session to backend success')
                        }
                        })
                        .catch(err => {
                        window.console.log(err);
                        });
 
                    }
                    else if(item.displayName == '成衣ERP') {
                        let redirect = 'http://120.78.186.60:8081'
                        obj['redirect'] = redirect
                        list.push(obj)  
                    }
                    else {
                        let redirect = 'www.baidu.com'
                        obj['redirect'] = redirect
                        list.push(obj)  
                    }
                })
                this.nav = list

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
                    this.$token.saveUserInfo(this.user);

                    this.$store.dispatch("addUser",this.user)
                    this.nickname = this.user.nickname
                });
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
