<template>
  <div class='footGuide'>
      <div @click="goto('/')" :class='{on:isCurrent("/")}'>
          <i class='iconfont icon-shouye1'></i>
          <div>首页</div>
      </div>
      <div @click="goto('/order')" :class='{on:isCurrent("/order")}'>
          <i class='iconfont icon-dingdan'></i>
          <div>订单</div>
      </div>
      <div @click="goto('/profile')" :class='{on:isCurrent("/profile")}'>
          <i class='iconfont icon-wode'></i>
          <div>我的</div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    isCurrent (path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="less" scoped>
    .footGuide{
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        width: 100%;
        background-color: #fafafa;
        & > div{
            cursor: pointer;
            flex:1 0 auto;
            height:49px;
            text-align: center;
            padding-top:10px;
            font-size:12px;
            i{
                font-size:23px;
            }
            div{
                margin-top:3px;
            }
        }
    }
    .on{
        color:rgb(255, 136, 12);
    }
</style>
