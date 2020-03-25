<template>
  <div class="addresslist">
    <HeaderTop>
      <template v-slot:middle>地址列表</template>
    </HeaderTop>
    <ul>
        <li>
            <div class="address_left">
                <p class='address'>
                    <span>天铁科贸大厦</span>
                </p>
                <p class='name_phone'>
                    <span>谢英杰女士</span>
                    <span>1234567895</span>
                </p>
            </div>
            <div class="address_right">
                <i class='iconfont icon-bianji'></i>
            </div>
        </li>
    </ul>
    <div class="footer" @click='$router.push("/addaddress")'>
        <img src="../../assets/increase2.png" alt="">
        新增收货地址
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style lang="less" scoped>
.addresslist{
    background-color: #fff;
    height:100%;
    position: relative;
    ul{
        border-top:1px solid #ccc;
        padding:0 10px;
        li{
            padding:10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-content: center;
            .name_phone{
                margin-top:10px;
                font-size:14px;
                color:#666;
            }
            span{
                margin-right:10px;
            }
            .address_right{
                align-self: center;
            }
        }
    }
    .footer{
        border-top:1px solid #ccc;
        width: 100%;
        height:45px;
        text-align: center;
        line-height:45px;
        position:absolute;
        bottom:0;
        left:0;
        font-weight: 700;
        img{
            width: 15px;
            margin-right:5px;
        }
    }
}
</style>