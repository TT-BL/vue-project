<template>
  <div class="editaddress">
    <div class="contact">
      <label>联系人:</label>
      <input type="text" v-model="selectAddress.name" />
    </div>
    <div class="gender">
      <div class="man">
        <!-- <input type="radio" name="gender" v-if="selectAddress.gender=='male'" checked /> -->
        <input type="radio" name="gender" v-model="selectAddress.gender" value='male'/>先生
      </div>
      <div class="woman">
        <!-- <input type="radio" name="gender" v-if="selectAddress.gender=='女士'" checked /> -->
        <input type="radio" name="gender" v-model="selectAddress.gender" value='female'/>女士
      </div>
    </div>
    <div class="phone">
      <label>手机号:</label>
      <input type="text" v-model="selectAddress.phone" />
    </div>
    <div class="address">
      <span>收货地址:</span>
      <img src="../../assets/position2.png" alt />
      <span v-if="deliveryAddress.city" class='delivery_address'>{{deliveryAddress.city}}</span>
      <span v-else class='delivery_address'>{{selectAddress.address}}</span>
      <i class="iconfont icon-small-right" @click="$router.push('/searchlocal')"></i>
    </div>
    <div class="house_number">
      <label>门牌号:</label>
      <input type="text" v-model="selectAddress.house_number" />
    </div>
    <div
      :class="{button:true, save:true,isUse:selectAddress.name==''||selectAddress.house_number==''||selectAddress.phone==''}"
      @click="updateDelivery"
    >保存</div>
    <div class="button delete" @click="deleteAddress">删除</div>
    <div class="button back" @click="$router.back()">返回</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox,Toast } from "mint-ui";
import { updateAddress, deleteAddress } from "../../api/index";
export default {
  data() {
    return {
      selectAddress: {
        name: "",
        phone: "",
        house_number: "",
        gender: ""
      },
    };
  },
  computed: {
    ...mapState(["deliveryAddress", "allAddress"]),
    index:function(){
      const index = this.$route.query.index;
      return index
    }
  },
  created() {
    const id = this.$route.query.id;
    this.selectAddress = { ...this.allAddress[this.index] };
  },
  methods: {
    updateDelivery() {
      let address = {};
      if (this.name == "") {
        MessageBox("", "请输入收货人姓名");
        return;
      }
      if (this.phone == "") {
        MessageBox("", "请输入收货人电话");
        return;
      }
      if (this.deliveryAddress.city) {
        address = {
          ...this.selectAddress,
          address: this.deliveryAddress.city
        };
      } else {
        address = {
          ...this.selectAddress
        };
      }
      updateAddress(address).then(response => {
        console.log(response);
        if (response.data.status === 200) {
         this.$store.dispatch("updateAddress", {index:this.index,address:this.selectAddress});
         Toast('更新成功')
          this.$router.back();
        }
      });
    },
    deleteAddress() {
      deleteAddress({ address_id: this.selectAddress.id }).then(response => {
        console.log(response)
        if (response.data.status === 200) {
          this.allAddress.splice(this.index,1)
          this.$store.dispatch("updateAddress",this.allAddress);
          Toast('删除成功')
          this.$router.back();
        }
      });
    }
  },
  watch:{
    index(value)
    {
      this.selectAddress = { ...this.allAddress[this.index] };
    }
  }
};
</script>

<style lang="less" scoped>
.editaddress {
  height: 100%;
  background: #fff;
  padding: 0 10px;
  & > div {
    height: 52.5px;
    line-height: 52.5px;
    border-bottom: 0.5px solid #e4e4e4;
    color: #000;
    position:relative;
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
    .delivery_address{
      position:absolute;
      left:95px;
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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