<template>
  <div id="app">
    <div class="nav">
      <router-link to="/login">登录与注册</router-link>
      <router-link to="/">主页</router-link>
       <router-link to='/keyCharts'>charts</router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 428px) and (max-width: 1920px) {
  .nav {
    position: fixed;
    right: 0;
    width: 20%;
    height: 100%;
    background: salmon;
  }
  .nav a {
    display: block;
  }
}
@media screen and (max-width: 428px) {
  .nav {
    position: fixed;
    bottom:0;
    width:100%;
    height: 44px;
    background: salmon;
    display: flex; 
    align-items:center;
  }
  .nav a {
    flex:1;
    display: block;
    text-decoration:none;
  }
}
</style>