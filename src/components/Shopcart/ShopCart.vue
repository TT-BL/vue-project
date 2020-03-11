<template>
  <div class="shopcart">
      <img src="../../assets/cart.png" alt="">
      <div>
          <span class="price"></span>
          <span class='DeliveryCharge'></span>
      </div>
      <div class="StartingPrice"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.shopcart{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    width: 100%;
    height:50px;
    background: #3b3b3c;
    display: flex;
    img{
        width: 50px;
        height: 50px;
        position: relative;
        top:-10px;
        margin:0 10px;
        border-radius: 50%;
    }
}
</style>