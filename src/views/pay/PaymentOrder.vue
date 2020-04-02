<template>
  <div class="paymentorder">
    <headerTop>
      <template v-slot:middle>支付订单</template>
    </headerTop>
    <div class="pay_img">
      <img src="../../assets/pay_adv.png" alt />
    </div>
    <div class="order_time">
      <p>支付剩余时间</p>
      <div>
        <span>{{this.minute.slice(0,1)}}</span>
        <span>{{this.minute.slice(1)}}</span>:
        <span>{{this.second.slice(0,1)}}</span>
        <span>{{this.second.slice(1)}}</span>
      </div>
    </div>
    <div class="pay_info">
      <div class="restaurant_pic">
        <img :src="restaurant.pic_url" alt />
      </div>
      <div class="name_money">
        <p>￥0.01</p>
        <p class="order_name">{{restaurant.name}}</p>
      </div>
      <span></span>
    </div>
    <ul class="pay_methods">
      <li @click="payType='1'">
        <i class="iconfont icon-zhifubaorenzheng"></i>
        <span>支付宝</span>
        <img src="../../assets/select.png" alt v-if="payType=='1'" class="select" />
        <span class="select" v-else></span>
      </li>
      <li @click="payType='2'">
        <i class="iconfont icon-weixinzhifu"></i>
        <span>微信支付</span>
        <img src="../../assets/select.png" alt v-if="payType=='2'" class="select" />
        <span class="select" v-else></span>
      </li>
    </ul>
    <div class="submit" @click="payMethods">确认支付</div>
    <div class="pay_order_methods" v-if="pay_methods==true">
      <div class="phone_app">
        <div class="pay_phone" @click="method='trpay.trade.create.scan'">
          <img src="../../assets/select.png" alt v-if="method=='trpay.trade.create.scan'" />
          <span class="pay_select" v-else></span>
          <span>手机扫码支付</span>
        </div>
        <div class="pay_app" @click="method='trpay.trade.create.wap'">
          <img src="../../assets/select.png" alt v-if="method=='trpay.trade.create.wap'" />
          <span class="pay_select" v-else></span>
          <span>调起app支付</span>
        </div>
        <div class="confirm_pay" @click='submit'>确定支付</div>
        <div class="back" @click='pay_methods=false'>
          <img src="../../assets/back.png" alt />
        </div>
      </div>
    </div>
    <Scan :payType='payType' :orderData='orderData' @close='scanShow=false' v-show='scanShow'></Scan>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import { orderInfo,initPay} from "../../api/index";
import { Toast } from "mint-ui";
import Scan from './Scan'
export default {
  data() {
    return {
      time: 1500,
      order_id: null,
      payType: '1',
      restaurant: {},
      remain_time: null,
      minute: "",
      second: "",
      pay_methods: false,
      method: "trpay.trade.create.scan",
      orderData:{},
      scanShow:false
    };
  },
  created() {
    this.order_id = this.$route.query.order_id;
    orderInfo({ order_id: this.order_id }).then(response => {
      console.log(response);
      this.restaurant = response.data.data.restaurant;
      this.remain_time = response.data.data.pay_remain_time;
      const that = this;
      const time = setInterval(() => {
        that.remain_time--;
        that._calc_remain_time(that.remain_time);
        if (that.remain_time == 0) {
          console.log("1232");
          clearInterval(time);
          Toast("订单已超时");
          // this.$router.back();
        }
      }, 1000);
    });
  },
  methods: {
    payMethods() {
      this.pay_methods = true;
    },
    _calc_remain_time(time) {
      let minute = parseInt((time / 60) % 60);
      minute < 10 ? (minute = "0" + minute) : (minute = minute + "");
      this.minute = minute;
      let second = time % 60;
      second < 10 ? (second = "0" + second) : (second = second + "");
      this.second = second;
      // console.log(this.minute,this.second)
    },
    submit(){
      initPay({order_id:this.order_id,payType:this.payType,method:this.method}).then(response=>{
        let res=response.data
        console.log(res)
        if(res.status===-1){
          Toast(res.message)
          return
        }
        if(res.status===302){
          let _this=this
          Toast(res.message)
          setTimeout(()=>{
            _this.$router.push('/order')
          },1000)
          return
        }
        if (this.method === 'trpay.trade.create.scan') {  //扫码支付方式
            this.scanShow=true
            this.orderData = response.data.data;
        }
      })
    }
  },
  components: {
    HeaderTop,
    Scan
  }
};
</script>

<style lang="less" scoped>
.paymentorder {
  position:relative .pay_img {
    height: 90px;
    margin: 13px 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .order_time {
    text-align: center;
    margin: 10px 0;
    p {
      margin-bottom: 5px;
    }
    div {
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #000;
        color: #fff;
        margin-right: 3px;
      }
    }
  }
  .pay_info {
    display: flex;
    padding: 21px 10px;
    background: #f8f8fb;
    .restaurant_pic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .order_name {
      font-size: 18px;
      margin-top: 3px;
    }
  }
  .pay_methods {
    background: #fff;
    font-size: 18px;
    padding: 0 10px;
    li {
      padding: 15px 0;
      i {
        margin-right: 5px;
      }
      img {
        float: right;
        width: 28px;
        height: 28px;
      }
      .select {
        float: right;
        width: 28px;
        height: 28px;
        margin-top: -5px;
        border-radius: 50%;
        border: 1px solid #e9e8ea;
      }
    }
  }
  .submit {
    margin-top: 20px;
    height: 58px;
    width: 80%;
    line-height: 58px;
    text-align: center;
    background: #ffd161;
    color: #fff;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
  }
  .pay_order_methods {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index:3;
    .phone_app {
      width: 100%;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      .pay_phone,
      .pay_app {
        padding: 18px 0;
        img {
          width: 25px;
          height: 25px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .pay_select {
          display: inline-block;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 1px solid #e9e8ea;
          margin-right: 10px;
        }
        span {
          vertical-align: middle;
        }
      }
      .confirm_pay {
        height: 49px;
        line-height: 50px;
        text-align: center;
        width: 80%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        background: #ffd161;
        margin: 28px 0;
      }
      .back{
        img{
          width: 15px;
          height: 15;
        }
      }
    }
  }
}
</style>