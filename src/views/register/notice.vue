<template>
  <div class="notice">
    <el-dialog
      :visible.sync="dialogNotice"
      width="30%">
      <div class="notice-body">
          <div class="header-panel">
              <div class="title">
                <svg-icon value="icon-decorate_tips" :size="1.3" />预约须知
              </div>
              <div class="division">
                <span></span>
                <span></span>
              </div>
              <div class="content">
                11111
              </div>
          </div>
        </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogNotice = false">取 消</el-button>
        <el-button type="primary" @click="dialogNotice = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogNotice:false
    }
  },
  methods:{
    openDialog(){
      this.dialogNotice=true;
    }
  }
}
</script>
<style lang="less" scoped>
.notice{
  .notice-body {
      height: calc(100% - 67px);
      overflow: scroll;
      padding: 10px;
      .header-panel {
        border-radius: 5px;
        padding: 12px 15px;
        min-height: 390px;
        .title {
          font-size: 16px;
          color: #000000;
          display: flex;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
        .division {
          margin-top: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;

          border: 1.3px dashed #ff7979;
          span {
            background: #fff5f5;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            position: absolute;
          }
          span:first-child {
            left: -8px;
          }
          span:last-child {
            right: -8px;
          }
        }
        .content {
          padding-top: 10px;
          color: #666666;
          font-size: 14px;
          line-height: 30px;
        }
      }
    }
}
</style>