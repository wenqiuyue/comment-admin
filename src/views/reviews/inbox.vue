<template>
  <div class="inbox">
    <div class="screen">
      <div class="screen_l">
        <el-input
          placeholder="Search"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="starRate">
          Star rating
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="star_rate">
                <i class="el-icon-check"></i>
                <span>Bad</span>
                <rate
                  class="c_rate"
                  :value="1"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="star_rate">
                <i class="el-icon-check"></i>
                <span>Poor</span>
                <rate
                  class="c_rate"
                  :value="2"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="star_rate">
                <i class="el-icon-check"></i>
                <span>Average</span>
                <rate
                  class="c_rate"
                  :value="3"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="star_rate">
                <i class="el-icon-check"></i>
                <span>Great</span>
                <rate
                  class="c_rate"
                  :value="4"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="star_rate">
                <i class="el-icon-check"></i>
                <span>Excellent</span>
                <rate
                  class="c_rate"
                  :value="5"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(3)">Apply</el-button>
              <el-button plain size="mini" @click="handleClear(3)">Clear</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="reply">
          Reply
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-check">Reviews <strong>width a reply</strong></el-dropdown-item>
            <el-dropdown-item>Reviews <strong>without a reply</strong></el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(1)">Apply</el-button>
              <el-button plain size="mini" @click="handleClear(1)">Clear</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="report">
          Report
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-check">Reviews <strong>reported</strong></el-dropdown-item>
            <el-dropdown-item>Reviews <strong>nor reported</strong></el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(2)">Apply</el-button>
              <el-button plain size="mini" @click="handleClear(2)">Clear</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-date-picker
          class="date"
          v-model="datePicker"
          type="daterange"
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
    </div>
    <div class="review_list">
      <div class="review_card" v-for="(item,index) in 8" :key="index">
        <div class="card_main">
          <div class="card_main_l">
            <rate
              class="c_rate"
              :value="3.5"
              :isDisabled="true"
            >
            </rate>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                Jamie Chambers<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="card_main_r">
            <p>
              <span>These guys work very hard and impatient These guys work very hard and impatient These guys work very hard and impatient</span>
              <span>8 Jan 2021</span>
            </p>
            <p>It is necessary to attach importance to and reuse award-winning teachers and give them corresponding treatment, honor and title. It is also reasonable to let them become the "signboard" of the school's teaching staff and the "business card" of the school's foreign exchange. However, in this process, some schools just regard the award-winning teachers as the brand of the school, ignoring the teaching responsibilities and guidance of the award-winning teachers, and even such a strange phenomenon appears: the higher the award-winning level, the farther away the award-winning teachers are from the podium, which leads to a great discount in the radiation role of the award-winning teachers in the improvement of school teaching quality.</p>
            <p>Source: Organic</p>
          </div>
        </div>
        <div class="card_btn_group">
          <el-tabs v-model="activeCardName" @tab-click="handleCardNameClick">
            <el-tab-pane label="Reply" name="reply">
              <div slot="label" class="tab_label"><svg-icon value="icon-huifu" :size="1.5" :color="'#9A9AAD'"></svg-icon> <span>Reply</span></div>
              <div class="reply_tab">
                <div class="reply_tab_l">
                  WhiteHatBox
                </div>
                <div class="reply_tab_r">
                  <div v-if="index%2==0">
                    <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="Please input"
                      v-model="replyTextarea">
                    </el-input>
                    <el-button type="primary" size="small" plain><i class="el-icon-edit el-icon--right"></i> Post reply</el-button>
                    <el-button size="small" plain>Cancel</el-button>
                  </div>
                  <div class="reply_content" v-else>
                    <div class="date">8 Jan 2021</div>
                    <p>It is necessary to attach importance to and reuse award-winning teachers and give them corresponding treatment, honor and title. It is also reasonable to let them become the "signboard" of the school's teaching staff and the "business card" of the school's foreign exchange. However, in this process, some schools just regard the award-winning teachers as the brand of the school, ignoring the teaching responsibilities and guidance of the award-winning teachers, and even such a strange phenomenon appears: the higher the award-winning level, the farther away the award-winning teachers are from the podium, which leads to a great discount in the radiation role of the award-winning teachers in the improvement of school teaching quality.</p>
                    <el-button type="primary" size="small" plain><i class="el-icon-edit el-icon--right"></i> Edit reply</el-button>
                    <el-button type="danger" size="small" plain><i class="el-icon-delete el-icon--right"></i> Delete reply</el-button>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Share" name="share">
              <div slot="label" class="tab_label"><svg-icon value="icon-fenxiang1" :size="1.1" :color="'#9A9AAD'"></svg-icon> <span>Share</span></div>
              12
            </el-tab-pane>
            <el-tab-pane label="Report" name="report">
              <div slot="label" class="tab_label">
                <svg-icon value="icon-biaoji" :size="1.1" :color="'#9A9AAD'"></svg-icon> 
                <span v-if="index==2">Invistigation in progress</span>
                <span v-else-if="index==1">Invistigation complete</span>
                <span v-else>Report</span>
              </div>
              <div class="report_tab" v-if="index==1">
                <el-timeline v-if="!isDown">
                  <el-timeline-item timestamp="2021-1-31 19:05" placement="top" v-for="(item,index) in 4" :key="index">
                    <el-card>
                      <span><strong>Investigation complete:</strong> The review doesn't breach our guidelines for: <strong>defamation</strong></span>
                      <p>
                        <el-button plain icon="el-icon-reading">Read our decision</el-button>
                        <el-button type="text" class="dif_issue">There's a different issue</el-button>
                      </p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
                <el-timeline v-else>
                  <el-timeline-item timestamp="2021-1-31 19:05" placement="top" v-for="(item,index) in 1" :key="index">
                    <el-card>
                      <span><strong>Investigation complete:</strong> The review doesn't breach our guidelines for: <strong>defamation</strong></span>
                      <p>
                        <el-button plain icon="el-icon-reading">Read our decision</el-button>
                        <el-button type="text" class="dif_issue">There's a different issue</el-button>
                      </p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
                <div class="show_btn">
                  <el-button type="text" :icon="!isDown?'el-icon-caret-top':'el-icon-caret-bottom'" @click="isDown=!isDown">{{isDown?'Show history':'Hide history'}}</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!-- <div class="report">
            <svg-icon value="icon-biaoji" :size="1.3" :color="'#9A9AAD'" @click="handleReport"></svg-icon>
            <span v-if="index==2">Invistigation in progress</span>
            <span v-else-if="index==1">Invistigation complete</span>
          </div> -->
        </div>
      </div>
    </div>
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
    <ReportDialog ref="reportdialog"></ReportDialog>
  </div>
</template>
<script>
export default {
  components:{
    ReportDialog:()=> import("./report-dialog")
  },
  data(){
    return{
      searchVal:null, //搜索
      datePicker:[], //评论时间筛选
      currentPage4:4,
      activeCardName:null, //评论卡片操作选项卡
      replyTextarea:'', //商家回复
      isDown:true, //向下
    }
  },
  methods:{
    /**
     * 评论状态切换
     */
    handleCardNameClick(tab, event){
      if(tab.name=='report'){
        this.$refs.reportdialog.openDialog();
      }
      console.log(tab.name);
    },
    /**
     * 举报
     */
    handleReport(){
      this.$refs.reportdialog.openDialog();
    },
    /**
     * 筛选
     */
    handleApply(type){
      if(type==1){
        this.$refs.reply.hide();
      }else if(type==2){
        this.$refs.report.hide();
      }else if(type==3){
        this.$refs.starRate.hide()
      }
    },
    /**
     * 清除筛选
     */
    handleClear(type){
      if(type==1){
        this.$refs.reply.hide();
      }else if(type==2){
        this.$refs.report.hide();
      }else if(type==3){
        this.$refs.starRate.hide()
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="less" scoped>
.el-dropdown-menu{
  /deep/.el-dropdown-menu__item{
    padding: 3px 15px;
    // background: #ffffff;
  }
  /deep/.menu_btn{
    background: #ffffff;
  }
  .star_rate{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
      margin-right: 22px;
    }
    .el-rate{
      height: auto;
      /deep/.el-rate__icon{
        font-size: 20px;
        margin-right: 3px;
      }
    }
  }
}
.inbox{
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
  .review_list{
    max-width: 980px;
    margin: 15px auto;
    .review_card{
      margin-bottom: 8px;
      background: #ffffff;
      border: 1px solid #DCDCE6;
      border-radius: 3px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
      .card_main{
        padding: 18px 15px;
        border-bottom: 1px solid #DCDCE6;
        display: flex;
        flex-direction: row;
        .card_main_l{
          margin-right: 28px;
          .c_rate{
            margin-bottom: 12px;
            /deep/.icon-pingfendengjiRating4{
              font-size: 26px;
              margin-right: 3px;
            }
          }
          .el-dropdown-link{
            color: #6F6F87;
          }
        }
        .card_main_r{
          flex: 1;
          p:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 0;
            span:nth-child(1){
              font-weight: bold;
              color: #1B1B21;
              width: 50%;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
            }
            span:nth-child(2){
              font-size: 14px;
              color: #6F6F87;
            }
          }
          p:nth-child(2){
            font-size: 14px;
            color: #454554;
            word-break: break-all;
            line-height: 23px;
          }
          p:nth-child(3){
            font-size: 13px;
            color: #6F6F87;
            word-break: break-all;
            line-height: 23px;
          }
        }
      }
      .card_btn_group{
        position: relative;
        .el-tabs{
          /deep/.el-tabs__nav-wrap{
            padding-left:190px;
          }
          .tab_label{
            display: flex;
            align-items: center;
            span{
              margin-left: 5px;
            }
          }
          /deep/.el-tabs__nav{
            display: flex;
            align-items: center;
          }
          /deep/.el-tabs__nav-scroll{
            float: right;
          }
          .reply_tab{
            padding: 18px 15px;
            background: #F9F9FA;
            display: flex;
            flex-direction: row;
            .reply_tab_l{
              width: 145px;
              margin-right: 28px;
              text-align: center;
              font-size: 14px;
              color: #6F6F87;
            }
            .reply_tab_r{
              flex: 1;
              .el-button{
                margin-top: 10px;
              }
              .reply_content{
                p{
                  font-size: 14px;
                  margin-top: 0;
                  line-height: 23px;
                  word-break: break-all;
                  color: #454554;
                }
                .date{
                  text-align: right;
                  margin-bottom: 5px;
                  font-size: 14px;
                  color: #6F6F87;
                }
              }
            }
          }
          .report_tab{
            padding: 18px 15px;
            background: #F9F9FA;
            .dif_issue{
              color: #454554;
            }
            /deep/.el-timeline-item__node{
              background-color: #409EFF;
            }
            /deep/.el-timeline-item__tail{
              border-left: 2px solid #C5C5D6;
            }
            .show_btn{
              padding-left: 30px;
            }
          }
        }
      }
    }
  }
  .pagination{
    background: #ffffff;
  }
}
</style>