<template>
  <ul class="recommendHotList">
    <li class="item subBg" v-for="(item, index) in list" :key="index">
      <h3 class="title tag">{{item.title}}</h3>
      <ul>
        <li class="tag mainColor minorBg" v-for="(tag, index) in item.tags" :key="index">{{tag}}</li>
      </ul>
      <div class="container">
        <div class="left item">
          <strong>{{item.quarter}}</strong>
          <p class="description">近一季度份额增长</p>
        </div>
        <div class="center item">
          <strong>{{item.year}}</strong>
          <p class="description">近一年</p>
        </div>
        <div class="right item">
          <router-link to="/">查看详情</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin.less";
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
</style>

