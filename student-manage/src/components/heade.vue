<template>
  <div class="header">
    <!-- 插槽 -->
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
 .header {
      width: 100%;
      height: 100px;
      background: #0076FF;
      margin: auto;
      font-size: 30px;
      line-height: 100px;
      color: #fff;
      margin-bottom: 63px;
      text-align: center;
  }
</style>