<template>
  <div>
    <ul class="arrange-theme">
      <li v-for="(item,index) in list" :key="index" class="clearfix">
        <span class="start fl" :class="item.start ? 'active' : ''"></span>
        <div class="theme-box fl">
          <div class="theme-top clearfix">
            <span class="theme-title fl">{{item.title}}</span>
            <span class="theme-percent fr" :class="item.percent < 0 ? 'green' : ''">
              <strong >{{item.percent}}</strong>%
            </span>
          </div>
          <div class="theme-bottom clearfix">
            <p class="fl">
              <span class="theme-num">{{item.num}}</span>
              <span class="theme-type">{{item.type}}</span>
            </p>
            <i class="theme-time fr">{{item.time}}</i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "arrange-theme",
  props: {
    list: Array
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin.less";
.arrange-theme {
  background-color: #fff;
  padding-left: 32px;
  li {
    border-bottom: 1px solid #ebebeb;
    padding: 28px 0;
    .start {
      width: 30px;
      height: 30px;
      background: url("../../assets/icon/star_default@2x.png") no-repeat left
        center;
      background-size: 100% 100%;
      position: relative;
      top: 8px;
      margin-right: 20px;
      &.active {
        background: url("../../assets/icon/star-xuanzhong@2x.png") no-repeat
          left center;
        background-size: 100% 100%;
      }
    }
    .theme-box {
      width: 636px;
      .theme-top {
        line-height: 44px;
        font-size: 32px;
        .theme-title {
        }
        .theme-percent {
          color: #db2a36;
          &.green{
            color:#50A050;
          }
        }
      }
      .theme-bottom {
        line-height: 34px;
        font-size: 24px;
        color: #999999;
        p {
          .theme-num {
          }
        }
        .theme-time {
          font-style: normal;
        }
      }
    }
  }
}
</style>
