<template>
  <div class="review-alone">
    <div class="all_link">
      <span>< All reviews</span>
    </div>
    <div class="review_list" v-loading="loading">
      <template v-if="true">
        <div class="review_card" v-for="(item,index) in 1" :key="item">
          <div class="card_main">
            <div class="card_main_l">
              <rate
                class="c_rate"
                :value="4"
                :isDisabled="true"
              >
              </rate>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  BROKEPRODUCTIONS<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item class="review_name_dropdown"><a class="user_a" :href="`http://sitesjabber.com/profile?id=${3}`" target="_blank">BROKEPRODUCTIONS <i class="el-icon-document"></i></a></el-dropdown-item>
                  <el-dropdown-item class="review_name_dropdown" disabled><i class="el-icon-edit"></i> 32</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="card_main_r">
              <p>
                <span>I bought AIO stream</span>
                <span>27 Jan 2021</span>
              </p>
              <p>I bought AIO stream. it will blow your mind when you fully understand what this programm can do and what not. support always answered my questions and solved my problems.</p>
              <p>Source: Organic</p>
            </div>
          </div>
          <div class="card_btn_group">
            <el-tabs v-model="activeCardName" @tab-click="handleCardNameClick">
              <el-tab-pane label="Reply" :name="JSON.stringify({name:'reply',item:item})">
                <div slot="label" class="tab_label" v-if="item>0"><i class="el-icon-success"></i> <span>Replied</span></div>
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
              <!-- <el-tab-pane label="Share" :name="JSON.stringify({name:'share',item:item})">
                <div slot="label" class="tab_label"><svg-icon value="icon-fenxiang1" :size="1.1"></svg-icon> <span>Share</span></div>
                12
              </el-tab-pane> -->
              <el-tab-pane label="Find Reviewer" :name="JSON.stringify({name:'find',item:item})">
                <div slot="label" class="tab_label"><svg-icon value="icon-chazhao" :size="1.4"></svg-icon> <span>Find Reviewer</span> <el-tag size="mini" v-if="item.findReviewers.length">{{item.findReviewers.length}}</el-tag></div>
                <template v-if="item.findReviewers.length">
                  <div class="find_tab" v-for="(fitem,index) in item.findReviewers" :key="index">
                    <div class="find" v-if="fitem.status==1">
                      <div class="find_tab_l">
                        {{fitem.created.timeFormat('yyyy-MM-dd HH:mm')}}
                      </div>
                      <div class="find_tab_r">
                        <div class="find_content">
                          <p>You asked William Clark for more information.</p>
                        </div>
                      </div>
                    </div>
                    <div class="find" v-if="fitem.status==1 && fitem.consumer">
                      <div class="find_tab_l">
                        {{fitem.consumer.submittedAt.timeFormat('yyyy-MM-dd HH:mm')}}
                      </div>
                      <div class="find_tab_r">
                        <div class="find_border">
                            <p class="first_p">{{item.name}} responded to your request:</p>
                            <div>
                              <p>Reference number:{{fitem.consumer.referenceNumber}}</p>
                              <p>Email:{{fitem.consumer.email}}</p>
                              <p>Name:{{fitem.consumer.fullName}}</p>
                              <p>Phone:{{fitem.consumer.phoneNumber}}</p>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="find" v-if="fitem.status==0 || fitem.status==2">
                      <div class="find_tab_l">
                        {{fitem.created.timeFormat('yyyy-MM-dd HH:mm')}}
                      </div>
                      <div class="find_tab_r">
                        <div class="find_border" v-if="fitem.status==2">
                          <p>Unfortunately, {{item.name}} did not respond to your Find Reviewer request within the 3 day response period.</p>  
                        </div>
                        <div class="find_border" v-if="fitem.status==0">
                          <p>They have until {{getThreeDayTime(fitem.created)}} to respond. We'll email you with the outcome no matter what.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane label="Report" :name="JSON.stringify({name:'report',item:item})">
                <div slot="label" class="tab_label">
                  <svg-icon value="icon-biaoji" :size="1.1" ></svg-icon> 
                  <span v-if="!item.investigations.length">Report</span>
                  <span v-else-if="item.reportSta==0">Invistigation in progress</span>
                  <span v-else>Invistigation complete</span>
                </div>
                <div class="report_tab" v-if="item.investigations.length">
                  <el-timeline v-if="!isDown">
                    <el-timeline-item :timestamp="report.time.timeFormat('yyyy-MM-dd HH:mm')" placement="top" v-for="(report,index) in item.investigations" :key="index">
                      <el-card>
                        <div class="report_card_main">
                          <span class="r_c_m_l">{{report.state==0?'Invistigation in progress:':'Invistigation complete:'}}</span> 
                          <div class="r_c_m_r">
                            <p class="p_one" v-if="report.state==2 || report.state==1">
                              The review {{report.state==2?"doesn't":""}} breach our guidelines for:
                            </p>
                            <p><strong>{{report.reportingReason}}</strong></p>
                            <p>{{report.content}}</p>
                          </div>
                        </div>
                        <p v-if="report.state==2 || report.state==1">
                          <el-button plain icon="el-icon-reading" @click="handleRead(item,report)">Read our decision</el-button>
                          <el-button type="text" class="dif_issue" @click="handleDifferent(item.id)">There's a different issue</el-button>
                        </p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                  <el-timeline v-else>
                    <el-timeline-item :timestamp="item.investigations[0].time.timeFormat('yyyy-MM-dd HH:mm')" placement="top" :key="index">
                      <el-card>
                        <div class="report_card_main">
                          <span class="r_c_m_l">{{item.investigations[0].state==0?'Invistigation in progress:':'Invistigation complete:'}}</span> 
                          <div class="r_c_m_r">
                            <p v-if="item.investigations[0].state==1 || item.investigations[0].state==2" class="p_one">
                              The review {{item.investigations[0].state==2?"doesn't":""}} breach our guidelines for:
                            </p>
                            <p><strong>{{item.investigations[0].reportingReason}}</strong></p>
                            <p>{{item.investigations[0].content}}</p>
                          </div>
                        </div>
                        <p v-if="item.investigations[0].state==1 || item.investigations[0].state==2">
                          <el-button plain icon="el-icon-reading" @click="handleRead(item,item.investigations[0])">Read our decision</el-button>
                          <el-button type="text" class="dif_issue" @click="handleDifferent(item.id)">There's a different issue</el-button>
                        </p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                  <div class="show_btn" v-if="item.investigations.length>1">
                    <el-button type="text" :icon="!isDown?'el-icon-caret-top':'el-icon-caret-bottom'" @click="isDown=!isDown">{{isDown?'Show history':'Hide history'}}</el-button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </template>
      <empty v-else :tips="'No data available'"></empty>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      loading:false,
      activeCardName:null, //评论卡片操作选项卡
    }
  },
  methods:{
    /**
     * 评论状态切换
     */
    handleCardNameClick(tab, event){
      const tabData = JSON.parse(tab.name);
      // if(tabData.name=='find'){
      //   this.selReviews=null;
      //   this.selReviews=tabData.item;
      //   this.$refs.finddialog.openDialog();
      // }
      if(tabData.name=='report' && tabData.item.investigations.length==0){
        this.selCommonId=tabData.item.id;
        this.$refs.reportdialog.openDialog();  
      }else if(tabData.name=='find' && tabData.item.findReviewers.length==0){
        this.selReviews=null;
        this.selReviews=tabData.item;
        this.$refs.finddialog.openDialog();
      }
    },
  }
}
</script>
<style lang="less" scoped>
.review-alone{
  background: #F9F9F9;
  .all_link{
    background: #f5f9fc;
    border-bottom: 1px solid #eaedf3;
    padding: 16px 32px;
    span{
      color: #454554;
      cursor: pointer;
      font-size: 15px;
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
            .report_card_main{
              display: flex;
              flex-direction: row;
              .r_c_m_l{
                flex-shrink: 0;
              }
              .r_c_m_r{
                margin-left: 8px;
                p{
                  margin: 0 0 5px;
                }
                .p_one{
                  margin-bottom: 10px !important;
                }
              }
            }
          }
        }
      }
    }
    /deep/.el-loading-mask{
      .el-loading-spinner{
        position: fixed;
        max-width: 980px;
      }
    }
  }
}
@media all and (max-width: 1024px) {
  .review-alone{
    .review_list{
      padding: 0 3px;
      .review_card{
        .card_main{
          flex-direction: column;
          padding: 18px 13px;
          .card_main_l{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .c_rate{
              /deep/.icon-pingfendengjiRating4{
                font-size: 22px;
              }
            }
          }
          .card_main_r{
            flex: 1;
            p:nth-child(1){
              display: flex;
              flex-direction: column;
              margin-top: 0;
              span:nth-child(1){
                width: 100%;
                margin-bottom: 3px;
              }
            }
          }
        }
        .card_btn_group{
          position: relative;
          .el-tabs{
            /deep/.el-tabs__nav-wrap{
              padding:0px 18px;
              overflow-x: scroll;
            }
            /deep/.el-tabs__nav{
              display: flex;
              align-items: center;
            }
            /deep/.el-tabs__nav-scroll{
              float: left;
            }
            .reply_tab{
              flex-direction: column;
              .reply_tab_l{
                width: 100%;
                margin-bottom: 5px;
              }
            }
            .find_tab{
              .find{
                display: flex;
                flex-direction: column;
                .find_tab_l{
                  width: 100%;
                }
              }
            }
            .report_tab{
              padding: 18px 15px;
              background: #F9F9FA;
              /deep/.el-timeline{
                padding: 0;
              }
              .show_btn{
                padding-left: 0px;
              }
              .report_card_main{
                display: flex;
                flex-direction: column;
                .r_c_m_r{
                  margin-left: 0px;
                  p{
                    margin: 0 0 5px;
                  }
                  .p_one{
                    margin-bottom: 10px !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>