<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">北江纺织后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-s-custom"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-key"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips"></p>
            </el-form>
        </div>
    </div>
</template>

<script>
//import {doLogin} from '../../api/login.js'

export default {
    data: function() {
        return {
            
        };
    },
    methods: {
        submitForm() {
            // var token = 'beef822d-2e61-40b6-aff5-7f0a824735f2'       
            // doLogin(token).then((res) => {
            //         res = res.data
            //         window.console.log(res)
            //     }).catch((error) => {
            //         window.console.warn(error)
            //     })
            
            window.location.href = 'http://120.78.186.60:8087/oauth/authorize?client_id=erp_v&redirect_uri=http://192.168.137.98:8080&response_type=code&state=123'

        },    
    },
};
</script>

<style>
</style>
