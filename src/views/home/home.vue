<template>
  <div class="home">
    <el-row :gutter="8" class="row">
      <el-col :span="12">
        <div class="card">
          <div class="card_title">
            <div class="card_title_left">
              <span>Overall performance</span>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <i class="el-icon-info"></i>
              </el-tooltip>
            </div>
          </div>
          <div class="card_score">
            <h5>Great</h5>
            <rate
              class="c_rate"
              :value="3.5"
              :isDisabled="true"
            >
            </rate>
            <div class="reviews_num">Based on <strong>152</strong> reviews</div>
          </div>
          <div class="trust_score">
            <div>TRUSTSCORE</div>
            <div><strong>3.8</strong> out of 5</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card">
          <div class="card_title">
            <div class="card_title_left">
              <span>Engage</span>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <i class="el-icon-info"></i>
              </el-tooltip>
            </div>
            <div class="card_title_right">
              Service Reviews
            </div>
          </div>
          <p class="eng_reviews">Your 3 latest reviews</p>
          <div class="reviews_list">
            <div class="reviews_item" v-for="(item,index) in 3" :key="index">
              <span class="reviews_item_l">"</span>
              <div class="reviews_item_r">
                <div>These guys work very hard and impatient users These guys work very hard and impatient usersThese guys work very hard and impatient users</div>
                <div>
                  <rate
                    class="c_rate"
                    :value="5"
                    :isDisabled="true"
                  >
                  </rate>
                  <span>By Jamie Chamber, 2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="24">
        <div class="card">
          <div class="card_title">
            <div class="card_title_left">
              <span>Your reviews</span>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <i class="el-icon-info"></i>
              </el-tooltip>
            </div>
          </div>
          <div class="reviews">
            <div class="reviews_l">
              <p>No reviews to show for this time frame.</p>
              <p>Try broadening your search</p>
            </div>
            <div class="reviews_r">
              <p>STAR DISTRIBUTION</p>
              <div class="reviews_star_list">
                <div class="star_item">
                  <span>5 stars</span>
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="70" color="#00B67A"></el-progress>
                  <span>32 Reviews</span>
                </div>
                <div class="star_item">
                  <span>4 stars</span>
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="80" color="#73CF11"></el-progress>
                  <span>32 Reviews</span>
                </div>
                <div class="star_item">
                  <span>3 stars</span>
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="30" color="#FFCE00"></el-progress>
                  <span>32 Reviews</span>
                </div>
                <div class="star_item">
                  <span>2 stars</span>
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="90" color="#FF8622"></el-progress>
                  <span>32 Reviews</span>
                </div>
                <div class="star_item">
                  <span>1 stars</span>
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="20" color="#FF3722"></el-progress>
                  <span>32 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
}
</script>
<style lang="less" scoped>
.home{
  padding:10px;
  background: #F9F9F9;
  height: calc(100% - 20px);
  .row{
    height: 49%;
    .el-col{
      height: 100%;
      .card{
        background: #ffffff;
        border: 1px solid #e4ebf3;
        border-radius: 3px;
        height: 100%;
        padding: 0 20px 0 26px;
        .card_title{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 26px 0;
          .card_title_left{
            span{
              color: #454554;
              margin-right: 5px;
            }
            .el-icon-info{
              color: #C5C5D6;
            }
          }
          .card_title_right{
            color: #C5C5D6;
            font-size: 14px;
          }
        }
        .card_score{
          h5{
            font-weight:normal;
            font-size: 22px;
            color: #454554;
            margin: 10px 0;
          }
          .c_rate{
            height: 38px;
            /deep/.icon-pingfendengjiRating4{
              font-size: 34px;
            }
          }
          .reviews_num{
            font-size: 13px;
            color: #6F6F87;
          }
        }
        .trust_score{
          border: 1px solid #DCDCE6;
          margin-top: 27px;
          padding: 23px 17px 21px;
          border-radius: 5px;
          div:first-child{
            font-size: 14px;
            color: #6F6F87;
          }
          div:last-child{
            color: #454554;
            font-size: 18px;
            margin-top: 5px;
          }
        }
        .eng_reviews{
          margin: 0;
          font-size: 13px;
          color: #6F6F87;
        }
        .reviews_list{
          margin-top: 10px;
          .reviews_item{
            display: flex;
            flex-direction: row;
            margin-bottom: 11px;
            .reviews_item_l{
              flex-shrink: 0;
              font-size: 33px;
            }
            .reviews_item_r{
              padding-top: 9px;
              margin-left: 3px;
              div:first-child{
                font-size: 14px;
                color: #454554;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
              }
              div:last-child{
                margin-top: 5px;
                display: flex;
                flex-direction: row;
                align-items: center;
                span{
                  font-size: 13px;
                  color: #9A9AB5;
                  margin-left: 5px;
                }
                .c_rate{
                  line-height: 20px;
                  /deep/.el-rate__icon{
                    margin-right: 3px;
                  }
                }
              }
            }
          }
        }
        .reviews{
          display: flex;
          flex-direction: row;
          align-items: center;
          .reviews_l{
            width: 40%;
            p:first-child{
              color: #454554;
            }
            p:last-child{
              font-size: 14px;
              color: #6F6F87;
            }
          }
          .reviews_r{
            width:60%;
            p{
              font-size: 14px;
              color: #6F6F87;
              margin: 0 0 20px;
            }
            .reviews_star_list{
              width: 100%;
              .star_item{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 12px;
                .el-progress{
                  width: 70%;
                  margin: 0 8px;
                }
                span{
                  font-size: 14px;
                  color: #6F6F87;
                }
              }
            }
          }
        }
      }
    }
  }
  .row:last-child{
    margin-top: 8px;
  }
}
</style>