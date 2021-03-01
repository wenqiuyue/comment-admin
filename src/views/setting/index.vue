<template>
  <div class="setting">
    <div class="form_card">
      <div class="form_title">Basic info</div>
      <el-divider></el-divider>
      <el-form label-position="top" label-width="80px" :model="form" class="form" :rules="rules">
        <el-form-item label="First Name" prop="FirstName">
          <el-input v-model="form.FirstName" placeholder="Enter first name"></el-input>
        </el-form-item>
        <el-form-item label="Surname" prop="Surname">
          <el-input v-model="form.Surname" placeholder="Enter surname"></el-input>
        </el-form-item>
        <el-form-item prop="Country" label="Country">
          <el-select v-model="form.Country" placeholder="Please select">
            <el-option
              v-for="item in countryOptions"
              :key="item.Id"
              :label="item.Name"
              :value="item.Id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="City" label="City">
          <el-input v-model="form.City" placeholder="Enter city">
          </el-input>
        </el-form-item>
        <el-form-item prop="Phone" label="Phone number">
          <el-input v-model="form.Phone" placeholder="Enter phone number">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top:18px">
          <el-button>Save changes</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form_card">
      <div class="form_title">Security settings</div>
      <el-divider></el-divider>
      <div class="d_form">
        <p class="d_f_lable">Email</p>
        <div class="d_f_input">
          <el-input v-model="eamil" placeholder="Enter Email"></el-input>
          <el-button>Change email</el-button>
        </div>
        <p class="d_f_tips">We won't change this email until we've received your confirmation.</p>
      </div>
      <div class="password">
        <div class="p_lable">Password</div>
        <el-button>Change password</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      countryOptions:null, //国家选项
      eamil:null, //修改的邮箱
      form:{
        FirstName:null,
        Surname:null,
        Phone:null,
        Country:null,
        City:null
      },
      rules:{
        
      }
    }
  },
  mounted(){
    this.getCountry();
  },
  methods:{
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
  }
}
</script>
<style lang="less" scoped>
.setting{
  padding:16px;
  background: #F9F9F9;
  .form_card{
    padding: 16px 24px;
    border-radius: 3px;
    border: 1px solid rgb(220, 220, 230);
    background: #ffffff;
    width: 840px;
    margin-bottom: 12px;
    .form_title{
      color: rgb(27, 27, 33);
    }
    .el-divider--horizontal{
      margin: 14px 0;
    }
    .form{
      /deep/.el-form-item{
        margin-bottom: 12px;
        .el-form-item__label{
          line-height: 20px;
          padding: 0 0 3px;
          color: rgb(27, 27, 33);
        }
        .el-select{
          width: 100%;
        }
      }
    }
    .d_form{
      margin-bottom: 30px;
      .d_f_lable{
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 8px;
      }
      .d_f_input{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .el-input{
          width: 65%;
        }
      }
      .d_f_tips{
        color: rgb(111, 111, 135);
        font-size: 13px;
      }
    }
    .password{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .p_lable{
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>