<template>
  <div class="wrap">
    <div class="header">
      <x-header :left-options="{backText: ''}">主题详情</x-header>
    </div>
    <div class="theme-info">
      <div class="theme-top">
        <div class="theme-title">领跑各行业板块领军领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑各行业板块收益冠军领跑各行业板块领跑</div>
      </div>
      <div class="theme-button"></div>
    </div>
    <arrange-theme :list="list"></arrange-theme>
  </div>
</template>

<script>
import { XHeader } from "vux";
import ArrangeTheme from "../../components/common/arrange-theme";

export default {
  name: "theme-details",
  components: {
    XHeader,
    ArrangeTheme
  },
  data() {
    return {
      topTitleList: ["基金名称", "万份收益", "七日年化(%)"],
      listType: [
        { a: "+4.97", b: "近一周" },
        { a: "+4.97", b: "近一月" },
        { a: "+4.97", b: "近一年" }
      ],
      list: [
        {
          start: true,
          title: "创新工场人民币三期",
          percent: "9.97",
          num: "001506",
          type: "股票型",
          time: "近一年"
        },
        {
          start: false,
          title: "创新工场人民币二期",
          percent: "-3.57",
          num: "001507",
          type: "货币型",
          time: "近一月"
        },
        {
          start: false,
          title: "创新工场人民币一期",
          percent: "6.73",
          num: "001508",
          type: "股票型",
          time: "近一周"
        },
        {
          start: false,
          title: "创新工场人民币三期",
          percent: "-9.97",
          num: "001506",
          type: "股票型",
          time: "近一年"
        },
        {
          start: false,
          title: "创新工场人民币三期",
          percent: "3.57",
          num: "001507",
          type: "货币型",
          time: "近一月"
        },
        {
          start: true,
          title: "创新工场人民币三期",
          percent: "6.73",
          num: "001508",
          type: "股票型",
          time: "近一周"
        },
        {
          start: false,
          title: "创新工场人民币三期",
          percent: "9.97",
          num: "001506",
          type: "股票型",
          time: "近一年"
        },
        {
          start: false,
          title: "创新工场人民币三期",
          percent: "3.57",
          num: "001507",
          type: "货币型",
          time: "近一月"
        },
        {
          start: true,
          title: "创新工场人民币三期",
          percent: "-6.73",
          num: "001508",
          type: "股票型",
          time: "近一周"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.theme-info {
  height: 400px;
  background: url("../../assets/img/card_bg@2x.png") no-repeat left center;
  background-size: 100% 100%;
  margin-bottom:30px;
  .theme-top {
    margin: 0 32px;
    background:#fff;
    border-radius:10px 10px 0 0;
    font-size:28px;
    line-height:40px;
    color:#999;
    padding:40px;
    .theme-title {
    }
  }
}
</style>
