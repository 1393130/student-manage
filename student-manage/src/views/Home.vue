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
         <!-- <div class="selecd">
           <ul>
             <li>学生1</li>
             <li>学生2</li>
             <li>学生3</li>
             <li>学生4</li>
             <li>学生5</li>
           </ul>
         </div> -->
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
              <span>45</span>
              <span>Transfering</span>
              <span>斯顿发刻福利撒的发撒的水撒的发生的发生的水电费水电费水电费所得税法水电费水电费水电费电费是胜多负少的方式</span>
              <span>否</span>
              <p>
                <span @click="compile">编辑,</span>
                <span @click="deletes">删除</span>
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
        <div v-show="deleteoff === false ? false : true " class="bg">
          <div class="dialog">
            <span>你确定删除吗？</span>
            <div class="dialog_btn">
              <span @click="deletecancel">取消</span>
              <span>确定</span>
            </div>
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
      flag:false,
      deleteoff:false
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
    },
    //删除
    deletes() {
      this.deleteoff = true
      console.log('点击了删除')
    },
    //删除的取消
    deletecancel() {
      this.deleteoff = false
      console.log('点击了删除的取消')
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
  @media screen and (min-width: 428px) and (max-width: 1920px) {
    * {
      box-sizing: border-box;
    }
    .home {
      width:80%;
      height: 100%;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgba(187, 187, 187, 1);
     
    }
    .main {
      width: 80%;
 
      position: relative;
    }
    .main_header {
      width: 70%;
      height: 100px;
      border: 1px solid rgba( 187, 187,187,1);      
 
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
      width: 100%;
      height: 343px;
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      font-family: Roboto;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 8px auto;
      position: relative;
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
            flex: 1;
            &:nth-child(5) {
              flex: 5;
            }
          }
        }
        ol {
          width: 100%;
          li {
            display: flex;
            border-bottom: 1px solid rgba(235,238,245,1);
            align-items: center;
            height: 70px;
            >span {
              display: inline-block;
              flex: 1;
              &:nth-child(5) {
                flex: 5;
              }
              &:nth-child(6) {
                flex: 1;
              }
            }
            >p {
              flex:1;
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
    .bg {
      width: 1009.27px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.12);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .dialog {
      width: 521px;
      height: 180px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      >span {
        padding: 34px 0 0 93px;
        display: flex;
      }
      .dialog_btn {
        width: 100%;
        margin-top: 80px; 
        display: flex;
        justify-content: flex-end;
        span {
          padding: 10px 25px;
          border: 1px solid rgba(217,217,217,1);
          border-radius: 4px;
          margin-right: 10px;
          &:last-child{
            background-color: rgba(24,144,255,1);
          }
        }
      }
    }
  }
  @media screen and (min-width: 375px){
    html,body,#app {
      width: 100%;
      height: 100%;
    }
    * {
      box-sizing: border-box;
    }
    .home {
      width: 100%;
      height: 100%;
    }
    .main {
      padding:20px;
      flex: 1; 
      position: relative;
    }
    .main_header {
      width: 100%;
      height: 70px;
      border: 1px solid rgba( 187, 187,187,1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .main_header_left {
        display: flex;
         p {
           font-size: 14px;
           &:first-child {
             margin-right: 15px;
           }
         }
      }
      .main_header_right {
        width: 180px;
        height: 30px;
        border: 1px solid #eee;
        input {
          width: 100%;
          height: 100%;
          background: none;
          outline: none;
          border: none;
        }
        .selecd {
          width: 180px;
          height: 158px;
          border-radius: 4px 4px 4px 4px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
          font-family: Roboto;
          overflow-y: auto;
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
      width: 100%;
      height: 343px;
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      font-family: Roboto;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 8px auto;
      position: relative;
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
            flex: 1;
            font-size: 12px;
          }
        }
        ol {
          width: 100%;
          li {
            display: flex;
            border-bottom: 1px solid rgba(235,238,245,1);
            align-items: center;
            height: 70px;
            >span {
              display: inline-block;
              flex: 1;
              font-size: 12px;
              &:nth-child(5) {
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }
            }
            >p {
              flex:1;
              font-size: 12px;
            }
          }
        }
      }
    }
    .editbox {
      width: 100%;
      height: 280px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 12px;
      .editbox_title {
        display: flex;
        justify-content: space-between;
        padding: 5px 14px;
      }
      .editbox_cont {
        height: 80px;
        label {
          display: flex;
          align-items: center;
          height: 25px;
          margin-top: 10px;
          span {
            margin-right: 12px;
            margin-left: 35px;
            margin-top: 14px;
          }
          div {
            width: 197px;
            height: 25px;
            border-radius: 4px;
            border: 1px solid rgba(220,223,230,1);
            margin-top: 14px;
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
      margin-left: 60px;
      padding: 5px 14px;
      span {
        display: flex;
        padding: 5px 10px;
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
      textarea {
        border: 1px solid rgba(187, 187, 187, 1);
      }
    }
    .editbox_footer {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      span {
        display: flex;
        padding: 5px 15px;
        border-radius: 4px;
        background-color: rgba(217,217,217,1);
        margin-right: 20px;
        margin-top: 5px;
        &:last-child {
           background-color: rgba(24,144,255,1);
        }
      }
    }
    .bg {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.12);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .dialog {
      width: 100%;
      height: 180px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      >span {
        padding: 34px 0 0 93px;
        display: flex;
      }
      .dialog_btn {
        width: 100%;
        margin-top: 80px; 
        display: flex;
        justify-content: flex-end;
        span {
          padding: 5px 15px;
          border: 1px solid rgba(217,217,217,1);
          border-radius: 4px;
          margin-right: 10px;
          &:last-child{
            background-color: rgba(24,144,255,1);
          }
        }
      }
    }
  }
</style>
