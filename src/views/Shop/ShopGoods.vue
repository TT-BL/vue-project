<template>
  <div>
    <div class="shopGoods">
      <div class="list">
        <ul class="menu">
          <li v-for='(food,index) in foods' :key='index'>
            <a href="javaScript:;">
              <img src="../../assets/hot.png" alt v-show='food.name==="热销"'/>
              <img src="../../assets/discount.png" alt v-show='food.name==="折扣"'/>
              {{food.name}}
            </a>
          </li>
        </ul>
        <div class="goods">
          <dl v-for='(food,index) in foods' :key='index'>
            <dt>{{food.name}}</dt>
            <dd v-for='(spu,index) in food.spus' :key='index' @click="toggleShow">
              <a href="javaScript:;">
                <img :src="spu.pic_url" alt />
                <div class="goods_info">
                  <h2>{{spu.name}}</h2>
                  <div class="sell">月售量{{spu.month_saled_content}} 赞{{spu.praise_num}}</div>
                  <div class="goods_increase">
                    <span class="price">${{spu.skus[0].price}}</span>/1个
                    <span class="original_price">8.8</span>
                    <img src="../../assets/increase.png" alt />
                  </div>
                  <span class="discount">5.45折</span>
                </div>
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="good_all" v-show="isShow">
      <div class="good_detail">
        <img src="../../assets/good_big.jpg" alt />
        <h2>五香肉夹馍【1个】</h2>
        <div class="sell">月售量320 赞7</div>
        <div class="goods_increase">
          <span class="price">$4.8</span>/1个
          <div class="cart">加入购物车</div>
        </div>
        <button class='good_back' @click="toggleShow"></button>
      </div>
      <div class="good_cover" @click="toggleShow"></div>
    </div>
  </div>
</template>

<script>
import {getFoods} from '../../api/index'
export default {
  data () {
    return {
      isShow: false,
      restaurant_id:'',
      foods:[]
    }
  },
  created(){
    this.restaurant_id=this.$route.query.id
    getFoods(this.restaurant_id).then((Response)=>{
      console.log(Response);
      
      this.foods=Response.data.data
    })
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  h2 {
    font-weight: 700;
    margin-bottom: 2px;
    padding-left:5px;
  }
  .sell {
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 15px;
    padding-left:5px;
  }
  .goods_increase {
    position: relative;
    color: #999;
    font-size: 12px;
    padding-left:5px;
    padding-bottom: 15px;
    .price {
      color: red;
      font-size: 18px;
    }
  }
}
.shopGoods {
  background-color: white;
  .list {
    display: flex;
    .menu {
      width: 80px;
      background-color: #f5f5f5;
      li {
        min-height: 49px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 13px;
        img {
          width: 15px;
        }
        &:first-child {
          background-color: white;
          font-weight: bold;
        }
      }
    }
    .goods {
      flex: 1 1;
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
            .detail;
            .original_price {
              text-decoration: line-through;
            }
            img {
              width: 25px;
              position: absolute;
              top: 0px;
              right: 5px;
            }
            .discount {
              color: red;
              border: 1px solid red;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
.good_all {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: rgba(0,0,0,.5);
  .good_detail {
    border-radius: 8px;
    width: 80%;
    z-index:10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0px);
    background-color: white;
    // overflow: hidden;
    img {
      width: 100%;
      margin-bottom:5px;
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
    .good_back{
      display: inline-block;
      outline: none;
      position:absolute;
      bottom:-28px;
      right:50%;
      transform: translateX(50%);
      width:40px;
      height:40px;
      border:10px solid transparent;
      box-sizing: content-box;
      background: url('../../assets/back.png') no-repeat;
      background-size: 100% 100%;
      padding:0;
    }
  }
  .good_cover{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    z-index:8px;
    width:100%;
  }
}
</style>
