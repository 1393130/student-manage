<template>
  <div class="wrap">
    <Heade slot="header">
      <template slot="header">
        重点关注学生考试成绩统计表
      </template>
    </Heade>
    <section class="main">
      <div class="main_title">
        <div class="main_title_top">
          <p>选择班级：</p>
          <ul>
            <li class="active">1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
            <li>1703D</li>
          </ul>
        </div>
        <div class="main_title_bottom">
          <p>单位：</p>
          <div class="main_title_bottom_cont">
            张三，张丽，王强
            <span>（3/人）</span> 
          </div>
        </div>
      </div>
      <div class="main_box_echarst" ref="chart">

      </div>
    </section>
  </div>
</template>
<script>
import Heade from '../components/heade'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  props:{
    
  },
  components:{
    Heade
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    drawLine() {
      let myChart = this.$echarts.init(this.$refs.chart)
      myChart.setOption({
        title: { text: 'xxx同学的日周考成绩统计图' },
        tooltip: {
          trigger : 'axis'
        },
        legend: {
          data: ['技能','理论']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
         }
        },
        xAxis: {
          type: 'category',
          data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07']
        },
        yAxis: {},
        series: [
        {
            name:'技能',
            type:'line',
            data: [5, 100, 36, 10, 10, 20],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'理论',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
         }
       ]
      })
    }
  },
  created(){

  },
  mounted(){
    this.drawLine()
  }
}
</script>
<style scoped lang="scss">
 .wrap {
   width: 80%;
   height: 100%;
   margin: auto;
 }
 @media screen and (min-width: 960px) and (max-width : 1920px) {
   .main {
     flex: 1;
     margin: auto;
   }
   .main_title {
     left: 0px;
     top: 102px;
      width: 80%;
     height: 202px;
     line-height: 20px;
     text-align: center;
     border: 1px solid rgba(187, 187, 187, 1);
   }
   .main_title_top {
     display: flex;
     padding: 32px 40px 14px 0px;
     box-sizing: border-box;
     p {
        left: 43px;
        top: 134px;
        width: 70px;
        height: 20px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
        margin-left: 43px;
     }
     ul {
       width: 1000px;
       display: flex;
       flex-shrink: 0;
       flex-wrap: wrap;
       li {
          border-radius: 4px;
          background-color: rgba(230, 241, 252, 1);
          text-align: center;
          padding: 10px 17px;
          margin-left: 44px;
          margin-bottom: 10px;
          &.active {
            background-color: rgba(24,144,255,1);
          }
       }
     }
   }
   .main_title_bottom {
     box-sizing: border-box;
     margin-left: 56px;
     display: flex;
     height: 45px;
     align-items: center;
     p {
        left: 56px;
        top: 258px;
        width: 42px;
        height: 20px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
     }
     .main_title_bottom_cont {
       width: 1067px;
       height: 45px;
       left: 152px;
       line-height: 45px;
       color: rgba(16, 16, 16, 1);
       font-size: 14px;
       text-align: left;
       font-family: Roboto;
       border: 1px solid rgba(187, 187, 187, 0);
       margin-left: 54px;
     }
   }
   .main_box_echarst {
      width: 1440px;
      height: 613px;
   }
 }
</style>