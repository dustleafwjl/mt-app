<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="/"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>账号登录</span>
                </p>
                <el-input :class="{'error': !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input :class="{'error': !password}" v-model="password" type="password" placeholder="密码" prefix-icon="password"></el-input>
                <p class="foot">
                    <a>忘记密码?</a>
                </p>
                <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link :to="{name: 'register'}" >免费注册</router-link>
                </p>
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>
<script>
import api from '@/api/index.js'

export default {
    data() {
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit() {
            this.error = '';
            if(!this.userName) {
                this.error = '请输入账号';
                return;
            }
            if(!this.password) {
                this.error = '请输入密码'
                return;
            }
            api.login({
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).then( res => {
                if(res.data.status == "success") {
                    this.$router.push({name: 'index'});
                    this.$store.commit('setUserName', this.userName);
                }else {
                    this.error = res.data.msg;
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss"
</style>