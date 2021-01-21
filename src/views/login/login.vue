<template>  
  <div class="login" v-loading="loading">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login_form">
      <!-- <el-image style="width: 450px;" :src="require('../../assets/img/logo-white.png')"></el-image> -->
      <h1>商家好评网站后台管理系统</h1>
      <el-form-item prop="acc">
        <el-input v-model="loginForm.acc" placeholder="请输入用户名">
          <svg-icon slot="prefix" value="icon-yonghuming"></svg-icon>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="loginForm.pwd" placeholder="请输入密码" show-password>
          <svg-icon slot="prefix" value="icon-mima"></svg-icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login_btn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import type from '../../commons/type';
export default {
  data(){
    return{
      loading:false, //加载
      loginForm:{
        acc:null,
        pwd:null
      },
      rules: {
        acc: [
          { required: true, message: '请输入有效的用户名', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入有效的密码', trigger: 'blur' },
        ],
      }
    }
  },
   created() {
     this.handleCheckToken();
  },
  methods:{
    /**
     * 登录
     */
    login(){
      this.$refs.loginForm.validate((valid)=>{
        if(valid){
          this.backstageLogin();
        }else{
          return;
        }
      })
    },
    /**
     * 后台登录
     */
    backstageLogin(){
      this.loading=true;
          this.$apiHttp.getProcessDetails(this.loginForm).then((resp)=>{
            if(resp.res==200){
              localStorage.setItem(type.USER, JSON.stringify(resp.data));
              this.$store.dispatch("login", resp.data.token);
              this.$router.push({
                path: "/home"
              });
            }
            this.loading=false;
          })
    },
    /**
     * 后台验证Token
     */
    handleCheckToken() {
      if (localStorage.getItem(type.TOKEN) && localStorage.getItem(type.USER)) {
        this.$router.push({
          path: "/home"
        })
      }
    },
  }
}
</script>
<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .login_form{
    max-width: 510px;
    margin: 0 auto;
    padding: 140px 35px 0;
    text-align: center;
    /deep/.el-form-item{
      .el-input__inner{
        background: rgba(0,0,0,.1);
        border: 1px solid hsla(0,0%,100%,.1);
        border-radius: 5px;
        height: 50px;
        color: #fff;
        padding-left: 35px;
      }
      .el-input__prefix{
        line-height: 50px;
        width: 20px;
        padding-left: 5px;
      }
    }
    .login_btn{
      width: 100%;
    }
    h1{
      color: #fff;
      margin-bottom: 65px;
    }
  }
}
</style>