<template>
  <div class="register">
      <div class="r_left">
        <div class="register_main">
          <h1 class="main_title">Create a free account</h1>
          <el-form :model="registerForm" :rules="rules" ref="form-1" class="form" label-position="top" :hide-required-asterisk="true" v-if="step==1">
            <el-form-item prop="WebSite" label="Web site">
              <el-input v-model="registerForm.WebSite" placeholder="Enter web site">
              </el-input>
            </el-form-item>
            <el-form-item prop="WorkEmail" label="Work email">
              <el-input v-model="registerForm.WorkEmail" placeholder="Enter work email">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="Pwd" label="Password">
                <el-input v-model="registerForm.Pwd" placeholder="Enter password">
                </el-input>
              </el-form-item>
              <el-form-item 
                prop="repeatPass" 
                label="Repeat password"
              >
                <el-input v-model="registerForm.repeatPass" placeholder="Repeat password">
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <el-form :model="registerForm" :rules="rules" ref="form-2" class="form" label-position="top" :hide-required-asterisk="true" v-if="step==2">
            <el-form-item prop="CompanyName" label="Company name">
              <el-input v-model="registerForm.CompanyName" placeholder="Enter company name">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="FirstName" label="First Name">
                <el-input v-model="registerForm.FirstName" placeholder="Enter first name">
                </el-input>
              </el-form-item>
              <el-form-item prop="Surname" label="Surname">
                <el-input v-model="registerForm.Surname" placeholder="Enter surname">
                </el-input>
              </el-form-item>
            </div>
            <el-form-item prop="Phone" label="Phone number">
              <el-input v-model="registerForm.Phone" placeholder="Enter phone number">
              </el-input>
            </el-form-item>
            <div class="inline">
              <el-form-item prop="Country" label="Country">
                <el-select v-model="registerForm.Country">
                  <el-option
                    v-for="item in countryOptions"
                    :key="item.Id"
                    :label="item.Name"
                    :value="item.Id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="City" label="City">
                <el-input v-model="registerForm.City" placeholder="Enter city">
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="verification" v-if="step==3">
                <el-radio v-model="verification" :label="1">Verification option 1</el-radio>
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
                 <el-radio v-model="verification" :label="2">Verification option 2</el-radio>
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
          <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext" v-if="step==1 || step==3">{{step==3?'Finish':'Next'}}</el-button>
          <div class="two_btn" v-else>
            <el-button class="register_btn" type="primary" :loading="loading" @click="handlePrevious">Previous</el-button>
            <el-button class="register_btn" type="primary" :loading="loading" @click="handleNext">Save</el-button>
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
    var checkCompany = (rule, value, callback) => {
      if(this.step!=2){
        return;
      }
      const data={
        Url:this.registerForm.WebSite,
        Name:value
      }
      this.$apiHttp.businessVerificationCompany(data).then((resp)=>{
        if(resp.res==500){
          callback(new Error(resp.msg));
        }else{
          callback();
        }
      })
    };
    return{
      loading:false, //加载
      registerForm:{
        WebSite:null,
        WorkEmail:null,
        Pwd:null,
        CompanyName:null,
        FirstName:null,
        Surname:null,
        Phone:null,
        Country:null,
        City:null,
        repeatPass:null, //电话号码确认
      },
      verification:1, //验证方法
      automaticChecked:false, //自动登录
      step:1, //当前步骤
      countryOptions:null, //国家选项
      idBusiness:null,
      meta:'<meta name="verify-reviews" content="$2y$10$9pHM8q7LBuvyA78atKzuYewVlpdTQchIr6.ctYd8x8FOqdB12S57i">', // 验证方式一，meta标签
      rules: {
        WebSite: [
          { required: true, message: 'The domain field is required.', trigger: 'blur' },
        ],
        WorkEmail: [
          { required: true, message: 'The email field is required.', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
        ],
        Pwd: [
          { required: true, message: 'The password field is required.', trigger: 'blur' },
        ],
        repeatPass:[
          { required: true, message: 'The repeat password field is required.', trigger: 'blur' },
        ],
        CompanyName:[
          { required: true, message: 'The Company name is required.', trigger: 'blur' },
          { validator: checkCompany, trigger: 'blur' }
        ],
        FirstName: [
          { required: true, message: 'First name is required.', trigger: 'blur' },
        ],
        Surname: [
          { required: true, message: 'The Surname is required.', trigger: 'blur' },
        ],
        Phone: [
          { required: true, message: 'Phone number is required.', trigger: 'blur' },
        ],
        City: [
          { required: true, message: 'City is required.', trigger: 'blur' },
        ],
      }
    }
  },
  mounted(){
    this.getCountry();
  },
  methods:{
    /**
     * 上一步
     */
    handlePrevious(){
      this.step--;
      this.$nextTick(()=>{
        this.$refs[`form-${this.step}`].validate();
      })
    },
    /**
     * 获取国家选项
     */
    getCountry(){
      this.$apiHttp.businessGetCountry().then((resp)=>{
        if(resp.res==200){
          this.countryOptions=resp.data;
        }
      })
    },
    /**
     * 下一步
     */
    handleNext(){
      //如果到达验证步骤
      if(this.step==3){
        this.$router.push({
          path:'/Verification'
        })
      };
      this.$refs[`form-${this.step}`].validate((valid)=>{
        if(valid){
          if(this.step==2){
            this.saveBusiness();
          }else{
            this.step++;
          }
        }else{
          return;
        }
      })
    },
    /**
     * 保存商家信息
     */
    saveBusiness(){
      this.loading=true;
      this.$apiHttp.businessSaveBusiness(this.registerForm).then((resp)=>{
        if(resp.res==200){
          this.idBusiness=resp.data;
          this.step++;
        }
      }).finally(()=> this.loading=false);
    },
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