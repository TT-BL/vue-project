<template>
  <div class="addaddress">
    <div class="contact">
      <label>联系人:</label>
      <input type="text" />
    </div>
    <div class="gender">
        <div class="man">
           <input type="radio" name='gender'>先生
        </div>
        <div class="woman">
            <input type="radio" name='gender'>女士
        </div>
    </div>
    <div class="phone">
        <label>手机号:</label>
        <input type="text" />
    </div>
    <div class="address">
        <span>收货地址:</span>
        <i class='iconfont icon-small-right' @click="$router.push('/searchlocal')"></i>
    </div>
    <div class="house_number">
        <label>门牌号:</label>
        <input type="text" />
    </div>
    <div class="button save">
        保存
    </div>
    <div class="button back" @click="$router.back()">返回</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.addaddress {
  height: 100%;
  background: #fff;
  padding: 0 10px;
  & > div {
    height: 52.5px;
    line-height: 52.5px;
    border-bottom: 0.5px solid #e4e4e4;
    color:#000;
  }
  .contact,.phone,.house_number {
    input {
      outline: none;
      text-indent: 5px;
      width: 70%;
      margin-left:10px;
      color:#333;
    }
  }
  .gender{
     display: flex;
     justify-content: space-evenly;
     input{
         margin-right:5px;
     }
  }
  .address{
      i{
          float:right;
      }
  }
  .button{
      height:40px;
      line-height:40px;
      border-radius: 5px;
      color:#333;
      text-align: center;
  }
  .save{
      margin:25px 15px 15px;
      background-image: linear-gradient(135deg, #FFD266 0%, #FFBD27 100%);
  }
  .back{
      margin:15px;
      border:1px solid #FFBD27
  }
}
</style>