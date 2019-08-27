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
        <div  class="main_header_right">
         <input type="text">
         <div class="selecd">
           <ul>
             <li>学生1</li>
             <li>学生2</li>
             <li>学生3</li>
             <li>学生4</li>
             <li>学生5</li>
           </ul>
         </div>
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
              <span>45</span>
              <span>Transfering</span>
              <span>对方过后就给烦的水电费阿斯顿发刻录机拉开距离时刻就福利撒的发撒的水电费水电费是胜多负少的方式</span>
              <span>否</span>
              <p>
                <span @click="compile">编辑、</span>
                <span>删除</span>
              </p>
            </li>
          </ol>
        </div>
        <div v-show="flag===false ? false : true" class="editbox">
          <div class="editbox_title">
            <span>编辑内容</span>
            <span>x</span>
          </div>
          <div class="editbox_cont">
            <label for="">
              <span>理论</span>
              <div>
               <input type="text">
              </div>
            </label>
            <label for="">
              <span>技能</span>
              <div>
               <input type="text">
              </div>
            </label>
          </div>
          <div class="ditbox_btn">
            <span>
              <i></i>
              日考
            </span>
            <span>
              <i></i>
              周考
            </span>
          </div>
          <div class="solution">
            <span>分析解决方案</span>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div class="editbox_footer">
            <span @click="cancel">取消</span>
            <span @click="hasClick">确定</span>
          </div>
        </div>
      </section>
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Heade from '../components/heade'
export default Vue.extend({
  name: 'home',
  components: {
    Heade
  },
  data() {
    return {
      flag:false
    }
  },
  methods : {
    compile() {
      this.flag = true
    },
    //取消
    cancel() {
      this.flag = false
      console.log('你点击了取消')
    },
    //确定
    hasClick() {  
      this.flag = false
      console.log('你点击了确定')
    }
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
   width: 1439px;
   height: 100%;
   line-height: 20px;
   text-align: center;
   border: 1px solid rgba(187, 187, 187, 1);
   margin: auto;
  }
  @media screen and (min-width: 960px) and (max-width : 1920px) {
    .main {
      flex: 1;
      margin: auto;
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
        // overflow: hidden;
        border: 1px solid #eee;
        input {
          width: 100%;
          height: 100%;
          background: none;
          outline: none;
          border: none;
        }
        .selecd {
          width: 224px;
          height: 258px;
          border-radius: 4px 4px 4px 4px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
          font-family: Roboto;
          ul {
            li {
              width: 100%;
              height: 30px;
            }
          }
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
              margin-left: 42px;
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
              margin-left: 7px;
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
    .editbox {
      left: 194px;
      top: 755px;
      width: 483px;
      height: 431px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .editbox_title {
        display: flex;
        justify-content: space-between;
        padding: 25px 24px;
      }
      .editbox_cont {
        label {
          display: flex;
          align-items: center;
          span {
            margin-right: 32px;
            margin-left: 55px;
            margin-top: 24px;
          }
          div {
            width: 297px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid rgba(220,223,230,1);
            margin-top: 24px;
            overflow: hidden;
            input {
              width: 100%;
              height: 100%;
              border: none;
            }
          }
        }
      }
    }
    .ditbox_btn {
      display: flex;
      margin-left: 95px;
      padding: 25px 25px;
      span {
        display: flex;
        padding: 10px 30px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        border: 1px solid rgba(25, 137, 250, 1);
        align-items: center;
        margin-right: 10px;
        i {
          width: 14px;
          height: 14px;
          margin-right: 5px;
          background-color: rgba(25, 137, 250, 1);
        }
      }
    }
    .solution {
      display: flex;
      padding: 0 25px;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
    .editbox_footer {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      span {
        display: flex;
        padding: 10px 25px;
        border-radius: 4px;
        background-color: rgba(217,217,217,1);
        margin-right: 20px;
        margin-top: 5px;
        &:last-child {
           background-color: rgba(24,144,255,1);
        }
      }
    }
  }
</style>