<template>
  <div class="searchshops">
    <div class="header">
      <i class="el-icon-arrow-left" @click='$router.go(-1)'></i>
      搜索页
    </div>
    <div class="search-shops">
      <div class="search">
        <i class="el-icon-search"></i>
        <input placeholder="请输入商家或商品名称" v-model="commodities" />
      </div>
      <div class="look_up" @click="search()" :class='{current:commodities!==""}'>搜索</div>
    </div>
    <div class="container">
      <ul>
        <li v-for="(shop,index) in shops" :key="index">
          <router-link to="/shop">
            <img :src="shop.pic_url" alt />
            <div class="shop_detail_right">
              <h2>{{shop.name}}</h2>
              <div>
                <div class="rate">
                  <Star :size="24" :score="shop.quality_score" />
                  <span class="sell">{{shop.month_sales_tip}}</span>
                </div>
                <div class="distance">{{shop.delivery_time_tip}}|{{shop.distance}}</div>
              </div>
              <div>
                <div class="price">{{shop.min_price_tip}} {{shop.shipping_fee_tip}}</div>
                <div class="special">专送</div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchShops } from "../api/index"
import Star from '../components/Star/Star'
export default {
  data() {
    return {
      commodities: "",
      shops: []
    }
  },
  methods: {
    search() {
      if (this.commodities !== "") {
        searchShops({ keyword: this.commodities }).then(Response => {
          this.shops = Response.data.data;
        });
      }
    }
  },
  components:{
      Star
  }
}
</script>

<style lang="less" scoped>
.searchshops {
  height: 100%;
  background-color: #fff;
  text-align: center;
  .header {
    line-height: 50px;
    position: relative;
    i {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }
  .search-shops {
    display: flex;
    .search {
      flex: 1 0 0;
      border-radius: 20px;
      background-color: #e8e8e8;
      margin: 10px;
      box-sizing: border-box;
      line-height: 30px;
      font-size: 14px;
      input {
        outline: none;
        border: none;
        height: 100%;
        width: 80%;
        background-color: #e8e8e8;
        padding-left: 3px;
        text-overflow: ellipsis;
        text-indent: 5px;
      }
    }
    .look_up {
      width: 60px;
      height: 44px;
      text-align: center;
      line-height: 50px;
      color: #999;
    }
    .current{
        color:orange;
    }
  }
  .container {
    li {
      margin-top: 10px;
      margin-bottom: 25px;
      a {
        display: flex;
        padding: 0 10px;
        color: #333;
        img {
          width: 76px;
          height: 57px;
        }
        .shop_detail_right {
          flex: 1 0 0;
          margin-left: 10px;
          h2 {
            font-weight: 700;
            font-size: 16px;
            text-align: left;
          }
          & > div {
            display: flex;
            justify-content: space-between;
            margin-top: 4px;
            font-size: 12px;
          }
          .distance {
            line-height: 20px;
          }
          .special {
            width: 50px;
            height: 15px;
            background-color: #ffd161;
            border-radius: 5px 0 5px 0;
            text-align: center;
            line-height: 15px;
          }
        }
      }
    }
  }
}
</style>