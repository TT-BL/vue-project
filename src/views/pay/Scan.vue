<template>
  <div class="scan">
    <div class="scan_header">
      <i :style="{color:payTypeObj[payType]['color']}" class="iconfont icon-zhifubaorenzheng"></i>
      <span>{{payTypeObj[payType]['name']}}</span>
    </div>
    <div class="qrcode-container">
      <div id="qrcode" ref="qrcode"></div>
    </div>
    <div class="info-container">
      <ul>
        <li>
          <span>产品名称：{{orderData.tradeName}}</span>
        </li>
        <li>
          <span>订单编号：{{orderData.outTradeNo}}</span>
        </li>
        <li>
          <span>订单金额：{{orderData.amount / 100}}</span>
        </li>
        <li>
          <span>实付金额：{{orderData.amount / 100}}</span>
        </li>
      </ul>
    </div>
    <div class="back" @click="close">
      <img src="../../assets/back.png" alt />
    </div>
  </div>
</template>

<script>
import QRCode from "../../plugins/qrcode";
import { listenStatus } from "../../api/index";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      payTypeObj: {
        1: {
          icon: "&icon-zhifubaorenzheng;",
          color: "#3d91e4",
          name: "支付宝支付"
        },
        2: {
          icon: "&#xe62a;",
          color: "#2aaf90",
          name: "微信支付"
        }
      },
      qrcode: null
    };
  },
  props: ["payType", "orderData"],
  methods: {
    listenStatus(outTradeNo) {
      clearInterval(this.timer);
      let _this = this;
      this.timer = setInterval(() => {
        listenStatus(outTradeNo).then(response => {
          if (response.data.status === 200) {
            clearInterval(this.timer);
            Toast("支付成功，准备跳转");
            setTimeout(() => {
              _this.$router.push({
                path: "order",
                query: { id: _this.orderData.order_id }
              });
            }, 1000);
          }
        });
      }, 1000);
    },
    close() {
      clearInterval(this.timer);
      this.$emit("close");
    }
  },
  watch: {
    orderData(value) {
      this.orderData = value;
      if (this.qrcode) {
        this.qrcode.makeCode(value.data.qrcode);
      } else {
        this.qrcode = new QRCode(this.$refs.qrcode, {
          text: value.data.qrcode,
          width: 200,
          height: 200
        });
      }
      this.listenStatus(value.outTradeNo);
    }
  }
};
</script>

<style lang="less" scoped>
.scan {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 5;
  text-align: center;
  .scan_header{
    height:50px;
    .iconfont{
      font-size:65px;
    }
    span{
       font-size:40px;
    }
  }
  .qrcode-container{
    width: 200px;
    height: 200px;
    margin:50px auto;
  }
  .info-container{
    margin-bottom:10px;
    li{
      padding:10px 0;
      font-size:20px;
    }
  }
  .back{
    img{
      width: 54px;
    }
  }
}
</style>