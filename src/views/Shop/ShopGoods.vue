<template>
  <div>
    <div class="shopGoods">
      <div class="header">
        <div class="back">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="shop_Introduction">
          <img src="../../assets/brand.jpg" alt />
          <div>
            <div class="distance">35分钟|2.1km</div>
            <div class="notification">公告：欢迎光临，很高兴为您服务</div>
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
          点菜
          <div class="current"></div>
        </li>
        <li>评价</li>
        <li>商家</li>
      </ul>
      <div class="list">
        <ul class="menu">
          <li>
            <a href="javaScript:;">
              <img src="../../assets/hot.png" alt />
              热销
            </a>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="../../assets/discount.png" alt />
              折扣
            </a>
          </li>
          <li>
            <a href="javaScript:;">中国加油</a>
          </li>
          <li>
            <a href="javaScript:;">每日限购</a>
          </li>
          <li>
            <a href="javaScript:;">红枣粥</a>
          </li>
          <li>
            <a href="javaScript:;">暖心甜粥</a>
          </li>
          <li>
            <a href="javaScript:;">汤类</a>
          </li>
          <li>
            <a href="javaScript:;">主食</a>
          </li>
          <li>
            <a href="javaScript:;">暖心甜粥</a>
          </li>
          <li>
            <a href="javaScript:;">汤类</a>
          </li>
          <li>
            <a href="javaScript:;">主食</a>
          </li>
        </ul>
        <div class="goods">
          <dl>
            <dt>热销</dt>
            <dd @click="toggleShow">
              <a href="javaScript:;">
                <img src="../../assets/food_goods1.jpg" alt />
                <div class="goods_info">
                  <h2>五香肉夹馍【1个】</h2>
                  <div class="sell">月售量320 赞7</div>
                  <div class="goods_increase">
                    <span class="price">$4.8</span>/1个
                    <span class="original_price">8.8</span>
                    <img src="../../assets/increase.png" alt />
                  </div>
                  <span class="discount">5.45折</span>
                </div>
              </a>
            </dd>
            <dd>
              <a href="javaScript:;">
                <img src="../../assets/food_goods2.jpg" alt />
                <div class="goods_info">
                  <h2>小米南瓜粥</h2>
                  <div class="sell">月售量209 赞5</div>
                  <div class="goods_increase">
                    <span class="price">$7.6</span>/1个
                    <span class="original_price">16</span>
                    <img src="../../assets/increase.png" alt />
                  </div>
                  <span class="discount">4.75折</span>
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
      </div>
      <!-- <div class="good_cover"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    console.log(this.isShow)
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
  }
  .sell {
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 15px;
  }
  .goods_increase {
    position: relative;
    color: #999;
    font-size: 12px;
    margin-bottom: 5px;
    .price {
      color: red;
      font-size: 18px;
    }
  }
}
.shopGoods {
  background-color: white;
  .header {
    background-color: rgb(46, 7, 59);
    color: white;
    .back {
      height: 50px;
      line-height: 50px;
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
        .distance {
          padding-bottom: 5px;
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
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
    li {
      flex: 1 0 auto;
      text-align: center;
      line-height: 40px;
      position: relative;
      .current {
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
  bottom: 48px;
  background-color: rgba(0,0,0,.5);
  .good_detail {
    border-radius: 8px;
    width: 80%;
    z-index:10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0px);
    background-color: white;
    overflow: hidden;
    img {
      width: 100%;
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
  }
}
</style>
