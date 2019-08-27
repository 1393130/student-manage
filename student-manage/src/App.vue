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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav {
  position: fixed;
  right: 0;
  top:0;
  width: 20%;
  height: 100%;
  background: salmon;
}
.nav a {
  display: block;
}
</style>
