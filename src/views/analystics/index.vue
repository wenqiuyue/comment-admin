<template>
  <div class="analystics">
    <div class="echar">
      <div class="echar_title">
        <div class="echar_title_l">
          Reviews-19
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </div>
        <el-date-picker
          v-model="reviewNumDate"
          type="monthrange"
          range-separator="-"
          start-placeholder="Start month"
          end-placeholder="End month">
        </el-date-picker>
      </div>
      <div id="reviewNum" style="width: 100%;height:450px;"></div>
    </div>
    <div class="echar">
      <div class="echar_title">
        <div class="echar_title_l">
          Total reviews by rating
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </div>
        <el-date-picker
          v-model="totalRatingDate"
          type="monthrange"
          range-separator="-"
          start-placeholder="Start month"
          end-placeholder="End month">
        </el-date-picker>
      </div>
      <div class="stars_list">
        <el-steps align-center>
          <el-step title="17" description="5 STARS" icon="el-icon-edit">
            <svg-icon slot="icon" value="icon-xingxing" :size="2"></svg-icon>
          </el-step>
          <el-step title="17" description="4 STARS" icon="el-icon-upload">
            <svg-icon slot="icon" value="icon-xingxing" :size="2"></svg-icon>
          </el-step>
          <el-step title="17" description="3 STARS" icon="el-icon-picture">
            <svg-icon slot="icon" value="icon-xingxing" :size="2"></svg-icon>
          </el-step>
          <el-step title="17" description="2 STARS" icon="el-icon-picture">
            <svg-icon slot="icon" value="icon-xingxing" :size="2"></svg-icon>
          </el-step>
          <el-step title="17" description="1 STARS" icon="el-icon-picture">
            <svg-icon slot="icon" value="icon-xingxing" :size="2"></svg-icon>
          </el-step>
        </el-steps>
      </div>
      <div id="totalRating" style="width: 100%;height:400px; top:-70px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      reviewNumDate:[], //评论条数图标日期
      totalRatingDate:[],
      echarts:null
    }
  },
  created(){
    this.echarts = require('echarts');
  },
  mounted(){
    this.reviewNumEcharts();
    this.totalRatingEcharts();
  },
  methods:{
    reviewNumEcharts(){
      // 基于准备好的dom，初始化echarts实例
		  var myChart = this.echarts.init(document.getElementById('reviewNum'));

		  // 指定图表的配置项和数据
		  var option = {
			  tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          padding: [0,40,0,0],
          itemGap: 16,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
			  legend: {
           x: 'center',
				  data:['1-star','2-star','3-star','4-star','5-star','Average rating']
			  },
			  xAxis: {
          type: 'category',
				  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			  },
			  yAxis: [
          {
            type: 'value',
            name: '#Reviews',
          },
          {
              type: 'value',
              name: 'Rating',
              min: 0,
              max: 5,
          }
        ],
			  series: [{
				  name: '1-star',
          type: 'bar',
          stack: 'star',  //控制堆叠类型柱状图
				  data: [2, 20, 16, 10, 18, 27,42,21,12,43,34,69]
        },
        {
				  name: '2-star',
          type: 'bar',
          stack: 'star',
				  data: [32, 23, 35, 15, 13, 20,34,12,54,34,76,29]
        },
        {
				  name: '3-star',
          type: 'bar',
          stack: 'star',
				  data: [12, 10, 12, 20, 43, 12,34,12,16,32,21,19]
        },
        {
				  name: '4-star',
          type: 'bar',
          stack: 'star',
				  data: [45, 1, 21, 30, 21, 21,54,12,32,54,23,21]
        },
        {
				  name: '5-star',
          type: 'bar',
          stack: 'star',
				  data: [3, 32, 31, 11, 20, 54,12,2,11,21,7,12]
        },
        {
				  name: 'Average rating',
          type: 'line',
				  data: [76, 25, 36, 11, 18, 65,21,21,43,54,32,65]
			  }]
		  };
		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
      },

      totalRatingEcharts(){
      // 基于准备好的dom，初始化echarts实例
		  var myChart =this.echarts.init(document.getElementById('totalRating'));

		  // 指定图表的配置项和数据
		  var option = {
			  tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}'
        },
			  legend: {
          // orient: 'vertical',
          bottom: 10,
          left: 'center',
				  data:['1-star','2-star','3-star','4-star','5-star']
			  },
			  series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '1-star'},
                {value: 310, name: '2-star'},
                {value: 234, name: '3-star'},
                {value: 135, name: '4-star'},
                {value: 1548, name: '5-star'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
          }]
		  };
		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		}
  }
  
}
</script>
<style lang="less" scoped>
.analystics{
  padding:10px;
  background: #F9F9F9;
  .echar{
    background: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    border: 1px solid #ebeef5;
    padding: 22px;
    margin-bottom: 8px;
    .echar_title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      .echar_title_l{
        color: #89847B;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .stars_list{
      margin: 35px 0;
      /deep/.is-wait{
        color: #4E4E4F;
      }
    }
  }
}
</style>
