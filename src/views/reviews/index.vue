<template>
  <div class="reviews">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Inbox" name="1"></el-tab-pane>
      <el-tab-pane label="Reporting activity" name="2"></el-tab-pane>
    </el-tabs>
    <div class="screen">
      <div class="screen_l">
        <el-input
          placeholder="Search"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
        <el-dropdown split-button size="small" type="primary">
          Star rating
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary">
          Reply
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-date-picker
          class="date"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <div class="screen_r"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeName:'1',
      searchVal:null, //搜索
    }
  }
}
</script>
<style lang="less" scoped>
.reviews{
  background: #F9F9F9;
  height: 100%;
  .el-tabs{
    background: #ffffff;
    /deep/.el-tabs__header{
      margin: 0;
    }
    /deep/.el-tabs__nav-wrap{
      padding: 0 18px;
    }
  }
  .screen{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 2px 2px 0 rgba(0,0,50,0.1);
    .screen_l{
      display: flex;
      flex-direction: row;
      /deep/.el-input{
        width: auto;
        margin-right: 10px;
      }
      /deep/.el-input__inner{
        height: 32px;
        line-height: 32px;
      }
      /deep/.el-input__icon{
        line-height: 32px;
      }
      /deep/.el-button{
        background: #ffffff;
        color: #333333;
        border-color: #E3E3EC;
      }
      .el-dropdown{
        margin-right: 10px;
      }
      .date{
        /deep/.el-input__icon{
          line-height: 25px;
        }
        /deep/.el-range-separator{
          line-height: 25px;
        }
      }
    }
  }
}
</style>
