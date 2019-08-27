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
      left: 0px;
      top: 0px;
      width: 1439px;
      height: 100px;
      line-height: 100px;
      background-color: rgba(0, 118, 255, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 28px;
      text-align: center;
      font-family: Roboto;
      border: 1px solid rgba(187, 187, 187, 1);
  }
</style>