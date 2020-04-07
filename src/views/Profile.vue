<template>
  <div class="order">
    <div class="order_header">
      <div class="avatar">
        <img src="../assets/avatar.png" alt />
      </div>
      <p>{{username}}</p>
    </div>
    <div class="order-detail">
      <ul>
        <li>
          <a href="#">
            <i class="iconfont icon-ziyuan"></i>
            <span>红包</span>
            <i class="iconfont icon-small-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-dizhi"></i>
            <span>收货地址</span>
            <i class="iconfont icon-small-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-wenti"></i>
            <span>常见问题</span>
            <i class="iconfont icon-small-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-yonghuxieyi"></i>
            <span>协议与说明</span>
            <i class="iconfont icon-small-right"></i>
          </a>
        </li>
        <li>
          <a href="javaScript:;" @click="loginout">
            <i class="iconfont icon-tuichu"></i>
            <span>退出登录</span>
            <i class="iconfont icon-small-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
export default {
  data() {
    return {
      username: "未登录"
    };
  },
  created() {
    const name = localStorage.getItem("mt-username");
    if (name != null) {
      this.username = name;
    }
  },
  methods: {
    loginout() {
      MessageBox.confirm("确定退出登录?")
        .then(action => {
          localStorage.removeItem('mt-username')
          Toast("退出登录成功");
          this.$router.push('/login')
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="less" scoped>
.order_header {
  background-image: url("../assets/bg.png");
  padding: 10% 0 5%;
  text-align: center;
  .avatar {
    display: inline-block;
    border: 4px solid #ffe699;
    border-radius: 50%;
    height: 80px;
    margin-bottom: 5px;
  }
}
.order-detail {
  background-color: white;
  li {
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e3e3;
    position: relative;
    line-height: 20px;
    a {
      width: 100%;
      display: block;
    }
    .iconfont {
      margin-right: 5px;
    }
    .icon-small-right {
      position: absolute;
      right: 20px;
      top: 10px;
    }
    &:last-child {
      border: none;
    }
  }
}
</style>
