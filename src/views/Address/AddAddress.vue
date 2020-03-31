<template>
  <div class="addaddress">
    <div class="contact">
      <label>联系人:</label>
      <input type="text" v-model="contact" />
    </div>
    <div class="gender">
      <div class="man">
        <input type="radio" name="gender" value="male" v-model="gender" />先生
      </div>
      <div class="woman">
        <input type="radio" name="gender" value="female" v-model="gender" />女士
      </div>
    </div>
    <div class="phone">
      <label>手机号:</label>
      <input type="text" v-model="phone" />
    </div>
    <div class="address">
      <span>收货地址:</span>
      <img src="../../assets/position2.png" alt />
      <span>{{deliveryAddress.city}}</span>
      <i class="iconfont icon-small-right" @click="$router.push('/searchlocal')"></i>
    </div>
    <div class="house_number">
      <label>门牌号:</label>
      <input type="text" v-model="house_number" />
    </div>
    <div
      :class="{button:true, save:true,isUse:contact==''||house_number==''||phone==''}"
      @click="saveDelivery"
    >保存</div>
    <div class="button back" @click="$router.back()">返回</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox,Toast} from "mint-ui";
import { addAddress } from "../../api/index";
export default {
  data() {
    return {
      contact: "",
      phone: "",
      house_number: "",
      gender: "male"
    };
  },
  computed: {
    ...mapState(["deliveryAddress",'allAddress'])
  },
  methods: {
    saveDelivery() {
      if (this.contact == "") {
        MessageBox("", "请输入收货人姓名");
        return;
      }
      if (this.phone == "") {
        MessageBox("", "请输入收货人电话");
        return;
      }
      if (this.deliveryAddress == false) {
        MessageBox("", "请选择收货地址");
        return;
      }
      const address = {
        name: this.contact,
        phone: this.phone,
        gender: this.gender,
        ...this.deliveryAddress,
        address: this.deliveryAddress.city
      };
      addAddress(address).then(response => {
        // console.log(response);
        if (response.data.status === 200) {
          this.$store.dispatch("updateAddress",{index:this.allAddress.length,address});
          Toast('添加成功')
          this.$router.back();
        }
      });
    }
  },
};
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
    color: #000;
  }
  .contact,
  .phone,
  .house_number {
    input {
      outline: none;
      text-indent: 5px;
      width: 70%;
      margin-left: 10px;
      color: #333;
    }
  }
  .gender {
    display: flex;
    justify-content: space-evenly;
    input {
      margin-right: 5px;
    }
  }
  .address {
    img {
      width: 16px;
      margin: 0 3px;
      vertical-align: middle;
    }
    i {
      float: right;
    }
  }
  .button {
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    color: #333;
    text-align: center;
  }
  .save {
    margin: 25px 15px 15px;
    background-image: linear-gradient(135deg, #ffd266 0%, #ffbd27 100%);
  }
  .isUse {
    opacity: 0.5;
  }
  .back,
  .delete {
    margin: 15px;
    border: 1px solid #ffbd27;
  }
}
</style>