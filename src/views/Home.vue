<template>
  <div class="home">
    <div class="HeaderTop">
      <router-link to="/searchlocal" class="address">
        <i class="el-icon-location-outline"></i>
        {{address.city||'定位中...'}} >
      </router-link>
      <router-link to="/searchshops" class="search">
        <i class="el-icon-search"></i>
        <input placeholder="请输入商家或商品名称" />
      </router-link>
    </div>
    <div class="nav">
      <div>
        <a href="#">
          <img src="../assets/nav1.png" alt />
          <span>美食</span>
        </a>
        <a href="#">
          <img src="../assets/nav2.png" alt />
          <span>超市零食</span>
        </a>
        <a href="#">
          <img src="../assets/nav3.png" alt />
          <span>生鲜果蔬</span>
        </a>
        <a href="#">
          <img src="../assets/nav4.png" alt />
          <span>外卖专送</span>
        </a>
        <a href="#">
          <img src="../assets/nav5.png" alt />
          <span>下午茶</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../assets/nav6.png" alt />
          <span>汉堡披萨</span>
        </a>
        <a href="#">
          <img src="../assets/nav7.png" alt />
          <span>小吃馆</span>
        </a>
        <a href="#">
          <img src="../assets/nav8.png" alt />
          <span>家常菜</span>
        </a>
        <a href="#">
          <img src="../assets/nav9.png" alt />
          <span>鲜花蛋糕</span>
        </a>
        <a href="#">
          <img src="../assets/nav10.png" alt />
          <span>无辣不欢</span>
        </a>
      </div>
    </div>
    <div class="line">附近商家</div>
    <div class="shop_nav">
      <ul>
        <li>
          <a href="#">
            综合排序
            <i class="el-icon-arrow-down"></i>
          </a>
        </li>
        <li>
          <a href="#">销量最高</a>
        </li>
        <li>
          <a href="#">距离最近</a>
        </li>
        <li>
          <a href="#">
            筛选
            <i class="el-icon-arrow-down"></i>
          </a>
        </li>
      </ul>
    </div>
    <Retaurants v-if='gotAddress'/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Retaurants from '../components/Retaurants/Retaurants'
export default {
  data() {
    return {
      value: 3.7,
      shops:[]
    };
  },
  computed: {
    ...mapGetters(["address",'gotAddress'])
  },
  components:{
    Retaurants
  }
}
</script>

<style lang="less" scoped>
.home {
  overflow: hidden;
  margin-bottom: 49px;
  background-color: white;
}
.HeaderTop {
  position: fixed;
  padding: 0 7px;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: #1c1b20;
  box-sizing: border-box;
  .address {
    max-width: 200px;
    color: #fff;
    margin-right: 20px;
  }
  .search {
    flex: 1 0 0;
    height: 30px;
    border-radius: 20px;
    background-color: #fff;
    padding-left: 13px;
    font-size: 14px;
    input {
      outline: none;
      border: none;
      height: 100%;
      width: 70%;
      padding-left: 3px;
      text-overflow: ellipsis;
      text-indent: 5px;
    }
  }
}
.nav {
  max-height: 170px;
  margin-bottom: 15px;
  overflow: hidden;
  margin-top: 50px;
  div {
    display: flex;
    justify-content: space-around;
    padding: 0 15px;
    margin-top: 15px;
    a {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: #333;
      img {
        width: 44px;
      }
      span {
        line-height: 30px;
        font-size: 11px;
      }
    }
  }
}
.oneLine() {
  content: "";
  display: block;
  height: 1px;
  background-color: #666;
}
.line {
  font-size: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1b20;
  margin-top: 15px;
  margin-bottom: 10px;
  &::before {
    .oneLine;
    width: 60px;
    margin-right: 3px;
  }
  &::after {
    .oneLine;
    width: 60px;
    margin-left: 3px;
  }
}
.shop_nav {
  height: 40px;
  &::before {
    .oneLine;
    width: 100%;
    background: #e4e4e4;
  }
  &::after {
    .oneLine;
    width: 100%;
    background: #e4e4e4;
  }
  ul {
    height: 100%;
    li {
      text-align: center;
      line-height: 40px;
      display: inline-block;
      width: 25%;
      height: 100%;
    }
  }
}
</style>
