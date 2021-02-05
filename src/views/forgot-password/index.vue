<template>
  <div class="forgot-password">
    <el-row>
      <el-col :span="15">
        <div class="forgot_main">
          <h1 class="main_head">
            <a href="http://sitespilot.com/">sitespilot.com</a>
          </h1>
          <h1 class="main_title">Reset Password</h1>
          <el-form :model="forgotForm" :rules="rules" ref="forgotForm" class="form" label-position="top" :hide-required-asterisk="true">
            <el-form-item prop="email" label="E-mail">
              <el-input v-model="forgotForm.email" placeholder="example@example.com">
              </el-input>
            </el-form-item>
            <el-button class="forgot_btn" type="primary" :loading="loading" @click="handleSend">Send Password Reset Link</el-button>
            <div class="register_tips">Already have an account? <a :href="pageUrl">Sign In</a></div>
            <div class="register_tips">Need an account? <a :href="`${pageUrl}/register`">Sign up</a></div>
          </el-form>
        </div>
      </el-col>
      <el-col :span="9" class="right_col">
        <login-reg-right></login-reg-right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      loading:false, //加载
      forgotForm:{
        email:null
      },
      automaticChecked:false, //自动登录
      rules: {
        email: [
          { required: true, message: 'Please input email', trigger: 'blur' },
        ],
      }
    }
  },
  computed:{
    pageUrl(){
      return process.env.VUE_APP_PAGE_URL
    }
  },
  methods:{
    /**
     * 发送邮件
     */
    handleSend(){
      this.$router.push({
        path:'/password-reset'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.forgot-password,
.el-row,
.el-col
{
  height: 100%;
}
.el-col{
  position: relative;
}
.right_col{
  background: #040620;
}
.forgot-password{
  .forgot_main{
    height: 100%;
    width: 411px;
    margin: 0 auto;
    position: absolute;
    left: 25%;
    .main_head{
      margin-top: 95px;
      color: #0A1148;
      font-size: 19.8px;
      a{
        text-decoration: none;
        color: inherit;
      }
    }
    .main_title{
      color: #0B143E;
      font-size: 52px;
      margin-top: 81px;
    }
    .form{
      /deep/.el-form-item{
        margin-bottom: 0;
        margin-top: 26px;
      }
      /deep/.el-form-item__label{
        color: #05091D;
        line-height: 24px;
      }
      /deep/.el-input__inner{
        height: 52px;
        font-size: 15px;
        line-height: 52px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
      }
      .forgot_btn{
        margin-top: 50px;
        width: 100%;
        background-color: #6cafff;
        background-image: linear-gradient(90deg, #6cafff 12%, #0a60ff 93%);
        box-shadow: 0 6px 20px -5px rgba(80,166,255,.7);
        height: 48px;
        font-size: 20px;
      }
      .register_tips{
        margin-top: 20px;
        text-align: center;
        color: #AEAECA;
        font-size: 14px;
        a{
          text-decoration: none;
          color: #428AFF;
        }
      }
      .register_tips:last-child{
        margin-top: 10px;
      }
    }
  }
}
</style>