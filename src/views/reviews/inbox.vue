<template>
  <div class="inbox">
    <div class="screen">
      <div class="screen_l">
        <el-input
          @blur="getReviews"
          placeholder="Search"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="starRate" @command="handleCommand($event,3)">
          Star rating
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">
              <div class="star_rate">
                <i v-if="starCom==1" class="el-icon-check"></i>
                <span>Bad</span>
                <rate
                  class="c_rate"
                  :value="1"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="2">
              <div class="star_rate">
                <i v-if="starCom==2" class="el-icon-check"></i>
                <span>Poor</span>
                <rate
                  class="c_rate"
                  :value="2"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="3">
              <div class="star_rate">
                <i v-if="starCom==3" class="el-icon-check"></i>
                <span>Average</span>
                <rate
                  class="c_rate"
                  :value="3"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="4">
              <div class="star_rate">
                <i v-if="starCom==4" class="el-icon-check"></i>
                <span>Great</span>
                <rate
                  class="c_rate"
                  :value="4"
                  :isDisabled="true"
                >
                </rate>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="5">
              <div class="star_rate">
                <i v-if="starCom==5" class="el-icon-check"></i>
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
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="reply" @command="handleCommand($event,1)">
          Reply
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :icon="replyCom==1?'el-icon-check':''" command="1">Reviews <strong>width a reply</strong></el-dropdown-item>
            <el-dropdown-item :icon="replyCom==2?'el-icon-check':''" command="2">Reviews <strong>without a reply</strong></el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(1)">Apply</el-button>
              <el-button plain size="mini" @click="handleClear(1)">Clear</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button size="small" type="primary" trigger="click" :hide-on-click="false" ref="report" @command="handleCommand($event,2)">
          Report
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :icon="reportCom==1?'el-icon-check':''" command="1">Reviews <strong>reported</strong></el-dropdown-item>
            <el-dropdown-item :icon="reportCom==2?'el-icon-check':''" command="2">Reviews <strong>nor reported</strong></el-dropdown-item>
            <el-dropdown-item divided class="menu_btn">
              <el-button plain size="mini" @click="handleApply(2)">Apply</el-button>
              <el-button plain size="mini" @click="handleClear(2)">Clear</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-date-picker
          class="date"
          @change="getReviews"
          v-model="datePicker"
          type="daterange"
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
    </div>
    <div class="review_list" v-loading="loading">
      <template v-if="reviewsList.length>0">
        <div class="review_card" v-for="(item,index) in reviewsList" :key="item.id">
          <div class="card_main">
            <div class="card_main_l">
              <rate
                class="c_rate"
                :value="item.rank"
                :isDisabled="true"
              >
              </rate>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
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
                <span>{{item.subject}}</span>
                <span>{{dateEnglish(item.time)}}</span>
              </p>
              <p>{{item.content}}</p>
              <p>Source: Organic</p>
            </div>
          </div>
          <div class="card_btn_group">
            <el-tabs v-model="activeCardName" @tab-click="handleCardNameClick">
              <el-tab-pane label="Reply" :name="JSON.stringify({name:'reply',id:item.id})">
                <div slot="label" class="tab_label" v-if="item.replys.length>0"><i class="el-icon-success"></i> <span>Replied</span></div>
                <div slot="label" class="tab_label" v-else><svg-icon value="icon-huifu" :size="1.5"></svg-icon> <span>Reply</span></div>
                <div class="reply_tab">
                  <div class="reply_tab_l">
                    {{item.companyName}}
                  </div>
                  <div class="reply_tab_r">
                    <div v-if="item.replys.length==0 || replyEditId">
                      <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="Please input"
                        v-model="replyTextarea">
                      </el-input>
                      <el-button type="primary" size="small" plain @click="handleReply(item.id)" :loading="confrimBtnLoading"><i class="el-icon-edit el-icon--right"></i> Post reply</el-button>
                      <el-button size="small" plain @click="handleCancle">Cancel</el-button>
                    </div>
                    <template v-else>
                      <div class="reply_content" v-for="(repitem,index) in item.replys" :key="repitem.id">
                        <p>{{repitem.content}}</p>
                        <div class="date">{{dateEnglish(repitem.time)}}</div>
                        <el-button type="primary" size="small" plain @click="handleEditReply(repitem)"><i class="el-icon-edit el-icon--right"></i> Edit reply</el-button>
                        <el-popconfirm
                          confirm-button-text='confirm'
                          cancel-button-text='cancle'
                          @confirm="handleDel(repitem.id)"
                          icon="el-icon-info"
                          icon-color="red"
                          title="Are you sure to delete？"
                        >
                          <el-button slot="reference" type="danger" size="small" plain><i class="el-icon-delete el-icon--right"></i> Delete reply</el-button>
                        </el-popconfirm>
                      </div>
                    </template>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Share" :name="JSON.stringify({name:'share',id:item.id})">
                <div slot="label" class="tab_label"><svg-icon value="icon-fenxiang1" :size="1.1"></svg-icon> <span>Share</span></div>
                12
              </el-tab-pane>
              <el-tab-pane label="Find Reviewer" :name="JSON.stringify({name:'find',id:item.id})">
                <div slot="label" class="tab_label"><svg-icon value="icon-chazhao" :size="1.4"></svg-icon> <span>Find Reviewer</span> <el-tag size="mini">16</el-tag></div>
                <div class="find_tab">
                  <div class="find">
                    <div class="find_tab_l">
                      29 Dec 2020, 14:36
                    </div>
                    <div class="find_tab_r">
                        <div class="find_content">
                          <p>You asked William Clark for more information.</p>
                        </div>
                        <div class="find_border" v-if="index!=2">
                          <p>They have until Wednesday, 10 February at 13:00 to respond. We’ll email you with the outcome no matter what.</p>
                        </div>
                    </div>
                  </div>
                  <div class="find" v-if="index==2">
                    <div class="find_tab_l">
                      29 Dec 2020, 14:36
                    </div>
                    <div class="find_tab_r">
                        <div class="find_border">
                          <p class="first_p">William Clark responded to your request:</p>
                          <div>
                            <p>Reference number:ts #120107</p>
                            <p>Email:wrclark1961@gmail.com</p>
                            <p>Name:William Clark</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Report" :name="JSON.stringify({name:'report',id:item.id})">
                <div slot="label" class="tab_label">
                  <svg-icon value="icon-biaoji" :size="1.1" ></svg-icon> 
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
      </template>
      <empty v-else :tips="'No data available'"></empty>
    </div>
    <div class="pagination" v-if="page.pageTotal/page.pageSize>1">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pageIndex"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.pageTotal">
      </el-pagination>
    </div>
    <ReportDialog ref="reportdialog"></ReportDialog>
    <FindDialog ref="finddialog"></FindDialog>
  </div>
</template>
<script>
import { dateEnglish } from '../../commons';
export default {
  components:{
    ReportDialog:()=> import("./report-dialog"),
    FindDialog:()=> import("./find-dialog")
  },
  data(){
    return{
      searchVal:null, //搜索
      datePicker:[], //评论时间筛选
      activeCardName:null, //评论卡片操作选项卡
      replyTextarea:'', //商家回复
      isDown:true, //向下
      loading:false,
      starCom:null, //星星筛选条件
      replyCom:null, //回复筛选条件
      reportCom:null, //举报筛选条件
      reviewsList:[], //评论列表
      confrimBtnLoading:false,
      page:{
        pageSize:10, //每页数量
        pageTotal:null, //总数量
        pageIndex:1 //当前页
      },
      user: null, //商家信息
      replyEditId:null, //回复的id
    }
  },
  mounted(){
    this.getReviews();
  },
  methods:{
    dateEnglish,
    /**
     * 删除评论
     */
    handleDel(id){
      this.$apiHttp.siteDelReply({params:{id:id}}).then((resp)=>{
        if(resp.res==200){
          this.$message({
            message: 'Successfully deleted',
            type: 'success'
          });
          this.getReviews();
        }
      })
    },
    /**
     * 评论cancle
     */
    handleCancle(){
      this.replyTextarea=null;
      this.activeCardName=null;
      this.replyEditId=null;
    },
    /**
     * 点击修改按钮
     */
    handleEditReply(reply){
      this.replyEditId = reply.id;
      this.replyTextarea = reply.content;
    },
    /**
     * 商家回复/修改
     */
    handleReply(comId){
      this.confrimBtnLoading=true;
      const data={
        content:this.replyTextarea,
        commentId:comId,
        id:this.replyEditId,
      }
      this.$apiHttp.siteReply(data).then((resp)=>{
        if(resp.res==200){
          this.replyTextarea=null;
          this.replyEditId=null;
          this.$message({
            message: this.replyEditId?'Modification reply succeeded':'Reply succeeded',
            type: 'success'
          });
          this.getReviews();
        }
      }).finally(()=> this.confrimBtnLoading=false);
    },
    /**
     * 筛选条件选择切换
     */
    handleCommand(com,type){
      if(!com){
        return;
      }
      if(type==3){
        this.starCom = com;
      }else if(type==1){
        this.replyCom = com;
      }else if(type==2){
        this.reportCom = com;
      }
    },
    /**
     * 获取评论数据
     */
    getReviews(){
      this.loading=true;
      const data={
        search: this.searchVal,
        star:this.starCom,
        reply:this.replyCom,
        report:this.reportCom,
        startTime:this.datePicker.length>0?this.datePicker[0].timeFormat('yyyy-MM-dd'):null,
        endTime:this.datePicker.length>0?this.datePicker[1].timeFormat('yyyy-MM-dd'):null,
        offset:this.page.pageIndex,
        limit:this.page.pageSize,
      }
      this.$apiHttp.siteReviews({params:data}).then((resp)=>{
        if(resp.res==200){
          this.reviewsList=resp.data.reviews;
          this.page.pageTotal=resp.data.total;
        }
      }).finally(()=> this.loading=false);
    },
    /**
     * 评论状态切换
     */
    handleCardNameClick(tab, event){
      const tabData = JSON.parse(tab.name);
      if(tabData.name=='report'){
        this.$refs.reportdialog.openDialog();
      }else if(tabData.name=='find'){
        this.$refs.finddialog.openDialog();
      }
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
      this.getReviews();
    },
    /**
     * 清除筛选
     */
    handleClear(type){
      if(type==1){
        this.replyCom = null;
        this.$refs.reply.hide();
      }else if(type==2){
        this.reportCom = null;
        this.$refs.report.hide();
      }else if(type==3){
        this.starCom = null;
        this.$refs.starRate.hide()
      }
      this.getReviews();
    },
    handleSizeChange(val) {
      this.page.pageIndex=1;
      this.page.pageSize = val;
      this.getReviews();
    },
    handleCurrentChange(val) {
      this.page.pageIndex=val;
      this.getReviews();
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
    height: 100%;
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
          width: 185px;
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
              width: 185px;
              text-align: left;
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
                  font-size: 14px;
                  color: #6F6F87;
                }
                .el-button{
                  margin-right: 8px;
                }
              }
            }
          }
          .find_tab{
            padding: 18px 15px;
            background: #F9F9FA;
            .find{
              display: flex;
              flex-direction: row;
              .find_tab_l{
                width: 185px;
                text-align: left;
                font-size: 12px;
                color: #6F6F87;
              }
              .find_tab_r{
                flex: 1;
                .find_content{
                  p{
                    font-size: 14px;
                    margin-top: 0;
                    line-height: 23px;
                    word-break: break-all;
                    color: #454554;
                  }
                }
                .find_border{
                  padding: 16px;
                  border: 1px solid #DCDCE6;
                  border-radius: 4px;
                  background: #ffffff;
                  p{
                    margin: 0;
                    font-size: 14px;
                    color: #454554;
                  }
                  .first_p{
                    margin-bottom: 8px;
                  }
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