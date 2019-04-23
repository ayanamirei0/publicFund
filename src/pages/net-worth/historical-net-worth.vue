<template>
  <div class="wrap">
      <div class="header">
        <x-header :left-options="{backText: ''}">历史净值</x-header>
        <div class="middle-line"></div>
        <div class="content-header-list">
          <ul class="content-top-list">
            <li
              class="top-item"
              v-for="(item, index) of topTitleList"
              :key="index"
            >
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="content" ref="content-list">
        <ul class="content-item-list">
          <li
            class="content-item"
            v-for="(item, index) of list"
            :key="index"
          >
            <span class="item">{{item.timer}}</span>
            <span class="item">{{item.b}}</span>
            <span class="item">{{item.c}}</span>
            <span class="item">{{item.d}}</span>

          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import { XHeader} from 'vux'

  export default {
    name: "historical-net-worth",
    components: {
      XHeader
    },
    data() {
      return {
        topTitleList: ["日期", "单位净值", "累计净值", "日涨幅(%)"],
        list: [{"timer": "2019-03-27", "b": "0.8888", "c": "0.87777", "d": "2.96%"},
          {"timer": "2019-03-28", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-29", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-30", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-27", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-28", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-29", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-30", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-27", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-28", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-29", "b": "0.8888", "c": "0.87777", "d": "2.97%"},
          {"timer": "2019-03-30", "b": "0.8888", "c": "0.87777", "d": "2.979%"}]
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  @import '../../common/style/base.less';
  @import '../../common/style/mixin.less';

  .header {
    position:fixed;
    z-index: 1;
    width: 100%;
    .middle-line {
      height: 20px;
      background-color: #F8F8F8;
    }
    .content-header-list {
      position: absolute;
      width: 100%;
      background: #ffffff;
      height: 80px;
      .content-top-list {
        display: flex;
        justify-content:space-between;
        padding: 0 32px;
        .top-item{
          flex: 1;
          height: 80px;
          line-height: 80px;
          color: #666666;
          font-size: 32px;
          text-align: right;
        }
        .top-item:first-child {
          text-align: left;
        }
      }
    }
  }
  .content {
    position: absolute;
    flex-flow: column;
    width: 100%;
    margin-top: 192px;
    .content-item {
      display: flex;
      justify-content:space-between;
      padding: 0 32px;
      height: 100px;
      background-color: white;
      border-top:2px solid #EBEBEB;
      .item {
        flex: 1;
        height: 100px;
        line-height: 100px;
        color: #333333;
        font-size: 28px;
        text-align: right;
      }
      .item:first-child {
        text-align: left;
      }
    }
  }
</style>
