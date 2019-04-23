<template>
  <div class="homeWrap">
    <x-header :left-options="{backText: ''}">公募基金</x-header>
    <div class="topWrap">
      <div class="searchWrap">
        <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="search.results"
          v-model="search.value"
          position="absolute"
          auto-scroll-to-top
          top="46px"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"
        ></search>
      </div>
      <div class="recommendWrap boxBg">
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item
            v-for="(item,index) in recommend"
            :key="index"
            :label="item.title"
            :link="item.url"
          >
            <img slot="icon" :src="item.imgUrl">
          </grid-item>
        </grid>
      </div>
    </div>
    <div class="sharesIndexWrap boxBg">
      <marquee :item-height="50">
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">
          <ul class="sharesIndexList">
            <li>上证指数</li>
            <li>2997.10</li>
            <li>+32.34</li>
            <li>+2.23%</li>
          </ul>
        </marquee-item>
      </marquee>
    </div>

    <div class="recommendHotWrap">
      <panel :title="recommendHot.title">
        <product-list1 :list="recommendHot.list"></product-list1>
      </panel>
    </div>

    <swiper
      loop
      auto
      height="100px"
      :list="banner.baseList"
      :index="banner.index"
      @on-index-change="onIndexChange"
    ></swiper>

    <div class="marketWrap boxBg">
      <div class="imgWrap">
        <img src="../../assets/icon/label_market@2x.png" alt>
      </div>
      <div class="contentWrap">
        <ul>
          <li>聚沙成塔 看纯债基金如何领跑市场</li>
          <li>看纯债基金如何领跑市场市场市场市场</li>
        </ul>
      </div>
    </div>

    <panel :title="baseCamp.title">
      <product-list2 :list="baseCamp.list"></product-list2>
    </panel>
  </div>
</template>

<script>
import {
  XHeader,
  Search,
  Grid,
  GridItem,
  Marquee,
  MarqueeItem,
  Swiper
} from "vux";
import Panel from "../../components/common/panel";
import ProductList1 from "../../components/product/product-list1";
import ProductList2 from "../../components/product/product-list2";

export default {
  name: "home",
  data() {
    return {
      search: {
        results: [],
        value: "test"
      },
      recommend: [
        {
          title: "基金排行",
          imgUrl: require("../../assets/icon/icon_excellent@2x.png"),
          url: "/home"
        },
        {
          title: "普信优选",
          imgUrl: require("../../assets/icon/icon_select@2x.png"),
          url: "/home"
        },
        {
          title: "主题推荐",
          imgUrl: require("../../assets/icon/icon_seniority@2x.png"),
          url: "/home"
        },
        {
          title: "自选基金",
          imgUrl: require("../../assets/icon/icon_theme@2x.png"),
          url: "/home"
        }
      ],
      recommendHot: {
        title: "热门推荐",
        list: [
          {
            title: "紧跟中证500增强效果明显多次获得",
            tags: ["诺安双利"],
            quarter: "2.4亿份",
            year: "32.12%"
          },
          {
            title: "紧跟中证500增强效果明显多次获得",
            tags: ["诺安双利"],
            quarter: "2.4亿份",
            year: "32.12%"
          },
          {
            title: "紧跟中证500增强效果明显多次获得",
            tags: ["诺安双利"],
            quarter: "2.4亿份",
            year: "32.12%"
          }
        ]
      },
      panel: {
        list: [
          {
            src: "",
            fallbackSrc: "",
            title: "标题一",
            desc:
              "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
            url: "/home"
          },
          {
            src: "",
            title: "标题二",
            desc:
              "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
            url: {
              path: "/home",
              replace: false
            },
            meta: {
              source: "来源信息",
              date: "时间",
              other: "其他信息"
            }
          }
        ]
      },
      banner: {
        index: 0,
        baseList: [
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
            title: "送你一朵fua"
          },
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
            title: "送你一辆车"
          },
          {
            url: "javascript:",
            img: "https://static.vux.li/demo/5.jpg", // 404
            title: "送你一次旅行",
            fallbackImg:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
          }
        ],
        demo01_index: 0
      },
      baseCamp: {
        title: "基结营",
        list: [{
          rate: "2.6",
          intro: "领跑各行业板块 收益冠军",
          tags: ["大消费"]
        },{
          rate: "2.6",
          intro: "领跑各行业板块 收益冠军",
          tags: ["大消费"]
        },{
          rate: "2.6",
          intro: "领跑各行业板块 收益冠军",
          tags: ["大消费"]
        }]
      }
    };
  },
  components: {
    XHeader,
    Search,
    Grid,
    GridItem,
    Marquee,
    MarqueeItem,
    Swiper,

    Panel,
    ProductList1,
    ProductList2,
  },
  mounted() {},
  methods: {
    //swiper
    onIndexChange(index) {
      this.demo06_index = index;
    },
    //swiper end
    onClick(i) {
      console.log(i);
    },
    onImgError(item, $event) {
      console.log(item, $event);
    },
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      console.log("on-change", val);
      this.search.results = val ? getResult(this.search.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      console.log("on cancel");
    },
    jump() {
      this.$router.push("/netWorth");
    },
    jumpto() {
      this.$router.push("/historicalGains");
    }
  }
};
</script>

<style lang="less">
@import "../../common/style/mixin.less";
.homeWrap {
  .topWrap {
    margin-bottom: 62px;
    background: url("../../assets/img/img_bg@2x.png") no-repeat center center;
    .searchWrap {
      height: 90px;
      .vux-search-fixed {
        background-color: transparent;
      }
      .weui-search-bar,
      .weui-search-bar_focusing {
        padding: 30px 32px 0;
        background-color: transparent;
        &::before {
          border: 0;
        }
        &::after {
          border: 0;
        }
      }

      .weui-search-bar__form {
        border-radius: 32px;
        overflow: hidden;
        .weui-search-bar__box {
          padding-left: 68px;
          padding-right: 68px;
          .weui-icon-search {
            left: 20px;
            .ct();

            &:before {
              font-size: 28px;
            }
          }
          .weui-search-bar__input {
            height: 60px;
            line-height: 60px;
          }
          .weui-icon-clear {
            .ct();
            &:before {
              font-size: 26px;
            }
          }
        }
        .weui-search-bar__label {
          line-height: 60px;
          .weui-icon-search {
            &::before {
              font-size: 28px;
            }
          }
          span {
            font-size: 24px;
            color: #ccc;
          }
        }
      }
      .weui-search-bar__cancel-btn {
        margin-left: 24px;
        font-size: 24px;
        color: #cccccc;
        line-height: 60px;
      }
    }
    .recommendWrap {
      position: relative;
      bottom: -42px;
      margin: 0 32px;
      border-radius: 8px;
      .weui-grids {
        padding: 15px;
        border-radius: 8px;
        .flex();
        .weui-grid {
          &::after {
            border: 0;
          }
          .weui-grid__icon {
            width: 80px !important;
            height: 80px !important;
          }
          .weui-grid__label {
            padding-top: 15px;
            font-size: 24px;
            color: #666;
          }
        }
      }
    }
  }
  .sharesIndexWrap {
    margin-bottom: 20px;
    .sharesIndexList {
      padding: 0 32px;
      .flex();
      li {
        line-height: 50Px;
      }
    }
  }

  .recommendHotWrap {
    margin-bottom: 20px;
    .recommendHotList {
      > .item {
        padding: 30px 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        text-align: left;

        &:last-child {
          margin-bottom: 0;
        }

        .title {
          padding-left: 54px;
          font-size: 32px;
          color: #333;
          font-weight: normal;
          .ellipsis(1);
          &.tag {
            background: url("../../assets/icon/label_hot@2x.png") no-repeat left
              center/44px auto;
          }
        }

        ul {
          margin: 24px 0;
          padding-left: 54px;
          .flex();
          .tag {
            padding: 4px 10px;
            font-size: 24px;
            border-radius: 4px;
            color: #b48856;
          }
        }

        .container {
          padding-left: 54px;
          .flex(space-between);
          align-items: flex-end;
          .item {
            .flex_num(1);
            .ellipsis(1);
            strong {
              font-weight: normal;
              font-size: 36px;
            }
            .description,
            &.right > a {
              margin-top: 10px;
              font-size: 24px;
              color: #999999;
            }
            &.left {
              strong {
                color: #db2a36;
              }
            }
            &.center {
              padding: 0 30px;
            }
          }
        }
      }
    }
  }

  .marketWrap {
    margin: 20px auto;
    padding: 30px 32px;
    font-size: 28px;
    color: #666;
    .flex(flex-start);
    align-items: center;
    .imgWrap {
      img {
        width: 64px;
      }
    }
    .contentWrap {
      padding-left: 40px;
      text-align: left;
      overflow: hidden;
      
      li{
        position: relative;
        padding-left: 28px;
        .ellipsis(1);
        &:before{
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #CCCCCC;
          transform: translateY(-50%);
        }
      }
    }
  }
  
}
</style>
