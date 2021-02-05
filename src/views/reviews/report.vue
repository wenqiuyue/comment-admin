<template>
  <div class="report">
    <div class="screen">
      <div class="screen_l">
        <el-date-picker
          class="date"
          v-model="datePicker"
          type="daterange"
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="status">
          Report & Review status
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-checkbox :indeterminate="isStatusIndeterminate" v-model="checkAllStatus" @change="handleStatusCheckAllChange">Select all</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item divided class="checkbox_dro">
              <el-checkbox-group v-model="checkedStatus" @change="handleCheckedStatusChange">
                <el-checkbox v-for="(item,index) in statusOption" :label="item" :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
            </el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(3)">Apply</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="star">
          Star rating
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-checkbox :indeterminate="isStarIndeterminate" v-model="checkAllStar" @change="handleStarCheckAllChange">Select all</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item divided class="checkbox_dro">
              <el-checkbox-group v-model="checkedStar" @change="handleCheckedStarChange">
                <el-checkbox v-for="(item,index) in starOption" :label="item" :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
            </el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(1)">Apply</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="report">
          Reporting reason
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-checkbox :indeterminate="isReportReasonIndeterminate" v-model="checkAllReportReason" @change="handleReportReasonCheckAllChange">Select all</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item divided class="checkbox_dro">
              <el-checkbox-group v-model="checkedReportReason" @change="handleCheckedReportReasonChange">
                <el-checkbox v-for="(item,index) in reportReasonOption" :label="item" :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
            </el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(2)">Apply</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>     
      </div>
    </div>
    <div class="card_group">
      <el-row :gutter="16" class="card_row">
        <el-col :span="12">
          <div class="card">
            <span>8</span> 
            <span>Number of reports</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="card">
            <span>0</span> 
            <span>Reports under investigation</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="16" class="card_row">
        <el-col :span="12">
          <div class="tow_card">
            <div class="card">
              <span>8</span> 
              <span>Reports closed, review still online</span>
            </div>
            <div class="card_item">
              <p>
                <span>4</span> 
                <span>Invalid reports (reviews not in breach)</span>
              </p>
              <p>
                <span>0</span> 
                <span>Issue addressed by the reviewer</span>
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="card last_card">
            <span>3</span> 
            <span>Reviews taken offline</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="report_group">
      <el-table
        :data="tableData"
        :cell-style="attenceCellStyle"
        :header-cell-style="attenceHeaderStyle"
        style="width: 100%">
        <el-table-column
          prop="online"
          width="70"
          class="online_col"
         >
          <template slot-scope="scope">
            <div v-if="scope.row.online" class="online"></div>
            <div v-else class="unline"></div>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="Report & Review status"
          width="200"
         >
          <template slot-scope="scope">
            <div>{{scope.row.status}}</div>
            <a href="http://sitespilot.com/">See the review Why is it still online?</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="lastDate"
          label="Last status change"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="reportDate"
          sortable
          width="180"
          label="Date of the report">
        </el-table-column>
        <el-table-column
          prop="star"
          sortable
          width="140"
          label="Star rating">
          <template slot-scope="scope">
            <rate
              class="c_rate"
              :value="scope.row.star"
              :isDisabled="true"
            >
            </rate>
          </template>
        </el-table-column>
        <el-table-column
          prop="reason"
          width="300"
          label="Reporting reason">
        </el-table-column>
        <el-table-column
          width="210"
          prop="name"
          label="User who reported">
          <template slot-scope="scope">
            <div>{{scope.row.name}}</div>
            <div>({{scope.row.email}})</div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      datePicker:[],
      reportReasonOption:['Coarse language','Sensitive information','Violates rights','Tax fine'], //举报原因选项
      checkedReportReason:[], //选择的举报原因
      checkAllReportReason: false, //举报原因是否全选
      isReportReasonIndeterminate:true,
      starOption:['1 STARS','2 STARS','3 STARS','4 STARS','5 STARS'], //星级选项
      checkedStar:[], //选择的星级
      checkAllStar: false, //星级是否全选
      isStarIndeterminate:true,
      statusOption:['Investigating report','Report closed - Review offine','Report closed - still online'], //status选项
      checkedStatus:[], //选择的status
      checkAllStatus: false, //status是否全选
      isStatusIndeterminate:true,
      currentPage4:4,
      tableData: [{
          online:true,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }, {
          online:true,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }, {
          online:false,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }, {
          online:true,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }, {
          online:true,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }, {
          online:true,
          status:'Report closed - Review still online',
          lastDate: '2016-05-02',
          reportDate: '2016-05-02',
          star: 4,
          reason: 'The review is markting or spam.',
          name:'Jim',
          email:'projectmaneger@whi.com'
        }]
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    /**
     * 筛选
     */
    handleApply(type){
      if(type==1){
        this.$refs.star.hide();
      }else if(type==2){
        this.$refs.report.hide();
        console.log(this.checkedReportReason);
      }else if(type==3){
        this.$refs.status.hide()
      }
    },
    /**
     * 举报原因选项
     */
    handleCheckedReportReasonChange(value) {
      let checkedCount = value.length;
      this.checkAllReportReason = checkedCount === this.reportReasonOption.length;
      this.isReportReasonIndeterminate = checkedCount > 0 && checkedCount < this.reportReasonOption.length;
    },
    /**
     * 举报原因全选
     */
    handleReportReasonCheckAllChange(val) {
      this.checkedReportReason = val ? this.reportReasonOption : [];
      this.isReportReasonIndeterminate = false;
    },
    /**
     * star rating全选
     */
    handleStarCheckAllChange(val) {
      this.checkedStar = val ? this.starOption : [];
      this.isStarIndeterminate = false;
    },
    /**
     * 选项
     */
    handleCheckedStarChange(value) {
      let checkedCount = value.length;
      this.checkAllStar = checkedCount === this.starOption.length;
      this.isStarIndeterminate = checkedCount > 0 && checkedCount < this.starOption.length;
    },
    /**
     * Status全选
     */
    handleStatusCheckAllChange(val) {
      this.checkedStatus = val ? this.statusOption : [];
      this.isStatusIndeterminate = false;
    },
    /**
     * Status选项
     */
    handleCheckedStatusChange(value) {
      let checkedCount = value.length;
      this.checkAllStatus = checkedCount === this.statusOption.length;
      this.isStatusIndeterminate = checkedCount > 0 && checkedCount < this.statusOption.length;
    },
    attenceCellStyle() {
      return {
        padding: "10px 0",
        fontSize: "14px",
      };
    },
    attenceHeaderStyle() {
      return {
        color: "#222222",
        fontSize: "13px",
      };
    },
  }
}
</script>
<style lang="less" scoped>
.el-dropdown-menu{
  /deep/.el-dropdown-menu__item{
    padding: 3px 15px;
    background: #ffffff;
  }
  .checkbox_dro{
    /deep/.el-checkbox-group{
      display: flex;
      flex-direction: column;
    }
  }
}
.report{
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
        margin-right: 10px;
        /deep/.el-input__icon{
          line-height: 25px;
        }
        /deep/.el-range-separator{
          line-height: 25px;
        }
      }
    }
  }
  .card_group{
    padding: 20px 18px;
    .card_row{
      margin-top: 20px;
      .card{
        border: 1px solid #DCDCE6;
        border-radius: 3px;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        span{
          color: #6F6F87;
          font-size: 14px;
        }
        span:first-child{
          color: #1B1B21;
          font-size: 40px;
          margin-right: 10px;
        }
      }
      .last_card{
        padding: 20px 14px;
      }
      .tow_card{
        display: flex;
        flex-direction: row;
        .card_item{
          background: #F9FAFB;
          border: 1px solid #DCDCE6;
          border-left: none;
          border-radius: 0 3px 3px 0;
          padding: 10px 14px;
          p{
            margin:0;
            display: flex;
            flex-direction: row;
            align-items: center;
            span{
              color: #6F6F87;
              font-size: 13px;
            }
            span:first-child{
              color: #6F6F87;
              font-size: 28px;
              margin-right: 10px;
            }
          }
        }
        .card{
          border-radius: 3px 0 0 3px;
        }
        div{
          width: 50%;
        }
      }
    }
  }
  .report_group{
    padding: 10px 18px;
    .el-table{
      border: 1px solid #DCDCE6;
      .online{
        width: 12px;
        height: 12px;
        background: #EB1700;
        border-radius: 50%;
        margin: 0 auto;
      }
      .unline{
        width: 12px;
        height: 12px;
        background: #00B67A;
        border-radius: 50%;
        margin: 0 auto;
      }
      a{
        text-decoration: none;
        color: #409EFF;
      }
    }
  }
}
</style>