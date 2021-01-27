<template>
  <div class="register">
    <el-row>
      <el-col :span="15">
        <div class="register_main">
          <h1 class="main_title">Create a free account</h1>
          <el-form :model="registerForm" :rules="rules" ref="form-1" class="form" label-position="top" :hide-required-asterisk="true" v-if="step==1">
            <el-form-item prop="webSite" label="Web site">
              <el-input v-model="registerForm.webSite" placeholder="Enter web site">
              </el-input>
            </el-form-item>
            <el-form-item prop="email" label="Work email">
              <el-input v-model="registerForm.email" placeholder="Enter work email">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="password" label="Password">
                <el-input v-model="registerForm.password" placeholder="Enter password">
                </el-input>
              </el-form-item>
              <el-form-item prop="repeatPass" label="Repeat password">
                <el-input v-model="registerForm.repeatPass" placeholder="Repeat password">
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <el-form :model="registerForm" :rules="rules" ref="form-2" class="form" label-position="top" :hide-required-asterisk="true" v-if="step==2">
            <el-form-item prop="webSite" label="Company name">
              <el-input v-model="registerForm.webSite" placeholder="Enter company name">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="password" label="First Name">
                <el-input v-model="registerForm.password" placeholder="Enter first name">
                </el-input>
              </el-form-item>
              <el-form-item prop="repeatPass" label="Surname">
                <el-input v-model="registerForm.repeatPass" placeholder="Enter surname">
                </el-input>
              </el-form-item>
            </div>
            <el-form-item prop="webSite" label="Phone number">
              <el-input v-model="registerForm.webSite" placeholder="Enter phone number">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="password" label="Country">
                <el-input v-model="registerForm.password" placeholder="Enter first name">
                </el-input>
              </el-form-item>
              <el-form-item prop="repeatPass" label="City">
                <el-input v-model="registerForm.repeatPass" placeholder="Enter city">
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext" v-if="step==1">Next</el-button>
          <div class="two_btn" v-else>
            <el-button class="register_btn" type="primary" :loading="loading" @click="step--">Previous</el-button>
            <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext">Next</el-button>
          </div>
          <ul class="step">
            <li :class="step==1?'now_step':''"></li>
            <li :class="step==2?'now_step':''"></li>
            <li :class="step==3?'now_step':''"></li>
          </ul>
          <div class="register_tips">Already have an account? <a href="http://localhost:8080/">Sign In</a></div>       
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
      registerForm:{
        webSite:null,
        email:null,
        password:null,
        repeatPass:null,
      },
      automaticChecked:false, //自动登录
      step:1, //当前步骤
      rules: {
        webSite: [
          { required: true, message: 'The domain field is required.', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'The email field is required.', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'The password field is required.', trigger: 'blur' },
        ],
        repeatPass: [
          { required: true, message: 'The repeat password field is required.', trigger: 'blur' },
        ],
      }
    }
  },
  methods:{
    /**
     * 下一步
     */
    handleNext(){
      const stepNum = this.step;
      this.$refs[`form-${stepNum}`].validate((valid)=>{
        if(valid){
          this.step++;
        }else{
          return;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.register,
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
.register{
  .register_main{
    height: 100%;
    width: 411px;
    margin: 0 auto;
    position: absolute;
    left: 25%;
    .main_title{
      color: #0B143E;
      font-size: 38px;
      margin-top: 81px;
    }
    .form{
      /deep/.el-form-item{
        margin-bottom: 0;
        margin-top: 28px;
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
      .inline{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .el-form-item{
          width: 48%;
        }
      }
    }
    .register_btn{
        margin-top: 50px;
        width: 100%;
        background-color: #6cafff;
        background-image: linear-gradient(90deg, #6cafff 12%, #0a60ff 93%);
        box-shadow: 0 6px 20px -5px rgba(80,166,255,.7);
        height: 48px;
        font-size: 20px;
      }
      .two_btn{
        .register_btn{
          width: 48%;
        }
      }
      .step{
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type:none;
        padding: 0;
        margin-top: 38px;
        li{
          margin-right: 5px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #D8D8D8;
        }
        .now_step{
          background-color:#0a60ff;
        }
      }
      .register_tips{
        margin-top: 30px;
        text-align: center;
        color: #AEAECA;
        font-size: 14px;
        a{
          text-decoration: none;
          color: #428AFF;
        }
      }
  }
}
</style>