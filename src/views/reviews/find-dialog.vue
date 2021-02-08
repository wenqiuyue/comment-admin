<template>
  <div class="find-dialog">
    <el-dialog title="Contact the reviewer" :visible.sync="dialogFind" width="615px" @closed="close">
      <div class="find_main">
        <h5>How it works</h5>
        <p>We’ll let the reviewer know you’d like more information to help you identify them and their experience with WhiteHatBox. It's up to them whether they choose to share their full name, email, order ID, phone number, or all of the above with you.</p>
        <p>They’ll have 3 days to reply.</p>
        <h5><i class="el-icon-message icon"></i> Here’s the email we’ll send to Maroco:</h5>
        <p>(We'll translate this message to match Maroco’s own language)</p>
        <div class="email" v-if="!isSeeMore">
          <p>Sitespilot</p>
          <h5>WhiteHatBox would like some information regarding your review</h5>
          <div class="one_row">Hi Maroco, Thanks for your review on Sitespilot. Based on your review WhiteHatBox would like a little more information</div>
          <el-link type="primary" @click="isSeeMore=true">See more</el-link>
        </div>
        <div class="email_more" v-else>
          <el-form ref="form" label-width="80px">
            <el-form-item label="From:">
              Sitespilot
            </el-form-item>
            <el-form-item label="To:">
              quoc lecuong
            </el-form-item>
            <el-form-item label="Subject:">
              <div>WhiteHatBox would like some information regarding your review</div>
            </el-form-item>
          </el-form>
          <div class="email_con">
            <p>Hi quoc lecuong,</p>
            <p>Thanks for your review on Sitespilot.</p>
            <p>Based on your review, WhiteHatBox would like a little more information about your experience. This will help them write a more useful reply to you. It'll also help them verify that you’ve had a genuine experience with their business.</p>
            <p>Of course, it’s totally up to you what you share.</p>
            <p class="more_info">Provide more information</p>
            <p>Thanks for helping WhiteHatBox connect the dots!</p>
            <p>The Sitespilot Team</p>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button plain @click="handleCancle">Cancel</el-button>
        <el-button type="primary" @click="confirmBtn" icon="el-icon-position">Send Request</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogFind:false,
      isSeeMore:false //是否查看更多
    }
  },
  methods:{
    /**
     * 弹窗关闭回调
     */
    close(){
      this.isSeeMore=false;
    },
    /**
     * 取消按钮
     */
    handleCancle(){
      this.dialogFind=false;
    },
    /**
     * 打开弹窗
     */
    openDialog(){
      this.dialogFind=true;
    },
    /**
     * 确认按钮
     */
    confirmBtn(){
      this.dialogFind = false
    },
  }
}
</script>
<style lang="less" scoped>
.find-dialog{
  .find_main{
    h5{
      font-size: 16px;
      font-weight: 500;
      color: #1B1B21;
      margin: 0px 0 10px 0;
      .icon{
        font-size:20px;
        vertical-align: bottom;
      }
    }
    p{
      line-height: 22px;
      margin-top: 0;
    }
    .email{
      border: 1px solid #c5c5d6;
      border-radius: 4px;
      padding: 16px;
      p{
        margin-bottom: 3px;
      }
      .one_row{
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
    }
    .email_more{
      border: 1px solid #c5c5d6;
      border-radius: 4px;
      padding: 16px;
      .el-form{
        padding-bottom: 16px;
        /deep/.el-form-item{
          margin-bottom: 0;
          .el-form-item__content{
            line-height: 30px;
            font-size: 16px;
            color: #222222;
          }
          .el-form-item__label{
            line-height: 30px;
            font-size: 16px;
          }
        }
      }
      .email_con{
        padding-top: 16px;
        border-top: 1px solid #dcdce6;
        p{
          color: #1b1b21;
          margin-bottom: 12px;
        }
        .more_info{
          color: #1a66ff;
          display: inline-block;
          margin-bottom: 9px;
          text-decoration: underline;
        }
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
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>