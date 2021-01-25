<template>
  <div class="report-dialog">
    <el-dialog :title="page==1?'Before you start':'Why are you flagging this review'" :visible.sync="dialogReport" width="615px">
      <div class="page_one" v-if="page==1">
        <div class="one_step">
          <div>1</div>
          <div>You can flag reviews that breach <span>our guidelines</span></div>
        </div>
        <div class="one_step">
          <div>2</div>
          <div>An overview of <span>your flagging activities</span> will be <strong>publicly available.</strong></div>
        </div>
        <h5>If you disagree width a riview</h5>
        <p>We recommend writing a <span>public reply</span>. It's an opportunity to demonstrate how much you care about your customer's opinions (even the ones you might disagree width). </p>
      </div>
      <div class="page_two" v-else>
        <h5>Please choose a reason:</h5>
        <p>Learn more about these reasons in <span>our guidelines</span></p>
        <el-radio-group v-model="twoRadio">
          <el-radio :label="1">Harmful or illegal</el-radio>
          <el-radio :label="2">Personal information</el-radio>
          <el-radio :label="3">Advertising or promotional</el-radio>
          <el-radio :label="4">
            Not based on a genuine experience
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </el-radio>
          <el-radio :label="5">About a different buiness</el-radio>
        </el-radio-group>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-checkbox v-if="page==1" v-model="oneChecked">Don't show this message again.</el-checkbox>
        <el-button v-else plain @click="backBtn">Back</el-button>
        <el-button type="primary" @click="confirmBtn">Continue</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogReport:false,
      page:1, //当前步骤页
      twoRadio:1, //步骤二举报原因单选
      oneChecked:false
    }
  },
  methods:{
    /**
     * 打开弹窗
     */
    openDialog(){
      this.page=1;
      this.dialogReport=true;
    },
    /**
     * 确认按钮
     */
    confirmBtn(){
      if(this.page==1){
        this.page=2;
      }else{
         this.dialogReport = false
      }
    },
    /**
     * 步骤二返回按钮
     */
    backBtn(){
      this.page=1;
    }
  }
}
</script>
<style lang="less" scoped>
.report-dialog{
  .page_one{
    .one_step{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 18px;
      div:first-child{
        flex-shrink: 0;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: #EAF3FB;
        text-align: center;
        line-height: 58px;
        color: #1A66FF;
        font-size: 28px;
        font-weight: bold;
      }
      div:last-child{
        margin-left: 18px;
        span{
          color: #276FFF;
        }
      }
    }
    h5{
      font-size: 16px;
      font-weight: normal;
      color: #1B1B21;
      margin: 20px 0 10px 0;
    }
    p{
      line-height: 22px;
      margin-top: 0;
    }
  }
  .page_two{
    h5{
      font-size: 16px;
      font-weight: normal;
      color: #1B1B21;
      margin: 0;
    }
    p{
      margin: 6px 0 26px;
      span{
        color: #276FFF;
      }
    }
    .el-radio-group{
      display: flex;
      flex-direction: column;
      .el-radio{
        margin-bottom: 16px;
      }
    }
  }
  /deep/.el-dialog__header{
    padding: 18px 20px;
  }
  /deep/.el-dialog__body{
    border-top: 1px solid #E4E4EC;
    padding:22px;
  }
  /deep/.el-dialog__footer{
    border-top: 1px solid #E4E4EC;
    background: #F9F9FA;
    padding: 15px 20px;
    .dialog-footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>