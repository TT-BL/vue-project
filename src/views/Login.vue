<template>
  <div class="login">
    <div>
      <div class="username">
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="password">
        <input type="text" placeholder="请输入密码" />
      </div>
      <div class="completed">登录</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: #fff;
  display: flex;
  .div_style {
    height: 49px;
    border-bottom: 1px solid #e5e5e5;
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      text-indent: 5px;
      &::placeholder{
          color:#c5c5c5;
      }
    }
  }
  & > div {
    margin-top:-30px;
    align-self: center;
    flex: 1 0 auto;
    padding: 10px;
    .username {
      .div_style();
    }
    .password {
      .div_style();
    }
    .completed{
        height:40px;
        border-radius: 10px;
        background: #e5e5e5;
        color:#999;
        text-align: center;
        line-height:40px;
        margin-top:30px;
    }
  }
}
</style>