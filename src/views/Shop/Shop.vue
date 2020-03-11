<template>
  <div class="shop">
    <div>
      <div class="header">
        <div class="back">
          <i class="el-icon-arrow-left" @click="$router.back()"></i>
        </div>
        <div class="shop_Introduction">
          <img :src="restaurant.pic_url" alt />
          <div>
            <div class="distance">{{restaurant.delivery_time_tip}} | {{restaurant.distance}}</div>
            <div class="notification">公告：{{restaurant.bulletin}}</div>
            <div class="discount">
              <transition-group
                name="discount"
                tag="ul"
                :style="'transform:translateY('+positionY*-17+'px)'"
              >
                <li v-for="(discount,index) in restaurant.discounts2" :key="index">
                  <img :src="discount.icon_url" alt />
                  <span>{{discount.info}}</span>
                </li>
              </transition-group>
              <span class="arrow-right" @click="show_discount=true"></span>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav">
        <li>
          <router-link :to="{path:'/shop/goods',query:{id:restaurant_id}}" replace>点菜</router-link>
        </li>
        <li>
          <router-link :to="{path:'/shop/rate',query:{id:restaurant_id}}" replace>评价</router-link>
        </li>
        <li>
          <router-link :to="{path:'/shop/info',query:{id:restaurant_id}}" replace>商家</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view />
      </keep-alive>
      <transition name="fade">
        <div class="disount-detail" v-show="show_discount">
          <ul>
            <li v-for="(discount,index) in restaurant.discounts2" :key="index">
              <img :src="discount.icon_url" alt />
              <span>{{discount.info}}</span>
            </li>
          </ul>
          <div>
            <h3>配送</h3>
            <p>{{restaurant.min_price_tip}}</p>
            <p>配送时间: {{restaurant.shopping_time_start}}~{{restaurant.shopping_time_end}}</p>
          </div>
        </div>
      </transition>
    </div>
    <div class="shop_all" v-show="show_discount" @click="show_discount=false"></div>
  </div>
</template>

<script>
import { getRestaurant } from "../../api/index";
import BScroll from "better-scroll";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      restaurant_id: 0,
      show_discount: false,
      positionY: 0
    };
  },
  computed: {
    ...mapState(['restaurant'])
  },
  methods: {
    swipper() {
      const length=this.restaurant.discounts2.length;
      setInterval(() => {
        this.positionY++;
        if (this.positionY == length) {
          this.positionY = 0;
        }
      }, 4000);
    }
  },
  created() {
    this.restaurant_id = this.$route.query.id;
    this.$store.dispatch('getShop',this.restaurant_id)
  },
  mounted(){
    this.$nextTick(()=>{
      console.log(this.restaurant);
      this.swipper();
    })
  }
};
</script>

<style lang="less">
.shop {
  height: 100%;
  & > div {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .header {
    background-color: #2e2f3b;
    color: white;
    .back {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
    }
    .shop_Introduction {
      height: 80px;
      position: relative;
      padding-left: 95px;
      & > img {
        width: 85px;
        position: absolute;
        top: 5px;
        left: 10px;
      }
      & > div {
        font-size: 12px;
        line-height: 16px;
        margin-left: 15px;
        .distance {
          padding-bottom: 5px;
        }
        .notification {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .discount {
          margin-top: 10px;
          padding-right: 15px;
          height: 17px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          .discount-enter-active,
          .discount-leave-active {
            transition: opacity 0.5s;
          }
          .discount-enter,
          .discount-leave-to {
            opacity: 0;
          }
          ul {
            img {
              vertical-align: sub;
              width: 15px;
              margin-right: 8px;
            }
          }
          .arrow-right {
            &::after {
              content: "";
              display: block;
              width: 6px;
              height: 6px;
              border: 1px solid transparent;
              border-top: 1px solid #fff;
              border-right: 1px solid #fff;
              transform: rotateZ(45deg);
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  .nav {
    background-color: white;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    li {
      flex: 1 0 auto;
      text-align: center;
      line-height: 40px;
      position: relative;
      transition: all 0.5s ease-in;
      a {
        &.router-link-active {
          font-weight: 700;
          transition: all 0.5s ease-in;
          &::after {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: orange;
            position: absolute;
            left: 50%;
            bottom: -1px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(100%);
  }
  .disount-detail {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    max-height: 70%;
    z-index: 3;
    background: #fff;
    padding: 20px 15px 35px;
    font-size: 12px;
    color: #333;
    ul {
      margin-bottom: 20px;
      li {
        margin-bottom: 6px;
        img {
          width: 15px;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }
    & > div {
      h3 {
        font-size: 16px;
        margin-bottom: 3px;
      }
      p {
        color: #666;
        line-height: 16px;
        margin-bottom: 2px;
      }
    }
  }
  .shop_all {
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
