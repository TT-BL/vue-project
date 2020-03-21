<template>
  <div class="orderdetail">
    <div class="header">
      <i class="el-icon-arrow-left" @click="$router.back()"></i>
      提交订单
    </div>
    <div class="orderInfo" ref="info">
      <div>
        <div class="address">
          <img src="../assets/increase1.png" alt />
          <span>{{address.city}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="detail">
          <div class="resInfo">
            <img :src="restaurant.pic_url" alt />
            <span class="name">{{restaurant.name}}</span>
            <span class="person"></span>
          </div>
          <ul class="foodInfo">
            <li v-for="(food,index) in currentCart" :key="index">
              <img :src="food.food_pic" alt />
              <div class="food_right">
                <div class="food_name_price">
                  <span>{{food.name}}</span>
                  <span class="food_price">${{food.price*food.rep}}</span>
                </div>
                <div class="count">x{{food.rep}}</div>
              </div>
            </li>
          </ul>
          <div class="delivery_price">
            <div class="delivery">{{restaurant.shipping_fee_tip}}</div>
            <div class="price">
              小计
              <span>￥{{totalPrice}}</span>
            </div>
          </div>
          <div class="onlinePay_Invoice">
            <div class="onlinePay">
              支付方式
              <span>在线支付</span>
            </div>
            <div class="invoice">
              发票
              <span>暂不支持开发票</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pay">
      合计
      <span>￥{{totalPrice}}</span>
      <div>提交订单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BScroll from 'better-scroll'
export default {
  computed: {
    ...mapState(["restaurant", "currentCart"]),
    ...mapGetters(["totalPrice",'address'])
  },
  created() {
    this.restaurant_id = this.$route.query.id;
    this.$store.dispatch("getShop", this.restaurant_id);
    this.$store.dispatch("currentCart", this.restaurant_id);
  },
  mounted(){
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.info,{
        bounce:false
      })
      console.log(this.scroll);
      
    })
  }
};
</script>

<style lang="less" scoped>
.orderdetail {
  height:100%;
  .all {
    background: #fff;
    padding: 0 10px;
  }
  .header {
    .all;
    height: 50px;
    text-align: center;
    line-height: 50px;
    .el-icon-arrow-left {
      float: left;
      margin-top: 17px;
    }
  }
  .orderInfo {
    overflow: hidden;
    height: calc(~'100% - 100px');
    & > div{
      margin:10px 0;
      overflow: inherit;
    }
    .address {
      margin-top: 10px;
      background: #fff;
      padding: 10px;
      .el-icon-arrow-right {
        float: right;
      }
      img {
        width: 20px;
        vertical-align: sub;
      }
      span {
        color: #ffb000;
        font-weight: bold;
        margin-left: 5px;
      }
    }
    .detail {
      margin-top: 10px;
      .resInfo {
        .all;
        height: 50px;
        position: relative;
        img {
          width: 20px;
        }
        .name {
          margin-left: 5px;
          line-height: 50px;
        }
        .person {
          position: absolute;
          top: 17.5px;
          right: 10px;
          width: 50px;
          height: 15px;
          background-image: url("../assets/person.png");
          background-size: cover;
        }
      }
      .foodInfo {
        background: #fff;
        li {
          background: rgb(240, 240, 240);
          height: 75px;
          margin-bottom: 5px;
          padding: 10px;
          box-sizing: border-box;
          display: flex;
          img {
            width: 55px;
            height: 55px;
          }
          .food_right {
            flex: 1 1 auto;
            padding-left: 10px;
            .food_name_price {
              color: #333;
              font-size: 14px;
              .food_price {
                float: right;
              }
              margin-bottom: 5px;
            }
            .count {
              color: #999;
              font-size: 12px;
            }
          }
        }
      }
      .delivery_price {
        .all;
        .delivery {
          text-align: right;
          height: 48px;
          line-height: 48px;
          border-bottom: solid 3px #d7d7d7;
          border-image: url("../assets/line.png") 1 1 round;
        }
        .price {
          height: 44px;
          line-height: 44px;
          text-align: right;
          span {
            color: red;
          }
        }
      }
      .onlinePay_Invoice {
        .all;
        margin: 10px 0;
        .onlinePay {
          padding: 10px;
          border-bottom: solid 1px #eee;
        }
        .invoice {
          padding: 10px;
          span {
            color: #ccc;
          }
        }
        span {
          float: right;
        }
      }
    }
  }
  .pay {
    height: 50px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: right;
    line-height: 50px;
    span {
      color: red;
    }
    div {
      margin-left: 10px;
      width: 125px;
      line-height: 50px;
      color: #333;
      font-weight: bold;
      text-align: center;
      float: right;
      background: #f8c74e;
    }
  }
}
</style>