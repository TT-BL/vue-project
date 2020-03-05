<template>
  <div class="shop">
    <div class="header">
      <div class="back">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </div>
      <div class="shop_Introduction">
        <img :src="shop_info.pic_url" alt />
        <div>
          <div class="distance">{{shop_info.delivery_time_tip}} | {{shop_info.distance}}</div>
          <div class="notification">公告：{{shop_info.bulletin}}</div>
          <div class="discount">
            <img src="../../assets/discount1.png" alt />
            <span>折扣商品4.7折起</span>
            <span class="arrow-right">＞</span>
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
    <router-view />
  </div>
</template>

<script>
import {getRestaurant} from '../../api/index'
export default {
  data(){
    return {
      restaurant_id:'',
      shop_info:{}
    }
  },
  created(){
    this.restaurant_id=this.$route.query.id
    getRestaurant(this.restaurant_id).then((Response)=>{
      this.shop_info=Response.data.data
    })
  }
}
</script>

<style lang="less">
.shop {
  height: 100%;
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
        margin-left:15px;
        .distance {
          padding-bottom: 5px;
        }
        .notification{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .discount {
          margin-top: 10px;
          padding-right: 15px;
          img {
            vertical-align: middle;
            width: 15px;
            margin-right: 8px;
          }
          .arrow-right {
            float: right;
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
          transition: all .5s ease-in;
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
}
</style>
