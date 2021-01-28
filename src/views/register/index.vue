<template>
  <div class="register">
      <div class="r_left">
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
            <el-form-item label="Company name">
              <el-input v-model="registerForm.company" placeholder="Enter company name">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="fName" label="First Name">
                <el-input v-model="registerForm.fName" placeholder="Enter first name">
                </el-input>
              </el-form-item>
              <el-form-item prop="sName" label="Surname">
                <el-input v-model="registerForm.sName" placeholder="Enter surname">
                </el-input>
              </el-form-item>
            </div>
            <el-form-item prop="phone" label="Phone number">
              <el-input v-model="registerForm.phone" placeholder="Enter phone number">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="country" label="Country">
                <el-input v-model="registerForm.country" placeholder="Enter first name">
                </el-input>
              </el-form-item>
              <el-form-item prop="city" label="City">
                <el-input v-model="registerForm.city" placeholder="Enter city">
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="verification" v-if="step==3">
                <el-radio v-model="registerForm.verification" :label="1">Verification option 1</el-radio>
                  <div class="options">
                    <p class="option_dec">The skin is the largest organ in the body. It defends against</p>
                    <ul>
                      <li>
                        <p><strong>Copy meta tag below</strong> and paste it into your site’s home page.</p>
                        <el-input
                          type="textarea"
                          autosize
                          placeholder="请输入内容"
                          v-model="meta">
                        </el-input>
                      </li>
                      <li>
                        <p><strong>Click Finish button</strong></p>
                        <p class="normal_p">To stay verified, don’t remove the meta tag, even after verification succeeds.</p>
                      </li>
                    </ul>
                  </div>
                 <el-radio v-model="registerForm.verification" :label="2">Verification option 2</el-radio>
                  <div class="options">
                    <ul>
                      <li>
                        <p><strong>Download this txt</strong> <a>verification file</a></p>
                      </li>
                      <li>
                        <p><strong>Upload the file to domain, root directory. (Example http://your-domain/verify_review.txt)</strong></p>
                      </li>
                      <li>
                        <p><strong>Click finish below.</strong></p>
                        <p class="normal_p">To stay verified, do not remove TXT verification file, from your root directory, even after verification succeeds.</p>
                      </li>
                    </ul>
                  </div>
          </div>
          <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext" v-if="step==1">Next</el-button>
          <div class="two_btn" v-else>
            <el-button class="register_btn" type="primary" :loading="loading" @click="step--">Previous</el-button>
            <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext">{{step==3?'Finish':'Next'}}</el-button>
          </div>
          <ul class="step">
            <li :class="step==1?'now_step':''"></li>
            <li :class="step==2?'now_step':''"></li>
            <li :class="step==3?'now_step':''"></li>
          </ul>
          <div class="register_tips">Already have an account? <a href="http://192.168.1.15:8081/">Sign In</a></div>       
        </div>
      </div>
      <div class="right_col">
        <login-reg-right></login-reg-right>
      </div>
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
        company:null,
        fName:null,
        sName:null,
        phone:null,
        country:null,
        city:null,
        verification:1
      },
      automaticChecked:false, //自动登录
      step:3, //当前步骤
      meta:'<meta name="verify-reviews" content="$2y$10$9pHM8q7LBuvyA78atKzuYewVlpdTQchIr6.ctYd8x8FOqdB12S57i">', // 验证方式一，meta标签
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
        fName: [
          { required: true, message: 'First name is required.', trigger: 'blur' },
        ],
        sName: [
          { required: true, message: 'The Surname is required.', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: 'Phone number is required.', trigger: 'blur' },
        ],
        city: [
          { required: true, message: 'City is required.', trigger: 'blur' },
        ],
      }
    }
  },
  methods:{
    /**
     * 下一步
     */
    handleNext(){
      //如果到达验证步骤
      if(this.step==3){
        this.$router.push({
          path:'/Verification'
        })
      }
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
.register{
  display: table;
  flex-direction: row;
  .r_left{
    width: 60%;
    display:table-cell;
  }
  .register_main{
    width: 475px;
    margin: 0 auto;
    padding-bottom: 22px;
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
    .verification{
      font-size: 14px;
      /deep/.el-radio{
        margin-top: 14px;
      }
      .options{
      margin-left: 24px;
      width: 100%;
      .option{
        line-height: 16px;
      }
      .option_dec{
        color: #787D97;
        line-height: 26px;
        margin: 0;
        font-family: "Roboto-Regular", Arial, "Helvetica Neue", Helvetica, sans-serif;
      }
      ul{
        margin-top: 20px;
        padding-left: 20px;
        list-style-type: decimal;
        li{
          margin-bottom: 15px;
          .el-textarea{
            margin-top: 10px;
          }
          p{
            color: #191B3A;
            font-family: "Roboto-Regular", Arial, "Helvetica Neue", Helvetica, sans-serif;
            margin: 0;
            line-height: 20px;
          }
          .normal_p{
            margin: 0;
            word-break: break-all;
          }
          &::marker{
            color: #191B3A;
          }
        }
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
  .right_col{
    width: 40%;
    display:table-cell;
    background: #040620;
  }
}
</style>