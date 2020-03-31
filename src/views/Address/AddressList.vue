<template>
  <div class="addresslist">
    <HeaderTop>
      <template v-slot:middle>地址列表</template>
    </HeaderTop>
    <ul>
      <li v-for="(address,index) in allAddress" :key="index" @click="selectAddress(address,index)">
        <div class="address_left">
          <i :class="{current:selectIndex==index}"></i>
          <p class="address">
            <span>{{address.address}}</span>
          </p>
          <p class="name_phone">
            <span>{{address.name}}{{address.gender==='male'?'男士':'女士'}}</span>
            <span>{{address.phone}}</span>
          </p>
        </div>
        <div class="address_right">
          <i class="iconfont icon-bianji" @click.stop="jumpAddress(address.id,index)"></i>
        </div>
      </li>
    </ul>
    <div class="footer" @click="addAddress">
      <img src="../../assets/increase2.png" alt />
      新增收货地址
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  data() {
    return {
      deliveryAddress: [],
      selectIndex: 0
    };
  },
  computed: {
    ...mapState(["allAddress"])
  },
  methods: {
    selectAddress(addressInfo, index) {
      this.$store.dispatch("deliverAddress", addressInfo);
      this.selectIndex = index;
      this.$router.back();
      // this.$router.push({path:'orderdetail',query:{index}})
    },
    addAddress() {
      this.$store.dispatch("clearDelivery");
      this.$router.push("/addaddress");
    },
    jumpAddress(id, index) {
      this.$store.dispatch("clearDelivery");
      this.$router.push({ path: "editaddress", query: { id, index } });
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style lang="less" scoped>
.addresslist {
  background-color: #fff;
  height: 100%;
  position: relative;
  ul {
    border-top: 1px solid #ccc;
    padding: 0 10px;
    li {
      padding: 10px 10px 10px 30px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-content: center;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      .address_left {
        width: 90%;
        .name_phone {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }
        .address {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span {
          margin-right: 10px;
        }
      }
      .address_right {
        align-self: center;
      }
      .current {
        width: 17px;
        height: 17px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-image: url("../../assets/select.png");
        background-size: contain;
      }
    }
  }
  .footer {
    border-top: 1px solid #ccc;
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 700;
    img {
      width: 15px;
      margin-right: 5px;
    }
  }
}
</style>