<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in StarClass" :class="sc" :key="index"></span>
    <span class="star-score">{{score}}</span>
  </div>
</template>

<script>
const CLASS_ON = "on";
const CLASS_HALF = "half";
const CLASS_OFF = "off";
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    StarClass() {
      const { score } = this;
      const starArr = [];
      const scoreInteger = Math.floor(score);
      for (let i = 0; i < scoreInteger; i++) {
        starArr.push(CLASS_ON);
      }
      if (score * 10 - scoreInteger * 10 > 5) {
        starArr.push(CLASS_HALF);
      }
      while (starArr.length < 5) {
        starArr.push(CLASS_OFF);
      }
      return starArr;
    }
  }
};
</script>

<style lang="less" scoped>
.star {
  // 2x图 3x图
  display: inline-block;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star-score{
    color:#ff9900;
    margin-left:5px;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url("./images/star48_on@2x.png");
      }

      &.half {
        background-image: url("./images/star48_half@2x.png");
      }

      &.off {
        background-image: url("./images/star48_off@2x.png");
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url("./images/star36_on@2x.png");
      }

      &.half {
        background-image: url("./images/star36_half@2x.png");
      }

      &.off {
        background-image: url("./images/star36_off@2x.png");
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url("./images/star24_on@2x.png");
      }

      &.half {
        background-image: url("./images/star24_half@2x.png");
      }

      &.off {
        background-image: url("./images/star24_off@2x.png");
      }
    }
    .star-score {
      font-size: 11px;
    }
  }
}
</style>
