<template>
  <div class="LoginWrap">
    <Heade  slot="header">
      <template slot="header">重点学生日周考成绩录入管理系统</template>
    </Heade>
    <div class="LoginBox">
      <div class="LoginBoxTop">网站过程</div>
      <div class="LoginBoxMiddle">
        <span class="active">登录</span>
        <span>注册</span>
      </div>

      <div class="LoginInp">
        <input type="text" placeholder="牛牛号/电邮" />
        <input type="password" placeholder="输入密码" />
      </div>
      <div class="LoginCheck">
        <input type="checkbox" />
        <span>两周内自动登录</span>
      </div>
      <div class="LoginBtn">登录</div>
    </div>
  </div>
</template>        
<script lang="ts">
import Vue from "vue";
import Heade from '../components/heade';
export default Vue.extend({
  components: {
    Heade
  }
});
</script> 
<style scoped lang="scss">
@media screen and (min-width: 428px) and (max-width: 1920px) {
  .LoginWrap {
    width: 100%;
    height: 100%;
    .LoginTop {
      width: 100%;
      height: 100px;
      background: #3f51b5;
      color: #fff;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
    }
  }
  .LoginBox {
    width: 499px;
    height: 471px;
    margin: 104px auto;
    .LoginBoxTop {
      width: 100%;
      height: 68px;
      line-height: 68px;
      text-align: center;
      font-size: 36px;
    }
    .LoginBoxMiddle {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      span {
        padding: 6px 15px;
        color: #999;
      }
    }
  }
  .LoginInp {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    input {
      width: 70%;
      height: 44px;
      margin-left: 15%;
      margin-top: 10px;
      border: 0;
      border: solid 1px #999;
      padding-left: 10px;
    }
  }
  .LoginCheck {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 72px;
    span {
      margin-left: 8px;
    }
  }
  .LoginBtn {
    width: 80%;
    height: 50px;
    background: #3f51b5;
    color: #fff;
    line-height: 50px;
    margin-left: 12%;
    text-align: center;
  }
  .active {
    color: #3f51b5;
    border-bottom: solid 2px #3f51b5;
  }
}
@media screen and (max-width: 428px) {
  .LoginWrap {
    width: 100%;
    height: 100%;
  }
  .LoginBox {
    width: 100%;
    width: 9.98rem;
    height: 8.34rem;
    margin: 2.08rem auto;
    .LoginBoxTop {
      width: 100%;
      height: 1.36rem;
      line-height: 1.36rem;
      text-align: center;
      font-size: 0.72rem;
    }
    .LoginBoxMiddle {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      span {
        padding: 0.12rem 0.3rem;
        color: #999;
      }
    }
  }
  .LoginInp {
    width: 100%;
    height: 2.2rem;
    display: flex;
    flex-direction: column;
    input {
      width: 70%;
      height: 0.88rem;
      margin-left: 15%;
      margin-top: 0.2rem;
      border: 0;
      border: solid 0.02rem #999;
      padding-left: 0.2rem;
    }
  }
  .LoginCheck {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    margin-top: 0.5rem;
    span {
      margin-left: 0.16rem;
    }
  }
  .LoginBtn {
    width: 80%;
    height: 1rem;
    background: #3f51b5;
    color: #fff;
    line-height: 1rem;
    margin-left: 12%;
    margin-top: 0.5rem;
  }
  .active {
    color: #3f51b5;
    border-bottom: solid 0.04rem #3f51b5;
  }
}
</style>