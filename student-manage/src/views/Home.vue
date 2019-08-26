<template>
  <div class="home">
    <!-- 调用插槽 -->
    <Heade slot="header">
      <template slot="header">
        XX学生日周考试成绩统计表
      </template>
    </Heade>
    <section class="main">
      <section class="main_header">
        <div class="main_header_left">
         <p>讲师：<span>xxxx</span></p> 
         <p>学生：<span>xxxx</span></p>
        </div>
        <div class="main_header_right">
         <input type="text">
        </div>
      </section>
      <section class="main_form_box">
        <div class="main_form_box_title">
          <ul>
            <li>序号</li>
            <li>日期
              <span></span>
            </li>
            <li>理论</li>
            <li>技能</li>
            <li>分析和解决</li>
            <li>是否周考</li>
            <li>操作</li>
          </ul>
          <ol>
            <li>
              <span>1</span>
              <span>11-03-2017</span>
              <span>100</span>
              <span>Transfering</span>
              <span>对方过后就给烦的水电费阿斯顿发刻录机拉开距离时刻就福利撒的发撒的水电费水电费是胜多负少的方式</span>
              <span>否</span>
              <p>
                <span>编辑、</span>
                <span>删除</span>
              </p>
            </li>
            <li>
              <span>1</span>
              <span>11-03-2017</span>
              <span>100</span>
              <span>Transfering</span>
              <span>对方过后就给烦的水电费阿斯顿发刻录机拉开距离时刻就福利撒的发撒的水电费水电费是胜多负少的方式</span>
              <span>否</span>
              <p>
                <span>编辑、</span>
                <span>删除</span>
              </p>
            </li>
            <li>
              <span>1</span>
              <span>11-03-2017</span>
              <span>100</span>
              <span>Transfering</span>
              <span>对方过后就给烦的水电费阿斯顿发刻录机拉开距离时刻就福利撒的发撒的水电费水电费是胜多负少的方式</span>
              <span>否</span>
              <p>
                <span>编辑、</span>
                <span>删除</span>
              </p>
            </li>
          </ol>
        </div>
      </section>
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Heade from '@/components/heade'
export default Vue.extend({
  name: 'home',
  components: {
    Heade
  },
});
</script>
<style lang="scss">
  * {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .home {
   left: 0px;
   top: 0px;
   width: 1440px;
   height: 1634px;
   line-height: 20px;
   text-align: center;
   border: 1px solid rgba(187, 187, 187, 1);
  }
  @media screen and (min-width: 960px) and (max-width : 1920px) {
    .main {
      flex: 1;
    }
    .main_header {
      width: 70%;
      height: 100px;
      border: 1px solid rgba( 187, 187,187,1);      
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 49px 0 59px;
      box-sizing: border-box;
      .main_header_left {
        display: flex;
         p {
           height: 20px;
           &:first-child {
             margin-right: 25px;
           }
         }
      }
      .main_header_right {
        width: 224px;
        height: 40px;
        padding-right: 49px;
        overflow: hidden;
        border: 1px solid #eee;
        input {
          width: 100%;
          height: 100%;
          background: none;
          outline: none;
          border: none;
        }
      }
    }
    .main_form_box {
      left: 77px;
      top: 271px;
      width: 70%;
      height: 343px;
      line-height: 20px;
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      font-family: Roboto;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 8px auto;
      .main_form_box_title {
        width: 100%;
        ul {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba( 187, 187,187,1);
          box-sizing: border-box;
          li {
            &:first-child {
              left: 75px;
              top: 287px;
              width: 53px;
              height: 20px;
              line-height: 20px;
              border-radius: 2px 2px 2px 2px;
              color: rgba(16, 16, 16, 1);
              font-size: 14px;
              text-align: center;
              font-family: Roboto;
              border: 1px solid rgba(220, 223, 230, 1);
            }
            &:nth-child(2) {
              left: 148px;
              top: 289px;
              width: 37px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
              padding-left: 42px;
              margin-right: 70px;
              span {
                left: 185px;
                top: 296px;
                width: 10px;
                height: 5px;
                background-color: rgba(144, 147, 153, 1);
              }
            }
            &:nth-child(3) {
              left: 306px;
              top: 290px;
              width: 37px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
              padding-right: 90px;
            }
            &:nth-child(4) {
              left: 443px;
              top: 289px;
              width: 37px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
              margin-right: 201px;
            }
            &:nth-child(5) {
              left: 1195px;
              top: 291px;
              width: 76px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
              padding-right: 185px;
            }
            &:nth-child(6) {
              left: 1290px;
              top: 290px;
              width: 62px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
              padding-right: 39px;
            }
            &:nth-child(7) {
              left: 1290px;
              top: 290px;
              width: 42px;
              height: 20px;
              color: rgba(144, 147, 153, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
            }
          }
        }
        ol {
          width: 100%;
          li {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba( 187, 187,187,1);
            box-sizing: border-box;
            >span {
              display: flex;
              display: inline-block;
              box-sizing: border-box;
              &:first-child {
                left: 93px;
                top: 355px;
                width: 18px;
                height: 20px;
                line-height: 20px;
                border-radius: 2px 2px 2px 2px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Roboto;
                border: 1px solid rgba(220, 223, 230, 1);
                margin-left: 16px;
              }
              &:nth-child(2) {
                left: 148px;
                top: 359px;
                width: 98px;
                height: 20px;
                color: rgba(96, 98, 102, 1);
                font-size: 14px;
                text-align: left;
                font-family: Roboto-regular;
                margin-left: 37px;
             }
              &:nth-child(3) {
                left: 283px;
                top: 358px;
                width: 72px;
                height: 14px;
                color: rgba(96, 98, 102, 1);
                font-size: 14px;
                text-align: center;
                font-family: Roboto-regular;
                padding-left: 37px;
                margin-right: 88px;
             }
             &:nth-child(4) {
                left: 443px;
                top: 357px;
                width: 100px;
                height: 20px;
                color: rgba(96, 98, 102, 1);
                font-size: 14px;
                text-align: left;
                font-family: Roboto-regular;
             }
             &:nth-child(5) {
                left: 597px;
                top: 355px;
                width: 380px;
                height: 28px;
                color: rgba(96, 98, 102, 1);
                font-size: 14px;
                text-align: left;
                font-family: Roboto-regular;
                padding-left: 24px;
             }
             &:nth-child(6) {
                left: 1204px;
                top: 349px;
                width: 18px;
                height: 20px;
                color: rgba(96, 98, 102, 1);
                font-size: 14px;
                text-align: left;
                font-family: Roboto-regular;
                margin-left: 41px;
             }
            }
           >p {
             margin-left: 47px;
             span {
              left: 1279px;
              top: 350px;
              width: 78px;
              height: 15px;
              color: rgba(96, 98, 102, 1);
              font-size: 14px;
              text-align: left;
              font-family: Roboto-regular;
            }
           }
          }
        }
      }
    }
  }
</style>