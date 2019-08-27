<template>
  <div class="KeyCharts">
    <div class="KeyChartsTop">
      <span>重点关注学生考试成绩统计图</span>
    </div>
    <div class="keyChartsListWrap">
      <div class="keyChartsList">
        <div class="keyChartsListTop">
          <div class="keyChartsListTopLe">选择班级:</div>
          <ul class="uls">
            <li class="active">1703D</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
            <li>1704A</li>
          </ul>
        </div>
      </div>
      <div class="keyChartsListDown">
        <div class="keyChartsListDownLe">
          名单：
          <span>张三，张立，王强（3/人）</span>
        </div>
        <div>柱形图/线图</div>
      </div>
    </div>
    <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
    <div class="KeyChartsRecord">
      <div class="KeyChartsRecordLe">
        <p>2019-08-30</p>
        <p>今日分析及解决方案：</p>
        <p>点击查看历史记录</p>
      </div>
      <div
        class="KeyChartsRecordRi"
      >撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好</div>
    </div>
  </div>
</template>
   
<script lang="ts">
import Vue from "vue";
import echarts from "echarts";
export default Vue.extend({
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "xx同学的日周考成绩统计图",
          subtext: "仅供参考"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["理论", "技能"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "08-01",
            "08-02",
            "08-03",
            "08-04",
            "08-05",
            "08-06",
            "08-07",
            "08-08",
            "08-09",
            "08-10",
            "08-11",
            "08-12",
            "08-13"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "1",
            type: "line",
            data: [20, 50, 86.5, 30, 34.8, 60, 82.2, 60, 20, 60, 40, 50, 30],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "2",
            type: "line",
            data: [20, 50, 70, 20, 30, 76.6, 78, 82.2, 40, 60, 22, 40, 23],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    }
  }
});
</script>
<style lang="scss" scoped>
@media screen and (min-width: 428px) and (max-width: 1920px) {
  .KeyCharts {
    width: 80%;
    height: 100%;
    overflow-y: auto;
    background: #e4e4e4;
    .KeyChartsTop {
      width: 100%;
      height: auto;
      background: #0076ff;
      color: #fff;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
    }
    .keyChartsListTop {
      display: flex;
      width: 100%;
      height: auto;
      padding: 20px 40px;
      box-sizing: border-box;
    }
    .keyChartsListWrap {
      width: 100%;
      height: auto;
      background: #fff;
    }
    .keyChartsList {
      width: 100%;
      height: auto; 
      display: flex;
      .keyChartsListTopLe {
        flex-shrink: 0;
      }
      .uls {
        display: flex;
        list-style: none;
        width: 100%;
        height: 100px;
        flex-wrap: wrap;
        li {
          padding: 12px 25px;
          height: 40px;
          box-sizing: border-box;
          line-height: 18px;
          margin-left: 40px;
          border-radius: 4px;
          color: rgba(25, 137, 250, 1);
          background-color: rgba(230, 241, 252, 1);
          text-align: center;
          border: 1px solid rgba(163, 208, 253, 1);
        }
        .active,
        :hover {
          background-color: rgba(24, 144, 255, 1);
          color: #fff;
        }
      }
    }
    .keyChartsListDown {
      display: flex;
      width: 100%;
      height: 50px;
      padding: 5px 40px;
      box-sizing: border-box;
      justify-content: space-between;
      line-height: 50px;
      background: #fff;
    }
    #chart {
      width: 300px;
      height: 300px;
    }
    #myChart {
      margin-top: 20px;
      background: #fff;
    }
    .KeyChartsRecord {
      width: 100%;
      height: 100px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      .KeyChartsRecordLe {
        flex-shrink: 0;
      }
    }
  }
}

@media screen and (max-width: 428px) {
  .KeyCharts {
    width:100%;
    height: 100%;
    overflow-y: auto;
    background: #e4e4e4;
    .KeyChartsTop {
      width: 100%;
      height: auto;
      background: #0076ff;
      color: #fff;
      text-align: center;
      line-height: 2rem;
      font-size: 0.3rem;
    }
    .keyChartsListTop {
      display: flex;
      width: 100%;
      height: auto;
      padding: 0.4rem 0.8rem;
      box-sizing: border-box;
    }
    .keyChartsList {
      width: 100%;
      height: auto;
      background: #fff;
      display: flex;
      .keyChartsListTopLe {
        flex-shrink: 0;
      }
      .uls {
        display: flex;
        list-style: none;
        width: 100%;
        height: 2rem;
        flex-wrap: wrap;
        li {
          padding: 0.35rem 0.5rem;
          height: 0.8rem;
          box-sizing: border-box;
          line-height: 0.36rem;
          margin-left: 0.8rem;
          border-radius: 0.01rem;
          color: rgba(25, 137, 250, 1);
          background-color: rgba(230, 241, 252, 1);
          text-align: center;
          border: 1px solid rgba(163, 208, 253, 1);
        }
        .active,
        :hover {
          background-color: rgba(24, 144, 255, 1);
          color: #fff;
        }
      }
    }
    .keyChartsListDown {
      display: flex;
      width: 100%;
      height: 1rem;
      padding: 0.01rem 0.8rem;
      box-sizing: border-box;
      justify-content: space-between;
      line-height: 1rem;
      background: #fff;
    }
    #chart {
      width: 6rem;
      height: 6rem;
    }
    #myChart {
      margin-top: 0.4rem;
      background: #fff;
    }
    .KeyChartsRecord {
      width: 100%;
      height: 2rem;
      padding: 0.2rem;
      box-sizing: border-box;

      display: flex;
      .KeyChartsRecordLe {
        flex-shrink: 0;
      }
    }
  }
}
</style>
