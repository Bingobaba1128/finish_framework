<template>
    <div class="header">
        <div class="header-left">
            <div class="logo">
                <img  :src="imgUrl">
            </div>
            <div class="root header_text" @click="backToConsole">
                工作台
            </div>
            <!-- <div style="position:relative"> -->
               <div class="root header_text" @click="toHrSystem">
                    人事管理
                </div> 
            <!-- </div> -->
            
            <div class="expanded" v-show="true" style="align-item:center">
                <div class="system-list header_text" 
                    v-for="(item, index) in nav"
                    :key="index"
                    @click="routerLink(index, item)">
                    <li class="list_style" style="list-style-type:none;">
                        <p :class="navIndex === index ? 'active list' : ''">
                            {{ item.name }}
                        </p>
                    </li>
                </div>               
            </div>    
        </div>

        <div class="header-right">
            <div class="header-user-con">
                
            <el-dropdown class="flex-header-div" v-show='true'>
                    <span class="el-dropdown-link" style="color:#4D96F4">
                        {{showCompanyName}}
                    </span>
                </el-dropdown>

            

            <el-dropdown class="flex-header-div" style="display:flex">
                <!-- <div class="user-avator">
                    <div class="el-icon-s-custom"></div>
                </div> -->
                欢迎您，
                <span class="el-dropdown-link" style="color:#4D96F4">
                    {{ user.nickname }}
                </span>
            </el-dropdown>

            <div class="flex-header-div">
                <img  :src="imgCompany" style="width:23%">
                <el-dropdown  trigger="click" @command="handleCommand" >
                    <span class="el-dropdown-link header_text" style="color:#666666">
                        切换公司
                        <i class="el-icon-caret-bottom"></i>
                        <el-dropdown-menu slot="dropdown" class="user-dropdown" >
                            <el-dropdown-item v-for="(company) in companyNewDetail" 
                                :key="company.authority" 
                                :command="{id:company.id,authority:company.authority,name:company.displayName}">
                                <span style="display:block;" >{{company.displayName}}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </span>
                </el-dropdown>
            </div>

                <div class="flex-header-div btn-message" >
                    <el-tooltip>
                        <i class="el-icon-message" style="color:#666666"></i>
                    </el-tooltip>
                    <span class="btn-message-badge" style="color:#666666">消息</span>
                </div>

                <div class="flex-header-div btn-logout" @click="userLogout">
                    <i class="el-icon-switch-button" style="color:#666666" ></i>
                    <span style="color:#666666">退出</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../../utils/bus';
    import * as api from '../../api/api.js';
    import querystring from "querystring";
    import imgUrl from "../../assets/img/nav_logo.png"
    import imgCompany from '../../assets/img/icon_company.png'

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
                companyName:'',
                companyNewDetail:[],
                switchCompany: this.$store.displayName,
                imgUrl:imgUrl,
                imgCompany:imgCompany

            };
        },

        computed:{
            // ...mapState({
            //     companyList: state => state.companyDetail,
            // }),

        },
        methods: {
            collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                this.showSublist = !this.showSublist;
            },
            userLogout() {
                // this.$token.deleteToken();
                // this.$router.redirect('http://120.78.186.60:8087/logout') 
                // this.$token.deleteToken();
                //     window.location.href = "http://120.78.186.60:8087/logout"; 
                this.$router.push('/logout') 
            },
            routerLink(index, route) {
                this.navIndex = index;
                let key = Object.keys(route)
                if(key[1] == 'path'){
                   this.$router.push(route[key[1]]) 
                }
            },
            checkRouterLocal(path) {
                this.navIndex = this.nav.findIndex(item => item.path === path);
            },
            mapSystem(targetId) {
                let list = []
                let companyAuth = this.user.authorities.filter((auth) =>{
                    return auth.parentId == targetId
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
                        let path = '/clothSystem'
                        obj['path'] = path                        
                        list.push(obj)
                    }
                    else {
                        let redirect = 'www.baidu.com'
                        obj['redirect'] = redirect
                        list.push(obj)  
                    }
                })
                return list
            },
            saveToken(auth) {
                this.$token.saveSelectedCompany(auth);
            }
            ,
            handleCommand(command) {
                this.showCompanyName = command.name;
                this.saveToken(command.authority)
                this.nav = this.mapSystem(command.id)
            },
            backToConsole() {
                this.$router.push('/dashboard') 
            },
            toHrSystem() {
                this.$router.push('/hrSystem') 
            }

        },
        watch: {
            "$route"() {
                let path = this.$route.path;
                this.checkRouterLocal(path);
                // if(to.name === 'sale') {
                //     this.switchCompany = false
                // }
            }
            
// watch: {
//     '$route' (to, from) {
//       if (to.name === 'home') {
//         // something
//       } else if (to.name === 'detail') {
//         // something
//       }
//     }

        },

        mounted: function() {
            api.getUserInfo(this.$token.loadToken(),this.$ajax)
                .then(res => {
                    this.user = res.data;
                    this.$token.saveUserInfo(this.user);
                    // this.$store.dispatch("addUser",this.user)
                    //test
                    this.user.authorities.map( (item) => {
                        if(item.parentId == '0'){
                            this.companyNewDetail.push(item)
                        }
                    })
                    if(this.companyNewDetail.length == 1){
                        this.showCompanyName = this.companyNewDetail[0].displayName
                        this.saveToken(this.companyNewDetail[0].authority)
                        this.nav = this.mapSystem(this.companyNewDetail[0].id)
                    }
            
                    //test
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
        box-shadow: 0 0 3px 0 #F2F2F3;
    }
    .flex-header-div {
        text-align: center;
        height: 70px;
        display: flex;
        align-items: center;
    }
    .header-left {
        float: left;
        display: flex;
        color:#4D96F4
    }
    .header_text {
        color: #666666;
    }
    .header_text :active {
        color: #4D96F4;
    }
    .collapse-btn {
        cursor: pointer;
        line-height: 70px;
        order:2
    }
    .header .logo {
        float: left;
        width: 200px;
        line-height: 70px;
        background-color: #0A1420;
        position: relative;
    }
    .header .logo img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .header-right {
        float: right;
        color:#4D96F4
    }
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
        width: 500px;
        justify-content: space-around;
    }

    .expanded{
        margin-left: -20px;
        order:3;
        display: flex;
        position: relative;
    }
    .root {
        cursor: pointer;
        order: 1;
        padding:20px 30px;

    }

    .system-list {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        position: relative;
    }


    .btn-message {
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .btn-message-badge {
        width: 60px;
        border-radius: 4px;
        color: #fff;
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
        cursor: pointer;
    }

    .el-icon-s-fold {
        transform: translateX(500px)
    }

    .active{color:#409eff;}

    .list_style::before {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 100%;
        border-bottom: 4px solid #409eff;
        transition: 0.2s all linear;
    }
 
    .list_style:hover::before {
        width: 100%;
        left: 0;
    }
    
    .list_style:hover ~ .list_style::before {
        left: 0;
    }

</style>
