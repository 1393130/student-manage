<template>
  <div class="header">
    <!-- 插槽 -->
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@media screen and (min-width: 428px) and (max-width: 1920px) {
  .header {
    width: 80%;
    height: 100px;
    line-height: 100px;
    background-color: #3f51b5;
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
  }
}
@media screen and (max-width: 428px) {
  .header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #3f51b5;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
  }
}
</style>