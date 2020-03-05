<template>
  <div class="searchlocal">
    <div class="search">
      <i class="el-icon-search"></i>
      <input placeholder="小区/街道/大厦/学校名称" v-model.trim="target_location" @click="search=true" />
      <span v-show="search" @click="search=false">取消</span>
    </div>
    <div class="container">
      <div class="local" v-show="!search">
        当前位置:
        <span class="address">{{address.city}}</span>
        <span class="position" @click="localNow()">重新定位</span>
      </div>
      <ul class="search_detail" v-show="search">
        <li
          v-for="suggestionList in suggestionLists"
          :key="suggestionList.id"
          @click="selectAddress(suggestionList)"
        >
          <h3>{{suggestionList.title}}</h3>
          <span>{{suggestionList.address}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { suggestion } from "../api/index";
export default {
  data() {
    return {
      search: false,
      target_location: "",
      suggestionLists: []
    };
  },
  computed: {
    ...mapState(["address"])
  },
  methods: {
    selectAddress(suggestionList) {
      this.$store.dispatch("changeLocation",suggestionList)
      this.$router.back()
    },
    localNow() {
      this.$store.dispatch("getLocation");
      this.$router.back();
    }
  },
  watch: {
    target_location(val) {
      const _this = this;
      if (val !== "") {
        suggestion({ keyword: val }).then(response => {
          this.suggestionLists = response.data.data.data;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.searchlocal {
  height: 100%;
  background: #fff;
  .search {
    height: 45px;
    padding: 0 13px;
    font-size: 14px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
    input {
      outline: none;
      border: none;
      height: 100%;
      width: 70%;
      padding-left: 3px;
      text-overflow: ellipsis;
      text-indent: 5px;
    }
    span {
      float: right;
      margin-top: 15px;
      border-left: 1px solid #e4e4e4;
      padding-left: 10px;
      color: #999;
    }
  }
  .container {
    padding: 0 10px;
    .local {
      .address {
        font-weight: 700;
      }
      .position {
        color: #ffb000;
        float: right;
        &::before {
          content: "";
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url("../assets/position.png");
          background-size: cover;
          margin-right: 3px;
        }
      }
    }
    .search_detail {
      margin-top: -20px;
      li {
        padding: 10px 0;
        h3 {
          margin-bottom: 6px;
        }
        span {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>