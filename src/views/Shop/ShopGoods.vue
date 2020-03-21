<template>
  <div class="all_shopGoods">
    <div class="shopGoods">
      <div class="list">
        <div ref="menu" class="left-menu">
          <ul class="menu">
            <li
              v-for="(food,index) in foods"
              :key="index"
              @click="changeGoods(index)"
              :class="{current:index===currentIndex}"
            >
              <a href="javaScript:;">
                <img src="../../assets/hot.png" alt v-show="food.name==='热销'" />
                <img src="../../assets/discount.png" alt v-show="food.name==='折扣'" />
                {{food.name}}
              </a>
            </li>
          </ul>
        </div>
        <div class="goods" ref="goods">
          <div ref="rightGood">
            <dl v-for="(food,index) in foods" :key="index">
              <dt>{{food.name}}</dt>
              <dd v-for="(spu,index) in food.spus" :key="index" @click="toggleShow(spu)">
                <a href="javaScript:;">
                  <img :src="spu.pic_url" alt />
                  <div class="goods_info">
                    <h2>{{spu.name}}</h2>
                    <div class="sell">月售量{{spu.month_saled_content}} 赞{{spu.praise_num}}</div>
                    <div class="goods_increase">
                      <span class="price">${{spu.skus[0].price}}</span>
                      <div>
                         <img src="../../assets/delete.png" alt v-if="currentCart[spu.id]?currentCart[spu.id]:false" @click.stop='deleteCart(spu)'/>
                         <span  v-if="currentCart[spu.id]?currentCart[spu.id]:false">{{currentCart[spu.id].rep}}</span>
                        <img src="../../assets/increase.png" alt @click.stop='addLocal(spu)'/>
                      </div>
                    </div>
                  </div>
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <Cart :id='restaurant_id'/>
    </div>
    <FoodInfo v-show="isShow" v-on:show="toggleShow" :food="food" v-on:add="addLocal(food)"/>
    <div class="good_cover" @click="toggleShow" v-show="isShow"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { getFoods } from "../../api/index";
import FoodInfo from "../../components/FoodInfo/FoodInfo";
import Cart from "../../components/ShopCart/ShopCart";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isShow: false,
      restaurant_id: "",
      foods: [],
      food: {
        skus: [{ price: 0 }]
      },
      scrollY: 0,
      tops: [],
      // currentCart:{}
    };
  },
  created() {
    this.restaurant_id = this.$route.query.id;
    getFoods(this.restaurant_id).then(Response => {
      this.foods = Response.data.data;
      this.$nextTick(() => {
        this._initTops();
        this._initScroll();
      });
    });
    
  },
  methods: {
    toggleShow(value) {
      this.isShow = !this.isShow;
      if (value !== undefined) {
        this.food = value;
      }
    },
    _initScroll() {
      this.scroll = new BScroll(this.$refs.goods, {
        probeType: 2,
        click: true
      });
      this.scrollMenu = new BScroll(this.$refs.menu, {
        click: true,
        bounce: false
      });
      this.scroll.on("scroll", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
      this.scroll.on("scrollEnd", ({ x, y }) => {
        // console.log(x,y)
        this.scrollY = Math.abs(y);
      });
    },
    _initTops() {
      const tops = [];
      let top = 0;
      tops.push(top);
      const list = this.$refs.rightGood.children;
      Array.prototype.slice.call(list).forEach(li => {
        top += li.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },
    changeGoods(index) {
      const scrollY = this.tops[index];
      this.scrollY = scrollY;
      this.scroll.scrollTo(0, -scrollY, 300);
    },
    addLocal(food){
      const retaurant_food={
         restaurant_id:this.restaurant_id,
         food_id:food.id,
         name:food.name,
         food_pic:food.pic_url,
         price:Number(food.skus[0].price)
       }
      this.$store.dispatch('addCart',retaurant_food)
      this.$store.dispatch('currentCart',this.restaurant_id)
    },
    deleteCart(food){
       const retaurant_food={
         restaurant_id:this.restaurant_id,
         food_id:food.id,
       }
       this.$store.dispatch('deleteCart',retaurant_food)
       this.$store.dispatch('currentCart',this.restaurant_id)
      //  console.log(this.currentCart);
    }
  },
  computed: {
    ...mapState(['currentCart']),
    currentIndex: function() {
      const { tops, scrollY } = this;
      const index = tops.findIndex((value, key) => {
        return scrollY >= tops[key] && scrollY < tops[key + 1];
      });
      return index;
    }
  },
  components: {
    FoodInfo,
    Cart
  },
};
</script>

<style lang="less" scoped>
.all_shopGoods {
  height: calc(~"100% - 241px");
  .shopGoods {
    background-color: white;
    height: 100%;
    .list {
      display: flex;
      height: 100%;
      overflow: hidden;
      .left-menu {
        // height: 100%;
        background-color: #f5f5f5;
        .menu {
          width: 80px;
          li {
            min-height: 49px;
            padding: 10px;
            box-sizing: border-box;
            font-size: 13px;
            img {
              width: 15px;
            }
            &.current {
              background-color: white;
              font-weight: bold;
            }
          }
        }
      }
      .goods {
        flex: 1 1;
        height: 100%;
        dt {
          height: 36px;
          color: #333;
          line-height: 36px;
          font-size: 12px;
          padding-left: 10px;
        }
        dd {
          padding: 0 10px 22px 93px;
          position: relative;
          a {
            color: #555;
            & > img {
              width: 75px;
              position: absolute;
              top: 0;
              left: 10px;
              margin-top: 3.5px;
            }
            .goods_info {
              width: 100%;
              h2 {
                font-weight: 700;
                margin-bottom: 2px;
                padding-left: 5px;
                color: #333;
              }
              .sell {
                font-size: 12px;
                margin-bottom: 15px;
                line-height: 15px;
                padding-left: 5px;
              }
              .goods_increase {
                position: relative;
                color: #999;
                font-size: 12px;
                padding-left: 5px;
                padding-bottom: 15px;
                .price {
                  color: red;
                  font-size: 18px;
                }
                & > div {
                  position: absolute;
                  top: -5px;
                  right: 5px;
                  height:25px;
                  img {
                    width: 25px;
                  }
                  span{
                    padding:0 10px;
                    text-align: center;
                    color:#333;
                    line-height: 25px;
                    vertical-align: top;
                    font-size:16px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .good_cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 8px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
