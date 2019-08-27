<template>
  <div class="home">
   <div class="homebox">
     使用合理的布局实现PC和移动端兼容，请勿使用第三方UI框架，可单独使用第三方日历插件，要求精简高效，样式可自行设计，简洁美观大方即可，不要花里胡哨
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
});
</script>
<style lang="scss" scoped>
.home{
  width: 80%; 
}
.homebox{
  width: 576px;
  height: 184px;
  margin:0 auto;
  text-align: center;
  padding-top: 150px; 
}
</style>
