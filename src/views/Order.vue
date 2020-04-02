<template>
  <div class="order">
    <div v-if='noOrder' class='emptyOrder'>
      订单空空如也，快去购物吧
    </div>
    <ul v-else>
      <li>
        <div class="order_detail">
          <img src="../assets/order1.jpg" alt />
          <span>吉祥混沌</span>
          <i class="iconfont icon-small-right order-right"></i>
        </div>
        <div class="order_again">
          <div class="mount">
            <span>鲜菇香肉混沌</span>
            <span class="order_right">x1</span>
          </div>
          <div class="price">
            <span>2020-01-20</span>
            <span class="order_right">实付￥20</span>
          </div>
        </div>
        <div class="order_operate">
          <span>订单已完成</span>
          <a href="javaScript:;" class="more">再来一单</a>
          <a href="javaScript:;" class="delete">删除</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {orders} from '../api/index'
export default {
  data(){
    return{
      orders:[],
      noOrder:true
    }
  },
  created(){
    const name=localStorage.getItem('mt-username')
    if(name==null)
    {
      this.$router.push('/login')
    }
    else{
      orders().then(response=>{
        if(response.data.status===200){
          console.log(response)
          this.orders=response.data.data
          this.noOrder= !this.orders.length
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.order {
  background-color: white;
  padding: 0 20px;
  .emptyOrder{
    width: 100%;
    position:absolute;
    top:50%;
    text-align:center;
  }
  li {
    margin-bottom: 10px;
    .order_detail {
      position: relative;
      padding: 10px 0;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
      }
      .icon-small-right {
        float: right;
        line-height: 35px;
      }
    }
    .order_again {
      padding: 10px 0;
      line-height: 30px;
      border-top: 1px solid #d7d7d7;
      border-bottom: 1px solid #d7d7d7;
      .order_right {
        float: right;
      }
    }
    .order_operate {
      overflow: hidden;
      padding: 10px 0;
      line-height: 27px;
      color: #ccc;
      a {
        float: right;
        border-radius: 3px;
        padding: 0 10px;
        color: #333;
      }
      .delete {
        border: 1px solid #ddd;
        margin-right: 5px;
      }
      .more {
        background-color: orange;
      }
    }
  }
}
</style>
