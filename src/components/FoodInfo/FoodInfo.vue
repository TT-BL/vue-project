<template>
  <div class="foodinfo">
    <img :src="food.pic_url" alt />
    <h2>{{food.name}}</h2>
    <div class="sell">月售量{{food.month_saled}} 赞{{food.praise_num}}</div>
    <div class="goods_increase">
      <span class="price">${{food.skus[0].price}}</span>
      <div class="cart" @click="$emit('add')">加入购物车</div>
    </div>
    <button class="good_back" @click="$emit('show')"></button>
  </div>
</template>

<script>
export default {
    props:{
      food:Object
    },
};
</script>

<style lang="less" scoped>
 .detail {
    h2 {
      font-weight: 700;
      margin-bottom: 2px;
      padding-left: 3%;
      color: #333;
    }
    .sell {
      font-size: 12px;
      margin-bottom: 15px;
      line-height: 15px;
      padding-left: 3%;
    }
    .goods_increase {
      position: relative;
      color: #999;
      font-size: 12px;
      padding-left: 3%;
      padding-bottom: 15px;
      .price {
        color: red;
        font-size: 24px;
      }
    }
  }
.foodinfo {
  border-radius: 8px;
  width: 80%;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0px);
  background-color: white;
  // overflow: hidden;
  img {
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
  }
  .detail;
  .cart {
    height: 25px;
    background-color: #ffd161;
    border-radius: 25px;
    line-height: 25px;
    text-align: center;
    color: #333;
    position: absolute;
    top: 0px;
    right: 5px;
    padding: 0 15px;
  }
  .good_back {
    display: inline-block;
    outline: none;
    position: absolute;
    bottom: -28px;
    right: 50%;
    transform: translateX(50%);
    width: 40px;
    height: 40px;
    border: 10px solid transparent;
    box-sizing: content-box;
    background: url("../../assets/back.png") no-repeat;
    background-size: 100% 100%;
    padding: 0;
  }
}
</style>