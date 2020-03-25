<template>
  <div class="info">
    <div class="shop_address">
      <i class="iconfont icon-dizhi"></i>
      <span>{{restaurant.address}}</span>
      <div>
        <img src="../../assets/phone.png" alt />
      </div>
    </div>
    <div class="shop_safe">
      <i class="iconfont icon-icon_huabanfuben"></i>
      <span>查看食品安全文档</span>
      <i class="iconfont icon-small-right"></i>
    </div>
    <div class="shop_time">
      <i class="iconfont icon-shijian"></i>
      <span>配送时间：{{restaurant.shopping_time_start}}-{{restaurant.shopping_time_end}}</span>
    </div>
    <div class="shop_discount">
      <i class="iconfont icon-right-1"></i>
      <span>商家服务</span>
      <div class="shop_discount_serve">
        <div>
          <img src="../../assets/branch.png" alt />
          <span>该商品为品牌商户</span>
        </div>
        <div>
          <img src="../../assets/pay.png" alt />
          <span>该商品为品牌商户</span>
          <img src="../../assets/tip.png" alt />
        </div>
      </div>
    </div>
    <div class="shop_other">
      <div>
        <img src="../../assets/discount1.png" alt />
        <span>折扣商品4.7折起</span>
      </div>
      <div>
        <img src="../../assets/pay_big.png" alt />
        <span>该商家支持在线支付</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['restaurant'])
  }
}
</script>
export default {

}
<style lang="less" scoped>
.info {
  height:100%;
  background-color: white;
  padding: 0 15px;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  & > div {
    margin: 18px 0;
  }
  .shop_address {
    span {
      margin-left: 5px;
      display:inline-block;
      width: 75%;
      height:20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    div {
      float: right;
      width: 50px;
      border-left: 1px solid #e4e4e4;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .shop_safe {
    padding-right: 5px;
    span {
      margin-left: 5px;
    }
    .icon-small-right {
      float: right;
    }
  }
  .shop_time {
    padding:10px 5px 10px 0;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    span {
      margin-left: 5px;
    }
  }
  .shop_discount {
    span {
      margin-left: 5px;
    }
    .shop_discount_serve {
      display: inline-block;
      vertical-align: top;
      margin-left: 15px;
      img {
        width: 15px;
        vertical-align: middle;
      }
      span {
        padding: 0 10px;
      }
    }
  }
  .shop_other {
    div {
      margin-bottom: 5px;
    }
    img {
      width: 15px;
      vertical-align: middle;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>
