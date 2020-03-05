<template>
  <div class="rate">
    <div class="simple_rate">
      <div class="Merchants_rate rate1">
        <div>4.6</div>商家评分
      </div>
      <div class="Tastes_rate">
        <div>
          <span>口味</span>
          <Star :score='4.7' :size='24'/>
        </div>
        <div>
          <span>包装</span>
          <Star :score='4.8' :size='24'/>
        </div>
      </div>
      <div class="Merchants_rate">
        <div>5</div>配送评分
      </div>
    </div>
    <div class="rate_nav">
      <span>全部(177)</span>
      <span>好评(100)</span>
      <span>差评(7)</span>
      <span>有图评论(30)</span>
    </div>
    <ul>
      <li class="user_rate">
        <div class="user_img">
          <img src="../../assets/avatar.png" alt />
        </div>
        <div class="user_appraisals">
          <div class="user_name">
            <span>用户名</span>
            <span>2020-01-20</span>
          </div>
          <div class="time">38分钟送达</div>
          <div class="user_detail">
            <p>一看包装就很暖心啊，纸质包装也很安全。店家用心了。味道也是很可口的，小米粥的分量也是超大，馅饼是现烙的，味道不错。快递小哥送的也快，辛苦了</p>
          </div>
          <div class="user_good">
            <div>
              <img src="../../assets/yes.png" alt />
              <span>卡通猪猪包【奶黄馅】3个,猪肉大葱酥皮馅饼(现烙) 新品 折上折,香甜脆瓜微辣（小份）本品单点不配送 新品,健康南瓜粥（折上折）</span>
            </div>
            <div>
              <img src="../../assets/discount2.png" alt />
              <span>穿戴工服,仪表整洁,货品完好,礼貌热情,风雨无阻,快速准时</span>
            </div>
          </div>
          <div class="reply">商家回复(1天后):谢谢您的评价和支持，我们会继续努力！</div>
        </div>
      </li>
      <li class="user_rate">
        <div class="user_img">
          <img src="../../assets/avatar.png" alt />
        </div>
        <div class="user_appraisals">
          <div class="user_name">
            <span>用户名</span>
            <span>2020-01-20</span>
          </div>
          <div class="time">38分钟送达</div>
          <div class="user_detail">
            <p>一看包装就很暖心啊，纸质包装也很安全。店家用心了。味道也是很可口的，小米粥的分量也是超大，馅饼是现烙的，味道不错。快递小哥送的也快，辛苦了</p>
          </div>
          <div class="user_good">
            <div>
              <img src="../../assets/yes.png" alt />
              <span>卡通猪猪包【奶黄馅】3个,猪肉大葱酥皮馅饼(现烙) 新品 折上折,香甜脆瓜微辣（小份）本品单点不配送 新品,健康南瓜粥（折上折）</span>
            </div>
            <div>
              <img src="../../assets/discount2.png" alt />
              <span>穿戴工服,仪表整洁,货品完好,礼貌热情,风雨无阻,快速准时</span>
            </div>
          </div>
          <div class="reply">商家回复(1天后):谢谢您的评价和支持，我们会继续努力！</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Star from '../../components/Star/Star'
export default {
  components: {
    Star
  }
}
</script>
<style lang="less" scoped>
.rate {
  .simple_rate {
    background-color: white;
    padding: 15px 0;
    display: flex;
    .Merchants_rate {
      width: 48px;
      height: 50px;
      text-align: center;
      padding: 0 6%;
      font-size: 12px;
      color: #999;
      div {
        font-size: 27px;
        margin-bottom: 5px;
      }
    }
    .rate1 {
      div {
        color: #ff9900;
      }
    }
    .Tastes_rate {
      flex: 1 0 auto;
      font-size: 13px;
      span{
        margin-right:10px;
      }
      & > div {
        &:first-child {
          margin: 3px 0 10px;
        }
      }
    }
    margin-bottom: 10px;
  }
  .rate_nav {
    background-color: white;
    padding: 15px 14px 5px 14px;
    font-size: 13px;
    span {
      display: inline-block;
      height: 26px;
      border: 1px solid #ccc;
      border-radius: 26px;
      line-height: 26px;
      text-align: center;
      margin: 0 5px 10px 0;
      padding: 0 12px;
    }
  }
  ul {
    background-color: white;
    padding-left: 15px;
    .user_rate {
      overflow: hidden;
      padding: 15px 15px 10px 0;
      font-size: 12px;
      border-top: 1px solid #e4e4e4;
      .user_img {
        width: 15%;
        float: left;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .user_appraisals {
        width: 85%;
        float: left;
        .user_name {
          span {
            &:first-child {
              color: #2f2f2f;
              font-size: 16px;
            }
            &:last-child {
              color: #898989;
              float: right;
            }
          }
        }
        .time {
          margin-top: 7px;
        }
        .user_detail {
          font-size: 14px;
          line-height: 20px;
          color: #2f2f2f;
          padding-top: 14px;
          padding-bottom: 8px;
        }
        .user_good {
          & > div {
            margin: 4px 0;
            line-height: 15px;
          }
          img {
            width: 11px;
            margin-right: 10px;
          }
        }
        .reply {
          padding: 5px 8px;
          background: #f4f4f4;
          margin: 10px 0;
          color: #666;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
