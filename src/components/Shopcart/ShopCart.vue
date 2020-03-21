<template>
  <div class="shopcart">
    <div class='cart_img'>
      <img src="../../assets/cart.png" alt  v-if='totalCount==0'/>
       <img src="../../assets/newcart.png" alt v-else/>
      <div v-if='totalCount>0'>{{totalCount}}</div>
    </div>
    <div class="price">
      <div class="food_price" v-show="totalPrice>0">
        <span>$</span>{{totalPrice}}
      </div>
      <span :class="{DeliveryCharge:totalPrice==0}">{{restaurant.shipping_fee_tip}}</span>
    </div>
    <div :style='{background:accoutsColor}' class='StartingPrice Hasaccounts'  @click="$router.push({path:'/orderdetail',query:{id}})" v-if='isAccounts=="去结算"'>{{isAccounts}} </div>
    <div :style='{background:accoutsColor}' class='StartingPrice' v-else>{{isAccounts}} 
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props:['id'],
  computed: {
    ...mapState(["restaurant"]),
    ...mapGetters(["totalPrice", "totalCount"]),
    isAccounts: function() {
      if (this.restaurant.min_price_tip) {
        let minPrice = this.restaurant.min_price_tip.match(/\d+/);
        minPrice=Number(minPrice[0])
        if(this.totalPrice==0) return this.restaurant.min_price_tip
        const differential=(minPrice-this.totalPrice).toFixed(1)
        return this.totalPrice>=minPrice?'去结算':'差$'+differential+'去结算'
      }
      return '';
    },
    accoutsColor:function(){
      if(this.isAccounts==='去结算') return '#f8c74e'
      else if(this.isAccounts===this.restaurant.min_price_tip) return '#3b3b3c'
      else {
        return '#2e2d2d'
      }
    }
  }
};
</script>

<style lang="less" scoped>
.shopcart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background: #3b3b3c;
  display: flex;
  color: #999;
  .cart_img{
    img {
      width: 50px;
      height: 50px;
      position: relative;
      top: -10px;
      margin: 0 10px;
      border-radius: 50%;
    }
    div{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #FB4E44;
      position:absolute;
      top:-10px;
      left:45px;
      color:#fff;
      font-size:8px;
      text-align: center;
    }
  }
  .price {
    flex: 1 1 auto;
    padding: 5px 0;
    margin-left: 5px;
    // line-height:50px;
    font-size: 14px;
    .food_price {
      font-size: 24px;
      color: #fff;
      span {
        font-size: 16px;
        width: 16px;
        display: inline-block;
      }
      margin-bottom: 3px;
    }
    .DeliveryCharge {
      line-height: 40px;
    }
  }
  .StartingPrice {
    padding: 0 18px;
    line-height: 50px;
  }
  .Hasaccounts{
    padding: 0 30px;
    color:#333
  }
}
</style>