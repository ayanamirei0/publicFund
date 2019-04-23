<template>
  <div class="wrap">
    <div class="header">
      <x-header :left-options="{backText: ''}">主题推荐</x-header>
    </div>
    <div class="sift-box">
      <panel :title="sift.title">
        <ul class="sift-list clearfix">
          <li v-for="(item,index) in sift.list" :key="index">
            <h3 class="sift-title">{{item.title}}</h3>
            <p class="sift-percent">
              <span>{{item.percent}}</span>%
              <i>近一周</i>
            </p>
            <p class="sift-text">{{item.text}}</p>
          </li>
        </ul>
      </panel>
    </div>
    <div class="sift-box">
      <panel :title="arrange.title" hasTime="(近一个月)">
        <arrange :arrange="arrange.list"></arrange>
      </panel>
    </div>
  </div>
</template>

<script>
import { XHeader } from "vux";
import Panel from "../../components/common/panel";
import Arrange from "../../components/common/arrange";

export default {
  name: "theme-lists",
  components: {
    XHeader,
    Panel,
    Arrange
  },
  data() {
    return {
      sift: {
        title: "精选主题",
        list: [
          {
            title: "大消费",
            percent: "1.44",
            text: "领跑各行业板块收益冠军"
          },
          {
            title: "证券保险",
            percent: "12.44",
            text: "行业轮动模型主推行业"
          }
        ]
      },
      arrange: {
        title: "收益排行",
        list: [
          { a: "黄金概念", b: "+4.97" },
          { a: "化纤行业", b: "+4.97" },
          { a: "造纸印刷", b: "+4.97" },
          { a: "黄金概念", b: "+4.97" },
          { a: "化纤行业", b: "-1.97" },
          { a: "造纸印刷", b: "+4.97" },
          { a: "黄金概念", b: "-0.97" },
          { a: "化纤行业", b: "+4.97" },
          { a: "造纸印刷", b: "+4.97" },
          { a: "黄金概念", b: "+4.97" },
          { a: "化纤行业", b: "+4.97" },
          { a: "造纸印刷", b: "+4.97" },
          { a: "黄金概念", b: "+4.97" },
          { a: "化纤行业", b: "-1.97" },
          { a: "造纸印刷", b: "+4.97" },
          { a: "黄金概念", b: "-0.97" },
          { a: "化纤行业", b: "+4.97" },
          { a: "造纸印刷", b: "+4.97" }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin.less";
.sift-box {
  background-color: #fff;
  .sift-list {
    .flex(space-between);
    li {
      .flex_num(1);
      text-align: left;
      width: 334px;
      height: 210px;
      color: #fff;
      padding-left: 22px;
      font-size: 24px;

      .sift-title {
        font-size: 32px;
        line-height: 44px;
        margin-top: 20px;
      }
      .sift-percent {
        line-height: 74px;
        margin: 4px 0 10px;
        span {
          font-size: 52px;
        }
        i {
          margin-left: 10px;
          font-style: normal;
        }
      }
      .sift-text {
        margin-bottom: 20px;
        line-height: 34px;
        .ellipsis(1);
      }
      &:nth-child(1) {
        background: url("../../assets/img/card_1@2x.png") no-repeat left center;
        background-size: 100% 100%;
      }
      &:nth-child(2) {
        margin-left: 18px;
        background: url("../../assets/img/card_2@2x.png") no-repeat left center;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
