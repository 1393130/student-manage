<template>
  <div class="LoginWrap">
    <Heade  slot="header">
      <template slot="header">重点学生日周考成绩录入管理系统</template>
    </Heade>
    <div class="LoginBox">
      <div class="LoginBoxTop">网站过程</div>
      <div class="LoginBoxMiddle">
        <span @click="loginBtn" :class="{active:isTrueLogin}">登录</span>
        <span @click="register" :class="{active:isTrue}">注册</span>
      </div>

      <div class="LoginInp" v-show="isTrueLogin === true ? true : false">
        <input type="text" placeholder="输入用户名" v-model="username" />
        <input type="password" placeholder="输入密码" v-model="password" />
      </div>
      <div class="LoginInps" v-show="isTrue === true ? true : false">
        <input type="text" placeholder="请输入要注册账号" v-model="username" />
        <input type="password" placeholder="输入要注册密码" v-model="password" />
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="LoginCheck" v-show="isTrueLogin === true ? true : false">
        <input type="checkbox" v-model="checked" @click="checkedall" />
        <span>两周内自动登录</span>
      </div>
      <div @click="haslogin" class="LoginBtn" v-show="isTrueLogin === true ? true : false">登录</div>
      <div @click="registerBtn" class="LoginBtn" v-show="isTrue === true ? true : false">注册</div>
    </div>
  </div>
</template>        
<script lang="ts">
import Vue from "vue";
import Heade from '../components/heade.vue';
import { mapState ,mapActions } from 'vuex'
import { getToken , setToken} from '../utils/index'
export default Vue.extend({
  name: "login",
  components: {
    Heade
  },
  data() {
    return {
      isTrue: false,
      isTrueLogin: true,
      username: '',
      password: '',
      phone: '',
      checked:false
    }
  },
  computed :{
    ...mapState({
      code:(state:any) => state.login.loginInof
    })
  },
  methods: {
    ...mapActions({
      getregister: 'login/register',
      getLogin: 'login/getLogin'
    }),
    register() {
      this.isTrue = true
      this.isTrueLogin = false
    },
    loginBtn() {
      this.isTrue = false
      this.isTrueLogin = true
    },
    checkedall() {
      this.checked = !this.checked
      if(this.checked) {
        setToken(this.username)
      }
    },
    //注册
    registerBtn() {
      this.getregister({username:this.username,password:this.password,phone:this.phone})
    },
    //登录
    async haslogin() {
      if(this.username === '') {
        alert('请输入用户名')
        return 
      } else if(this.password === '') {
        alert('请输入密码')
        return 
      }
      await this.getLogin({
        username:this.username,
        password:this.password,
        validlength:this.checked ? (24*2).toString : ''
      })
      if(this.code.code === 1) {
        alert('登录成功')
        this.$router.push('/')
      } else if(this.code.code !== 1) {
        alert(this.code.msg)
      }
    },
  },
  created() {
    if(getToken()) {
      console.log(1)
      this.$router.push('/')
    }
  }
});
</script> 
<style scoped lang="scss">
@media screen and (min-width: 428px) and (max-width: 1920px) {
  .LoginWrap {
    width: 100%;
    height: 100%;
    // position: relative;
  }
  .LoginBox {
    width: 499px;
    height: 471px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // margin-top: -235.5px;
    // margin-left: -390.5px;
    // // margin-left: -249.5px;
    margin: 104px auto;
    text-align: center;
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
  .LoginInp , .LoginInps {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    input {
      width: 70%;
      height: 124px;
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
    margin-top: 20px;
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
    width: 20rem;
    margin: 2.08rem auto;
    text-align: center;
    .LoginBoxTop {
      width: 100%;
      height: 1.36rem;
      line-height: 1.36rem;
      text-align: center;
      font-size: 1.5rem;
    }
    .LoginBoxMiddle {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      margin-top: 1.5rem;
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
    margin-top: 0.6rem;
    input {
      width: 80%;
      height: 2rem;
      flex-shrink: 0;
      margin-left: 10%;
      margin-top: 1rem;
      border: 0;
      border: solid 0.02rem #999;
      padding-left: 0.2rem;
    }
  }
  .LoginCheck {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    margin-top: 5rem;
    span {
      margin-left: 0.16rem;
    }
  }
  .LoginBtn {
    width: 100%;
    height: 2.5rem;
    background: #3f51b5;
    color: #fff;
    line-height: 2.5rem;
    margin-top: 3rem;
  }
  .active {
    color: #3f51b5;
    border-bottom: solid 0.04rem #3f51b5;
  }
}
</style>