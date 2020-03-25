<template>
  <header class="header">
    <i class="iconfont icon-left" @click="$router.go(-1)"></i>
    <span class="header-title">
      <slot name="middle"></slot>
    </span>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  position: relative;
  text-align: center;
  i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}
</style>