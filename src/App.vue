<template>
  <div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <FootGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  created(){
    this.$store.dispatch('getLocation')
    this.$store.dispatch('initCart')
    this.$store.dispatch('getAllAddress')
  },
  components: {
    FootGuide
  }
}
</script>
<style lang="less">
@import '../static/css/reset.css';
#app {
  width: 100%;
  height: 100%;
}
</style>
