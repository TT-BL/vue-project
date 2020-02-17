<template>
  <div class="order">
    <ul>
      <li>
        <div class="order_detail">
          <img src="../assets/order1.jpg" alt />
          <span>吉祥混沌</span>
          <i class="el-icon-arrow-right order-right"></i>
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
</script>

<style lang="less" scoped>
.order {
  background-color: white;
  padding: 0 20px;
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
      .el-icon-arrow-right {
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
