<template>
  <div class="retaurants">
    <ul>
      <li v-for="(shop,index) in shops" :key="index">
        <router-link :to="{path:'shop',query:{id:shop.id}}">
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
</template>

<script>
import { mapState } from "vuex";
import { getRestaurants } from "../../api/index";
import Star from '../Star/Star'
export default {
  data() {
    return {
      shops: []
    };
  },
  computed: {
    ...mapState(["address"])
  },
  methods: {
    getShops(lng, lat) {
      getRestaurants({ lng, lat }).then(Response => {
        this.shops = Response.data.data;
      });
    }
  },
  created() {
    const { lng, lat } = this.address;
    if (lng && lat) {
      // console.log("22");
      this.getShops(lng, lat);
    }
  },
  watch: {
    address(value) {
      const { lng, lat } = value;
      if (lng && lat) {
        console.log("11");
        this.getShops(lng, lat);
      }
    }
  },
  components:{
      Star
  }
};
</script>

<style lang="less" scoped>
.retaurants {
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
</style>