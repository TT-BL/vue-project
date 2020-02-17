<template>
  <div id="app">
    <router-view/>
    <FootGuide />
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  components: {
    FootGuide
  }
}
</script>
<style lang="less">
@import url('../static/css/reset.css');
@import url('http://at.alicdn.com/t/font_1642377_iclnv0wmoqn.css');
</style>
