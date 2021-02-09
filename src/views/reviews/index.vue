<template>
  <div class="reviews">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Inbox" name="1">
        <Inbox v-if="activeName=='1'"></Inbox>
      </el-tab-pane>
      <el-tab-pane label="Reporting activity" name="2">
        <Report v-if="activeName=='2'"></Report>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  components:{
    Inbox:()=> import("./inbox"),
    Report:()=> import("./report"),
  },
  data(){
    return{
      activeName:'1',
    }
  },
  methods:{
  }
}
</script>
<style lang="less" scoped>
.reviews{
  // background: #F9F9F9;
  height: 100%;
  overflow-y: scroll;
  .el-tabs{
    background: #ffffff;
    /deep/.el-tabs__header{
      margin: 0;
    }
    /deep/.el-tabs__nav-wrap{
      padding: 0 18px;
    }
  }
  
}
</style>
